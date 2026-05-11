/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/hotel-bookings/route";
exports.ids = ["app/api/hotel-bookings/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = import("pg");;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fhotel-bookings%2Froute&page=%2Fapi%2Fhotel-bookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhotel-bookings%2Froute.js&appDir=A%3A%5CNHPL%5Capp-user-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=A%3A%5CNHPL%5Capp-user-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fhotel-bookings%2Froute&page=%2Fapi%2Fhotel-bookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhotel-bookings%2Froute.js&appDir=A%3A%5CNHPL%5Capp-user-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=A%3A%5CNHPL%5Capp-user-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var A_NHPL_app_user_next_src_app_api_hotel_bookings_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/hotel-bookings/route.js */ \"(rsc)/./src/app/api/hotel-bookings/route.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([A_NHPL_app_user_next_src_app_api_hotel_bookings_route_js__WEBPACK_IMPORTED_MODULE_3__]);\nA_NHPL_app_user_next_src_app_api_hotel_bookings_route_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/hotel-bookings/route\",\n        pathname: \"/api/hotel-bookings\",\n        filename: \"route\",\n        bundlePath: \"app/api/hotel-bookings/route\"\n    },\n    resolvedPagePath: \"A:\\\\NHPL\\\\app-user-next\\\\src\\\\app\\\\api\\\\hotel-bookings\\\\route.js\",\n    nextConfigOutput,\n    userland: A_NHPL_app_user_next_src_app_api_hotel_bookings_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZob3RlbC1ib29raW5ncyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaG90ZWwtYm9va2luZ3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZob3RlbC1ib29raW5ncyUyRnJvdXRlLmpzJmFwcERpcj1BJTNBJTVDTkhQTCU1Q2FwcC11c2VyLW5leHQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUElM0ElNUNOSFBMJTVDYXBwLXVzZXItbmV4dCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZ0I7QUFDN0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGLHFDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkE6XFxcXE5IUExcXFxcYXBwLXVzZXItbmV4dFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxob3RlbC1ib29raW5nc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvaG90ZWwtYm9va2luZ3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ob3RlbC1ib29raW5nc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvaG90ZWwtYm9va2luZ3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJBOlxcXFxOSFBMXFxcXGFwcC11c2VyLW5leHRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcaG90ZWwtYm9va2luZ3NcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fhotel-bookings%2Froute&page=%2Fapi%2Fhotel-bookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhotel-bookings%2Froute.js&appDir=A%3A%5CNHPL%5Capp-user-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=A%3A%5CNHPL%5Capp-user-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/hotel-bookings/route.js":
/*!*********************************************!*\
  !*** ./src/app/api/hotel-bookings/route.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pg__WEBPACK_IMPORTED_MODULE_0__]);\npg__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    connectionString: process.env.DATABASE_URL\n});\nasync function GET() {\n    try {\n        const result = await pool.query('SELECT * FROM hotel_bookings ORDER BY created_at DESC');\n        return Response.json(result.rows);\n    } catch (error) {\n        return Response.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const data = await request.json();\n        const { user_id, guest_name, room_type, check_in, check_out, amount } = data;\n        const result = await pool.query('INSERT INTO hotel_bookings (user_id, guest_name, room_type, check_in, check_out, amount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [\n            user_id || 1,\n            guest_name,\n            room_type,\n            check_in,\n            check_out,\n            amount\n        ]);\n        return Response.json(result.rows[0]);\n    } catch (error) {\n        return Response.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ob3RlbC1ib29raW5ncy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsT0FBTyxJQUFJRCxvQ0FBSUEsQ0FBQztJQUNwQkUsa0JBQWtCQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFDNUM7QUFFTyxlQUFlQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNTixLQUFLTyxLQUFLLENBQUM7UUFDaEMsT0FBT0MsU0FBU0MsSUFBSSxDQUFDSCxPQUFPSSxJQUFJO0lBQ2xDLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9ILFNBQVNDLElBQUksQ0FBQztZQUFFRSxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDL0Q7QUFDRjtBQUVPLGVBQWVDLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsUUFBUU4sSUFBSTtRQUMvQixNQUFNLEVBQUVRLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUUsR0FBR047UUFDeEUsTUFBTVYsU0FBUyxNQUFNTixLQUFLTyxLQUFLLENBQzdCLHdJQUNBO1lBQUNVLFdBQVc7WUFBR0M7WUFBWUM7WUFBV0M7WUFBVUM7WUFBV0M7U0FBTztRQUVwRSxPQUFPZCxTQUFTQyxJQUFJLENBQUNILE9BQU9JLElBQUksQ0FBQyxFQUFFO0lBQ3JDLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9ILFNBQVNDLElBQUksQ0FBQztZQUFFRSxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDL0Q7QUFDRiIsInNvdXJjZXMiOlsiQTpcXE5IUExcXGFwcC11c2VyLW5leHRcXHNyY1xcYXBwXFxhcGlcXGhvdGVsLWJvb2tpbmdzXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sIH0gZnJvbSAncGcnO1xuXG5jb25zdCBwb29sID0gbmV3IFBvb2woe1xuICBjb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGhvdGVsX2Jvb2tpbmdzIE9SREVSIEJZIGNyZWF0ZWRfYXQgREVTQycpO1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHJlc3VsdC5yb3dzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IHVzZXJfaWQsIGd1ZXN0X25hbWUsIHJvb21fdHlwZSwgY2hlY2tfaW4sIGNoZWNrX291dCwgYW1vdW50IH0gPSBkYXRhO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICAnSU5TRVJUIElOVE8gaG90ZWxfYm9va2luZ3MgKHVzZXJfaWQsIGd1ZXN0X25hbWUsIHJvb21fdHlwZSwgY2hlY2tfaW4sIGNoZWNrX291dCwgYW1vdW50KSBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYpIFJFVFVSTklORyAqJyxcbiAgICAgIFt1c2VyX2lkIHx8IDEsIGd1ZXN0X25hbWUsIHJvb21fdHlwZSwgY2hlY2tfaW4sIGNoZWNrX291dCwgYW1vdW50XVxuICAgICk7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24ocmVzdWx0LnJvd3NbMF0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBvb2wiLCJwb29sIiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJHRVQiLCJyZXN1bHQiLCJxdWVyeSIsIlJlc3BvbnNlIiwianNvbiIsInJvd3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJQT1NUIiwicmVxdWVzdCIsImRhdGEiLCJ1c2VyX2lkIiwiZ3Vlc3RfbmFtZSIsInJvb21fdHlwZSIsImNoZWNrX2luIiwiY2hlY2tfb3V0IiwiYW1vdW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/hotel-bookings/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fhotel-bookings%2Froute&page=%2Fapi%2Fhotel-bookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhotel-bookings%2Froute.js&appDir=A%3A%5CNHPL%5Capp-user-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=A%3A%5CNHPL%5Capp-user-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();