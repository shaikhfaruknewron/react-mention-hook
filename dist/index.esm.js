import e,{useState as t,useCallback as n,useRef as r,useEffect as o}from"react";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}var l=function(e){var r=a(t(""),2),o=r[0],i=r[1],c=a(t([]),2),l=c[0],s=c[1],m=a(t(!1),2),f=m[0],d=m[1],v=a(t([]),2),g=v[0],h=v[1],y=a(t(-1),2),p=y[0],S=y[1],b=n((function(t,n){i(t);var r=t.slice(0,n).split(/\s/),o=r[r.length-1];if(o.startsWith("@")){d(!0),S(n-o.length);var a=o.slice(1),u=e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));s(u)}else d(!1)}),[e]),w=n((function(e){var t=o.slice(0,p),n=o.slice(p+e.name.length),r="".concat(t).concat(e.name," ").concat(n);return h((function(t){return[].concat(u(t),[e])})),i(r),d(!1),{newText:r,newCursorPosition:p+e.name.length+1}}),[o,p]),E=n((function(e){var t=o.replace(e.name,"").replace(/\s+/g," ").trim();return i(t),h((function(t){return t.filter((function(t){return t.id!==e.id}))})),t}),[o]);return{editorState:o,setEditorState:i,mentionSuggestions:l,showTooltip:f,mentionedUsers:g,handleInputChange:b,handleSelectMention:w,removeMention:E}},s=function(t){var n=t.suggestions,i=t.onChange,a=t.onSend,u=r(null),c=r(null),s=l(n),m=s.editorState;s.setEditorState;var f=s.mentionSuggestions,d=s.showTooltip,v=s.mentionedUsers,g=s.handleInputChange,h=s.handleSelectMention,y=s.removeMention;o((function(){var e=function(e){!c.current||c.current.contains(e.target)||u.current.contains(e.target)||setShowTooltip(!1)};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[]);return e.createElement("div",{className:"mention-editor"},v.length>0&&e.createElement("div",{className:"mentioned-users"},v.map((function(t){return e.createElement("span",{key:t.id,className:"mention-tag"},"@",t.name,e.createElement("button",{onClick:function(){return e=y(t),void i(e);var e}},"×"))}))),e.createElement("div",{className:"editor-container"},e.createElement("textarea",{ref:u,value:m,onChange:function(e){var t=e.target.value,n=e.target.selectionStart;g(t,n),i(t)},placeholder:"Type @ to mention..."}),d&&e.createElement("div",{ref:c,className:"mention-suggestions"},f.map((function(t){return e.createElement("div",{key:t.id,onClick:function(){return e=h(t),n=e.newText,r=e.newCursorPosition,i(n),void setTimeout((function(){u.current.setSelectionRange(r,r),u.current.focus()}),0);var e,n,r},className:"suggestion-item"},t.name)})))),e.createElement("button",{onClick:function(){return a(m)}},"Send"))};export{s as MentionEditor,l as useMention};
