# CHANGELOG

## [Unreleased]

## [21.0.1] - 2026-01-05

### Fix

- Fix erroneous @angular/cdk dependency version

## [21.0.0] - 2026-01-02

### BREAKING CHANGES

- **Dependency**: Require Angular 21

## [20.0.0] - 2025-06-13

### BREAKING CHANGES

- **Dependency**: Require Angular 20

## [19.0.0] - 2024-12-11

### BREAKING CHANGES

- **Dependency**: Require Angular 19

## [18.0.0] - 2024-05-30

### BREAKING CHANGES

- **Dependency**: Require Angular 18

## [17.0.3] - 2024-05-30

### Fix

- Close all instances of contextmenu when opening one

## [17.0.2] - 2024-03-08

## [17.0.1] - 2024-03-08

### Fix

- Prevent several instances of a sub menu when opening with the mouse

## [17.0.0] - 2023-11-10

### BREAKING CHANGES

- **Dependency**: Require Angular 17

### Changed

- More complete ARIA support, tested with NVDA

### BREAKING CHANGES

- ARIA support involved HTML rework which could lead to custom styling issue
- Remove `ContextMenuCloseEvent` deprecated API

### Other

- Migrate repo to NX

## [16.1.0-alpha.0] - 2023-09-08

### Changed

- Improved ARIA navigation support when opening a context menu, impact some HTML attributs, thus some styling

## [16.0.2] - 2023-08-29

### Fixed

- Documentation on `[contextMenuItem]` `let-value` was not correct. Fixed code to properly reflect the documentation
- Fix documentation on `[passive]=true`

## [16.0.1] - 2023-07-03

### Fixed

- Remove erroneous `aria-labelledby="menubutton"` on `ContextMenuContentComponent`

## [16.0.0] - 2023-06-15

### BREAKING CHANGES

- **Dependency**: Require Angular 16

## [15.1.1] - 2023-01-30

### Fixed

- Constraint context menu height to 100vh, can be changed with the `--ngx-contextmenu-max-height` CSS property

## [15.1.0] - 2023-01-16

### Added

- Add `closeAll` and `hasOpenMenu` methods to the `ContextMenuService`

## [15.0.3] - 2022-11-24

### Fixed

- Opened sub menus close when hovering other menu, even without submenu themselves

## [15.0.2] - 2022-11-23

### Fixed

- Fix dependencies in `/projects/ngx-contextmenu/package.json`

## [15.0.1] - 2022-11-23

### Fixed

- Update Angular CDK dependency to ^15.0.0

## [15.0.0] - 2022-11-21

### BREAKING CHANGES

- **Dependency**: Require Angular 15

## [14.1.0] - 2022-09-05

### Added

- Forward port changes from 8.1.0

### Documentation

- Add `let-value` example in the documentation related to the `contextMenuItem` directive [(#11)](https://github.com/PerfectMemory/ngx-contextmenu/issues/11)

## [14.0.0] - 2022-06-13

### BREAKING CHANGES

- **Dependency**: Require Angular 14

## [8.1.0] - 2022-09-05

### Added

- `ContextMenuDirective` is now exported as `ngxContextMenu` [(#10)](https://github.com/PerfectMemory/ngx-contextmenu/issues/10)
- Add `open` and `close` methods to the `ContextMenuDirective` [(#10)](https://github.com/PerfectMemory/ngx-contextmenu/issues/10)
- Deprecated `ContextMenuCancelEvent`, `ContextMenuExecuteEvent` and `ContextMenuCloseEvent`

## [8.0.2] - 2022-05-25

### Fixed

- `tabindex` property should be a string to properly work with native `tabindex` attribute

## [8.0.1] - 2022-05-18

### Fixed

- Submenu wrongly positioned when parent menu has HTML content [(#3)](https://github.com/PerfectMemory/ngx-contextmenu/issues/3)

## [8.0.0] - 2022-03-09

### BREAKING CHANGES

- Remove Bootstrap dependency in favor of CSS variables based theming
- Remove contextMenuActions as it is not a building block of a `contextMenu`
- Remove `IContextMenuOptions`, `CONTEXT_MENU_OPTIONS`
- Remove unneeded `ContextMenuModule#forRoot` method and `autofocus` options
- Replace all reference to `any` type
- Rename interfaces and class properties for more consistency across the codebase

### Added

- Support for rtl contextmenu
- Better ARIA support
- context menu items are now typed with by [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

### Documentation

- Added Storybook demos and documentation

## 7.0.1 - 2022-02-09

### Fixed

- Fix opening submenu with the keyboard would not always properly position it next to its parent menu

## 7.0.0 - 2022-02-07

- Create tests and add code coverage

## 7.0.0-alpha.0 - (2022-01-20)

### BREAKING CHANGES

- **Dependency**: Require Angular 13

## 6.0.0 - 2022-02-03

- Improve README
- Setup github workflows

## 6.0.0-alpha.1 - 2022-02-03

- Setup the CI

## 6.0.0-alpha.0 - 2022-01-20

- Project forked from <https://github.com/isaacplmann/ngx-contextmenu>
