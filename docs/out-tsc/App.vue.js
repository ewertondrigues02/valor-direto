"use strict";
/// <reference types="../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
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
var TheHeader_vue_1 = require("./components/TheHeader.vue");
var TheFooter_vue_1 = require("./components/TheFooter.vue");
var theme = (0, vue_1.ref)('light');
function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
}
(0, vue_1.onMounted)(function () {
    if (localStorage.getItem('theme')) {
        theme.value = localStorage.getItem('theme');
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.value = 'dark';
    }
});
(0, vue_1.watch)(theme, function (newTheme) {
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "layout" }, { class: (__VLS_ctx.theme) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "circle-wrapper" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "circle circle-red" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "circle circle-green" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "circle circle-blue" }));
/** @type {[typeof TheHeader, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(TheHeader_vue_1.default, new TheHeader_vue_1.default({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: "content" }));
var __VLS_3 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
var __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({}));
var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_4), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.toggleTheme) }, { class: "theme-toggle" }));
if (__VLS_ctx.theme === 'dark') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
if (__VLS_ctx.theme === 'light') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
/** @type {[typeof TheFooter, ]} */ ;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(TheFooter_vue_1.default, new TheFooter_vue_1.default({}));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
/** @type {__VLS_StyleScopedClasses['layout']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['circle']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-red']} */ ;
/** @type {__VLS_StyleScopedClasses['circle']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-green']} */ ;
/** @type {__VLS_StyleScopedClasses['circle']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['theme-toggle']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            TheHeader: TheHeader_vue_1.default,
            TheFooter: TheFooter_vue_1.default,
            theme: theme,
            toggleTheme: toggleTheme,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
