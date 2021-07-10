(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{20:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c.n(s),a=c(14),n=c.n(a),o=(c(20),c(15)),r=c(3),l=c(5),d=c.n(l),j=c(0),u=function(e){return Object(j.jsx)("div",{className:"weather-display",children:function(){var t=[];switch(e.data.main){case"Sunny":case"Clear":t.push(Object(j.jsx)("div",{class:"icon sunny",children:Object(j.jsx)("div",{class:"sun",children:Object(j.jsx)("div",{class:"rays"})})}));break;case"Thunderstorm":t.push(Object(j.jsxs)("div",{class:"icon thunder-storm",children:[Object(j.jsx)("div",{class:"cloud"}),Object(j.jsxs)("div",{class:"lightning",children:[Object(j.jsx)("div",{class:"bolt"}),Object(j.jsx)("div",{class:"bolt"})]})]}));break;case"Rain":case"Drizzle":t.push(Object(j.jsxs)("div",{class:"icon rainy",children:[Object(j.jsx)("div",{class:"cloud"}),Object(j.jsx)("div",{class:"rain"})]}));break;case"Snow":t.push(Object(j.jsxs)("div",{class:"icon flurries",children:[Object(j.jsx)("div",{class:"cloud"}),Object(j.jsxs)("div",{class:"snow",children:[Object(j.jsx)("div",{class:"flake"}),Object(j.jsx)("div",{class:"flake"})]})]}));break;case"initial":t.push(Object(j.jsxs)("div",{class:"icon sun-shower",children:[Object(j.jsx)("div",{class:"cloud"}),Object(j.jsx)("div",{class:"sun",children:Object(j.jsx)("div",{class:"rays"})}),Object(j.jsx)("div",{class:"rain"})]}));break;default:t.push(Object(j.jsxs)("div",{class:"icon cloudy",children:[Object(j.jsx)("div",{class:"cloud"}),Object(j.jsx)("div",{class:"cloud"})]}))}return t}()})},h=(c(40),function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)("default"),n=Object(r.a)(a,2),l=n[0],h=n[1],b=Object(s.useState)(!1),v=Object(r.a)(b,2),O=v[0],p=v[1],x=Object(s.useState)(!1),f=Object(r.a)(x,2),m=f[0],g=f[1],w=Object(s.useState)(""),y=Object(r.a)(w,2),k=y[0],N=y[1],C="b7759e9875ae91e00ca69cd66bc660ac",S={Haze:"Hazy outside, perhaps it wouldn't be the worst idea to carry an umbrella",Sunny:"The sun is out, birds are chirping. What a lovely day to be alive",Rain:"Yes, it is raining ! Don't wake the old man up",Drizzle:"Light drizzle, could get heavy could stop, who knows ? This is a free app lower your expectations",Thunderstorm:"Fuckin hell, There's a storm coming Mr. Wayne ! Get inside & lock the doors",Snow:"Its snowing outside ! Time to make some snow angles",Clear:"Clear outside, nothing special to report about",Clouds:"The Clouds are out, but are they rain clouds ? It's a secret"};Object(s.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){i(e.coords)}),(function(e){i("Failed")})):i("NoSupport")}),[]);var z=function(e){g(e),p(!1),h("default"),N("")},T=function(){if("done"==l&&!m)return h("default"),void p(null);h("fetching");var e=new Promise((function(e){setTimeout((function(){e(123)}),[2e3])})),t=m?d.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(k,"&appid=").concat(C)):d.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(c.latitude,"&lon=").concat(c.longitude,"&appid=").concat(C));Promise.all([e,t]).then((function(e){var t=e[1].data;p(Object(o.a)({},t.weather[0])),h("done")})).catch((function(){h("default")}))};return Object(j.jsxs)("div",{className:"weather-app",children:[Object(j.jsx)("div",{className:"location-based",children:c?"NoSupport"==c?Object(j.jsx)("div",{className:"description",children:"Device does not support location"}):"Failed"==c?Object(j.jsx)("div",{className:"description",children:"Could not fetch device location. Kindly review device settings or use the search by city option"}):Object(j.jsxs)("div",{children:["done"==l?Object(j.jsx)(u,{data:O}):Object(j.jsx)(u,{data:{main:"initial"}}),Object(j.jsx)("div",{className:"fetch-button",onClick:T,children:"default"==l?"Is It Raining Outside ?":"done"==l?"Reset":Object(j.jsx)("i",{className:"fa fa-circle-o-notch fa-spin"})}),"done"!=l?Object(j.jsx)("div",{className:"description",children:"Hit the button above and find out whats the weather outside like"}):Object(j.jsx)("div",{className:"description",children:S[O.main]?S[O.main]:S.Clear})]}):Object(j.jsxs)("div",{className:"description",children:["Fetching Device Location",Object(j.jsx)("div",{className:"large-icon",children:Object(j.jsx)("i",{className:"fa fa-circle-o-notch fa-spin"})})]})}),Object(j.jsx)("div",{className:"city-based ".concat(m?"open":""),children:m?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"cross-icon",onClick:function(){return z(!1)},children:"x"}),Object(j.jsx)("input",{onChange:function(e){N(e.target.value)},value:k,className:"input-field",placeholder:"City Name"}),Object(j.jsx)("div",{className:"fetch-button",onClick:T,children:"default"==l||"done"==l?"Search":Object(j.jsx)("i",{className:"fa fa-circle-o-notch fa-spin"})}),"done"==l?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{data:O}),Object(j.jsx)("div",{className:"description",children:O.main})]}):null]}):Object(j.jsx)("div",{className:"fetch-button",onClick:function(){z(!0)},children:"Search By City"})}),m&&Object(j.jsx)("div",{className:"overlay",onClick:function(){return z(!1)}})]})}),b=function(){return Object(j.jsx)(h,{})};"serviceWorker"in navigator&&navigator.serviceWorker.register("/is-it-raining-outside/service-worker.js",{scope:"/is-it-raining-outside/"}).then((function(e){console.log("Service Worker Registered",e)})).catch((function(e){console.log("Registration Failed",e)})),n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bc701e87.chunk.js.map