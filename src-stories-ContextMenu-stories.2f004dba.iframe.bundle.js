(self.webpackChunk_perfectmemory_ngx_contextmenu_monorepo=self.webpackChunk_perfectmemory_ngx_contextmenu_monorepo||[]).push([[486],{"./libs/ngx-contextmenu/src/stories/ngx-contextmenu/ngx-contextmenu.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"label input,\nlabel span {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.menu-item-title {\n  text-transform: uppercase;\n}\n\n.ngx-context-menu-focusable:focus {\n  border-bottom: var(--ngx-contextmenu-focusable-border-bottom);\n  outline: none;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ngx-contextmenu/src/stories/ContextMenu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,default:()=>ContextMenu_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2022/overlay.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");var a11y=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");const evaluateIfFunction=(value,item)=>value instanceof Function?value(item):!!value;var _class;let ContextMenuContentItemDirective=((_class=class ContextMenuContentItemDirective{get nativeElement(){return this.elementRef.nativeElement}constructor(elementRef){this.elementRef=elementRef}focus(origin){this.elementRef.nativeElement.focus()}get disabled(){return evaluateIfFunction(this.contextMenuContentItem?.disabled,this.contextMenuContentItem?.value)}}).ctorParameters=()=>[{type:core.ElementRef}],_class.propDecorators={contextMenuContentItem:[{type:core.Input}]},_class);ContextMenuContentItemDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[contextMenuContentItem]",exportAs:"contextMenuContentItem",host:{class:"ngx-context-menu-item"}}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],ContextMenuContentItemDirective);let ContextMenuOverlaysService=class ContextMenuOverlaysService{constructor(){this.allClosed=new core.EventEmitter,this.stack=[]}push(value){this.stack.push(value)}closeAll(){this.stack.forEach((item=>this.dispose(item))),this.stack=[],this.allClosed.emit()}isEmpty(){return 0===this.stack.length}dispose(overlayRef){overlayRef.detach(),overlayRef.dispose()}};var context_menu_content_component_class;ContextMenuOverlaysService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],ContextMenuOverlaysService);const TESTING_WRAPPER={FocusKeyManager:a11y.Em};let ContextMenuContentComponent=((context_menu_content_component_class=class ContextMenuContentComponent{constructor(elementRef,document,contextMenuOverlaysService){this.elementRef=elementRef,this.document=document,this.contextMenuOverlaysService=contextMenuOverlaysService,this.menuDirectives=[],this.menuClass="",this.execute=new core.EventEmitter,this.close=new core.EventEmitter,this.role="menu",this.ariaOrientation="vertical",this.subscription=new Subscription.w0}ngAfterViewInit(){this.setupDirectives(),this.activeElement=this.document.activeElement,this.elementRef.nativeElement.focus()}ngOnDestroy(){this.activeElement?.focus(),this.subscription.unsubscribe(),this.focusKeyManager?.destroy()}onKeyArrowDownOrUp(event){this.focusKeyManager?.onKeydown(event)}onKeyArrowRight(event){this.openCloseActiveItemSubMenu("rtl"!==this.dir,event)}onKeyArrowLeft(event){this.openCloseActiveItemSubMenu("rtl"===this.dir,event)}onKeyEnterOrSpace(event){this.focusKeyManager?.activeItem&&this.onMenuItemSelect(this.focusKeyManager.activeItem,event)}onClickOrRightClick(event){"click"===event.type&&2===event.button||this.elementRef.nativeElement.contains(event.target)||this.contextMenuOverlaysService.closeAll()}hideSubMenus(){this.menuDirectives.forEach((menuDirective=>{menuDirective.subMenu?.hide()}))}stopEvent(event){event.stopPropagation()}isMenuItemDisabled(menuItem){return evaluateIfFunction(menuItem.disabled,this.value)}isMenuItemVisible(menuItem){return evaluateIfFunction(menuItem.contextMenuContentItem?.visible,this.value)}openSubMenu(subMenu,event){if(!subMenu)return;if(null===this.focusKeyManager?.activeItemIndex||!subMenu)return;const anchorContextMenuContentItem=this.contextMenuContentItems.toArray()[this.focusKeyManager?.activeItemIndex??0],anchorElement=anchorContextMenuContentItem&&anchorContextMenuContentItem.nativeElement;anchorElement&&event instanceof KeyboardEvent?subMenu.show({anchoredTo:"element",anchorElement,value:this.value,parentContextMenu:this}):event.currentTarget?subMenu.show({anchoredTo:"element",anchorElement:event.currentTarget,value:this.value,parentContextMenu:this}):subMenu.show({anchoredTo:"position",x:event.clientX,y:event.clientY,value:this.value})}onMenuItemSelect(menuContentItem,event){this.cancelEvent(event),this.openSubMenu(menuContentItem.contextMenuContentItem?.subMenu,event),menuContentItem.contextMenuContentItem?.subMenu||this.triggerExecute(menuContentItem,event)}triggerExecute(menuItem,event){menuItem.contextMenuContentItem?.triggerExecute(event,this.value)}setupDirectives(){this.menuDirectives.forEach((menuDirective=>{menuDirective.value=this.value,this.subscription.add(menuDirective.execute.subscribe((event=>{this.execute.emit({...event,menuDirective})})))})),this.focusKeyManager=new TESTING_WRAPPER.FocusKeyManager(this.contextMenuContentItems).withWrap()}openCloseActiveItemSubMenu(open,event){open?this.openActiveItemSubMenu(event):this.closeActiveItemSubMenu(event)}openActiveItemSubMenu(event){null!==this.focusKeyManager?.activeItemIndex&&(this.cancelEvent(event),this.focusKeyManager?.activeItem&&this.openSubMenu(this.focusKeyManager.activeItem?.contextMenuContentItem?.subMenu,event))}closeActiveItemSubMenu(event){null!==this.focusKeyManager?.activeItemIndex&&(this.close.emit(),this.cancelEvent(event))}cancelEvent(event){if(!event||!event.target)return;const target=event.target;["INPUT","TEXTAREA","SELECT"].includes(target.tagName)||target.isContentEditable||(event.preventDefault(),event.stopPropagation())}}).ctorParameters=()=>[{type:core.ElementRef},{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]},{type:ContextMenuOverlaysService}],context_menu_content_component_class.propDecorators={menuDirectives:[{type:core.Input}],value:[{type:core.Input}],dir:[{type:core.Input},{type:core.HostBinding,args:["attr.dir"]}],parentContextMenu:[{type:core.Input}],menuClass:[{type:core.HostBinding,args:["class"]},{type:core.Input}],execute:[{type:core.Output}],close:[{type:core.Output}],contextMenuContentItems:[{type:core.ViewChildren,args:[ContextMenuContentItemDirective,{read:ContextMenuContentItemDirective}]}],role:[{type:core.HostBinding,args:["attr.role"]}],ariaOrientation:[{type:core.HostBinding,args:["aria-orientation"]}],onKeyArrowDownOrUp:[{type:core.HostListener,args:["keydown.ArrowDown",["$event"]]},{type:core.HostListener,args:["keydown.ArrowUp",["$event"]]}],onKeyArrowRight:[{type:core.HostListener,args:["keydown.ArrowRight",["$event"]]}],onKeyArrowLeft:[{type:core.HostListener,args:["keydown.ArrowLeft",["$event"]]}],onKeyEnterOrSpace:[{type:core.HostListener,args:["window:keydown.Enter",["$event"]]},{type:core.HostListener,args:["window:keydown.Space",["$event"]]}],onClickOrRightClick:[{type:core.HostListener,args:["document:click",["$event"]]}]},context_menu_content_component_class);ContextMenuContentComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"context-menu-content",template:'<ng-container *ngFor="let menuDirective of menuDirectives; let i = index">\n  <hr\n    [contextMenuContentItem]="menuDirective"\n    *ngIf="menuDirective.divider"\n    role="separator"\n    (mouseenter)="hideSubMenus()"\n  />\n  <button\n    #buttonContextMenuContentItem="contextMenuContentItem"\n    [contextMenuContentItem]="menuDirective"\n    *ngIf="!menuDirective.divider && !menuDirective.passive"\n    type="button"\n    role="menuitem"\n    [attr.aria-haspopup]="!!menuDirective.subMenu ? \'menu\' : null"\n    [class.ngx-contextmenu--parent-menu]="!!menuDirective.subMenu"\n    [attr.disabled]="isMenuItemDisabled(menuDirective) ? \'disabled\' : null"\n    (click)="onMenuItemSelect(buttonContextMenuContentItem, $event)"\n    (mouseenter)="\n      hideSubMenus();\n      openSubMenu(\n        buttonContextMenuContentItem.contextMenuContentItem?.subMenu,\n        $event\n      )\n    "\n  >\n    <ng-template\n      [ngTemplateOutlet]="menuDirective.template"\n      [ngTemplateOutletContext]="{ $implicit: value }"\n    ></ng-template>\n  </button>\n\n  <span\n    [contextMenuContentItem]="menuDirective"\n    *ngIf="!menuDirective.divider && menuDirective.passive"\n    class="ngx-contextmenu-item--passive"\n    role="menuitem"\n    [attr.aria-disabled]="isMenuItemDisabled(menuDirective)"\n    (click)="stopEvent($event)"\n    (contextmenu)="stopEvent($event)"\n    [class.disabled]="isMenuItemDisabled(menuDirective)"\n    (mouseenter)="isMenuItemDisabled(menuDirective) ? null : hideSubMenus()"\n  >\n    <ng-template\n      [ngTemplateOutlet]="menuDirective.template"\n      [ngTemplateOutletContext]="{ $implicit: value }"\n    ></ng-template>\n  </span>\n</ng-container>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,host:{tabindex:"0",role:"dialog",class:"ngx-contextmenu"}}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef,Document,ContextMenuOverlaysService])],ContextMenuContentComponent);var context_menu_item_directive_class,_disabled,classPrivateFieldInitSpec=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js"),classPrivateFieldSet=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js"),classPrivateFieldGet=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js"),portal=__webpack_require__("./node_modules/@angular/cdk/fesm2022/portal.mjs");let ContextMenuItemDirective=(_disabled=new WeakMap,(context_menu_item_directive_class=class ContextMenuItemDirective{set disabled(disabled){(0,classPrivateFieldSet.Z)(this,_disabled,disabled)}get disabled(){return this.passive||this.divider||evaluateIfFunction((0,classPrivateFieldGet.Z)(this,_disabled),this.value)}constructor(template){(0,classPrivateFieldInitSpec.Z)(this,_disabled,{writable:!0,value:void 0}),this.template=template,this.divider=!1,this.passive=!1,this.visible=!0,this.execute=new core.EventEmitter,(0,classPrivateFieldSet.Z)(this,_disabled,!1)}triggerExecute(event,value){evaluateIfFunction((0,classPrivateFieldGet.Z)(this,_disabled),value)||this.execute.emit({event,value})}}).ctorParameters=()=>[{type:core.TemplateRef,decorators:[{type:core.Optional}]}],context_menu_item_directive_class.propDecorators={subMenu:[{type:core.Input}],divider:[{type:core.Input}],disabled:[{type:core.Input}],passive:[{type:core.Input}],visible:[{type:core.Input}],execute:[{type:core.Output}]},context_menu_item_directive_class);ContextMenuItemDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[contextMenuItem]"}),(0,tslib_es6.w6)("design:paramtypes",[core.TemplateRef])],ContextMenuItemDirective);var context_menu_component_class,_isOpen;let ContextMenuComponent=(_isOpen=new WeakMap,context_menu_component_class=class ContextMenuComponent{get isOpen(){return(0,classPrivateFieldGet.Z)(this,_isOpen)}constructor(overlay,scrollStrategy,contextMenuOverlaysService){(0,classPrivateFieldInitSpec.Z)(this,_isOpen,{writable:!0,value:void 0}),this.overlay=overlay,this.scrollStrategy=scrollStrategy,this.contextMenuOverlaysService=contextMenuOverlaysService,this.menuClass="",this.disabled=!1,this.open=new core.EventEmitter,this.close=new core.EventEmitter,this.visibleMenuItems=[],this.subscriptions=new Subscription.w0,(0,classPrivateFieldSet.Z)(this,_isOpen,!1)}ngOnInit(){const subscription=this.contextMenuOverlaysService.allClosed.subscribe((()=>{(0,classPrivateFieldSet.Z)(this,_isOpen,!1)}));this.subscriptions.add(subscription)}ngOnDestroy(){this.subscriptions.unsubscribe()}show(event){this.disabled||(this.value=event.value,this.setVisibleMenuItems(),this.openContextMenu({...event,menuItemDirectives:this.visibleMenuItems,menuClass:this.menuClass,dir:this.dir}),this.open.next(event))}hide(){this.contextMenuContentComponent?.menuDirectives.forEach((menuDirective=>{menuDirective.subMenu?.hide()})),this.overlayRef?.detach(),this.overlayRef?.dispose(),(0,classPrivateFieldSet.Z)(this,_isOpen,!1)}openContextMenu(context){let positionStrategy;if("position"===context.anchoredTo)positionStrategy=this.overlay.position().flexibleConnectedTo({x:context.x,y:context.y}).withPositions(((dir="ltr")=>"ltr"===dir?[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"end",overlayY:"top"},{originX:"end",originY:"center",overlayX:"start",overlayY:"center"},{originX:"start",originY:"center",overlayX:"end",overlayY:"center"}]:[{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"start",originY:"top",overlayX:"end",overlayY:"top"},{originX:"end",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"center",overlayX:"end",overlayY:"center"},{originX:"end",originY:"center",overlayX:"start",overlayY:"center"}])(context.dir));else{const{anchorElement,parentContextMenu}=context;positionStrategy=this.overlay.position().flexibleConnectedTo(new core.ElementRef(anchorElement)).withPositions(((dir="ltr")=>"ltr"===dir?[{originX:"end",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"end",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"start",overlayY:"bottom"},{originX:"start",originY:"bottom",overlayX:"end",overlayY:"bottom"}]:[{originX:"start",originY:"top",overlayX:"end",overlayY:"top"},{originX:"end",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"start",overlayY:"bottom"}])(parentContextMenu.dir))}this.overlayRef=this.overlay.create({positionStrategy,panelClass:"ngx-contextmenu-overlay",scrollStrategy:this.scrollStrategy.close()}),this.contextMenuOverlaysService.push(this.overlayRef),this.attachContextMenu(context),(0,classPrivateFieldSet.Z)(this,_isOpen,!0)}attachContextMenu(context){const{value,menuItemDirectives}=context,contextMenuContentRef=this.overlayRef?.attach(new portal.C5(ContextMenuContentComponent)),contextMenuContentComponent=contextMenuContentRef?.instance;if(!contextMenuContentComponent)return;this.contextMenuContentComponent=contextMenuContentComponent,contextMenuContentComponent.value=value,contextMenuContentComponent.menuDirectives=menuItemDirectives,contextMenuContentComponent.menuClass=this.getMenuClass(context),contextMenuContentComponent.dir=this.getDir(context);const closeSubscription=contextMenuContentComponent.close.subscribe((()=>{this.overlayRef?.detach(),this.overlayRef?.dispose()})),executeSubscription=contextMenuContentComponent.execute.subscribe((()=>{this.contextMenuOverlaysService.closeAll()}));contextMenuContentRef.onDestroy((()=>{this.close.emit(),closeSubscription.unsubscribe(),executeSubscription.unsubscribe()})),contextMenuContentRef.changeDetectorRef.detectChanges()}getMenuClass(event){return event.menuClass||"element"===event.anchoredTo&&event?.parentContextMenu?.menuClass||""}getDir(event){return event.dir||"element"===event.anchoredTo&&event?.parentContextMenu?.dir||void 0}isMenuItemVisible(menuItem){return evaluateIfFunction(menuItem.visible,this.value)}setVisibleMenuItems(){this.visibleMenuItems=this.menuItems?.filter((menuItem=>this.isMenuItemVisible(menuItem)))??[]}},context_menu_component_class.ctorParameters=()=>[{type:overlay.aV},{type:overlay.uw},{type:ContextMenuOverlaysService}],context_menu_component_class.propDecorators={menuClass:[{type:core.Input}],disabled:[{type:core.Input}],dir:[{type:core.Input}],open:[{type:core.Output}],close:[{type:core.Output}],menuItems:[{type:core.ContentChildren,args:[ContextMenuItemDirective]}]},context_menu_component_class);var context_menu_directive_class;ContextMenuComponent=(0,tslib_es6.gn)([(0,core.Component)({encapsulation:core.ViewEncapsulation.None,selector:"context-menu",template:""}),(0,tslib_es6.w6)("design:paramtypes",[overlay.aV,overlay.uw,ContextMenuOverlaysService])],ContextMenuComponent);let ContextMenuDirective=((context_menu_directive_class=class ContextMenuDirective{get isOpen(){return this.contextMenu?.isOpen??!1}constructor(elementRef){this.elementRef=elementRef,this.tabindex="0"}onContextMenu(event){this.canOpen()&&(this.close(),this.contextMenu?.show({anchoredTo:"position",x:event.clientX,y:event.clientY,value:this.contextMenuValue}),event.preventDefault(),event.stopPropagation())}onKeyArrowEscape(){this.close()}open(event){if(!this.canOpen())return;if(event instanceof MouseEvent)return void this.onContextMenu(event);const{x,y,height}=this.elementRef.nativeElement.getBoundingClientRect();this.contextMenu?.show({anchoredTo:"position",x,y:y+height,value:this.contextMenuValue})}close(){this.contextMenu?.hide()}canOpen(){return(this.contextMenu&&!this.contextMenu.disabled)??!1}}).ctorParameters=()=>[{type:core.ElementRef}],context_menu_directive_class.propDecorators={contextMenuValue:[{type:core.Input}],contextMenu:[{type:core.Input}],tabindex:[{type:core.Input},{type:core.HostBinding,args:["attr.tabindex"]}],isOpen:[{type:core.HostBinding,args:["attr.aria-expanded"]}],onContextMenu:[{type:core.HostListener,args:["contextmenu",["$event"]]}],onKeyArrowEscape:[{type:core.HostListener,args:["window:contextmenu"]},{type:core.HostListener,args:["window:keydown.Escape"]}]},context_menu_directive_class);ContextMenuDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[contextMenu]",exportAs:"ngxContextMenu",host:{role:"button","attr.aria-haspopup":"menu"}}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],ContextMenuDirective);let ContextMenuModule=class ContextMenuModule{};ContextMenuModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[ContextMenuComponent,ContextMenuContentComponent,ContextMenuContentItemDirective,ContextMenuDirective,ContextMenuItemDirective],providers:[{provide:overlay.Xj,useClass:overlay.YJ}],exports:[ContextMenuDirective,ContextMenuComponent,ContextMenuItemDirective],imports:[common.CommonModule,overlay.U8]})],ContextMenuModule);var ngx_contextmenu_component_class,ngx_contextmenu_componentngResource=__webpack_require__("./libs/ngx-contextmenu/src/stories/ngx-contextmenu/ngx-contextmenu.component.scss?ngResource"),ngx_contextmenu_componentngResource_default=__webpack_require__.n(ngx_contextmenu_componentngResource);let StorybookContextMenuComponent=((ngx_contextmenu_component_class=class StorybookContextMenuComponent{constructor(){this.menuClass="",this.disabled=!1,this.value="a user defined item",this.demoMode="simple",this.programmaticOpen=!1,this.onOpen=new core.EventEmitter,this.onClose=new core.EventEmitter,this.onMenuItemExecuted=new core.EventEmitter}execute(text,value){console.log(value),this.onMenuItemExecuted.next(`${text}: ${value.value}`)}open(value){this.onOpen.next(value)}close(){this.onClose.next("void")}}).propDecorators={menuClass:[{type:core.Input}],disabled:[{type:core.Input}],dir:[{type:core.Input}],value:[{type:core.Input}],demoMode:[{type:core.Input}],programmaticOpen:[{type:core.Input}],onOpen:[{type:core.Output}],onClose:[{type:core.Output}],onMenuItemExecuted:[{type:core.Output}],contextMenuDirective:[{type:core.ViewChild,args:[ContextMenuDirective]}]},ngx_contextmenu_component_class);StorybookContextMenuComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"storybook-context-menu",template:'<span\n  *ngIf="!disabled; else disabledTemplate"\n  class="ngx-context-menu-focusable"\n  #ngxContextMenu="ngxContextMenu"\n  [contextMenu]="contextMenu"\n  [contextMenuValue]="value"\n>\n  <ng-container *ngIf="demoMode === \'simple\'">\n    When you right click on this text, a context menu will appear\n  </ng-container>\n  <ng-container *ngIf="demoMode === \'form\'">\n    When you right click on this text, a context menu with form inputs will\n    appear\n  </ng-container>\n  <span *ngIf="dir === \'rtl\'"> in the right to left direction</span>\n</span>\n\n<ng-template #disabledTemplate>\n  <span\n    class="ngx-context-menu-focusable"\n    [contextMenu]="contextMenu"\n    [contextMenuValue]="value"\n  >\n    When you right click on this text, no context menu will appear because it is\n    disabled\n  </span>\n</ng-template>\n\n<context-menu\n  #contextMenu\n  [menuClass]="menuClass"\n  [disabled]="disabled"\n  [dir]="dir"\n  (open)="open($event)"\n  (close)="close()"\n>\n  <ng-template contextMenuItem passive="true"\n    ><span class="menu-item-title">Context menu title</span></ng-template\n  >\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    (execute)="execute(\'Cut\', $event)"\n    let-value\n    >Cut "{{ value }}"</ng-template\n  >\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    (execute)="execute(\'Copy\', $event)"\n    let-value\n    >Copy "{{ value }}"</ng-template\n  >\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    (execute)="execute(\'Paste\', $event)"\n    let-value\n    >Paste "{{ value }}"</ng-template\n  >\n  <ng-template *ngIf="demoMode === \'simple\'" contextMenuItem [disabled]="true"\n    >Disabled menu item</ng-template\n  >\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    divider="true"\n  ></ng-template>\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    [subMenu]="specialPast"\n    >Special pastes...</ng-template\n  >\n\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice A" /> <span>Choice A</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice B" /> <span>Choice B</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice C" /> <span>Choice C</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice D" /> <span>Choice D</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice E" /> <span>Choice E</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice E" /> <span>Choice E</span></label\n    ></ng-template\n  >\n</context-menu>\n<context-menu #specialPast>\n  <ng-template contextMenuItem (execute)="execute(\'Paste as HTML\', $event)"\n    >Paste as HTML</ng-template\n  >\n  <ng-template contextMenuItem (execute)="execute(\'Paste unformatted\', $event)"\n    >Paste unformatted</ng-template\n  >\n</context-menu>\n<br>\n<br>\n<br>\n<br>\n<button class="button" *ngIf="programmaticOpen" (click)="contextMenuDirective?.open($event)">\n  Click here to show the context menu normally attached to the text above\n</button>\n',styles:[ngx_contextmenu_componentngResource_default()]})],StorybookContextMenuComponent);const ContextMenu_stories={title:"Context Menu/Demo",component:StorybookContextMenuComponent,parameters:{layout:"centered"},decorators:[(0,dist.moduleMetadata)({imports:[ContextMenuModule]})],play:void 0,argTypes:{dir:{name:"Direction",description:"Defines the orientation of the context menu, left-to-right or right-to-left",options:["left-to-right","right-to-left"],mapping:{"left-to-right":"ltr","right-to-left":"rtl"},control:{type:"radio"}},onMenuItemExecuted:{action:"From the context menu, you chose",table:{disable:!0}},menuClass:{description:"CSS class to apply to the menu",options:["none","custom-theme-blue"],control:{type:"select"}},onOpen:{action:"Context menu was opened",table:{disable:!0}},onClose:{action:"Context menu was closed",table:{disable:!0}},close:{table:{disable:!0}},open:{table:{disable:!0}},execute:{table:{disable:!0}},demoMode:{name:"Mode",description:"Display context menu with form elements",control:"radio",options:["simple","form"],defaultValue:"simple",table:{disable:!1}},programmaticOpen:{name:"Programmatically open",control:"boolean",description:"Programmatically open the contextmenu from a button",table:{disable:!1}}}},Demo=(args=>({styles:["./assets/stylesheets/index.scss"],props:args})).bind({})}}]);