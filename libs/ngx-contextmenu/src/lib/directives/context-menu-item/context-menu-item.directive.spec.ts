import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContextMenuItemDirective } from './context-menu-item.directive';

@Component({
  template: '<div contextMenuItem></div>',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
class TestHostComponent {}

describe('Directive: ContextMenuItemDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: ContextMenuItemDirective<unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContextMenuItemDirective, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    const directiveEl = fixture.debugElement.query(
      By.directive(ContextMenuItemDirective)
    );
    directive = directiveEl.injector.get(ContextMenuItemDirective);
  });

  describe('#new', () => {
    it('should create an instance', () => {
      expect(directive).toBeTruthy();
    });
  });

  describe('#disabled', () => {
    beforeEach(() => {
      directive.passive = false;
      directive.divider = false;
      directive.disabled = false;
    });

    it('should be false', () => {
      expect(directive.disabled).toEqual(false);
    });

    it('should be true if directive is passive', () => {
      directive.passive = true;
      expect(directive.disabled).toEqual(true);
    });

    it('should be true if directive is a divider', () => {
      directive.divider = true;
      expect(directive.disabled).toEqual(true);
    });

    it('should be true if directive is disabled', () => {
      directive.disabled = true;
      expect(directive.disabled).toEqual(true);
    });

    it('should be false if enabled evaluate to false', () => {
      directive.disabled = () => false;
      expect(directive.disabled).toEqual(false);
    });
  });

  describe('#triggerExecute', () => {
    let subscriber: jest.Mock;

    beforeEach(() => {
      subscriber = jest.fn();
      directive.execute.subscribe(subscriber);
    });

    it('should emit on execute if the result of the evaluation of enabled is truthy', () => {
      const value = { id: 'item' };
      directive.disabled = () => false;
      const event = new MouseEvent('click');
      directive.triggerExecute(event, value);
      expect(subscriber).toHaveBeenCalledWith({ event, value });
    });

    it('should emit on execute if enabled is truthy', () => {
      const value = { id: 'item' };
      directive.disabled = false;
      const event = new MouseEvent('click');
      directive.triggerExecute(event, value);
      expect(subscriber).toHaveBeenCalledWith({ event, value });
    });

    it('should not emit on execute if enabled is falsy', () => {
      const value = { id: 'item' };
      directive.disabled = true;
      const event = new MouseEvent('click');
      directive.triggerExecute(event, value);
      expect(subscriber).not.toHaveBeenCalled();
    });

    it('should not emit on execute if the result of the evaluation of enabled is falsy', () => {
      const value = { id: 'item' };
      directive.disabled = () => true;
      const event = new MouseEvent('click');
      directive.triggerExecute(event, value);
      expect(subscriber).not.toHaveBeenCalled();
    });
  });
});
