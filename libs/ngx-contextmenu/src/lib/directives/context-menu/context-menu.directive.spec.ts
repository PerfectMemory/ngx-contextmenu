import { OverlayModule } from '@angular/cdk/overlay';
import { Component, DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContextMenuContentComponent } from '../../components/context-menu-content/context-menu-content.component';
import { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { ContextMenuOverlaysService } from '../../services/context-menu-overlays/context-menu-overlays.service';
import { ContextMenuDirective } from './context-menu.directive';

@Component({
  template: '<div contextMenu></div>',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
class TestHostComponent {}

describe('Directive: ContextMenuDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: ContextMenuDirective<unknown>;
  let directiveEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayModule],
      declarations: [
        ContextMenuDirective,
        ContextMenuContentComponent,
        TestHostComponent,
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    directiveEl = fixture.debugElement.query(
      By.directive(ContextMenuDirective)
    );
    directive = directiveEl.injector.get(ContextMenuDirective);
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('#new', () => {
    it('should create an instance', () => {
      expect(directive).toBeTruthy();
    });
  });

  describe('#onContextMenu', () => {
    let contextMenu: ContextMenuComponent<unknown>;
    beforeEach(() => {
      contextMenu =
        TestBed.createComponent(ContextMenuComponent).componentInstance;

      jest.spyOn(contextMenu, 'show');
    });

    it('should close all context menus', () => {
      const contextMenuOverlaysService = TestBed.inject(
        ContextMenuOverlaysService
      );

      jest.spyOn(contextMenuOverlaysService, 'closeAll');
      directive.contextMenuValue = { id: 'a' };
      const event = new MouseEvent('contextmenu');
      directive.onContextMenu(event);
      expect(contextMenuOverlaysService.closeAll).not.toHaveBeenCalled();
    });

    it('should show attached context menu', () => {
      directive.contextMenu = contextMenu;
      directive.contextMenuValue = { id: 'a' };
      const event = new MouseEvent('contextmenu', { clientX: 42, clientY: 34 });
      directive.onContextMenu(event);
      expect(directive.contextMenu.show).toHaveBeenCalledWith({
        anchoredTo: 'position',
        x: 42,
        y: 34,
        value: directive.contextMenuValue,
      });
    });

    it('should prevent default and stop propagation', () => {
      directive.contextMenu = contextMenu;
      directive.contextMenuValue = { id: 'a' };
      const event = new MouseEvent('contextmenu', { clientX: 42, clientY: 34 });
      jest.spyOn(event, 'preventDefault');
      jest.spyOn(event, 'stopPropagation');
      directive.onContextMenu(event);
      expect(event.preventDefault).toHaveBeenCalledWith();
      expect(event.stopPropagation).toHaveBeenCalledWith();
    });

    it('should not show attached context menu if it is disabled', () => {
      directive.contextMenu = contextMenu;
      directive.contextMenu.disabled = true;
      directive.contextMenuValue = { id: 'a' };
      const event = new MouseEvent('contextmenu');
      directive.onContextMenu(event);
      expect(directive.contextMenu.show).not.toHaveBeenCalled();
    });

    it('should show nothing if not context menu is attached', () => {
      directive.contextMenuValue = { id: 'a' };
      const event = new MouseEvent('contextmenu');
      directive.onContextMenu(event);
      expect(contextMenu.show).not.toHaveBeenCalled();
    });
  });

  describe('#open', () => {
    describe('when using mouse event', () => {
      let contextMenu: ContextMenuComponent<unknown>;
      beforeEach(() => {
        contextMenu =
          TestBed.createComponent(ContextMenuComponent).componentInstance;

        jest.spyOn(contextMenu, 'show');
      });

      it('should show attached context menu', () => {
        directive.contextMenu = contextMenu;
        directive.contextMenuValue = { id: 'a' };
        const event = new MouseEvent('contextmenu', {
          clientX: 42,
          clientY: 34,
        });
        directive.open(event);
        expect(directive.contextMenu.show).toHaveBeenCalledWith({
          anchoredTo: 'position',
          x: 42,
          y: 34,
          value: directive.contextMenuValue,
        });
      });

      it('should not show attached context menu if it is disabled', () => {
        directive.contextMenu = contextMenu;
        directive.contextMenu.disabled = true;
        directive.contextMenuValue = { id: 'a' };
        const event = new MouseEvent('contextmenu');
        directive.open(event);
        expect(directive.contextMenu.show).not.toHaveBeenCalled();
      });

      it('should show nothing if not context menu is attached', () => {
        directive.contextMenuValue = { id: 'a' };
        const event = new MouseEvent('contextmenu');
        directive.open(event);
        expect(contextMenu.show).not.toHaveBeenCalled();
      });
    });

    describe('when using no event', () => {
      let contextMenu: ContextMenuComponent<unknown>;
      beforeEach(() => {
        contextMenu =
          TestBed.createComponent(ContextMenuComponent).componentInstance;

        jest.spyOn(contextMenu, 'show');
      });

      it('should show attached context menu', () => {
        directive.contextMenu = contextMenu;
        jest
          .spyOn(
            directiveEl.nativeElement as HTMLElement,
            'getBoundingClientRect'
          )
          .mockReturnValue({
            x: 100,
            y: 200,
            height: 20,
          } as DOMRect);
        directive.contextMenuValue = { id: 'a' };
        directive.open();
        expect(contextMenu.show).toHaveBeenCalledWith({
          anchoredTo: 'position',
          x: 100,
          y: 220,
          value: directive.contextMenuValue,
        });
      });

      it('should not show attached context menu if it is disabled', () => {
        directive.contextMenu = contextMenu;
        directive.contextMenu.disabled = true;
        directive.contextMenuValue = { id: 'a' };
        directive.open();
        expect(contextMenu.show).not.toHaveBeenCalled();
      });

      it('should show nothing if not context menu is attached', () => {
        directive.contextMenuValue = { id: 'a' };
        directive.open();
        expect(contextMenu.show).not.toHaveBeenCalled();
      });
    });
  });

  describe('#close', () => {
    it('should close all context menu', () => {
      directive.contextMenu =
        TestBed.createComponent(ContextMenuComponent).componentInstance;
      jest.spyOn(directive.contextMenu, 'hide');
      directive.close();
      expect(directive.contextMenu.hide).toHaveBeenCalledWith();
    });
  });
});
