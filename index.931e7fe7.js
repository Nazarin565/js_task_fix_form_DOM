document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label"),r=e.getAttribute("name");t.setAttribute("for",e.id),t.className="field-label",t.textContent="".concat(r),e.parentNode.insertBefore(t,e),e.setAttribute("placeholder",r.slice(0,1).toUpperCase()+r.slice(1))});
//# sourceMappingURL=index.931e7fe7.js.map
