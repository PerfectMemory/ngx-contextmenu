/*! For license information please see stories-APIStyling-stories-mdx.1a05c560.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_perfectmemory_ngx_contextmenu=self.webpackChunk_perfectmemory_ngx_contextmenu||[]).push([[143],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/APIStyling.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Context Menu/Documentation/Styling",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",blockquote:"blockquote",pre:"pre"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Context Menu/Documentation/Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"context-menu-styling",children:"Context menu styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Context menu positioning is handled by the Angular CDK ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"@angular/cdk/overlay-prebuilt.css"}),".\nIts default styles are defined in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"node_modules/@perfectmemory/ngx-contextmenu/src/assets/stylesheets/base.scss"})," file.\nThis file also provides a number of CSS variables for customization."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"css-variables",children:"CSS variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["To cusomize the contextmenu styling, add a CSS class name to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"menuClass"})," property and then adjust CSS variables in your own CSS file."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"html"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-html",children:'<context-menu menuClass="custom-style"></context-menu>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"css"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-css",children:".custom-style {\n  /* Styling of the element where a context menu can appear */\n  --ngx-contextmenu-focusable-border-bottom: 1px dotted #70757e;\n\n  /* Styling of the context menu itself */\n  --ngx-contextmenu-font-family: sans-serif;\n  --ngx-contextmenu-background-color: white;\n  --ngx-contextmenu-border-radius: 4px;\n  --ngx-contextmenu-border: 1px solid rgba(0, 0, 0, 0.18);\n  --ngx-contextmenu-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);\n  --ngx-contextmenu-font-size: 14px;\n  --ngx-contextmenu-margin: 2px 0 0;\n  --ngx-contextmenu-min-width: 160px;\n  --ngx-contextmenu-outline: 1px solid #70757e;\n  --ngx-contextmenu-padding: 5px 0;\n  --ngx-contextmenu-text-color: #70757e;\n  --ngx-contextmenu-text-disabled-color: #8a909a;\n  --ngx-contextmenu-max-height: 100vh;\n\n  /* Styling of context menu items */\n  --ngx-contextmenu-item-arrow-left: '◀';\n  --ngx-contextmenu-item-arrow-right: '▶';\n  --ngx-contextmenu-item-background-hover-color: #f8f8f8;\n  --ngx-contextmenu-item-separator-color: #8a909a;\n  --ngx-contextmenu-item-separator-padding: 10px;\n  --ngx-contextmenu-item-separator-width: 96%;\n  --ngx-contextmenu-item-padding: 6px 20px;\n  --ngx-contextmenu-item-text-hover-color: #5a6473;\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"more-styling",children:"More styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["If you want more control over styling just copy the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"node_modules/@perfectmemory/ngx-contextmenu/src/assets/stylesheets/base.scss"})," and make your own adjustments"]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);