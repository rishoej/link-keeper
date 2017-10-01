webpackHotUpdate(0,{

/***/ 307:
/***/ (function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.submitCreateLink = submitCreateLink;\nexports.deleteLink = deleteLink;\nfunction submitCreateLink(link, title, description) {\n  return function (dispatch) {\n    dispatch({\n      type: 'CLEAR_LINKS'\n    });\n    return fetch('/link', {\n      method: 'post',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({\n        link: link,\n        title: title,\n        description: description\n      })\n    }).then(function (response) {\n      if (response.ok) {\n        return response.json().then(function (json) {\n          dispatch({\n            type: 'LINKS_FORM_SUCCESS',\n            messages: [json]\n          });\n        });\n      } else {\n        return response.json().then(function (json) {\n          dispatch({\n            type: 'LINKS_FORM_FAILURE',\n            messages: Array.isArray(json) ? json : [json]\n          });\n        });\n      }\n    });\n  };\n}\nfunction deleteLink(link, title, description) {\n  return function (dispatch) {\n    dispatch({\n      type: 'CLEAR_LINKS'\n    });\n    return fetch('/link', {\n      method: 'delete',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({\n        link: link,\n        title: title,\n        description: description\n      })\n    }).then(function (response) {\n      if (response.ok) {\n        return response.json().then(function (json) {\n          dispatch({\n            type: 'LINKS_FORM_SUCCESS',\n            messages: [json]\n          });\n        });\n      } else {\n        return response.json().then(function (json) {\n          dispatch({\n            type: 'LINKS_FORM_FAILURE',\n            messages: Array.isArray(json) ? json : [json]\n          });\n        });\n      }\n    });\n  };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL2xpbmtzLmpzP2ZmMTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdENyZWF0ZUxpbmsobGluaywgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQ0xFQVJfTElOS1MnXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmZXRjaCgnL2xpbmsnLCB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxyXG4gICAgICB9KVxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMSU5LU19GT1JNX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogW2pzb25dXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xJTktTX0ZPUk1fRkFJTFVSRScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBBcnJheS5pc0FycmF5KGpzb24pID8ganNvbiA6IFtqc29uXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpbmsobGluaywgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQ0xFQVJfTElOS1MnXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmZXRjaCgnL2xpbmsnLCB7XHJcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbGluazogbGluayxcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgIH0pXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ0xJTktTX0ZPUk1fU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbanNvbl1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnTElOS1NfRk9STV9GQUlMVVJFJyxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IEFycmF5LmlzQXJyYXkoanNvbikgPyBqc29uIDogW2pzb25dXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2FjdGlvbnMvbGlua3MuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFnQ0E7QUFoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})