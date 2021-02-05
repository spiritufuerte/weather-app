(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(3),c=n.n(a),s=n(18),u=n.n(s),o=(n(25),n(26),n(2)),i=n.n(o),l=n(4),p=n(8),h=(n(27),n(6)),d=n.n(h);function j(e){return new Promise((function(t,n){var r="city/".concat(e),a=localStorage.getItem(r);a?t(JSON.parse(a)):d.a.fromAddress(e).then((function(e){var n=e.results[0].geometry.location;localStorage.setItem(r,JSON.stringify(n)),t(n)}),(function(e){console.error(e),n(e)}))}))}function f(e,t){return new Promise((function(n,r){var a="coordinate/".concat(e,",").concat(t),c=localStorage.getItem(a);c?n(c):d.a.fromLatLng(e,t).then((function(e){var t=e.results[0].address_components[3].short_name;localStorage.setItem(a,t),n(t)}),(function(e){console.error(e),r(e)}))}))}d.a.setApiKey("AIzaSyCGzMDw4iq6loLNXllX9mIHyQdlP1kz-pg");var m=function(e){var t=e.handleSearch,n=Object(a.useRef)(null),c=function(){var e=Object(l.a)(i.a.mark((function e(r){var a,c,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r&&r.preventDefault(),a=n.current.value,e.next=4,j(a);case 4:c=e.sent,s=c.lat,u=c.lng,t({city:a,lat:s,lng:u});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition(function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t.coords.latitude,t.coords.longitude);case 2:return n.current.value=e.sent,e.next=5,c(null);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(r.jsx)("form",{className:"form",onSubmit:c,children:Object(r.jsx)("div",{className:"input_wrapper",children:Object(r.jsx)("input",{type:"text",placeholder:"Search location",ref:n})})})},b=n(19),x=n.n(b).a.create({baseURL:"https://api.openweathermap.org/data/2.5"}),w=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a,c,s,u,o,l,p,h,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.lat,r=t.lng,a="weather/".concat(n,",").concat(r),!(c=localStorage.getItem(a))){e.next=8;break}return(s=JSON.parse(c)).currentSunrise=new Date(s.currentSunrise),s.currentSunset=new Date(s.currentSunset),e.abrupt("return",s);case 8:return e.next=10,x.get("/onecall",{params:{lat:n,lon:r,exclude:["hourly","alerts"],units:"metric",appid:"5c2e7db91be800dca337ae2f4990971f"}});case 10:return u=e.sent,o=u.data.current,l=u.data.daily[0],p=o.weather[0].icon,h=o.weather[0].description,d={currentClouds:o.clouds,currentSunrise:new Date(1e3*o.sunrise),currentSunset:new Date(1e3*o.sunset),currentTemp:o.temp,tMin:l.temp.min,tMax:l.temp.max,weatherDescription:h,weatherIcon:p},localStorage.setItem(a,JSON.stringify(d)),e.abrupt("return",d);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(5),O=n.n(g),S=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],s=t[1],u=Object(a.useState)({currentTemp:0,tMax:null,tMin:null,currentSunset:new Date,currentSunrise:new Date,currentClouds:0,weatherIcon:"",weatherDescription:""}),o=Object(p.a)(u,2),h=o[0],d=o[1],j=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.city,r=t.lng,a=t.lat,e.next=3,w({lng:r,lat:a});case 3:c=e.sent,d(c),s(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var f=function(e){return e.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}(new Date),b="http://openweathermap.org/img/wn/".concat(h.weatherIcon,"@2x.png");return Object(r.jsxs)("div",{className:O.a.main,children:[Object(r.jsx)(m,{handleSearch:j}),Object(r.jsx)("div",{className:O.a.info,children:h.tMax?Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsxs)("div",{className:O.a.location,children:[Object(r.jsx)("h1",{children:n}),Object(r.jsx)("h2",{children:f}),Object(r.jsx)("img",{src:b,alt:"condition"}),Object(r.jsxs)("p",{children:["Weather condition: ",h.weatherDescription]})]}),Object(r.jsxs)("div",{className:O.a.weather_wrapper,children:[Object(r.jsxs)("p",{children:["Temperature now: ",h.currentTemp," \xb0C"]}),Object(r.jsxs)("p",{children:["Min temperature today: ",h.tMin," \xb0C"]}),Object(r.jsxs)("p",{children:["Max temperature today: ",h.tMax," \xb0C"]}),Object(r.jsxs)("p",{children:["Sunset: ",h.currentSunset.getHours(),":",h.currentSunset.getMinutes()]}),Object(r.jsxs)("p",{children:["Sunrise: ",h.currentSunrise.getHours(),":",h.currentSunrise.getMinutes()]}),Object(r.jsxs)("p",{children:["Clouds: ",h.currentClouds,"%"]})]})]}):Object(r.jsx)("h1",{children:" Wait"})})]})};var v=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(S,{})})};u.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))},5:function(e,t,n){e.exports={main:"Weather_main__30e43",info:"Weather_info__23i87",location:"Weather_location__Wic-L",weather_wrapper:"Weather_weather_wrapper__xFaSS"}}},[[46,1,2]]]);
//# sourceMappingURL=main.b66ef206.chunk.js.map