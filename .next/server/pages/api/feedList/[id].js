"use strict";
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
exports.id = "pages/api/feedList/[id]";
exports.ids = ["pages/api/feedList/[id]"];
exports.modules = {

/***/ "./data/feeds.ts":
/*!***********************!*\
  !*** ./data/feeds.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Profile = {\n    profileIdx: 0,\n    photo: \"https://img.etoday.co.kr/pto_db/2017/11/20171107104017_1147769_600_600.jpg\",\n    nickName: \"ricky\",\n    birthday: new Date(\"1986-08-16\"),\n    bio: \"집사야 좋은말 할때 열어라\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2ZlZWRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxLQUFLLENBQUNBLE9BQU8sR0FBYSxDQUFDO0lBQ3pCQyxVQUFVLEVBQUUsQ0FBQztJQUNiQyxLQUFLLEVBQUMsQ0FBNEU7SUFDbEZDLFFBQVEsRUFBRSxDQUFPO0lBQ2pCQyxRQUFRLEVBQUUsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBWTtJQUMvQkMsR0FBRyxFQUFFLENBQWdCO0FBQ3ZCLENBQUM7QUFFRCxpRUFBZU4sT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlcm8vLi9kYXRhL2ZlZWRzLnRzPzBhYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByb2ZpbGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmNvbnN0IFByb2ZpbGU6IElQcm9maWxlID0ge1xuICBwcm9maWxlSWR4OiAwLFxuICBwaG90bzpcImh0dHBzOi8vaW1nLmV0b2RheS5jby5rci9wdG9fZGIvMjAxNy8xMS8yMDE3MTEwNzEwNDAxN18xMTQ3NzY5XzYwMF82MDAuanBnXCIsXG4gIG5pY2tOYW1lOiBcInJpY2t5XCIsXG4gIGJpcnRoZGF5OiBuZXcgRGF0ZShcIjE5ODYtMDgtMTZcIiksXG4gIGJpbzogXCLsp5Hsgqzslbwg7KKL7J2A66eQIO2VoOuVjCDsl7TslrTrnbxcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGUiXSwibmFtZXMiOlsiUHJvZmlsZSIsInByb2ZpbGVJZHgiLCJwaG90byIsIm5pY2tOYW1lIiwiYmlydGhkYXkiLCJEYXRlIiwiYmlvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/feeds.ts\n");

/***/ }),

/***/ "./pages/api/feedList/[id].ts":
/*!************************************!*\
  !*** ./pages/api/feedList/[id].ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userHandler)\n/* harmony export */ });\n/* harmony import */ var _data_feeds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/feeds */ \"./data/feeds.ts\");\n\nfunction userHandler(req, res) {\n    const { query: { id , type  } , method ,  } = req;\n    console.log(req.query);\n    switch(method){\n        case \"GET\":\n            const MAX = 10;\n            const TEST_NUMBER = 53;\n            const dummy = new Array(53).fill(_data_feeds__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n            const feedList = dummy.map((item, key)=>({\n                    ...item,\n                    profileIdx: key + 1\n                })\n            );\n            const page = Number(req.query.id);\n            let result = [];\n            console.log(req.query.id);\n            if (req.query.type === \"all\") {\n                result = feedList.slice(0, page * MAX);\n            } else {\n                result = feedList.slice(page * MAX - MAX, page * MAX);\n                if (result.length == 0) {\n                    res.status(404).end();\n                    break;\n                }\n            }\n            res.status(200).json(result);\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"PUT\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZExpc3QvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQUMxQixRQUFRLENBQUNDLFdBQVcsQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRSxDQUFDO0lBQzlFLEtBQUssQ0FBQyxDQUFDLENBQ0xDLEtBQUssRUFBRSxDQUFDLENBQUNDLEVBQUUsR0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FDbEJDLE1BQU0sSUFDUixDQUFDLEdBQUdMLEdBQUc7SUFDUE0sT0FBTyxDQUFDQyxHQUFHLENBQUNQLEdBQUcsQ0FBQ0UsS0FBSztJQUNyQixNQUFNLENBQUVHLE1BQU07UUFDWixJQUFJLENBQUMsQ0FBSztZQUNSLEtBQUssQ0FBQ0csR0FBRyxHQUFHLEVBQUU7WUFDZCxLQUFLLENBQUNDLFdBQVcsR0FBRyxFQUFFO1lBQ3RCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsRUFBRUMsSUFBSSxDQUFDZCxtREFBTztZQUN4QyxLQUFLLENBQUNlLFFBQVEsR0FBZUgsS0FBSyxDQUFDSSxHQUFHLEVBQUVDLElBQUksRUFBRUMsR0FBRyxJQUFNLENBQUM7dUJBQ25ERCxJQUFJO29CQUNQRSxVQUFVLEVBQUVELEdBQUcsR0FBRyxDQUFDO2dCQUNyQixDQUFDOztZQUNELEtBQUssQ0FBQ0UsSUFBSSxHQUFHQyxNQUFNLENBQUNuQixHQUFHLENBQUNFLEtBQUssQ0FBQ0MsRUFBRTtZQUNoQyxHQUFHLENBQUNpQixNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2ZkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxHQUFHLENBQUNFLEtBQUssQ0FBQ0MsRUFBRTtZQUN4QixFQUFFLEVBQUNILEdBQUcsQ0FBQ0UsS0FBSyxDQUFDRSxJQUFJLEtBQUcsQ0FBSyxNQUFDLENBQUM7Z0JBQ3hCZ0IsTUFBTSxHQUFHUCxRQUFRLENBQUNRLEtBQUssQ0FBQyxDQUFDLEVBQUVILElBQUksR0FBR1YsR0FBRztZQUN4QyxDQUFDLE1BQUksQ0FBQztnQkFDSlksTUFBTSxHQUFHUCxRQUFRLENBQUNRLEtBQUssQ0FBRUgsSUFBSSxHQUFHVixHQUFHLEdBQUdBLEdBQUcsRUFBRVUsSUFBSSxHQUFHVixHQUFHO2dCQUNyRCxFQUFFLEVBQUNZLE1BQU0sQ0FBQ0UsTUFBTSxJQUFFLENBQUMsRUFBQyxDQUFDO29CQUNuQnJCLEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLEdBQUc7b0JBQ25CLEtBQUs7Z0JBQ1AsQ0FBQztZQUNILENBQUM7WUFDRHZCLEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxHQUFHLEVBQUVFLElBQUksQ0FBQ0wsTUFBTTtZQUMzQixLQUFLOztZQUdMbkIsR0FBRyxDQUFDeUIsU0FBUyxDQUFDLENBQU8sUUFBRSxDQUFDO2dCQUFBLENBQUs7Z0JBQUUsQ0FBSztZQUFBLENBQUM7WUFDckN6QixHQUFHLENBQUNzQixNQUFNLENBQUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsT0FBTyxFQUFFbkIsTUFBTSxDQUFDLFlBQVk7O0FBRXZELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZXJvLy4vcGFnZXMvYXBpL2ZlZWRMaXN0L1tpZF0udHM/M2QzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHR5cGUgeyBJUHJvZmlsZSwgSUZlZWRMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9mZWVkc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlckhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IGlkLHR5cGUgfSxcbiAgICBtZXRob2QsXG4gIH0gPSByZXE7XG4gIGNvbnNvbGUubG9nKHJlcS5xdWVyeSk7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBcIkdFVFwiOlxuICAgICAgY29uc3QgTUFYID0gMTA7XG4gICAgICBjb25zdCBURVNUX05VTUJFUiA9IDUzO1xuICAgICAgY29uc3QgZHVtbXkgPSBuZXcgQXJyYXkoNTMpLmZpbGwoUHJvZmlsZSk7XG4gICAgICBjb25zdCBmZWVkTGlzdDogSVByb2ZpbGVbXSA9IGR1bW15Lm1hcCgoaXRlbSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBwcm9maWxlSWR4OiBrZXkgKyAxLFxuICAgICAgfSkpO1xuICAgICAgY29uc3QgcGFnZSA9IE51bWJlcihyZXEucXVlcnkuaWQpO1xuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5LmlkKTtcbiAgICAgIGlmKHJlcS5xdWVyeS50eXBlPT09XCJhbGxcIil7XG4gICAgICAgICByZXN1bHQgPSBmZWVkTGlzdC5zbGljZSgwLCBwYWdlICogTUFYKTtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXN1bHQgPSBmZWVkTGlzdC5zbGljZSgocGFnZSAqIE1BWCktIE1BWCwgcGFnZSAqIE1BWCk7XG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGg9PTApe1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoKTtcbiAgICAgICAgICBicmVhazsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgW1wiR0VUXCIsIFwiUFVUXCJdKTtcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VySGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJ0eXBlIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsIk1BWCIsIlRFU1RfTlVNQkVSIiwiZHVtbXkiLCJBcnJheSIsImZpbGwiLCJmZWVkTGlzdCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJwcm9maWxlSWR4IiwicGFnZSIsIk51bWJlciIsInJlc3VsdCIsInNsaWNlIiwibGVuZ3RoIiwic3RhdHVzIiwiZW5kIiwianNvbiIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/feedList/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/feedList/[id].ts"));
module.exports = __webpack_exports__;

})();