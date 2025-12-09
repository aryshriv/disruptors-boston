module.exports = [
"[project]/Downloads/startup-cohort-website/components/ascii-border.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsciiBorder",
    ()=>AsciiBorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/startup-cohort-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/startup-cohort-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*[]{}<>/\\";
function AsciiBorder() {
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const updateDimensions = ()=>{
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return ()=>window.removeEventListener("resize", updateDimensions);
    }, []);
    if (!mounted) return null;
    // Approximate character size in pixels for monospace font (adjust as needed)
    // Reducing width calculation slightly to ensure we overestimate columns and cover full width
    const charWidth = 6;
    const charHeight = 10;
    const cols = Math.ceil(dimensions.width / charWidth) + 20; // Add extra buffer
    const rows = Math.ceil(dimensions.height / charHeight);
    const generateLine = (length)=>{
        return Array.from({
            length
        }, ()=>CHARS[Math.floor(Math.random() * CHARS.length)]).join("");
    };
    const generateVerticalLine = (length)=>{
        return Array.from({
            length
        }, ()=>{
            // Higher density: almost always return a character
            return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("\n");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "SF Mono"
        },
        className: "absolute top-0 left-0 w-full h-screen pointer-events-none z-50 font-mono text-[10px] leading-[12px] text-primary font-bold opacity-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full whitespace-nowrap overflow-hidden",
                children: generateLine(cols)
            }, void 0, false, {
                fileName: "[project]/Downloads/startup-cohort-website/components/ascii-border.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full whitespace-nowrap overflow-hidden",
                children: generateLine(cols)
            }, void 0, false, {
                fileName: "[project]/Downloads/startup-cohort-website/components/ascii-border.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 h-full w-[1ch] whitespace-pre overflow-hidden flex flex-col",
                children: generateVerticalLine(rows)
            }, void 0, false, {
                fileName: "[project]/Downloads/startup-cohort-website/components/ascii-border.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 h-full w-[1ch] whitespace-pre overflow-hidden flex flex-col text-right items-end",
                children: generateVerticalLine(rows)
            }, void 0, false, {
                fileName: "[project]/Downloads/startup-cohort-website/components/ascii-border.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/startup-cohort-website/components/ascii-border.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/startup-cohort-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Downloads/startup-cohort-website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=Downloads_startup-cohort-website_58956f28._.js.map