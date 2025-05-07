"use strict";
/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
var __assign = (this && this.__assign) || function () {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var menuItems = [
    {
        title: 'Simulador',
        options: [
            { label: 'Empréstimos', path: '/emprestimos' },
            { label: 'Financiamentos', path: '/financiamentos' },
        ],
    },
    {
        title: 'Calculadora',
        options: [
            { label: 'Cálculo Rescisão', path: '/rescisao' },
            { label: 'Seguro Desemprego', path: '/seguro' },
            { label: 'Valor de Horas Extras', path: '/horasExtras' },
            { label: 'Décimo Terceiro', path: '/decimo' },
            { label: 'Férias', path: '/ferias' },
        ],
    },
    {
        title: 'Conversor',
        options: [
            { label: 'Conversor de Moedas', path: '/moedas' },
            { label: 'Conversor de Unidades de Medida', path: '/unidades' },
        ],
    },
    {
        title: 'Contato',
        options: [
            { label: 'LinkedIn', path: 'https://www.linkedin.com/in/ewerton-rodrigues/' },
            { label: 'Instagram', path: 'https://www.instagram.com/ewertonrrodrigues/' },
            { label: 'GitHub', path: 'https://github.com/ewertondrigues02' },
            { label: 'YouTube - XeretaSound', path: 'https://www.youtube.com/channel/UCH4G9KvLac6-1MkF_gOwRzQ' },
            { label: 'YouTube - NerdXereta', path: 'https://www.youtube.com/@nerdxereta' },
            { label: 'YouTube - iClassCode', path: 'https://www.youtube.com/@iclasscode6274' },
        ],
    },
];
var activeMenu = (0, vue_1.ref)(null);
function toggleSideMenu(item) {
    var _a;
    activeMenu.value = ((_a = activeMenu.value) === null || _a === void 0 ? void 0 : _a.title) === item.title ? null : item;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)(__assign({ class: "header glass" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "logo" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ class: "img-logo" }, { src: "/src/assets/app-1.png", alt: "Logo Valor Direto" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: "menu" }));
var _loop_1 = function (item) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.toggleSideMenu(item);
        } }, { key: (item.title) }), { class: "menu-item" }), { role: "button", tabindex: "0" }));
    (item.title);
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.menuItems)); _i < _a.length; _i++) {
    var item = _a[_i][0];
    _loop_1(item);
}
if (__VLS_ctx.activeMenu) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)(__assign({ class: "side-menu glass" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.activeMenu))
                return;
            __VLS_ctx.activeMenu = null;
        } }, { class: "close-btn" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.activeMenu.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.activeMenu.options)); _b < _c.length; _b++) {
        var option = _c[_b][0];
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: (option.label),
        });
        var __VLS_0 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
        // @ts-ignore
        var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            to: (option.path),
        }));
        var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
                to: (option.path),
            }], __VLS_functionalComponentArgsRest(__VLS_1), false));
        __VLS_3.slots.default;
        (option.label);
        var __VLS_3;
    }
}
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['glass']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['img-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-item']} */ ;
/** @type {__VLS_StyleScopedClasses['side-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['glass']} */ ;
/** @type {__VLS_StyleScopedClasses['close-btn']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            menuItems: menuItems,
            activeMenu: activeMenu,
            toggleSideMenu: toggleSideMenu,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
