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
    name: 'UnidadesPage',
    setup: function () {
        var state = (0, vue_1.reactive)({
            valor: null,
            unidadeOrigem: 'metros',
            unidadeDestino: 'quilômetros',
            resultado: null,
            unidadesDisponiveis: [
                'metros', 'quilômetros', 'centímetros', 'milímetros', 'gramas', 'quilos', 'litros', 'mililitros', 'segundos', 'minutos', 'horas', 'dias'
            ],
            conversaoUnidades: {
                metros: { metros: 1, quilômetros: 0.001, centímetros: 100, milímetros: 1000 },
                quilômetros: { metros: 1000, quilômetros: 1, centímetros: 100000, milímetros: 1000000 },
                centímetros: { metros: 0.01, quilômetros: 0.00001, centímetros: 1, milímetros: 10 },
                milímetros: { metros: 0.001, quilômetros: 0.000001, centímetros: 0.1, milímetros: 1 },
                gramas: { gramas: 1, quilos: 0.001 },
                quilos: { gramas: 1000, quilos: 1 },
                litros: { litros: 1, mililitros: 1000 },
                mililitros: { litros: 0.001, mililitros: 1 },
                segundos: { segundos: 1, minutos: 1 / 60, horas: 1 / 3600, dias: 1 / 86400 },
                minutos: { segundos: 60, minutos: 1, horas: 1 / 60, dias: 1 / 1440 },
                horas: { segundos: 3600, minutos: 60, horas: 1, dias: 1 / 24 },
                dias: { segundos: 86400, minutos: 1440, horas: 24, dias: 1 },
            },
        });
        // Função para realizar a conversão de unidade
        function converterUnidade() {
            var _a;
            if (!state.valor || state.valor <= 0) {
                state.resultado = 'Informe um valor válido para conversão.';
                return;
            }
            var taxaConversao = (_a = state.conversaoUnidades[state.unidadeOrigem]) === null || _a === void 0 ? void 0 : _a[state.unidadeDestino];
            if (taxaConversao !== undefined) {
                var resultado = state.valor * taxaConversao;
                state.resultado = resultado.toFixed(2);
            }
            else {
                state.resultado = 'Conversão indisponível.';
            }
        }
        return __assign(__assign({}, (0, vue_1.toRefs)(state)), { converterUnidade: converterUnidade });
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "unidades-page" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: (['form-result', { 'with-result': __VLS_ctx.resultado }]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.converterUnidade) }, { class: "form-lado" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "valor",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "number",
    id: "valor",
    placeholder: "Ex: 10",
    required: true,
});
(__VLS_ctx.valor);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "unidadeOrigem",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: (__VLS_ctx.unidadeOrigem),
    id: "unidadeOrigem",
    required: true,
});
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.unidadesDisponiveis)); _i < _a.length; _i++) {
    var unidade = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (unidade),
        value: (unidade),
    });
    (unidade);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "unidadeDestino",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: (__VLS_ctx.unidadeDestino),
    id: "unidadeDestino",
    required: true,
});
for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.unidadesDisponiveis)); _b < _c.length; _b++) {
    var unidade = _c[_b][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (unidade),
        value: (unidade),
    });
    (unidade);
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
    (__VLS_ctx.unidadeOrigem);
    (__VLS_ctx.resultado);
    (__VLS_ctx.unidadeDestino);
}
/** @type {__VLS_StyleScopedClasses['container-fixo']} */ ;
/** @type {__VLS_StyleScopedClasses['unidades-page']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-lado']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
var __VLS_dollars;
var __VLS_self;
