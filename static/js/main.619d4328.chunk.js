(this["webpackJsonpcovid-19-nsw"]=this["webpackJsonpcovid-19-nsw"]||[]).push([[0],{411:function(e,a,t){e.exports=t(880)},416:function(e,a,t){},759:function(e,a,t){},879:function(e,a,t){},880:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(79),c=t.n(r),o=(t(416),t(383)),m=t.n(o),u=t(891),i=t(80),d=t(164),s=t.n(d),h=[["March 1, 2020",2,6,0],["March 2, 2020",3,9,0],["March 3, 2020",6,15,0],["March 4, 2020",7,22,1],["March 5, 2020",8,25,0],["March 6, 2020",3,28,0],["March 7, 2020",8,36,0],["March 8, 2020",4,40,1],["March 9, 2020",7,47,0],["March 10, 2020",14,61,0],["March 11, 2020",4,65,0]],E=[["March 7, 2020 09:00:00",34,545,6217,6796],["March 7, 2020 21:00:00",36,488,6690,7214],["March 8, 2020 09:00:00",38,488,6690,7216],["March 8, 2020 21:00:00",40,576,7361,7977],["March 9, 2020 16:32:00",47,476,7848,8371],["March 10, 2020 07:00:00",55,618,8361,9034],["March 10, 2020 21:00:00",61,1008,9096,10165],["March 11, 2020 13:00:00",65,1004,9152,10221]],p=h[h.length-1][1],f=h[h.length-1][2],w=h.map((function(e){return e[3]})).reduce((function(e,a){return e+a})),v=Object(i.a)(E[E.length-1],5),y=(v[0],v[1],v[2]),g=v[3],b=v[4],C=f-w-4;function M(e){return.25874*e*e+2.76783*e+3.6727}for(var D=[],k=0;k<h.length;k++){var x=h[k][0],N=M(k+1);D.push([x,N])}D.push(["March 12, 2020",M(12)]),D.push(["March 13, 2020",M(13)]),D.push(["March 14, 2020",M(14)]);for(var T={totalConfirmed:f,remain:C,today:p,death:w,recovered:4,wip:y,excluded:g,totalTested:b},I={todayData:h.map((function(e){var a=Object(i.a)(e,2),t=a[0],n=a[1];return[new Date(t),n]})),totalData:h.map((function(e){var a=Object(i.a)(e,3),t=a[0],n=(a[1],a[2]);return[new Date(t),n]})),predictData:D.map((function(e){var a=Object(i.a)(e,2),t=a[0],n=a[1];return[new Date(t),Math.round(n)]})),deathData:h.map((function(e){var a=Object(i.a)(e,4),t=a[0],n=(a[1],a[2],a[3]);return[new Date(t),n]}))},S=function(e){return{legend:{show:!0,selected:{total:!0,"predicted total":!1,"new cases on the day":!0}},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value"},series:[{type:"line",name:"total",data:e.totalData},{type:"line",name:"predicted total",data:e.predictData,smooth:!1,itemStyle:{normal:{lineStyle:{width:2,type:"dotted"}}}},{type:"bar",name:"new cases on the day",data:e.todayData}]}},j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{option:S(I)}))},F=[],H=[],W=[],A=[],O=0;O<E.length;O++){var R=E[O],J=new Date(R[0]);F.push([J,R[1]]),H.push([J,R[2]]),W.push([J,R[3]]),A.push([J,R[4]])}var _={totalConfirmed:F,wip:H,excluded:W,totalTested:A},B=function(e){return{legend:{show:!0},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value",axisLabel:{formatter:function(e){return e>=1e3?"".concat(e/1e3,"k"):e}}},series:[{type:"line",name:"total confirmed",data:e.totalConfirmed},{type:"line",name:"under investigation",data:e.wip},{type:"line",name:"tested and excluded",data:e.excluded},{type:"line",name:"total tested",data:e.totalTested}]}},Z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{option:B(_)}))},U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"ui small header"},"Trending:"),l.a.createElement(u.a,{columns:"equal",stackable:!0},l.a.createElement(u.a.Column,null,l.a.createElement(j,null)),l.a.createElement(u.a.Column,null,l.a.createElement(Z,null))))},V=t(890),Y=t(888),q=(t(759),function(){var e=T.totalConfirmed,a=T.remain,t=T.recovered,n=T.death,r=T.wip,c=T.excluded,o=T.totalTested;return l.a.createElement("div",{className:"summary"},l.a.createElement("h2",{className:"ui small header"},"Summary data:"),l.a.createElement(u.a,{columns:4},l.a.createElement(u.a.Column,null,l.a.createElement(V.a,{color:"blue",label:"Remain",value:a})),l.a.createElement(u.a.Column,null,l.a.createElement(V.a,{label:"Total",value:e})),l.a.createElement(u.a.Column,null,l.a.createElement(V.a,{color:"grey",label:"Death",value:n})),l.a.createElement(u.a.Column,null,l.a.createElement(V.a,{color:"green",label:"Recover",value:t}))),l.a.createElement(Y.a,{unstackable:!0,compact:!0},l.a.createElement(Y.a.Body,null,l.a.createElement(Y.a.Row,null,l.a.createElement(Y.a.Cell,null,"Cases under investigation"),l.a.createElement(Y.a.Cell,null,r)),l.a.createElement(Y.a.Row,null,l.a.createElement(Y.a.Cell,null,"Cases tested and excluded"),l.a.createElement(Y.a.Cell,null,c))),l.a.createElement(Y.a.Footer,null,l.a.createElement(Y.a.Row,null,l.a.createElement(Y.a.HeaderCell,null,"Total tested"),l.a.createElement(Y.a.HeaderCell,null,o)))))}),L=t(387),P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"ui small header"},"Confirmed cases details(best view on desktop):"),l.a.createElement(L.a,{className:"airtable-embed",url:"https://airtable.com/embed/shr289gFl44ZlCYnC?backgroundColor=teal",frameborder:"0",onmousewheel:"",width:"100%",height:"500"}))},$=t(886),z=t(892),G=t(889),K=function(){return l.a.createElement($.a,{trigger:l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Joanna and her friends")},l.a.createElement($.a.Header,null,"Team and Thanks"),l.a.createElement($.a.Content,null,l.a.createElement($.a.Description,null,l.a.createElement(z.a,null,"Team member"),l.a.createElement(G.a,{bulleted:!0},l.a.createElement(G.a.Item,null,l.a.createElement("a",{href:"https://wileam.com/"},"Joanna Wu"),": design and develop the website, update the data."),l.a.createElement(G.a.Item,null,l.a.createElement("a",{href:"https://ngot.me/"},"Henry Zhuang"),": devops and update the data"),l.a.createElement(G.a.Item,null,"Ivan(Yifan) Fu: developer, add regression prediction functionality"),l.a.createElement(G.a.Item,null,l.a.createElement("a",{href:"https://www.sydneytoday.com/"},"Sydney Today"),": media, provide updated data from NSW Health"),l.a.createElement(G.a.Item,null,"Nan Zhang, update and analysis the data.")),l.a.createElement(z.a,null,"Thanks to"),l.a.createElement(G.a,{bulleted:!0},l.a.createElement(G.a.Item,null,l.a.createElement("a",{href:"https://www.echartsjs.com/"},"echarts")),l.a.createElement(G.a.Item,null,l.a.createElement("a",{href:"https://airtable.com/"},"airtable"))))))},Q=function(){return l.a.createElement($.a,{trigger:l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"contribute?")},l.a.createElement($.a.Header,null,"Help needed!"),l.a.createElement($.a.Content,null,l.a.createElement($.a.Description,null,l.a.createElement("p",null,"Now as there is no api provided, all the data are manually updated."),l.a.createElement("p",null,"We need more people to keep the data updated!! Please join telegram"," ","",l.a.createElement("a",{href:"https://t.me/covid_19_au"},"@covid_19_au")," if you wanna help, what we need is simply: when you saw data updated, notify in the group with the source link, thank you!"))))},X=function(){return l.a.createElement("p",null,l.a.createElement("small",null,"Made by ",l.a.createElement(K,null),", ",l.a.createElement(Q,null)))},ee=t(885),ae=(t(878),t(879),{url:"https://covid-19.wileam.com/",identifier:"covid-19-wileam-com",title:"CoVid-19 Updates - NSW"});var te=function(){return l.a.createElement("div",{className:"ui container"},l.a.createElement("header",null,l.a.createElement("h1",{className:"ui header"},"CoVid-19 Updates - NSW"),l.a.createElement("small",{className:"ui small"},"Site updated: ","March 11, 2020 21:52:31"," AEDT")),l.a.createElement(q,null),l.a.createElement(ee.a,null),l.a.createElement(U,null),l.a.createElement(ee.a,null),l.a.createElement(P,null),l.a.createElement(m.a.DiscussionEmbed,{shortname:"covid-19-wileam-com",config:ae}),l.a.createElement("footer",null,l.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[411,1,2]]]);
//# sourceMappingURL=main.619d4328.chunk.js.map