"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.js\");\n/* harmony import */ var _components_AddTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddTodo */ \"./components/AddTodo.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var dltTodo = function dltTodo(id) {\n        var newTodos = todos.filter(function(todo) {\n            return todo.id !== id;\n        });\n        setTodos(newTodos);\n    };\n    var addTodo = function addTodo(todo) {\n        setTodos(_toConsumableArray(todos).concat([\n            todo\n        ]));\n    };\n    _s();\n    var initTodo = [\n        {\n            id: 1,\n            body: \"H3llo\"\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(function() {\n        JSON.parse;\n    }), todos = ref[0], setTodos = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        localStorage.setItem(\"lists\", JSON.stringify(todos));\n    }, [\n        todos\n    ]);\n    var ref1 = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorMode)(), colorMode = ref1.colorMode, toggleColorMode = ref1.toggleColorMode;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WhatTodo\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJs\\\\whattodo\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJs\\\\whattodo\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJs\\\\whattodo\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                p: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                        icon: colorMode === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaSun, {}, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaMoon, {}, void 0, false, void 0, void 0),\n                        isRound: \"true\",\n                        size: \"lg\",\n                        alignSelf: \"flex-end\",\n                        onClick: toggleColorMode\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJs\\\\whattodo\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        mb: \"8\",\n                        fontWeight: \"extrabold\",\n                        size: \"xl\",\n                        bgGradient: \"linear(to-r,pink.500,pink.400,blue.500)\",\n                        bgClip: \"text\",\n                        children: \"What To Do\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJs\\\\whattodo\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        todos: todos,\n                        dltTodo: dltTodo\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJs\\\\whattodo\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTodo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        addTodo: addTodo\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJs\\\\whattodo\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJs\\\\whattodo\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"K3B8OYXNg3VMtOZbB2bMCeNr4ic=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorMode\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEU7QUFDL0I7QUFDRjtBQUNHO0FBQ0g7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsUUFBUSxDQUFDVyxJQUFJLEdBQUcsQ0FBQztRQWdCckJDLE9BQU8sR0FBaEIsUUFBUSxDQUFDQSxPQUFPLENBQUNDLEVBQUUsRUFBRSxDQUFDO1FBQ3BCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHQyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQ0EsSUFBSSxDQUFDSixFQUFFLEtBQUtBLEVBQUU7UUFDdkIsQ0FBQztRQUNESyxRQUFRLENBQUNKLFFBQVE7SUFDbkIsQ0FBQztRQUVRSyxPQUFPLEdBQWhCLFFBQVEsQ0FBQ0EsT0FBTyxDQUFDRixJQUFJLEVBQUUsQ0FBQztRQUN0QkMsUUFBUSxvQkFBS0gsS0FBSyxTQUFULENBQUM7WUFBVUUsSUFBSTtRQUFBLENBQUM7SUFDM0IsQ0FBQzs7SUF4QkQsR0FBSyxDQUFDRyxRQUFRLEdBQUcsQ0FBQztRQUNoQixDQUFDO1lBQ0NQLEVBQUUsRUFBRSxDQUFDO1lBQ0xRLElBQUksRUFBRSxDQUFPO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQXFCYixHQUV4QixHQUZ3QkEsK0NBQVEsQ0FBQyxRQUNyQyxHQUQyQyxDQUFDO1FBQ3hDYyxJQUFJLENBQUNDLEtBQUs7SUFDWixDQUFDLEdBRk1SLEtBQUssR0FBY1AsR0FFeEIsS0FGWVUsUUFBUSxHQUFJVixHQUV4QjtJQUVGQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmZSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFPLFFBQUVILElBQUksQ0FBQ0ksU0FBUyxDQUFDWCxLQUFLO0lBQ3BELENBQUMsRUFBRSxDQUFDQTtRQUFBQSxLQUFLO0lBQUEsQ0FBQztJQWFWLEdBQUssQ0FBa0NaLElBQWMsR0FBZEEsOERBQVksSUFBM0N3QixTQUFTLEdBQXNCeEIsSUFBYyxDQUE3Q3dCLFNBQVMsRUFBRUMsZUFBZSxHQUFLekIsSUFBYyxDQUFsQ3lCLGVBQWU7SUFDbEMsTUFBTTs7d0ZBRUhsQixrREFBSTs7Z0dBQ0ZtQixDQUFLO2tDQUFDLENBQVE7Ozs7OztnR0FDZEMsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBQyxDQUF1Qzs7Ozs7Ozs7Ozs7O3dGQUdwRS9CLG9EQUFNO2dCQUFDZ0MsQ0FBQyxFQUFFLENBQUM7O2dHQUNUL0Isd0RBQVU7d0JBQ1RnQyxJQUFJLEVBQUVQLFNBQVMsS0FBSyxDQUFPLHFGQUFJckIsaURBQUssbUhBQU9DLGtEQUFNO3dCQUNqRDRCLE9BQU8sRUFBQyxDQUFNO3dCQUNkQyxJQUFJLEVBQUMsQ0FBSTt3QkFDVEMsU0FBUyxFQUFDLENBQVU7d0JBQ3BCQyxPQUFPLEVBQUVWLGVBQWU7Ozs7OztnR0FFekI1QixxREFBTzt3QkFDTnVDLEVBQUUsRUFBQyxDQUFHO3dCQUNOQyxVQUFVLEVBQUMsQ0FBVzt3QkFDdEJKLElBQUksRUFBQyxDQUFJO3dCQUNUSyxVQUFVLEVBQUMsQ0FBeUM7d0JBQ3BEQyxNQUFNLEVBQUMsQ0FBTTtrQ0FDZCxDQUVEOzs7Ozs7Z0dBQ0N0Qyw0REFBUTt3QkFBQ1csS0FBSyxFQUFFQSxLQUFLO3dCQUFFSCxPQUFPLEVBQUVBLE9BQU87Ozs7OztnR0FDdkNQLDJEQUFPO3dCQUFDYyxPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FBSWpDLENBQUM7R0F6RHVCUixJQUFJOztRQTJCYVIsMERBQVk7OztLQTNCN0JRLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkaW5nLCBWU3RhY2ssIEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuLi9jb21wb25lbnRzL0FkZFRvZG9cIjtcbmltcG9ydCB7IEZhU3VuLCBGYU1vb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaW5pdFRvZG8gPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBib2R5OiBcIkgzbGxvXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBKU09OLnBhcnNlXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICB9LCBbdG9kb3NdKTtcblxuICBmdW5jdGlvbiBkbHRUb2RvKGlkKSB7XG4gICAgY29uc3QgbmV3VG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgIHJldHVybiB0b2RvLmlkICE9PSBpZDtcbiAgICB9KTtcbiAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb2RvKHRvZG8pIHtcbiAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHRvZG9dKTtcbiAgfVxuXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+V2hhdFRvZG88L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuXG4gICAgPC9IZWFkPlxuICAgICAgPFZTdGFjayBwPXs0fT5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBpY29uPXtjb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IDxGYVN1biAvPiA6IDxGYU1vb24gLz59XG4gICAgICAgICAgaXNSb3VuZD1cInRydWVcIlxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgYWxpZ25TZWxmPVwiZmxleC1lbmRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICBtYj1cIjhcIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCJleHRyYWJvbGRcIlxuICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgYmdHcmFkaWVudD1cImxpbmVhcih0by1yLHBpbmsuNTAwLHBpbmsuNDAwLGJsdWUuNTAwKVwiXG4gICAgICAgICAgYmdDbGlwPVwidGV4dFwiXG4gICAgICAgID5cbiAgICAgICAgICBXaGF0IFRvIERvXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXt0b2Rvc30gZGx0VG9kbz17ZGx0VG9kb30gLz5cbiAgICAgICAgPEFkZFRvZG8gYWRkVG9kbz17YWRkVG9kb30gLz5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJWU3RhY2siLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwiVG9kb0xpc3QiLCJBZGRUb2RvIiwiRmFTdW4iLCJGYU1vb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJIb21lIiwiZGx0VG9kbyIsImlkIiwibmV3VG9kb3MiLCJ0b2RvcyIsImZpbHRlciIsInRvZG8iLCJzZXRUb2RvcyIsImFkZFRvZG8iLCJpbml0VG9kbyIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwIiwiaWNvbiIsImlzUm91bmQiLCJzaXplIiwiYWxpZ25TZWxmIiwib25DbGljayIsIm1iIiwiZm9udFdlaWdodCIsImJnR3JhZGllbnQiLCJiZ0NsaXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});