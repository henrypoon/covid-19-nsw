(this["webpackJsonpcovid-19-nsw"]=this["webpackJsonpcovid-19-nsw"]||[]).push([[0],{423:function(e,a,t){e.exports=t(920)},428:function(e,a,t){},771:function(e,a,t){},919:function(e,a,t){},920:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(83),o=t.n(l),m=(t(428),t(391)),i=t.n(m),d=t(931),c=t(100),u=t.n(c),s=[{date:"Mar 01, 2020",todayNewNumber:2,totalConfirmedNumber:6},{date:"Mar 02, 2020",todayNewNumber:3,totalConfirmedNumber:9},{date:"Mar 03, 2020",todayNewNumber:6,totalConfirmedNumber:15},{date:"Mar 04, 2020",todayNewNumber:7,totalConfirmedNumber:22},{date:"Mar 05, 2020",todayNewNumber:3,totalConfirmedNumber:25},{date:"Mar 06, 2020",todayNewNumber:3,totalConfirmedNumber:28},{date:"Mar 07, 2020",todayNewNumber:8,totalConfirmedNumber:36},{date:"Mar 08, 2020",todayNewNumber:4,totalConfirmedNumber:40},{date:"Mar 09, 2020",todayNewNumber:7,totalConfirmedNumber:47},{date:"Mar 10, 2020",todayNewNumber:14,totalConfirmedNumber:61},{date:"Mar 11, 2020",todayNewNumber:4,totalConfirmedNumber:65},{date:"Mar 12, 2020",todayNewNumber:13,totalConfirmedNumber:78},{date:"Mar 13, 2020",todayNewNumber:14,totalConfirmedNumber:92},{date:"Mar 14, 2020",todayNewNumber:20,totalConfirmedNumber:112}],h={todayData:s.map((function(e){var a=e.date,t=e.todayNewNumber;return[new Date(a),t]})),totalData:s.map((function(e){var a=e.date,t=e.totalConfirmedNumber;return[new Date(a),t]})),predictData:[{date:"Mar 01, 2020",predictedTotalConfirmedNumber:11},{date:"Mar 02, 2020",predictedTotalConfirmedNumber:14},{date:"Mar 03, 2020",predictedTotalConfirmedNumber:16},{date:"Mar 04, 2020",predictedTotalConfirmedNumber:19},{date:"Mar 05, 2020",predictedTotalConfirmedNumber:23},{date:"Mar 06, 2020",predictedTotalConfirmedNumber:27},{date:"Mar 07, 2020",predictedTotalConfirmedNumber:33},{date:"Mar 08, 2020",predictedTotalConfirmedNumber:39},{date:"Mar 09, 2020",predictedTotalConfirmedNumber:47},{date:"Mar 10, 2020",predictedTotalConfirmedNumber:56},{date:"Mar 11, 2020",predictedTotalConfirmedNumber:67},{date:"Mar 12, 2020",predictedTotalConfirmedNumber:80},{date:"Mar 13, 2020",predictedTotalConfirmedNumber:95},{date:"Mar 14, 2020",predictedTotalConfirmedNumber:114},{date:"Mar 15, 2020",predictedTotalConfirmedNumber:136},{date:"Mar 16, 2020",predictedTotalConfirmedNumber:162},{date:"Mar 17, 2020",predictedTotalConfirmedNumber:194}].map((function(e){var a=e.date,t=e.predictedTotalConfirmedNumber;return[new Date(a),t]}))},p=function(e){return{legend:{show:!0,selected:{total:!0,"predicted total":!1,"new cases on the day":!0}},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value"},series:[{type:"line",name:"total",data:e.totalData,itemStyle:{normal:{label:{show:!0}}}},{type:"line",name:"predicted total",data:e.predictData,smooth:!1,itemStyle:{normal:{label:{show:!0,position:"right"},lineStyle:{width:2,type:"dotted"}}}},{type:"bar",name:"new cases on the day",data:e.todayData,itemStyle:{normal:{label:{show:!0,position:"top"}}}}]}},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{option:p(h)}))},E=t(411),b=[["March 1, 2020",2,6,0],["March 2, 2020",3,9,0],["March 3, 2020",6,15,0],["March 4, 2020",7,22,1],["March 5, 2020",8,25,0],["March 6, 2020",3,28,0],["March 7, 2020",8,36,0],["March 8, 2020",4,40,1],["March 9, 2020",7,47,0],["March 10, 2020",14,61,0],["March 11, 2020",4,65,0],["March 12, 2020",13,78,0],["March 13, 2020",14,92,0],["March 14, 2020",20,112,0]],w=[["March 7, 2020 09:00:00",34,545,6217,6796],["March 7, 2020 21:00:00",36,488,6690,7214],["March 8, 2020 09:00:00",38,488,6690,7216],["March 8, 2020 21:00:00",40,576,7361,7977],["March 9, 2020 16:32:00",47,476,7848,8371],["March 10, 2020 07:00:00",55,618,8361,9034],["March 10, 2020 21:00:00",61,1008,9096,10165],["March 11, 2020 13:00:00",65,1004,9152,10221],["March 12, 2020 13:00:00",78,1831,11040,12949],["March 13, 2020 11:00:00",92,1928,14665,16685],["March 14, 2020 11:00:00",112,1668,18716,20496]],y=[{name:"overseas",value:51},{name:"contact of confirmed case",value:32},{name:"under investigation",value:18},{name:"not identified",value:11}],N=b[b.length-1][1],C=b[b.length-1][2],M=b.map((function(e){return e[3]})).reduce((function(e,a){return e+a})),g=Object(E.a)(w[w.length-1],5),v=(g[0],g[1],g[2]),D=g[3],T=g[4],k=C-M-4;!function(e,a,t){for(var n=0;n<e.length;n++){var r=e[n][0],l=t(n+1);a.push([r,l])}var o=e.length-1,m=new Date(e[o][0]);m.setDate(m.getDate()+1);var i=new Date(e[o][0]);i.setDate(i.getDate()+2);var d=new Date(e[o][0]);d.setDate(d.getDate()+3),a.push([m.toDateString(),t(e.length+1)]),a.push([i.toDateString(),t(e.length+2)]),a.push([d.toDateString(),t(e.length+3)])}(b,[],(function(e){return 9.465373537*Math.exp(.1776784372*e)}));for(var x={totalConfirmed:C,remain:k,today:N,death:M,recovered:4,wip:v,excluded:D,totalTested:T},S=[],I=[],A=[],F=[],H=0;H<w.length;H++){var W=w[H],R=new Date(W[0]);S.push([R,W[1]]),I.push([R,W[2]]),A.push([R,W[3]]),F.push([R,W[4]])}var J={totalConfirmed:S,wip:I,excluded:A,totalTested:F},_=function(e){return{legend:{show:!0},tooltip:{show:!0},xAxis:{type:"time"},yAxis:{type:"value",axisLabel:{formatter:function(e){return e>=1e3?"".concat(e/1e3,"k"):e}}},series:[{type:"line",name:"total confirmed",data:e.totalConfirmed},{type:"line",name:"under investigation",data:e.wip},{type:"line",name:"tested and excluded",data:e.excluded},{type:"line",name:"total tested",data:e.totalTested}]}},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{option:_(J)}))},B=function(e){return{legend:{orient:"vertical",left:0},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{type:"pie",radius:["50%","70%"],avoidLabelOverlap:!0,left:50,name:"source",data:e,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"12",fontWeight:"bold"}}}}]}},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{option:B(y)}))},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"ui small header"},"Trending:"),r.a.createElement(d.a,{columns:"equal",stackable:!0},r.a.createElement(d.a.Column,null,r.a.createElement(f,null)),r.a.createElement(d.a.Column,null,r.a.createElement(q,null)),r.a.createElement(d.a.Column,null,r.a.createElement(j,null))))},L=t(930),O=t(928),U=112,V=4,Z=2,G=106,K=0,P=(t(771),function(){var e=U,a=V,t=Z,n=G,l=K,o=x.wip,m=x.totalTested,i=x.excluded;return r.a.createElement("div",{className:"summary"},r.a.createElement("h2",{className:"ui small header"},"Summary data:"),r.a.createElement(d.a,{columns:"equal"},r.a.createElement(d.a.Column,null,r.a.createElement(L.a,{color:"blue",label:"Remain",value:n})),r.a.createElement(d.a.Column,null,r.a.createElement(L.a,{label:"Total",value:e})),r.a.createElement(d.a.Column,null,r.a.createElement(L.a,{color:"grey",label:"Death",value:t})),r.a.createElement(d.a.Column,null,r.a.createElement(L.a,{color:"green",label:"Recover",value:a}))),r.a.createElement(O.a,{unstackable:!0,compact:!0},r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Row,{negative:!0},r.a.createElement(O.a.Cell,null,"New cases today"),r.a.createElement(O.a.Cell,null,l)),r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Cell,null,"Cases under investigation"),r.a.createElement(O.a.Cell,null,o)),r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Cell,null,"Cases tested and excluded"),r.a.createElement(O.a.Cell,null,i))),r.a.createElement(O.a.Footer,null,r.a.createElement(O.a.Row,null,r.a.createElement(O.a.HeaderCell,null,"Total tested"),r.a.createElement(O.a.HeaderCell,null,m)))))}),Y=t(395),Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"ui small header"},"Confirmed cases details(best view on desktop):"),r.a.createElement(Y.a,{className:"airtable-embed",url:"https://airtable.com/embed/shra818iBGDdK6MHI?backgroundColor=teal",frameborder:"0",onmousewheel:"",width:"100%",height:"500"}))},X=t(926),$=t(932),ee=t(929),ae=function(){return r.a.createElement(X.a,{trigger:r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Joanna and her friends (Disclaimer)")},r.a.createElement(X.a.Header,null,"Team, Thanks and Disclaimer"),r.a.createElement(X.a.Content,null,r.a.createElement(X.a.Description,null,r.a.createElement($.a,null,"Team member"),r.a.createElement(ee.a,{bulleted:!0},r.a.createElement(ee.a.Item,null,r.a.createElement("a",{href:"https://wileam.com/"},"Joanna Wu"),": design and develop the website, update the data."),r.a.createElement(ee.a.Item,null,r.a.createElement("a",{href:"https://ngot.me/"},"Henry Zhuang"),": devops and update the data"),r.a.createElement(ee.a.Item,null,r.a.createElement("a",{href:"https://ivanfan.net/"},"Ivan(Yifan) Fan"),": developer, add regression prediction functionality"),r.a.createElement(ee.a.Item,null,r.a.createElement("a",{href:"https://www.sydneytoday.com/"},"Sydney Today"),": media, provide updated data from NSW Health"),r.a.createElement(ee.a.Item,null,"Nan Zhang, update and analysis the data.")),r.a.createElement($.a,null,"Thanks to"),r.a.createElement(ee.a,{bulleted:!0},r.a.createElement(ee.a.Item,null,r.a.createElement("a",{href:"https://www.echartsjs.com/"},"echarts")),r.a.createElement(ee.a.Item,null,r.a.createElement("a",{href:"https://airtable.com/"},"airtable"))),r.a.createElement($.a,null,"Disclaimer"),r.a.createElement(ee.a,{bulleted:!0},r.a.createElement(ee.a.Item,null,"The views and options expressed in this blog are those of the authors and do not necessarily reflect the official policy or position of any other agency, organization, employer or company"),r.a.createElement(ee.a.Item,null,'Authors are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information'),r.a.createElement(ee.a.Item,null,"We do not make any warranties about the completeness, reliability and accuracy of these information. None of the authors, contributors, adminstrators or anyone else connected with this website, in anyway whatsoever, can be responsible for your use of the information contained in or linked from these web pages. Any action you take upon the information on this website is strictly at your own risk. and we will not be liable for any losses and damages in connection with the use of our website.")))))},te=function(){return r.a.createElement(X.a,{trigger:r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"contribute?")},r.a.createElement(X.a.Header,null,"Help needed!"),r.a.createElement(X.a.Content,null,r.a.createElement(X.a.Description,null,r.a.createElement("p",null,"Now as there is no api provided, all the data are manually updated."),r.a.createElement("p",null,"We need more people to keep the data updated!! Please join telegram"," ","",r.a.createElement("a",{href:"https://t.me/covid_19_au"},"@covid_19_au")," if you wanna help, what we need is simply: when you saw data updated, notify in the group with the source link, thank you!"))))},ne=function(){return r.a.createElement("p",null,r.a.createElement("small",null,"Made by ",r.a.createElement(ae,null),", ",r.a.createElement(te,null)))},re=t(934),le=t(242),oe=function(){var e="https://covid-19.wileam.com";return r.a.createElement(re.a,re.a.onlyComputer,r.a.createElement("p",{style:{textAlign:"right"}},"Share the page:",r.a.createElement(le.Facebook,{link:e}),r.a.createElement(le.Twitter,{link:e})))},me=t(925),ie=(t(918),t(919),{url:"https://covid-19.wileam.com/",identifier:"covid-19-wileam-com",title:"CoVid-19 Updates - NSW"});var de=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("header",null,r.a.createElement("h1",{className:"ui header"},"CoVid-19 Updates - NSW"),r.a.createElement("small",{className:"ui small"},"Site updated: ","March 15, 2020 02:16:24"," AEDT")),r.a.createElement(oe,null),r.a.createElement(P,null),r.a.createElement(me.a,null),r.a.createElement(z,null),r.a.createElement(me.a,null),r.a.createElement(Q,null),r.a.createElement(i.a.DiscussionEmbed,{shortname:"covid-19-wileam-com",config:ie}),r.a.createElement("footer",null,r.a.createElement(ne,null)))};o.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[423,1,2]]]);