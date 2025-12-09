module.exports = [
"[project]/Downloads/startup-cohort-website/components/ascii-background.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsciiBackground",
    ()=>AsciiBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/startup-cohort-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/startup-cohort-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*[]{}<>/\\";
// Configuration for easy toggling
const ENABLE_FLASHING = true;
function AsciiBackground() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationFrameId;
        let width = 0;
        let height = 0;
        let cols = 0;
        let rows = 0;
        // Configuration
        const fontSize = 12;
        const charWidth = 7; // Adjust based on SF Mono measurement
        const updateProbability = 0.005; // Chance to update a character per frame
        // Offset to center the grid
        let offsetX = 0;
        let offsetY = 0;
        const grid = [];
        const alphas = [];
        const initGrid = (c, r)=>{
            grid.length = 0;
            alphas.length = 0;
            for(let i = 0; i < c * r; i++){
                grid.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
                alphas.push(0.1); // Base opacity
            }
        };
        const resize = ()=>{
            width = window.innerWidth;
            height = window.innerHeight;
            // Handle high DPI displays
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            // CSS size
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            cols = Math.ceil(width / charWidth);
            rows = Math.ceil(height / fontSize);
            // Calculate offset to center the grid content
            offsetX = (width - cols * charWidth) / 2;
            offsetY = (height - rows * fontSize) / 2;
            initGrid(cols, rows);
        };
        resize();
        window.addEventListener("resize", resize);
        const render = ()=>{
            ctx.clearRect(0, 0, width, height);
            ctx.font = `${fontSize}px "SF Mono", monospace`;
            ctx.textBaseline = "top";
            // We'll use a hardcoded color that matches the theme's primary/foreground but faint
            // Using a low opacity white/light color assuming dark mode or vice versa
            // Ideally we'd read the CSS variable, but for a "faint animation" valid CSS color strings work best
            // ctx.fillStyle = "currentColor"; // This allows the parent color to cascade, but canvas doesn't support currentColor directly in fillStyle usually?
            // Actually canvas fillStyle doesn't support currentColor.
            // We'll rely on the canvas class setting the color and us using a concrete color here.
            // Let's use a standard muted color.
            // ctx.fillStyle = "#ffffff"; // Base color, opacity handled by globalAlpha
            // ctx.globalAlpha = 0.1; // Very faint
            // Update and draw
            const totalChars = cols * rows;
            for(let i = 0; i < totalChars; i++){
                // Randomly update character
                if (Math.random() < updateProbability) {
                    grid[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
                    if ("TURBOPACK compile-time truthy", 1) {
                        alphas[i] = 0.25; // Flash to higher opacity
                    }
                }
                // Decay opacity back to base 0.1
                if (alphas[i] > 0.1) {
                    alphas[i] = Math.max(0.1, alphas[i] - 0.01); // Decay speed
                }
                const col = i % cols;
                const row = Math.floor(i / cols);
                ctx.fillStyle = `rgba(255, 255, 255, ${alphas[i]})`;
                ctx.fillText(grid[i], col * charWidth + offsetX, row * fontSize + offsetY);
            }
            animationFrameId = requestAnimationFrame(render);
        };
        render();
        return ()=>{
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$startup$2d$cohort$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 pointer-events-none z-0 text-primary",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/Downloads/startup-cohort-website/components/ascii-background.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/startup-cohort-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Downloads/startup-cohort-website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=Downloads_startup-cohort-website_756df269._.js.map