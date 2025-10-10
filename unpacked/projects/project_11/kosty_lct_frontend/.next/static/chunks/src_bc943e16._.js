(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/shared/store/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/index.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
const useLoading = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "useLoading.useStore": (state)=>state.loading
    }["useLoading.useStore"]);
};
_s(useLoading, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"]
    ];
});
const useError = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "useError.useStore": (state)=>state.error
    }["useError.useStore"]);
};
_s1(useError, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"]
    ];
});
const useErrorActions = ()=>{
    _s2();
    const setError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "useErrorActions.useStore[setError]": (state)=>state.setError
    }["useErrorActions.useStore[setError]"]);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "useErrorActions.useStore[clearError]": (state)=>state.clearError
    }["useErrorActions.useStore[clearError]"]);
    return {
        setError,
        clearError
    };
};
_s2(useErrorActions, "dZN7lS85rs15hCuqFbG0nfxz8ZM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"]
    ];
});
const useLoadingActions = ()=>{
    _s3();
    const setLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "useLoadingActions.useStore[setLoading]": (state)=>state.setLoading
    }["useLoadingActions.useStore[setLoading]"]);
    return {
        setLoading
    };
};
_s3(useLoadingActions, "LRaeN9GQRFjMi1ICQtRZeogqve8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/store/selectors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/index.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
const useHasError = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "useHasError.useStore": (state)=>!!state.error
    }["useHasError.useStore"]);
};
_s(useHasError, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"]
    ];
});
const useIsLoading = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "useIsLoading.useStore": (state)=>state.loading
    }["useIsLoading.useStore"]);
};
_s1(useIsLoading, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"]
    ];
});
const useAppState = ()=>{
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "useAppState.useStore": (state)=>({
                loading: state.loading,
                error: state.error
            })
    }["useAppState.useStore"]);
};
_s2(useAppState, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/store/websocket-selectors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Селекторы для WebSocket store
 */ __turbopack_context__.s([
    "useAIData",
    ()=>useAIData,
    "useAIStatus",
    ()=>useAIStatus,
    "useAllSocketsConnected",
    ()=>useAllSocketsConnected,
    "useBPMData",
    ()=>useBPMData,
    "useBPMStatus",
    ()=>useBPMStatus,
    "useConnectionStatus",
    ()=>useConnectionStatus,
    "useLastAIMessage",
    ()=>useLastAIMessage,
    "useLastBPMMessage",
    ()=>useLastBPMMessage,
    "useLastUCMessage",
    ()=>useLastUCMessage,
    "useRecentAIData",
    ()=>useRecentAIData,
    "useRecentBPMData",
    ()=>useRecentBPMData,
    "useRecentUCData",
    ()=>useRecentUCData,
    "useUCData",
    ()=>useUCData,
    "useUCStatus",
    ()=>useUCStatus,
    "useWebSocketActions",
    ()=>useWebSocketActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/websocket-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react/shallow.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature();
;
;
const useAIData = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useAIData.useWebSocketStore": (state)=>state.aiData
    }["useAIData.useWebSocketStore"]);
};
_s(useAIData, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useLastAIMessage = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useLastAIMessage.useWebSocketStore": (state)=>state.lastAIMessage
    }["useLastAIMessage.useWebSocketStore"]);
};
_s1(useLastAIMessage, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useAIStatus = ()=>{
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useAIStatus.useWebSocketStore": (state)=>state.aiStatus
    }["useAIStatus.useWebSocketStore"]);
};
_s2(useAIStatus, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useBPMData = ()=>{
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useBPMData.useWebSocketStore": (state)=>state.bpmData
    }["useBPMData.useWebSocketStore"]);
};
_s3(useBPMData, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useLastBPMMessage = ()=>{
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useLastBPMMessage.useWebSocketStore": (state)=>state.lastBPMMessage
    }["useLastBPMMessage.useWebSocketStore"]);
};
_s4(useLastBPMMessage, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useBPMStatus = ()=>{
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useBPMStatus.useWebSocketStore": (state)=>state.bpmStatus
    }["useBPMStatus.useWebSocketStore"]);
};
_s5(useBPMStatus, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useUCData = ()=>{
    _s6();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useUCData.useWebSocketStore": (state)=>state.ucData
    }["useUCData.useWebSocketStore"]);
};
_s6(useUCData, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useLastUCMessage = ()=>{
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useLastUCMessage.useWebSocketStore": (state)=>state.lastUCMessage
    }["useLastUCMessage.useWebSocketStore"]);
};
_s7(useLastUCMessage, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useUCStatus = ()=>{
    _s8();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useUCStatus.useWebSocketStore": (state)=>state.ucStatus
    }["useUCStatus.useWebSocketStore"]);
};
_s8(useUCStatus, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useRecentAIData = (count)=>{
    _s9();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "useRecentAIData.useWebSocketStore.useShallow": (state)=>state.aiData.slice(-count)
    }["useRecentAIData.useWebSocketStore.useShallow"]));
};
_s9(useRecentAIData, "QWR48k8fuwBROBpkyA7NXKgB6k8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useRecentBPMData = (count)=>{
    _s10();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "useRecentBPMData.useWebSocketStore.useShallow": (state)=>state.bpmData.slice(-count)
    }["useRecentBPMData.useWebSocketStore.useShallow"]));
};
_s10(useRecentBPMData, "QWR48k8fuwBROBpkyA7NXKgB6k8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useRecentUCData = (count)=>{
    _s11();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "useRecentUCData.useWebSocketStore.useShallow": (state)=>state.ucData.slice(-count)
    }["useRecentUCData.useWebSocketStore.useShallow"]));
};
_s11(useRecentUCData, "QWR48k8fuwBROBpkyA7NXKgB6k8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useAllSocketsConnected = ()=>{
    _s12();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useAllSocketsConnected.useWebSocketStore": (state)=>state.aiStatus === 'connected' && state.bpmStatus === 'connected' && state.ucStatus === 'connected'
    }["useAllSocketsConnected.useWebSocketStore"]);
};
_s12(useAllSocketsConnected, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useConnectionStatus = ()=>{
    _s13();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useConnectionStatus.useWebSocketStore": (state)=>({
                ai: state.aiStatus,
                bpm: state.bpmStatus,
                uc: state.ucStatus
            })
    }["useConnectionStatus.useWebSocketStore"]);
};
_s13(useConnectionStatus, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
const useWebSocketActions = ()=>{
    _s14();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"])({
        "useWebSocketActions.useWebSocketStore": (state)=>({
                clearAllData: state.clearAllData,
                resetAllStatuses: state.resetAllStatuses,
                clearAIData: state.clearAIData,
                clearBPMData: state.clearBPMData,
                clearUCData: state.clearUCData
            })
    }["useWebSocketActions.useWebSocketStore"]);
};
_s14(useWebSocketActions, "59FOsNVUwTqR/zIgiqIriymJewk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/store/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Главный store приложения
 */ __turbopack_context__.s([
    "createTypedStore",
    ()=>createTypedStore,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/selectors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/websocket-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/websocket-selectors.ts [app-client] (ecmascript)");
;
;
function createTypedStore(name, initialState, actions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
            ...initialState,
            ...actions(set)
        }), {
        name
    }));
}
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
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
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/lib/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Утилиты и вспомогательные функции
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/hooks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Общие hooks приложения
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/use-websocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$sliding$2d$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/use-sliding-window.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/providers/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Провайдеры приложения
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$store$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/store-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/theme-provider.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/types/websocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Типы для WebSocket сообщений
 */ /**
 * Типы событий для AI сокета
 */ __turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/types/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Общие типы приложения
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/types/websocket.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/api/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * API слой приложения
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$api$2f$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/api/websocket.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Shared слой - общие компоненты, утилиты, типы
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/store/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/lib/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/providers/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/types/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/api/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/app-config.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/charts/realtime-uplot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RealtimeUPlot",
    ()=>RealtimeUPlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function RealtimeUPlot(param) {
    let { data, series, title, yLabel, height = 240, scrollable = false, pixelsPerSecond = 4 } = param;
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const plotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const legendContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const legendElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalLegendParentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const desiredWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RealtimeUPlot.useMemo[desiredWidth]": ()=>{
            var _ref;
            const xs = (_ref = data === null || data === void 0 ? void 0 : data[0]) !== null && _ref !== void 0 ? _ref : [];
            if (!xs.length) return 400;
            const numeric = xs.filter({
                "RealtimeUPlot.useMemo[desiredWidth].numeric": (v)=>typeof v === "number"
            }["RealtimeUPlot.useMemo[desiredWidth].numeric"]);
            if (!numeric.length) return 400;
            const first = numeric[0];
            const last = numeric[numeric.length - 1];
            const range = Math.max(0, last - first);
            // если временной диапазон маленький, используем количество точек как запас
            const effectiveRange = Math.max(range, numeric.length);
            const widthPx = Math.round(effectiveRange * pixelsPerSecond);
            return Math.max(400, widthPx);
        }
    }["RealtimeUPlot.useMemo[desiredWidth]"], [
        data,
        pixelsPerSecond
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RealtimeUPlot.useEffect": ()=>{
            let disposed = false;
            let resizeObs = null;
            async function mount() {
                if (!rootRef.current) return;
                const mod = await __turbopack_context__.A("[project]/node_modules/uplot/dist/uPlot.esm.js [app-client] (ecmascript, async loader)");
                const UPlot = mod.default;
                const root = rootRef.current;
                const w = scrollable ? desiredWidth : root.clientWidth;
                const opts = {
                    width: Math.max(w, 100),
                    height,
                    title,
                    padding: [
                        8,
                        8,
                        8,
                        8
                    ],
                    scales: {
                        x: {
                            time: false
                        }
                    },
                    series: [
                        {
                            label: "Time (s)",
                            value: {
                                "RealtimeUPlot.useEffect.mount": (_u, v)=>v == null ? "-" : "".concat(Math.round(v), "s")
                            }["RealtimeUPlot.useEffect.mount"]
                        },
                        ...series.map({
                            "RealtimeUPlot.useEffect.mount": (s)=>({
                                    label: s.label,
                                    stroke: s.color,
                                    value: ({
                                        "RealtimeUPlot.useEffect.mount": (_u, v)=>v == null ? "-" : "".concat(v)
                                    })["RealtimeUPlot.useEffect.mount"]
                                })
                        }["RealtimeUPlot.useEffect.mount"])
                    ],
                    axes: [
                        {
                            stroke: "var(--muted-foreground)",
                            grid: {
                                show: true,
                                stroke: "var(--border)"
                            },
                            // скрываем подписи на оси X, сохраняя сетку и тики
                            values: {
                                "RealtimeUPlot.useEffect.mount": (_u, vals)=>vals.map({
                                        "RealtimeUPlot.useEffect.mount": ()=>""
                                    }["RealtimeUPlot.useEffect.mount"])
                            }["RealtimeUPlot.useEffect.mount"]
                        },
                        {
                            label: yLabel,
                            stroke: "var(--muted-foreground)",
                            grid: {
                                show: true,
                                stroke: "var(--border)"
                            }
                        }
                    ],
                    legend: {
                        live: true
                    },
                    // включаем курсор, возвращаем пунктирные линии
                    cursor: {
                        x: true,
                        y: true,
                        points: {
                            show: {
                                "RealtimeUPlot.useEffect.mount": (_u, sidx)=>sidx > 0
                            }["RealtimeUPlot.useEffect.mount"]
                        }
                    }
                };
                if (disposed) return;
                const plot = new UPlot(opts, data, root);
                plotRef.current = plot;
                const legendEl = root.querySelector(".u-legend");
                if (legendEl) {
                    legendElRef.current = legendEl;
                    originalLegendParentRef.current = legendEl.parentElement;
                    legendEl.classList.add("text-xs", "text-muted-foreground");
                    if (scrollable && legendContainerRef.current) {
                        legendContainerRef.current.innerHTML = "";
                        legendContainerRef.current.appendChild(legendEl);
                    }
                }
                if ("ResizeObserver" in window) {
                    resizeObs = new ResizeObserver({
                        "RealtimeUPlot.useEffect.mount": (entries)=>{
                            for (const entry of entries){
                                if (entry.contentRect && plotRef.current) {
                                    // при скролле ширину контролируем данными; без скролла подстраиваемся под контейнер
                                    const width = scrollable ? desiredWidth : Math.max(Math.floor(entry.contentRect.width), 100);
                                    plotRef.current.setSize({
                                        width,
                                        height
                                    });
                                }
                            }
                        }
                    }["RealtimeUPlot.useEffect.mount"]);
                    resizeObs.observe(root);
                }
            }
            mount();
            return ({
                "RealtimeUPlot.useEffect": ()=>{
                    disposed = true;
                    const legendEl = legendElRef.current;
                    const originalParent = originalLegendParentRef.current;
                    if (legendEl && originalParent && legendEl.parentElement !== originalParent) {
                        originalParent.appendChild(legendEl);
                    }
                    if (resizeObs) resizeObs.disconnect();
                    if (plotRef.current) {
                        plotRef.current.destroy();
                        plotRef.current = null;
                    }
                }
            })["RealtimeUPlot.useEffect"];
        }
    }["RealtimeUPlot.useEffect"], [
        height,
        title,
        yLabel,
        series,
        scrollable,
        desiredWidth,
        data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RealtimeUPlot.useEffect": ()=>{
            if (plotRef.current) {
                // setData не вызывает React setState, безопасно обновлять
                plotRef.current.setData(data);
            }
        }
    }["RealtimeUPlot.useEffect"], [
        data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RealtimeUPlot.useEffect": ()=>{
            if (plotRef.current && scrollable) {
                plotRef.current.setSize({
                    width: desiredWidth,
                    height
                });
            }
        }
    }["RealtimeUPlot.useEffect"], [
        desiredWidth,
        height,
        scrollable
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RealtimeUPlot.useEffect": ()=>{
            const legendEl = legendElRef.current;
            if (!legendEl) return;
            if (scrollable) {
                if (legendContainerRef.current && legendEl.parentElement !== legendContainerRef.current) {
                    legendContainerRef.current.innerHTML = "";
                    legendContainerRef.current.appendChild(legendEl);
                }
            } else {
                const originalParent = originalLegendParentRef.current;
                if (originalParent && legendEl.parentElement !== originalParent) {
                    originalParent.appendChild(legendEl);
                }
            }
        }
    }["RealtimeUPlot.useEffect"], [
        scrollable
    ]);
    if (scrollable) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: legendContainerRef,
                    className: "flex flex-wrap items-center gap-3 text-xs text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/widgets/charts/realtime-uplot.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: desiredWidth
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: rootRef
                        }, void 0, false, {
                            fileName: "[project]/src/widgets/charts/realtime-uplot.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/charts/realtime-uplot.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/widgets/charts/realtime-uplot.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/widgets/charts/realtime-uplot.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/src/widgets/charts/realtime-uplot.tsx",
        lineNumber: 216,
        columnNumber: 10
    }, this);
}
_s(RealtimeUPlot, "bnGeSwnE3xCwoo7WZklakQEj7+M=");
_c = RealtimeUPlot;
var _c;
__turbopack_context__.k.register(_c, "RealtimeUPlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$charts$2f$realtime$2d$uplot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/charts/realtime-uplot.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/monitoring/ui/chart-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartCard",
    ()=>ChartCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$charts$2f$realtime$2d$uplot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/charts/realtime-uplot.tsx [app-client] (ecmascript)");
'use client';
;
;
function ChartCard(param) {
    let { title, data, series, yLabel, height = 300, scrollable, pixelsPerSecond } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-medium text-muted-foreground",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/features/monitoring/ui/chart-card.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$charts$2f$realtime$2d$uplot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeUPlot"], {
                data: data,
                series: series,
                yLabel: yLabel,
                height: height,
                scrollable: scrollable,
                pixelsPerSecond: pixelsPerSecond
            }, void 0, false, {
                fileName: "[project]/src/features/monitoring/ui/chart-card.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/monitoring/ui/chart-card.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = ChartCard;
var _c;
__turbopack_context__.k.register(_c, "ChartCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/monitoring/ui/realtime-charts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RealtimeCharts",
    ()=>RealtimeCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/use-websocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/websocket-selectors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$sliding$2d$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/use-sliding-window.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$chart$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/monitoring/ui/chart-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Настройки скользящего окна
const WINDOW_SIZE = 100; // 5 минут в секундах
const MAX_POINTS = 250; // максимальное количество точек
function toChartData(points) {
    var _points_;
    if (!points.length) {
        return [
            [],
            []
        ];
    }
    var _points__time_sec;
    const base = (_points__time_sec = (_points_ = points[0]) === null || _points_ === void 0 ? void 0 : _points_.time_sec) !== null && _points__time_sec !== void 0 ? _points__time_sec : 0;
    const xs = points.map((p)=>p.time_sec - base);
    const ys = points.map((p)=>p.value);
    return [
        xs,
        ys
    ];
}
function RealtimeCharts() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("window");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBPMWebSocket"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUCWebSocket"])();
    // Получаем все данные
    const allBpmData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBPMData"])();
    const allUcData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUCData"])();
    // Создаем скользящие окна
    const bpmWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$sliding$2d$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlidingWindow"])(allBpmData, {
        windowSize: WINDOW_SIZE,
        maxPoints: MAX_POINTS
    });
    const ucWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$sliding$2d$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlidingWindow"])(allUcData, {
        windowSize: WINDOW_SIZE,
        maxPoints: MAX_POINTS
    });
    const { chartData: bpmWindowChartData, dataCount: bpmWindowPoints, updateTime: updateBpmWindowTime } = bpmWindow;
    const { chartData: ucWindowChartData, dataCount: ucWindowPoints, updateTime: updateUcWindowTime } = ucWindow;
    const bpmFullChartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RealtimeCharts.useMemo[bpmFullChartData]": ()=>toChartData(allBpmData)
    }["RealtimeCharts.useMemo[bpmFullChartData]"], [
        allBpmData
    ]);
    const ucFullChartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RealtimeCharts.useMemo[ucFullChartData]": ()=>toChartData(allUcData)
    }["RealtimeCharts.useMemo[ucFullChartData]"], [
        allUcData
    ]);
    const bpmChartData = mode === "window" ? bpmWindowChartData : bpmFullChartData;
    const ucChartData = mode === "window" ? ucWindowChartData : ucFullChartData;
    const bpmPoints = mode === "window" ? bpmWindowPoints : allBpmData.length;
    const ucPoints = mode === "window" ? ucWindowPoints : allUcData.length;
    const subtitle = mode === "window" ? "".concat(WINDOW_SIZE, "с окно") : "горизонтальный скролл";
    const scrollable = mode === "scroll";
    // Обновляем время каждую секунду для скользящего окна
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RealtimeCharts.useEffect": ()=>{
            if (mode !== "window") {
                return;
            }
            const interval = setInterval({
                "RealtimeCharts.useEffect.interval": ()=>{
                    updateBpmWindowTime();
                    updateUcWindowTime();
                }
            }["RealtimeCharts.useEffect.interval"], 1000);
            return ({
                "RealtimeCharts.useEffect": ()=>clearInterval(interval)
            })["RealtimeCharts.useEffect"];
        }
    }["RealtimeCharts.useEffect"], [
        mode,
        updateBpmWindowTime,
        updateUcWindowTime
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-muted-foreground",
                        children: "Режим отображения"
                    }, void 0, false, {
                        fileName: "[project]/src/features/monitoring/ui/realtime-charts.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: mode === "window" ? "default" : "outline",
                                onClick: ()=>setMode("window"),
                                children: "Скользящее окно"
                            }, void 0, false, {
                                fileName: "[project]/src/features/monitoring/ui/realtime-charts.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: mode === "scroll" ? "default" : "outline",
                                onClick: ()=>setMode("scroll"),
                                children: "Горизонтальный скролл"
                            }, void 0, false, {
                                fileName: "[project]/src/features/monitoring/ui/realtime-charts.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/monitoring/ui/realtime-charts.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/monitoring/ui/realtime-charts.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$chart$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartCard"], {
                        title: "Heart Rate (BPM)",
                        data: bpmChartData,
                        series: [
                            {
                                label: "BPM",
                                color: "rgb(59, 130, 246)"
                            }
                        ],
                        yLabel: "сек / BPM",
                        scrollable: scrollable,
                        pixelsPerSecond: scrollable ? 6 : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/features/monitoring/ui/realtime-charts.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$chart$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartCard"], {
                        title: "Uterine Contractions (UC)",
                        data: ucChartData,
                        series: [
                            {
                                label: "UC",
                                color: "rgb(16, 185, 129)"
                            }
                        ],
                        yLabel: "сек / UC",
                        scrollable: scrollable,
                        pixelsPerSecond: scrollable ? 6 : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/features/monitoring/ui/realtime-charts.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/monitoring/ui/realtime-charts.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/monitoring/ui/realtime-charts.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(RealtimeCharts, "AXUq2VrJCp+udvc5z80nmeFKAhA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBPMWebSocket"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUCWebSocket"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBPMData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUCData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$sliding$2d$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlidingWindow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$sliding$2d$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlidingWindow"]
    ];
});
_c = RealtimeCharts;
var _c;
__turbopack_context__.k.register(_c, "RealtimeCharts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Progress(param) {
    let { className, indicatorClassName, value, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary h-full w-full flex-1 transition-all", indicatorClassName),
            style: {
                transform: "translateX(-".concat(100 - (value || 0), "%)")
            }
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/progress.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/progress.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ScrollArea(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/shared/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/shared/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/shared/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar(param) {
    let { className, orientation = "vertical", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(param) {
    let { className, variant, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/ui/connection-badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared UI: Badge для статуса подключения
 */ __turbopack_context__.s([
    "ConnectionBadge",
    ()=>ConnectionBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/badge.tsx [app-client] (ecmascript)");
;
;
function ConnectionBadge(param) {
    let { status } = param;
    const className = status === 'connected' ? 'border-slate-400 text-muted-foreground' : status === 'connecting' ? 'border-dashed border-slate-400 text-muted-foreground' : status === 'error' ? 'border-slate-700 text-slate-700' : 'border-slate-300 text-muted-foreground';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: className,
        children: status
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/connection-badge.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = ConnectionBadge;
var _c;
__turbopack_context__.k.register(_c, "ConnectionBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/ui/status-indicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared UI: Индикатор статуса с цветом
 */ __turbopack_context__.s([
    "StatusIndicator",
    ()=>StatusIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function StatusIndicator(param) {
    let { status } = param;
    const tone = status === 'Тревога' ? 'bg-slate-700' : status === 'Подозрение' ? 'bg-slate-500' : 'bg-slate-300';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block h-2.5 w-2.5 rounded-full ".concat(tone)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/status-indicator.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-muted-foreground",
                children: "Краткосрочный статус:"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/status-indicator.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-sm",
                children: status
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/status-indicator.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/status-indicator.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = StatusIndicator;
var _c;
__turbopack_context__.k.register(_c, "StatusIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator(param) {
    let { className, orientation = "horizontal", decorative = true, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/monitoring/ui/ai-events-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Компонент списка событий AI
 */ __turbopack_context__.s([
    "AIEventsList",
    ()=>AIEventsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/scroll-area.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function AIEventsList(param) {
    let { events } = param;
    if (!events || events.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 rounded border flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-muted-foreground",
                children: "Нет событий"
            }, void 0, false, {
                fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    // Сортируем события по severity (высокие сверху)
    const sortedEvents = [
        ...events
    ].sort((a, b)=>b.severity - a.severity);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
        className: "h-32 rounded border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 space-y-3",
            children: sortedEvents.map((e, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: "text-xs uppercase tracking-wide text-muted-foreground",
                                        children: e.type
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: [
                                            "severity: ",
                                            e.severity.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                            className: "bg-muted/40",
                            indicatorClassName: "bg-slate-500",
                            value: Math.max(0, Math.min(100, e.severity * 100))
                        }, void 0, false, {
                            fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        idx < sortedEvents.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
                            lineNumber: 52,
                            columnNumber: 47
                        }, this)
                    ]
                }, "".concat(e.type, "-").concat(idx), true, {
                    fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/monitoring/ui/ai-events-list.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = AIEventsList;
var _c;
__turbopack_context__.k.register(_c, "AIEventsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/monitoring/ui/ai-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIPanel",
    ()=>AIPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/use-websocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/websocket-selectors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$connection$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/connection-badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$status$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/status-indicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$ai$2d$events$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/monitoring/ui/ai-events-list.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AIPanel() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIWebSocket"])();
    const last = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLastAIMessage"])();
    const aiStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIStatus"])();
    var _last_short_term_events;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "w-full h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "AI Analysis"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Статус и вероятности"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$connection$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionBadge"], {
                            status: aiStatus
                        }, void 0, false, {
                            fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-1 overflow-hidden p-6 pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            (last === null || last === void 0 ? void 0 : last.short_term.status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$status$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusIndicator"], {
                                status: last.short_term.status
                            }, void 0, false, {
                                fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground mb-2",
                                        children: "События"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$ai$2d$events$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIEventsList"], {
                                        events: (_last_short_term_events = last === null || last === void 0 ? void 0 : last.short_term.events) !== null && _last_short_term_events !== void 0 ? _last_short_term_events : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 md:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Hypoxia 60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: last ? "".concat((last.long_term.hypoxia_60 * 100).toFixed(1), "%") : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                className: "bg-muted/40",
                                                indicatorClassName: "bg-slate-500",
                                                value: last ? Math.max(0, Math.min(100, last.long_term.hypoxia_60 * 100)) : 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Emergency 30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: last ? "".concat((last.long_term.emergency_30 * 100).toFixed(1), "%") : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                className: "bg-muted/40",
                                                indicatorClassName: "bg-slate-500",
                                                value: last ? Math.max(0, Math.min(100, last.long_term.emergency_30 * 100)) : 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/monitoring/ui/ai-panel.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(AIPanel, "nOxiRtSlNE8jC6SJj07we6p0KNg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIWebSocket"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLastAIMessage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIStatus"]
    ];
});
_c = AIPanel;
var _c;
__turbopack_context__.k.register(_c, "AIPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/monitoring/hooks/use-ai-alerts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Хук для генерации предупреждений из AI данных
 */ __turbopack_context__.s([
    "useAIAlerts",
    ()=>useAIAlerts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/store/websocket-selectors.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const MAX_ALERTS = 100;
function createConnectionAlert(status) {
    const base = {
        timestamp: new Date(),
        acknowledged: status !== 'error'
    };
    switch(status){
        case 'connected':
            return {
                id: "connection-".concat(status, "-").concat(base.timestamp.getTime()),
                type: 'info',
                title: 'AI подключен',
                message: 'Система анализа данных активна',
                ...base
            };
        case 'connecting':
            return {
                id: "connection-".concat(status, "-").concat(base.timestamp.getTime()),
                type: 'info',
                title: 'Подключение к AI',
                message: 'Устанавливаем соединение с системой анализа',
                ...base
            };
        case 'error':
            return {
                id: "connection-".concat(status, "-").concat(base.timestamp.getTime()),
                type: 'error',
                title: 'Ошибка подключения AI',
                message: 'Не удается подключиться к системе анализа',
                ...base,
                acknowledged: false
            };
        case 'disconnected':
        default:
            return {
                id: "connection-".concat(status, "-").concat(base.timestamp.getTime()),
                type: 'info',
                title: 'Соединение разорвано',
                message: 'Ожидаем новое подключение к системе анализа',
                ...base
            };
    }
}
function buildAlertsFromMessage(message) {
    const alerts = [];
    const timestamp = new Date(message.time * 1000);
    const status = message.short_term.status;
    if (status === 'Тревога') {
        alerts.push({
            id: "status-alert-".concat(message.time),
            type: 'error',
            title: 'Критический статус',
            message: 'Обнаружена тревога в анализе данных',
            timestamp,
            acknowledged: false
        });
    } else if (status === 'Подозрение') {
        alerts.push({
            id: "status-warning-".concat(message.time),
            type: 'warning',
            title: 'Подозрительная активность',
            message: "Требуется внимание: ".concat(status),
            timestamp,
            acknowledged: false
        });
    }
    message.short_term.events.forEach((event, index)=>{
        if (event.severity > 0.7) {
            alerts.push({
                id: "event-high-".concat(message.time, "-").concat(index),
                type: 'error',
                title: 'Высокий риск события',
                message: "".concat(event.type, ": уровень ").concat(event.severity.toFixed(2)),
                timestamp,
                acknowledged: false,
                severity: event.severity
            });
        } else if (event.severity > 0.4) {
            alerts.push({
                id: "event-medium-".concat(message.time, "-").concat(index),
                type: 'warning',
                title: 'Повышенное внимание к событию',
                message: "".concat(event.type, ": уровень ").concat(event.severity.toFixed(2)),
                timestamp,
                acknowledged: false,
                severity: event.severity
            });
        }
    });
    if (message.long_term.hypoxia_60 > 0.8) {
        alerts.push({
            id: "hypoxia-high-".concat(message.time),
            type: 'error',
            title: 'Высокий риск гипоксии',
            message: "Вероятность гипоксии 60 мин: ".concat((message.long_term.hypoxia_60 * 100).toFixed(1), "%"),
            timestamp,
            acknowledged: false
        });
    } else if (message.long_term.hypoxia_60 > 0.6) {
        alerts.push({
            id: "hypoxia-medium-".concat(message.time),
            type: 'warning',
            title: 'Повышенный риск гипоксии',
            message: "Вероятность гипоксии 60 мин: ".concat((message.long_term.hypoxia_60 * 100).toFixed(1), "%"),
            timestamp,
            acknowledged: false
        });
    }
    if (message.long_term.emergency_30 > 0.7) {
        alerts.push({
            id: "emergency-high-".concat(message.time),
            type: 'error',
            title: 'Высокий риск экстренной ситуации',
            message: "Вероятность экстренной ситуации 30 мин: ".concat((message.long_term.emergency_30 * 100).toFixed(1), "%"),
            timestamp,
            acknowledged: false
        });
    } else if (message.long_term.emergency_30 > 0.5) {
        alerts.push({
            id: "emergency-medium-".concat(message.time),
            type: 'warning',
            title: 'Повышенный риск экстренной ситуации',
            message: "Вероятность экстренной ситуации 30 мин: ".concat((message.long_term.emergency_30 * 100).toFixed(1), "%"),
            timestamp,
            acknowledged: false
        });
    }
    return alerts;
}
function useAIAlerts() {
    _s();
    const lastMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLastAIMessage"])();
    const aiStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIStatus"])();
    const [alerts, setAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const alertsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const lastStatusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastMessageSignatureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const upsertAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAIAlerts.useCallback[upsertAlerts]": (incoming)=>{
            if (!incoming.length) return;
            const map = new Map(alertsRef.current);
            let changed = false;
            incoming.forEach({
                "useAIAlerts.useCallback[upsertAlerts]": (alert)=>{
                    const existing = map.get(alert.id);
                    if (!existing || existing.timestamp.getTime() !== alert.timestamp.getTime()) {
                        map.set(alert.id, alert);
                        changed = true;
                    }
                }
            }["useAIAlerts.useCallback[upsertAlerts]"]);
            if (!changed) return;
            const sorted = Array.from(map.values()).sort({
                "useAIAlerts.useCallback[upsertAlerts].sorted": (a, b)=>b.timestamp.getTime() - a.timestamp.getTime()
            }["useAIAlerts.useCallback[upsertAlerts].sorted"]);
            const limited = sorted.slice(0, MAX_ALERTS);
            alertsRef.current = new Map(limited.map({
                "useAIAlerts.useCallback[upsertAlerts]": (alert)=>[
                        alert.id,
                        alert
                    ]
            }["useAIAlerts.useCallback[upsertAlerts]"]));
            setAlerts(limited);
        }
    }["useAIAlerts.useCallback[upsertAlerts]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAIAlerts.useEffect": ()=>{
            if (!aiStatus) return;
            if (lastStatusRef.current === aiStatus) return;
            const alert = createConnectionAlert(aiStatus);
            lastStatusRef.current = aiStatus;
            if (alert) {
                upsertAlerts([
                    alert
                ]);
            }
        }
    }["useAIAlerts.useEffect"], [
        aiStatus,
        upsertAlerts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAIAlerts.useEffect": ()=>{
            if (!lastMessage) return;
            const signature = [
                lastMessage.time,
                lastMessage.short_term.status,
                lastMessage.short_term.events.map({
                    "useAIAlerts.useEffect.signature": (event)=>"".concat(event.type, ":").concat(event.severity.toFixed(2))
                }["useAIAlerts.useEffect.signature"]).join('|'),
                lastMessage.long_term.hypoxia_60.toFixed(2),
                lastMessage.long_term.emergency_30.toFixed(2)
            ].join('-');
            if (lastMessageSignatureRef.current === signature) return;
            lastMessageSignatureRef.current = signature;
            const derived = buildAlertsFromMessage(lastMessage);
            upsertAlerts(derived);
        }
    }["useAIAlerts.useEffect"], [
        lastMessage,
        upsertAlerts
    ]);
    return alerts;
}
_s(useAIAlerts, "C+HJj7WVBptnRKtrfl0PAxiEFDQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLastAIMessage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$store$2f$websocket$2d$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIStatus"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/monitoring/ui/alerts-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Панель предупреждений и уведомлений
 */ __turbopack_context__.s([
    "AlertsPanel",
    ()=>AlertsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$use$2d$ai$2d$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/monitoring/hooks/use-ai-alerts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const ALERT_STYLES = {
    error: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        label: 'Критично',
        accent: 'border-l-slate-500'
    },
    warning: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        label: 'Важно',
        accent: 'border-l-slate-400'
    },
    info: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
        label: 'Информация',
        accent: 'border-l-slate-300'
    },
    success: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"],
        label: 'Событие',
        accent: 'border-l-slate-300'
    }
};
function renderAlertIcon(type) {
    var _ALERT_STYLES_type;
    var _ALERT_STYLES_type_icon;
    const Icon = (_ALERT_STYLES_type_icon = (_ALERT_STYLES_type = ALERT_STYLES[type]) === null || _ALERT_STYLES_type === void 0 ? void 0 : _ALERT_STYLES_type.icon) !== null && _ALERT_STYLES_type_icon !== void 0 ? _ALERT_STYLES_type_icon : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        className: "h-4 w-4 text-muted-foreground",
        strokeWidth: 1.5
    }, void 0, false, {
        fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
function formatTimestamp(timestamp) {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (seconds < 60) return "".concat(seconds, "с назад");
    if (minutes < 60) return "".concat(minutes, "м назад");
    if (hours < 24) return "".concat(hours, "ч назад");
    return timestamp.toLocaleDateString();
}
function AlertsPanel() {
    _s();
    const allAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$use$2d$ai$2d$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIAlerts"])();
    const [dismissedIds, setDismissedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const visibleAlerts = allAlerts.filter((alert)=>!dismissedIds.has(alert.id));
    const handleDismiss = (alertId)=>{
        setDismissedIds((prev)=>new Set([
                ...prev,
                alertId
            ]));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "w-full h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Предупреждения"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Системные уведомления и события"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "border-muted-foreground/30 text-muted-foreground",
                            children: [
                                visibleAlerts.length,
                                " активных"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-1 overflow-hidden p-6 pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            visibleAlerts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-muted-foreground mb-3",
                                        children: [
                                            "Требуют внимания (",
                                            visibleAlerts.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                        className: "h-48",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 pr-4",
                                            children: visibleAlerts.map((alert)=>{
                                                var _ALERT_STYLES_alert_type;
                                                const tone = (_ALERT_STYLES_alert_type = ALERT_STYLES[alert.type]) !== null && _ALERT_STYLES_alert_type !== void 0 ? _ALERT_STYLES_alert_type : ALERT_STYLES.info;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3 rounded-lg border border-slate-200 bg-muted/40 p-3 shadow-sm border-l-4 ".concat(tone.accent),
                                                    children: [
                                                        renderAlertIcon(alert.type),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                            className: "text-sm font-medium leading-tight",
                                                                            children: alert.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                                                            lineNumber: 110,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: "text-[10px] uppercase tracking-wide text-muted-foreground",
                                                                            children: tone.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground leading-snug",
                                                                    children: alert.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                                                    lineNumber: 120,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: formatTimestamp(alert.timestamp)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            className: "h-6 w-6 p-0 text-muted-foreground",
                                                            onClick: ()=>handleDismiss(alert.id),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, alert.id, true, {
                                                    fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            visibleAlerts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        className: "h-8 w-8 mx-auto mb-2 opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: "Нет активных предупреждений"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/monitoring/ui/alerts-panel.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(AlertsPanel, "JPpXmYNq2KyabGNRuRdluikpE/c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$use$2d$ai$2d$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIAlerts"]
    ];
});
_c = AlertsPanel;
var _c;
__turbopack_context__.k.register(_c, "AlertsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/monitoring/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonitoringPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$realtime$2d$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/monitoring/ui/realtime-charts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$ai$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/monitoring/ui/ai-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$alerts$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/monitoring/ui/alerts-panel.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function MonitoringPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "h-screen flex flex-col p-6 gap-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold flex-shrink-0",
                children: "Мониторинг"
            }, void 0, false, {
                fileName: "[project]/src/app/monitoring/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$realtime$2d$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealtimeCharts"], {}, void 0, false, {
                    fileName: "[project]/src/app/monitoring/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/monitoring/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-2 flex-1 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$ai$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIPanel"], {}, void 0, false, {
                        fileName: "[project]/src/app/monitoring/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$ui$2f$alerts$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertsPanel"], {}, void 0, false, {
                        fileName: "[project]/src/app/monitoring/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/monitoring/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/monitoring/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = MonitoringPage;
var _c;
__turbopack_context__.k.register(_c, "MonitoringPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bc943e16._.js.map