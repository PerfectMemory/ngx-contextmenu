import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { ContextMenuOpenEvent } from '../../lib/components/context-menu/context-menu.component.interface';
import { ContextMenuDirective } from '../../lib/directives/context-menu/context-menu.directive';
import { ContextMenuService } from '../../lib/services/context-menu/context-menu.service';

@Component({
  selector: 'storybook-context-menu',
  templateUrl: 'ngx-contextmenu.component.html',
  styleUrls: ['./ngx-contextmenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export default class StorybookContextMenuComponent {
  @Input()
  public menuClass = '';

  @Input()
  public disabled = false;

  @Input()
  public dir: 'ltr' | 'rtl' | undefined;

  @Input()
  public value: string = 'a user defined item';

  @Input()
  public demoMode: 'simple' | 'form' = 'simple';

  @Input()
  public programmaticOpen = false;

  @Output()
  public contextMenuOpened = new EventEmitter<ContextMenuOpenEvent<unknown>>();

  @Output()
  public contextMenuClosed = new EventEmitter<'void'>();

  @Output()
  public menuItemExecuted = new EventEmitter<string>();

  /**
   * @internal
   */
  @ViewChild(ContextMenuDirective)
  public contextMenuDirective?: ContextMenuDirective<void>;

  constructor(public contextMenuService: ContextMenuService<unknown>) {}

  /**
   * @internal
   */
  public execute(text: string, value: ContextMenuOpenEvent<string>) {
    console.log(value);
    this.menuItemExecuted.next(`${text}: ${value.value}`);
  }

  /**
   * @internal
   */
  public openContextMenu(value: ContextMenuOpenEvent<unknown>) {
    this.contextMenuOpened.next(value);
  }

  /**
   * @internal
   */
  public closeContextMenu() {
    this.contextMenuClosed.next('void');
  }
}
