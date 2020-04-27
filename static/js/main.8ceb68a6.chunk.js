(this.webpackJsonpexp=this.webpackJsonpexp||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(72),d=a(73),p=a(84),m=a(83),f=a(74),v=a.n(f),h=a(224),b=a(228),E=a(225),y=a(226),x=a(13),_=a.n(x),g=a(32),j=a.n(g),w=a(33),C=a.n(w),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:C()(_.a.card,_.a.infected)},r.a.createElement(E.a,null,r.a.createElement(y.a,{gutterBottom:!0,color:"textSecondary"},"Infected"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(j.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of active cases of covid-19"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:C()(_.a.card,_.a.recovered)},r.a.createElement(E.a,null,r.a.createElement(y.a,{gutterBottom:!0,color:"textSecondary"},"Recovered"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(j.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of recovered cases of covid-19"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:C()(_.a.card,_.a.deaths)},r.a.createElement(E.a,null,r.a.createElement(y.a,{gutterBottom:!0,color:"textSecondary"},"Death"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(j.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of deaths of covid-19"))))):"Loading..."},k=a(31),S=a(34),D=a.n(S),N="https://covid19.mathdro.id/api",I=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?"".concat(N,"/countries/").concat(t):N,e.prev=1,e.next=4,D.a.get(a);case 4:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(45),M=a(80),P=a.n(M),z=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(k.a)(l,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=p[0]&&r.a.createElement(A.b,{data:{labels:p.map((function(e){return e.reportDate})),datasets:[{data:p.map((function(e){return e.confirmed.total})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths.total})),label:"Deaths",borderColor:"red",backgroundColor:"red",fill:!0}]}}),v=p[0]&&r.a.createElement(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["blue","green","red"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}});return r.a.createElement("div",{className:P.a.container},u?v:f)},G=a(229),H=a(227),J=a(81),Q=a.n(J),R=function(e){var t=e.handleCountry,a=Object(n.useState)([]),c=Object(k.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(G.a,{className:Q.a.formControl},r.a.createElement(H.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))},q=a(82),L=a.n(q),V=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.countryHandler=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:v.a.container},r.a.createElement("img",{src:L.a}),r.a.createElement(O,{data:t}),r.a.createElement(R,{handleCountry:this.countryHandler}),r.a.createElement(z,{data:t,country:a}))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))},74:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},80:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.8ceb68a6.chunk.js.map