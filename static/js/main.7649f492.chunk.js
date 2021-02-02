(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{25:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(3),c=r(18),s=r.n(c),u=(r(25),r(26),r(2)),o=r.n(u),i=r(4),l=r(8),p=(r(27),r(6)),h=r.n(p);function d(e){return new Promise((function(t,r){var n="city/".concat(e),a=localStorage.getItem(n);a?t(JSON.parse(a)):h.a.fromAddress(e).then((function(e){var r=e.results[0].geometry.location;localStorage.setItem(n,JSON.stringify(r)),t(r)}),(function(e){console.error(e),r(e)}))}))}function f(e,t){return new Promise((function(r,n){var a="coordinate/".concat(e,",").concat(t),c=localStorage.getItem(a);c?r(c):h.a.fromLatLng(e,t).then((function(e){var t=e.results[0].address_components[3].short_name;localStorage.setItem(a,t),r(t)}),(function(e){console.error(e),n(e)}))}))}h.a.setApiKey("AIzaSyCGzMDw4iq6loLNXllX9mIHyQdlP1kz-pg");var j=function(e){var t=e.handleSearch,r=Object(a.useRef)(null),c=function(){var e=Object(i.a)(o.a.mark((function e(n){var a,c,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n.preventDefault(),a=r.current.value,e.next=4,d(a);case 4:c=e.sent,s=c.lat,u=c.lng,t({city:a,lat:s,lng:u});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition(function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t.coords.latitude,t.coords.longitude);case 2:return r.current.value=e.sent,e.next=5,c(null);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(n.jsx)("form",{className:"form",onSubmit:c,children:Object(n.jsx)("div",{className:"input_wrapper",children:Object(n.jsx)("input",{type:"text",placeholder:"Search location",ref:r})})})},m=r(19),b=r.n(m).a.create({baseURL:"https://api.openweathermap.org/data/2.5"}),w=function(){var e=Object(i.a)(o.a.mark((function e(t){var r,n,a,c,s,u,i,l,p,h,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.lat,n=t.lng,a="weather/".concat(r,",").concat(n),!(c=localStorage.getItem(a))){e.next=8;break}return(s=JSON.parse(c)).currentSunrise=new Date(s.currentSunrise),s.currentSunset=new Date(s.currentSunset),e.abrupt("return",s);case 8:return e.next=10,b.get("/onecall",{params:{lat:r,lon:n,exclude:["hourly","alerts"],units:"metric",appid:"5c2e7db91be800dca337ae2f4990971f"}});case 10:return u=e.sent,i=u.data.current,l=u.data.daily[0],p=i.weather[0].icon,h=i.weather[0].description,d={currentClouds:i.clouds,currentSunrise:new Date(1e3*i.sunrise),currentSunset:new Date(1e3*i.sunset),currentTemp:i.temp,tMin:l.temp.min,tMax:l.temp.max,weatherDescription:h,weatherIcon:p},localStorage.setItem(a,JSON.stringify(d)),e.abrupt("return",d);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=r(5),g=r.n(x),O=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)({currentTemp:0,tMax:0,tMin:0,currentSunset:new Date,currentSunrise:new Date,currentClouds:0,weatherIcon:"",weatherDescription:""}),u=Object(l.a)(s,2),p=u[0],h=u[1],d=function(){var e=Object(i.a)(o.a.mark((function e(t){var r,n,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.city,n=t.lng,a=t.lat,e.next=3,w({lng:n,lat:a});case 3:s=e.sent,h(s),c(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var f=function(e){return e.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}(new Date),m="http://openweathermap.org/img/wn/".concat(p.weatherIcon,"@2x.png");return Object(n.jsxs)("div",{className:g.a.main,children:[Object(n.jsx)(j,{handleSearch:d}),Object(n.jsxs)("div",{className:g.a.info,children:[Object(n.jsxs)("div",{className:g.a.location,children:[Object(n.jsx)("h1",{children:r}),Object(n.jsx)("h2",{children:f}),Object(n.jsx)("img",{src:m}),Object(n.jsxs)("p",{children:["Weather condition: ",p.weatherDescription]})]}),Object(n.jsxs)("div",{className:g.a.weather_wrapper,children:[Object(n.jsxs)("p",{children:["Temperature now: ",p.currentTemp," \xb0C"]}),Object(n.jsxs)("p",{children:["Min temperature today: ",p.tMin," \xb0C"]}),Object(n.jsxs)("p",{children:["Max temperature today: ",p.tMax," \xb0C"]}),Object(n.jsxs)("p",{children:["Sunset: ",p.currentSunset.getHours(),":",p.currentSunset.getMinutes()]}),Object(n.jsxs)("p",{children:["Sunrise: ",p.currentSunrise.getHours(),":",p.currentSunrise.getMinutes()]}),Object(n.jsxs)("p",{children:["Clouds: ",p.currentClouds,"%"]})]})]})]})};var v=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(O,{})})};s.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))},5:function(e,t,r){e.exports={main:"Weather_main__NSguF",info:"Weather_info__2SvvV",location:"Weather_location__16PT4",weather_wrapper:"Weather_weather_wrapper__c0XW9"}}},[[46,1,2]]]);
//# sourceMappingURL=main.7649f492.chunk.js.map