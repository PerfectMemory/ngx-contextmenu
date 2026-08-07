import { OverlayModule } from '@angular/cdk/overlay';
import { createHostFactory, SpectatorHost } from '@openng/spectator/jest';
import { ContextMenuContentComponent } from '../../components/context-menu-content/context-menu-content.component';
import { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { ContextMenuItemDirective } from '../../directives/context-menu-item/context-menu-item.directive';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';
import { ContextMenuContentItemDirective } from '../context-menu-content-item/context-menu-content-item.directive';
import { ContextMenuDirective } from './context-menu.directive';

describe('Integ: ContextMenuDirective', () => {
  let host: SpectatorHost<ContextMenuDirective<unknown>>;

  const createHost = createHostFactory({
    component: ContextMenuDirective,
    declarations: [
      ContextMenuItemDirective,
      ContextMenuComponent,
      ContextMenuContentComponent,
      ContextMenuContentItemDirective,
    ],
    providers: [ContextMenuService],
    imports: [OverlayModule],
    shallow: false,
    detectChanges: true,
  });

  afterEach(() => {
    host.fixture.destroy();
  });

  it('should render', () => {
    host = createHost('<div contextMenu></div>');
    expect(host.queryHost(ContextMenuDirective)).toExist();
  });

  describe('with menu items', () => {
    it('should open context menu', () => {
      host = createHost(
        `
        <div [contextMenu]="static" tabindex="1" [contextMenuValue]="item">Right click</div>
        <context-menu #static>
          <ng-template contextMenuItem [visible]="true" [disabled]="true">A</ng-template>
          <ng-template contextMenuItem [visible]="false"                 >B</ng-template>
          <ng-template contextMenuItem [divider]="true"                  >C</ng-template>
          <ng-template contextMenuItem [visible]="true" [disabled]="false" [subMenu]="subMenu">D</ng-template>
          <context-menu #subMenu>
            <ng-template contextMenuItem [visible]="true">DD</ng-template>
          </context-menu>
        </context-menu>
    `,
        { hostProps: { item: { id: 'item-id' } } }
      );
      host.dispatchMouseEvent(host.debugElement, 'contextmenu');

      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content',
          {
            root: true,
          }
        )
      ).toExist();
      expect(
        host.queryAll(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(1)',
          {
            root: true,
          }
        )
      ).toHaveAttribute('disabled', 'disabled');
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(2)',
          {
            root: true,
          }
        )
      ).toHaveAttribute('role', 'separator');
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(3)',
          {
            root: true,
          }
        )
      ).toHaveAttribute('aria-haspopup');
    });

    it('should navigate the menu on arrow keys', () => {
      host = createHost(
        `
        <div [contextMenu]="static" [contextMenuValue]="item">Right click</div>
        <context-menu #static>
          <ng-template contextMenuItem [visible]="true"                    >A</ng-template>
          <ng-template contextMenuItem [visible]="true"                    >B</ng-template>
          <ng-template contextMenuItem [divider]="true"                    >C</ng-template>
          <ng-template contextMenuItem [visible]="true" [subMenu]="subMenu">D</ng-template>
          <context-menu #subMenu>
            <ng-template contextMenuItem [visible]="true"><span class="submenu-item">DD</span></ng-template>
          </context-menu>
        </context-menu>
    `,
        { hostProps: { item: { id: 'item-id' } } }
      );
      host.dispatchMouseEvent(host.debugElement, 'contextmenu');
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content',
          {
            root: true,
          }
        )
      ).toEqual(document.activeElement);
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'ArrowDown',
          keyCode: 40,
        }
      );
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(1)',
          {
            root: true,
          }
        )
      ).toEqual(document.activeElement);
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'ArrowDown',
          keyCode: 40,
        }
      );
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(2)',
          {
            root: true,
          }
        )
      ).toEqual(document.activeElement);
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'ArrowDown',
          keyCode: 40,
        }
      );
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(4)',
          {
            root: true,
          }
        )
      ).toEqual(document.activeElement);
      expect(
        host.query(
          '.cdk-overlay-container .cdk-overlay-connected-position-bounding-box:nth-child(2)',
          {
            root: true,
          }
        )
      ).not.toExist();
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'ArrowRight',
          keyCode: 39,
        }
      );
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'ArrowDown',
          keyCode: 40,
        }
      );
      expect(
        host.query('.submenu-item', {
          root: true,
        })?.parentElement
      ).toEqual(document.activeElement as HTMLElement);
    });
  });

  describe('programmatically open and close menu', () => {
    it('should open the menu when clicking and close when typing z', () => {
      host = createHost(
        `
        <div
          #ngxContextMenu="ngxContextMenu"
          [contextMenu]="static"
          [contextMenuValue]="item"
          (click)="ngxContextMenu.open($event)"
          (window:keydown.y)="ngxContextMenu.open()"
          (window:keydown.z)="ngxContextMenu.close()">Right click</div>
        <context-menu #static>
          <ng-template contextMenuItem [visible]="true"                    >A</ng-template>
          <ng-template contextMenuItem [visible]="true"                    >B</ng-template>
          <ng-template contextMenuItem [divider]="true"                    >C</ng-template>
          <ng-template contextMenuItem [visible]="true" [subMenu]="subMenu">D</ng-template>
          <context-menu #subMenu>
            <ng-template contextMenuItem [visible]="true">DD</ng-template>
          </context-menu>
        </context-menu>
    `,
        { hostProps: { item: { id: 'item-id' } } }
      );
      host.dispatchMouseEvent(host.debugElement, 'click');
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'ArrowDown',
          keyCode: 40,
        }
      );
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(1)',
          {
            root: true,
          }
        )
      ).toEqual(document.activeElement);
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'z',
          keyCode: 90,
        }
      );
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(1)',
          {
            root: true,
          }
        )
      ).not.toEqual(document.activeElement);
    });

    it('should open the menu when typing y and close when typing z', () => {
      host = createHost(
        `
        <div
          #ngxContextMenu="ngxContextMenu"
          [contextMenu]="static"
          [contextMenuValue]="item"
          (click)="ngxContextMenu.open($event)"
          (window:keydown.y)="ngxContextMenu.open()"
          (window:keydown.z)="ngxContextMenu.close()">Right click</div>
        <context-menu #static>
          <ng-template contextMenuItem [visible]="true"                    >A</ng-template>
          <ng-template contextMenuItem [visible]="true"                    >B</ng-template>
          <ng-template contextMenuItem [divider]="true"                    >C</ng-template>
          <ng-template contextMenuItem [visible]="true" [subMenu]="subMenu">D</ng-template>
          <context-menu #subMenu>
            <ng-template contextMenuItem [visible]="true">DD</ng-template>
          </context-menu>
        </context-menu>
    `,
        { hostProps: { item: { id: 'item-id' } } }
      );
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'y',
          keyCode: 90,
        }
      );
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'ArrowDown',
          keyCode: 40,
        }
      );
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(1)',
          {
            root: true,
          }
        )
      ).toEqual(document.activeElement);
      host.dispatchKeyboardEvent(
        document.activeElement as HTMLElement,
        'keydown',
        {
          key: 'z',
          keyCode: 90,
        }
      );
      expect(
        host.query(
          '.cdk-overlay-container .ngx-contextmenu-overlay context-menu-content > *:nth-child(1)',
          {
            root: true,
          }
        )
      ).not.toEqual(document.activeElement);
    });
  });
});
