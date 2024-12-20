import {
  Directive,
  EventEmitter,
  Input,
  Optional,
  Output,
  TemplateRef,
} from '@angular/core';
import type { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { evaluateIfFunction } from '../../helper/evaluate';

@Directive({
    selector: '[contextMenuItem]',
    standalone: false
})
export class ContextMenuItemDirective<T> {
  /**
   * Optional subMenu component ref
   */
  @Input()
  public subMenu?: ContextMenuComponent<T>;

  /**
   * True to make this menu item a divider
   */
  @Input()
  public divider = false;

  /**
   * Is this menu item disabled
   */
  @Input()
  public set disabled(disabled: boolean | ((value?: T) => boolean)) {
    this.#disabled = disabled;
  }

  public get disabled(): boolean {
    return (
      this.passive ||
      this.divider ||
      evaluateIfFunction(this.#disabled, this.value)
    );
  }

  /**
   * Is this menu item passive (for title)
   */
  @Input()
  public passive = false;

  /**
   * Is this menu item visible
   */
  @Input()
  public visible: boolean | ((value?: T) => boolean) = true;

  /**
   * Emits event and item
   */
  @Output()
  public execute = new EventEmitter<{
    event: MouseEvent | KeyboardEvent;
    value?: T;
  }>();

  /**
   * @internal
   */
  public value?: T;

  #disabled: boolean | ((value?: T) => boolean) = false;

  constructor(
    @Optional()
    public template: TemplateRef<{ $implicit?: T }>
  ) {}

  /**
   * @internal
   */
  public triggerExecute(event: MouseEvent | KeyboardEvent, value?: T): void {
    if (evaluateIfFunction(this.#disabled, value)) {
      return;
    }

    this.execute.emit({ event, value });
  }
}
