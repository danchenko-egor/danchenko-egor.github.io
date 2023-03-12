(function(){"use strict";const e=e=>{let t=e;const o=()=>t,n=e=>{t=e};return{get:o,set:n}};var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.Env");const n=e=>e.dispatch("ResizeEditor"),s=e=>t=>t.options.get(e),i=e=>{const t=e.options.register;t("autoresize_overflow_padding",{processor:"number",default:1}),t("autoresize_bottom_margin",{processor:"number",default:50})},r=s("min_height"),l=s("max_height"),a=s("autoresize_overflow_padding"),c=s("autoresize_bottom_margin"),g=e=>e.plugins.fullscreen&&e.plugins.fullscreen.isFullscreen(),u=(e,t)=>{const o=e.getBody();o&&(o.style.overflowY=t?"":"hidden",t||(o.scrollTop=0))},d=(e,t,o,n)=>{var s;const i=parseInt(null!==(s=e.getStyle(t,o,n))&&void 0!==s?s:"",10);return isNaN(i)?0:i},f=e=>{if("setcontent"===(null===e||void 0===e?void 0:e.type.toLowerCase())){const t=e;return!0===t.selection||!0===t.paste}return!1},m=(e,t,s)=>{var i;const a=e.dom,p=e.getDoc();if(!p)return;if(g(e))return void u(e,!0);const h=p.documentElement,v=c(e),y=null!==(i=r(e))&&void 0!==i?i:e.getElement().offsetHeight;let C=y;const S=d(a,h,"margin-top",!0),z=d(a,h,"margin-bottom",!0);let _=h.offsetHeight+S+z+v;_<0&&(_=0);const b=e.getContainer().offsetHeight,w=e.getContentAreaContainer().offsetHeight,E=b-w;_+E>y&&(C=_+E);const H=l(e);if(H&&C>H?(C=H,u(e,!0)):u(e,!1),C!==t.get()){const i=C-t.get();if(a.setStyle(e.getContainer(),"height",C+"px"),t.set(C),n(e),o.browser.isSafari()&&(o.os.isMacOS()||o.os.isiOS())){const t=e.getWin();t.scrollTo(t.pageXOffset,t.pageYOffset)}e.hasFocus()&&f(s)&&e.selection.scrollIntoView(),(o.browser.isSafari()||o.browser.isChromium())&&i<0&&m(e,t,s)}},p=(e,t)=>{e.on("init",(()=>{const t=a(e),o=e.dom;o.setStyles(e.getDoc().documentElement,{height:"auto"}),o.setStyles(e.getBody(),{paddingLeft:t,paddingRight:t,"min-height":0})})),e.on("NodeChange SetContent keyup FullscreenStateChanged ResizeContent",(o=>{m(e,t,o)}))},h=(e,t)=>{e.addCommand("mceAutoResize",(()=>{m(e,t)}))};var v=()=>{t.add("autoresize",(t=>{if(i(t),t.options.isSet("resize")||t.options.set("resize",!1),!t.inline){const o=e(0);h(t,o),p(t,o)}}))};v()})();