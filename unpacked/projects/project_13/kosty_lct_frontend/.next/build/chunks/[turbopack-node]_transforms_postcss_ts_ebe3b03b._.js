module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/kosty_lct_frontend/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/dc166_b39b3b29._.js",
  "build/chunks/[root-of-the-server]__22e9d5f2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/kosty_lct_frontend/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];