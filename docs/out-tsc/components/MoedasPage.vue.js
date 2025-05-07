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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'MoedasPage',
    setup: function () {
        var state = (0, vue_1.reactive)({
            valor: 0,
            moedaOrigem: 'USD',
            moedaDestino: 'BRL',
            resultado: null,
            moedasDisponiveis: [
                'USD', 'EUR', 'BRL', 'GBP', 'JPY', 'ARS', 'AUD', 'CAD', 'CHF', 'CNY',
                'INR', 'MXN', 'ZAR', 'NOK', 'SEK', 'DKK', 'NZD', 'CLP', 'COP', 'TRY',
                'RUB', 'PLN', 'HKD', 'SGD', 'ILS', 'KRW', 'AED',
            ],
            taxasDeCambio: {
                USD: 1.00,
                EUR: 0.94,
                BRL: 5.35,
                GBP: 0.81,
                JPY: 133.30,
                ARS: 350.50,
                AUD: 1.53,
                CAD: 1.36,
                CHF: 0.92,
                CNY: 7.14,
                INR: 83.14,
                MXN: 18.17,
                ZAR: 19.31,
                NOK: 10.20,
                SEK: 10.90,
                DKK: 7.04,
                NZD: 1.64,
                CLP: 823.56,
                COP: 4683.99,
                TRY: 18.90,
                RUB: 74.79,
                PLN: 4.56,
                HKD: 7.85,
                SGD: 1.35,
                ILS: 3.69,
                KRW: 1313.14,
                AED: 3.67
            }
        });
        var formatar = function (valor, moeda) {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: moeda,
            }).format(valor);
        };
        function converterMoeda() {
            if (state.valor === null || state.valor <= 0 || !state.moedaOrigem || !state.moedaDestino) {
                state.resultado = 'Informe um valor válido para conversão.';
                return;
            }
            var taxaOrigem = state.taxasDeCambio[state.moedaOrigem];
            var taxaDestino = state.taxasDeCambio[state.moedaDestino];
            if (taxaOrigem === undefined || taxaDestino === undefined) {
                state.resultado = 'Conversão indisponível.';
                return;
            }
            var conversao = (state.valor * taxaDestino) / taxaOrigem;
            state.resultado = "".concat(state.valor, " ").concat(state.moedaOrigem, " equivalem a: ").concat(conversao.toFixed(2), " ").concat(state.moedaDestino);
        }
        return __assign(__assign({}, (0, vue_1.toRefs)(state)), { converterMoeda: converterMoeda });
    },
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-lado']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container-fixo" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "moedas-page" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "form-result" }, { class: ({ 'with-result': __VLS_ctx.resultado }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.converterMoeda) }, { class: "form-lado" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "valor",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "number",
    id: "valor",
    placeholder: "Ex: 100",
    step: "0.01",
    min: "0.01",
    required: true,
});
(__VLS_ctx.valor);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "moedaOrigem",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: (__VLS_ctx.moedaOrigem),
    id: "moedaOrigem",
    required: true,
});
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.moedasDisponiveis)); _i < _a.length; _i++) {
    var moeda = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (moeda),
        value: (moeda),
    });
    (moeda);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "moedaDestino",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: (__VLS_ctx.moedaDestino),
    id: "moedaDestino",
    required: true,
});
for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.moedasDisponiveis)); _b < _c.length; _b++) {
    var moeda = _c[_b][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (moeda),
        value: (moeda),
    });
    (moeda);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
});
if (__VLS_ctx.resultado) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "resultado" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.valor);
    (__VLS_ctx.moedaOrigem);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado);
}
/** @type {__VLS_StyleScopedClasses['container-fixo']} */ ;
/** @type {__VLS_StyleScopedClasses['moedas-page']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-lado']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
var __VLS_dollars;
var __VLS_self;
