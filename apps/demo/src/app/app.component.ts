import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  ContextMenuDirective,
  ContextMenuOpenEvent,
} from '@perfectmemory/ngx-contextmenu';

@Component({
  selector: 'demo-context-menu-demo',
  styles: [
    `
      .dashboardContainer {
        width: 100%;
        height: 100%;
        position: fixed;
      }

      .componentsContainer {
        position: fixed;
        bottom: 0;
        top: 100px;
        width: 100%;
      }

      .componentContainer {
        overflow: auto;
        position: absolute;
      }
    `,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent {
  @Input()
  public menuClass = '';

  @Input()
  public disabled = false;

  @Input()
  public dir: 'ltr' | 'rtl' | undefined;

  @Input()
  public value: unknown = 'a user defined item';

  @Input()
  public demoMode: 'simple' | 'form' = 'simple';

  @Input()
  public programmaticOpen = false;

  @Output()
  public onOpen = new EventEmitter<ContextMenuOpenEvent<unknown>>();

  @Output()
  public onClose = new EventEmitter<'void'>();

  @Output()
  public onMenuItemExecuted = new EventEmitter<string>();

  /**
   * @internal
   */
  @ViewChild(ContextMenuDirective)
  public contextMenuDirective?: ContextMenuDirective<void>;

  /**
   * @internal
   */
  public execute(text: string, value: any) {
    console.log(value);
    this.onMenuItemExecuted.next(`${text}: ${value.value}`);
  }

  /**
   * @internal
   */
  public open(value: ContextMenuOpenEvent<unknown>) {
    this.onOpen.next(value);
  }

  /**
   * @internal
   */
  public close() {
    this.onClose.next('void');
  }
}
