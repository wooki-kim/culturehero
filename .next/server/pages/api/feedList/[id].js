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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userHandler)\n/* harmony export */ });\n/* harmony import */ var _data_feeds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/feeds */ \"./data/feeds.ts\");\n\nfunction userHandler(req, res) {\n    const { query: { id , type  } , method ,  } = req;\n    console.log(req.query);\n    switch(method){\n        case \"GET\":\n            const MAX = 10;\n            const TEST_NUMBER = 14;\n            const dummy = new Array(TEST_NUMBER).fill(_data_feeds__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n            const feedList = dummy.map((item, key)=>({\n                    ...item,\n                    profileIdx: key + 1\n                })\n            );\n            const page = Number(req.query.id);\n            let result = [];\n            console.log(req.query.id);\n            if (req.query.type === \"all\") {\n                result = feedList.slice(0, page * MAX);\n            } else {\n                result = feedList.slice(page * MAX - MAX, page * MAX);\n                console.log(\"확인\", page * MAX - MAX, page * MAX);\n                if (result.length == 0) {\n                    res.status(404).end();\n                    break;\n                }\n            }\n            res.status(200).json(result);\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"PUT\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZExpc3QvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQUMxQixRQUFRLENBQUNDLFdBQVcsQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRSxDQUFDO0lBQzlFLEtBQUssQ0FBQyxDQUFDLENBQ0xDLEtBQUssRUFBRSxDQUFDLENBQUNDLEVBQUUsR0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FDbEJDLE1BQU0sSUFDUixDQUFDLEdBQUdMLEdBQUc7SUFDUE0sT0FBTyxDQUFDQyxHQUFHLENBQUNQLEdBQUcsQ0FBQ0UsS0FBSztJQUNyQixNQUFNLENBQUVHLE1BQU07UUFDWixJQUFJLENBQUMsQ0FBSztZQUNSLEtBQUssQ0FBQ0csR0FBRyxHQUFHLEVBQUU7WUFDZCxLQUFLLENBQUNDLFdBQVcsR0FBRyxFQUFFO1lBQ3RCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDRixXQUFXLEVBQUVHLElBQUksQ0FBQ2QsbURBQU87WUFDakQsS0FBSyxDQUFDZSxRQUFRLEdBQWVILEtBQUssQ0FBQ0ksR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsSUFBTSxDQUFDO3VCQUNuREQsSUFBSTtvQkFDUEUsVUFBVSxFQUFFRCxHQUFHLEdBQUcsQ0FBQztnQkFDckIsQ0FBQzs7WUFDRCxLQUFLLENBQUNFLElBQUksR0FBR0MsTUFBTSxDQUFDbkIsR0FBRyxDQUFDRSxLQUFLLENBQUNDLEVBQUU7WUFDaEMsR0FBRyxDQUFDaUIsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNmZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsR0FBRyxDQUFDRSxLQUFLLENBQUNDLEVBQUU7WUFDeEIsRUFBRSxFQUFDSCxHQUFHLENBQUNFLEtBQUssQ0FBQ0UsSUFBSSxLQUFHLENBQUssTUFBQyxDQUFDO2dCQUN4QmdCLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxLQUFLLENBQUMsQ0FBQyxFQUFFSCxJQUFJLEdBQUdWLEdBQUc7WUFDeEMsQ0FBQyxNQUFJLENBQUM7Z0JBQ0pZLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxLQUFLLENBQUVILElBQUksR0FBR1YsR0FBRyxHQUFHQSxHQUFHLEVBQUVVLElBQUksR0FBR1YsR0FBRztnQkFDckRGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUksU0FBRVcsSUFBSSxHQUFHVixHQUFHLEdBQUlBLEdBQUcsRUFBRVUsSUFBSSxHQUFHVjtnQkFDNUMsRUFBRSxFQUFDWSxNQUFNLENBQUNFLE1BQU0sSUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDbkJyQixHQUFHLENBQUNzQixNQUFNLENBQUMsR0FBRyxFQUFFQyxHQUFHO29CQUNuQixLQUFLO2dCQUNQLENBQUM7WUFDSCxDQUFDO1lBQ0R2QixHQUFHLENBQUNzQixNQUFNLENBQUMsR0FBRyxFQUFFRSxJQUFJLENBQUNMLE1BQU07WUFDM0IsS0FBSzs7WUFHTG5CLEdBQUcsQ0FBQ3lCLFNBQVMsQ0FBQyxDQUFPLFFBQUUsQ0FBQztnQkFBQSxDQUFLO2dCQUFFLENBQUs7WUFBQSxDQUFDO1lBQ3JDekIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLE9BQU8sRUFBRW5CLE1BQU0sQ0FBQyxZQUFZOztBQUV2RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVyby8uL3BhZ2VzL2FwaS9mZWVkTGlzdC9baWRdLnRzPzNkMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB0eXBlIHsgSVByb2ZpbGUsIElGZWVkTGlzdCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uLy4uLy4uL2RhdGEvZmVlZHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJIYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHtcbiAgICBxdWVyeTogeyBpZCx0eXBlIH0sXG4gICAgbWV0aG9kLFxuICB9ID0gcmVxO1xuICBjb25zb2xlLmxvZyhyZXEucXVlcnkpO1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgIGNvbnN0IE1BWCA9IDEwO1xuICAgICAgY29uc3QgVEVTVF9OVU1CRVIgPSAxNDtcbiAgICAgIGNvbnN0IGR1bW15ID0gbmV3IEFycmF5KFRFU1RfTlVNQkVSKS5maWxsKFByb2ZpbGUpO1xuICAgICAgY29uc3QgZmVlZExpc3Q6IElQcm9maWxlW10gPSBkdW1teS5tYXAoKGl0ZW0sIGtleSkgPT4gKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgcHJvZmlsZUlkeDoga2V5ICsgMSxcbiAgICAgIH0pKTtcbiAgICAgIGNvbnN0IHBhZ2UgPSBOdW1iZXIocmVxLnF1ZXJ5LmlkKTtcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcS5xdWVyeS5pZCk7XG4gICAgICBpZihyZXEucXVlcnkudHlwZT09PVwiYWxsXCIpe1xuICAgICAgICAgcmVzdWx0ID0gZmVlZExpc3Quc2xpY2UoMCwgcGFnZSAqIE1BWCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzdWx0ID0gZmVlZExpc3Quc2xpY2UoKHBhZ2UgKiBNQVgpLSBNQVgsIHBhZ2UgKiBNQVgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIu2ZleyduFwiLChwYWdlICogTUFYKSAtIE1BWCwgcGFnZSAqIE1BWCk7XG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGg9PTApe1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoKTtcbiAgICAgICAgICBicmVhazsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgW1wiR0VUXCIsIFwiUFVUXCJdKTtcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VySGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJ0eXBlIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsIk1BWCIsIlRFU1RfTlVNQkVSIiwiZHVtbXkiLCJBcnJheSIsImZpbGwiLCJmZWVkTGlzdCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJwcm9maWxlSWR4IiwicGFnZSIsIk51bWJlciIsInJlc3VsdCIsInNsaWNlIiwibGVuZ3RoIiwic3RhdHVzIiwiZW5kIiwianNvbiIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/feedList/[id].ts\n");

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