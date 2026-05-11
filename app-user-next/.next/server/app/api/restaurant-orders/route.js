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
exports.id = "app/api/restaurant-orders/route";
exports.ids = ["app/api/restaurant-orders/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frestaurant-orders%2Froute&page=%2Fapi%2Frestaurant-orders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frestaurant-orders%2Froute.js&appDir=A%3A%5CNHPL%5Capp-user-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=A%3A%5CNHPL%5Capp-user-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frestaurant-orders%2Froute&page=%2Fapi%2Frestaurant-orders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frestaurant-orders%2Froute.js&appDir=A%3A%5CNHPL%5Capp-user-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=A%3A%5CNHPL%5Capp-user-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var A_NHPL_app_user_next_src_app_api_restaurant_orders_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/restaurant-orders/route.js */ \"(rsc)/./src/app/api/restaurant-orders/route.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([A_NHPL_app_user_next_src_app_api_restaurant_orders_route_js__WEBPACK_IMPORTED_MODULE_3__]);\nA_NHPL_app_user_next_src_app_api_restaurant_orders_route_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/restaurant-orders/route\",\n        pathname: \"/api/restaurant-orders\",\n        filename: \"route\",\n        bundlePath: \"app/api/restaurant-orders/route\"\n    },\n    resolvedPagePath: \"A:\\\\NHPL\\\\app-user-next\\\\src\\\\app\\\\api\\\\restaurant-orders\\\\route.js\",\n    nextConfigOutput,\n    userland: A_NHPL_app_user_next_src_app_api_restaurant_orders_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZXN0YXVyYW50LW9yZGVycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVzdGF1cmFudC1vcmRlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZXN0YXVyYW50LW9yZGVycyUyRnJvdXRlLmpzJmFwcERpcj1BJTNBJTVDTkhQTCU1Q2FwcC11c2VyLW5leHQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUElM0ElNUNOSFBMJTVDYXBwLXVzZXItbmV4dCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDbUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGLHFDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkE6XFxcXE5IUExcXFxcYXBwLXVzZXItbmV4dFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyZXN0YXVyYW50LW9yZGVyc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmVzdGF1cmFudC1vcmRlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yZXN0YXVyYW50LW9yZGVyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcmVzdGF1cmFudC1vcmRlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJBOlxcXFxOSFBMXFxcXGFwcC11c2VyLW5leHRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccmVzdGF1cmFudC1vcmRlcnNcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frestaurant-orders%2Froute&page=%2Fapi%2Frestaurant-orders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frestaurant-orders%2Froute.js&appDir=A%3A%5CNHPL%5Capp-user-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=A%3A%5CNHPL%5Capp-user-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/restaurant-orders/route.js":
/*!************************************************!*\
  !*** ./src/app/api/restaurant-orders/route.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pg__WEBPACK_IMPORTED_MODULE_0__]);\npg__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    connectionString: process.env.DATABASE_URL\n});\nasync function GET() {\n    try {\n        const result = await pool.query('SELECT * FROM restaurant_orders ORDER BY created_at DESC');\n        return Response.json(result.rows);\n    } catch (error) {\n        return Response.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const data = await request.json();\n        const { user_id, restaurant_name, items, total_amount, order_type } = data;\n        const result = await pool.query('INSERT INTO restaurant_orders (user_id, restaurant_name, items, total_amount, order_type) VALUES ($1, $2, $3, $4, $5) RETURNING *', [\n            user_id || 1,\n            restaurant_name,\n            JSON.stringify(items),\n            total_amount,\n            order_type\n        ]);\n        return Response.json(result.rows[0]);\n    } catch (error) {\n        return Response.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZXN0YXVyYW50LW9yZGVycy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsT0FBTyxJQUFJRCxvQ0FBSUEsQ0FBQztJQUNwQkUsa0JBQWtCQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFDNUM7QUFFTyxlQUFlQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNTixLQUFLTyxLQUFLLENBQUM7UUFDaEMsT0FBT0MsU0FBU0MsSUFBSSxDQUFDSCxPQUFPSSxJQUFJO0lBQ2xDLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9ILFNBQVNDLElBQUksQ0FBQztZQUFFRSxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDL0Q7QUFDRjtBQUVPLGVBQWVDLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsUUFBUU4sSUFBSTtRQUMvQixNQUFNLEVBQUVRLE9BQU8sRUFBRUMsZUFBZSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFLEdBQUdMO1FBQ3RFLE1BQU1WLFNBQVMsTUFBTU4sS0FBS08sS0FBSyxDQUM3QixxSUFDQTtZQUFDVSxXQUFXO1lBQUdDO1lBQWlCSSxLQUFLQyxTQUFTLENBQUNKO1lBQVFDO1lBQWNDO1NBQVc7UUFFbEYsT0FBT2IsU0FBU0MsSUFBSSxDQUFDSCxPQUFPSSxJQUFJLENBQUMsRUFBRTtJQUNyQyxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPSCxTQUFTQyxJQUFJLENBQUM7WUFBRUUsT0FBT0EsTUFBTUMsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQy9EO0FBQ0YiLCJzb3VyY2VzIjpbIkE6XFxOSFBMXFxhcHAtdXNlci1uZXh0XFxzcmNcXGFwcFxcYXBpXFxyZXN0YXVyYW50LW9yZGVyc1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJztcblxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgY29ubmVjdGlvblN0cmluZzogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUICogRlJPTSByZXN0YXVyYW50X29yZGVycyBPUkRFUiBCWSBjcmVhdGVkX2F0IERFU0MnKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihyZXN1bHQucm93cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgeyB1c2VyX2lkLCByZXN0YXVyYW50X25hbWUsIGl0ZW1zLCB0b3RhbF9hbW91bnQsIG9yZGVyX3R5cGUgfSA9IGRhdGE7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgICdJTlNFUlQgSU5UTyByZXN0YXVyYW50X29yZGVycyAodXNlcl9pZCwgcmVzdGF1cmFudF9uYW1lLCBpdGVtcywgdG90YWxfYW1vdW50LCBvcmRlcl90eXBlKSBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSkgUkVUVVJOSU5HIConLFxuICAgICAgW3VzZXJfaWQgfHwgMSwgcmVzdGF1cmFudF9uYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtcyksIHRvdGFsX2Ftb3VudCwgb3JkZXJfdHlwZV1cbiAgICApO1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHJlc3VsdC5yb3dzWzBdKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb29sIiwicG9vbCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwiR0VUIiwicmVzdWx0IiwicXVlcnkiLCJSZXNwb25zZSIsImpzb24iLCJyb3dzIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwiUE9TVCIsInJlcXVlc3QiLCJkYXRhIiwidXNlcl9pZCIsInJlc3RhdXJhbnRfbmFtZSIsIml0ZW1zIiwidG90YWxfYW1vdW50Iiwib3JkZXJfdHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/restaurant-orders/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frestaurant-orders%2Froute&page=%2Fapi%2Frestaurant-orders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frestaurant-orders%2Froute.js&appDir=A%3A%5CNHPL%5Capp-user-next%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=A%3A%5CNHPL%5Capp-user-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();