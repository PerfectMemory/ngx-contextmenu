import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayRef,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ContextMenuItemDirective } from '../../directives/context-menu-item/context-menu-item.directive';
import { evaluateIfFunction } from '../../helper/evaluate';
import { ContextMenuOverlaysService } from '../../services/context-menu-overlays/context-menu-overlays.service';
import { ContextMenuContentComponent } from '../context-menu-content/context-menu-content.component';
import {
  getPositionsToAnchorElement,
  getPositionsToXY,
} from './context-menu.component.helpers';
import {
  ContextMenuOpenEvent,
  IContextMenuContext,
} from './context-menu.component.interface';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'context-menu',
  template: '',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ContextMenuComponent<T> implements OnInit, OnDestroy {
  /**
   * A CSS class to apply to the context menu overlay, ideal for theming and custom styling
   */
  @Input()
  public menuClass = '';

  /**
   * Disable the whole context menu
   */
  @Input()
  public disabled = false;

  /**
   * Whether the menu is oriented to the right (default: `ltr`) or to the right (`rtl`)
   */
  @Input()
  public dir: 'ltr' | 'rtl' | undefined;

  /**
   * Emit when the menu is opened
   */
  @Output()
  public open = new EventEmitter<ContextMenuOpenEvent<T>>();

  /**
   * Emit when the menu is closed
   */
  @Output()
  public close = new EventEmitter<void>();

  /**
   * The menu item directives defined inside the component
   */
  @ContentChildren(ContextMenuItemDirective)
  public menuItems?: QueryList<ContextMenuItemDirective<T>>;

  /**
   * Returns true if the context menu is opened, false otherwise
   */
  public get isOpen(): boolean {
    return this.#isOpen;
  }

  /**
   * @internal
   */
  public visibleMenuItems: ContextMenuItemDirective<T>[] = [];
  /**
   * @internal
   */
  public value?: T;

  private subscriptions: Subscription = new Subscription();
  private overlayRef?: OverlayRef;
  private contextMenuContentComponent?: ContextMenuContentComponent<T>;
  #isOpen = false;

  constructor(
    private overlay: Overlay,
    private scrollStrategy: ScrollStrategyOptions,
    private contextMenuOverlaysService: ContextMenuOverlaysService
  ) {}

  /**
   * @internal
   */
  public ngOnInit(): void {
    const subscription = this.contextMenuOverlaysService.allClosed.subscribe(
      () => {
        this.#isOpen = false;
      }
    );

    this.subscriptions.add(subscription);
  }

  /**
   * @internal
   */
  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * @internal
   */
  public show(event: ContextMenuOpenEvent<T>): void {
    if (this.disabled) {
      return;
    }

    this.value = event.value;
    this.setVisibleMenuItems();

    this.openContextMenu({
      ...event,
      menuItemDirectives: this.visibleMenuItems,
      menuClass: this.menuClass,
      dir: this.dir,
    });

    this.open.next(event);
  }

  /**
   * @internal
   */
  public hide(): void {
    this.contextMenuContentComponent?.menuDirectives.forEach(
      (menuDirective) => {
        menuDirective.subMenu?.hide();
      }
    );
    this.overlayRef?.detach();
    this.overlayRef?.dispose();
    this.#isOpen = false;
  }

  /**
   * @internal
   */
  public openContextMenu(context: IContextMenuContext<T>) {
    let positionStrategy: FlexibleConnectedPositionStrategy;

    if (context.anchoredTo === 'position') {
      positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo({
          x: context.x,
          y: context.y,
        })
        .withPositions(getPositionsToXY(context.dir));
    } else {
      const { anchorElement, parentContextMenu } = context;
      positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(new ElementRef(anchorElement))
        .withPositions(getPositionsToAnchorElement(parentContextMenu.dir));
    }

    this.overlayRef = this.overlay.create({
      positionStrategy,
      panelClass: 'ngx-contextmenu-overlay',
      scrollStrategy: this.scrollStrategy.close(),
    });
    this.contextMenuOverlaysService.push(this.overlayRef);
    this.attachContextMenu(context);

    this.#isOpen = true;
  }

  private attachContextMenu(context: IContextMenuContext<T>): void {
    const { value, menuItemDirectives } = context;
    const contextMenuContentRef = this.overlayRef?.attach(
      new ComponentPortal<ContextMenuContentComponent<T>>(
        ContextMenuContentComponent
      )
    );
    const contextMenuContentComponent = contextMenuContentRef?.instance;

    if (!contextMenuContentComponent) {
      return;
    }

    this.contextMenuContentComponent = contextMenuContentComponent;

    contextMenuContentComponent.value = value;
    contextMenuContentComponent.menuDirectives = menuItemDirectives;
    contextMenuContentComponent.menuClass = this.getMenuClass(context);
    contextMenuContentComponent.dir = this.getDir(context);

    const closeSubscription = contextMenuContentComponent.close.subscribe(
      () => {
        this.overlayRef?.detach();
        this.overlayRef?.dispose();
      }
    );

    const executeSubscription = contextMenuContentComponent.execute.subscribe(
      () => {
        this.contextMenuOverlaysService.closeAll();
      }
    );

    contextMenuContentRef.onDestroy(() => {
      this.close.emit();
      closeSubscription.unsubscribe();
      executeSubscription.unsubscribe();
    });
    contextMenuContentRef.changeDetectorRef.detectChanges();
  }

  private getMenuClass(event: IContextMenuContext<T>): string {
    return (
      event.menuClass ||
      (event.anchoredTo === 'element' && event?.parentContextMenu?.menuClass) ||
      ''
    );
  }

  private getDir(event: IContextMenuContext<T>): 'ltr' | 'rtl' | undefined {
    return (
      event.dir ||
      (event.anchoredTo === 'element' && event?.parentContextMenu?.dir) ||
      undefined
    );
  }

  private isMenuItemVisible(menuItem: ContextMenuItemDirective<T>): boolean {
    return evaluateIfFunction(menuItem.visible, this.value);
  }

  private setVisibleMenuItems(): void {
    this.visibleMenuItems =
      this.menuItems?.filter((menuItem) => this.isMenuItemVisible(menuItem)) ??
      [];
  }
}
