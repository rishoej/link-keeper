webpackHotUpdate(0,{

/***/ 307:
/***/ (function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.submitCreateLink = submitCreateLink;\nexports.deleteLink = deleteLink;\nfunction submitCreateLink(link, title, description) {\n  return function (dispatch) {\n    dispatch({\n      type: 'CLEAR_LINKS'\n    });\n    return fetch('/link', {\n      method: 'post',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({\n        link: link,\n        title: title,\n        description: description\n      })\n    }).then(function (response) {\n      if (response.ok) {\n        return response.json().then(function (json) {\n          dispatch({\n            type: 'LINKS_FORM_SUCCESS',\n            messages: [json]\n          });\n        });\n      } else {\n        return response.json().then(function (json) {\n          dispatch({\n            type: 'LINKS_FORM_FAILURE',\n            messages: Array.isArray(json) ? json : [json]\n          });\n        });\n      }\n    });\n  };\n}\nfunction deleteLink(id, callback) {\n  return fetch('/link', {\n    method: 'delete',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({\n      id: id\n    })\n  }).then(function (response) {\n    return callback();\n  });\n}\n/*return (dispatch) => {\r\n  dispatch({\r\n    type: 'CLEAR_LINKS'\r\n  });\r\n  return fetch('/link', {\r\n    method: 'delete',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: JSON.stringify({\r\n      id: id,\r\n    })\r\n  }).then((response) => {\r\n    if (response.ok) {\r\n      return response.json().then((json) => {\r\n        dispatch({\r\n          type: 'LINKS_FORM_SUCCESS',\r\n          messages: [json]\r\n        });\r\n      });\r\n    } else {\r\n      return response.json().then((json) => {\r\n        dispatch({\r\n          type: 'LINKS_FORM_FAILURE',\r\n          messages: Array.isArray(json) ? json : [json]\r\n        });\r\n      });\r\n    }\r\n  });\r\n};*///# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL2xpbmtzLmpzP2ZmMTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdENyZWF0ZUxpbmsobGluaywgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQ0xFQVJfTElOS1MnXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmZXRjaCgnL2xpbmsnLCB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxyXG4gICAgICB9KVxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMSU5LU19GT1JNX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogW2pzb25dXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xJTktTX0ZPUk1fRkFJTFVSRScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBBcnJheS5pc0FycmF5KGpzb24pID8ganNvbiA6IFtqc29uXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpbmsoaWQsIGNhbGxiYWNrKSB7XHJcbiAgcmV0dXJuIGZldGNoKCcvbGluaycsIHtcclxuICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgIH0pXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT5cclxuICAgICAgY2FsbGJhY2soKVxyXG4gICAgKTtcclxufVxyXG4gIC8qcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQ0xFQVJfTElOS1MnXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmZXRjaCgnL2xpbmsnLCB7XHJcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICB9KVxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMSU5LU19GT1JNX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogW2pzb25dXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xJTktTX0ZPUk1fRkFJTFVSRScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBBcnJheS5pc0FycmF5KGpzb24pID8ganNvbiA6IFtqc29uXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07Ki9cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hY3Rpb25zL2xpbmtzLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBZ0NBO0FBaENBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})