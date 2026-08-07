import { Component, DebugElement, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContextMenuOverlaysService } from '../../services/context-menu-overlays/context-menu-overlays.service';
import { ContextMenuItemDirective } from '../context-menu-item/context-menu-item.directive';
import { ContextMenuContentItemDirective } from './context-menu-content-item.directive';

@Component({
  template: '<div [contextMenuContentItem]="contextMenuItem"></div>',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
class TestHostComponent {
  @Input()
  public contextMenuItem?: ContextMenuItemDirective<unknown>;
}

describe('Directive: ContextMenuContentItemDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: ContextMenuContentItemDirective<unknown>;
  let contextMenuItem: ContextMenuItemDirective<unknown>;
  let directiveDebugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContextMenuContentItemDirective,
        ContextMenuItemDirective,
        TestHostComponent,
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    directiveDebugElement = fixture.debugElement.query(
      By.directive(ContextMenuContentItemDirective)
    );
    directive = directiveDebugElement.injector.get(
      ContextMenuContentItemDirective
    );
    const contextMenuOverlaysService = TestBed.inject(
      ContextMenuOverlaysService
    );
    contextMenuItem = new ContextMenuItemDirective(
      {} as unknown as TemplateRef<{ $implicit?: unknown }>
    );

    fixture.componentInstance.contextMenuItem = contextMenuItem;
    fixture.detectChanges();
  });

  describe('#new', () => {
    it('should create an instance', () => {
      expect(directive).toBeTruthy();
    });
  });

  describe('#focus', () => {
    it('should focus nativeElement', () => {
      jest.spyOn(directiveDebugElement.nativeElement, 'focus');

      directive.focus();

      expect(directiveDebugElement.nativeElement.focus).toHaveBeenCalled();
    });

    it('should be true if directive is passive', () => {
      contextMenuItem.disabled = true;
      expect(directive.disabled).toEqual(true);
    });
  });

  describe('#disabled', () => {
    it('should be false', () => {
      expect(directive.disabled).toEqual(false);
    });

    it('should be true if directive is passive', () => {
      contextMenuItem.disabled = true;
      expect(directive.disabled).toEqual(true);
    });
  });

  describe('#nativeElement', () => {
    it('should return elementRef nativeElement', () => {
      expect(directive.nativeElement).toEqual(
        directiveDebugElement.nativeElement
      );
    });
  });
});
