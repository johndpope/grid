'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var require$$1 = require('react-dom');
var ui = require('@supabase/ui');
var DataGrid = require('@supabase/react-data-grid');
var require$$0 = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var DataGrid__default = /*#__PURE__*/_interopDefaultLegacy(DataGrid);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".sb-grid{display:flex;flex-direction:column;height:100%}.sb-grid-fill-container:after{content:\"\";display:inline-block;width:100%}.rdg-cell{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgba(238,238,238,var(--tw-border-opacity));border-right-width:1px;font-size:13px}.dark .rdg-cell{--tw-border-opacity:1;border-color:rgba(42,42,42,var(--tw-border-opacity))}.rdg-cell{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.dark .rdg-cell{--tw-text-opacity:1;color:rgba(238,238,238,var(--tw-text-opacity))}.rdg-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rdg-cell-frozen-last{--tw-shadow:0 0 #0000;border-right-width:4px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dark .rdg-cell-frozen-last{--tw-border-opacity:1;border-color:rgba(42,42,42,var(--tw-border-opacity))}.rdg-cell-selected{box-shadow:inset 0 0 0 1px #24b47e}.rdg{background-color:transparent;border-color:rgba(238,238,238,var(--tw-border-opacity));border-width:1px 0;box-sizing:border-box;overflow-x:auto;overflow-y:scroll;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dark .rdg,.rdg{--tw-border-opacity:1}.dark .rdg{border-color:rgba(42,42,42,var(--tw-border-opacity))}.rdg{contain:strict;font-size:14px;-webkit-user-select:none}.rdg *,.rdg :after,.rdg :before{box-sizing:inherit}@supports not (contain:strict){.rdg{position:relative;z-index:0}}.rdg-focus-sink{height:0;left:0;outline:0;position:-webkit-sticky;position:sticky;top:0;width:0}.rdg-header-row{--tw-bg-opacity:1;background-color:rgba(248,250,252,var(--tw-bg-opacity));border-style:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dark .rdg-header-row{--tw-bg-opacity:1;background-color:rgba(31,31,31,var(--tw-bg-opacity))}.rdg-header-row{height:var(--header-row-height);line-height:var(--header-row-height);top:0}.rdg-header-row .rdg-cell{--tw-bg-opacity:1;background-color:rgba(248,250,252,var(--tw-bg-opacity));border-bottom-width:1px}.dark .rdg-header-row .rdg-cell{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgba(31,31,31,var(--tw-bg-opacity));border-color:rgba(42,42,42,var(--tw-border-opacity))}.rdg-header-row .rdg-cell p{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.dark,.dark .rdg-header-row .rdg-cell p{--tw-text-opacity:1;color:rgba(238,238,238,var(--tw-text-opacity))}.rdg-header-row .rdg-cell .react-contextmenu-wrapper{align-items:center;display:flex;height:100%;padding-left:.5rem;padding-right:.5rem;transition-duration:.15s;transition-duration:.1s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.rdg-header-row .rdg-cell .react-contextmenu-wrapper:hover{--tw-bg-opacity:1;background-color:rgba(102,102,102,var(--tw-bg-opacity))}.rdg-header-row .rdg-checkbox{--tw-bg-opacity:1;background-color:rgba(248,250,252,var(--tw-bg-opacity));border-radius:.125rem;border-width:1px}.dark .rdg-header-row .rdg-checkbox{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgba(31,31,31,var(--tw-bg-opacity));border-color:rgba(42,42,42,var(--tw-border-opacity))}.rdg-header-row .rdg-checkbox-input:checked+.rdg-checkbox{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgba(36,180,126,var(--tw-bg-opacity));border-color:rgba(102,102,102,var(--tw-border-opacity));border-width:4px}.rdg-header-row .rdg-checkbox-input:focus+.rdg-checkbox{box-shadow:none}.rdg-cell .Select{font-size:12px;font-weight:400;max-height:30px}.rdg-row{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));transition-duration:.15s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dark .rdg-row{--tw-bg-opacity:1;background-color:rgba(24,24,24,var(--tw-bg-opacity))}.rdg-row:hover{--tw-bg-opacity:1;background-color:rgba(248,250,252,var(--tw-bg-opacity))}.dark .rdg-row:hover{--tw-bg-opacity:1;background-color:rgba(31,31,31,var(--tw-bg-opacity))}.rdg-row__select-column__edit-action{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.dark .rdg-row__select-column__edit-action{--tw-text-opacity:1;color:rgba(238,238,238,var(--tw-text-opacity))}.rdg-row__select-column__edit-action{opacity:0}.rdg-row:hover .rdg-row__select-column__edit-action{opacity:.5}.rdg-row__select-column__edit-action:hover{opacity:1}.rdg-row[aria-selected=true]{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.dark .rdg-row[aria-selected=true]{--tw-bg-opacity:1;background-color:rgba(31,31,31,var(--tw-bg-opacity))}.rdg-row[aria-selected=true]:hover{--tw-bg-opacity:1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}.dark .rdg-row[aria-selected=true]:hover{--tw-bg-opacity:1;background-color:rgba(31,31,31,var(--tw-bg-opacity))}.rdg-row .rdg-cell div,.rdg-row .rdg-cell span{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.dark .rdg-row .rdg-cell div,.dark .rdg-row .rdg-cell span{--tw-text-opacity:1;color:rgba(238,238,238,var(--tw-text-opacity))}.tab-cursor{cursor:pointer!important}[type=checkbox]{webkit-appearance:none;-webkit-print-color-adjust:exact;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;color-adjust:exact;display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\")}.dark [type=checkbox]:checked,[type=checkbox]:checked{--tw-bg-opacity:1;background-color:rgba(56,188,129,var(--tw-bg-opacity))}[type=checkbox]:checked{background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]{--tw-border-opacity:1;--tw-text-opacity:1;border:1px solid rgba(187,187,187,var(--tw-border-opacity));border-radius:.25rem;color:rgba(56,188,129,var(--tw-text-opacity));cursor:pointer;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}[type=checkbox]:hover{--tw-border-opacity:1;border-color:rgba(36,180,126,var(--tw-border-opacity))}[type=checkbox]:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(36,180,126,var(--tw-ring-opacity));outline:2px solid transparent;outline-offset:2px}.dark [type=checkbox]{--tw-border-opacity:1;--tw-text-opacity:1;background-color:transparent;border-color:rgba(102,102,102,var(--tw-border-opacity));color:rgba(255,255,255,var(--tw-text-opacity))}.dark [type=checkbox]:hover{--tw-border-opacity:1;border-color:rgba(36,180,126,var(--tw-border-opacity))}[type=checkbox]{margin-top:2px}.react-contexify{background-color:#fff;border-radius:6px;box-shadow:0 10px 30px -5px rgba(0,0,0,.3);box-sizing:border-box;min-width:200px;opacity:0;padding:6px 0;position:fixed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:100}.react-contexify__submenu--is-open,.react-contexify__submenu--is-open>.react-contexify__item__content{background-color:#4393e6;color:#fff}.react-contexify__submenu--is-open>.react-contexify__submenu{opacity:1;pointer-events:auto}.react-contexify .react-contexify__submenu{pointer-events:none;position:absolute;top:-6px;transition:opacity .275s}.react-contexify__submenu-arrow{font-size:12px;margin-left:auto}.react-contexify__separator{background-color:rgba(0,0,0,.2);cursor:default;height:1px;margin:4px 0;width:100%}.react-contexify__will-leave--disabled{pointer-events:none}.react-contexify__item{cursor:pointer;position:relative}.react-contexify__item:focus{outline:0}.react-contexify__item:not(.react-contexify__item--disabled):focus>.react-contexify__item__content,.react-contexify__item:not(.react-contexify__item--disabled):hover>.react-contexify__item__content{background-color:#4393e6;color:#fff}.react-contexify__item:not(.react-contexify__item--disabled):hover>.react-contexify__submenu{opacity:1;pointer-events:auto}.react-contexify__item--disabled{cursor:default;opacity:.5}.react-contexify__item__content{align-items:center;color:#333;display:flex;font-size:13px;padding:6px 12px;position:relative;white-space:nowrap}.rdg__segmented-control{--tw-border-opacity:1;border-color:rgba(42,42,42,var(--tw-border-opacity));border-radius:.375rem;border-width:1px;height:2rem;margin-left:.5rem;margin-right:.5rem;position:relative}.rdg__segmented-control__button{--tw-text-opacity:1;align-items:center;color:rgba(102,102,102,var(--tw-text-opacity));display:inline-flex;font-size:11px;font-weight:500;height:100%;justify-content:center;position:absolute;top:0}.rdg__segmented-control__button:hover{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.rdg__segmented-control__button:focus{outline:2px solid transparent;outline-offset:2px;z-index:10}.rdg__segmented-control__button:active{--tw-bg-opacity:1;background-color:rgba(238,238,238,var(--tw-bg-opacity))}.rdg__segmented-control__button{cursor:pointer;transition-duration:.15s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:1}.rdg__segmented-control__button--option{--tw-text-opacity:1;color:rgba(224,224,224,var(--tw-text-opacity))}.rdg__segmented-control__button--right{right:0}.rdg__segmented-control__button--left{left:0}.rdg__segmented-control__label{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);background-color:rgba(42,42,42,var(--tw-bg-opacity));border-color:rgba(42,42,42,var(--tw-border-opacity));border-radius:.25rem;border-width:1px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:inline-block;height:100%;transform:var(--tw-transform);transition-duration:.15s;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:0}.rdg__segmented-control__label--left{--tw-translate-x:0px;transform:var(--tw-transform)}.rdg__segmented-control__label--right{--tw-translate-x:3rem;transform:var(--tw-transform)}.rdg__segmented-control__options-label{color:inherit;text-transform:uppercase}.dropdown-control{overflow:auto}.dropdown-control .sbui-typography{display:block;padding:1rem .5rem}.foreign-table-modal__content-container{width:100%}.foreign-table-modal__content-container__inner{padding-left:1.5rem;padding-right:1.5rem}.foreign-table-modal__content-container__inner__overflow{overflow:scroll;width:100%}.foreign-table-modal__filter{align-items:center;display:flex}.foreign-table-modal__filter>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.foreign-table-modal__filter{padding-left:1.5rem;padding-right:1.5rem}.foreign-table-modal__filter__trigger-content>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.foreign-table-modal__filter__trigger-content__label{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.dark .foreign-table-modal__filter__trigger-content__label{--tw-text-opacity:1;color:rgba(238,238,238,var(--tw-text-opacity))}.foreign-table-modal__filter__trigger-content__name{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity));font-weight:700}.dark .foreign-table-modal__filter__trigger-content__name{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.foreign-table-modal__filter__search-input{flex-grow:1}.foreign-table-modal__menu>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.foreign-table-modal__row-item{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);border-radius:.25rem;border-style:solid;border-width:1px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);overflow:hidden}.foreign-table-modal__row-item:first-child{margin-top:.5rem}.dark .foreign-table-modal__row-item{--tw-border-opacity:1;border-color:rgba(42,42,42,var(--tw-border-opacity))}.foreign-table-modal__row-item__inner{display:flex}.foreign-table-modal__row-item__inner>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.foreign-table-modal__row-item__inner__key-item{display:flex;flex:0 1 auto;flex-direction:column}.foreign-table-modal__row-item__inner__key-item__key{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.null-value{display:block}.sb-grid-checkbox-editor{display:flex;height:100%;width:100%}.sb-grid-checkbox-editor__input{height:1rem;width:1rem}.sb-grid-date-editor,.sb-grid-datetime-editor{height:100%;padding-left:.5rem;padding-right:.5rem;width:100%}.sb-grid-json-editor__trigger{font-size:13px;overflow:hidden;padding-left:.5rem;padding-right:.5rem;text-overflow:ellipsis}.sb-grid-number-editor{padding-left:.5rem;padding-right:.5rem}.sb-grid-number-editor,.sb-grid-select-editor{height:100%;width:100%}.sb-grid-text-editor__trigger{font-size:13px;overflow:hidden;padding-left:.5rem;padding-right:.5rem;text-overflow:ellipsis}.sb-grid-time-editor{height:100%;padding-left:.5rem;padding-right:.5rem;width:100%}.sb-grid-pagination{align-items:center;display:flex}.sb-grid-pagination>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.sb-grid-pagination-input-container{width:3rem}.sb-grid-pagination-input{display:block;width:3rem}.sb-grid-pagination-input .sbui-inputnumber{padding-bottom:.25rem;padding-top:.25rem}.sb-grid-footer{align-items:center;display:flex;height:2.5rem;justify-content:space-between;padding-left:.5rem;padding-right:.5rem;z-index:10}.dark .sb-grid-footer{--tw-bg-opacity:1;background-color:rgba(31,31,31,var(--tw-bg-opacity))}.sb-grid-footer__inner,.sb-grid-foreign-key-formatter{align-items:center;display:flex}.sb-grid-foreign-key-formatter{padding-left:.5rem;padding-right:.5rem}.sb-grid-foreign-key-formatter__text{flex-grow:1;font-size:13px;margin:0;overflow:hidden;text-overflow:ellipsis}.sb-grid-add-column{display:flex;height:100%}.sb-grid-column-header{align-items:center;display:flex;justify-content:space-between}.sb-grid-column-header--cursor{cursor:default}.sb-grid-column-header__inner{align-items:center;display:flex}.sb-grid-column-header__inner>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.sb-grid-column-header__inner,.sb-grid-column-header__inner__name{overflow:hidden;text-overflow:ellipsis}.sb-grid-column-header__inner__name{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity));font-size:13px}.dark .sb-grid-column-header__inner__name{--tw-text-opacity:1;color:rgba(238,238,238,var(--tw-text-opacity))}.sb-grid-column-header__inner__format{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));font-size:11px;font-weight:400;overflow:hidden;text-overflow:ellipsis}.dark .sb-grid-column-header__inner__format{--tw-text-opacity:1;color:rgba(238,238,238,var(--tw-text-opacity))}.sb-grid-column-header__inner__primary-key{--tw-rotate:45deg;align-items:center;display:flex;transform:var(--tw-transform)}.sb-grid-column-header__inner svg{margin-right:.25rem}.dark .sb-grid-column-header__inner svg,.sb-grid-column-header__inner svg{--tw-border-opacity:1;--tw-text-opacity:1;border-color:rgba(36,180,126,var(--tw-border-opacity));color:rgba(36,180,126,var(--tw-text-opacity))}.sb-grid-grid--loading{--tw-bg-opacity:1;background-color:rgba(238,238,238,var(--tw-bg-opacity));display:flex;justify-content:center}.dark .sb-grid-grid--loading{--tw-bg-opacity:1;background-color:rgba(15,15,15,var(--tw-bg-opacity))}.sb-grid-grid--loading__inner{align-items:center;display:flex}.sb-grid-grid--loading__inner__text{margin:2rem}.sb-grid-select-cell__formatter,.sb-grid-select-cell__header{align-items:center;display:flex;height:100%;justify-content:space-between}.sb-grid-select-cell__header__input{--tw-border-opacity:1;border-color:rgba(187,187,187,var(--tw-border-opacity))}.sb-grid-filter-popover{overflow:visible}.sb-grid-filter-popover__misc{padding-bottom:.5rem;padding-top:.5rem}.sb-grid-filter-popover__misc__text{display:block}.sb-grid-filter-row{align-items:center;display:flex;justify-content:space-between;width:100%}.sb-grid-filter-row>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.sb-grid-filter-row__inner{align-items:center;display:flex}.sb-grid-filter-row__inner>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.sb-grid-filter-row__inner__close{background-color:transparent;padding:0}.sb-grid-filter-row__inner__close:hover{background-color:transparent}.sb-grid-sort-popover{width:24rem}.sb-grid-dropdown__empty{padding-bottom:.5rem;padding-top:.5rem}.sb-grid-dropdown__empty__text{display:block}.sb-grid-dropdown__item-trigger{margin-bottom:.25rem;margin-top:.25rem}.sb-grid-sort-row{display:flex;justify-content:space-between}.sb-grid-sort-row>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.sb-grid-sort-row__item{align-items:center;display:flex}.sb-grid-sort-row__item>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.sb-grid-sort-row__item__remove{background-color:transparent;padding:0}.sb-grid-sort-row__item__remove:hover{background-color:transparent}.sb-grid-sort-row__item__label{align-items:center;display:flex}.sb-grid-sort-row__item__label>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.sb-grid-sort-row__item_toogle{align-items:center;display:flex;gap:0;width:7rem}.sb-grid-sort-row__item_toogle>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.sb-grid-sort-row__item__move{cursor:move;display:flex}.sb-grid-header{display:flex;height:2.5rem;justify-content:space-between;padding-left:.5rem;padding-right:.5rem;z-index:10}.dark .sb-grid-header{--tw-bg-opacity:1;background-color:rgba(31,31,31,var(--tw-bg-opacity))}.sb-grid-header__inner{align-items:center;display:flex}.sb-grid-header__inner>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.sb-grid-header__inner__divider{padding-bottom:.5rem;padding-top:.5rem}.row_header__selected-rows{margin-left:.5rem;margin-right:.5rem}.sb-grid-status-label{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));font-size:13px}.sb-grid-status-label__no-msg{display:flex;height:1.25rem;width:1.25rem}.sb-grid-status-label__no-msg>div{--tw-bg-opacity:1;background-color:rgba(36,180,126,var(--tw-bg-opacity));border-radius:9999px;height:.5rem;margin:auto;width:.5rem}.sb-grid-empty-value{display:block}.sb-grid-context-menu__label{margin-left:.5rem}";
styleInject(css_248z);

function _defineProperty$k(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$6(Object(source), true).forEach(function (key) {
        _defineProperty$k(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray$6(arr, i) {
  return _arrayWithHoles$6(arr) || _iterableToArrayLimit$6(arr, i) || _unsupportedIterableToArray$7(arr, i) || _nonIterableRest$6();
}

function _arrayWithHoles$6(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$6(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray$7(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen);
}

function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest$6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty$j(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$5(Object(source), true).forEach(function (key) {
        _defineProperty$j(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose$1() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry$1(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject$2(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function hasOwnProperty$1(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject$2(changes)) errorHandler$1('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty$1(initial, field);
  })) errorHandler$1('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler$1('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject$2(handler))) errorHandler$1('handlerType');
  if (isObject$2(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler$1('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler$1('initialIsRequired');
  if (!isObject$2(initial)) errorHandler$1('initialType');
  if (isEmpty(initial)) errorHandler$1('initialContent');
}

function throwError$1(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages$1 = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
var validators$1 = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators$1.initial(initial);
  validators$1.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry$1(didStateUpdate)(state, handler);
  var update = curry$1(updateState)(state);
  var validate = curry$1(validators$1.changes)(initial);
  var getChanges = curry$1(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators$1.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose$1(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index$2 = {
  create: create
};

var config$2 = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs'
  }
};

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject$1(value) {
  return {}.toString.call(value).includes('Object');
}

/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler('configIsRequired');
  if (!isObject$1(config)) errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  config: validateConfig
};

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2$1(_objectSpread2$1({}, target), source);
}

// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/** the local state of the module */

var _state$create = index$2.create({
  config: config$2,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = _slicedToArray$6(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function config$1(config) {
  setState(function (state) {
    return {
      config: merge(state.config, validators.config(config))
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized: isInitialized
    };
  });

  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return makeCancelable(Promise.resolve(window.monaco));
    }

    compose(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }

  return makeCancelable(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config$1,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c$1=b$1?Symbol.for("react.element"):60103,d=b$1?Symbol.for("react.portal"):60106,e$1=b$1?Symbol.for("react.fragment"):60107,f$2=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h=b$1?Symbol.for("react.provider"):60109,k=b$1?Symbol.for("react.context"):60110,l$2=b$1?Symbol.for("react.async_mode"):60111,m=b$1?Symbol.for("react.concurrent_mode"):60111,n$1=b$1?Symbol.for("react.forward_ref"):60112,p$1=b$1?Symbol.for("react.suspense"):60113,q=b$1?
Symbol.for("react.suspense_list"):60120,r$1=b$1?Symbol.for("react.memo"):60115,t$1=b$1?Symbol.for("react.lazy"):60116,v=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x=b$1?Symbol.for("react.responder"):60118,y=b$1?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l$2:case m:case e$1:case g$1:case f$2:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k:case n$1:case t$1:case r$1:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l$2;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c$1;reactIs_production_min.ForwardRef=n$1;reactIs_production_min.Fragment=e$1;reactIs_production_min.Lazy=t$1;reactIs_production_min.Memo=r$1;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g$1;reactIs_production_min.StrictMode=f$2;reactIs_production_min.Suspense=p$1;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l$2};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};reactIs_production_min.isForwardRef=function(a){return z(a)===n$1};reactIs_production_min.isFragment=function(a){return z(a)===e$1};reactIs_production_min.isLazy=function(a){return z(a)===t$1};
reactIs_production_min.isMemo=function(a){return z(a)===r$1};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g$1};reactIs_production_min.isStrictMode=function(a){return z(a)===f$2};reactIs_production_min.isSuspense=function(a){return z(a)===p$1};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m||a===g$1||a===f$2||a===p$1||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$2.apply(this, arguments);
}

const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading({
  content
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: loadingStyles
  }, content);
}

const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

// one of the reasons why we use a separate prop for passing ref instead of using forwardref

function MonacoContainer$1({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperProps
}) {
  return /*#__PURE__*/React__default["default"].createElement("section", _extends$2({
    style: { ...styles.wrapper,
      width,
      height
    }
  }, wrapperProps), !isEditorReady && /*#__PURE__*/React__default["default"].createElement(Loading, {
    content: loading
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    ref: _ref,
    style: { ...styles.fullWidth,
      ...(!isEditorReady && styles.hide)
    },
    className: className
  }));
}

MonacoContainer$1.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  isEditorReady: PropTypes.bool.isRequired,
  className: PropTypes.string,
  wrapperProps: PropTypes.object
};

var MonacoContainer = /*#__PURE__*/React.memo(MonacoContainer$1);

function useMount(effect) {
  React.useEffect(effect, []);
}

function useUpdate$1(effect, deps, applyChanges = true) {
  const isInitialMount = React.useRef(true);
  React.useEffect(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}

function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco.editor.getModel(createModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && createModelUri(monaco, path));
}

function createModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}

({
  original: PropTypes.string,
  modified: PropTypes.string,
  language: PropTypes.string,
  originalLanguage: PropTypes.string,
  modifiedLanguage: PropTypes.string,

  /* === */
  originalModelPath: PropTypes.string,
  modifiedModelPath: PropTypes.string,
  keepCurrentOriginalModel: PropTypes.bool,
  keepCurrentModifiedModel: PropTypes.bool,
  theme: PropTypes.string,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,

  /* === */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  wrapperProps: PropTypes.object,

  /* === */
  beforeMount: PropTypes.func,
  onMount: PropTypes.func
});

function useMonaco() {
  const [monaco, setMonaco] = React.useState(loader.__getMonacoInstance());
  useMount(() => {
    let cancelable;

    if (!monaco) {
      cancelable = loader.init();
      cancelable.then(monaco => {
        setMonaco(monaco);
      });
    }

    return () => {
      var _cancelable;

      return (_cancelable = cancelable) === null || _cancelable === void 0 ? void 0 : _cancelable.cancel();
    };
  });
  return monaco;
}

function usePrevious$1(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,

  /* === */
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,

  /* === */
  width,
  height,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = React.useState(true);
  const monacoRef = React.useRef(null);
  const editorRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const onMountRef = React.useRef(onMount);
  const beforeMountRef = React.useRef(beforeMount);
  const subscriptionRef = React.useRef(null);
  const valueRef = React.useRef(value);
  const previousPath = usePrevious$1(path);
  useMount(() => {
    const cancelable = loader.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  useUpdate$1(() => {
    const model = getOrCreateModel(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  useUpdate$1(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  useUpdate$1(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  useUpdate$1(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  useUpdate$1(() => {
    // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
    if (!isUndefined(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  useUpdate$1(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = React.useCallback(() => {
    beforeMountRef.current(monacoRef.current);
    const autoCreatedModelPath = path || defaultPath;
    const defaultModel = getOrCreateModel(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      model: defaultModel,
      automaticLayout: true,
      ...options
    }, overrideServices);
    saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  React.useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  React.useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription

  valueRef.current = value;
  React.useEffect(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;

      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
        const editorValue = editorRef.current.getValue();

        if (valueRef.current !== editorValue) {
          onChange(editorValue, event);
        }
      });
    }
  }, [isEditorReady, onChange]); // onValidate

  React.useEffect(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers(uris => {
        var _editorRef$current$ge;

        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;

        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find(uri => uri.path === editorUri.path);

          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    var _subscriptionRef$curr2;

    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;

      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/React__default["default"].createElement(MonacoContainer, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

Editor.propTypes = {
  defaultValue: PropTypes.string,
  defaultPath: PropTypes.string,
  defaultLanguage: PropTypes.string,
  value: PropTypes.string,
  language: PropTypes.string,
  path: PropTypes.string,

  /* === */
  theme: PropTypes.string,
  line: PropTypes.number,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
  overrideServices: PropTypes.object,
  saveViewState: PropTypes.bool,
  keepCurrentModel: PropTypes.bool,

  /* === */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  wrapperProps: PropTypes.object,

  /* === */
  beforeMount: PropTypes.func,
  onMount: PropTypes.func,
  onChange: PropTypes.func,
  onValidate: PropTypes.func
};
Editor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: noop,
  onMount: noop,
  onValidate: noop
};

var index$1 = /*#__PURE__*/React.memo(Editor);

/**
 * Create the React Context
 */

var DndContext = React.createContext({
  dragDropManager: undefined
});

var HandlerRole;

(function (HandlerRole) {
  HandlerRole["SOURCE"] = "SOURCE";
  HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}

var INIT_COORDS = 'dnd-core/INIT_COORDS';
var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = 'dnd-core/HOVER';
var DROP = 'dnd-core/DROP';
var END_DRAG = 'dnd-core/END_DRAG';

function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

// cheap lodash replacements

/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */
function get(obj, path, defaultValue) {
  return path.split('.').reduce(function (a, c) {
    return a && a[c] ? a[c] : defaultValue || null;
  }, obj);
}
/**
 * drop-in replacement for _.without
 */

function without$1(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isObject(input) {
  return _typeof$3(input) === 'object';
}
/**
 * repalcement for _.xor
 * @param itemsA
 * @param itemsB
 */

function xor(itemsA, itemsB) {
  var map = new Map();

  var insertItem = function insertItem(item) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function (count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */

function intersection(itemsA, itemsB) {
  return itemsA.filter(function (t) {
    return itemsB.indexOf(t) > -1;
  });
}

var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource,
        publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc,
        clientOffset = options.clientOffset,
        getSourceClientOffset = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry(); // Initialize the coordinates using the client offset

    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants$1(sourceIds, monitor, registry); // Get the draggable source

    var sourceId = getDraggableSource(sourceIds, monitor);

    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    } // Get the source client offset


    var sourceClientOffset = null;

    if (clientOffset) {
      if (!getSourceClientOffset) {
        throw new Error('getSourceClientOffset must be defined');
      }

      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
      sourceClientOffset = getSourceClientOffset(sourceId);
    } // Initialize the full coordinates


    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId); // If source.beginDrag returns null, this is an indicator to cancel the drag

    if (item == null) {
      return undefined;
    }

    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType: itemType,
        item: item,
        sourceId: sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}

function verifyInvariants$1(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
  sourceIds.forEach(function (sourceId) {
    invariant(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
  });
}

function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
  invariant(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}

function verifyItemIsObject(item) {
  invariant(isObject(item), 'Item must be an object.');
}

function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;

  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }

  return sourceId;
}

function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();

    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
  };
}

function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }

  return Array.isArray(targetType) ? targetType.some(function (t) {
    return t === draggedItemType;
  }) : targetType === draggedItemType;
}

function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        clientOffset = _ref.clientOffset;

    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds: targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}

function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}

function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), 'Cannot call hover while not dragging.');
  invariant(!monitor.didDrop(), 'Cannot call hover after drop.');

  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
    var target = registry.getTarget(targetId);
    invariant(target, 'Expected targetIds to be registered.');
  }
}

function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);

    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}

function hoverAllTargets(targetIds, monitor, registry) {
  // Finally call hover on all matching targets.
  targetIds.forEach(function (targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty$i(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$i(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyInvariants(monitor);
    var targetIds = getDroppableTargets(monitor); // Multiple actions are dispatched here, which is why this doesn't return an action

    targetIds.forEach(function (targetId, index) {
      var dropResult = determineDropResult(targetId, index, registry, monitor);
      var action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread$4(_objectSpread$4({}, options), dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}

function verifyInvariants(monitor) {
  invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');
  invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}

function determineDropResult(targetId, index, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : undefined;
  verifyDropResultType(dropResult);

  if (typeof dropResult === 'undefined') {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }

  return dropResult;
}

function verifyDropResultType(dropResult) {
  invariant(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
}

function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}

function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();

    if (sourceId != null) {
      var source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }

    return {
      type: END_DRAG
    };
  };
}

function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$d(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$d(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$d(Constructor.prototype, protoProps); if (staticProps) _defineProperties$d(Constructor, staticProps); return Constructor; }

function _defineProperty$h(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DragDropManagerImpl = /*#__PURE__*/function () {
  function DragDropManagerImpl(store, monitor) {
    var _this = this;

    _classCallCheck$d(this, DragDropManagerImpl);

    _defineProperty$h(this, "store", void 0);

    _defineProperty$h(this, "monitor", void 0);

    _defineProperty$h(this, "backend", void 0);

    _defineProperty$h(this, "isSetUp", false);

    _defineProperty$h(this, "handleRefCountChange", function () {
      var shouldSetUp = _this.store.getState().refCount > 0;

      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();

          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();

          _this.isSetUp = false;
        }
      }
    });

    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }

  _createClass$d(DragDropManagerImpl, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      /* eslint-disable-next-line @typescript-eslint/no-this-alias */
      var manager = this;
      var dispatch = this.store.dispatch;

      function bindActionCreator(actionCreator) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var action = actionCreator.apply(manager, args);

          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      var actions = createDragDropActions(this);
      return Object.keys(actions).reduce(function (boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);

  return DragDropManagerImpl;
}();

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (process.env.NODE_ENV !== 'production') {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

var strictEquality = function strictEquality(a, b) {
  return a === b;
};
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */

function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */

function areArraysEqual(a, b) {
  var isEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : strictEquality;

  if (a.length !== b.length) {
    return false;
  }

  for (var i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }

  return true;
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$g(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$g(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var initialState$2 = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce$5() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$2;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };

    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }

      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        clientOffset: payload.clientOffset
      });

    case END_DRAG:
    case DROP:
      return initialState$2;

    default:
      return state;
  }
}

var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId: targetId
    }
  };
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$f(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$f(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var initialState$1 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function reduce$4() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });

    case PUBLISH_DRAG_SOURCE:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        isSourcePublic: true
      });

    case HOVER:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        targetIds: payload.targetIds
      });

    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }

      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        targetIds: without$1(state.targetIds, payload.targetId)
      });

    case DROP:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });

    case END_DRAG:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });

    default:
      return state;
  }
}

function reduce$3() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;

    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;

    default:
      return state;
  }
}

var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */

function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }

  if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
    return true;
  }

  var commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}

function reduce$2() {

  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case HOVER:
      break;

    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;

    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }

  var _action$payload = action.payload,
      _action$payload$targe = _action$payload.targetIds,
      targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe,
      _action$payload$prevT = _action$payload.prevTargetIds,
      prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = xor(targetIds, prevTargetIds);
  var didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);

  if (!didChange) {
    return NONE;
  } // Check the target ids at the innermost position. If they are valid, add them
  // to the result


  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];

  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }

    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }

  return result;
}

function reduce$1() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return state + 1;
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$e(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    dirtyHandlerIds: reduce$2(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread$1(_objectSpread$1({}, action.payload), {}, {
        prevTargetIds: get(state, 'dragOperation.targetIds', [])
      })
    }),
    dragOffset: reduce$5(state.dragOffset, action),
    refCount: reduce$3(state.refCount, action),
    dragOperation: reduce$4(state.dragOperation, action),
    stateId: reduce$1(state.stateId)
  };
}

/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */

function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */

function getSourceClientOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset,
      initialSourceClientOffset = state.initialSourceClientOffset;

  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }

  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */

function getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset;

  if (!clientOffset || !initialClientOffset) {
    return null;
  }

  return subtract(clientOffset, initialClientOffset);
}

function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$c(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$c(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$c(Constructor.prototype, protoProps); if (staticProps) _defineProperties$c(Constructor, staticProps); return Constructor; }

function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DragDropMonitorImpl = /*#__PURE__*/function () {
  function DragDropMonitorImpl(store, registry) {
    _classCallCheck$c(this, DragDropMonitorImpl);

    _defineProperty$d(this, "store", void 0);

    _defineProperty$d(this, "registry", void 0);

    this.store = store;
    this.registry = registry;
  }

  _createClass$c(DragDropMonitorImpl, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        handlerIds: undefined
      };
      var handlerIds = options.handlerIds;
      invariant(typeof listener === 'function', 'listener must be a function.');
      invariant(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
      var prevStateId = this.store.getState().stateId;

      var handleChange = function handleChange() {
        var state = _this.store.getState();

        var currentStateId = state.stateId;

        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);

          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;

      invariant(typeof listener === 'function', 'listener must be a function.');
      var previousState = this.store.getState().dragOffset;

      var handleChange = function handleChange() {
        var nextState = _this2.store.getState().dragOffset;

        if (nextState === previousState) {
          return;
        }

        previousState = nextState;
        listener();
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId);
      invariant(source, "Expected to find a valid source. sourceId=".concat(sourceId));

      if (this.isDragging()) {
        return false;
      }

      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var target = this.registry.getTarget(targetId);
      invariant(target, "Expected to find a valid target. targetId=".concat(targetId));

      if (!this.isDragging() || this.didDrop()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      // undefined on initial render
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId, true);
      invariant(source, "Expected to find a valid source. sourceId=".concat(sourceId));

      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }

      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();

      if (sourceType !== draggedItemType) {
        return false;
      }

      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        shallow: false
      };

      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var shallow = options.shallow;

      if (!this.isDragging()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();

      if (draggedItemType && !matchesType(targetType, draggedItemType)) {
        return false;
      }

      var targetIds = this.getTargetIds();

      if (!targetIds.length) {
        return false;
      }

      var index = targetIds.indexOf(targetId);

      if (shallow) {
        return index === targetIds.length - 1;
      } else {
        return index > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset$1() {
      return getSourceClientOffset(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset$1() {
      return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
  }]);

  return DragDropMonitorImpl;
}();

var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }
function validateSourceContract(source) {
  invariant(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  invariant(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  invariant(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  invariant(typeof target.hover === 'function', 'Expected hover to be a function.');
  invariant(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function (t) {
      return validateType(t, false);
    });
    return;
  }

  invariant(typeof type === 'string' || _typeof$2(type) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
function rawAsap(task) {
  if (!queue.length) {
    requestFlush();
  } // Equivalent to push, but avoids a function call.


  queue[queue.length] = task;
}
var queue = []; // Once a flush has been requested, no further calls to `requestFlush` are
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.

var requestFlush; // The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.

var index = 0; // If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.

var capacity = 1024; // The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.

function flush() {
  while (index < queue.length) {
    var currentIndex = index; // Advance the index before calling the task. This ensures that we will
    // begin flushing on the next task the task throws an error.

    index = index + 1;
    queue[currentIndex].call(); // Prevent leaking memory for long chains of recursive calls to `asap`.
    // If we call `asap` within tasks scheduled by `asap`, the queue will
    // grow, but to avoid an O(n) walk for every task we execute, we don't
    // shift tasks off the queue after they have been executed.
    // Instead, we periodically shift 1024 tasks off the queue.

    if (index > capacity) {
      // Manually shift all values starting at the index back to the
      // beginning of the queue.
      for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
        queue[scan] = queue[scan + index];
      }

      queue.length -= index;
      index = 0;
    }
  }

  queue.length = 0;
  index = 0;
} // `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */


var scope = typeof global !== 'undefined' ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver; // MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7

if (typeof BrowserMutationObserver === 'function') {
  requestFlush = makeRequestCallFromMutationObserver(flush); // MessageChannels are desirable because they give direct access to the HTML
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
} else {
  requestFlush = makeRequestCallFromTimer(flush);
} // `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.


rawAsap.requestFlush = requestFlush; // To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".

function makeRequestCallFromMutationObserver(callback) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(callback);
  var node = document.createTextNode('');
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
} // The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html
// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.
// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }
// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.
// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }
// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.
// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.


function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    // We dispatch a timeout with a specified delay of 0 for engines that
    // can reliably accommodate that request. This will usually be snapped
    // to a 4 milisecond delay, but once we're flushing, there's no delay
    // between events.
    var timeoutHandle = setTimeout(handleTimer, 0); // However, since this timer gets frequently dropped in Firefox
    // workers, we enlist an interval handle that will try to fire
    // an event 20 times per second until it succeeds.

    var intervalHandle = setInterval(handleTimer, 50);

    function handleTimer() {
      // Whichever timer succeeds will cancel both timers and
      // execute the callback.
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
} // This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.


rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer; // ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

// RawTasks are recycled to reduce GC churn.

var freeTasks = []; // We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.

var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
  if (pendingErrors.length) {
    throw pendingErrors.shift();
  }
}
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */


function asap(task) {
  var rawTask;

  if (freeTasks.length) {
    rawTask = freeTasks.pop();
  } else {
    rawTask = new RawTask();
  }

  rawTask.task = task;
  rawAsap(rawTask);
} // We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.

var RawTask =
/** @class */
function () {
  function RawTask() {}

  RawTask.prototype.call = function () {
    try {
      this.task.call();
    } catch (error) {
      if (asap.onerror) {
        // This hook exists purely for testing purposes.
        // Its name will be periodically randomized to break any code that
        // depends on its existence.
        asap.onerror(error);
      } else {
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        pendingErrors.push(error);
        requestErrorThrow();
      }
    } finally {
      this.task = null;
      freeTasks[freeTasks.length] = this;
    }
  };

  return RawTask;
}();

function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$b(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$b(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$b(Constructor.prototype, protoProps); if (staticProps) _defineProperties$b(Constructor, staticProps); return Constructor; }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$5(arr, i) { return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _unsupportedIterableToArray$6(arr, i) || _nonIterableRest$5(); }

function _nonIterableRest$5() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$5(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$5(arr) { if (Array.isArray(arr)) return arr; }

function getNextHandlerId(role) {
  var id = getNextUniqueId().toString();

  switch (role) {
    case HandlerRole.SOURCE:
      return "S".concat(id);

    case HandlerRole.TARGET:
      return "T".concat(id);

    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}

function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return HandlerRole.SOURCE;

    case 'T':
      return HandlerRole.TARGET;

    default:
      invariant(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}

function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;

  do {
    var _entries$next = entries.next(),
        done = _entries$next.done,
        _entries$next$value = _slicedToArray$5(_entries$next.value, 2),
        value = _entries$next$value[1];

    if (value === searchValue) {
      return true;
    }

    isDone = !!done;
  } while (!isDone);

  return false;
}

var HandlerRegistryImpl = /*#__PURE__*/function () {
  function HandlerRegistryImpl(store) {
    _classCallCheck$b(this, HandlerRegistryImpl);

    _defineProperty$c(this, "types", new Map());

    _defineProperty$c(this, "dragSources", new Map());

    _defineProperty$c(this, "dropTargets", new Map());

    _defineProperty$c(this, "pinnedSourceId", null);

    _defineProperty$c(this, "pinnedSource", null);

    _defineProperty$c(this, "store", void 0);

    this.store = store;
  }

  _createClass$b(HandlerRegistryImpl, [{
    key: "addSource",
    value: function addSource$1(type, source) {
      validateType(type);
      validateSourceContract(source);
      var sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
      this.store.dispatch(addSource(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget$1(type, target) {
      validateType(type, true);
      validateTargetContract(target);
      var targetId = this.addHandler(HandlerRole.TARGET, type, target);
      this.store.dispatch(addTarget(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget(targetId) {
      invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource$1(sourceId) {
      var _this = this;

      invariant(this.getSource(sourceId), 'Expected an existing source.');
      this.store.dispatch(removeSource(sourceId));
      asap(function () {
        _this.dragSources.delete(sourceId);

        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget$1(targetId) {
      invariant(this.getTarget(targetId), 'Expected an existing target.');
      this.store.dispatch(removeTarget(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      invariant(source, 'Expected an existing source.');
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      invariant(this.pinnedSource, 'No source is pinned at the time.');
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);

      if (role === HandlerRole.SOURCE) {
        this.dragSources.set(id, handler);
      } else if (role === HandlerRole.TARGET) {
        this.dropTargets.set(id, handler);
      }

      return id;
    }
  }]);

  return HandlerRegistryImpl;
}();

function createDragDropManager(backendFactory) {
  var globalContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var backendOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var debugMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var store = makeStoreInstance(debugMode);
  var monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  var manager = new DragDropManagerImpl(store, monitor);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}

function makeStoreInstance(debugMode) {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  var reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
    name: 'dnd-core',
    instanceId: 'dnd-core'
  }));
}

var _excluded = ["children"];

function _slicedToArray$4(arr, i) { return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$5(arr, i) || _nonIterableRest$4(); }

function _nonIterableRest$4() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$4(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$4(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var refCount = 0;
var INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
/**
 * A React component that provides the React-DnD context
 */

var DndProvider = React.memo(function DndProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _getDndContextValue = getDndContextValue(props),
      _getDndContextValue2 = _slicedToArray$4(_getDndContextValue, 2),
      manager = _getDndContextValue2[0],
      isGlobalInstance = _getDndContextValue2[1]; // memoized from props

  /**
   * If the global context was used to store the DND context
   * then where theres no more references to it we should
   * clean it up to avoid memory leaks
   */


  React.useEffect(function () {
    if (isGlobalInstance) {
      var context = getGlobalContext();
      ++refCount;
      return function () {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
  }, []);
  return require$$0.jsx(DndContext.Provider, Object.assign({
    value: manager
  }, {
    children: children
  }), void 0);
});

function getDndContextValue(props) {
  if ('manager' in props) {
    var _manager = {
      dragDropManager: props.manager
    };
    return [_manager, false];
  }

  var manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  var isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}

function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var debugMode = arguments.length > 3 ? arguments[3] : undefined;
  var ctx = context;

  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }

  return ctx[INSTANCE_SYM];
}

function getGlobalContext() {
  return typeof global !== 'undefined' ? global : window;
}

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl = /*#__PURE__*/function () {
  function DragSourceMonitorImpl(manager) {
    _classCallCheck$a(this, DragSourceMonitorImpl);

    _defineProperty$b(this, "internalMonitor", void 0);

    _defineProperty$b(this, "sourceId", null);

    this.internalMonitor = manager.getMonitor();
  }

  _createClass$a(DragSourceMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      invariant(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }

      invariant(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DragSourceMonitorImpl;
}();

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var isCallingCanDrop = false;
var DropTargetMonitorImpl = /*#__PURE__*/function () {
  function DropTargetMonitorImpl(manager) {
    _classCallCheck$9(this, DropTargetMonitorImpl);

    _defineProperty$a(this, "internalMonitor", void 0);

    _defineProperty$a(this, "targetId", null);

    this.internalMonitor = manager.getMonitor();
  }

  _createClass$9(DropTargetMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      // Cut out early if the target id has not been set. This should prevent errors
      // where the user has an older version of dnd-core like in
      // https://github.com/react-dnd/react-dnd/issues/1310
      if (!this.targetId) {
        return false;
      }

      invariant(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');

      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }

      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DropTargetMonitorImpl;
}();

function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }

  var displayName = element.type.displayName || element.type.name || 'the component';
  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // When passed a node, call the hook straight away.
    if (!React.isValidElement(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options); // return the node so it can be chained (e.g. when within callback refs
      // <div ref={node => connectDragSource(connectDropTarget(node))}/>

      return node;
    } // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.


    var element = elementOrNode;
    throwIfCompositeComponentElement(element); // When no options are passed, use the hook directly

    var ref = options ? function (node) {
      return hook(node, options);
    } : hook;
    return cloneWithRef(element, ref);
  };
}

function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function (key) {
    var hook = hooks[key]; // ref objects should be passed straight through without wrapping

    if (key.endsWith('Ref')) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);

      wrappedHooks[key] = function () {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}

function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else {
    ref.current = node;
  }
}

function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  invariant(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs');

  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return React.cloneElement(element, {
      ref: newRef
    });
  } else {
    return React.cloneElement(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function isRef(obj) {
  return (// eslint-disable-next-line no-prototype-builtins
    obj !== null && _typeof$1(obj) === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current')
  );
}

function shallowEqual(objA, objB, compare, compareContext) {
  var compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (compareResult !== void 0) {
    return !!compareResult;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
}

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var SourceConnector = /*#__PURE__*/function () {
  // The drop target may either be attached via ref or connect function
  // The drag preview may either be attached via ref or connect function
  function SourceConnector(backend) {
    var _this = this;

    _classCallCheck$8(this, SourceConnector);

    _defineProperty$9(this, "hooks", wrapConnectorHooks({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();

        _this.dragSourceOptions = options || null;

        if (isRef(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }

        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();

        _this.dragPreviewOptions = options || null;

        if (isRef(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }

        _this.reconnectDragPreview();
      }
    }));

    _defineProperty$9(this, "handlerId", null);

    _defineProperty$9(this, "dragSourceRef", null);

    _defineProperty$9(this, "dragSourceNode", void 0);

    _defineProperty$9(this, "dragSourceOptionsInternal", null);

    _defineProperty$9(this, "dragSourceUnsubscribe", void 0);

    _defineProperty$9(this, "dragPreviewRef", null);

    _defineProperty$9(this, "dragPreviewNode", void 0);

    _defineProperty$9(this, "dragPreviewOptionsInternal", null);

    _defineProperty$9(this, "dragPreviewUnsubscribe", void 0);

    _defineProperty$9(this, "lastConnectedHandlerId", null);

    _defineProperty$9(this, "lastConnectedDragSource", null);

    _defineProperty$9(this, "lastConnectedDragSourceOptions", null);

    _defineProperty$9(this, "lastConnectedDragPreview", null);

    _defineProperty$9(this, "lastConnectedDragPreviewOptions", null);

    _defineProperty$9(this, "backend", void 0);

    this.backend = backend;
  }

  _createClass$8(SourceConnector, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();

      if (didChange) {
        this.disconnectDragSource();
      }

      if (!this.handlerId) {
        return;
      }

      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();

      if (didChange) {
        this.disconnectDragPreview();
      }

      if (!this.handlerId) {
        return;
      }

      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = undefined;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = undefined;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "dragSource",
    get: function get() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }]);

  return SourceConnector;
}();

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var TargetConnector = /*#__PURE__*/function () {
  // The drop target may either be attached via ref or connect function
  function TargetConnector(backend) {
    var _this = this;

    _classCallCheck$7(this, TargetConnector);

    _defineProperty$8(this, "hooks", wrapConnectorHooks({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();

        _this.dropTargetOptions = options;

        if (isRef(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }

        _this.reconnect();
      }
    }));

    _defineProperty$8(this, "handlerId", null);

    _defineProperty$8(this, "dropTargetRef", null);

    _defineProperty$8(this, "dropTargetNode", void 0);

    _defineProperty$8(this, "dropTargetOptionsInternal", null);

    _defineProperty$8(this, "unsubscribeDropTarget", void 0);

    _defineProperty$8(this, "lastConnectedHandlerId", null);

    _defineProperty$8(this, "lastConnectedDropTarget", null);

    _defineProperty$8(this, "lastConnectedDropTargetOptions", null);

    _defineProperty$8(this, "backend", void 0);

    this.backend = backend;
  }

  _createClass$7(TargetConnector, [{
    key: "connectTarget",
    get: function get() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      // if nothing has changed then don't resubscribe
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();

      if (didChange) {
        this.disconnectDropTarget();
      }

      var dropTarget = this.dropTarget;

      if (!this.handlerId) {
        return;
      }

      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "dropTargetOptions",
    get: function get() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = undefined;
      }
    }
  }, {
    key: "dropTarget",
    get: function get() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }]);

  return TargetConnector;
}();

function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function () {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function () {
    return registry.removeSource(sourceId);
  }];
}

var useIsomorphicLayoutEffect$1 = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DragSourceImpl = /*#__PURE__*/function () {
  function DragSourceImpl(spec, monitor, connector) {
    _classCallCheck$6(this, DragSourceImpl);

    _defineProperty$7(this, "spec", void 0);

    _defineProperty$7(this, "monitor", void 0);

    _defineProperty$7(this, "connector", void 0);

    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }

  _createClass$6(DragSourceImpl, [{
    key: "beginDrag",
    value: function beginDrag() {
      var _result;

      var spec = this.spec;
      var monitor = this.monitor;
      var result = null;

      if (_typeof(spec.item) === 'object') {
        result = spec.item;
      } else if (typeof spec.item === 'function') {
        result = spec.item(monitor);
      } else {
        result = {};
      }

      return (_result = result) !== null && _result !== void 0 ? _result : null;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      var spec = this.spec;
      var monitor = this.monitor;

      if (typeof spec.canDrag === 'boolean') {
        return spec.canDrag;
      } else if (typeof spec.canDrag === 'function') {
        return spec.canDrag(monitor);
      } else {
        return true;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging(globalMonitor, target) {
      var spec = this.spec;
      var monitor = this.monitor;
      var isDragging = spec.isDragging;
      return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      var spec = this.spec;
      var monitor = this.monitor;
      var connector = this.connector;
      var end = spec.end;

      if (end) {
        end(monitor.getItem(), monitor);
      }

      connector.reconnect();
    }
  }]);

  return DragSourceImpl;
}();

function useDragSource(spec, monitor, connector) {
  var handler = React.useMemo(function () {
    return new DragSourceImpl(spec, monitor, connector);
  }, [monitor, connector]);
  React.useEffect(function () {
    handler.spec = spec;
  }, [spec]);
  return handler;
}

/**
 * A hook to retrieve the DragDropManager from Context
 */

function useDragDropManager() {
  var _useContext = React.useContext(DndContext),
      dragDropManager = _useContext.dragDropManager;

  invariant(dragDropManager != null, 'Expected drag drop context');
  return dragDropManager;
}

function useDragType(spec) {
  return React.useMemo(function () {
    var result = spec.type;
    invariant(result != null, 'spec.type must be defined');
    return result;
  }, [spec]);
}

function _slicedToArray$3(arr, i) { return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$3(); }

function _nonIterableRest$3() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$3(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$3(arr) { if (Array.isArray(arr)) return arr; }
function useRegisteredDragSource(spec, monitor, connector) {
  var manager = useDragDropManager();
  var handler = useDragSource(spec, monitor, connector);
  var itemType = useDragType(spec);
  useIsomorphicLayoutEffect$1(function registerDragSource() {
    if (itemType != null) {
      var _registerSource = registerSource(itemType, handler, manager),
          _registerSource2 = _slicedToArray$3(_registerSource, 2),
          handlerId = _registerSource2[0],
          unregister = _registerSource2[1];

      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
  }, [manager, monitor, connector, handler, itemType]);
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$3(arr); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function useOptionalFactory(arg, deps) {
  var memoDeps = _toConsumableArray(deps || []);

  if (deps == null && typeof arg !== 'function') {
    memoDeps.push(arg);
  }

  return React.useMemo(function () {
    return typeof arg === 'function' ? arg() : arg;
  }, memoDeps);
}

function useDragSourceMonitor() {
  var manager = useDragDropManager();
  return React.useMemo(function () {
    return new DragSourceMonitorImpl(manager);
  }, [manager]);
}

function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  var manager = useDragDropManager();
  var connector = React.useMemo(function () {
    return new SourceConnector(manager.getBackend());
  }, [manager]);
  useIsomorphicLayoutEffect$1(function () {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return function () {
      return connector.disconnectDragSource();
    };
  }, [connector, dragSourceOptions]);
  useIsomorphicLayoutEffect$1(function () {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return function () {
      return connector.disconnectDragPreview();
    };
  }, [connector, dragPreviewOptions]);
  return connector;
}

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

function _slicedToArray$2(arr, i) { return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2(); }

function _nonIterableRest$2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$2(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$2(arr) { if (Array.isArray(arr)) return arr; }
/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */

function useCollector(monitor, collect, onUpdate) {
  var _useState = React.useState(function () {
    return collect(monitor);
  }),
      _useState2 = _slicedToArray$2(_useState, 2),
      collected = _useState2[0],
      setCollected = _useState2[1];

  var updateCollected = React.useCallback(function () {
    var nextValue = collect(monitor); // This needs to be a deep-equality check because some monitor-collected values
    // include XYCoord objects that may be equivalent, but do not have instance equality.

    if (!fastDeepEqual(collected, nextValue)) {
      setCollected(nextValue);

      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]); // update the collected properties after react renders.
  // Note that the "Dustbin Stress Test" fails if this is not
  // done when the component updates

  useIsomorphicLayoutEffect$1(updateCollected);
  return [collected, updateCollected];
}

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = useCollector(monitor, collect, onCollect),
      _useCollector2 = _slicedToArray$1(_useCollector, 2),
      collected = _useCollector2[0],
      updateCollected = _useCollector2[1];

  useIsomorphicLayoutEffect$1(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();

    if (handlerId == null) {
      return;
    }

    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}

function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(monitor, collector || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
}

function useConnectDragSource(connector) {
  return React.useMemo(function () {
    return connector.hooks.dragSource();
  }, [connector]);
}
function useConnectDragPreview(connector) {
  return React.useMemo(function () {
    return connector.hooks.dragPreview();
  }, [connector]);
}

/**
 * useDragSource hook
 * @param sourceSpec The drag source specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */

function useDrag(specArg, deps) {
  var spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var monitor = useDragSourceMonitor();
  var connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDragSource(connector), useConnectDragPreview(connector)];
}

/**
 * Internal utility hook to get an array-version of spec.accept.
 * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
 * @param spec
 */

function useAccept(spec) {
  var accept = spec.accept;
  return React.useMemo(function () {
    invariant(spec.accept != null, 'accept must be defined');
    return Array.isArray(accept) ? accept : [accept];
  }, [accept]);
}

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropTargetImpl = /*#__PURE__*/function () {
  function DropTargetImpl(spec, monitor) {
    _classCallCheck$5(this, DropTargetImpl);

    _defineProperty$6(this, "spec", void 0);

    _defineProperty$6(this, "monitor", void 0);

    this.spec = spec;
    this.monitor = monitor;
  }

  _createClass$5(DropTargetImpl, [{
    key: "canDrop",
    value: function canDrop() {
      var spec = this.spec;
      var monitor = this.monitor;
      return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
  }, {
    key: "hover",
    value: function hover() {
      var spec = this.spec;
      var monitor = this.monitor;

      if (spec.hover) {
        spec.hover(monitor.getItem(), monitor);
      }
    }
  }, {
    key: "drop",
    value: function drop() {
      var spec = this.spec;
      var monitor = this.monitor;

      if (spec.drop) {
        return spec.drop(monitor.getItem(), monitor);
      }
    }
  }]);

  return DropTargetImpl;
}();

function useDropTarget(spec, monitor) {
  var dropTarget = React.useMemo(function () {
    return new DropTargetImpl(spec, monitor);
  }, [monitor]);
  React.useEffect(function () {
    dropTarget.spec = spec;
  }, [spec]);
  return dropTarget;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useRegisteredDropTarget(spec, monitor, connector) {
  var manager = useDragDropManager();
  var dropTarget = useDropTarget(spec, monitor);
  var accept = useAccept(spec);
  useIsomorphicLayoutEffect$1(function registerDropTarget() {
    var _registerTarget = registerTarget(accept, dropTarget, manager),
        _registerTarget2 = _slicedToArray(_registerTarget, 2),
        handlerId = _registerTarget2[0],
        unregister = _registerTarget2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [manager, monitor, dropTarget, connector, accept.map(function (a) {
    return a.toString();
  }).join('|')]);
}

function useDropTargetMonitor() {
  var manager = useDragDropManager();
  return React.useMemo(function () {
    return new DropTargetMonitorImpl(manager);
  }, [manager]);
}

function useDropTargetConnector(options) {
  var manager = useDragDropManager();
  var connector = React.useMemo(function () {
    return new TargetConnector(manager.getBackend());
  }, [manager]);
  useIsomorphicLayoutEffect$1(function () {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return function () {
      return connector.disconnectDropTarget();
    };
  }, [options]);
  return connector;
}

function useConnectDropTarget(connector) {
  return React.useMemo(function () {
    return connector.hooks.dropTarget();
  }, [connector]);
}

/**
 * useDropTarget Hook
 * @param spec The drop target specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */

function useDrop(specArg, deps) {
  var spec = useOptionalFactory(specArg, deps);
  var monitor = useDropTargetMonitor();
  var connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDropTarget(connector)];
}

// cheap lodash replacements
function memoize(fn) {
  var result = null;

  var memoized = function memoized() {
    if (result == null) {
      result = fn();
    }

    return result;
  };

  return memoized;
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
function union(itemsA, itemsB) {
  var set = new Set();

  var insertItem = function insertItem(item) {
    return set.add(item);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  set.forEach(function (key) {
    return result.push(key);
  });
  return result;
}

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var EnterLeaveCounter = /*#__PURE__*/function () {
  function EnterLeaveCounter(isNodeInDocument) {
    _classCallCheck$4(this, EnterLeaveCounter);

    _defineProperty$5(this, "entered", []);

    _defineProperty$5(this, "isNodeInDocument", void 0);

    this.isNodeInDocument = isNodeInDocument;
  }

  _createClass$4(EnterLeaveCounter, [{
    key: "enter",
    value: function enter(enteringNode) {
      var _this = this;

      var previousLength = this.entered.length;

      var isNodeEntered = function isNodeEntered(node) {
        return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
      };

      this.entered = union(this.entered.filter(isNodeEntered), [enteringNode]);
      return previousLength === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function leave(leavingNode) {
      var previousLength = this.entered.length;
      this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
      return previousLength > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.entered = [];
    }
  }]);

  return EnterLeaveCounter;
}();

var isFirefox = memoize(function () {
  return /firefox/i.test(navigator.userAgent);
});
var isSafari = memoize(function () {
  return Boolean(window.safari);
});

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MonotonicInterpolant = /*#__PURE__*/function () {
  function MonotonicInterpolant(xs, ys) {
    _classCallCheck$3(this, MonotonicInterpolant);

    _defineProperty$4(this, "xs", void 0);

    _defineProperty$4(this, "ys", void 0);

    _defineProperty$4(this, "c1s", void 0);

    _defineProperty$4(this, "c2s", void 0);

    _defineProperty$4(this, "c3s", void 0);

    var length = xs.length; // Rearrange xs and ys so that xs is sorted

    var indexes = [];

    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }

    indexes.sort(function (a, b) {
      return xs[a] < xs[b] ? -1 : 1;
    }); // Get consecutive differences and slopes
    var dxs = [];
    var ms = [];
    var dx;
    var dy;

    for (var _i = 0; _i < length - 1; _i++) {
      dx = xs[_i + 1] - xs[_i];
      dy = ys[_i + 1] - ys[_i];
      dxs.push(dx);
      ms.push(dy / dx);
    } // Get degree-1 coefficients


    var c1s = [ms[0]];

    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
      var m2 = ms[_i2];
      var mNext = ms[_i2 + 1];

      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[_i2];
        var dxNext = dxs[_i2 + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }

    c1s.push(ms[ms.length - 1]); // Get degree-2 and degree-3 coefficients

    var c2s = [];
    var c3s = [];
    var m;

    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
      m = ms[_i3];
      var c1 = c1s[_i3];
      var invDx = 1 / dxs[_i3];

      var _common = c1 + c1s[_i3 + 1] - m - m;

      c2s.push((m - c1 - _common) * invDx);
      c3s.push(_common * invDx * invDx);
    }

    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }

  _createClass$3(MonotonicInterpolant, [{
    key: "interpolate",
    value: function interpolate(x) {
      var xs = this.xs,
          ys = this.ys,
          c1s = this.c1s,
          c2s = this.c2s,
          c3s = this.c3s; // The rightmost point in the dataset should give an exact result

      var i = xs.length - 1;

      if (x === xs[i]) {
        return ys[i];
      } // Search for the interval x is in, returning the corresponding y if x is one of the original xs


      var low = 0;
      var high = c3s.length - 1;
      var mid;

      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];

        if (xHere < x) {
          low = mid + 1;
        } else if (xHere > x) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }

      i = Math.max(0, high); // Interpolate

      var diff = x - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
  }]);

  return MonotonicInterpolant;
}();

var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

  if (!el) {
    return null;
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

function isImageNode(node) {
  var _document$documentEle;

  return node.nodeName === 'IMG' && (isFirefox() || !((_document$documentEle = document.documentElement) !== null && _document$documentEle !== void 0 && _document$documentEle.contains(node)));
}

function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight; // Work around @2x coordinate discrepancies in browsers

  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }

  return {
    dragPreviewWidth: dragPreviewWidth,
    dragPreviewHeight: dragPreviewHeight
  };
}

function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  // The browsers will use the image intrinsic size under different conditions.
  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
  var isImage = isImageNode(dragPreview);
  var dragPreviewNode = isImage ? sourceNode : dragPreview;
  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  var sourceWidth = sourceNode.offsetWidth,
      sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX,
      anchorY = anchorPoint.anchorY;

  var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight),
      dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth,
      dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;

  var calculateYOffset = function calculateYOffset() {
    var interpolantY = new MonotonicInterpolant([0, 0.5, 1], [// Dock to the top
    offsetFromDragPreview.y, // Align at the center
    offsetFromDragPreview.y / sourceHeight * dragPreviewHeight, // Dock to the bottom
    offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
    var y = interpolantY.interpolate(anchorY); // Work around Safari 8 positioning bug

    if (isSafari() && isImage) {
      // We'll have to wait for @3x to see if this is entirely correct
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }

    return y;
  };

  var calculateXOffset = function calculateXOffset() {
    // Interpolate coordinates depending on anchor point
    // If you know a simpler way to do this, let me know
    var interpolantX = new MonotonicInterpolant([0, 0.5, 1], [// Dock to the left
    offsetFromDragPreview.x, // Align at the center
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth, // Dock to the right
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
    return interpolantX.interpolate(anchorX);
  }; // Force offsets if specified in the options.


  var offsetX = offsetPoint.offsetX,
      offsetY = offsetPoint.offsetY;
  var isManualOffsetX = offsetX === 0 || offsetX;
  var isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

var FILE = '__NATIVE_FILE__';
var URL = '__NATIVE_URL__';
var TEXT = '__NATIVE_TEXT__';
var HTML = '__NATIVE_HTML__';

var NativeTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FILE: FILE,
  URL: URL,
  TEXT: TEXT,
  HTML: HTML
});

function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer.getData(typeToTry);
  }, '');
  return result != null ? result : defaultValue;
}

var _nativeTypesConfig;

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty$3(_nativeTypesConfig, FILE, {
  exposeProperties: {
    files: function files(dataTransfer) {
      return Array.prototype.slice.call(dataTransfer.files);
    },
    items: function items(dataTransfer) {
      return dataTransfer.items;
    }
  },
  matchesTypes: ['Files']
}), _defineProperty$3(_nativeTypesConfig, HTML, {
  exposeProperties: {
    html: function html(dataTransfer, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
    }
  },
  matchesTypes: ['Html', 'text/html']
}), _defineProperty$3(_nativeTypesConfig, URL, {
  exposeProperties: {
    urls: function urls(dataTransfer, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
    }
  },
  matchesTypes: ['Url', 'text/uri-list']
}), _defineProperty$3(_nativeTypesConfig, TEXT, {
  exposeProperties: {
    text: function text(dataTransfer, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
    }
  },
  matchesTypes: ['Text', 'text/plain']
}), _nativeTypesConfig);

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NativeDragSource = /*#__PURE__*/function () {
  function NativeDragSource(config) {
    _classCallCheck$2(this, NativeDragSource);

    _defineProperty$2(this, "item", void 0);

    _defineProperty$2(this, "config", void 0);

    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }

  _createClass$2(NativeDragSource, [{
    key: "initializeExposedProperties",
    value: function initializeExposedProperties() {
      var _this = this;

      Object.keys(this.config.exposeProperties).forEach(function (property) {
        Object.defineProperty(_this.item, property, {
          configurable: true,
          enumerable: true,
          get: function get() {
            // eslint-disable-next-line no-console
            console.warn("Browser doesn't allow reading \"".concat(property, "\" until the drop event."));
            return null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function loadDataTransfer(dataTransfer) {
      var _this2 = this;

      if (dataTransfer) {
        var newProperties = {};
        Object.keys(this.config.exposeProperties).forEach(function (property) {
          newProperties[property] = {
            value: _this2.config.exposeProperties[property](dataTransfer, _this2.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        });
        Object.defineProperties(this.item, newProperties);
      }
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "beginDrag",
    value: function beginDrag() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {// empty
    }
  }]);

  return NativeDragSource;
}();

function createNativeDragSource(type, dataTransfer) {
  var result = new NativeDragSource(nativeTypesConfig[type]);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }

  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
    return matchesTypes.some(function (t) {
      return dataTransferTypes.indexOf(t) > -1;
    });
  })[0] || null;
}

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OptionsReader = /*#__PURE__*/function () {
  function OptionsReader(globalContext, options) {
    _classCallCheck$1(this, OptionsReader);

    _defineProperty$1(this, "ownerDocument", null);

    _defineProperty$1(this, "globalContext", void 0);

    _defineProperty$1(this, "optionsArgs", void 0);

    this.globalContext = globalContext;
    this.optionsArgs = options;
  }

  _createClass$1(OptionsReader, [{
    key: "window",
    get: function get() {
      if (this.globalContext) {
        return this.globalContext;
      } else if (typeof window !== 'undefined') {
        return window;
      }

      return undefined;
    }
  }, {
    key: "document",
    get: function get() {
      var _this$globalContext;

      if ((_this$globalContext = this.globalContext) !== null && _this$globalContext !== void 0 && _this$globalContext.document) {
        return this.globalContext.document;
      } else if (this.window) {
        return this.window.document;
      } else {
        return undefined;
      }
    }
  }, {
    key: "rootElement",
    get: function get() {
      var _this$optionsArgs;

      return ((_this$optionsArgs = this.optionsArgs) === null || _this$optionsArgs === void 0 ? void 0 : _this$optionsArgs.rootElement) || this.window;
    }
  }]);

  return OptionsReader;
}();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var HTML5BackendImpl = /*#__PURE__*/function () {
  // React-Dnd Components
  // Internal State
  function HTML5BackendImpl(manager, globalContext, options) {
    var _this = this;

    _classCallCheck(this, HTML5BackendImpl);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "actions", void 0);

    _defineProperty(this, "monitor", void 0);

    _defineProperty(this, "registry", void 0);

    _defineProperty(this, "enterLeaveCounter", void 0);

    _defineProperty(this, "sourcePreviewNodes", new Map());

    _defineProperty(this, "sourcePreviewNodeOptions", new Map());

    _defineProperty(this, "sourceNodes", new Map());

    _defineProperty(this, "sourceNodeOptions", new Map());

    _defineProperty(this, "dragStartSourceIds", null);

    _defineProperty(this, "dropTargetIds", []);

    _defineProperty(this, "dragEnterTargetIds", []);

    _defineProperty(this, "currentNativeSource", null);

    _defineProperty(this, "currentNativeHandle", null);

    _defineProperty(this, "currentDragSourceNode", null);

    _defineProperty(this, "altKeyPressed", false);

    _defineProperty(this, "mouseMoveTimeoutTimer", null);

    _defineProperty(this, "asyncEndDragFrameId", null);

    _defineProperty(this, "dragOverTargetIds", null);

    _defineProperty(this, "getSourceClientOffset", function (sourceId) {
      var source = _this.sourceNodes.get(sourceId);

      return source && getNodeClientOffset(source) || null;
    });

    _defineProperty(this, "endDragNativeItem", function () {
      if (!_this.isDraggingNativeItem()) {
        return;
      }

      _this.actions.endDrag();

      if (_this.currentNativeHandle) {
        _this.registry.removeSource(_this.currentNativeHandle);
      }

      _this.currentNativeHandle = null;
      _this.currentNativeSource = null;
    });

    _defineProperty(this, "isNodeInDocument", function (node) {
      // Check the node either in the main document or in the current context
      return Boolean(node && _this.document && _this.document.body && _this.document.body.contains(node));
    });

    _defineProperty(this, "endDragIfSourceWasRemovedFromDOM", function () {
      var node = _this.currentDragSourceNode;

      if (node == null || _this.isNodeInDocument(node)) {
        return;
      }

      if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });

    _defineProperty(this, "handleTopDragStartCapture", function () {
      _this.clearCurrentDragSourceNode();

      _this.dragStartSourceIds = [];
    });

    _defineProperty(this, "handleTopDragStart", function (e) {
      if (e.defaultPrevented) {
        return;
      }

      var dragStartSourceIds = _this.dragStartSourceIds;
      _this.dragStartSourceIds = null;
      var clientOffset = getEventClientOffset(e); // Avoid crashing if we missed a drop event or our previous drag died

      if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      } // Don't publish the source just yet (see why below)


      _this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: _this.getSourceClientOffset,
        clientOffset: clientOffset
      });

      var dataTransfer = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer);

      if (_this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
          // Use custom drag image if user specifies it.
          // If child drag source refuses drag but parent agrees,
          // use parent's node as drag image. Neither works in IE though.
          var sourceId = _this.monitor.getSourceId();

          var sourceNode = _this.sourceNodes.get(sourceId);

          var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;

          if (dragPreview) {
            var _this$getCurrentSourc = _this.getCurrentSourcePreviewNodeOptions(),
                anchorX = _this$getCurrentSourc.anchorX,
                anchorY = _this$getCurrentSourc.anchorY,
                offsetX = _this$getCurrentSourc.offsetX,
                offsetY = _this$getCurrentSourc.offsetY;

            var anchorPoint = {
              anchorX: anchorX,
              anchorY: anchorY
            };
            var offsetPoint = {
              offsetX: offsetX,
              offsetY: offsetY
            };
            var dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }

        try {
          // Firefox won't drag without setting data
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData('application/json', {});
        } catch (err) {// IE doesn't support MIME types in setData
        } // Store drag source node so we can check whether
        // it is removed from DOM and trigger endDrag manually.


        _this.setCurrentDragSourceNode(e.target); // Now we are ready to publish the drag source.. or are we not?


        var _this$getCurrentSourc2 = _this.getCurrentSourcePreviewNodeOptions(),
            captureDraggingState = _this$getCurrentSourc2.captureDraggingState;

        if (!captureDraggingState) {
          // Usually we want to publish it in the next tick so that browser
          // is able to screenshot the current (not yet dragging) state.
          //
          // It also neatly avoids a situation where render() returns null
          // in the same tick for the source element, and browser freaks out.
          setTimeout(function () {
            return _this.actions.publishDragSource();
          }, 0);
        } else {
          // In some cases the user may want to override this behavior, e.g.
          // to work around IE not supporting custom drag previews.
          //
          // When using a custom drag layer, the only way to prevent
          // the default drag preview from drawing in IE is to screenshot
          // the dragging state in which the node itself has zero opacity
          // and height. In this case, though, returning null from render()
          // will abruptly end the dragging, which is not obvious.
          //
          // This is the reason such behavior is strictly opt-in.
          _this.actions.publishDragSource();
        }
      } else if (nativeType) {
        // A native item (such as URL) dragged from inside the document
        _this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
        // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
        // Just let it drag. It's a native type (URL or text) and will be picked up in
        // dragenter handler.
        return;
      } else {
        // If by this time no drag source reacted, tell browser not to drag.
        e.preventDefault();
      }
    });

    _defineProperty(this, "handleTopDragEndCapture", function () {
      if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
        // Firefox can dispatch this event in an infinite loop
        // if dragend handler does something like showing an alert.
        // Only proceed if we have not handled it already.
        _this.actions.endDrag();
      }
    });

    _defineProperty(this, "handleTopDragEnterCapture", function (e) {
      _this.dragEnterTargetIds = [];

      var isFirstEnter = _this.enterLeaveCounter.enter(e.target);

      if (!isFirstEnter || _this.monitor.isDragging()) {
        return;
      }

      var dataTransfer = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer);

      if (nativeType) {
        // A native item (such as file or URL) dragged from outside the document
        _this.beginDragNativeItem(nativeType, dataTransfer);
      }
    });

    _defineProperty(this, "handleTopDragEnter", function (e) {
      var dragEnterTargetIds = _this.dragEnterTargetIds;
      _this.dragEnterTargetIds = [];

      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        return;
      }

      _this.altKeyPressed = e.altKey; // If the target changes position as the result of `dragenter`, `dragover` might still
      // get dispatched despite target being no longer there. The easy solution is to check
      // whether there actually is a target before firing `hover`.

      if (dragEnterTargetIds.length > 0) {
        _this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }

      var canDrop = dragEnterTargetIds.some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // IE requires this to fire dragover events
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      }
    });

    _defineProperty(this, "handleTopDragOverCapture", function () {
      _this.dragOverTargetIds = [];
    });

    _defineProperty(this, "handleTopDragOver", function (e) {
      var dragOverTargetIds = _this.dragOverTargetIds;
      _this.dragOverTargetIds = [];

      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        // Prevent default "drop and blow away the whole document" action.
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }

        return;
      }

      _this.altKeyPressed = e.altKey;

      _this.actions.hover(dragOverTargetIds || [], {
        clientOffset: getEventClientOffset(e)
      });

      var canDrop = (dragOverTargetIds || []).some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // Show user-specified drop effect.
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      } else if (_this.isDraggingNativeItem()) {
        // Don't show a nice cursor but still prevent default
        // "drop and blow away the whole document" action.
        e.preventDefault();
      } else {
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }
      }
    });

    _defineProperty(this, "handleTopDragLeaveCapture", function (e) {
      if (_this.isDraggingNativeItem()) {
        e.preventDefault();
      }

      var isLastLeave = _this.enterLeaveCounter.leave(e.target);

      if (!isLastLeave) {
        return;
      }

      if (_this.isDraggingNativeItem()) {
        setTimeout(function () {
          return _this.endDragNativeItem();
        }, 0);
      }
    });

    _defineProperty(this, "handleTopDropCapture", function (e) {
      _this.dropTargetIds = [];

      if (_this.isDraggingNativeItem()) {
        var _this$currentNativeSo;

        e.preventDefault();
        (_this$currentNativeSo = _this.currentNativeSource) === null || _this$currentNativeSo === void 0 ? void 0 : _this$currentNativeSo.loadDataTransfer(e.dataTransfer);
      } else if (matchNativeItemType(e.dataTransfer)) {
        // Dragging some elements, like <a> and <img> may still behave like a native drag event,
        // even if the current drag event matches a user-defined type.
        // Stop the default behavior when we're not expecting a native item to be dropped.
        e.preventDefault();
      }

      _this.enterLeaveCounter.reset();
    });

    _defineProperty(this, "handleTopDrop", function (e) {
      var dropTargetIds = _this.dropTargetIds;
      _this.dropTargetIds = [];

      _this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });

      _this.actions.drop({
        dropEffect: _this.getCurrentDropEffect()
      });

      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      } else if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });

    _defineProperty(this, "handleSelectStart", function (e) {
      var target = e.target; // Only IE requires us to explicitly say
      // we want drag drop operation to start

      if (typeof target.dragDrop !== 'function') {
        return;
      } // Inputs and textareas should be selectable


      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      } // For other targets, ask IE
      // to enable drag and drop


      e.preventDefault();
      target.dragDrop();
    });

    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
  /**
   * Generate profiling statistics for the HTML5Backend.
   */


  _createClass(HTML5BackendImpl, [{
    key: "profile",
    value: function profile() {
      var _this$dragStartSource, _this$dragOverTargetI;

      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((_this$dragStartSource = this.dragStartSourceIds) === null || _this$dragStartSource === void 0 ? void 0 : _this$dragStartSource.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((_this$dragOverTargetI = this.dragOverTargetIds) === null || _this$dragOverTargetI === void 0 ? void 0 : _this$dragOverTargetI.length) || 0
      };
    } // public for test

  }, {
    key: "window",
    get: function get() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function get() {
      return this.options.document;
    }
    /**
     * Get the root element to use for event subscriptions
     */

  }, {
    key: "rootElement",
    get: function get() {
      return this.options.rootElement;
    }
  }, {
    key: "setup",
    value: function setup() {
      var root = this.rootElement;

      if (root === undefined) {
        return;
      }

      if (root.__isReactDndBackendSetUp) {
        throw new Error('Cannot have two HTML5 backends at the same time.');
      }

      root.__isReactDndBackendSetUp = true;
      this.addEventListeners(root);
    }
  }, {
    key: "teardown",
    value: function teardown() {
      var root = this.rootElement;

      if (root === undefined) {
        return;
      }

      root.__isReactDndBackendSetUp = false;
      this.removeEventListeners(this.rootElement);
      this.clearCurrentDragSourceNode();

      if (this.asyncEndDragFrameId) {
        var _this$window;

        (_this$window = this.window) === null || _this$window === void 0 ? void 0 : _this$window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function connectDragPreview(sourceId, node, options) {
      var _this2 = this;

      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function () {
        _this2.sourcePreviewNodes.delete(sourceId);

        _this2.sourcePreviewNodeOptions.delete(sourceId);
      };
    }
  }, {
    key: "connectDragSource",
    value: function connectDragSource(sourceId, node, options) {
      var _this3 = this;

      this.sourceNodes.set(sourceId, node);
      this.sourceNodeOptions.set(sourceId, options);

      var handleDragStart = function handleDragStart(e) {
        return _this3.handleDragStart(e, sourceId);
      };

      var handleSelectStart = function handleSelectStart(e) {
        return _this3.handleSelectStart(e);
      };

      node.setAttribute('draggable', 'true');
      node.addEventListener('dragstart', handleDragStart);
      node.addEventListener('selectstart', handleSelectStart);
      return function () {
        _this3.sourceNodes.delete(sourceId);

        _this3.sourceNodeOptions.delete(sourceId);

        node.removeEventListener('dragstart', handleDragStart);
        node.removeEventListener('selectstart', handleSelectStart);
        node.setAttribute('draggable', 'false');
      };
    }
  }, {
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this4 = this;

      var handleDragEnter = function handleDragEnter(e) {
        return _this4.handleDragEnter(e, targetId);
      };

      var handleDragOver = function handleDragOver(e) {
        return _this4.handleDragOver(e, targetId);
      };

      var handleDrop = function handleDrop(e) {
        return _this4.handleDrop(e, targetId);
      };

      node.addEventListener('dragenter', handleDragEnter);
      node.addEventListener('dragover', handleDragOver);
      node.addEventListener('drop', handleDrop);
      return function () {
        node.removeEventListener('dragenter', handleDragEnter);
        node.removeEventListener('dragover', handleDragOver);
        node.removeEventListener('drop', handleDrop);
      };
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.addEventListener) {
        return;
      }

      target.addEventListener('dragstart', this.handleTopDragStart);
      target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.addEventListener('dragend', this.handleTopDragEndCapture, true);
      target.addEventListener('dragenter', this.handleTopDragEnter);
      target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.addEventListener('dragover', this.handleTopDragOver);
      target.addEventListener('dragover', this.handleTopDragOverCapture, true);
      target.addEventListener('drop', this.handleTopDrop);
      target.addEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.removeEventListener) {
        return;
      }

      target.removeEventListener('dragstart', this.handleTopDragStart);
      target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
      target.removeEventListener('dragenter', this.handleTopDragEnter);
      target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.removeEventListener('dragover', this.handleTopDragOver);
      target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
      target.removeEventListener('drop', this.handleTopDrop);
      target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function getCurrentSourceNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
      return _objectSpread({
        dropEffect: this.altKeyPressed ? 'copy' : 'move'
      }, sourceNodeOptions || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function getCurrentDropEffect() {
      if (this.isDraggingNativeItem()) {
        // It makes more sense to default to 'copy' for native resources
        return 'copy';
      }

      return this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function getCurrentSourcePreviewNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
      return _objectSpread({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: false
      }, sourcePreviewNodeOptions || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function isDraggingNativeItem() {
      var itemType = this.monitor.getItemType();
      return Object.keys(NativeTypes).some(function (key) {
        return NativeTypes[key] === itemType;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function beginDragNativeItem(type, dataTransfer) {
      this.clearCurrentDragSourceNode();
      this.currentNativeSource = createNativeDragSource(type, dataTransfer);
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function setCurrentDragSourceNode(node) {
      var _this5 = this;

      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node; // A timeout of > 0 is necessary to resolve Firefox issue referenced
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869

      var MOUSE_MOVE_TIMEOUT = 1000; // Receiving a mouse event in the middle of a dragging operation
      // means it has ended and the drag source node disappeared from DOM,
      // so the browser didn't dispatch the dragend event.
      //
      // We need to wait before we start listening for mousemove events.
      // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
      // immediately in some browsers.
      //
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869
      //

      this.mouseMoveTimeoutTimer = setTimeout(function () {
        var _this5$rootElement;

        return (_this5$rootElement = _this5.rootElement) === null || _this5$rootElement === void 0 ? void 0 : _this5$rootElement.addEventListener('mousemove', _this5.endDragIfSourceWasRemovedFromDOM, true);
      }, MOUSE_MOVE_TIMEOUT);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function clearCurrentDragSourceNode() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;

        if (this.rootElement) {
          var _this$window2;

          (_this$window2 = this.window) === null || _this$window2 === void 0 ? void 0 : _this$window2.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
          this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }

        this.mouseMoveTimeoutTimer = null;
        return true;
      }

      return false;
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e, sourceId) {
      if (e.defaultPrevented) {
        return;
      }

      if (!this.dragStartSourceIds) {
        this.dragStartSourceIds = [];
      }

      this.dragStartSourceIds.unshift(sourceId);
    }
  }, {
    key: "handleDragEnter",
    value: function handleDragEnter(e, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e, targetId) {
      if (this.dragOverTargetIds === null) {
        this.dragOverTargetIds = [];
      }

      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e, targetId) {
      this.dropTargetIds.unshift(targetId);
    }
  }]);

  return HTML5BackendImpl;
}();

var HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
}(scheduler_production_min));

var scheduler_development = {};

/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var enableSchedulerDebugging = false;
var enableProfiling = false;

var requestHostCallback;
var requestHostTimeout;
var cancelHostTimeout;
var requestPaint;
var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

if (hasPerformanceNow) {
  var localPerformance = performance;

  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date;
  var initialTime = localDate.now();

  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
}

if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
typeof window === 'undefined' || // Check if MessageChannel is supported, too.
typeof MessageChannel !== 'function') {
  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
  // fallback to a naive implementation.
  var _callback = null;
  var _timeoutID = null;

  var _flushCallback = function () {
    if (_callback !== null) {
      try {
        var currentTime = exports.unstable_now();
        var hasRemainingTime = true;

        _callback(hasRemainingTime, currentTime);

        _callback = null;
      } catch (e) {
        setTimeout(_flushCallback, 0);
        throw e;
      }
    }
  };

  requestHostCallback = function (cb) {
    if (_callback !== null) {
      // Protect against re-entrancy.
      setTimeout(requestHostCallback, 0, cb);
    } else {
      _callback = cb;
      setTimeout(_flushCallback, 0);
    }
  };

  requestHostTimeout = function (cb, ms) {
    _timeoutID = setTimeout(cb, ms);
  };

  cancelHostTimeout = function () {
    clearTimeout(_timeoutID);
  };

  exports.unstable_shouldYield = function () {
    return false;
  };

  requestPaint = exports.unstable_forceFrameRate = function () {};
} else {
  // Capture local references to native APIs, in case a polyfill overrides them.
  var _setTimeout = window.setTimeout;
  var _clearTimeout = window.clearTimeout;

  if (typeof console !== 'undefined') {
    // TODO: Scheduler no longer requires these methods to be polyfilled. But
    // maybe we want to continue warning if they don't exist, to preserve the
    // option to rely on it in the future?
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;

    if (typeof requestAnimationFrame !== 'function') {
      // Using console['error'] to evade Babel and ESLint
      console['error']("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
    }

    if (typeof cancelAnimationFrame !== 'function') {
      // Using console['error'] to evade Babel and ESLint
      console['error']("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
    }
  }

  var isMessageLoopRunning = false;
  var scheduledHostCallback = null;
  var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
  // thread, like user events. By default, it yields multiple times per frame.
  // It does not attempt to align with frame boundaries, since most tasks don't
  // need to be frame aligned; for those that do, use requestAnimationFrame.

  var yieldInterval = 5;
  var deadline = 0; // TODO: Make this configurable

  {
    // `isInputPending` is not available. Since we have no way of knowing if
    // there's pending input, always yield at the end of the frame.
    exports.unstable_shouldYield = function () {
      return exports.unstable_now() >= deadline;
    }; // Since we yield every frame regardless, `requestPaint` has no effect.


    requestPaint = function () {};
  }

  exports.unstable_forceFrameRate = function (fps) {
    if (fps < 0 || fps > 125) {
      // Using console['error'] to evade Babel and ESLint
      console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
      return;
    }

    if (fps > 0) {
      yieldInterval = Math.floor(1000 / fps);
    } else {
      // reset the framerate
      yieldInterval = 5;
    }
  };

  var performWorkUntilDeadline = function () {
    if (scheduledHostCallback !== null) {
      var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
      // cycle. This means there's always time remaining at the beginning of
      // the message event.

      deadline = currentTime + yieldInterval;
      var hasTimeRemaining = true;

      try {
        var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

        if (!hasMoreWork) {
          isMessageLoopRunning = false;
          scheduledHostCallback = null;
        } else {
          // If there's more work, schedule the next message event at the end
          // of the preceding one.
          port.postMessage(null);
        }
      } catch (error) {
        // If a scheduler task throws, exit the current browser task so the
        // error can be observed.
        port.postMessage(null);
        throw error;
      }
    } else {
      isMessageLoopRunning = false;
    } // Yielding to the browser will give it a chance to paint, so we can
  };

  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  requestHostCallback = function (callback) {
    scheduledHostCallback = callback;

    if (!isMessageLoopRunning) {
      isMessageLoopRunning = true;
      port.postMessage(null);
    }
  };

  requestHostTimeout = function (callback, ms) {
    taskTimeoutID = _setTimeout(function () {
      callback(exports.unstable_now());
    }, ms);
  };

  cancelHostTimeout = function () {
    _clearTimeout(taskTimeoutID);

    taskTimeoutID = -1;
  };
}

function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}
function peek(heap) {
  var first = heap[0];
  return first === undefined ? null : first;
}
function pop(heap) {
  var first = heap[0];

  if (first !== undefined) {
    var last = heap.pop();

    if (last !== first) {
      heap[0] = last;
      siftDown(heap, last, 0);
    }

    return first;
  } else {
    return null;
  }
}

function siftUp(heap, node, i) {
  var index = i;

  while (true) {
    var parentIndex = index - 1 >>> 1;
    var parent = heap[parentIndex];

    if (parent !== undefined && compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function siftDown(heap, node, i) {
  var index = i;
  var length = heap.length;

  while (index < length) {
    var leftIndex = (index + 1) * 2 - 1;
    var left = heap[leftIndex];
    var rightIndex = leftIndex + 1;
    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

    if (left !== undefined && compare(left, node) < 0) {
      if (right !== undefined && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (right !== undefined && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

function compare(a, b) {
  // Compare sort index first, then task id.
  var diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

function markTaskErrored(task, ms) {
}

/* eslint-disable no-var */
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111

var maxSigned31BitInt = 1073741823; // Times out immediately

var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap

var taskQueue = [];
var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
var currentTask = null;
var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

var isPerformingWork = false;
var isHostCallbackScheduled = false;
var isHostTimeoutScheduled = false;

function advanceTimers(currentTime) {
  // Check for tasks that are no longer delayed and add them to the queue.
  var timer = peek(timerQueue);

  while (timer !== null) {
    if (timer.callback === null) {
      // Timer was cancelled.
      pop(timerQueue);
    } else if (timer.startTime <= currentTime) {
      // Timer fired. Transfer to the task queue.
      pop(timerQueue);
      timer.sortIndex = timer.expirationTime;
      push(taskQueue, timer);
    } else {
      // Remaining timers are pending.
      return;
    }

    timer = peek(timerQueue);
  }
}

function handleTimeout(currentTime) {
  isHostTimeoutScheduled = false;
  advanceTimers(currentTime);

  if (!isHostCallbackScheduled) {
    if (peek(taskQueue) !== null) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
    }
  }
}

function flushWork(hasTimeRemaining, initialTime) {


  isHostCallbackScheduled = false;

  if (isHostTimeoutScheduled) {
    // We scheduled a timeout but it's no longer needed. Cancel it.
    isHostTimeoutScheduled = false;
    cancelHostTimeout();
  }

  isPerformingWork = true;
  var previousPriorityLevel = currentPriorityLevel;

  try {
    var currentTime; if (enableProfiling) ; else {
      // No catch in prod code path.
      return workLoop(hasTimeRemaining, initialTime);
    }
  } finally {
    currentTask = null;
    currentPriorityLevel = previousPriorityLevel;
    isPerformingWork = false;
  }
}

function workLoop(hasTimeRemaining, initialTime) {
  var currentTime = initialTime;
  advanceTimers(currentTime);
  currentTask = peek(taskQueue);

  while (currentTask !== null && !(enableSchedulerDebugging )) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }

    var callback = currentTask.callback;

    if (typeof callback === 'function') {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;

      var continuationCallback = callback(didUserCallbackTimeout);
      currentTime = exports.unstable_now();

      if (typeof continuationCallback === 'function') {
        currentTask.callback = continuationCallback;
      } else {

        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }

      advanceTimers(currentTime);
    } else {
      pop(taskQueue);
    }

    currentTask = peek(taskQueue);
  } // Return whether there's additional work


  if (currentTask !== null) {
    return true;
  } else {
    var firstTimer = peek(timerQueue);

    if (firstTimer !== null) {
      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }

    return false;
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;

    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_next(eventHandler) {
  var priorityLevel;

  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;

    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
}

function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = exports.unstable_now();
  var startTime;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;

    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  var timeout;

  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;

    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;

    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;

    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;

    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  var expirationTime = startTime + timeout;
  var newTask = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: startTime,
    expirationTime: expirationTime,
    sortIndex: -1
  };

  if (startTime > currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      } // Schedule a timeout.


      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);
    // wait until the next time we yield.


    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return newTask;
}

function unstable_pauseExecution() {
}

function unstable_continueExecution() {

  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback(flushWork);
  }
}

function unstable_getFirstCallbackNode() {
  return peek(taskQueue);
}

function unstable_cancelCallback(task) {
  // remove from the queue because you can't remove arbitrary nodes from an
  // array based heap, only the first one.)


  task.callback = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

var unstable_requestPaint = requestPaint;
var unstable_Profiling =  null;

exports.unstable_IdlePriority = IdlePriority;
exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_Profiling = unstable_Profiling;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_next = unstable_next;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_wrapCallback = unstable_wrapCallback;
  })();
}
}(scheduler_development));

if (process.env.NODE_ENV === 'production') {
  scheduler.exports = scheduler_production_min;
} else {
  scheduler.exports = scheduler_development;
}

const p=Symbol(),a$1=Symbol(),f$1="undefined"==typeof window||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?React.useEffect:React.useLayoutEffect,l$1=scheduler.exports.unstable_runWithPriority?e=>scheduler.exports.unstable_runWithPriority(scheduler.exports.unstable_NormalPriority,e):e=>e();function w(n){const o=React.createContext({[p]:{v:{current:n},n:{current:-1},l:new Set,u:e=>e()}});var c;return o[a$1]=o.Provider,o.Provider=(c=o.Provider,({value:e,children:n})=>{const o=React.useRef(e),u=React.useRef(0),s=React.useRef();if(!s.current){const e=new Set,r=r=>{require$$1.unstable_batchedUpdates(()=>{u.current+=1,e.forEach(e=>e([u.current])),r();});};s.current={[p]:{v:o,n:u,l:e,u:r}};}return f$1(()=>{o.current=e,u.current+=1,l$1(()=>{s.current[p].l.forEach(r=>{r([u.current,e]);});});},[e]),React.createElement(c,{value:s.current},n)}),delete o.Consumer,o}function E(e,r){const t=React.useContext(e)[p];if("object"==typeof process&&"production"!==process.env.NODE_ENV&&!t)throw new Error("useContextSelector requires special context");const{v:{current:c},n:{current:u},l:s}=t,i=r(c),[d,a]=React.useReducer((e,t)=>{if(!t)return [c,i];if(t[0]<=u)return Object.is(e[1],i)?e:[c,i];try{if(2===t.length){if(Object.is(e[0],t[1]))return e;const n=r(t[1]);return Object.is(e[1],n)?e:[t[1],n]}}catch(e){}return [...e]},[c,i]);return Object.is(d[1],i)||a(),f$1(()=>(s.add(a),()=>{s.delete(a);}),[s]),d[1]}function b(e){const r=React.useContext(e)[p];if("object"==typeof process&&"production"!==process.env.NODE_ENV&&!r)throw new Error("useContextUpdate requires special context");const{u:t}=r;return t}

const e=Symbol(),t=Symbol(),r=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,s=e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,l=(n,o)=>{let s=!1;const c=(e,t)=>{if(!s){let r=e.a.get(n);r||(r=new Set,e.a.set(n,r)),r.add(t);}},l={f:o,get(e,t){return t===r?n:(c(this,t),i(e[t],this.a,this.c))},has(e,r){return r===t?(s=!0,this.a.delete(n),!0):(c(this,r),r in e)},ownKeys(t){return c(this,e),Reflect.ownKeys(t)}};return o&&(l.set=l.deleteProperty=()=>!1),l},i=(e,t,o)=>{if(!s(e))return e;const c=e[r]||e,i=(e=>Object.isFrozen(e)||Object.values(Object.getOwnPropertyDescriptors(e)).some(e=>!e.writable))(c);let u=o&&o.get(c);return u&&u.f===i||(u=l(c,i),u.p=new Proxy(i?(e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0;}),Object.create(n(e),t)})(c):c,u),o&&o.set(c,u)),u.a=t,u.c=o,u.p},u=(e,t)=>{const r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])},a=(t,r,n,o)=>{if(Object.is(t,r))return !1;if(!c(t)||!c(r))return !0;const s=n.get(t);if(!s)return !0;if(o){const e=o.get(t);if(e&&e.n===r)return e.g;o.set(t,{n:r,g:!1});}let l=null;for(const c of s){const s=c===e?u(t,r):a(t[c],r[c],n,o);if(!0!==s&&!1!==s||(l=s),l)break}return null===l&&(l=!0),o&&o.set(t,{n:r,g:l}),l},f=e=>!!s(e)&&t in e,g=(e,t)=>{const r=[],n=(e,o)=>{const s=t.get(e);s?s.forEach(t=>{n(e[t],o?[...o,t]:[t]);}):o&&r.push(o);};return n(e),r};

const useAffectedDebugValue = (state, affected) => {
  const pathList = React.useRef();
  React.useEffect(() => {
    pathList.current = g(state, affected);
  });
  React.useDebugValue(state);
};

const isSSR = typeof window === 'undefined' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? React.useEffect : React.useLayoutEffect;
const createTrackedSelector = useSelector => {
  const useTrackedSelector = () => {
    const [, forceUpdate] = React.useReducer(c => c + 1, 0);
    const affected = new WeakMap();
    const lastAffected = React.useRef();
    const prevState = React.useRef();
    const lastState = React.useRef();
    useIsomorphicLayoutEffect(() => {
      lastAffected.current = affected;

      if (prevState.current !== lastState.current && a(prevState.current, lastState.current, affected, new WeakMap())) {
        prevState.current = lastState.current;
        forceUpdate();
      }
    });
    const selector = React.useCallback(nextState => {
      lastState.current = nextState;

      if (prevState.current && prevState.current !== nextState && lastAffected.current && !a(prevState.current, nextState, lastAffected.current, new WeakMap())) {
        // not changed
        return prevState.current;
      }

      prevState.current = nextState;
      return nextState;
    }, []);
    const state = useSelector(selector);

    if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useAffectedDebugValue(state, affected);
    }

    const proxyCache = React.useMemo(() => new WeakMap(), []); // per-hook proxyCache

    return i(state, affected, proxyCache);
  };

  return useTrackedSelector;
};

const useTrackedState$1 = StateContext => {
  const useTrackedSelector = React.useMemo(() => {
    const useSelector = selector => E(StateContext, selector);

    return createTrackedSelector(useSelector);
  }, [StateContext]);
  return useTrackedSelector();
};

const useSelector = (StateContext, selector) => {
  const selected = E(StateContext, selector);
  React.useDebugValue(selected);
  return selected;
};

const useUpdate = (StateContext, UpdateContext) => {
  const contextUpdate = b(StateContext);
  const update = React.useContext(UpdateContext);
  return React.useCallback((...args) => {
    let result;
    contextUpdate(() => {
      result = update(...args);
    });
    return result;
  }, [contextUpdate, update]);
};

/* eslint react/destructuring-assignment: off */
const warningObject = new Proxy({}, {
  get() {
    throw new Error('Please use <Provider>');
  },

  apply() {
    throw new Error('Please use <Provider>');
  }

});
const createContainer = (useValue, concurrentMode = false) => {
  const StateContext = w(warningObject);
  const UpdateContext = React.createContext(warningObject);

  const Provider = props => {
    const [state, update] = useValue(props);
    return React.createElement(UpdateContext.Provider, {
      value: update
    }, React.createElement(StateContext.Provider, {
      value: state
    }, props.children));
  };

  const useTrackedState$1$1 = () => useTrackedState$1(StateContext);

  const useUpdate$1 = concurrentMode ? () => useUpdate(StateContext, UpdateContext) : () => React.useContext(UpdateContext);

  const useTracked = () => [useTrackedState$1$1(), useUpdate$1()];

  const useSelector$1 = selector => useSelector(StateContext, selector);

  return {
    Provider,
    useTrackedState: useTrackedState$1$1,
    useTracked,
    useUpdate: useUpdate$1,
    useSelector: useSelector$1
  };
};

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function memo(Component, propsAreEqual) {
  const WrappedComponent = React.forwardRef((props, ref) => {
    Object.values(props).forEach(f);
    return React.createElement(Component, _extends$1({}, props, {
      ref
    }));
  });
  return React.memo(WrappedComponent, propsAreEqual);
}

var dist$1 = {};

var eventemitter3 = {exports: {}};

(function (module) {

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
{
  module.exports = EventEmitter;
}
}(eventemitter3));

var pTimeout$1 = {exports: {}};

var pFinally$1 = (promise, onFinally) => {
	onFinally = onFinally || (() => {});

	return promise.then(
		val => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => val),
		err => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => {
			throw err;
		})
	);
};

const pFinally = pFinally$1;

class TimeoutError extends Error {
	constructor(message) {
		super(message);
		this.name = 'TimeoutError';
	}
}

const pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
	if (typeof milliseconds !== 'number' || milliseconds < 0) {
		throw new TypeError('Expected `milliseconds` to be a positive number');
	}

	if (milliseconds === Infinity) {
		resolve(promise);
		return;
	}

	const timer = setTimeout(() => {
		if (typeof fallback === 'function') {
			try {
				resolve(fallback());
			} catch (error) {
				reject(error);
			}

			return;
		}

		const message = typeof fallback === 'string' ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
		const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);

		if (typeof promise.cancel === 'function') {
			promise.cancel();
		}

		reject(timeoutError);
	}, milliseconds);

	// TODO: Use native `finally` keyword when targeting Node.js 10
	pFinally(
		// eslint-disable-next-line promise/prefer-await-to-then
		promise.then(resolve, reject),
		() => {
			clearTimeout(timer);
		}
	);
});

pTimeout$1.exports = pTimeout;
// TODO: Remove this for the next major release
pTimeout$1.exports.default = pTimeout;

pTimeout$1.exports.TimeoutError = TimeoutError;

var priorityQueue = {};

var lowerBound$1 = {};

Object.defineProperty(lowerBound$1, "__esModule", { value: true });
// Port of lower_bound from https://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comparator) {
    let first = 0;
    let count = array.length;
    while (count > 0) {
        const step = (count / 2) | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
        }
        else {
            count = step;
        }
    }
    return first;
}
lowerBound$1.default = lowerBound;

Object.defineProperty(priorityQueue, "__esModule", { value: true });
const lower_bound_1 = lowerBound$1;
class PriorityQueue {
    constructor() {
        this._queue = [];
    }
    enqueue(run, options) {
        options = Object.assign({ priority: 0 }, options);
        const element = {
            priority: options.priority,
            run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
            this._queue.push(element);
            return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b) => b.priority - a.priority);
        this._queue.splice(index, 0, element);
    }
    dequeue() {
        const item = this._queue.shift();
        return item === null || item === void 0 ? void 0 : item.run;
    }
    filter(options) {
        return this._queue.filter((element) => element.priority === options.priority).map((element) => element.run);
    }
    get size() {
        return this._queue.length;
    }
}
priorityQueue.default = PriorityQueue;

Object.defineProperty(dist$1, "__esModule", { value: true });
const EventEmitter = eventemitter3.exports;
const p_timeout_1 = pTimeout$1.exports;
const priority_queue_1 = priorityQueue;
// eslint-disable-next-line @typescript-eslint/no-empty-function
const empty = () => { };
const timeoutError = new p_timeout_1.TimeoutError();
/**
Promise queue with concurrency control.
*/
class PQueue extends EventEmitter {
    constructor(options) {
        var _a, _b, _c, _d;
        super();
        this._intervalCount = 0;
        this._intervalEnd = 0;
        this._pendingCount = 0;
        this._resolveEmpty = empty;
        this._resolveIdle = empty;
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        options = Object.assign({ carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: priority_queue_1.default }, options);
        if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
            throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ''}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) {
            throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ''}\` (${typeof options.interval})`);
        }
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
    }
    get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
    }
    get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
    }
    _next() {
        this._pendingCount--;
        this._tryToStartAnother();
        this.emit('next');
    }
    _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
            this._resolveIdle();
            this._resolveIdle = empty;
            this.emit('idle');
        }
    }
    _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = undefined;
    }
    _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === undefined) {
            const delay = this._intervalEnd - now;
            if (delay < 0) {
                // Act as the interval was done
                // We don't need to resume it here because it will be resumed on line 160
                this._intervalCount = (this._carryoverConcurrencyCount) ? this._pendingCount : 0;
            }
            else {
                // Act as the interval is pending
                if (this._timeoutId === undefined) {
                    this._timeoutId = setTimeout(() => {
                        this._onResumeInterval();
                    }, delay);
                }
                return true;
            }
        }
        return false;
    }
    _tryToStartAnother() {
        if (this._queue.size === 0) {
            // We can clear the interval ("pause")
            // Because we can redo it later ("resume")
            if (this._intervalId) {
                clearInterval(this._intervalId);
            }
            this._intervalId = undefined;
            this._resolvePromises();
            return false;
        }
        if (!this._isPaused) {
            const canInitializeInterval = !this._isIntervalPaused();
            if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                const job = this._queue.dequeue();
                if (!job) {
                    return false;
                }
                this.emit('active');
                job();
                if (canInitializeInterval) {
                    this._initializeIntervalIfNeeded();
                }
                return true;
            }
        }
        return false;
    }
    _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== undefined) {
            return;
        }
        this._intervalId = setInterval(() => {
            this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
    }
    _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = undefined;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
    }
    /**
    Executes all queued functions until it reaches the limit.
    */
    _processQueue() {
        // eslint-disable-next-line no-empty
        while (this._tryToStartAnother()) { }
    }
    get concurrency() {
        return this._concurrency;
    }
    set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) {
            throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this._concurrency = newConcurrency;
        this._processQueue();
    }
    /**
    Adds a sync or async task to the queue. Always returns a promise.
    */
    async add(fn, options = {}) {
        return new Promise((resolve, reject) => {
            const run = async () => {
                this._pendingCount++;
                this._intervalCount++;
                try {
                    const operation = (this._timeout === undefined && options.timeout === undefined) ? fn() : p_timeout_1.default(Promise.resolve(fn()), (options.timeout === undefined ? this._timeout : options.timeout), () => {
                        if (options.throwOnTimeout === undefined ? this._throwOnTimeout : options.throwOnTimeout) {
                            reject(timeoutError);
                        }
                        return undefined;
                    });
                    resolve(await operation);
                }
                catch (error) {
                    reject(error);
                }
                this._next();
            };
            this._queue.enqueue(run, options);
            this._tryToStartAnother();
            this.emit('add');
        });
    }
    /**
    Same as `.add()`, but accepts an array of sync or async functions.

    @returns A promise that resolves when all functions are resolved.
    */
    async addAll(functions, options) {
        return Promise.all(functions.map(async (function_) => this.add(function_, options)));
    }
    /**
    Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
    */
    start() {
        if (!this._isPaused) {
            return this;
        }
        this._isPaused = false;
        this._processQueue();
        return this;
    }
    /**
    Put queue execution on hold.
    */
    pause() {
        this._isPaused = true;
    }
    /**
    Clear the queue.
    */
    clear() {
        this._queue = new this._queueClass();
    }
    /**
    Can be called multiple times. Useful if you for example add additional items at a later time.

    @returns A promise that settles when the queue becomes empty.
    */
    async onEmpty() {
        // Instantly resolve if the queue is empty
        if (this._queue.size === 0) {
            return;
        }
        return new Promise(resolve => {
            const existingResolve = this._resolveEmpty;
            this._resolveEmpty = () => {
                existingResolve();
                resolve();
            };
        });
    }
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

    @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */
    async onIdle() {
        // Instantly resolve if none pending and if nothing else is queued
        if (this._pendingCount === 0 && this._queue.size === 0) {
            return;
        }
        return new Promise(resolve => {
            const existingResolve = this._resolveIdle;
            this._resolveIdle = () => {
                existingResolve();
                resolve();
            };
        });
    }
    /**
    Size of the queue.
    */
    get size() {
        return this._queue.size;
    }
    /**
    Size of the queue, filtered by the given options.

    For example, this can be used to find the number of items remaining in the queue with a specific priority level.
    */
    sizeBy(options) {
        // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
        return this._queue.filter(options).length;
    }
    /**
    Number of pending promises.
    */
    get pending() {
        return this._pendingCount;
    }
    /**
    Whether the queue is currently paused.
    */
    get isPaused() {
        return this._isPaused;
    }
    get timeout() {
        return this._timeout;
    }
    /**
    Set the timeout for future operations.
    */
    set timeout(milliseconds) {
        this._timeout = milliseconds;
    }
}
var _default = dist$1.default = PQueue;

const SupabaseGridQueue = new _default({ concurrency: 1 });
const COLUMN_MIN_WIDTH = 100;
const STORAGE_KEY_PREFIX = 'supabase_grid';
const REFRESH_PAGE_IMMEDIATELY = -1;
const TOTAL_ROWS_INITIAL = -1;
const TOTAL_ROWS_RESET = -2;
const SELECT_COLUMN_KEY = 'supabase-grid-select-row';
const ADD_COLUMN_KEY = 'supabase-grid-add-column';
const ERROR_PRIMARY_KEY_NOTFOUND = 'Please add a primary key column to your table to update or delete rows';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var lib = {};

var pgFormat = {};

var reserved = {};

//
// PostgreSQL reserved words
// see: https://www.postgresql.org/docs/current/sql-keywords-appendix.html
//
Object.defineProperty(reserved, "__esModule", { value: true });
reserved.POSTGRESQL_RESERVED_WORDS = void 0;
reserved.POSTGRESQL_RESERVED_WORDS = new Set([
    'AES128',
    'AES256',
    'ALL',
    'ALLOWOVERWRITE',
    'ANALYSE',
    'ANALYZE',
    'AND',
    'ANY',
    'ARRAY',
    'AS',
    'ASC',
    'ASYMMETRIC',
    'AUTHORIZATION',
    'BACKUP',
    'BETWEEN',
    'BINARY',
    'BLANKSASNULL',
    'BOTH',
    'BYTEDICT',
    'CASE',
    'CAST',
    'CHECK',
    'COLLATE',
    'COLUMN',
    'CONSTRAINT',
    'CREATE',
    'CREDENTIALS',
    'CROSS',
    'CURRENT_CATALOG',
    'CURRENT_DATE',
    'CURRENT_ROLE',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'CURRENT_USER',
    'CURRENT_USER_ID',
    'DEFAULT',
    'DEFERRABLE',
    'DEFLATE',
    'DEFRAG',
    'DELTA',
    'DELTA32K',
    'DESC',
    'DISABLE',
    'DISTINCT',
    'DO',
    'ELSE',
    'EMPTYASNULL',
    'ENABLE',
    'ENCODE',
    'ENCRYPT',
    'ENCRYPTION',
    'END',
    'EXCEPT',
    'EXPLICIT',
    'FALSE',
    'FETCH',
    'FOR',
    'FOREIGN',
    'FREEZE',
    'FROM',
    'FULL',
    'GLOBALDICT256',
    'GLOBALDICT64K',
    'GRANT',
    'GROUP',
    'GZIP',
    'HAVING',
    'IDENTITY',
    'IGNORE',
    'ILIKE',
    'IN',
    'INITIALLY',
    'INNER',
    'INTERSECT',
    'INTO',
    'IS',
    'ISNULL',
    'JOIN',
    'LATERAL',
    'LEADING',
    'LEFT',
    'LIKE',
    'LIMIT',
    'LOCALTIME',
    'LOCALTIMESTAMP',
    'LUN',
    'LUNS',
    'LZO',
    'LZOP',
    'MINUS',
    'MOSTLY13',
    'MOSTLY32',
    'MOSTLY8',
    'NATURAL',
    'NEW',
    'NOT',
    'NOTNULL',
    'NULL',
    'NULLS',
    'OFF',
    'OFFLINE',
    'OFFSET',
    'OLD',
    'ON',
    'ONLY',
    'OPEN',
    'OR',
    'ORDER',
    'OUTER',
    'OVERLAPS',
    'PARALLEL',
    'PARTITION',
    'PERCENT',
    'PLACING',
    'PRIMARY',
    'RAW',
    'READRATIO',
    'RECOVER',
    'REFERENCES',
    'REJECTLOG',
    'RESORT',
    'RESTORE',
    'RETURNING',
    'RIGHT',
    'SELECT',
    'SESSION_USER',
    'SIMILAR',
    'SOME',
    'SYMMETRIC',
    'SYSDATE',
    'SYSTEM',
    'TABLE',
    'TAG',
    'TDES',
    'TEXT255',
    'TEXT32K',
    'THEN',
    'TO',
    'TOP',
    'TRAILING',
    'TRUE',
    'TRUNCATECOLUMNS',
    'UNION',
    'UNIQUE',
    'USER',
    'USING',
    'VARIADIC',
    'VERBOSE',
    'WALLET',
    'WHEN',
    'WHERE',
    'WINDOW',
    'WITH',
    'WITHOUT',
]);

Object.defineProperty(pgFormat, "__esModule", { value: true });
pgFormat.format = pgFormat.withArray = pgFormat.config = pgFormat.string = pgFormat.literal = pgFormat.ident = void 0;
const reserved_1 = reserved;
const FMT_PATTERN_CONFIG = {
    ident: 'I',
    literal: 'L',
    string: 's',
};
// convert to Postgres default ISO 8601 format
function formatDate(date) {
    return date.replace('T', ' ').replace('Z', '+00');
}
function isReserved(value) {
    if (reserved_1.POSTGRESQL_RESERVED_WORDS.has(value.toUpperCase())) {
        return true;
    }
    return false;
}
function arrayToList(useSpace, array, formatter) {
    let sql = '';
    sql += useSpace ? ' (' : '(';
    for (const [index, element] of array.entries()) {
        sql += (index === 0 ? '' : ', ') + formatter(element);
    }
    sql += ')';
    return sql;
}
// Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
// eslint-disable-next-line radar/cognitive-complexity
function ident(value) {
    if (value === undefined || value === null) {
        throw new Error('SQL identifier cannot be null or undefined');
    }
    else if (value === false) {
        return '"f"';
    }
    else if (value === true) {
        return '"t"';
    }
    else if (value instanceof Date) {
        return `"${formatDate(value.toISOString())}"`;
    }
    else if (value instanceof Buffer) {
        throw new TypeError('SQL identifier cannot be a buffer');
    }
    else if (Array.isArray(value)) {
        const temporary = [];
        for (const element of value) {
            if (Array.isArray(element) === true) {
                throw new TypeError('Nested array to grouped list conversion is not supported for SQL identifier');
            }
            else {
                temporary.push(ident(element));
            }
        }
        return temporary.toString();
    }
    else if (value === Object(value)) {
        throw new Error('SQL identifier cannot be an object');
    }
    const tident = String(value).slice(0); // create copy
    // do not quote a valid, unquoted identifier
    if (/^[_a-z][\d$_a-z]*$/.test(tident) === true && isReserved(tident) === false) {
        return tident;
    }
    let quoted = '"';
    for (const c of tident) {
        quoted += c === '"' ? c + c : c;
    }
    quoted += '"';
    return quoted;
}
pgFormat.ident = ident;
// Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
// eslint-disable-next-line radar/cognitive-complexity
function literal(value) {
    let tliteral = '';
    let explicitCast;
    if (value === undefined || value === null) {
        return 'NULL';
    }
    if (typeof value === 'bigint') {
        return BigInt(value).toString();
    }
    if (value === Number.POSITIVE_INFINITY) {
        return "'Infinity'";
    }
    if (value === Number.NEGATIVE_INFINITY) {
        return "'-Infinity'";
    }
    if (Number.isNaN(value)) {
        return "'NaN'";
    }
    if (typeof value === 'number') {
        // Test must be AFTER other special case number tests
        return Number(value).toString();
    }
    if (value === false) {
        return "'f'";
    }
    if (value === true) {
        return "'t'";
    }
    if (value instanceof Date) {
        return `'${formatDate(value.toISOString())}'`;
    }
    if (value instanceof Buffer) {
        return `E'\\\\x${value.toString('hex')}'`;
    }
    if (Array.isArray(value)) {
        const temporary = [];
        for (const [index, element] of value.entries()) {
            if (Array.isArray(element) === true) {
                temporary.push(arrayToList(index !== 0, element, literal));
            }
            else {
                temporary.push(literal(element));
            }
        }
        return temporary.toString();
    }
    if (value === Object(value)) {
        explicitCast = 'jsonb';
        tliteral = JSON.stringify(value);
    }
    else {
        tliteral = String(value).slice(0); // create copy
    }
    let hasBackslash = false;
    let quoted = "'";
    for (const c of tliteral) {
        if (c === "'") {
            quoted += c + c;
        }
        else if (c === '\\') {
            quoted += c + c;
            hasBackslash = true;
        }
        else {
            quoted += c;
        }
    }
    quoted += "'";
    if (hasBackslash === true) {
        quoted = `E${quoted}`;
    }
    if (explicitCast) {
        quoted += `::${explicitCast}`;
    }
    return quoted;
}
pgFormat.literal = literal;
// eslint-disable-next-line radar/cognitive-complexity
function string(value) {
    if (value === undefined || value === null) {
        return '';
    }
    if (value === false) {
        return 'f';
    }
    if (value === true) {
        return 't';
    }
    if (value instanceof Date) {
        return formatDate(value.toISOString());
    }
    if (value instanceof Buffer) {
        return `\\x${value.toString('hex')}`;
    }
    if (Array.isArray(value)) {
        const temporary = [];
        for (const [index, element] of value.entries()) {
            if (element !== null && element !== undefined) {
                if (Array.isArray(element) === true) {
                    temporary.push(arrayToList(index !== 0, element, string));
                }
                else {
                    temporary.push(string(element));
                }
            }
        }
        return temporary.toString();
    }
    if (value === Object(value)) {
        return JSON.stringify(value);
    }
    return String(value).toString().slice(0); // return copy
}
pgFormat.string = string;
function config(cfg) {
    // default
    FMT_PATTERN_CONFIG.ident = 'I';
    FMT_PATTERN_CONFIG.literal = 'L';
    FMT_PATTERN_CONFIG.string = 's';
    if (cfg && cfg.pattern) {
        if (cfg.pattern.ident) {
            FMT_PATTERN_CONFIG.ident = cfg.pattern.ident;
        }
        if (cfg.pattern.literal) {
            FMT_PATTERN_CONFIG.literal = cfg.pattern.literal;
        }
        if (cfg.pattern.string) {
            FMT_PATTERN_CONFIG.string = cfg.pattern.string;
        }
    }
}
pgFormat.config = config;
function withArray(fmt, parameters) {
    let index = 0;
    let reText = '%(%|(\\d+\\$)?[';
    reText += FMT_PATTERN_CONFIG.ident;
    reText += FMT_PATTERN_CONFIG.literal;
    reText += FMT_PATTERN_CONFIG.string;
    reText += '])';
    const re = new RegExp(reText, 'g');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return fmt.replace(re, (_, type) => {
        if (type === '%') {
            return '%';
        }
        let position = index;
        const tokens = type.split('$');
        if (tokens.length > 1) {
            position = Number.parseInt(tokens[0], 10) - 1;
            // eslint-disable-next-line no-param-reassign, prefer-destructuring
            type = tokens[1];
        }
        if (position < 0) {
            throw new Error('specified argument 0 but arguments start at 1');
        }
        else if (position > parameters.length - 1) {
            throw new Error('too few arguments');
        }
        index = position + 1;
        if (type === FMT_PATTERN_CONFIG.ident) {
            return ident(parameters[position]);
        }
        if (type === FMT_PATTERN_CONFIG.literal) {
            return literal(parameters[position]);
        }
        if (type === FMT_PATTERN_CONFIG.string) {
            return string(parameters[position]);
        }
    });
}
pgFormat.withArray = withArray;
function format(fmt, ...arguments_) {
    return withArray(fmt, arguments_);
}
pgFormat.format = format;

(function (exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(pgFormat, exports);

}(lib));

function countQuery(table, options) {
    let query = `select count(*) from ${queryTable(table)}`;
    const { filters } = options !== null && options !== void 0 ? options : {};
    if (filters) {
        query = applyFilters(query, filters);
    }
    return query + ';';
}
function deleteQuery(table, filters, options) {
    if (!filters || filters.length == 0) {
        throw { message: 'no filters for this delete query' };
    }
    let query = `delete from ${queryTable(table)}`;
    const { returning } = options !== null && options !== void 0 ? options : {};
    if (filters) {
        query = applyFilters(query, filters);
    }
    if (returning) {
        query += ' returning *';
    }
    return query + ';';
}
function insertQuery(table, values, options) {
    if (!values || values.length == 0) {
        throw { message: 'no value to insert' };
    }
    const { returning } = options !== null && options !== void 0 ? options : {};
    const queryColumns = Object.keys(values[0])
        .map((x) => lib.ident(x))
        .join(',');
    let query = '';
    if (queryColumns.length == 0) {
        query = lib.format('insert into %1$s select from jsonb_populate_recordset(null::%1$s, %2$s)', queryTable(table), lib.literal(JSON.stringify(values)));
    }
    else {
        query = lib.format('insert into %1$s (%2$s) select %2$s from jsonb_populate_recordset(null::%1$s, %3$s)', queryTable(table), queryColumns, lib.literal(JSON.stringify(values)));
    }
    if (returning) {
        query += ' returning *';
    }
    return query + ';';
}
function selectQuery(table, columns, options) {
    var _a;
    let query = '';
    const queryColumn = (_a = columns === null || columns === void 0 ? void 0 : columns.map((x) => lib.ident(x)).join(', ')) !== null && _a !== void 0 ? _a : '*';
    query += `select ${queryColumn} from ${queryTable(table)}`;
    const { filters, pagination, sorts } = options !== null && options !== void 0 ? options : {};
    if (filters) {
        query = applyFilters(query, filters);
    }
    if (sorts) {
        query = applySorts(query, sorts);
    }
    if (pagination) {
        const { limit, offset } = pagination !== null && pagination !== void 0 ? pagination : {};
        query += ` limit ${lib.literal(limit)} offset ${lib.literal(offset)}`;
    }
    return query + ';';
}
function updateQuery(table, value, options) {
    const { filters, returning } = options !== null && options !== void 0 ? options : {};
    if (!filters || filters.length == 0) {
        throw { message: 'no filters for this update query' };
    }
    const queryColumns = Object.keys(value)
        .map((x) => lib.ident(x))
        .join(',');
    let query = lib.format('update %1$s set (%2$s) = (select %2$s from json_populate_record(null::%1$s, %3$s))', queryTable(table), queryColumns, lib.literal(JSON.stringify(value)));
    if (filters) {
        query = applyFilters(query, filters);
    }
    if (returning) {
        query += ' returning *';
    }
    return query + ';';
}
//============================================================
// Filter Utils
//============================================================
function applyFilters(query, filters) {
    if (filters.length == 0)
        return query;
    query += ` where ${filters
        .map((filter) => {
        switch (filter.operator) {
            case 'in':
                return inFilterSql(filter);
            case 'is':
                return isFilterSql(filter);
            default:
                return `${lib.ident(filter.column)} ${filter.operator} ${filterLiteral(filter.value)}`;
        }
    })
        .join(' and ')}`;
    return query;
}
function inFilterSql(filter) {
    const filterValueTxt = String(filter.value);
    const values = filterValueTxt.split(',').map((x) => filterLiteral(x));
    return `${lib.ident(filter.column)} ${filter.operator} (${values.join(',')})`;
}
function isFilterSql(filter) {
    const filterValueTxt = String(filter.value);
    switch (filterValueTxt) {
        case 'null':
        case 'false':
        case 'true':
        case 'not null':
            return `${lib.ident(filter.column)} ${filter.operator} ${filterValueTxt}`;
        default:
            return `${lib.ident(filter.column)} ${filter.operator} ${filterLiteral(filter.value)}`;
    }
}
function filterLiteral(value) {
    if (typeof value === 'string') {
        const temp = value.trim();
        if ((temp === null || temp === void 0 ? void 0 : temp.startsWith('ARRAY[')) && (temp === null || temp === void 0 ? void 0 : temp.endsWith(']'))) {
            return temp;
        }
        else {
            return lib.literal(temp);
        }
    }
    return value;
}
//============================================================
// Sort Utils
//============================================================
function applySorts(query, sorts) {
    if (sorts.length == 0)
        return query;
    query += ` order by ${sorts
        .map((x) => {
        const order = x.ascending ? 'asc' : 'desc';
        const nullOrder = x.nullsFirst ? 'nulls first' : 'nulls last';
        return `${lib.ident(x.column)} ${order} ${nullOrder}`;
    })
        .join(', ')}`;
    return query;
}
//============================================================
// Misc
//============================================================
function queryTable(table) {
    return `${lib.ident(table.schema)}.${lib.ident(table.name)}`;
}

class QueryModifier {
    constructor(table, action, options) {
        this.table = table;
        this.action = action;
        this.options = options;
    }
    /**
     * Limits the result to rows within the specified range, inclusive.
     *
     * @param from  The starting index from which to limit the result, inclusive.
     * @param to  The last index to which to limit the result, inclusive.
     */
    range(from, to) {
        this.pagination = { offset: from, limit: to - from + 1 };
        return this;
    }
    /**
     * Return SQL string for query chains
     */
    toSql() {
        var _a;
        try {
            const { actionValue, actionOptions, filters, sorts } = (_a = this.options) !== null && _a !== void 0 ? _a : {};
            switch (this.action) {
                case 'count': {
                    return countQuery(this.table, { filters });
                }
                case 'delete': {
                    return deleteQuery(this.table, filters, {
                        returning: actionOptions === null || actionOptions === void 0 ? void 0 : actionOptions.returning,
                    });
                }
                case 'insert': {
                    return insertQuery(this.table, actionValue, {
                        returning: actionOptions === null || actionOptions === void 0 ? void 0 : actionOptions.returning,
                    });
                }
                case 'select': {
                    return selectQuery(this.table, actionValue, {
                        filters,
                        pagination: this.pagination,
                        sorts,
                    });
                }
                case 'update': {
                    return updateQuery(this.table, actionValue, {
                        filters,
                        returning: actionOptions === null || actionOptions === void 0 ? void 0 : actionOptions.returning,
                    });
                }
                default: {
                    return '';
                }
            }
        }
        catch (error) {
            throw error;
        }
    }
}

class QueryFilter {
    constructor(table, action, actionValue, actionOptions) {
        this.table = table;
        this.action = action;
        this.actionValue = actionValue;
        this.actionOptions = actionOptions;
        this.filters = [];
        this.sorts = [];
    }
    filter(column, operator, value) {
        this.filters.push({ column, operator, value });
        return this;
    }
    match(criteria) {
        Object.entries(criteria).map(([column, value]) => {
            this.filters.push({ column, operator: '=', value });
        });
        return this;
    }
    order(column, ascending = true, nullsFirst = false) {
        this.sorts.push({
            column: column,
            ascending,
            nullsFirst,
        });
        return this;
    }
    range(from, to) {
        return this._getQueryModifier().range(from, to);
    }
    toSql() {
        return this._getQueryModifier().toSql();
    }
    _getQueryModifier() {
        return new QueryModifier(this.table, this.action, {
            actionValue: this.actionValue,
            actionOptions: this.actionOptions,
            filters: this.filters,
            sorts: this.sorts,
        });
    }
}

class QueryAction {
    constructor(table) {
        this.table = table;
    }
    /**
     * Performs a COUNT on the table.
     */
    count() {
        return new QueryFilter(this.table, 'count');
    }
    /**
     * Performs a DELETE on the table.
     *
     * @param options.returning  If `true`, return the deleted row(s) in the response.
     */
    delete(options) {
        return new QueryFilter(this.table, 'delete', undefined, options);
    }
    /**
     * Performs an INSERT into the table.
     *
     * @param values             The values to insert.
     * @param options.returning  If `true`, return the inserted row(s) in the response.
     */
    insert(values, options) {
        return new QueryFilter(this.table, 'insert', values, options);
    }
    /**
     * Performs vertical filtering with SELECT.
     *
     * @param columns the query columns, by default set to '*'.
     */
    select(columns) {
        return new QueryFilter(this.table, 'select', columns);
    }
    /**
     * Performs an UPDATE on the table.
     *
     * @param value  The value to update.
     * @param options.returning  If `true`, return the updated row(s) in the response.
     */
    update(value, options) {
        return new QueryFilter(this.table, 'update', value, options);
    }
}

class Query {
    /**
     * @param name    the table name.
     * @param schema  the table schema, by default set to 'public'.
     */
    from(name, schema) {
        return new QueryAction({
            name,
            schema: schema !== null && schema !== void 0 ? schema : 'public',
        });
    }
}

function deepClone(obj) {
    try {
        return JSON.parse(JSON.stringify(obj));
    }
    catch (e) {
        throw e;
    }
}
function exportRowsToCsv(columns, rows, separator = ',') {
    const keys = columns.map((x) => x.name) || [];
    const csv = keys.join(separator) +
        '\n' +
        rows
            .map((row) => {
            return keys
                .map((k) => {
                let cell = row[k] === null || row[k] === undefined ? '' : row[k];
                cell =
                    cell instanceof Date
                        ? cell.toLocaleString()
                        : typeof cell == 'object' || Array.isArray(cell)
                            ? JSON.stringify(cell).replace(/"/g, '""')
                            : cell.toString().replace(/"/g, '""');
                if (cell.search(/("|,|\n)/g) >= 0) {
                    cell = `"${cell}"`;
                }
                return cell;
            })
                .join(separator);
        })
            .join('\n');
    return csv;
}
function formatClipboardValue(value) {
    if (value === null)
        return '';
    if (typeof value == 'object' || Array.isArray(value)) {
        return JSON.stringify(value);
    }
    return value;
}

function cloneColumn(column) {
    const cloned = deepClone(column);
    // these properties can't be cloned. Need to manual re-set again
    cloned.editor = column.editor;
    cloned.headerRenderer = column.headerRenderer;
    cloned.formatter = column.formatter;
    return cloned;
}
function getInitialGridColumns(gridColumns, savedState) {
    let result = gridColumns;
    if (savedState === null || savedState === void 0 ? void 0 : savedState.gridColumns) {
        result = [];
        // filter utility columns select, add-column
        const stateColumnsFiltered = savedState.gridColumns.filter((x) => (x === null || x === void 0 ? void 0 : x.name) !== '');
        for (let i = 0; i < stateColumnsFiltered.length; i++) {
            const state = stateColumnsFiltered[i];
            const found = gridColumns.find((y) => y.key === state.key);
            // merge with savedState item props: width
            if (found)
                result.push(Object.assign(Object.assign({}, found), { width: state.width, frozen: state.frozen }));
        }
        // check for newly created columns
        const newGridColumns = gridColumns.filter((x) => {
            // no existed in stateColumnsFiltered and not utility column
            const found = stateColumnsFiltered.find((state) => state.key === x.key);
            return !found && x.name !== '';
        });
        result = result.concat(newGridColumns);
        // process utility columns
        const selectColumn = gridColumns.find((x) => x.key === SELECT_COLUMN_KEY);
        if (selectColumn) {
            result = [selectColumn, ...result];
        }
        const addColumn = gridColumns.find((x) => x.key === ADD_COLUMN_KEY);
        if (addColumn) {
            result.push(addColumn);
        }
    }
    return result;
}

function useFocusRef(isCellSelected) {
    const ref = React__namespace.useRef(null);
    React__namespace.useLayoutEffect(() => {
        var _a;
        if (!isCellSelected)
            return;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
    }, [isCellSelected]);
    return ref;
}

function getInitialFilters(table, savedState) {
    if (savedState === null || savedState === void 0 ? void 0 : savedState.filters) {
        // verify column still exists
        console.log("⛳️  savedState?.filters!!!", savedState === null || savedState === void 0 ? void 0 : savedState.filters);
        const filters = savedState.filters.filter((x) => {
            if (x == null) {
                console.error("WARNING = x is null :", x);
                return false;
            }
            const found = table.columns.find((y) => y.name === x.column);
            return found ? true : false;
        });
        if ((filters === null || filters === void 0 ? void 0 : filters.length) > 0)
            return filters;
    }
    else {
        console.log("⛳️  no.filters!!!");
    }
    return [];
}

/* global setTimeout, clearTimeout */

var dist = function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var lastCallAt = void 0;
  var deferred = void 0;
  var timer = void 0;
  var pendingArgs = [];
  return function debounced() {
    var currentWait = getWait(wait);
    var currentTime = new Date().getTime();

    var isCold = !lastCallAt || currentTime - lastCallAt > currentWait;

    lastCallAt = currentTime;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isCold && options.leading) {
      return options.accumulate ? Promise.resolve(fn.call(this, [args])).then(function (result) {
        return result[0];
      }) : Promise.resolve(fn.call.apply(fn, [this].concat(args)));
    }

    if (deferred) {
      clearTimeout(timer);
    } else {
      deferred = defer();
    }

    pendingArgs.push(args);
    timer = setTimeout(flush.bind(this), currentWait);

    if (options.accumulate) {
      var argsIndex = pendingArgs.length - 1;
      return deferred.promise.then(function (results) {
        return results[argsIndex];
      });
    }

    return deferred.promise;
  };

  function flush() {
    var thisDeferred = deferred;
    clearTimeout(timer);

    Promise.resolve(options.accumulate ? fn.call(this, pendingArgs) : fn.apply(this, pendingArgs[pendingArgs.length - 1])).then(thisDeferred.resolve, thisDeferred.reject);

    pendingArgs = [];
    deferred = null;
  }
};

function getWait(wait) {
  return typeof wait === 'function' ? wait() : wait;
}

function defer() {
  var deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}

function createImperativePromise(promiseArg) {
    var resolve = null;
    var reject = null;
    var wrappedPromise = new Promise(function (_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
    });
    promiseArg && promiseArg.then(function (val) {
        resolve && resolve(val);
    }, function (error) {
        reject && reject(error);
    });
    return {
        promise: wrappedPromise,
        resolve: function (value) {
            resolve && resolve(value);
        },
        reject: function (reason) {
            reject && reject(reason);
        },
        cancel: function () {
            resolve = null;
            reject = null;
        }
    };
}

// see https://stackoverflow.com/a/54825370/82609
function onlyResolvesLast(asyncFunction) {
    var cancelPrevious = null;
    var wrappedFunction = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        cancelPrevious && cancelPrevious();
        var initialPromise = asyncFunction.apply(void 0, args);
        var _a = createImperativePromise(initialPromise), promise = _a.promise, cancel = _a.cancel;
        cancelPrevious = cancel;
        return promise;
    };
    return wrappedFunction; // TODO fix TS
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign$2 = function() {
    __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};

var DefaultOptions = {
    // One distinct debounced function is created per key and added to an internal cache
    // By default, the key is null, which means that all the calls
    // will share the same debounced function
    key: function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        return null;
    },
    // By default, a debounced function will only resolve
    // the last promise it returned
    // Former calls will stay unresolved, so that you don't have
    // to handle concurrency issues in your code
    // Setting this to false means all returned promises will resolve to the last result
    onlyResolvesLast: true,
};
// We create a debouncing function cache, because when wrapping the original function,
// we may actually want to route the function call to different debounced functions depending function paameters
var DebounceCache = /** @class */ (function () {
    function DebounceCache(config) {
        this.config = config;
        this.debounceSingleton = null;
        this.debounceCache = {}; // when key feature is used
    }
    DebounceCache.prototype._createDebouncedFunction = function () {
        var debouncedFunc = dist(this.config.func, this.config.wait, this.config.options); // TODO TS
        if (this.config.options.onlyResolvesLast) {
            debouncedFunc = onlyResolvesLast(debouncedFunc);
        }
        return {
            func: debouncedFunc,
        };
    };
    DebounceCache.prototype.getDebouncedFunction = function (args) {
        var _a;
        var key = (_a = this.config.options).key.apply(_a, args);
        if (key === null || typeof key === 'undefined') {
            if (!this.debounceSingleton) {
                this.debounceSingleton = this._createDebouncedFunction();
            }
            return this.debounceSingleton;
        }
        else {
            if (!this.debounceCache[key]) {
                this.debounceCache[key] = this._createDebouncedFunction();
            }
            return this.debounceCache[key];
        }
    };
    return DebounceCache;
}());
function AwesomeDebouncePromise(func, wait, options) {
    var finalOptions = __assign$2({}, DefaultOptions, options);
    var debounceCache = new DebounceCache({
        func: func,
        wait: wait,
        options: finalOptions,
    });
    var AwesomeDebouncePromiseWrapper = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var debouncedFn = debounceCache.getDebouncedFunction(args).func;
        return debouncedFn.apply(void 0, args);
    }); // TODO fix TS
    /*
    AwesomeDebouncePromiseWrapper.cancel = (key?: string) => {
  
    };
    */
    return AwesomeDebouncePromiseWrapper;
}

function fetchCount(state, dispatch) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!state.rowService)
            return;
        const { data, error } = yield state.rowService.count(state.filters);
        if (error) ;
        else {
            dispatch({
                type: 'SET_ROWS_COUNT',
                payload: data !== null && data !== void 0 ? data : 0,
            });
        }
    });
}
function fetchPage(state, dispatch) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!state.rowService)
            return;
        const { data, error } = yield state.rowService.fetchPage(state.page, state.rowsPerPage, state.filters, state.sorts);
        if (error) ;
        else {
            dispatch({
                type: 'SET_ROWS',
                payload: { rows: (_a = data === null || data === void 0 ? void 0 : data.rows) !== null && _a !== void 0 ? _a : [] },
            });
        }
    });
}
const refreshPageDebounced = AwesomeDebouncePromise(fetchPage, 500);

function getInitialSorts(table, savedState) {
    var _a;
    if (savedState === null || savedState === void 0 ? void 0 : savedState.sorts) {
        // verify column still exists
        const sorts = savedState.sorts.filter((x) => {
            const found = table.columns.find((y) => y.name === x.column);
            return found ? true : false;
        });
        if ((sorts === null || sorts === void 0 ? void 0 : sorts.length) > 0)
            return sorts;
    }
    // default sorts
    if (!(table === null || table === void 0 ? void 0 : table.columns) || ((_a = table === null || table === void 0 ? void 0 : table.columns) === null || _a === void 0 ? void 0 : _a.length) <= 0)
        return [];
    const firstColumn = table === null || table === void 0 ? void 0 : table.columns[0];
    return [{ column: firstColumn.name, ascending: true }];
}

const NUMERICAL_TYPES = [
    'smallint',
    'integer',
    'bigint',
    'decimal',
    'numeric',
    'real',
    'double precision',
    'serial',
    'bigserial',
    'int2',
    'int4',
    'int8',
    'float4',
    'float8',
    'smallserial',
    'serial2',
    'serial4',
    'serial8',
];
function isNumericalColumn(type) {
    return NUMERICAL_TYPES.indexOf(type.toLowerCase()) > -1;
}
const JSON_TYPES = ['json', 'jsonb', 'array'];
function isJsonColumn(type) {
    return JSON_TYPES.indexOf(type.toLowerCase()) > -1;
}
const ARRAY_TYPES = ['array'];
function isArrayColumn(type) {
    return ARRAY_TYPES.indexOf(type.toLowerCase()) > -1;
}
const TEXT_TYPES = ['text', 'character varying'];
function isTextColumn(type) {
    return TEXT_TYPES.indexOf(type.toLowerCase()) > -1;
}
const TIMESTAMP_TYPES = ['timestamp', 'timestamptz'];
function isDateTimeColumn(type) {
    return TIMESTAMP_TYPES.indexOf(type.toLowerCase()) > -1;
}
const DATE_TYPES = ['date'];
function isDateColumn(type) {
    return DATE_TYPES.indexOf(type.toLowerCase()) > -1;
}
const TIME_TYPES = ['time', 'timetz'];
function isTimeColumn(type) {
    return TIME_TYPES.indexOf(type.toLowerCase()) > -1;
}
const BOOL_TYPES = ['boolean', 'bool'];
function isBoolColumn(type) {
    return BOOL_TYPES.indexOf(type.toLowerCase()) > -1;
}
const ENUM_TYPES = ['user-defined'];
function isEnumColumn(type) {
    return ENUM_TYPES.indexOf(type.toLowerCase()) > -1;
}
function isForeignKeyColumn(columnDef) {
    const { targetTableSchema, targetTableName, targetColumnName } = columnDef;
    return !!targetTableSchema && !!targetTableName && !!targetColumnName;
}

class SqlRowService {
    constructor(table, onSqlQuery, onError) {
        this.table = table;
        this.onSqlQuery = onSqlQuery;
        this.onError = onError;
        this.query = new Query();
    }
    count(filters) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let queryChains = this.query
                .from(this.table.name, (_a = this.table.schema) !== null && _a !== void 0 ? _a : undefined)
                .count();
            filters
                .filter((x) => x.value && x.value != '')
                .forEach((x) => {
                const value = this.formatFilterValue(x);
                queryChains = queryChains.filter(x.column, x.operator, value);
            });
            const query = queryChains.toSql();
            const { data, error } = yield this.onSqlQuery(query);
            if (error) {
                return { error };
            }
            else {
                if ((data === null || data === void 0 ? void 0 : data.length) == 1) {
                    return { data: data[0].count };
                }
                else {
                    return { error: { message: 'fetch rows count failed' } };
                }
            }
        });
    }
    create(row) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('create: ', row);
            return { error: { message: 'not implemented' } };
        });
    }
    delete(rows) {
        var _a;
        const { primaryKeys, error } = this.getPrimaryKeys();
        if (error)
            return { error };
        let queryChains = this.query
            .from(this.table.name, (_a = this.table.schema) !== null && _a !== void 0 ? _a : undefined)
            .delete();
        primaryKeys.forEach((key) => {
            const primaryKeyValues = rows.map((x) => x[key]).join(',');
            queryChains = queryChains.filter(key, 'in', primaryKeyValues);
        });
        const query = queryChains.toSql();
        SupabaseGridQueue.add(() => __awaiter(this, void 0, void 0, function* () {
            const { error } = yield this.onSqlQuery(query);
            if (error)
                throw error;
        })).catch((error) => {
            this.onError(error);
        });
        return {};
    }
    fetchPage(page, rowsPerPage, filters, sorts) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const pageFromZero = page > 0 ? page - 1 : page;
            const from = pageFromZero * rowsPerPage;
            const to = (pageFromZero + 1) * rowsPerPage - 1;
            let queryChains = this.query
                .from(this.table.name, (_a = this.table.schema) !== null && _a !== void 0 ? _a : undefined)
                .select();
            filters
                .filter((x) => x.value && x.value != '')
                .forEach((x) => {
                const value = this.formatFilterValue(x);
                queryChains = queryChains.filter(x.column, x.operator, value);
            });
            sorts.forEach((x) => {
                queryChains = queryChains.order(x.column, x.ascending, x.nullsFirst);
            });
            const query = queryChains.range(from, to).toSql();
            const { data, error } = yield this.onSqlQuery(query);
            if (error) {
                this.onError(error);
                return { data: { rows: [] } };
            }
            else {
                const rows = data === null || data === void 0 ? void 0 : data.map((x, index) => {
                    return Object.assign({ idx: index }, x);
                });
                return { data: { rows } };
            }
        });
    }
    update(row) {
        var _a;
        const { primaryKeys, error } = this.getPrimaryKeys();
        if (error) {
            return { error };
        }
        const value = __rest(row, ["idx"]);
        const matchValues = {};
        primaryKeys.forEach((key) => {
            matchValues[key] = row[key];
            // fix: https://github.com/supabase/grid/issues/94
            // remove primary key from updated value object
            delete value[key];
        });
        const query = this.query
            .from(this.table.name, (_a = this.table.schema) !== null && _a !== void 0 ? _a : undefined)
            .update(value)
            .match(matchValues)
            .toSql();
        SupabaseGridQueue.add(() => __awaiter(this, void 0, void 0, function* () {
            const { error } = yield this.onSqlQuery(query);
            if (error)
                throw error;
        })).catch((error) => {
            this.onError(error);
        });
        return {};
    }
    getPrimaryKeys() {
        const pkColumns = this.table.columns.filter((x) => x.isPrimaryKey);
        if (!pkColumns || pkColumns.length == 0) {
            return { error: { message: ERROR_PRIMARY_KEY_NOTFOUND } };
        }
        return { primaryKeys: pkColumns.map((x) => x.name) };
    }
    /**
     * temporary fix until we impliment a better filter UI
     * which validate input value base on the column type
     */
    formatFilterValue(filter) {
        const column = this.table.columns.find((x) => x.name == filter.column);
        if (column && isNumericalColumn(column.format)) {
            const numberValue = Number(filter.value);
            if (Number.isNaN(numberValue))
                return filter.value;
            else
                return Number(filter.value);
        }
        return filter.value;
    }
}

function getColumnsSql(filter_schema, filter_name) {
    return lib.format(columnsSql, filter_schema, filter_name);
}
const columnsSql = `
SELECT
  c.oid :: int8 AS table_id,
  nc.nspname AS schema,
  c.relname AS table,
  (c.oid || '.' || a.attnum) AS id,
  a.attnum AS ordinal_position,
  a.attname AS name,
  CASE
    WHEN a.atthasdef THEN pg_get_expr(ad.adbin, ad.adrelid)
    ELSE NULL
  END AS default_value,
  CASE
    WHEN t.typtype = 'd' THEN CASE
      WHEN bt.typelem <> 0 :: oid
      AND bt.typlen = -1 THEN 'ARRAY'
      WHEN nbt.nspname = 'pg_catalog' THEN format_type(t.typbasetype, NULL)
      ELSE 'USER-DEFINED'
    END
    ELSE CASE
      WHEN t.typelem <> 0 :: oid
      AND t.typlen = -1 THEN 'ARRAY'
      WHEN nt.nspname = 'pg_catalog' THEN format_type(a.atttypid, NULL)
      ELSE 'USER-DEFINED'
    END
  END AS data_type,
  COALESCE(bt.typname, t.typname) AS format,
  CASE
    WHEN a.attidentity IN ('a', 'd') THEN TRUE
    ELSE FALSE
  END AS is_identity,
  CASE
    a.attidentity
    WHEN 'a' THEN 'ALWAYS'
    WHEN 'd' THEN 'BY DEFAULT'
    ELSE NULL
  END AS identity_generation,
  CASE
    WHEN a.attnotnull
    OR t.typtype = 'd'
    AND t.typnotnull THEN FALSE
    ELSE TRUE
  END AS is_nullable,
  CASE
    WHEN (
      c.relkind IN ('r', 'p')
    )
    OR (
      c.relkind IN ('v', 'f')
    )
    AND pg_column_is_updatable(c.oid, a.attnum, FALSE) THEN TRUE
    ELSE FALSE
  END AS is_updatable,
  array_to_json(
    array(
      SELECT
        enumlabel
      FROM
        pg_catalog.pg_enum enums
      WHERE
        quote_ident(COALESCE(bt.typname, t.typname)) = format_type(enums.enumtypid, NULL)
      ORDER BY
        enums.enumsortorder
    )
  ) AS enums,
  col_description(c.oid, a.attnum) AS comment
FROM
  pg_attribute a
  LEFT JOIN pg_attrdef ad ON a.attrelid = ad.adrelid
  AND a.attnum = ad.adnum
  JOIN (
    pg_class c
    JOIN pg_namespace nc ON c.relnamespace = nc.oid
  ) ON a.attrelid = c.oid
  JOIN (
    pg_type t
    JOIN pg_namespace nt ON t.typnamespace = nt.oid
  ) ON a.atttypid = t.oid
  LEFT JOIN (
    pg_type bt
    JOIN pg_namespace nbt ON bt.typnamespace = nbt.oid
  ) ON t.typtype = 'd'
  AND t.typbasetype = bt.oid
WHERE
  NOT pg_is_other_temp_schema(nc.oid)
  AND nc.nspname = %L
  AND c.relname = %L
  AND a.attnum > 0
  AND NOT a.attisdropped
  AND (c.relkind IN ('r', 'v', 'f', 'p'))
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_column_privilege(
      c.oid,
      a.attnum,
      'SELECT, INSERT, UPDATE, REFERENCES'
    )
  )
`;
function getPrimaryKeysSql(filter_schema, filter_name) {
    return lib.format(primaryKeysSql, filter_schema, filter_name);
}
const primaryKeysSql = `
SELECT
  n.nspname AS schema,
  c.relname AS table_name,
  a.attname AS name,
  c.oid :: int8 AS table_id
FROM
  pg_index i,
  pg_class c,
  pg_attribute a,
  pg_namespace n
WHERE
  n.nspname = %L
  AND c.relname = %L
  AND i.indrelid = c.oid
  AND c.relnamespace = n.oid
  AND a.attrelid = c.oid
  AND a.attnum = ANY (i.indkey)
  AND i.indisprimary
`;
function getRelationshipsSql(filter_schema, filter_name) {
    return lib.format(relationshipsSql, filter_schema, filter_name);
}
const relationshipsSql = `
SELECT
  c.oid :: int8 AS id,
  c.conname AS constraint_name,
  nsa.nspname AS source_schema,
  csa.relname AS source_table_name,
  sa.attname AS source_column_name,
  nta.nspname AS target_table_schema,
  cta.relname AS target_table_name,
  ta.attname AS target_column_name
FROM
  pg_constraint c
  JOIN (
    pg_attribute sa
    JOIN pg_class csa ON sa.attrelid = csa.oid
    JOIN pg_namespace nsa ON csa.relnamespace = nsa.oid
  ) ON sa.attrelid = c.conrelid
  AND sa.attnum = ANY (c.conkey)
  JOIN (
    pg_attribute ta
    JOIN pg_class cta ON ta.attrelid = cta.oid
    JOIN pg_namespace nta ON cta.relnamespace = nta.oid
  ) ON ta.attrelid = c.confrelid
  AND ta.attnum = ANY (c.confkey)
WHERE
  c.contype = 'f'
  AND nsa.nspname = %L
  AND csa.relname = %L;
`;
function getTableSql(filter_schema, filter_name) {
    return lib.format(tableSql, filter_schema, filter_name);
}
const tableSql = `
SELECT
  c.oid :: int8 AS id,
  nc.nspname AS schema,
  c.relname AS name,
  pg_stat_get_live_tuples(c.oid) AS live_rows_estimate,
  obj_description(c.oid) AS comment
FROM
  pg_namespace nc
  JOIN pg_class c ON nc.oid = c.relnamespace
WHERE
  nc.nspname = %L
  AND c.relname = %L
  AND c.relkind IN ('r', 'p')
  AND NOT pg_is_other_temp_schema(nc.oid)
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_table_privilege(
      c.oid,
      'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
    )
    OR has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
  )
`;

class SqlMetaService {
    constructor(onSqlQuery) {
        this.onSqlQuery = onSqlQuery;
    }
    fetchInfo(name, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = getTableSql(schema !== null && schema !== void 0 ? schema : 'public', name);
            const { data, error } = yield this.onSqlQuery(sql);
            if (error) {
                return { error };
            }
            else {
                if ((data === null || data === void 0 ? void 0 : data.length) == 1) {
                    return { data: data[0] };
                }
                else {
                    return { error: { message: 'fetch table info failed' } };
                }
            }
        });
    }
    fetchColumns(name, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = getColumnsSql(schema !== null && schema !== void 0 ? schema : 'public', name);
            const { data, error } = yield this.onSqlQuery(sql);
            if (error) {
                return { error };
            }
            else {
                return { data };
            }
        });
    }
    fetchPrimaryKeys(name, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = getPrimaryKeysSql(schema !== null && schema !== void 0 ? schema : 'public', name);
            const { data, error } = yield this.onSqlQuery(sql);
            if (error) {
                return { error };
            }
            else {
                return { data };
            }
        });
    }
    fetchRelationships(name, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = getRelationshipsSql(schema !== null && schema !== void 0 ? schema : 'public', name);
            const { data, error } = yield this.onSqlQuery(sql);
            if (error) {
                return { error };
            }
            else {
                return { data };
            }
        });
    }
}

const baseInitialState = {
    table: null,
    metaService: null,
    rowService: null,
    refreshPageFlag: 0,
    isInitialComplete: false,
    editable: false,
};
const BaseReducer = (state, action) => {
    switch (action.type) {
        case 'INIT_CLIENT': {
            return Object.assign(Object.assign({}, state), { metaService: new SqlMetaService(action.payload.onSqlQuery) });
        }
        case 'INIT_TABLE': {
            return Object.assign(Object.assign({}, state), { table: action.payload.table, rowService: new SqlRowService(action.payload.table, action.payload.onSqlQuery, action.payload.onError), refreshPageFlag: REFRESH_PAGE_IMMEDIATELY, isInitialComplete: true, editable: action.payload.editable || false });
        }
        default:
            return state;
    }
};

const callbackInitialState = {
    onAddColumn: null,
    onAddRow: null,
    onError: null,
    onEditRow: null,
    onEditColumn: null,
    onDeleteColumn: null,
    onSqlQuery: null,
};
const CallbackReducer = (state, action) => {
    switch (action.type) {
        case 'INIT_CALLBACK': {
            return Object.assign(Object.assign({}, state), { onAddColumn: action.payload.onAddColumn, onAddRow: action.payload.onAddRow, onError: action.payload.onError, onEditRow: action.payload.onEditRow, onEditColumn: action.payload.onEditColumn, onDeleteColumn: action.payload.onDeleteColumn, onSqlQuery: action.payload.onSqlQuery });
        }
        default:
            return state;
    }
};

var immutabilityHelper = {exports: {}};

(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function stringifiable(obj) {
    // Safely stringify Object.create(null)
    /* istanbul ignore next */
    return typeof obj === 'object' && !('toString' in obj) ?
        Object.prototype.toString.call(obj).slice(8, -1) :
        obj;
}
var isProduction = typeof process === 'object' && process.env.NODE_ENV === 'production';
function invariant(condition, message) {
    if (!condition) {
        /* istanbul ignore next */
        if (isProduction) {
            throw new Error('Invariant failed');
        }
        throw new Error(message());
    }
}
exports.invariant = invariant;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
    return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || /* istanbul ignore next */ (function (target, source) {
    getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    });
    return target;
});
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function'
    ? function (obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)); }
    /* istanbul ignore next */
    : function (obj) { return Object.keys(obj); };
function copy(object) {
    return Array.isArray(object)
        ? assign(object.constructor(object.length), object)
        : (type(object) === 'Map')
            ? new Map(object)
            : (type(object) === 'Set')
                ? new Set(object)
                : (object && typeof object === 'object')
                    ? assign(Object.create(Object.getPrototypeOf(object)), object)
                    /* istanbul ignore next */
                    : object;
}
var Context = /** @class */ (function () {
    function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this);
        // Deprecated: update.extend, update.isEquals and update.newContext
        this.update.extend = this.extend = this.extend.bind(this);
        this.update.isEquals = function (x, y) { return x === y; };
        this.update.newContext = function () { return new Context().update; };
    }
    Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
            return this.update.isEquals;
        },
        set: function (value) {
            this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
    };
    Context.prototype.update = function (object, $spec) {
        var _this = this;
        var spec = (typeof $spec === 'function') ? { $apply: $spec } : $spec;
        if (!(Array.isArray(object) && Array.isArray(spec))) {
            invariant(!Array.isArray(spec), function () { return "update(): You provided an invalid spec to update(). The spec may " +
                "not contain an array except as the value of $set, $push, $unshift, " +
                "$splice or any custom command allowing an array value."; });
        }
        invariant(typeof spec === 'object' && spec !== null, function () { return "update(): You provided an invalid spec to update(). The spec and " +
            "every included key path must be plain objects containing one of the " +
            ("following commands: " + Object.keys(_this.commands).join(', ') + "."); });
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
            if (hasOwnProperty.call(_this.commands, key)) {
                var objectWasNextObject = object === nextObject;
                nextObject = _this.commands[key](spec[key], nextObject, spec, object);
                if (objectWasNextObject && _this.isEquals(nextObject, object)) {
                    nextObject = object;
                }
            }
            else {
                var nextValueForKey = type(object) === 'Map'
                    ? _this.update(object.get(key), spec[key])
                    : _this.update(object[key], spec[key]);
                var nextObjectValue = type(nextObject) === 'Map'
                    ? nextObject.get(key)
                    : nextObject[key];
                if (!_this.isEquals(nextValueForKey, nextObjectValue)
                    || typeof nextValueForKey === 'undefined'
                        && !hasOwnProperty.call(object, key)) {
                    if (nextObject === object) {
                        nextObject = copy(object);
                    }
                    if (type(nextObject) === 'Map') {
                        nextObject.set(key, nextValueForKey);
                    }
                    else {
                        nextObject[key] = nextValueForKey;
                    }
                }
            }
        });
        return nextObject;
    };
    return Context;
}());
exports.Context = Context;
var defaultCommands = {
    $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
    },
    $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
    },
    $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
            invariantSplice(args);
            if (nextObject === originalObject && args.length) {
                nextObject = copy(originalObject);
            }
            splice.apply(nextObject, args);
        });
        return nextObject;
    },
    $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
    },
    $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
            nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
    },
    $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
            if (Object.hasOwnProperty.call(nextObject, key)) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                delete nextObject[key];
            }
        });
        return nextObject;
    },
    $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');
        if (type(nextObject) === 'Map') {
            values.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (nextObject === originalObject && nextObject.get(key) !== value) {
                    nextObject = copy(originalObject);
                }
                nextObject.set(key, value);
            });
        }
        else {
            values.forEach(function (value) {
                if (nextObject === originalObject && !nextObject.has(value)) {
                    nextObject = copy(originalObject);
                }
                nextObject.add(value);
            });
        }
        return nextObject;
    },
    $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
            if (nextObject === originalObject && nextObject.has(key)) {
                nextObject = copy(originalObject);
            }
            nextObject.delete(key);
        });
        return nextObject;
    },
    $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
            if (value[key] !== nextObject[key]) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                nextObject[key] = value[key];
            }
        });
        return nextObject;
    },
    $apply: function (value, original) {
        invariantApply(value);
        return value(original);
    },
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
    invariant(Array.isArray(value), function () { return "update(): expected target of " + stringifiable(command) + " to be an array; got " + stringifiable(value) + "."; });
    invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
    invariant(Array.isArray(spec), function () { return "update(): expected spec of " + stringifiable(command) + " to be an array; got " + stringifiable(spec) + ". " +
        "Did you forget to wrap your parameter in an array?"; });
}
function invariantSplices(value, spec) {
    invariant(Array.isArray(value), function () { return "Expected $splice target to be an array; got " + stringifiable(value); });
    invariantSplice(spec.$splice);
}
function invariantSplice(value) {
    invariant(Array.isArray(value), function () { return "update(): expected spec of $splice to be an array of arrays; got " + stringifiable(value) + ". " +
        "Did you forget to wrap your parameters in an array?"; });
}
function invariantApply(fn) {
    invariant(typeof fn === 'function', function () { return "update(): expected spec of $apply to be a function; got " + stringifiable(fn) + "."; });
}
function invariantSet(spec) {
    invariant(Object.keys(spec).length === 1, function () { return "Cannot have more than one key in an object with $set"; });
}
function invariantMerge(target, specValue) {
    invariant(specValue && typeof specValue === 'object', function () { return "update(): $merge expects a spec of type 'object'; got " + stringifiable(specValue); });
    invariant(target && typeof target === 'object', function () { return "update(): $merge expects a target of type 'object'; got " + stringifiable(target); });
}
function invariantMapOrSet(target, command) {
    var typeOfTarget = type(target);
    invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', function () { return "update(): " + stringifiable(command) + " expects a target of type Set or Map; got " + stringifiable(typeOfTarget); });
}
}(immutabilityHelper, immutabilityHelper.exports));

var update = /*@__PURE__*/getDefaultExportFromCjs(immutabilityHelper.exports);

const columnInitialState = {
    gridColumns: [],
};
const ColumnReducer = (state, action) => {
    switch (action.type) {
        case 'INIT_TABLE': {
            return Object.assign(Object.assign({}, state), { gridColumns: getInitialGridColumns(action.payload.gridColumns, action.payload.savedState) });
        }
        case 'MOVE_COLUMN': {
            const fromIdx = state.gridColumns.findIndex(x => x.key === action.payload.fromKey);
            const toIdx = state.gridColumns.findIndex(x => x.key === action.payload.toKey);
            const moveItem = state.gridColumns[fromIdx];
            return Object.assign(Object.assign({}, state), { gridColumns: update(state.gridColumns, {
                    $splice: [
                        [fromIdx, 1],
                        [toIdx, 0, moveItem],
                    ],
                }) });
        }
        case 'UPDATE_COLUMN_SIZE': {
            const updated = cloneColumn(state.gridColumns[action.payload.index]);
            updated.width = action.payload.width;
            return Object.assign(Object.assign({}, state), { gridColumns: update(state.gridColumns, {
                    [action.payload.index]: { $set: updated },
                }) });
        }
        case 'FREEZE_COLUMN': {
            const columnIdx = state.gridColumns.findIndex(x => x.key === action.payload.columnKey);
            const updated = cloneColumn(state.gridColumns[columnIdx]);
            updated.frozen = true;
            return Object.assign(Object.assign({}, state), { gridColumns: update(state.gridColumns, {
                    [columnIdx]: { $set: updated },
                }) });
        }
        case 'UNFREEZE_COLUMN': {
            const columnIdx = state.gridColumns.findIndex(x => x.key === action.payload.columnKey);
            const updated = cloneColumn(state.gridColumns[columnIdx]);
            updated.frozen = false;
            return Object.assign(Object.assign({}, state), { gridColumns: update(state.gridColumns, {
                    [columnIdx]: { $set: updated },
                }) });
        }
        default:
            return state;
    }
};

const rowInitialState = {
    rows: [],
    selectedRows: new Set(),
    selectedCellPosition: null,
    page: 1,
    rowsPerPage: 100,
    totalRows: TOTAL_ROWS_INITIAL,
};
const RowReducer = (state, action) => {
    switch (action.type) {
        case 'INIT_TABLE': {
            return Object.assign(Object.assign({}, state), { page: 1, selectedCellPosition: null, selectedRows: new Set(), totalRows: TOTAL_ROWS_RESET });
        }
        case 'SELECTED_CELL_CHANGE': {
            return Object.assign(Object.assign({}, state), { selectedCellPosition: action.payload.position });
        }
        case 'SELECTED_ROWS_CHANGE': {
            return Object.assign(Object.assign({}, state), { selectedRows: action.payload.selectedRows });
        }
        case 'SET_PAGE': {
            return Object.assign(Object.assign({}, state), { page: action.payload, refreshPageFlag: REFRESH_PAGE_IMMEDIATELY });
        }
        case 'SET_ROWS_PER_PAGE': {
            return Object.assign(Object.assign({}, state), { page: 1, rowsPerPage: action.payload, refreshPageFlag: REFRESH_PAGE_IMMEDIATELY });
        }
        case 'SET_ROWS': {
            return Object.assign(Object.assign({}, state), { rows: action.payload.rows, refreshPageFlag: 0 });
        }
        case 'SET_ROWS_COUNT': {
            return Object.assign(Object.assign({}, state), { totalRows: action.payload });
        }
        case 'ADD_ROWS': {
            const totalRows = state.totalRows + action.payload.length;
            return Object.assign(Object.assign({}, state), { rows: update(state.rows, { $push: action.payload }), totalRows: totalRows });
        }
        case 'ADD_NEW_ROW': {
            const supaRow = Object.assign(Object.assign({}, action.payload), { idx: state.rows.length });
            const totalRows = state.totalRows + 1;
            return Object.assign(Object.assign({}, state), { rows: update(state.rows, { $push: [supaRow] }), totalRows: totalRows });
        }
        case 'EDIT_ROW': {
            const supaRow = Object.assign(Object.assign({}, action.payload.row), { idx: action.payload.idx });
            return Object.assign(Object.assign({}, state), { rows: update(state.rows, {
                    [action.payload.idx]: { $set: supaRow },
                }) });
        }
        case 'REMOVE_ROWS': {
            const totalRows = state.totalRows - action.payload.rowIdxs.length;
            return Object.assign(Object.assign({}, state), { rows: state.rows.filter((x) => !action.payload.rowIdxs.includes(x.idx)), totalRows: totalRows });
        }
        default:
            return state;
    }
};

const sortInitialState = { sorts: [] };
const SortReducer = (state, action) => {
    switch (action.type) {
        case 'INIT_TABLE': {
            return Object.assign(Object.assign({}, state), { sorts: getInitialSorts(action.payload.table, action.payload.savedState) });
        }
        case 'SET_SORTS':
            return Object.assign(Object.assign({}, state), { sorts: action.payload });
        case 'ADD_SORT':
            return Object.assign(Object.assign({}, state), { sorts: update(state.sorts, { $push: [action.payload] }), refreshPageFlag: Date.now() });
        case 'REMOVE_SORT':
            return Object.assign(Object.assign({}, state), { sorts: state.sorts.filter((x) => x.column !== action.payload.column), refreshPageFlag: Date.now() });
        case 'UPDATE_SORT':
            return Object.assign(Object.assign({}, state), { sorts: state.sorts.map((x) => {
                    if (x.column == action.payload.column)
                        return action.payload;
                    return x;
                }), refreshPageFlag: Date.now() });
        case 'MOVE_SORT': {
            const moveItem = state.sorts[action.payload.fromIndex];
            return Object.assign(Object.assign({}, state), { sorts: update(state.sorts, {
                    $splice: [
                        [action.payload.fromIndex, 1],
                        [action.payload.toIndex, 0, moveItem],
                    ],
                }), refreshPageFlag: Date.now() });
        }
        default:
            return state;
    }
};

const filterInitialState = { filters: [] };
const FilterReducer = (state, action) => {
    switch (action.type) {
        case 'INIT_TABLE': {
            console.log("INIT_TABLE");
            return Object.assign(Object.assign({}, state), { filters: getInitialFilters(action.payload.table, action.payload.savedState) });
        }
        case 'SET_FILTERS':
            console.log("SET_FILTERS");
            return Object.assign(Object.assign({}, state), { filters: action.payload });
        case 'ADD_FILTER': {
            console.log("ADD_FILTER");
            const isValid = isValidFilter(action.payload);
            const newState = Object.assign(Object.assign({}, state), { filters: update(state.filters, { $push: [action.payload] }) });
            if (isValid) {
                newState.page = 1;
                newState.refreshPageFlag = Date.now();
                newState.totalRows = TOTAL_ROWS_RESET;
            }
            return newState;
        }
        case 'REMOVE_FILTER': {
            console.log("REMOVE_FILTER");
            const removeIdx = action.payload.index;
            const removeFilter = state.filters[removeIdx];
            const isValid = isValidFilter(removeFilter);
            const newState = Object.assign(Object.assign({}, state), { filters: update(state.filters, {
                    $splice: [[removeIdx, 1]],
                }) });
            if (isValid) {
                newState.page = 1;
                newState.refreshPageFlag = Date.now();
                newState.totalRows = TOTAL_ROWS_RESET;
            }
            return newState;
        }
        case 'UPDATE_FILTER': {
            const updatedFilter = state.filters[action.payload.filterIdx];
            const previousIsValid = isValidFilter(updatedFilter);
            const afterIsValid = isValidFilter(action.payload.value);
            const newState = Object.assign(Object.assign({}, state), { filters: update(state.filters, {
                    [action.payload.filterIdx]: { $set: action.payload.value },
                }) });
            if (previousIsValid || afterIsValid) {
                newState.page = 1;
                newState.refreshPageFlag = Date.now();
                newState.totalRows = TOTAL_ROWS_RESET;
            }
            return newState;
        }
        default:
            return state;
    }
};
function isValidFilter(filter) {
    return (filter &&
        filter.column &&
        filter.column != '' &&
        filter.value &&
        filter.value != '');
}

const initialState = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, baseInitialState), callbackInitialState), columnInitialState), filterInitialState), rowInitialState), sortInitialState);

const combineReducers = (...reducers) => (state = initialState, action) => {
    for (let i = 0; i < reducers.length; i++)
        state = reducers[i](state, action);
    return state;
};
const storeReducers = combineReducers(BaseReducer, CallbackReducer, ColumnReducer, FilterReducer, RowReducer, SortReducer);
const useValue = () => React.useReducer(storeReducers, initialState);
const { Provider: StoreProvider, useTrackedState, useUpdate: useDispatch, } = createContainer(useValue);

const ColumnMenu = ({ column }) => {
    const state = useTrackedState();
    const dispatch = useDispatch();
    const { onEditColumn: onEditColumnFunc, onDeleteColumn: onDeleteColumnFunc, } = state;
    const columnKey = column.key;
    function onFreezeColumn() {
        dispatch({ type: 'FREEZE_COLUMN', payload: { columnKey } });
    }
    function onUnfreezeColumn() {
        dispatch({ type: 'UNFREEZE_COLUMN', payload: { columnKey } });
    }
    function onEditColumn() {
        if (onEditColumnFunc)
            onEditColumnFunc(columnKey);
    }
    function onDeleteColumn() {
        if (onDeleteColumnFunc)
            onDeleteColumnFunc(columnKey);
    }
    function renderMenu() {
        return (React__namespace.createElement(React__namespace.Fragment, null,
            state.editable && onEditColumn !== undefined && (React__namespace.createElement(ui.Dropdown.Item, { onClick: onEditColumn, icon: React__namespace.createElement(ui.IconEdit, { size: "tiny" }) }, "Edit column")),
            React__namespace.createElement(ui.Dropdown.Item, { onClick: column.frozen ? onUnfreezeColumn : onFreezeColumn, icon: column.frozen ? (React__namespace.createElement(ui.IconUnlock, { size: "tiny" })) : (React__namespace.createElement(ui.IconLock, { size: "tiny" })) }, column.frozen ? 'Unfreeze column' : 'Freeze column'),
            state.editable && onDeleteColumn !== undefined && (React__namespace.createElement(React__namespace.Fragment, null,
                React__namespace.createElement(ui.Divider, { light: true }),
                React__namespace.createElement(ui.Dropdown.Item, { onClick: onDeleteColumn, icon: React__namespace.createElement(ui.IconTrash, { size: "tiny", stroke: "red" }) }, "Delete Column")))));
    }
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(ui.Dropdown, { align: "end", side: "bottom", overlay: renderMenu() },
            React__namespace.createElement(ui.Button, { as: 'span', type: "text", icon: React__namespace.createElement(ui.IconChevronDown, null), style: { padding: '3px' } }))));
};

var FileSaver_min = {exports: {}};

(function (module, exports) {
(function(a,b){b();})(commonjsGlobal,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c);},d.onerror=function(){console.error("could not download file");},d.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null;},k.readAsDataURL(b);}else {var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m);},4E4);}});f.saveAs=g.saveAs=g,(module.exports=g);});


}(FileSaver_min));

var FileSaver = FileSaver_min.exports;

/**
 * Blocks key events from propagating
 * We use this with cell editor to allow editor component to handle keys.
 * Example: press enter to add newline on textEditor
 */
const BlockKeys = ({ onEscape, onEnter, value, children, }) => {
    const handleKeyDown = React__namespace.useCallback((ev) => {
        switch (ev.key) {
            case 'Escape':
                ev.stopPropagation();
                if (onEscape)
                    onEscape(value);
                break;
            case 'Enter':
                ev.stopPropagation();
                if (onEnter)
                    onEnter(value);
                break;
        }
    }, [value]);
    function onBlur() {
        if (onEscape)
            onEscape(value);
    }
    return (React__namespace.createElement("div", { onKeyDown: handleKeyDown, onBlur: onBlur }, children));
};

const ConfirmModal = ({ title, message, onConfirm, onAsyncConfirm, variant = 'danger', }) => {
    const [loading, setLoading] = React__namespace.useState(false);
    function onCancelClick() {
        if (!loading)
            onClose();
    }
    function onConfirmClick() {
        return __awaiter(this, void 0, void 0, function* () {
            if (onAsyncConfirm) {
                setLoading(true);
                yield onAsyncConfirm();
                onClose();
            }
            else if (onConfirm) {
                onConfirm();
                onClose();
            }
        });
    }
    function onClose() {
        removeElement();
    }
    return (React__namespace.createElement(ui.Modal, { variant: variant, visible: true, title: title, description: message, showIcon: false, size: "small", confirmText: "OK", cancelText: "Cancel", onCancel: onCancelClick, onConfirm: onConfirmClick, loading: loading }));
};
function removeElement() {
    var _a;
    const target = document.getElementById('supabase-ui-confirm-alert');
    if (target) {
        require$$1.unmountComponentAtNode(target);
        (_a = target === null || target === void 0 ? void 0 : target.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(target);
    }
}
function createElement(props) {
    let divTarget = document.getElementById('supabase-ui-confirm-alert');
    if (divTarget) {
        require$$1.render(React__namespace.createElement(ConfirmModal, Object.assign({}, props)), divTarget);
    }
    else {
        divTarget = document.createElement('div');
        divTarget.id = 'supabase-ui-confirm-alert';
        document.body.appendChild(divTarget);
        require$$1.render(React__namespace.createElement(ConfirmModal, Object.assign({}, props)), divTarget);
    }
}
function showConfirmAlert(props) {
    createElement(props);
}

const DropdownControl = (p) => {
    const { className, children, side, align, isNested } = p;
    return (React__namespace.createElement(ui.Dropdown, { className: className, side: side, align: align, overlay: React__namespace.createElement(DropdownItems, Object.assign({}, p)), isNested: isNested }, children));
};
const DropdownItems = ({ options, onSelect, }) => {
    return (React__namespace.createElement("div", { className: "dropdown-control", style: { maxHeight: '30vh' } },
        options.length == 0 && (React__namespace.createElement(ui.Typography.Text, { className: "dropdown-control__empty-text" }, "No more items")),
        options.map((x) => {
            return (React__namespace.createElement(ui.Dropdown.Item, { key: x.value, onClick: () => onSelect(x.value) }, x.label));
        })));
};

const MonacoEditor = ({ width, height, value, language, onChange, onMount, }) => {
    function handleEditorOnMount(editor) {
        // add margin above first line
        editor.changeViewZones((accessor) => {
            accessor.addZone({
                afterLineNumber: 0,
                heightInPx: 4,
                domNode: document.createElement('div'),
            });
        });
        // move cursor to the end of document
        const model = editor.getModel();
        const position = model.getPositionAt(value === null || value === void 0 ? void 0 : value.length);
        editor.setPosition(position);
        // auto focus on mount
        setTimeout(() => {
            editor === null || editor === void 0 ? void 0 : editor.focus();
        }, 0);
        if (onMount)
            onMount(editor);
    }
    return (React__namespace.createElement(index$1, { width: width, height: height || '200px', theme: "supabase", wrapperProps: {
            className: 'grid-monaco-editor-container',
        }, className: "grid-monaco-editor", defaultLanguage: language || 'plaintext', defaultValue: value, onChange: onChange, onMount: handleEditorOnMount, options: {
            tabSize: 2,
            fontSize: 13,
            minimap: {
                enabled: false,
            },
            glyphMargin: false,
            folding: false,
            lineNumbers: 'off',
            lineNumbersMinChars: 0,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
        } }));
};

const NullValue = ({}) => {
    return (React__namespace.createElement("span", { className: "null-value", style: { opacity: 0.5 } }, "NULL"));
};

function includes(array, element) {
    return array.indexOf(element) >= 0;
}
/**
 * Hook for listening on key events.
 *
 * @param {Object|Map} keyMap       Key names mapped to event handlers. If a key name exists, its
 *                                  default behavior will be suppressed.
 * @param {Array} whitelistNodes    If target element is in the whitelist nodes array, will not
 *                                  trigger shortcut event
 * @param {Array} whitelistClasses  If target class is in the whitelist classes array, will not
 *                                  trigger shortcut event
 */
function useKeyboardShortcuts(keyMap, whitelistNodes = [], whitelistClasses = []) {
    const [lastKeydown, setLastKeydown] = React__namespace.useState();
    const handleKeydown = (event) => {
        if (!keyMap ||
            includes(whitelistNodes, event.target.nodeName) ||
            includes(whitelistClasses, event.target.className)) {
            return;
        }
        let keyPressed = getKeyPresses(event);
        if (keyMap[keyPressed]) {
            /**
             * combined keymap will trigger action on KeyDown event
             * while single keymap  will trigger action on KeyUp event
             */
            if (keyPressed.includes('+')) {
                event.preventDefault();
                keyMap[keyPressed](event);
                setLastKeydown(null);
            }
            else {
                setLastKeydown(event.key);
                event.preventDefault();
            }
        }
    };
    const handleKeyup = (event) => {
        if (!keyMap)
            return;
        if (keyMap[event.key] && lastKeydown === event.key) {
            event.preventDefault();
            keyMap[event.key](event);
            setLastKeydown(null);
        }
    };
    function getKeyPresses(event) {
        return event.metaKey && event.shiftKey
            ? `Command+Shift+${event.key}`
            : event.metaKey
                ? `Command+${event.key}`
                : event.shiftKey && event.key === 'Enter'
                    ? `Shift+${event.key}`
                    : event.ctrlKey && event.key
                        ? `Control+${event.key}`
                        : event.key;
    }
    React__namespace.useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        window.addEventListener('keyup', handleKeyup);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
            window.removeEventListener('keyup', handleKeyup);
        };
    });
}

function Shortcuts({ gridRef }) {
    const state = useTrackedState();
    const { rows, gridColumns, selectedCellPosition } = state;
    const [metaKey, setMetaKey] = React__namespace.useState('Command');
    React__namespace.useEffect(() => {
        function getClientOS() {
            return (navigator === null || navigator === void 0 ? void 0 : navigator.appVersion.indexOf('Win')) !== -1
                ? 'windows'
                : (navigator === null || navigator === void 0 ? void 0 : navigator.appVersion.indexOf('Mac')) !== -1
                    ? 'macos'
                    : 'unknown';
        }
        const metakey = getClientOS() === 'windows' ? 'Control' : 'Command';
        setMetaKey(metakey);
    }, []);
    useKeyboardShortcuts({
        [`${metaKey}+ArrowUp`]: event => {
            var _a;
            event.stopPropagation();
            if (selectedCellPosition) {
                const position = {
                    idx: (_a = selectedCellPosition === null || selectedCellPosition === void 0 ? void 0 : selectedCellPosition.idx) !== null && _a !== void 0 ? _a : 0,
                    rowIdx: 0,
                };
                gridRef.current.selectCell(position);
            }
            else {
                gridRef.current.scrollToRow(Number(0));
            }
        },
        [`${metaKey}+ArrowDown`]: event => {
            var _a;
            event.stopPropagation();
            if (selectedCellPosition) {
                const position = {
                    idx: (_a = selectedCellPosition === null || selectedCellPosition === void 0 ? void 0 : selectedCellPosition.idx) !== null && _a !== void 0 ? _a : 0,
                    rowIdx: rows.length > 1 ? rows.length - 1 : 0,
                };
                gridRef.current.selectCell(position);
            }
            else {
                gridRef.current.scrollToRow(Number(rows.length));
            }
        },
        [`${metaKey}+ArrowLeft`]: event => {
            var _a;
            event.stopPropagation();
            const fronzenColumns = gridColumns.filter(x => x.frozen);
            const position = {
                idx: fronzenColumns.length,
                rowIdx: (_a = selectedCellPosition === null || selectedCellPosition === void 0 ? void 0 : selectedCellPosition.rowIdx) !== null && _a !== void 0 ? _a : 0,
            };
            gridRef.current.selectCell(position);
        },
        [`${metaKey}+ArrowRight`]: event => {
            var _a, _b;
            event.stopPropagation();
            (_a = gridRef.current) === null || _a === void 0 ? void 0 : _a.selectCell({
                idx: gridColumns.length - 1,
                rowIdx: (_b = selectedCellPosition === null || selectedCellPosition === void 0 ? void 0 : selectedCellPosition.rowIdx) !== null && _b !== void 0 ? _b : 0,
            });
        },
        [`${metaKey}+c`]: event => {
            var _a, _b;
            event.stopPropagation();
            if (selectedCellPosition) {
                const { idx, rowIdx } = selectedCellPosition;
                if (idx > 0) {
                    const colKey = gridColumns[idx].key;
                    const cellValue = (_b = (_a = rows[rowIdx]) === null || _a === void 0 ? void 0 : _a[colKey]) !== null && _b !== void 0 ? _b : '';
                    const value = formatClipboardValue(cellValue);
                    navigator.clipboard.writeText(value);
                }
            }
        },
    }, ['INPUT', 'TEXTAREA', 'SELECT']);
    return null;
}

const EmptyValue = ({}) => {
    return (React__namespace.createElement("span", { className: "sb-grid-empty-value", style: { opacity: 0.5 } }, "EMPTY"));
};

const RowMenu = ({}) => {
    const state = useTrackedState();
    const dispatch = useDispatch();
    const { selectedRows, rows: allRows, editable } = state;
    function onRowsDelete() {
        showConfirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete the selected rows? This action cannot be undone.',
            onConfirm: () => __awaiter(this, void 0, void 0, function* () {
                const rowIdxs = Array.from(selectedRows);
                const rows = allRows.filter(x => rowIdxs.includes(x.idx));
                const { error } = state.rowService.delete(rows);
                if (error) {
                    if (state.onError)
                        state.onError(error);
                }
                else {
                    dispatch({ type: 'REMOVE_ROWS', payload: { rowIdxs } });
                    dispatch({
                        type: 'SELECTED_ROWS_CHANGE',
                        payload: { selectedRows: new Set() },
                    });
                }
            }),
        });
    }
    function onRowsExportCsv() {
        const rows = allRows.filter(x => selectedRows.has(x.idx));
        const csv = exportRowsToCsv(state.table.columns, rows);
        const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        FileSaver.saveAs(csvData, `${state.table.name}_rows.csv`);
    }
    function onAllRowsExportCsv() {
        const csv = exportRowsToCsv(state.table.columns, allRows);
        const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        FileSaver.saveAs(csvData, `${state.table.name}_allRows.csv`);
    }
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(ui.Dropdown, { align: "end", side: "bottom", overlay: React__namespace.createElement(React__namespace.Fragment, null,
                selectedRows.size == 0 && (React__namespace.createElement(ui.Dropdown.Item, { onClick: onAllRowsExportCsv, icon: React__namespace.createElement(ui.IconEdit, { size: "tiny" }) }, "Export all rows to csv")),
                selectedRows.size > 0 && (React__namespace.createElement(ui.Dropdown.Item, { onClick: onRowsExportCsv, icon: React__namespace.createElement(ui.IconEdit, { size: "tiny" }) }, "Export to csv")),
                editable && selectedRows.size > 0 && (React__namespace.createElement(React__namespace.Fragment, null,
                    React__namespace.createElement(ui.Divider, { light: true }),
                    React__namespace.createElement(ui.Dropdown.Item, { onClick: onRowsDelete, icon: React__namespace.createElement(ui.IconTrash, { size: "tiny", stroke: "red" }) }, "Delete selected rows")))) },
            React__namespace.createElement(ui.Button, { as: 'span', type: "text", icon: React__namespace.createElement(ui.IconChevronDown, null), style: { padding: '3px' } }))));
};

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function cx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Context = /*#__PURE__*/React.createContext({});
/**
 * Access parent ref tracker.
 */

function useRefTrackerContext() {
  return React.useContext(Context);
}
var RefTrackerProvider = function RefTrackerProvider(props) {
  return React__default["default"].createElement(Context.Provider, {
    value: props.refTracker
  }, props.children);
};

function createEventManager() {
  var eventList = new Map();
  return {
    on: function on(event, handler) {
      var _eventList$get;

      //eslint-disable-next-line @typescript-eslint/no-unused-expressions
      eventList.has(event) ? (_eventList$get = eventList.get(event)) == null ? void 0 : _eventList$get.add(handler) : eventList.set(event, new Set([handler]));
      return this;
    },
    off: function off(event, handler) {
      handler ? eventList.get(event)["delete"](handler) : eventList["delete"](event);
      return this;
    },
    emit: function emit(event, args) {
      if (process.env.NODE !== 'production') {
        var currentEv = event;

        if (!eventList.has(event) && currentEv !== 0
        /* HIDE_ALL */
        ) {
            console.error("It seems that the menu you are trying to display is not renderer or you have a menu id mismatch.", "You used the menu id: " + event);
          }
      }

      eventList.has(event) && eventList.get(event).forEach(function (handler) {
        handler(args);
      });
      return this;
    }
  };
}

var eventManager = /*#__PURE__*/createEventManager();

function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/**
 * Used to store children refs
 */

function useRefTracker() {
  return React.useRef(new Map()).current;
}

var contextMenu = {
  show: function show(_ref) {
    var id = _ref.id,
        event = _ref.event,
        props = _ref.props,
        position = _ref.position;
    if (event.preventDefault) event.preventDefault();
    eventManager.emit(0
    /* HIDE_ALL */
    ).emit(id, {
      event: event.nativeEvent || event,
      props: props,
      position: position
    });
  },
  hideAll: function hideAll() {
    eventManager.emit(0
    /* HIDE_ALL */
    );
  }
};

function useContextMenu(props) {
  return {
    show: function show(event, params) {
      if (process.env.NODE_ENV === 'development') {
        if (!(props == null ? void 0 : props.id) && !(params == null ? void 0 : params.id)) console.error("You need to provide an id when initializing the hook `useContextMenu({ id: 'your id' })` or when you display the menu `show(e, { id: 'your id' })`. The later is used to override the one defined during initialization.");
      }

      contextMenu.show({
        id: (params == null ? void 0 : params.id) || (props == null ? void 0 : props.id),
        props: (params == null ? void 0 : params.props) || (props == null ? void 0 : props.props),
        event: event,
        position: params == null ? void 0 : params.position
      });
    },
    hideAll: function hideAll() {
      contextMenu.hideAll();
    }
  };
}

/**
 * Used to control keyboard navigation
 */
function createMenuController() {
  var menuList = new Map();
  var focusedIndex;
  var parentNode;
  var isAtRoot;
  var currentItems;
  var forceCloseSubmenu = false;

  function init(rootMenu) {
    currentItems = rootMenu;
    focusedIndex = -1;
    isAtRoot = true;
  }

  function focusSelectedItem() {
    currentItems[focusedIndex].node.focus();
  }

  function isSubmenuFocused() {
    return focusedIndex >= 0 && currentItems[focusedIndex].isSubmenu;
  }

  function getSubmenuItems() {
    return Array.from(currentItems[focusedIndex].submenuRefTracker.values());
  }

  function isFocused() {
    if (focusedIndex === -1) {
      // focus first item
      moveDown();
      return false;
    }

    return true;
  }

  function moveDown() {
    if (focusedIndex + 1 < currentItems.length) {
      focusedIndex++;
    } else if (focusedIndex + 1 === currentItems.length) {
      focusedIndex = 0;
    }

    if (forceCloseSubmenu) closeSubmenu();
    focusSelectedItem();
  }

  function moveUp() {
    if (focusedIndex === -1 || focusedIndex === 0) {
      focusedIndex = currentItems.length - 1;
    } else if (focusedIndex - 1 < currentItems.length) {
      focusedIndex--;
    }

    if (forceCloseSubmenu) closeSubmenu();
    focusSelectedItem();
  }

  function openSubmenu() {
    if (isFocused() && isSubmenuFocused()) {
      var submenuItems = getSubmenuItems();
      var currentNode = currentItems[focusedIndex].node;
      menuList.set(currentNode, {
        isRoot: isAtRoot,
        focusedIndex: focusedIndex,
        parentNode: parentNode || currentNode,
        items: currentItems
      });
      currentNode.classList.add("react-contexify__submenu--is-open"
      /* submenuOpen */
      );
      parentNode = currentNode;

      if (submenuItems.length > 0) {
        focusedIndex = 0;
        currentItems = submenuItems;
      } else {
        forceCloseSubmenu = true;
      }

      isAtRoot = false;
      focusSelectedItem();
      return true;
    }

    return false;
  }

  function closeSubmenu() {
    if (isFocused() && !isAtRoot) {
      var _menuList$get = menuList.get(parentNode),
          isRoot = _menuList$get.isRoot,
          items = _menuList$get.items,
          parentFocusedIndex = _menuList$get.focusedIndex,
          menuParentNode = _menuList$get.parentNode;

      parentNode.classList.remove("react-contexify__submenu--is-open"
      /* submenuOpen */
      );
      currentItems = items;
      parentNode = menuParentNode;

      if (isRoot) {
        isAtRoot = true;
        menuList.clear();
      }

      if (!forceCloseSubmenu) {
        focusedIndex = parentFocusedIndex;
        focusSelectedItem();
      }
    }
  }

  return {
    init: init,
    moveDown: moveDown,
    moveUp: moveUp,
    openSubmenu: openSubmenu,
    closeSubmenu: closeSubmenu
  };
}
var NOOP = function NOOP() {};

function isFn(v) {
  return typeof v === 'function';
}
function isStr(v) {
  return typeof v === 'string';
}
function isTouchEvent(e) {
  return e.type === 'touchend';
}
function cloneItems(children, props) {
  return React.Children.map( // remove null item
  React.Children.toArray(children).filter(Boolean), function (item) {
    return React.cloneElement(item, props);
  });
}
function getMousePosition(e) {
  var pos = {
    x: 0,
    y: 0
  };

  if (isTouchEvent(e) && e.changedTouches && e.changedTouches.length > 0) {
    pos.x = e.changedTouches[0].clientX;
    pos.y = e.changedTouches[0].clientY;
  } else {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

  if (!pos.x || pos.x < 0) pos.x = 0;
  if (!pos.y || pos.y < 0) pos.y = 0;
  return pos;
}
function getPredicateValue(predicate, payload) {
  return isFn(predicate) ? predicate(payload) : predicate;
}
function hasExitAnimation(animation) {
  return !!(animation && (isStr(animation) || 'exit' in animation && animation.exit));
}

function reducer(state, payload) {
  return isFn(payload) ? _extends({}, state, payload(state)) : _extends({}, state, payload);
}

var Menu = function Menu(_ref) {
  var _cx3;

  var id = _ref.id,
      theme = _ref.theme,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? 'scale' : _ref$animation,
      _ref$onHidden = _ref.onHidden,
      onHidden = _ref$onHidden === void 0 ? NOOP : _ref$onHidden,
      _ref$onShown = _ref.onShown,
      onShown = _ref$onShown === void 0 ? NOOP : _ref$onShown,
      rest = _objectWithoutPropertiesLoose(_ref, ["id", "theme", "style", "className", "children", "animation", "onHidden", "onShown"]);

  var _useReducer = React.useReducer(reducer, {
    x: 0,
    y: 0,
    visible: false,
    triggerEvent: {},
    propsFromTrigger: null,
    willLeave: false
  }),
      state = _useReducer[0],
      setState = _useReducer[1];

  var nodeRef = React.useRef(null);
  var didMount = React.useRef(false);
  var wasVisible = usePrevious(state.visible);
  var refTracker = useRefTracker();

  var _useState = React.useState(function () {
    return createMenuController();
  }),
      menuController = _useState[0]; // subscribe event manager


  React.useEffect(function () {
    didMount.current = true;
    eventManager.on(id, show).on(0
    /* HIDE_ALL */
    , hide);
    return function () {
      eventManager.off(id, show).off(0
      /* HIDE_ALL */
      , hide);
    }; // hide rely on setState(dispatch), which is guaranted to be the same across render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // handle show/ hide callback

  React.useEffect(function () {
    if (didMount.current && state.visible !== wasVisible) {
      state.visible ? onShown() : onHidden();
    } // wasWisible is a ref
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.visible, onHidden, onShown]); // collect menu items for keyboard navigation

  React.useEffect(function () {
    if (!state.visible) {
      refTracker.clear();
    } else {
      menuController.init(Array.from(refTracker.values()));
    }
  }, [state.visible, menuController, refTracker]); // compute menu position

  React.useEffect(function () {
    if (state.visible) {
      var _window = window,
          windowWidth = _window.innerWidth,
          windowHeight = _window.innerHeight;
      var _nodeRef$current = nodeRef.current,
          menuWidth = _nodeRef$current.offsetWidth,
          menuHeight = _nodeRef$current.offsetHeight;
      var _x = state.x,
          _y = state.y;

      if (_x + menuWidth > windowWidth) {
        _x -= _x + menuWidth - windowWidth;
      }

      if (_y + menuHeight > windowHeight) {
        _y -= _y + menuHeight - windowHeight;
      }

      setState({
        x: _x,
        y: _y
      });
    } // state.visible and state{x,y} are updated together
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.visible]); // subscribe dom events

  React.useEffect(function () {
    function handleKeyboard(e) {
      e.preventDefault();

      switch (e.key) {
        case 'Enter':
          if (!menuController.openSubmenu()) hide();
          break;

        case 'Escape':
          hide();
          break;

        case 'ArrowUp':
          menuController.moveUp();
          break;

        case 'ArrowDown':
          menuController.moveDown();
          break;

        case 'ArrowRight':
          menuController.openSubmenu();
          break;

        case 'ArrowLeft':
          menuController.closeSubmenu();
          break;
      }
    }

    if (state.visible) {
      window.addEventListener('resize', hide);
      window.addEventListener('contextmenu', hide);
      window.addEventListener('click', hide);
      window.addEventListener('scroll', hide);
      window.addEventListener('keydown', handleKeyboard); // This let us debug the menu in the console in dev mode

      if (process.env.NODE_ENV !== 'development') {
        window.addEventListener('blur', hide);
      }
    }

    return function () {
      window.removeEventListener('resize', hide);
      window.removeEventListener('contextmenu', hide);
      window.removeEventListener('click', hide);
      window.removeEventListener('scroll', hide);
      window.removeEventListener('keydown', handleKeyboard);

      if (process.env.NODE_ENV !== 'development') {
        window.removeEventListener('blur', hide);
      }
    }; // state.visible will let us get the right reference to `hide`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.visible, menuController]);

  function show(_ref2) {
    var event = _ref2.event,
        props = _ref2.props,
        position = _ref2.position;
    event.stopPropagation();

    var _ref3 = position || getMousePosition(event),
        x = _ref3.x,
        y = _ref3.y; // prevent react from batching the state update
    // if the menu is already visible we have to recompute bounding rect based on position


    setTimeout(function () {
      setState({
        visible: true,
        willLeave: false,
        x: x,
        y: y,
        triggerEvent: event,
        propsFromTrigger: props
      });
    }, 0);
  }

  function hide(event) {
    // Safari trigger a click event when you ctrl + trackpad
    // Firefox:  trigger a click event when right click occur
    var e = event;

    if (typeof e !== 'undefined' && (e.button === 2 || e.ctrlKey === true) && e.type !== 'contextmenu') {
      return;
    }

    hasExitAnimation(animation) ? setState(function (state) {
      return {
        willLeave: state.visible
      };
    }) : setState(function (state) {
      return {
        visible: state.visible ? false : state.visible
      };
    });
  }

  function handleAnimationEnd() {
    if (state.willLeave && state.visible) {
      setState({
        visible: false,
        willLeave: false
      });
    }
  }

  function computeAnimationClasses() {
    if (!animation) return null;

    if (isStr(animation)) {
      var _cx;

      return cx((_cx = {}, _cx["react-contexify__will-enter--"
      /* animationWillEnter */
      + animation] = animation && visible && !willLeave, _cx["react-contexify__will-leave--"
      /* animationWillLeave */
      + animation + " " + "react-contexify__will-leave--"
      /* animationWillLeave */
      + "'disabled'"] = animation && visible && willLeave, _cx));
    } else if ('enter' in animation && 'exit' in animation) {
      var _cx2;

      return cx((_cx2 = {}, _cx2["react-contexify__will-enter--"
      /* animationWillEnter */
      + animation.enter] = animation.enter && visible && !willLeave, _cx2["react-contexify__will-leave--"
      /* animationWillLeave */
      + animation.exit + " " + "react-contexify__will-leave--"
      /* animationWillLeave */
      + "'disabled'"] = animation.exit && visible && willLeave, _cx2));
    }

    return null;
  }

  var visible = state.visible,
      triggerEvent = state.triggerEvent,
      propsFromTrigger = state.propsFromTrigger,
      x = state.x,
      y = state.y,
      willLeave = state.willLeave;
  var cssClasses = cx("react-contexify"
  /* menu */
  , className, (_cx3 = {}, _cx3["react-contexify__theme--"
  /* theme */
  + theme] = theme, _cx3), computeAnimationClasses());

  var menuStyle = _extends({}, style, {
    left: x,
    top: y,
    opacity: 1
  });

  return React__default["default"].createElement(RefTrackerProvider, {
    refTracker: refTracker
  }, visible && React__default["default"].createElement("div", Object.assign({}, rest, {
    className: cssClasses,
    onAnimationEnd: handleAnimationEnd,
    style: menuStyle,
    ref: nodeRef,
    role: "menu"
  }), cloneItems(children, {
    propsFromTrigger: propsFromTrigger,
    triggerEvent: triggerEvent
  })));
};

var Item = function Item(_ref) {
  var _cx;

  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      triggerEvent = _ref.triggerEvent,
      data = _ref.data,
      propsFromTrigger = _ref.propsFromTrigger,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? NOOP : _ref$onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "style", "triggerEvent", "data", "propsFromTrigger", "onClick", "disabled", "hidden"]);

  var refTracker = useRefTrackerContext();
  var handlerParams = {
    data: data,
    triggerEvent: triggerEvent,
    props: propsFromTrigger
  };
  var isDisabled = getPredicateValue(disabled, handlerParams);
  var isHidden = getPredicateValue(hidden, handlerParams);

  function handleClick(e) {
    handlerParams.event = e;
    isDisabled ? e.stopPropagation() : onClick(handlerParams);
  }

  function trackRef(node) {
    if (node && !isDisabled) refTracker.set(node, {
      node: node,
      isSubmenu: false
    });
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handlerParams.event = e;
      onClick(handlerParams);
    }
  }

  if (isHidden) return null;
  var cssClasses = cx("react-contexify__item"
  /* item */
  , className, (_cx = {}, _cx["react-contexify__item--disabled"
  /* itemDisabled */
  ] = isDisabled, _cx));
  return React__default["default"].createElement("div", Object.assign({}, rest, {
    className: cssClasses,
    style: style,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ref: trackRef,
    tabIndex: -1,
    role: "menuitem",
    "aria-disabled": isDisabled
  }), React__default["default"].createElement("div", {
    className: "react-contexify__item__content"
    /* itemContent */

  }, children));
};

const ROW_CONTEXT_MENU_ID = 'row-context-menu-id';
const RowContextMenu = ({}) => {
    const state = useTrackedState();
    const dispatch = useDispatch();
    function onDeleteRow(p) {
        showConfirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this row? This action cannot be undone.',
            onConfirm: () => __awaiter(this, void 0, void 0, function* () {
                const { props } = p;
                const { rowIdx } = props;
                const row = state.rows[rowIdx];
                const { error } = state.rowService.delete([row]);
                if (error) {
                    if (state.onError)
                        state.onError(error);
                }
                else {
                    dispatch({ type: 'REMOVE_ROWS', payload: { rowIdxs: [row.idx] } });
                    dispatch({
                        type: 'SELECTED_ROWS_CHANGE',
                        payload: { selectedRows: new Set() },
                    });
                }
            }),
        });
    }
    function onEditRowClick(p) {
        const { props } = p;
        const { rowIdx } = props;
        const row = state.rows[rowIdx];
        if (state.onEditRow)
            state.onEditRow(row);
    }
    function isItemHidden({ data }) {
        if (data === 'edit')
            return state.onEditRow == undefined;
        if (data === 'delete')
            return !state.editable;
        return false;
    }
    function onCopyCellContent(p) {
        var _a;
        const { props } = p;
        if (!state.selectedCellPosition || !props) {
            return;
        }
        const { rowIdx } = props;
        const row = state.rows[rowIdx];
        const columnKey = state.gridColumns[(_a = state.selectedCellPosition) === null || _a === void 0 ? void 0 : _a.idx].key;
        const value = row[columnKey];
        const text = formatClipboardValue(value);
        navigator.clipboard.writeText(text);
    }
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(Menu, { id: ROW_CONTEXT_MENU_ID, animation: false },
            React__namespace.createElement(Item, { onClick: onCopyCellContent },
                React__namespace.createElement(ui.IconClipboard, { size: "tiny" }),
                React__namespace.createElement("span", { className: "sb-grid-context-menu__label" }, "Copy cell content")),
            React__namespace.createElement(Item, { onClick: onEditRowClick, hidden: isItemHidden, data: "edit" },
                React__namespace.createElement(ui.IconEdit, { size: "tiny" }),
                React__namespace.createElement("span", { className: "sb-grid-context-menu__label" }, "Edit row")),
            React__namespace.createElement(Item, { onClick: onDeleteRow, hidden: isItemHidden, data: "delete" },
                React__namespace.createElement(ui.IconTrash, { size: "tiny", stroke: "red" }),
                React__namespace.createElement("span", { className: "sb-grid-context-menu__label" }, "Delete row")))));
};

const MENU_IDS = { ROW_CONTEXT_MENU_ID };

function ColumnHeader({ column, columnType, isPrimaryKey, format, }) {
    const ref = React__namespace.useRef(null);
    const dispatch = useDispatch();
    const columnIdx = column.idx;
    const columnKey = column.key;
    const columnFormat = getColumnFormat(columnType, format);
    const [{ isDragging }, drag] = useDrag({
        type: 'column-header',
        item: () => {
            return { key: columnKey, index: columnIdx };
        },
        canDrag: () => !column.frozen,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const [{ handlerId }, drop] = useDrop({
        accept: 'column-header',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            var _a;
            if (!ref.current) {
                return;
            }
            if (column.frozen) {
                return;
            }
            const dragIndex = item.index;
            const dragKey = item.key;
            const hoverIndex = columnIdx;
            const hoverKey = columnKey;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            // Get horizontal middle
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientX = clientOffset.x - hoverBoundingRect.left;
            // Only perform the move when the mouse has crossed half of the items width
            // Dragging left
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return;
            }
            // Dragging right
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return;
            }
            // Time to actually perform the action
            moveColumn(dragKey, hoverKey);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    const moveColumn = (fromKey, toKey) => {
        if (fromKey == toKey)
            return;
        dispatch({
            type: 'MOVE_COLUMN',
            payload: { fromKey, toKey },
        });
    };
    const opacity = isDragging ? 0 : 1;
    const cursor = column.frozen ? 'sb-grid-column-header--cursor' : '';
    drag(drop(ref));
    return (React__namespace.createElement("div", { ref: ref, "data-handler-id": handlerId, style: { opacity } },
        React__namespace.createElement("div", { className: `sb-grid-column-header ${cursor}` },
            React__namespace.createElement("div", { className: "sb-grid-column-header__inner" },
                renderColumnIcon(columnType),
                isPrimaryKey && (React__namespace.createElement("div", { className: "sb-grid-column-header__inner__primary-key" },
                    React__namespace.createElement(ui.IconKey, { size: "tiny", strokeWidth: 2 }))),
                React__namespace.createElement("span", { className: "sb-grid-column-header__inner__name" }, column.name),
                React__namespace.createElement("span", { className: "sb-grid-column-header__inner__format" }, columnFormat)),
            React__namespace.createElement(ColumnMenu, { column: column }))));
}
function renderColumnIcon(type) {
    switch (type) {
        case 'foreign_key':
            return React__namespace.createElement(ui.IconLink, { size: "tiny", strokeWidth: 2 });
        default:
            return null;
    }
}
function getColumnFormat(type, format) {
    if (type == 'array') {
        return `${format.replace('_', '')}[]`;
    }
    else
        return format;
}

function RowRenderer(props) {
    const { show: showContextMenu } = useContextMenu();
    function displayMenu(e) {
        const menuId = MENU_IDS.ROW_CONTEXT_MENU_ID;
        showContextMenu(e, {
            id: menuId,
            props: { rowIdx: props.rowIdx },
        });
    }
    return React__namespace.createElement(DataGrid.Row, Object.assign({}, props, { onContextMenu: displayMenu }));
}

function rowKeyGetter(row) {
    return row.idx;
}
const Grid = memo(React__namespace.forwardRef(({ width, height, containerClass, gridClass, rowClass }, ref) => {
    const dispatch = useDispatch();
    const state = useTrackedState();
    // workaround to force state tracking on state.gridColumns
    const columnHeaders = state.gridColumns.map((x) => `${x.key}_${x.frozen}`);
    const { gridColumns, rows, onError: onErrorFunc } = state;
    function onColumnResize(index, width) {
        updateColumnResizeDebounced(index, width, dispatch);
    }
    function onRowsChange(rows, data) {
        const rowData = rows[data.indexes[0]];
        const originRowData = state.rows.find((x) => x.idx == rowData.idx);
        const hasChange = JSON.stringify(rowData) !== JSON.stringify(originRowData);
        if (hasChange) {
            const { error } = state.rowService.update(rowData);
            if (error) {
                if (onErrorFunc)
                    onErrorFunc(error);
            }
            else {
                dispatch({
                    type: 'SET_ROWS',
                    payload: { rows },
                });
            }
        }
    }
    function onSelectedRowsChange(selectedRows) {
        dispatch({
            type: 'SELECTED_ROWS_CHANGE',
            payload: { selectedRows },
        });
    }
    function onSelectedCellChange(position) {
        dispatch({
            type: 'SELECTED_CELL_CHANGE',
            payload: { position },
        });
    }
    if (!columnHeaders || columnHeaders.length == 0) {
        return (React__namespace.createElement("div", { className: "sb-grid-grid--loading", style: { width: width || '100%', height: height || '50vh' } },
            React__namespace.createElement("div", { className: "sb-grid-grid--loading__inner" },
                React__namespace.createElement(ui.Loading, { active: true },
                    React__namespace.createElement("div", null)),
                React__namespace.createElement(ui.Typography.Text, { className: "sb-grid-grid--loading__inner__text" }, "loading ..."))));
    }
    return (React__namespace.createElement("div", { className: containerClass, style: { width: width || '100%', height: height || '50vh' } },
        React__namespace.createElement(DataGrid__default["default"], { ref: ref, columns: gridColumns, rows: rows !== null && rows !== void 0 ? rows : [], rowRenderer: RowRenderer, rowKeyGetter: rowKeyGetter, selectedRows: state.selectedRows, onColumnResize: onColumnResize, onRowsChange: onRowsChange, onSelectedCellChange: onSelectedCellChange, onSelectedRowsChange: onSelectedRowsChange, className: gridClass, rowClass: rowClass, style: { height: '100%' } })));
}));
const updateColumnResize = (index, width, dispatch) => {
    dispatch({
        type: 'UPDATE_COLUMN_SIZE',
        payload: { index, width: Math.round(width) },
    });
};
const updateColumnResizeDebounced = AwesomeDebouncePromise(updateColumnResize, 500);

const SelectColumn = {
    key: SELECT_COLUMN_KEY,
    name: '',
    width: 65,
    maxWidth: 65,
    resizable: false,
    sortable: false,
    frozen: true,
    headerRenderer: props => {
        return (React__namespace.createElement(SelectCellHeader, { "aria-label": "Select All", value: props.allRowsSelected, onChange: props.onAllRowsSelectionChange }));
    },
    formatter: (props) => {
        const [isRowSelected, onRowSelectionChange] = DataGrid.useRowSelection();
        return (React__namespace.createElement(SelectCellFormatter, { "aria-label": "Select", tabIndex: -1, isCellSelected: props.isCellSelected, value: isRowSelected, row: props.row, onChange: (checked, isShiftClick) => {
                onRowSelectionChange({ row: props.row, checked, isShiftClick });
            }, 
            // Stop propagation to prevent row selection
            onClick: stopPropagation }));
    },
    groupFormatter: (props) => {
        const [isRowSelected, onRowSelectionChange] = DataGrid.useRowSelection();
        return (React__namespace.createElement(SelectCellFormatter, { "aria-label": "Select Group", tabIndex: -1, isCellSelected: props.isCellSelected, value: isRowSelected, onChange: checked => {
                onRowSelectionChange({
                    row: props.row,
                    checked,
                    isShiftClick: false,
                });
            }, 
            // Stop propagation to prevent row selection
            onClick: stopPropagation }));
    },
};
function stopPropagation(event) {
    event.stopPropagation();
}
function SelectCellFormatter({ row, value, tabIndex, isCellSelected, disabled, onClick, onChange, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, }) {
    const state = useTrackedState();
    const { onEditRow } = state;
    const inputRef = useFocusRef(isCellSelected);
    function handleChange(e) {
        onChange(e.target.checked, e.nativeEvent.shiftKey);
    }
    function onEditClick(e) {
        e.stopPropagation();
        if (onEditRow && row) {
            onEditRow(row);
        }
    }
    return (React__namespace.createElement("div", { className: "sb-grid-select-cell__formatter" },
        React__namespace.createElement("input", { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, tabIndex: tabIndex, ref: inputRef, type: "checkbox", className: "rdg-row__select-column__select-action", disabled: disabled, checked: value, onChange: handleChange, onClick: onClick }),
        onEditRow && row && (React__namespace.createElement(ui.Button, { type: "text", size: "tiny", className: "rdg-row__select-column__edit-action", icon: React__namespace.createElement(ui.IconMaximize2, { size: "tiny" }), onClick: onEditClick, style: { padding: '2px' } }))));
}
function SelectCellHeader({ disabled, tabIndex, value, onChange, onClick, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, }) {
    function handleChange(e) {
        onChange(e.target.checked, e.nativeEvent.shiftKey);
    }
    return (React__namespace.createElement("div", { className: "sb-grid-select-cell__header" },
        React__namespace.createElement("input", { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, tabIndex: tabIndex, type: "checkbox", className: "sb-grid-select-cell__header__input", disabled: disabled, checked: value, onChange: handleChange, onClick: onClick }),
        React__namespace.createElement(RowMenu, null)));
}

const AddColumn = {
    key: ADD_COLUMN_KEY,
    name: '',
    width: 100,
    maxWidth: 100,
    resizable: false,
    sortable: false,
    frozen: false,
    headerRenderer(props) {
        return (React__namespace.createElement(AddColumnHeader, { "aria-label": "Add New Row", value: props.allRowsSelected, onChange: props.onAllRowsSelectionChange }));
    },
};
const AddColumnHeader = () => {
    const state = useTrackedState();
    const { onAddColumn } = state;
    return (React__namespace.createElement("div", { className: "sb-grid-add-column" },
        React__namespace.createElement(ui.Button, { block: true, type: "text", onClick: onAddColumn, icon: React__namespace.createElement(ui.IconPlus, null) })));
};

const FilterOperatorOptions = [
    { value: '=', label: '[ = ] equals' },
    { value: '<>', label: '[<>] not equal' },
    { value: '>', label: '[ > ] greater than' },
    { value: '<', label: '[ < ] less than' },
    { value: '>=', label: '[>=] greater than or equal' },
    { value: '<=', label: '[<=] less than or equal' },
    { value: '~~', label: '[~~] like operator' },
    { value: '~~*', label: '[~~*] ilike operator' },
    { value: 'in', label: '[ in ] one of a list of values' },
    { value: 'is', label: '[ is ] checking for (null,not null,true,false)' },
];

const updateFilterValue = (payload, dispatch) => {
    dispatch({
        type: 'UPDATE_FILTER',
        payload: payload,
    });
};
const updateFilterValueDebounced = AwesomeDebouncePromise(updateFilterValue, 550);

const FilterRow = ({ filterIdx, now }) => {
    var _a, _b, _c;
    const state = useTrackedState();
    const dispatch = useDispatch();
    const filter = state.filters[filterIdx];
    const column = (_a = state.table) === null || _a === void 0 ? void 0 : _a.columns.find((x) => x.name === filter.column);
    const columnOptions = ((_c = (_b = state.table) === null || _b === void 0 ? void 0 : _b.columns) === null || _c === void 0 ? void 0 : _c.map((x) => {
        return { value: x.name, label: x.name };
    })) || [];
    const [filterValue, setFilterValue] = React__namespace.useState(filter.value);
    React__namespace.useEffect(() => {
        const filter = state.filters[filterIdx];
        setFilterValue(filter.value);
    }, [filterIdx, now]);
    function onColumnChange(column) {
        dispatch({
            type: 'UPDATE_FILTER',
            payload: { filterIdx, value: Object.assign(Object.assign({}, filter), { column }) },
        });
    }
    function onOperatorChange(operator) {
        console.log("onOperatorChange.....");
        dispatch({
            type: 'UPDATE_FILTER',
            payload: { filterIdx, value: Object.assign(Object.assign({}, filter), { operator }) },
        });
    }
    function onFilterChange(event) {
        console.log("onFilterChange.....event:,", event);
        const value = event.target.value;
        setFilterValue(value);
        updateFilterValueDebounced({
            filterIdx,
            value: Object.assign(Object.assign({}, filter), { value: value }),
        }, dispatch);
    }
    function onRemoveFilter() {
        dispatch({
            type: 'REMOVE_FILTER',
            payload: { index: filterIdx },
        });
    }
    return (React__namespace.createElement(ui.Dropdown.Misc, null,
        React__namespace.createElement("div", { className: "sb-grid-filter-row" },
            React__namespace.createElement("div", { className: "sb-grid-filter-row__inner" },
                React__namespace.createElement(ui.Button, { icon: React__namespace.createElement(ui.IconX, null), className: "sb-grid-filter-row__inner__close", shadow: false, size: "tiny", type: "text", onClick: onRemoveFilter }),
                React__namespace.createElement(DropdownControl, { align: "start", options: columnOptions, onSelect: onColumnChange },
                    React__namespace.createElement(ui.Button, { as: "span", type: "outline", iconRight: React__namespace.createElement(ui.IconChevronDown, null) }, (column === null || column === void 0 ? void 0 : column.name) || '')),
                React__namespace.createElement(DropdownControl, { align: "start", options: FilterOperatorOptions, onSelect: onOperatorChange },
                    React__namespace.createElement(ui.Button, { as: "span", type: "outline", iconRight: React__namespace.createElement(ui.IconChevronDown, null) }, filter.operator))),
            React__namespace.createElement("div", null,
                React__namespace.createElement(ui.Input, { size: "tiny", value: filterValue, onChange: onFilterChange })))));
};
var FilterRow$1 = React__namespace.memo(FilterRow);

const FilterPopover = () => {
    const state = useTrackedState();
    const btnText = state.filters.length > 0
        ? `Filtered by ${state.filters.length} rule${state.filters.length > 1 ? 's' : ''}`
        : 'Filter';
    return (React__default["default"].createElement(ui.Popover, { align: "start", className: "sb-grid-filter-popover", overlay: React__default["default"].createElement(Filter, null) },
        React__default["default"].createElement(ui.Button, { as: 'span', type: "text", icon: React__default["default"].createElement(ui.IconFilter, null), style: { padding: '4px 8px' } }, btnText)));
};
const Filter = () => {
    const state = useTrackedState();
    const dispatch = useDispatch();
    function onAddFilter() {
        var _a;
        dispatch({
            type: 'ADD_FILTER',
            payload: {
                column: (_a = state.table) === null || _a === void 0 ? void 0 : _a.columns[0].name,
                operator: '=',
                value: '',
            },
        });
    }
    return (React__default["default"].createElement("div", { className: "" },
        React__default["default"].createElement("div", null,
            state.filters.map((_, index) => (React__default["default"].createElement(FilterRow$1, { key: `filter-${index}`, filterIdx: index, now: Date.now() }))),
            state.filters.length == 0 && (React__default["default"].createElement(ui.Dropdown.Misc, null,
                React__default["default"].createElement("div", { className: "sb-grid-filter-popover__misc" },
                    React__default["default"].createElement(ui.Typography.Text, null, "No filters applied to this view"),
                    React__default["default"].createElement(ui.Typography.Text, { small: true, type: "secondary", className: "sb-grid-filter-popover__misc__text" }, "Add a column below to filter the view"))))),
        React__default["default"].createElement(ui.Divider, { light: true }),
        React__default["default"].createElement(ui.Dropdown.Misc, null,
            React__default["default"].createElement(ui.Button, { icon: React__default["default"].createElement(ui.IconPlus, null), type: "text", onClick: onAddFilter }, "Add filter"))));
};

const SortRow = ({ columnName, index }) => {
    var _a;
    const state = useTrackedState();
    const dispatch = useDispatch();
    const column = (_a = state === null || state === void 0 ? void 0 : state.table) === null || _a === void 0 ? void 0 : _a.columns.find((x) => x.name === columnName);
    const sort = state === null || state === void 0 ? void 0 : state.sorts.find((x) => x.column === columnName);
    if (!column || !sort)
        return null;
    const ref = React__namespace.useRef(null);
    const [{ isDragging }, drag] = useDrag({
        type: 'sort-row',
        item: () => {
            return { key: columnName, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const [{ handlerId }, drop] = useDrop({
        accept: 'sort-row',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            var _a;
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveSort(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    function onToogle(value) {
        dispatch({
            type: 'UPDATE_SORT',
            payload: { column: columnName, ascending: value },
        });
    }
    function onDeleteClick() {
        dispatch({
            type: 'REMOVE_SORT',
            payload: { column: columnName },
        });
    }
    const moveSort = (dragIndex, hoverIndex) => {
        if (dragIndex == hoverIndex)
            return;
        dispatch({
            type: 'MOVE_SORT',
            payload: { fromIndex: dragIndex, toIndex: hoverIndex },
        });
    };
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (React__namespace.createElement(ui.Dropdown.Misc, null,
        React__namespace.createElement("div", { className: "sb-grid-sort-row", ref: ref, style: { opacity }, "data-handler-id": handlerId },
            React__namespace.createElement("div", { className: "sb-grid-sort-row__item" },
                React__namespace.createElement(ui.Button, { icon: React__namespace.createElement(ui.IconX, null), className: "sb-grid-sort-row__item__remove", shadow: false, size: "tiny", type: "text", onClick: onDeleteClick }),
                React__namespace.createElement("div", { className: "sb-grid-sort-row__item__label" },
                    React__namespace.createElement(ui.Typography.Text, { type: "secondary", small: true }, index > 0 ? 'then by' : 'sort by'),
                    React__namespace.createElement(ui.Typography.Text, null, column.name))),
            React__namespace.createElement("div", { className: "sb-grid-sort-row__item" },
                React__namespace.createElement(ui.Toggle, { className: "sb-grid-sort-row__item_toogle", layout: "horizontal", label: "ascending", defaultChecked: sort.ascending, onChange: onToogle }),
                React__namespace.createElement(ui.Typography.Text, { className: "sb-grid-sort-row__item__move" },
                    React__namespace.createElement(ui.IconMenu, { size: "tiny" }))))));
};
var SortRow$1 = React__namespace.memo(SortRow);

const SortPopover = () => {
    const state = useTrackedState();
    const btnText = state.sorts.length > 0
        ? `Sorted by ${state.sorts.length} rule${state.sorts.length > 1 ? 's' : ''}`
        : 'Sort';
    return (React__default["default"].createElement(ui.Popover, { align: "start", className: "sb-grid-sort-popover", overlay: React__default["default"].createElement(Sort, null) },
        React__default["default"].createElement(ui.Button, { as: 'span', type: "text", icon: React__default["default"].createElement(ui.IconList, null), style: { padding: '4px 8px' } }, btnText)));
};
const Sort = () => {
    var _a;
    const state = useTrackedState();
    const dispatch = useDispatch();
    const columns = (_a = state === null || state === void 0 ? void 0 : state.table) === null || _a === void 0 ? void 0 : _a.columns.filter((x) => {
        const found = state.sorts.find((y) => y.column == x.name);
        return !found;
    });
    const dropdownOptions = (columns === null || columns === void 0 ? void 0 : columns.map((x) => {
        return { value: x.name, label: x.name };
    })) || [];
    function onAddSort(columnName) {
        dispatch({
            type: 'ADD_SORT',
            payload: { column: columnName, ascending: true },
        });
    }
    return (React__default["default"].createElement("div", null,
        state.sorts.map((x, index) => (React__default["default"].createElement(SortRow$1, { key: x.column, columnName: x.column, index: index }))),
        state.sorts.length == 0 && (React__default["default"].createElement(ui.Dropdown.Misc, null,
            React__default["default"].createElement("div", { className: "sb-grid-dropdown__empty" },
                React__default["default"].createElement(ui.Typography.Text, null, "No sorts applied to this view"),
                React__default["default"].createElement(ui.Typography.Text, { small: true, type: "secondary", className: "sb-grid-dropdown__empty__text" }, "Add a column below to sort the view")))),
        React__default["default"].createElement(ui.Divider, { light: true }),
        React__default["default"].createElement(ui.Dropdown.Misc, null, columns && columns.length > 0 ? (React__default["default"].createElement(DropdownControl, { options: dropdownOptions, onSelect: onAddSort, side: "bottom", align: "start" },
            React__default["default"].createElement(ui.Button, { as: "span", type: "text", iconRight: React__default["default"].createElement(ui.IconChevronDown, null), className: "sb-grid-dropdown__item-trigger" }, `Pick ${state.sorts.length > 1 ? 'another' : 'a'} column to sort by`))) : (React__default["default"].createElement(ui.Typography.Text, { small: true, type: "secondary" }, "All columns have been added")))));
};

const StatusLabel = ({}) => {
    const [msg, setMsg] = React__namespace.useState(undefined);
    React__namespace.useEffect(() => {
        let isMounted = true;
        let timer;
        SupabaseGridQueue.on('active', () => {
            if (timer)
                clearTimeout(timer);
            if (isMounted)
                setMsg('Saving...');
        });
        SupabaseGridQueue.on('idle', () => {
            if (timer)
                clearTimeout(timer);
            timer = window.setTimeout(() => setMsg(undefined), 2000);
            if (isMounted)
                setMsg('All changes saved');
        });
        return () => {
            isMounted = false;
            if (timer)
                clearTimeout(timer);
        };
    }, []);
    return (React__namespace.createElement("div", { className: "sb-grid-status-label" },
        msg && React__namespace.createElement(ui.Typography.Text, null, msg),
        !msg && (React__namespace.createElement("div", { className: "sb-grid-status-label__no-msg" },
            React__namespace.createElement("div", null)))));
};

const RefreshButton = ({}) => {
    const [loading, setLoading] = React__namespace.useState(false);
    const state = useTrackedState();
    const dispatch = useDispatch();
    function onClick() {
        return __awaiter(this, void 0, void 0, function* () {
            setLoading(true);
            yield fetchCount(state, dispatch);
            yield fetchPage(state, dispatch);
            setLoading(false);
        });
    }
    return (React__namespace.createElement(ui.Button, { type: "text", style: { padding: '4px 8px' }, icon: React__namespace.createElement(ui.IconRefreshCw, null), onClick: onClick, loading: loading }, "Refresh"));
};

const Header = ({ onAddColumn, onAddRow, headerActions, }) => {
    const state = useTrackedState();
    const { selectedRows } = state;
    return (React__namespace.createElement("div", { className: "sb-grid-header" },
        React__namespace.createElement("div", { className: "sb-grid-header__inner" }, selectedRows.size > 0 ? (React__namespace.createElement(RowHeader, null)) : (React__namespace.createElement(DefaultHeader, { onAddColumn: onAddColumn, onAddRow: onAddRow }))),
        React__namespace.createElement("div", { className: "sb-grid-header__inner" },
            headerActions,
            React__namespace.createElement(StatusLabel, null))));
};
const DefaultHeader = ({ onAddColumn, onAddRow, }) => {
    const renderNewColumn = (onAddColumn) => {
        if (!onAddColumn)
            return null;
        return (React__namespace.createElement(ui.Button, { type: "text", onClick: onAddColumn, style: { padding: '4px 8px' } }, "New Column"));
    };
    const renderAddRow = (onAddRow) => {
        if (!onAddRow)
            return null;
        return (React__namespace.createElement(ui.Button, { style: { padding: '4px 8px' }, icon: React__namespace.createElement(ui.IconPlus, { size: "tiny" }), onClick: onAddRow }, "Insert row"));
    };
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(RefreshButton, null),
        React__namespace.createElement(FilterPopover, null),
        React__namespace.createElement(SortPopover, null),
        React__namespace.createElement(ui.Divider, { light: true, type: "vertical", className: "sb-grid-header__inner__divider" }),
        renderNewColumn(onAddColumn),
        renderAddRow(onAddRow)));
};
const RowHeader = ({}) => {
    const state = useTrackedState();
    const dispatch = useDispatch();
    const { selectedRows, rows: allRows, editable } = state;
    const onRowsDelete = () => {
        showConfirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete the selected rows? This action cannot be undone.',
            onConfirm: () => __awaiter(void 0, void 0, void 0, function* () {
                const rowIdxs = Array.from(selectedRows);
                const rows = allRows.filter((x) => rowIdxs.includes(x.idx));
                const { error } = state.rowService.delete(rows);
                if (error) {
                    if (state.onError)
                        state.onError(error);
                }
                else {
                    dispatch({ type: 'REMOVE_ROWS', payload: { rowIdxs } });
                    dispatch({
                        type: 'SELECTED_ROWS_CHANGE',
                        payload: { selectedRows: new Set() },
                    });
                }
            }),
        });
    };
    function onRowsExportCsv() {
        const rows = allRows.filter((x) => selectedRows.has(x.idx));
        const csv = exportRowsToCsv(state.table.columns, rows);
        const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        FileSaver.saveAs(csvData, `${state.table.name}_rows.csv`);
    }
    function deselectRows() {
        dispatch({
            type: 'SELECTED_ROWS_CHANGE',
            payload: { selectedRows: new Set() },
        });
    }
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(ui.Button, { type: "text", style: { padding: '4px' }, icon: React__namespace.createElement(ui.IconX, { size: "tiny", strokeWidth: 2 }), onClick: deselectRows }),
        React__namespace.createElement("div", null,
            React__namespace.createElement(ui.Typography.Text, { small: true, type: "secondary", className: "row_header__selected-rows" }, selectedRows.size > 1
                ? `${selectedRows.size} rows selected`
                : `${selectedRows.size} row selected`)),
        React__namespace.createElement(ui.Button, { type: "primary", size: "tiny", style: { padding: '4px 8px' }, icon: React__namespace.createElement(ui.IconDownload, null), onClick: onRowsExportCsv }, "Export to csv"),
        editable && (React__namespace.createElement(React__namespace.Fragment, null,
            React__namespace.createElement(ui.Divider, { type: "vertical", className: "sb-grid-header__inner__divider", light: true }),
            React__namespace.createElement(ui.Button, { type: "default", size: "tiny", style: { padding: '4px 8px' }, icon: React__namespace.createElement(ui.IconTrash, { size: "tiny" }), onClick: onRowsDelete }, selectedRows.size > 1
                ? `Delete ${selectedRows.size} rows`
                : `Delete ${selectedRows.size} row`)))));
};

const updatePage = (payload, dispatch) => {
    dispatch({
        type: 'SET_PAGE',
        payload: payload,
    });
};
const updatePageDebounced = AwesomeDebouncePromise(updatePage, 550);
const rowsPerPageOptions = [
    { value: 100, label: '100 rows' },
    { value: 500, label: '500 rows' },
    { value: 1000, label: '1000 rows' },
    { value: 10000, label: '10000 rows' },
    { value: 100000, label: '100000 rows' },
];
const Pagination = () => {
    const state = useTrackedState();
    const dispatch = useDispatch();
    const [page, setPage] = React__namespace.useState(state.page);
    const maxPages = Math.ceil(state.totalRows / state.rowsPerPage);
    const totalPages = state.totalRows > 0 ? maxPages : 1;
    React__namespace.useEffect(() => {
        if (state.page != page)
            setPage(state.page);
    }, [state.page, page]);
    function onPreviousPage() {
        if (state.page > 1) {
            const previousPage = state.page - 1;
            setPage(previousPage);
            dispatch({ type: 'SET_PAGE', payload: previousPage });
        }
    }
    function onNextPage() {
        if (state.page < maxPages) {
            const nextPage = state.page + 1;
            setPage(nextPage);
            dispatch({ type: 'SET_PAGE', payload: nextPage });
        }
    }
    function onPageChange(event) {
        const value = event.target.value;
        const pageNum = Number(value);
        setPage(pageNum);
        updatePageDebounced(pageNum, dispatch);
    }
    function onRowsPerPageChange(value) {
        dispatch({ type: 'SET_ROWS_PER_PAGE', payload: value });
    }
    return (React__namespace.createElement("div", { className: "sb-grid-pagination" }, state.totalRows < 0 ? (React__namespace.createElement(ui.Typography.Text, null, "... loading total records")) : (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(ui.Button, { icon: React__namespace.createElement(ui.IconArrowLeft, null), type: "outline", disabled: state.page <= 1, onClick: onPreviousPage, style: { padding: '3px 10px' } }),
        React__namespace.createElement(ui.Typography.Text, null, "Page"),
        React__namespace.createElement("div", { className: "sb-grid-pagination-input-container" },
            React__namespace.createElement(ui.InputNumber, { value: page, onChange: onPageChange, className: "sb-grid-pagination-input", size: "tiny", style: {
                    width: '3rem',
                }, max: maxPages, min: 1 })),
        React__namespace.createElement(ui.Typography.Text, null, `of ${totalPages}`),
        React__namespace.createElement(ui.Button, { icon: React__namespace.createElement(ui.IconArrowRight, null), type: "outline", disabled: state.page >= maxPages, onClick: onNextPage, style: { padding: '3px 10px' } }),
        React__namespace.createElement(DropdownControl, { options: rowsPerPageOptions, onSelect: onRowsPerPageChange, side: "top", align: "start" },
            React__namespace.createElement(ui.Button, { as: "span", type: "outline", style: { padding: '3px 10px' } }, `${state.rowsPerPage} rows`)),
        React__namespace.createElement(ui.Typography.Text, null, `${state.totalRows.toLocaleString()} records`)))));
};

const Footer = () => {
    return (React__namespace.createElement("div", { className: "sb-grid-footer" },
        React__namespace.createElement("div", { className: "sb-grid-footer__inner" },
            React__namespace.createElement(Pagination, null))));
};

function BooleanEditor({ row, column, onRowChange, onClose, }) {
    function onChange(event) {
        onRowChange(Object.assign(Object.assign({}, row), { [column.key]: event.target.checked }));
    }
    function onBlur() {
        onClose(true);
    }
    return (React__namespace.createElement("div", { className: "sb-grid-checkbox-editor" },
        React__namespace.createElement("input", { className: "sb-grid-checkbox-editor__input", checked: row[column.key], onChange: onChange, onBlur: onBlur, type: "checkbox", style: { margin: 'auto' } })));
}

function autoFocusAndSelect$3(input) {
    input === null || input === void 0 ? void 0 : input.focus();
    input === null || input === void 0 ? void 0 : input.select();
}
function DateEditor({ row, column, onRowChange, onClose, }) {
    const value = row[column.key];
    function onChange(event) {
        let _value = event.target.value;
        if (_value == '')
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: null }));
        else
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: _value }));
    }
    return (React__namespace.createElement("input", { className: "sb-grid-date-editor", ref: autoFocusAndSelect$3, value: value !== null && value !== void 0 ? value : '', onChange: onChange, onBlur: () => onClose(true), type: "date" }));
}

var dayjs_min = {exports: {}};

(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
}(dayjs_min));

var dayjs = dayjs_min.exports;

var customParseFormat$1 = {exports: {}};

(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,o={},s=function(t){return (t=+t)+(t>68?1900:2e3)};var a=function(t){return function(e){this[t]=+e;}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t);}],u=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},h=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=h(t,!1);}],a:[i,function(t){this.afternoon=h(t,!0);}],S:[/\d/,function(t){this.milliseconds=100*+t;}],SS:[n,function(t){this.milliseconds=10*+t;}],SSS:[/\d{3}/,function(t){this.milliseconds=+t;}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r);}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(t){var e=u("months"),n=(u("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[i,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e;}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(t){this.year=s(t);}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),a=s.length,f=0;f<a;f+=1){var u=s[f],h=d[u],c=h&&h[0],l=h&&h[1];s[f]=l?{regex:c,parser:l}:u.replace(/^\[|\]$/g,"");}return function(t){for(var e={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else {var o=i.regex,f=i.parser,u=t.substr(r),h=o.exec(u)[0];f.call(e,h),t=t.replace(h,"");}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon;}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,s=t.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],u=!0===s[3],h=f||u,d=s[2];u&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=c(e)(t),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,u=r.seconds,h=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=u||0,g=h||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(t){return new Date("")}}(e,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),h&&e!=this.format(a)&&(this.$d=new Date("")),o={};}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""));}else i.call(this,t);};}}));
}(customParseFormat$1));

var customParseFormat = customParseFormat$1.exports;

dayjs.extend(customParseFormat);
function autoFocusAndSelect$2(input) {
    input === null || input === void 0 ? void 0 : input.focus();
    input === null || input === void 0 ? void 0 : input.select();
}
const INPUT_DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
function BaseEditor$1({ row, column, format, onRowChange, onClose, }) {
    const value = row[column.key];
    const timeValue = value
        ? dayjs(value, format).format(INPUT_DATE_TIME_FORMAT)
        : value;
    function onChange(event) {
        let _value = event.target.value;
        if (_value == '') {
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: null }));
        }
        else {
            const _timeValue = dayjs(_value, INPUT_DATE_TIME_FORMAT).format(format);
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: _timeValue }));
        }
    }
    return (React__namespace.createElement("input", { className: "sb-grid-datetime-editor", ref: autoFocusAndSelect$2, value: timeValue !== null && timeValue !== void 0 ? timeValue : '', onChange: onChange, onBlur: () => onClose(true), type: "datetime-local", step: "1" }));
}
function DateTimeEditor(props) {
    return React__namespace.createElement(BaseEditor$1, Object.assign({}, props, { format: "YYYY-MM-DDTHH:mm:ss" }));
}
function DateTimeWithTimezoneEditor(props) {
    return React__namespace.createElement(BaseEditor$1, Object.assign({}, props, { format: "YYYY-MM-DDTHH:mm:ssZ" }));
}

var Popover = {};

var PopoverPortal$1 = {};

Object.defineProperty(PopoverPortal$1, "__esModule", { value: true });
PopoverPortal$1.PopoverPortal = void 0;
var react_1$5 = React__default["default"];
var react_dom_1 = require$$1__default["default"];
var PopoverPortal = function (_a) {
    var container = _a.container, element = _a.element, children = _a.children;
    react_1$5.useLayoutEffect(function () {
        container.appendChild(element);
        return function () {
            container.removeChild(element);
        };
    }, [container, element]);
    return react_dom_1.createPortal(children, element);
};
PopoverPortal$1.PopoverPortal = PopoverPortal;

var util = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNudgedPopoverRect = exports.getNewPopoverRect = exports.popoverRectForPosition = exports.createContainer = exports.targetPositionHasChanged = exports.popoverStatesAreEqual = exports.rectsAreEqual = exports.arrayUnique = exports.Constants = void 0;
exports.Constants = {
    POPOVER_CONTAINER_CLASS_NAME: 'react-tiny-popover-container',
    DEFAULT_ALIGN: 'center',
    OBSERVER_THRESHOLDS: Array(1000)
        .fill(null)
        .map(function (_, i) { return i / 1000; })
        .reverse(),
    DEFAULT_POSITIONS: ['top', 'left', 'right', 'bottom'],
    EMPTY_CLIENT_RECT: {
        top: 0,
        left: 0,
        bottom: 0,
        height: 0,
        right: 0,
        width: 0,
    },
};
var arrayUnique = function (array) {
    return array.filter(function (value, index, self) { return self.indexOf(value) === index; });
};
exports.arrayUnique = arrayUnique;
var rectsAreEqual = function (rectA, rectB) {
    return rectA === rectB ||
        ((rectA === null || rectA === void 0 ? void 0 : rectA.bottom) === (rectB === null || rectB === void 0 ? void 0 : rectB.bottom) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.height) === (rectB === null || rectB === void 0 ? void 0 : rectB.height) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.left) === (rectB === null || rectB === void 0 ? void 0 : rectB.left) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.right) === (rectB === null || rectB === void 0 ? void 0 : rectB.right) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.top) === (rectB === null || rectB === void 0 ? void 0 : rectB.top) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.width) === (rectB === null || rectB === void 0 ? void 0 : rectB.width));
};
exports.rectsAreEqual = rectsAreEqual;
var popoverStatesAreEqual = function (stateA, stateB) {
    return stateA === stateB ||
        ((stateA === null || stateA === void 0 ? void 0 : stateA.align) === (stateB === null || stateB === void 0 ? void 0 : stateB.align) &&
            (stateA === null || stateA === void 0 ? void 0 : stateA.nudgedLeft) === (stateB === null || stateB === void 0 ? void 0 : stateB.nudgedLeft) &&
            (stateA === null || stateA === void 0 ? void 0 : stateA.nudgedTop) === (stateB === null || stateB === void 0 ? void 0 : stateB.nudgedTop) &&
            stateA.padding === stateB.padding &&
            exports.rectsAreEqual(stateA === null || stateA === void 0 ? void 0 : stateA.popoverRect, stateB === null || stateB === void 0 ? void 0 : stateB.popoverRect) &&
            exports.rectsAreEqual(stateA === null || stateA === void 0 ? void 0 : stateA.childRect, stateB === null || stateB === void 0 ? void 0 : stateB.childRect) &&
            (stateA === null || stateA === void 0 ? void 0 : stateA.position) === (stateB === null || stateB === void 0 ? void 0 : stateB.position));
};
exports.popoverStatesAreEqual = popoverStatesAreEqual;
var targetPositionHasChanged = function (oldRect, newRect) {
    return oldRect === undefined ||
        oldRect.left !== newRect.left ||
        oldRect.top !== newRect.top ||
        oldRect.width !== newRect.width ||
        oldRect.height !== newRect.height;
};
exports.targetPositionHasChanged = targetPositionHasChanged;
var createContainer = function (containerStyle, containerClassName) {
    var container = window.document.createElement('div');
    if (containerClassName)
        container.className = containerClassName;
    Object.assign(container.style, containerStyle);
    return container;
};
exports.createContainer = createContainer;
var popoverRectForPosition = function (position, childRect, popoverRect, padding, align) {
    var targetMidX = childRect.left + childRect.width / 2;
    var targetMidY = childRect.top + childRect.height / 2;
    var width = popoverRect.width, height = popoverRect.height;
    var top;
    var left;
    switch (position) {
        case 'left':
            top = targetMidY - height / 2;
            left = childRect.left - padding - width;
            if (align === 'start') {
                top = childRect.top;
            }
            if (align === 'end') {
                top = childRect.bottom - height;
            }
            break;
        case 'bottom':
            top = childRect.bottom + padding;
            left = targetMidX - width / 2;
            if (align === 'start') {
                left = childRect.left;
            }
            if (align === 'end') {
                left = childRect.right - width;
            }
            break;
        case 'right':
            top = targetMidY - height / 2;
            left = childRect.right + padding;
            if (align === 'start') {
                top = childRect.top;
            }
            if (align === 'end') {
                top = childRect.bottom - height;
            }
            break;
        default:
            top = childRect.top - height - padding;
            left = targetMidX - width / 2;
            if (align === 'start') {
                left = childRect.left;
            }
            if (align === 'end') {
                left = childRect.right - width;
            }
            break;
    }
    return { top: top, left: left, width: width, height: height, right: left + width, bottom: top + height };
};
exports.popoverRectForPosition = popoverRectForPosition;
var getNewPopoverRect = function (_a, boundaryInset) {
    var position = _a.position, align = _a.align, childRect = _a.childRect, popoverRect = _a.popoverRect, parentRect = _a.parentRect, padding = _a.padding, reposition = _a.reposition;
    var rect = exports.popoverRectForPosition(position, childRect, popoverRect, padding, align);
    var boundaryViolation = reposition &&
        ((position === 'top' && rect.top < parentRect.top + boundaryInset) ||
            (position === 'left' && rect.left < parentRect.left + boundaryInset) ||
            (position === 'right' && rect.right > parentRect.right - boundaryInset) ||
            (position === 'bottom' && rect.bottom > parentRect.bottom - boundaryInset));
    return {
        rect: rect,
        boundaryViolation: boundaryViolation,
    };
};
exports.getNewPopoverRect = getNewPopoverRect;
var getNudgedPopoverRect = function (popoverRect, parentRect, boundaryInset) {
    var topBoundary = parentRect.top + boundaryInset;
    var leftBoundary = parentRect.left + boundaryInset;
    var rightBoundary = parentRect.right - boundaryInset;
    var bottomBoundary = parentRect.bottom - boundaryInset;
    var top = popoverRect.top < topBoundary ? topBoundary : popoverRect.top;
    top = top + popoverRect.height > bottomBoundary ? bottomBoundary - popoverRect.height : top;
    var left = popoverRect.left < leftBoundary ? leftBoundary : popoverRect.left;
    left = left + popoverRect.width > rightBoundary ? rightBoundary - popoverRect.width : left;
    return {
        top: top,
        left: left,
        width: popoverRect.width,
        height: popoverRect.height,
        right: left + popoverRect.width,
        bottom: top + popoverRect.height,
    };
};
exports.getNudgedPopoverRect = getNudgedPopoverRect;

}(util));

var usePopover$1 = {};

var useElementRef$1 = {};

Object.defineProperty(useElementRef$1, "__esModule", { value: true });
useElementRef$1.useElementRef = void 0;
var react_1$4 = React__default["default"];
var util_1$1 = util;
var useElementRef = function (containerClassName, containerStyle) {
    var element = react_1$4.useMemo(function () { return util_1$1.createContainer(containerStyle, containerClassName); }, [containerClassName, containerStyle]);
    return react_1$4.useRef(element);
};
useElementRef$1.useElementRef = useElementRef;

Object.defineProperty(usePopover$1, "__esModule", { value: true });
usePopover$1.usePopover = void 0;
var react_1$3 = React__default["default"];
var util_1 = util;
var useElementRef_1 = useElementRef$1;
var usePopover = function (_a) {
    var childRef = _a.childRef, positions = _a.positions, containerClassName = _a.containerClassName, containerParent = _a.containerParent, contentLocation = _a.contentLocation, align = _a.align, padding = _a.padding, reposition = _a.reposition, boundaryInset = _a.boundaryInset, onPositionPopover = _a.onPositionPopover;
    var popoverRef = useElementRef_1.useElementRef(containerClassName, {
        position: 'fixed',
        overflow: 'visible',
        top: '0px',
        left: '0px',
    });
    var positionPopover = react_1$3.useCallback(function (positionIndex, childRect, popoverRect, parentRect) {
        var _a;
        if (positionIndex === void 0) { positionIndex = 0; }
        if (childRect === void 0) { childRect = (_a = childRef === null || childRef === void 0 ? void 0 : childRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect(); }
        if (popoverRect === void 0) { popoverRect = popoverRef.current.getBoundingClientRect(); }
        if (parentRect === void 0) { parentRect = containerParent === null || containerParent === void 0 ? void 0 : containerParent.getBoundingClientRect(); }
        if (!childRect || !parentRect) {
            return;
        }
        if (contentLocation) {
            var _b = typeof contentLocation === 'function'
                ? contentLocation({
                    childRect: childRect,
                    popoverRect: popoverRect,
                    parentRect: parentRect,
                    padding: padding,
                    nudgedTop: 0,
                    nudgedLeft: 0,
                    boundaryInset: boundaryInset,
                })
                : contentLocation, inputTop = _b.top, inputLeft = _b.left;
            var left_1 = parentRect.left + inputLeft;
            var top_1 = parentRect.top + inputTop;
            popoverRef.current.style.transform = "translate(" + left_1 + "px, " + top_1 + "px)";
            onPositionPopover({
                childRect: childRect,
                popoverRect: popoverRect,
                parentRect: parentRect,
                padding: padding,
                nudgedTop: 0,
                nudgedLeft: 0,
                boundaryInset: boundaryInset,
            });
            return;
        }
        var isExhausted = positionIndex === positions.length;
        var position = isExhausted ? positions[0] : positions[positionIndex];
        var _c = util_1.getNewPopoverRect({
            childRect: childRect,
            popoverRect: popoverRect,
            parentRect: parentRect,
            position: position,
            align: align,
            padding: padding,
            reposition: reposition,
        }, boundaryInset), rect = _c.rect, boundaryViolation = _c.boundaryViolation;
        if (boundaryViolation && reposition && !isExhausted) {
            positionPopover(positionIndex + 1, childRect, popoverRect, parentRect);
            return;
        }
        var top = rect.top, left = rect.left, width = rect.width, height = rect.height;
        var shouldNudge = reposition && !isExhausted;
        var _d = util_1.getNudgedPopoverRect(rect, parentRect, boundaryInset), nudgedLeft = _d.left, nudgedTop = _d.top;
        var finalTop = top;
        var finalLeft = left;
        if (shouldNudge) {
            finalTop = nudgedTop;
            finalLeft = nudgedLeft;
        }
        popoverRef.current.style.transform = "translate(" + finalLeft + "px, " + finalTop + "px)";
        onPositionPopover({
            childRect: childRect,
            popoverRect: {
                top: finalTop,
                left: finalLeft,
                width: width,
                height: height,
                right: finalLeft + width,
                bottom: finalTop + height,
            },
            parentRect: parentRect,
            position: position,
            align: align,
            padding: padding,
            nudgedTop: nudgedTop - top,
            nudgedLeft: nudgedLeft - left,
            boundaryInset: boundaryInset,
        });
    }, [
        childRef,
        popoverRef,
        positions,
        align,
        padding,
        reposition,
        boundaryInset,
        containerParent,
        contentLocation,
        onPositionPopover,
    ]);
    return [positionPopover, popoverRef];
};
usePopover$1.usePopover = usePopover;

var useMemoizedArray$1 = {};

Object.defineProperty(useMemoizedArray$1, "__esModule", { value: true });
useMemoizedArray$1.useMemoizedArray = void 0;
var react_1$2 = React__default["default"];
var useMemoizedArray = function (externalArray) {
    var prevArrayRef = react_1$2.useRef(externalArray);
    var array = react_1$2.useMemo(function () {
        if (prevArrayRef.current === externalArray)
            return prevArrayRef.current;
        if (prevArrayRef.current.length !== externalArray.length) {
            prevArrayRef.current = externalArray;
            return externalArray;
        }
        for (var i = 0; i < externalArray.length; i += 1) {
            if (externalArray[i] !== prevArrayRef.current[i]) {
                prevArrayRef.current = externalArray;
                return externalArray;
            }
        }
        return prevArrayRef.current;
    }, [externalArray]);
    return array;
};
useMemoizedArray$1.useMemoizedArray = useMemoizedArray;

var useArrowContainer$1 = {};

var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
Object.defineProperty(useArrowContainer$1, "__esModule", { value: true });
useArrowContainer$1.useArrowContainer = void 0;
var react_1$1 = React__default["default"];
var useArrowContainer = function (_a) {
    var childRect = _a.childRect, popoverRect = _a.popoverRect, position = _a.position, arrowSize = _a.arrowSize, arrowColor = _a.arrowColor;
    var arrowContainerStyle = react_1$1.useMemo(function () {
        return ({
            padding: arrowSize,
        });
    }, [arrowSize]);
    var arrowStyle = react_1$1.useMemo(function () {
        return (__assign$1({ position: 'absolute' }, (function () {
            var arrowWidth = arrowSize * 2;
            var top = childRect.top - popoverRect.top + childRect.height / 2 - arrowWidth / 2;
            var left = childRect.left - popoverRect.left + childRect.width / 2 - arrowWidth / 2;
            var lowerBound = arrowSize;
            var leftUpperBound = popoverRect.width - arrowSize;
            var topUpperBound = popoverRect.height - arrowSize;
            left = left < lowerBound ? lowerBound : left;
            left = left + arrowWidth > leftUpperBound ? leftUpperBound - arrowWidth : left;
            top = top < lowerBound ? lowerBound : top;
            top = top + arrowWidth > topUpperBound ? topUpperBound - arrowWidth : top;
            top = Number.isNaN(top) ? 0 : top;
            left = Number.isNaN(left) ? 0 : left;
            switch (position) {
                case 'right':
                    return {
                        borderTop: arrowSize + "px solid transparent",
                        borderBottom: arrowSize + "px solid transparent",
                        borderRight: arrowSize + "px solid " + arrowColor,
                        left: 0,
                        top: top,
                    };
                case 'left':
                    return {
                        borderTop: arrowSize + "px solid transparent",
                        borderBottom: arrowSize + "px solid transparent",
                        borderLeft: arrowSize + "px solid " + arrowColor,
                        right: 0,
                        top: top,
                    };
                case 'bottom':
                    return {
                        borderLeft: arrowSize + "px solid transparent",
                        borderRight: arrowSize + "px solid transparent",
                        borderBottom: arrowSize + "px solid " + arrowColor,
                        top: 0,
                        left: left,
                    };
                case 'top':
                    return {
                        borderLeft: arrowSize + "px solid transparent",
                        borderRight: arrowSize + "px solid transparent",
                        borderTop: arrowSize + "px solid " + arrowColor,
                        bottom: 0,
                        left: left,
                    };
                default:
                    return {
                        display: 'hidden',
                    };
            }
        })()));
    }, [
        arrowColor,
        arrowSize,
        childRect.height,
        childRect.left,
        childRect.top,
        childRect.width,
        popoverRect.height,
        popoverRect.left,
        popoverRect.top,
        popoverRect.width,
        position,
    ]);
    return {
        arrowContainerStyle: arrowContainerStyle,
        arrowStyle: arrowStyle,
    };
};
useArrowContainer$1.useArrowContainer = useArrowContainer;

var ArrowContainer$1 = {};

var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(ArrowContainer$1, "__esModule", { value: true });
ArrowContainer$1.ArrowContainer = void 0;
var jsx_runtime_1 = require$$0__default["default"];
var react_1 = React__default["default"];
var useArrowContainer_1 = useArrowContainer$1;
var ArrowContainer = function (_a) {
    var childRect = _a.childRect, popoverRect = _a.popoverRect, position = _a.position, arrowColor = _a.arrowColor, arrowSize = _a.arrowSize, arrowClassName = _a.arrowClassName, externalArrowStyle = _a.arrowStyle, className = _a.className, children = _a.children, externalArrowContainerStyle = _a.style;
    var _b = useArrowContainer_1.useArrowContainer({
        childRect: childRect,
        popoverRect: popoverRect,
        position: position,
        arrowColor: arrowColor,
        arrowSize: arrowSize,
    }), arrowContainerStyle = _b.arrowContainerStyle, arrowStyle = _b.arrowStyle;
    var mergedContainerStyle = react_1.useMemo(function () { return (__assign(__assign({}, arrowContainerStyle), externalArrowContainerStyle)); }, [arrowContainerStyle, externalArrowContainerStyle]);
    var mergedArrowStyle = react_1.useMemo(function () { return (__assign(__assign({}, arrowStyle), externalArrowStyle)); }, [arrowStyle, externalArrowStyle]);
    return (jsx_runtime_1.jsxs("div", __assign({ className: className, style: mergedContainerStyle }, { children: [jsx_runtime_1.jsx("div", { style: mergedArrowStyle, className: arrowClassName }, void 0), children] }), void 0));
};
ArrowContainer$1.ArrowContainer = ArrowContainer;

(function (exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = exports.usePopover = exports.ArrowContainer = exports.useArrowContainer = void 0;
var jsx_runtime_1 = require$$0__default["default"];
var react_1 = React__default["default"];
var PopoverPortal_1 = PopoverPortal$1;
var util_1 = util;
var usePopover_1 = usePopover$1;
Object.defineProperty(exports, "usePopover", { enumerable: true, get: function () { return usePopover_1.usePopover; } });
var useMemoizedArray_1 = useMemoizedArray$1;
var useArrowContainer_1 = useArrowContainer$1;
Object.defineProperty(exports, "useArrowContainer", { enumerable: true, get: function () { return useArrowContainer_1.useArrowContainer; } });
var ArrowContainer_1 = ArrowContainer$1;
Object.defineProperty(exports, "ArrowContainer", { enumerable: true, get: function () { return ArrowContainer_1.ArrowContainer; } });
exports.Popover = react_1.forwardRef(function (_a, externalRef) {
    var isOpen = _a.isOpen, children = _a.children, content = _a.content, _b = _a.positions, externalPositions = _b === void 0 ? util_1.Constants.DEFAULT_POSITIONS : _b, _c = _a.align, align = _c === void 0 ? util_1.Constants.DEFAULT_ALIGN : _c, _d = _a.padding, padding = _d === void 0 ? 0 : _d, _e = _a.reposition, reposition = _e === void 0 ? true : _e, _f = _a.containerParent, containerParent = _f === void 0 ? window.document.body : _f, _g = _a.containerClassName, containerClassName = _g === void 0 ? 'react-tiny-popover-container' : _g, containerStyle = _a.containerStyle, contentLocation = _a.contentLocation, _h = _a.boundaryInset, boundaryInset = _h === void 0 ? 0 : _h, onClickOutside = _a.onClickOutside;
    var positions = useMemoizedArray_1.useMemoizedArray(externalPositions);
    // TODO: factor prevs out into a custom prevs hook
    var prevIsOpen = react_1.useRef(false);
    var prevPositions = react_1.useRef();
    var prevContentLocation = react_1.useRef();
    var prevReposition = react_1.useRef(reposition);
    var childRef = react_1.useRef();
    var _j = react_1.useState({
        align: align,
        nudgedLeft: 0,
        nudgedTop: 0,
        position: positions[0],
        padding: padding,
        childRect: util_1.Constants.EMPTY_CLIENT_RECT,
        popoverRect: util_1.Constants.EMPTY_CLIENT_RECT,
        parentRect: util_1.Constants.EMPTY_CLIENT_RECT,
        boundaryInset: boundaryInset,
    }), popoverState = _j[0], setPopoverState = _j[1];
    var onPositionPopover = react_1.useCallback(function (popoverState) { return setPopoverState(popoverState); }, []);
    var _k = usePopover_1.usePopover({
        childRef: childRef,
        containerClassName: containerClassName,
        containerParent: containerParent,
        contentLocation: contentLocation,
        positions: positions,
        align: align,
        padding: padding,
        boundaryInset: boundaryInset,
        reposition: reposition,
        onPositionPopover: onPositionPopover,
    }), positionPopover = _k[0], popoverRef = _k[1];
    react_1.useLayoutEffect(function () {
        var shouldUpdate = true;
        var updatePopover = function () {
            var _a, _b;
            if (isOpen && shouldUpdate) {
                var childRect = (_a = childRef === null || childRef === void 0 ? void 0 : childRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                var popoverRect = (_b = popoverRef === null || popoverRef === void 0 ? void 0 : popoverRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
                if (childRect != null &&
                    popoverRect != null &&
                    (!util_1.rectsAreEqual(childRect, {
                        top: popoverState.childRect.top,
                        left: popoverState.childRect.left,
                        width: popoverState.childRect.width,
                        height: popoverState.childRect.height,
                        bottom: popoverState.childRect.top + popoverState.childRect.height,
                        right: popoverState.childRect.left + popoverState.childRect.width,
                    }) ||
                        popoverRect.width !== popoverState.popoverRect.width ||
                        popoverRect.height !== popoverState.popoverRect.height ||
                        popoverState.padding !== padding ||
                        popoverState.align !== align ||
                        positions !== prevPositions.current ||
                        contentLocation !== prevContentLocation.current ||
                        reposition !== prevReposition.current)) {
                    positionPopover();
                }
                // TODO: factor prev checks out into the custom prevs hook
                if (positions !== prevPositions.current) {
                    prevPositions.current = positions;
                }
                if (contentLocation !== prevContentLocation.current) {
                    prevContentLocation.current = contentLocation;
                }
                if (reposition !== prevReposition.current) {
                    prevReposition.current = reposition;
                }
                if (shouldUpdate) {
                    window.requestAnimationFrame(updatePopover);
                }
            }
            prevIsOpen.current = isOpen;
        };
        window.requestAnimationFrame(updatePopover);
        return function () {
            shouldUpdate = false;
        };
    }, [
        align,
        contentLocation,
        isOpen,
        padding,
        popoverRef,
        popoverState.align,
        popoverState.childRect.height,
        popoverState.childRect.left,
        popoverState.childRect.top,
        popoverState.childRect.width,
        popoverState.padding,
        popoverState.popoverRect.height,
        popoverState.popoverRect.width,
        positionPopover,
        positions,
        reposition,
    ]);
    react_1.useEffect(function () {
        var popoverElement = popoverRef.current;
        Object.assign(popoverElement.style, containerStyle);
        return function () {
            Object.keys(containerStyle !== null && containerStyle !== void 0 ? containerStyle : {}).forEach(function (key) {
                return delete popoverElement.style[key];
            });
        };
    }, [containerStyle, isOpen, popoverRef]);
    var handleOnClickOutside = react_1.useCallback(function (e) {
        var _a, _b;
        if (isOpen &&
            !((_a = popoverRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) &&
            !((_b = childRef.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
            onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(e);
        }
    }, [isOpen, onClickOutside, popoverRef]);
    var handleWindowResize = react_1.useCallback(function () {
        if (childRef.current) {
            window.requestAnimationFrame(function () { return positionPopover(); });
        }
    }, [positionPopover]);
    react_1.useEffect(function () {
        window.addEventListener('click', handleOnClickOutside);
        window.addEventListener('resize', handleWindowResize);
        return function () {
            window.removeEventListener('click', handleOnClickOutside);
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleOnClickOutside, handleWindowResize]);
    var handleRef = react_1.useCallback(function (node) {
        childRef.current = node;
        if (externalRef != null) {
            if (typeof externalRef === 'object') {
                externalRef.current = node;
            }
            else if (typeof externalRef === 'function') {
                externalRef(node);
            }
        }
    }, [externalRef]);
    var renderChild = function () {
        return react_1.cloneElement(children, {
            ref: handleRef,
        });
    };
    var renderPopover = function () {
        if (!isOpen)
            return null;
        return (jsx_runtime_1.jsx(PopoverPortal_1.PopoverPortal, __assign({ element: popoverRef.current, container: containerParent }, { children: typeof content === 'function' ? content(popoverState) : content }), void 0));
    };
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [renderChild(), renderPopover()] }, void 0));
});

}(Popover));

function JsonEditor({ row, column, onRowChange, }) {
    const state = useTrackedState();
    const [isPopoverOpen, setIsPopoverOpen] = React__namespace.useState(true);
    const gridColumn = state.gridColumns.find(x => x.name == column.key);
    const initialValue = row[column.key];
    const jsonString = initialValue ? JSON.stringify(initialValue) : '';
    const prettyJsonValue = prettifyJSON(jsonString);
    const [value, setValue] = React__namespace.useState(prettyJsonValue);
    const onEscape = React__namespace.useCallback((newValue) => {
        commitChange(newValue);
        setIsPopoverOpen(false);
    }, []);
    function onChange(_value) {
        if (!_value || _value == '')
            setValue(null);
        else
            setValue(_value);
    }
    function commitChange(newValue) {
        if (!newValue) {
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: null }), true);
        }
        else if (verifyJSON(newValue)) {
            const jsonValue = JSON.parse(newValue);
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: jsonValue }), true);
        }
        else {
            const { onError } = state;
            if (onError)
                onError(Error('invalid input'));
        }
    }
    return (React__namespace.createElement(Popover.Popover, { isOpen: isPopoverOpen, padding: -35, containerClassName: "", positions: ['bottom', 'top', 'left'], align: "start", content: React__namespace.createElement(BlockKeys, { value: value, onEscape: onEscape },
            React__namespace.createElement(MonacoEditor, { width: `${(gridColumn === null || gridColumn === void 0 ? void 0 : gridColumn.width) || column.width}px`, value: value !== null && value !== void 0 ? value : '', language: "json", onChange: onChange })) },
        React__namespace.createElement("div", { className: `${!!value && jsonString.trim().length == 0
                ? 'sb-grid-fill-container'
                : ''} sb-grid-json-editor__trigger`, onClick: () => setIsPopoverOpen(!isPopoverOpen) }, value === null || value === '' ? React__namespace.createElement(NullValue, null) : jsonString)));
}
const prettifyJSON = (value) => {
    if (value.length > 0) {
        try {
            return JSON.stringify(JSON.parse(value), undefined, 2);
        }
        catch (err) {
            // dont need to throw error, just return text value
            // Users have to fix format if they want to save
            return value;
        }
    }
    else {
        return value;
    }
};
const verifyJSON = (value) => {
    try {
        JSON.parse(value);
        return true;
    }
    catch (err) {
        return false;
    }
};

function NullableBooleanEditor({ row, column, onRowChange, onClose, }) {
    const value = row[column.key];
    React.useEffect(() => {
        // if value is null, set it to false on initial render
        if (value === null) {
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: false }));
        }
    }, []);
    function onChange(event) {
        onRowChange(Object.assign(Object.assign({}, row), { [column.key]: event.target.checked }));
    }
    function onBlur() {
        onClose(true);
    }
    function onClear() {
        onRowChange(Object.assign(Object.assign({}, row), { [column.key]: null }), true);
    }
    return (React__default["default"].createElement("div", { className: "sb-grid-checkbox-editor" },
        React__default["default"].createElement("input", { className: "sb-grid-checkbox-editor__input", checked: value === null ? false : value, onChange: onChange, onBlur: onBlur, type: "checkbox", style: { margin: 'auto' } }),
        React__default["default"].createElement(ui.Button, { type: "text", title: "Clear", icon: React__default["default"].createElement(ui.IconX, { size: "tiny", strokeWidth: 2 }), onClick: onClear, style: { padding: '3px', margin: 'auto 5px auto auto' } })));
}

function autoFocusAndSelect$1(input) {
    input === null || input === void 0 ? void 0 : input.focus();
    input === null || input === void 0 ? void 0 : input.select();
}
function NumberEditor({ row, column, onRowChange, onClose, }) {
    const value = row[column.key];
    function onChange(event) {
        const _value = event.target.value;
        if (_value == '')
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: null }));
        else
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: _value }));
    }
    function onBlur() {
        onClose(true);
    }
    return (React__namespace.createElement("input", { className: "sb-grid-number-editor", ref: autoFocusAndSelect$1, value: value !== null && value !== void 0 ? value : '', onChange: onChange, onBlur: onBlur, type: "number" }));
}

function SelectEditor({ row, column, onRowChange, onClose, options, }) {
    const value = row[column.key];
    function onChange(event) {
        const value = event.target.value;
        if (!value || value == '') {
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: null }), true);
        }
        else {
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: value }), true);
        }
    }
    function onBlur() {
        onClose(false);
    }
    return (React__namespace.createElement("select", { className: "sb-grid-select-editor", value: value !== null && value !== void 0 ? value : '', onChange: onChange, onBlur: onBlur, autoFocus: true },
        React__namespace.createElement("option", { value: '' }, "[null]"),
        options.map(({ label, value }) => (React__namespace.createElement("option", { key: value, value: value }, label)))));
}

function TextEditor({ row, column, onRowChange, }) {
    const state = useTrackedState();
    const [isPopoverOpen, setIsPopoverOpen] = React__namespace.useState(true);
    const gridColumn = state.gridColumns.find(x => x.name == column.key);
    const initialValue = row[column.key];
    const [value, setValue] = React__namespace.useState(initialValue);
    const onEscape = React__namespace.useCallback((newValue) => {
        onRowChange(Object.assign(Object.assign({}, row), { [column.key]: newValue }), true);
        setIsPopoverOpen(false);
    }, []);
    function onChange(_value) {
        if (!_value)
            setValue('');
        else
            setValue(_value);
    }
    return (React__namespace.createElement(Popover.Popover, { isOpen: isPopoverOpen, padding: -35, containerClassName: "", positions: ['bottom', 'top', 'left'], align: "start", content: React__namespace.createElement(BlockKeys, { value: value, onEscape: onEscape },
            React__namespace.createElement(MonacoEditor, { width: `${(gridColumn === null || gridColumn === void 0 ? void 0 : gridColumn.width) || column.width}px`, value: value !== null && value !== void 0 ? value : '', onChange: onChange })) },
        React__namespace.createElement("div", { className: `${!!value && value.trim().length == 0 ? 'sb-grid-fill-container' : ''} sb-grid-text-editor__trigger`, onClick: () => setIsPopoverOpen(!isPopoverOpen) }, value === null ? React__namespace.createElement(NullValue, null) : value === '' ? React__namespace.createElement(EmptyValue, null) : value)));
}

dayjs.extend(customParseFormat);
function autoFocusAndSelect(input) {
    input === null || input === void 0 ? void 0 : input.focus();
    input === null || input === void 0 ? void 0 : input.select();
}
/**
 * original input time format 'HH:mm'
 * when step=1, it becomes 'HH:mm:ss'
 */
const INPUT_TIME_FORMAT = 'HH:mm:ss';
function BaseEditor({ row, column, format, onRowChange, onClose, }) {
    const value = row[column.key];
    const timeValue = value
        ? dayjs(value, format).format(INPUT_TIME_FORMAT)
        : value;
    function onChange(event) {
        const _value = event.target.value;
        if (_value == '') {
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: null }));
        }
        else {
            const _timeValue = dayjs(_value, INPUT_TIME_FORMAT).format(format);
            onRowChange(Object.assign(Object.assign({}, row), { [column.key]: _timeValue }));
        }
    }
    return (React__namespace.createElement("input", { className: "sb-grid-time-editor", ref: autoFocusAndSelect, value: timeValue !== null && timeValue !== void 0 ? timeValue : '', onChange: onChange, onBlur: () => onClose(true), type: "time", step: "1" }));
}
function TimeEditor(props) {
    return React__namespace.createElement(BaseEditor, Object.assign({}, props, { format: "HH:mm:ss" }));
}
function TimeWithTimezoneEditor(props) {
    return React__namespace.createElement(BaseEditor, Object.assign({}, props, { format: "HH:mm:ssZZ" }));
}

const BooleanFormatter = (p) => {
    const value = p.row[p.column.key];
    if (value === null)
        return React__namespace.createElement(NullValue, null);
    return React__namespace.createElement(React__namespace.Fragment, null, value ? 'true' : 'false');
};

const DefaultFormatter = (p) => {
    let value = p.row[p.column.key];
    if (value === null)
        return React__namespace.createElement(NullValue, null);
    if (value === '')
        return React__namespace.createElement(EmptyValue, null);
    if (typeof value == 'object' || Array.isArray(value)) {
        value = JSON.stringify(value);
    }
    return React__namespace.createElement(React__namespace.Fragment, null, value);
};

const RowItem = ({ item, onSelect }) => {
    const keys = Object.keys(item);
    return (React__namespace.createElement("div", { className: "foreign-table-modal__row-item" },
        React__namespace.createElement(ui.Menu.Item, { onClick: () => onSelect(item) },
            React__namespace.createElement("div", { className: "foreign-table-modal__row-item__inner" }, keys.map((key, j) => {
                //
                // limit to 5 attributes
                //
                // this could be improved so the user could pick which attributes to display
                // @mildtomato
                if (j > 5)
                    return null;
                return (React__namespace.createElement("div", { className: "foreign-table-modal__row-item__inner__key-item", key: `item-${j}` },
                    React__namespace.createElement(ui.Typography.Text, { small: true, type: "secondary", className: "foreign-table-modal__row-item__inner__key-item__key" }, key),
                    React__namespace.createElement(ui.Typography.Text, { small: true, strong: true }, item[key] || '[null]')));
            })))));
};

const FilterHeader = ({ defaultColumnName, defaultValue, foreignColumnNames, onChange, }) => {
    const [columnName, setColumnName] = React.useState(defaultColumnName
        ? defaultColumnName
        : foreignColumnNames.length > 0
            ? foreignColumnNames[0]
            : '');
    const [condition, setCondition] = React.useState(FilterOperatorOptions[0].value);
    const [filterText, setFilterText] = React.useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : '');
    const columnOptions = foreignColumnNames.map((x) => {
        return { value: x, label: x };
    }) || [];
    function triggerOnChange(columnName, condition, filterText) {
        onFilterChangeDebounced({
            column: columnName,
            operator: condition,
            value: filterText,
        }, onChange);
    }
    function onColumnChange(value) {
        const str = value + '';
        setColumnName(str);
        triggerOnChange(str, condition, filterText);
    }
    function onConditionChange(value) {
        const str = value + '';
        setCondition(str);
        triggerOnChange(columnName, str, filterText);
    }
    function onFilterChange(event) {
        const value = event.target.value;
        setFilterText(value);
        triggerOnChange(columnName, condition, value);
    }
    return (React__default["default"].createElement("div", { className: "foreign-table-modal__filter" },
        React__default["default"].createElement(DropdownControl, { side: "bottom", align: "start", options: columnOptions, onSelect: onColumnChange },
            React__default["default"].createElement(ui.Button, { as: "span", type: "outline", iconRight: React__default["default"].createElement(ui.IconChevronDown, null) },
                React__default["default"].createElement("span", { className: "foreign-table-modal__filter__trigger-content" },
                    React__default["default"].createElement("span", { className: "foreign-table-modal__filter__trigger-content__label" }, "Column"),
                    React__default["default"].createElement("span", { className: "foreign-table-modal__filter__trigger-content__name" }, columnName)))),
        React__default["default"].createElement(DropdownControl, { side: "bottom", align: "start", options: FilterOperatorOptions, onSelect: onConditionChange },
            React__default["default"].createElement(ui.Button, { as: "span", type: "outline", iconRight: React__default["default"].createElement(ui.IconChevronDown, null) },
                React__default["default"].createElement("span", { className: "foreign-table-modal__filter__trigger-content" },
                    React__default["default"].createElement("span", { className: "foreign-table-modal__filter__trigger-content__label" }, "Filter"),
                    React__default["default"].createElement("span", { className: "foreign-table-modal__filter__trigger-content__name" }, condition)))),
        React__default["default"].createElement(ui.Input, { size: "tiny", className: "foreign-table-modal__filter__search-input", placeholder: "Find a record", value: filterText, onChange: onFilterChange, icon: React__default["default"].createElement(ui.IconSearch, { size: "small" }) })));
};
const onFilterChangeDebounced = AwesomeDebouncePromise((filter, onChange) => {
    onChange(filter);
}, 500);

const ForeignTableModal = ({ columnName, defaultValue, onChange, }) => {
    var _a, _b;
    const [visible, setVisible] = React__namespace.useState(false);
    const [foreignColumnNames, setForeignColumnNames] = React__namespace.useState([]);
    const [rows, setRows] = React__namespace.useState(null);
    const state = useTrackedState();
    const columnDefinition = (_a = state.table) === null || _a === void 0 ? void 0 : _a.columns.find((x) => x.name == columnName);
    React__namespace.useEffect(() => {
        if (!visible)
            return;
        fetchColumns();
        if (defaultValue && columnDefinition) {
            fetchData({
                column: columnDefinition.targetColumnName,
                operator: '=',
                value: defaultValue,
            });
        }
        else {
            fetchData();
        }
    }, [visible]);
    function fetchColumns() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!state.metaService ||
                !(columnDefinition === null || columnDefinition === void 0 ? void 0 : columnDefinition.targetTableName) ||
                !(columnDefinition === null || columnDefinition === void 0 ? void 0 : columnDefinition.targetTableSchema))
                return;
            const { data } = yield state.metaService.fetchColumns(columnDefinition === null || columnDefinition === void 0 ? void 0 : columnDefinition.targetTableName, columnDefinition === null || columnDefinition === void 0 ? void 0 : columnDefinition.targetTableSchema);
            if (data && data.length > 0) {
                const columnNames = data.map((x) => x.name);
                setForeignColumnNames(columnNames);
            }
        });
    }
    function fetchData(filter) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!state.onSqlQuery || !(columnDefinition === null || columnDefinition === void 0 ? void 0 : columnDefinition.targetTableName))
                return;
            const query = new Query();
            let queryChains = query
                .from(columnDefinition === null || columnDefinition === void 0 ? void 0 : columnDefinition.targetTableName, (_a = columnDefinition === null || columnDefinition === void 0 ? void 0 : columnDefinition.targetTableSchema) !== null && _a !== void 0 ? _a : undefined)
                .select();
            if (filter && filter.value && filter.value != '') {
                const { column, operator, value } = filter;
                queryChains = queryChains.filter(column, operator, value);
            }
            // TODO: How to let users know that filter result limit at 20 results
            // should we allow a higher value?
            const sql = queryChains.range(0, 20).toSql();
            const { data, error } = yield state.onSqlQuery(sql);
            if (error) {
                setRows(null);
            }
            else {
                setRows(data);
            }
        });
    }
    function toggle(event) {
        if (event && event.stopPropagation)
            event.stopPropagation();
        setVisible(!visible);
    }
    function onItemSelect(item) {
        if (item && columnDefinition && columnDefinition.targetColumnName) {
            const value = item[columnDefinition.targetColumnName];
            onChange(value);
        }
        setVisible(false);
    }
    function renderRows() {
        if (!rows)
            return null;
        const temp = rows.map((x, i) => {
            return React__namespace.createElement(RowItem, { key: `menu-${i}`, item: x, onSelect: onItemSelect });
        });
        return React__namespace.createElement(ui.Menu, { className: "foreign-table-modal__menu" }, temp);
    }
    function onFilterChange(filter) {
        if (filter && filter.value && filter.value != '')
            fetchData(filter);
    }
    function onClearValueClick() {
        onChange(null);
        setVisible(false);
    }
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(ui.Button, { type: "text", onClick: toggle, icon: React__namespace.createElement(ui.IconExternalLink, null), style: { padding: '3px' } }),
        React__namespace.createElement(ui.Modal, { visible: visible, onCancel: toggle, closable: true, contentStyle: { padding: 0 }, customFooter: React__namespace.createElement(ui.Space, { style: { width: '100%' } },
                React__namespace.createElement(ui.Button, { block: true, danger: true, icon: React__namespace.createElement(ui.IconTrash, null), onClick: onClearValueClick }, "Clear value")) },
            React__namespace.createElement(FilterHeader, { defaultColumnName: (_b = columnDefinition === null || columnDefinition === void 0 ? void 0 : columnDefinition.targetColumnName) !== null && _b !== void 0 ? _b : undefined, defaultValue: defaultValue, foreignColumnNames: foreignColumnNames, onChange: onFilterChange }),
            React__namespace.createElement("div", { className: "foreign-table-modal__content-container" },
                React__namespace.createElement(ui.Divider, { light: true }),
                React__namespace.createElement("div", { className: "foreign-table-modal__content-container__inner" },
                    React__namespace.createElement("div", { className: "foreign-table-modal__content-container__inner__overflow", style: { minHeight: '21rem', maxHeight: '20rem' } }, renderRows()))))));
};

const ForeignKeyFormatter = (p) => {
    const state = useTrackedState();
    const dispatch = useDispatch();
    const value = p.row[p.column.key];
    function onRowChange(_value) {
        const rowData = deepClone(p.row);
        rowData[p.column.key] = _value;
        const { error } = state.rowService.update(rowData);
        if (error) {
            if (state.onError)
                state.onError(error);
        }
        else {
            dispatch({
                type: 'EDIT_ROW',
                payload: { row: rowData, idx: p.row.idx },
            });
        }
    }
    function onChange(_value) {
        onRowChange(_value);
    }
    return (React__namespace.createElement("div", { className: "sb-grid-foreign-key-formatter" },
        React__namespace.createElement("p", { className: "sb-grid-foreign-key-formatter__text" }, value === null ? React__namespace.createElement(NullValue, null) : value),
        React__namespace.createElement(ForeignTableModal, { columnName: p.column.key, defaultValue: value, onChange: onChange })));
};

function getGridColumns(table, options) {
    const columns = table.columns.map((x) => {
        const columnType = getColumnType(x);
        const columnDefinition = {
            key: x.name,
            name: x.name,
            resizable: true,
            width: (options === null || options === void 0 ? void 0 : options.defaultWidth) || getColumnWidth(x),
            minWidth: COLUMN_MIN_WIDTH,
            frozen: x.isPrimaryKey,
            headerRenderer: (props) => (React__namespace.createElement(ColumnHeader, Object.assign({}, props, { columnType: columnType, isPrimaryKey: x.isPrimaryKey, format: x.format }))),
            editor: (options === null || options === void 0 ? void 0 : options.editable) ? getColumnEditor(x, columnType) : undefined,
            formatter: getColumnFormatter(x, columnType),
        };
        return columnDefinition;
    });
    const gridColumns = [SelectColumn, ...columns];
    if (options === null || options === void 0 ? void 0 : options.onAddColumn) {
        gridColumns.push(AddColumn);
    }
    return gridColumns;
}
function getColumnEditor(columnDefinition, columnType) {
    if (columnDefinition.isPrimaryKey || !columnDefinition.isUpdatable) {
        return;
    }
    switch (columnType) {
        case 'boolean': {
            return columnDefinition.isNullable
                ? NullableBooleanEditor
                : BooleanEditor;
        }
        case 'date': {
            return DateEditor;
        }
        case 'datetime': {
            return columnDefinition.format.endsWith('z')
                ? DateTimeWithTimezoneEditor
                : DateTimeEditor;
        }
        case 'time': {
            return columnDefinition.format.endsWith('z')
                ? TimeWithTimezoneEditor
                : TimeEditor;
        }
        case 'enum': {
            const options = columnDefinition.enum.map((x) => {
                return { label: x, value: x };
            });
            return (p) => React__namespace.createElement(SelectEditor, Object.assign({}, p, { options: options }));
        }
        case 'array':
        case 'json': {
            return JsonEditor;
        }
        case 'number': {
            return NumberEditor;
        }
        case 'text': {
            return TextEditor;
        }
        default: {
            return undefined;
        }
    }
}
function getColumnFormatter(columnDef, columnType) {
    switch (columnType) {
        case 'boolean': {
            return BooleanFormatter;
        }
        case 'foreign_key': {
            if (columnDef.isPrimaryKey || !columnDef.isUpdatable) {
                return DefaultFormatter;
            }
            else {
                return ForeignKeyFormatter;
            }
        }
        default: {
            return DefaultFormatter;
        }
    }
}
function getColumnType(columnDef) {
    if (isForeignKeyColumn(columnDef)) {
        return 'foreign_key';
    }
    else if (isNumericalColumn(columnDef.dataType)) {
        return 'number';
    }
    else if (isArrayColumn(columnDef.dataType)) {
        return 'array';
    }
    else if (isJsonColumn(columnDef.dataType)) {
        return 'json';
    }
    else if (isTextColumn(columnDef.dataType)) {
        return 'text';
    }
    else if (isDateColumn(columnDef.format)) {
        return 'date';
    }
    else if (isTimeColumn(columnDef.format)) {
        return 'time';
    }
    else if (isDateTimeColumn(columnDef.format)) {
        return 'datetime';
    }
    else if (isBoolColumn(columnDef.dataType)) {
        return 'boolean';
    }
    else if (isEnumColumn(columnDef.dataType)) {
        return 'enum';
    }
    else
        return 'unknown';
}
function getColumnWidth(columnDef) {
    if (isNumericalColumn(columnDef.dataType)) {
        return 120;
    }
    else if (isDateTimeColumn(columnDef.format) ||
        isDateColumn(columnDef.format) ||
        isTimeColumn(columnDef.format)) {
        return 150;
    }
    else if (isBoolColumn(columnDef.dataType)) {
        return 120;
    }
    else if (isEnumColumn(columnDef.dataType)) {
        return 150;
    }
    else
        return 250;
}

function defaultErrorHandler(error) {
    console.log('Supabase grid error: ', error);
}
/**
 * Ensure that if editable is false, we should remove all editing actions
 * to prevent rare-case bugs with the UI
 */
function cleanupProps(props) {
    const { editable } = props;
    if (!editable) {
        return Object.assign(Object.assign({}, props), { onAddColumn: undefined, onAddRow: undefined, onEditColumn: undefined, onDeleteColumn: undefined, onEditRow: undefined });
    }
    else {
        return props;
    }
}
function initTable(props, state, dispatch) {
    function onInitTable(table, props) {
        var _a, _b;
        const gridColumns = getGridColumns(table, {
            editable: props.editable,
            defaultWidth: (_a = props.gridProps) === null || _a === void 0 ? void 0 : _a.defaultColumnWidth,
            onAddColumn: props.editable ? props.onAddColumn : undefined,
        });
        let savedState;
        if (props.storageRef) {
            savedState = onLoadStorage(props.storageRef, table.name, table.schema);
        }
        // if (props.filters) {
        //   initialState.filters = props.filters;
        // }
        console.log("dispatch INIT_TABLE");
        dispatch({
            type: 'INIT_TABLE',
            payload: {
                table,
                gridProps: props.gridProps,
                gridColumns,
                savedState,
                filters: props.filters,
                editable: props.editable,
                onSqlQuery: props.onSqlQuery,
                onError: (_b = props.onError) !== null && _b !== void 0 ? _b : defaultErrorHandler,
            },
        });
    }
    if (typeof props.table === 'string') {
        const fetchMethod = props.editable
            ? fetchEditableInfo(state.metaService, props.table, props.schema)
            : fetchReadOnlyInfo(state.metaService, props.table, props.schema);
        fetchMethod.then((res) => {
            if (res)
                onInitTable(res, props);
            else {
                if (props.onError) {
                    props.onError({ message: 'fetch table info failed' });
                }
            }
        });
    }
    else {
        onInitTable(props.table, props);
    }
}
function fetchEditableInfo(service, tableName, schema) {
    return __awaiter(this, void 0, void 0, function* () {
        const resTable = yield service.fetchInfo(tableName, schema);
        const resColumns = yield service.fetchColumns(tableName, schema);
        const resPrimaryKeys = yield service.fetchPrimaryKeys(tableName, schema);
        const resRelationships = yield service.fetchRelationships(tableName, schema);
        if (resTable.data &&
            resColumns.data &&
            resPrimaryKeys.data &&
            resRelationships.data &&
            resColumns.data.length > 0) {
            const supaTable = parseSupaTable({
                table: resTable.data,
                columns: resColumns.data,
                primaryKeys: resPrimaryKeys.data,
                relationships: resRelationships.data,
            });
            return supaTable;
        }
        return null;
    });
}
function fetchReadOnlyInfo(service, name, schema) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield service.fetchColumns(name, schema);
        if (data) {
            const supaColumns = data.map((x, index) => {
                return {
                    name: x.name,
                    dataType: x.format,
                    format: x.format,
                    position: index,
                    isUpdatable: false,
                };
            });
            return {
                name: name,
                schema: schema,
                columns: supaColumns,
            };
        }
        return null;
    });
}
function parseSupaTable(data) {
    const { table, columns, primaryKeys, relationships } = data;
    const supaColumns = columns.map((x) => {
        const temp = {
            position: x.ordinal_position,
            name: x.name,
            defaultValue: x.default_value,
            dataType: x.data_type,
            format: x.format,
            isPrimaryKey: false,
            isIdentity: x.is_identity,
            isGeneratable: x.identity_generation == 'BY DEFAULT',
            isNullable: x.is_nullable,
            isUpdatable: x.is_updatable,
            enum: x.enums,
            comment: x.comment,
            targetTableSchema: null,
            targetTableName: null,
            targetColumnName: null,
        };
        const primaryKey = primaryKeys.find((pk) => pk.name == x.name);
        temp.isPrimaryKey = !!primaryKey;
        const relationship = relationships.find((r) => {
            return r.source_column_name == x.name;
        });
        if (relationship) {
            temp.targetTableSchema = relationship.target_table_schema;
            temp.targetTableName = relationship.target_table_name;
            temp.targetColumnName = relationship.target_column_name;
        }
        return temp;
    });
    return {
        name: table.name,
        comment: table.comment,
        schema: table.schema,
        columns: supaColumns,
    };
}
function onLoadStorage(storageRef, tableName, schema) {
    const storageKey = getStorageKey(STORAGE_KEY_PREFIX, storageRef);
    const jsonStr = localStorage.getItem(storageKey);
    if (!jsonStr)
        return;
    const json = JSON.parse(jsonStr);
    const tableKey = !schema || schema == 'public' ? tableName : `${schema}.${tableName}`;
    return json[tableKey];
}
const saveStorageDebounced = AwesomeDebouncePromise(saveStorage, 500);
function saveStorage(state, storageRef) {
    if (!state.table)
        return;
    const config = {
        gridColumns: state.gridColumns,
        sorts: state.sorts,
        filters: state.filters,
    };
    const storageKey = getStorageKey(STORAGE_KEY_PREFIX, storageRef);
    const savedStr = localStorage.getItem(storageKey);
    let savedJson;
    const { name, schema } = state.table;
    const tableKey = !schema || schema == 'public' ? name : `${schema}.${name}`;
    if (savedStr) {
        savedJson = JSON.parse(savedStr);
        savedJson = Object.assign(Object.assign({}, savedJson), { [tableKey]: config });
    }
    else {
        savedJson = { [tableKey]: config };
    }
    localStorage.setItem(storageKey, JSON.stringify(savedJson));
}
function getStorageKey(prefix, ref) {
    return `${prefix}_${ref}`;
}

/**
 * Supabase Grid.
 *
 * React component to render database table.
 */
const SupabaseGrid = React__default["default"].forwardRef((props, ref) => {
    const monaco = useMonaco();
    const _props = cleanupProps(props);
    const { theme } = _props;
    React__default["default"].useEffect(() => {
        if (monaco) {
            const darkTheme = theme && theme === 'dark' ? true : false;
            monaco.editor.defineTheme('supabase', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    { token: 'string.sql', foreground: '24b47e' },
                    { token: 'comment', foreground: '666666' },
                    { token: 'predefined.sql', foreground: 'D4D4D4' },
                ],
                colors: {
                    'editor.background': darkTheme ? '#1f1f1f' : '#30313f',
                },
            });
        }
    }, [monaco]);
    return (React__default["default"].createElement(StoreProvider, null,
        React__default["default"].createElement(DndProvider, { backend: HTML5Backend },
            React__default["default"].createElement(SupabaseGridLayout, Object.assign({ ref: ref }, _props)))));
});
const SupabaseGridLayout = React__default["default"].forwardRef((props, ref) => {
    const { editable, storageRef, gridProps, headerActions } = props;
    const dispatch = useDispatch();
    const state = useTrackedState();
    const gridRef = React__default["default"].useRef(null);
    const [mounted, setMount] = React__default["default"].useState(false);
    React__default["default"].useImperativeHandle(ref, () => ({
        rowAdded(row) {
            dispatch({
                type: 'ADD_NEW_ROW',
                payload: row,
            });
        },
        rowEdited(row, idx) {
            dispatch({
                type: 'EDIT_ROW',
                payload: { row, idx },
            });
        },
        addFilter(theFilter) {
            console.log("⛳️  ADD_FILTER");
            dispatch({
                type: 'ADD_FILTER',
                payload: theFilter,
            });
        },
        updateFilter(idx, theFilter) {
            console.log("⛳️  UPDATE_FILTER");
            dispatch({
                type: 'UPDATE_FILTER',
                payload: { filterIdx: idx, value: theFilter },
            });
        },
        getTheFilters() {
            console.log("⛳️  get the damn filters");
            return state.filters;
        },
        removeFilter(filterIdx) {
            console.log("⛳️  REMOVE_FILTER");
            dispatch({
                type: 'REMOVE_FILTER',
                payload: { index: filterIdx },
            });
        }
    }));
    React__default["default"].useEffect(() => {
        if (!mounted)
            setMount(true);
    }, []);
    React__default["default"].useEffect(() => {
        if (state.isInitialComplete && storageRef && state.table) {
            if (props.filters) {
                if (state.filters.length == 0) {
                    state.filters = props.filters;
                }
                var clonedFilterState = new Set(state.filters);
                console.log("before:", clonedFilterState);
                // 1st pass - inspect saved state for existing filters losely matching new one.
                props.filters.forEach((x) => {
                    state.filters.forEach((y) => {
                        if (y["column"] == x.column) { //account_id
                            if (y["operator"] == x.operator) { // =
                                console.warn("deleting:", y);
                                clonedFilterState.delete(y);
                            }
                        }
                    });
                });
                // add them back in (newly) or add them back in
                props.filters.forEach((x) => {
                    console.warn("adding:", x);
                    clonedFilterState.add(x);
                });
                state.filters = Array.from(clonedFilterState);
                console.log("after:", state.filters);
            }
            saveStorageDebounced(state, storageRef);
        }
    }, [
        state.table,
        state.isInitialComplete,
        state.gridColumns,
        state.sorts,
        state.filters,
        storageRef,
    ]);
    React__default["default"].useEffect(() => {
        if (state.refreshPageFlag == REFRESH_PAGE_IMMEDIATELY) {
            fetchPage(state, dispatch);
        }
        else if (state.refreshPageFlag != 0) {
            refreshPageDebounced(state, dispatch);
        }
    }, [state.refreshPageFlag]);
    React__default["default"].useEffect(() => {
        if (state.totalRows === TOTAL_ROWS_RESET) {
            fetchCount(state, dispatch);
        }
    }, [state.totalRows]);
    React__default["default"].useEffect(() => {
        if (!state.metaService) {
            dispatch({
                type: 'INIT_CLIENT',
                payload: { onSqlQuery: props.onSqlQuery },
            });
            dispatch({
                type: 'INIT_CALLBACK',
                payload: Object.assign({}, props),
            });
        }
    }, [state.metaService]);
    React__default["default"].useEffect(() => {
        if (!state.metaService)
            return;
        if (!state.table ||
            (typeof props.table == 'string' &&
                state.table.name != props.table &&
                state.table.schema != props.schema) ||
            (typeof props.table != 'string' &&
                JSON.stringify(props.table) !== JSON.stringify(state.table))) {
            initTable(props, state, dispatch);
        }
    }, [state.metaService, state.table, props.table, props.schema]);
    return (React__default["default"].createElement("div", { className: "sb-grid" },
        React__default["default"].createElement(Header, { onAddRow: editable ? props.onAddRow : undefined, onAddColumn: editable ? props.onAddColumn : undefined, headerActions: headerActions }),
        React__default["default"].createElement(Grid, Object.assign({ ref: gridRef }, gridProps)),
        React__default["default"].createElement(Footer, null),
        React__default["default"].createElement(Shortcuts, { gridRef: gridRef }),
        mounted && require$$1.createPortal(React__default["default"].createElement(RowContextMenu, null), document.body)));
});

exports.Query = Query;
exports.SupabaseGrid = SupabaseGrid;
exports.exportRowsToCsv = exportRowsToCsv;
exports.parseSupaTable = parseSupaTable;
//# sourceMappingURL=index.js.map
