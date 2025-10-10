module.exports = [
"[next]/internal/font/google/geist_a71539c9.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_a71539c9-module__T19VSG__className",
  "variable": "geist_a71539c9-module__T19VSG__variable",
});
}),
"[next]/internal/font/google/geist_a71539c9.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_a71539c9.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/geist_mono_8d43a2aa.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_mono_8d43a2aa-module__8Li5zG__className",
  "variable": "geist_mono_8d43a2aa-module__8Li5zG__variable",
});
}),
"[next]/internal/font/google/geist_mono_8d43a2aa.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_8d43a2aa.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/shared/store/hooks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Хуки для работы с store
 */ __turbopack_context__.s([
    "useError",
    ()=>useError,
    "useErrorActions",
    ()=>useErrorActions,
    "useLoading",
    ()=>useLoading,
    "useLoadingActions",
    ()=>useLoadingActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/index.ts [app-rsc] (ecmascript) <locals>");
;
const useLoading = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])((state)=>state.loading);
const useError = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])((state)=>state.error);
const useErrorActions = ()=>{
    const setError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])((state)=>state.setError);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])((state)=>state.clearError);
    return {
        setError,
        clearError
    };
};
const useLoadingActions = ()=>{
    const setLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])((state)=>state.setLoading);
    return {
        setLoading
    };
};
}),
"[project]/src/shared/store/selectors.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Селекторы для store
 */ __turbopack_context__.s([
    "useAppState",
    ()=>useAppState,
    "useHasError",
    ()=>useHasError,
    "useIsLoading",
    ()=>useIsLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/index.ts [app-rsc] (ecmascript) <locals>");
;
const useHasError = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])((state)=>!!state.error);
const useIsLoading = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])((state)=>state.loading);
const useAppState = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])((state)=>({
            loading: state.loading,
            error: state.error
        }));
}),
"[project]/src/shared/store/websocket-store.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Store для данных WebSocket
 */ __turbopack_context__.s([
    "useWebSocketStore",
    ()=>useWebSocketStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-rsc] (ecmascript)");
;
;
/**
 * Максимальное количество хранимых точек данных для графиков
 */ const MAX_DATA_POINTS = 1000;
/**
 * Начальное состояние
 */ const initialState = {
    aiData: [],
    aiStatus: 'disconnected',
    lastAIMessage: null,
    bpmData: [],
    bpmStatus: 'disconnected',
    lastBPMMessage: null,
    ucData: [],
    ucStatus: 'disconnected',
    lastUCMessage: null
};
const useWebSocketStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
        ...initialState,
        // AI actions
        addAIMessage: (message)=>set((state)=>{
                const newData = [
                    ...state.aiData,
                    message
                ];
                // Ограничиваем количество хранимых точек
                const trimmedData = newData.length > MAX_DATA_POINTS ? newData.slice(newData.length - MAX_DATA_POINTS) : newData;
                return {
                    aiData: trimmedData,
                    lastAIMessage: message
                };
            }),
        setAIStatus: (status)=>set({
                aiStatus: status
            }),
        clearAIData: ()=>set({
                aiData: [],
                lastAIMessage: null
            }),
        // BPM actions
        addBPMMessage: (message)=>set((state)=>{
                const newData = [
                    ...state.bpmData,
                    message
                ];
                const trimmedData = newData.length > MAX_DATA_POINTS ? newData.slice(newData.length - MAX_DATA_POINTS) : newData;
                return {
                    bpmData: trimmedData,
                    lastBPMMessage: message
                };
            }),
        setBPMStatus: (status)=>set({
                bpmStatus: status
            }),
        clearBPMData: ()=>set({
                bpmData: [],
                lastBPMMessage: null
            }),
        // UC actions
        addUCMessage: (message)=>set((state)=>{
                const newData = [
                    ...state.ucData,
                    message
                ];
                const trimmedData = newData.length > MAX_DATA_POINTS ? newData.slice(newData.length - MAX_DATA_POINTS) : newData;
                return {
                    ucData: trimmedData,
                    lastUCMessage: message
                };
            }),
        setUCStatus: (status)=>set({
                ucStatus: status
            }),
        clearUCData: ()=>set({
                ucData: [],
                lastUCMessage: null
            }),
        // Общие actions
        clearAllData: ()=>set({
                aiData: [],
                lastAIMessage: null,
                bpmData: [],
                lastBPMMessage: null,
                ucData: [],
                lastUCMessage: null
            }),
        resetAllStatuses: ()=>set({
                aiStatus: 'disconnected',
                bpmStatus: 'disconnected',
                ucStatus: 'disconnected'
            })
    }), {
    name: 'websocket-store'
}));
}),
"[project]/src/shared/store/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Главный store приложения
 */ __turbopack_context__.s([
    "createTypedStore",
    ()=>createTypedStore,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$hooks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/hooks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$selectors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/selectors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/websocket-store.ts [app-rsc] (ecmascript)");
;
;
function createTypedStore(name, initialState, actions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
            ...initialState,
            ...actions(set)
        }), {
        name
    }));
}
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
        // Начальное состояние
        loading: false,
        error: null,
        // Действия
        setLoading: (loading)=>set({
                loading
            }),
        setError: (error)=>set({
                error
            }),
        clearError: ()=>set({
                error: null
            })
    }), {
    name: 'main-store'
}));
;
;
;
}),
"[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/shared/lib/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Утилиты и вспомогательные функции
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
}),
"[project]/src/shared/hooks/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Общие hooks приложения
 */ __turbopack_context__.s([]);
;
}),
"[project]/src/shared/providers/store-provider.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "StoreProvider",
    ()=>StoreProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StoreProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoreProvider() from the server but StoreProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/providers/store-provider.tsx <module evaluation>", "StoreProvider");
}),
"[project]/src/shared/providers/store-provider.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "StoreProvider",
    ()=>StoreProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StoreProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoreProvider() from the server but StoreProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/providers/store-provider.tsx", "StoreProvider");
}),
"[project]/src/shared/providers/store-provider.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$store$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/providers/store-provider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$store$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/shared/providers/store-provider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$store$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/shared/providers/theme-provider.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/providers/theme-provider.tsx <module evaluation>", "ThemeProvider");
}),
"[project]/src/shared/providers/theme-provider.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/providers/theme-provider.tsx", "ThemeProvider");
}),
"[project]/src/shared/providers/theme-provider.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/providers/theme-provider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/shared/providers/theme-provider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/shared/providers/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Провайдеры приложения
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$store$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/store-provider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/theme-provider.tsx [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/shared/types/websocket.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Типы для WebSocket сообщений
 */ /**
 * Типы событий для AI сокета
 */ __turbopack_context__.s([]);
;
}),
"[project]/src/shared/types/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Общие типы приложения
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$websocket$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/types/websocket.ts [app-rsc] (ecmascript)");
;
}),
"[project]/src/shared/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Shared слой - общие компоненты, утилиты, типы
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/lib/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/providers/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/types/index.ts [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
}),
"[project]/src/shared/providers/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$store$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StoreProvider"],
    "ThemeProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeProvider"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/providers/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$store$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/store-provider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/theme-provider.tsx [app-rsc] (ecmascript)");
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_a71539c9.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_8d43a2aa.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/index.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    title: "Город 6",
    description: "lct frontend sity 6"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "ru",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} antialiased`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                attribute: "class",
                defaultTheme: "system",
                enableSystem: true,
                disableTransitionOnChange: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StoreProvider"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3d4f9de5._.js.map