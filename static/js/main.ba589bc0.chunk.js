(this.webpackJsonpfishv3=this.webpackJsonpfishv3||[]).push([[0],[,,,function(e,a,t){e.exports={container:"variable_container__3EWWl",variableHeader:"variable_variableHeader__2pAym",variableName:"variable_variableName__jHux3",navButton:"variable_navButton__EZb03",basicVarInfo:"variable_basicVarInfo__2r_9F",spaceHolderOne:"variable_spaceHolderOne__36Hk6",basicInfo:"variable_basicInfo__98ud1",timeInfo:"variable_timeInfo__1gf3P",dailyTime:"variable_dailyTime___RWfC",dailyYScale:"variable_dailyYScale__nvv-7",dailyXScale:"variable_dailyXScale__3d-vc",yearlyTime:"variable_yearlyTime__iDu5k",castHistory:"variable_castHistory__2QACu",monthXScale:"variable_monthXScale__2-adZ",month:"variable_month__28BLP"}},,,function(e,a,t){e.exports={menuContainer:"mainMenu_menuContainer__yFvJS",fishingDashboard:"mainMenu_fishingDashboard__2BceL",fullScreenFishingDash:"mainMenu_fullScreenFishingDash__1u1nb",sessionDashboard:"mainMenu_sessionDashboard__1l3eJ",fullScreenSessionDash:"mainMenu_fullScreenSessionDash__5oW4B",extraStats:"mainMenu_extraStats__3w3f6",dashboardExtender:"mainMenu_dashboardExtender__3InqX",optionButtons:"mainMenu_optionButtons__1_ptS",buttonContainer:"mainMenu_buttonContainer__1Nt4W",buttonInfoHeader:"mainMenu_buttonInfoHeader__1fsiR",buttonInfo:"mainMenu_buttonInfo__1DqPi",buttonInfoContainer:"mainMenu_buttonInfoContainer__38ymi",button:"mainMenu_button__3viG9"}},,,,,function(e,a,t){e.exports={container:"lakeStats_container__3WcWD",button:"lakeStats_button__D8avZ",lakeInfoContainer:"lakeStats_lakeInfoContainer__Gvd9x",infoHeader:"lakeStats_infoHeader__3obKq",infoBody:"lakeStats_infoBody__kMOQ9",timeData:"lakeStats_timeData__31wxm",buttonContainer:"lakeStats_buttonContainer__Yv6mk",buttonContainerFullScreen:"lakeStats_buttonContainerFullScreen__1wBHJ"}},,,,,,function(e,a,t){e.exports={container:"sessionDash_container__2oq5U",buttonContainer:"sessionDash_buttonContainer__1pNzQ",button:"sessionDash_button__li4O_"}},function(e,a,t){e.exports={container:"variableManager_container__2rlTw",card:"variableManager_card__178uL",variableHeader:"variableManager_variableHeader__qL6EA",variableBody:"variableManager_variableBody__1C7Zg",buttons:"variableManager_buttons__SuBT1",button:"variableManager_button__10S6n",variable:"variableManager_variable__3fGX-"}},,,,function(e,a,t){e.exports={infoHeader:"variableManagement_infoHeader__1w-wh",infoBody:"variableManagement_infoBody__1yTVH",variableSelectors:"variableManagement_variableSelectors__2-L3T"}},,,function(e,a,t){e.exports={container:"lakeAccordion_container__2swJ5",lakeItem:"lakeAccordion_lakeItem__3MmoZ"}},function(e,a,t){e.exports={container:"extraLakeStats_container__3Q667",buttonContainer:"extraLakeStats_buttonContainer__1b93u",button:"extraLakeStats_button__2vl7o"}},,,,function(e,a,t){e.exports={navContainer:"nav_navContainer__2VmMG",logo:"nav_logo__YKx8G"}},,,function(e,a,t){e.exports={header:"stats_header__5ozD7"}},function(e,a,t){e.exports={container:"timeGraph_container__2TSxV",hour:"timeGraph_hour__iYVbE"}},function(e,a,t){e.exports={container:"dayGraph_container__CLhgI",day:"dayGraph_day__2EewO"}},,,,,,function(e,a,t){e.exports={App:"app_App__3IZMC"}},,,,,,function(e,a,t){e.exports=t(59)},,,,,function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(20),l=t.n(r),i=(t(52),t(38)),c=t(23),o=t(39),m=t(40),d=t(46),u=t(45),v=t(41),b=t.n(v),h=t(30),f=t.n(h),_=t(9);var E=function(e){return s.a.createElement("div",{className:f.a.navContainer},s.a.createElement(_.b,{className:f.a.logo,to:"/fishv3/"},"Fincounter"))},k=t(4),p=t(13),y=t(6),N=t.n(y),S=t(25),I=t.n(S),x=t(21),g=t(16);var C=function(e){return s.a.createElement("div",{className:I.a.container},s.a.createElement(x.a,{className:I.a.accordian},e.lakes.map((function(a,t){return s.a.createElement(g.a,{style:{backgroundColor:t===e.currentIndex?"rgb(0,123,255)":"white",color:t===e.currentIndex?"white":"black"},onClick:function(){e.selectLake(t)},className:I.a.lakeItem},a.name)})),s.a.createElement(g.a,{className:I.a.lakeItem,onClick:function(){var a=prompt("Enter the new lakes name:");a&&e.addLake(a)}},"New Lake")))},V=t(11),H=t.n(V),M=t(5);var w=function(e){var a=Object(n.useState)(!1),t=Object(p.a)(a,2),r=t[0],l=t[1];return r?s.a.createElement(k.a,{to:"/fishv3/variable"}):s.a.createElement("div",{className:H.a.container},null===e.lakeIndex?s.a.createElement("div",null,"Select a lake to fish"):s.a.createElement("div",{className:H.a.container}," ",s.a.createElement("div",{className:H.a.lakeInfoContainer},s.a.createElement("div",{className:H.a.infoHeader},e.lakes[e.lakeIndex].name),s.a.createElement("div",{className:H.a.infoBody},"Catches: ",e.lakes[e.lakeIndex].lakes[0].catches," "),s.a.createElement("div",{className:H.a.infoBody},"Casts: ",e.lakes[e.lakeIndex].lakes[0].castIndexes.length),s.a.createElement("div",{className:H.a.infoBody},"Time Fished:"," ",e.mSToReadable(e.lakes[e.lakeIndex].lakes[0].duration)," "),s.a.createElement("div",{className:H.a.infoBody},"Biggest Catch: "),s.a.createElement("div",{className:H.a.timeData},"to do")),e.isFullScreen?null:s.a.createElement("div",{className:H.a.buttonContainer}," ",s.a.createElement(M.a,{className:H.a.button,variant:"info",onClick:function(){var a,t;a="lakes",t=e.lakeIndex,e.setCurrentVariable(a,t),l(!0)}},"Lake"),s.a.createElement(M.a,{className:H.a.button,variant:"success",onClick:function(){e.fishLake()}},"Fish"))))},T=t(17),F=t.n(T);var D=function(e){return e.currentSession?s.a.createElement("div",{className:F.a.container},e.lakes[e.lakeIndex].name):s.a.createElement("div",{className:F.a.container},s.a.createElement("div",{className:F.a.lakeName},e.lakes[e.lakeIndex].name),s.a.createElement("div",null,"best bait style etc here"),s.a.createElement("div",null,"store coordinates of lake"),s.a.createElement("div",null,"look up temps"),s.a.createElement("div",{className:F.a.buttonContainer},s.a.createElement(M.a,{variant:"secondary",className:F.a.button,onClick:e.resetIsFishing},"back"),s.a.createElement(M.a,{variant:"success",className:F.a.button},"Start session")))},B=t(26),O=t.n(B);var L=function(e){var a=Object(n.useState)(!1),t=Object(p.a)(a,2),r=t[0],l=t[1];return r?s.a.createElement(k.a,{to:"/fishv3/variable"}):s.a.createElement("div",{className:O.a.container},s.a.createElement("div",null,"More stats"),null!==e.lakeIndex?s.a.createElement("div",{className:O.a.buttonContainer},s.a.createElement(M.a,{className:O.a.button,variant:"info",onClick:function(){var a;a=e.lakes[e.lakeIndex],e.setCurrentVariable(a),l(!0)}},"Lake"),s.a.createElement(M.a,{className:O.a.button,variant:"success",onClick:function(){e.fishLake()}},"Fish")):null)};var j=function(e){var a=Object(n.useState)(null),t=Object(p.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(!1),c=Object(p.a)(i,2),o=c[0],m=c[1],d=Object(n.useState)(!1),u=Object(p.a)(d,2),v=u[0],b=u[1],h=function(e){m(!0)};return s.a.createElement("div",{className:N.a.menuContainer}," ",o?s.a.createElement("div",{className:v?N.a.fullScreenSessionDash:N.a.sessionDashboard},s.a.createElement(D,{isFullScreen:v,lakes:e.lakes,lakeIndex:r,resetIsFishing:function(){m(!1),l(null)}})," "):s.a.createElement("div",{className:v?N.a.fullScreenFishingDash:N.a.fishingDashboard},s.a.createElement(C,{className:N.a.lakeAccordion,lakes:e.lakes,selectLake:function(e){l(e)},currentIndex:r,addLake:e.addLake}),s.a.createElement(w,{className:N.a.lakeStats,isFullScreen:v,lakes:e.lakes,lakeIndex:r,fishLake:h,mSToReadable:e.mSToReadable,setCurrentVariable:e.setCurrentVariable})),v&&!o?s.a.createElement("div",{className:N.a.extraStats},s.a.createElement(L,{lakes:e.lakes,lakeIndex:r,fishLake:h,setCurrentVariable:e.setCurrentVariable})):null,s.a.createElement("div",{className:N.a.dashboardExtender,onClick:function(){return b(!v)}},v?"Exit full screen":"Full screen"),v?null:s.a.createElement("div",{className:N.a.optionButtons},s.a.createElement("div",{className:N.a.buttonContainer},s.a.createElement("div",{className:N.a.buttonInfoContainer},s.a.createElement("div",{className:N.a.buttonInfoHeader},"Manage user variables"),s.a.createElement("div",{className:N.a.buttonInfo},"look up, edit and create new lakes/baits..")),s.a.createElement(_.b,{to:"/fishv3/manage"},s.a.createElement(M.a,{className:N.a.button}," "))),s.a.createElement("div",{className:N.a.buttonContainer},s.a.createElement("div",{className:N.a.buttonInfoContainer},s.a.createElement("div",{className:N.a.buttonInfoHeader},"Stats"),s.a.createElement("div",{className:N.a.buttonInfo},"use stats to find the best variables for your session")),s.a.createElement(_.b,{to:"/fishv3/stats"},s.a.createElement(M.a,{className:N.a.button}," ")))))},P=t(22),A=t.n(P),R=t(44),W=t(18),G=t.n(W);var J=function(e){var a=Object(n.useState)(!1),t=Object(p.a)(a,2),r=t[0],l=t[1];return r?s.a.createElement(k.a,{to:"/fishv3/variable"}," "):s.a.createElement("div",{className:G.a.container},s.a.createElement(x.a,null,e.variables.map((function(a,t){return s.a.createElement(g.a,null,s.a.createElement(x.a.Toggle,{as:g.a.Header,eventKey:t},s.a.createElement("div",{className:G.a.variableHeader,onClick:function(){!function(a){e.setCurrentVariable(a),l(!0)}(t)}},s.a.createElement("div",null,a.name),s.a.createElement("div",{className:G.a.buttons},s.a.createElement(M.a,{className:G.a.button,variant:"secondary",onClick:function(a){!function(a,t){e.editVarName(t),a.stopPropagation()}(a,t)}},s.a.createElement("div",null,"\u270e")),s.a.createElement(M.a,{className:G.a.button,variant:"danger",onClick:function(a){!function(a){e.deleteVar(),a.stopPropagation()}(a)}},"\u2716")))))})),s.a.createElement(x.a.Toggle,{as:g.a.Header,style:{backgroundColor:"lightGray"},eventKey:"0"},s.a.createElement("div",{className:G.a.variableHeader,onClick:function(){!function(){var a=prompt("New variable:");a&&e.addVariable(a)}()}},"Add variable"))))};var X=function(e){var a=Object(n.useState)("lakes"),t=Object(p.a)(a,2),r=t[0],l=t[1],i=function(a){e.editVarName(r,a)},c=function(a){e.setCurrentVariable(r,a)};return s.a.createElement("div",{className:A.a.container},s.a.createElement("div",{className:A.a.managementInfo},s.a.createElement("div",{className:A.a.infoHeader},"My variables"),s.a.createElement("div",{className:A.a.infoBody},"you keep the casts when deleting variables")),s.a.createElement(R.a,{className:A.a.variableSelectors},s.a.createElement(M.a,{variant:"lakes"===r?"success":"primary",onClick:function(){l("lakes")}},"Lakes"),s.a.createElement(M.a,{variant:"baits"===r?"success":"primary",onClick:function(){l("baits")}},"Baits"),s.a.createElement(M.a,{variant:"styles"===r?"success":"primary",onClick:function(){l("styles")}},"Styles"),s.a.createElement(M.a,{variant:"species"===r?"success":"primary",onClick:function(){l("species")}},"Species")),"baits"===r?s.a.createElement(J,{variables:e.baits,addVariable:e.addBait,setCurrentVariable:c,editVarName:i,deleteVar:e.deleteVar}):"styles"===r?s.a.createElement(J,{variables:e.styles,addVariable:e.addStyle,setCurrentVariable:c,editVarName:i,deleteVar:e.deleteVar}):"species"===r?s.a.createElement(J,{variables:e.species,addVariable:e.addSpecies,setCurrentVariable:c,editVarName:i,deleteVar:e.deleteVar}):s.a.createElement(J,{variables:e.lakes,addVariable:e.addLakes,setCurrentVariable:c,editVarName:i,deleteVar:e.deleteVar}),s.a.createElement(_.b,{to:"/fishv3/"},s.a.createElement(M.a,{variant:"primary",block:!0},"back")))},Y=(t(58),t(33)),Z=t.n(Y);var q=function(e){var a=[0,0,0,0],t=[0,0,0,0],n=[0,0,0,0];return e.castHistory.map((function(e,s){a[e.species]+=1,t[e.bait]+=1,n[e.style]+=1})),s.a.createElement("div",{className:Z.a.container},s.a.createElement("div",{className:Z.a.header},"Stats & Tools"),a.map((function(a,t){return s.a.createElement("div",null,e.species[t].name,": ",a)})),t.map((function(a,t){return s.a.createElement("div",null,e.baits[t].name,": ",a)})),n.map((function(a,t){return s.a.createElement("div",null,e.styles[t].name,": ",a)})))},K=t(3),Q=t.n(K),z=t(34),U=t.n(z);var $=function(e){return s.a.createElement("div",{className:U.a.container},e.times.map((function(e,a){return s.a.createElement("div",{className:U.a.hour},s.a.createElement("div",{style:{height:"".concat(e.durationFished/60/e.catches<25?"".concat(e.durationFished/60/e.catches*4,"%"):"100%"),width:"".concat(3.75,"vw"),backgroundColor:"gray"}}),s.a.createElement("div",{style:{height:"".concat(e.durationFished/60/e.catches<25?"".concat(4*(25-e.durationFished/60/e.catches),"%"):"0%"),width:"".concat(3.75,"vw"),backgroundColor:"green"}}))})))},ee=t(35),ae=t.n(ee);var te=function(e){return s.a.createElement("div",{className:ae.a.container},e.days.map((function(e,a){return s.a.createElement("div",{className:ae.a.day},s.a.createElement("div",{style:{height:"".concat(e.durationFished/60/e.catches<25?"".concat(e.durationFished/60/e.catches*4,"%"):"100%"),width:"".concat(90/366,"vw"),backgroundColor:"gray"}}),s.a.createElement("div",{style:{height:"".concat(e.durationFished/60/e.catches<25?"".concat(4*(25-e.durationFished/60/e.catches),"%"):"0%"),width:"".concat(90/366,"vw"),backgroundColor:"green"}}))})))};var ne=function(e){console.log(e.variable);for(var a=[],t=0;t<24;t++)a.push({catches:0,durationFished:0});for(var n=[],r=0;r<372;r++)n.push({catches:0,durationFished:0});if(!e.variable.variableType)return s.a.createElement(k.a,{to:"/fishv3/manage"});var l="lakes"===e.variable.variableType?e.lakes[e.variable.variableIndex].lakes[0]:e[e.variable.variableType][e.variable.variableIndex];return void 0===l.castIndexes?s.a.createElement(k.a,{to:"/fishv3/manage"}," "):(l.castIndexes.map((function(t,s){var r=e.mSToDate(e.castHistory[t].reelInTime),l=e.castHistory[t].duration/6e4,i=new Date;i.setMilliseconds(r);var c=i.getHours(),o=i.getMinutes(),m=i.getDate(),d=i.getMonth();e.castHistory[t].catch&&(a[c].catches+=1,n[31*d+m-1].catches+=1);var u=o;a[c].durationFished+=u;for(var v=1,b=l-u;b>0;v++)b>59?(b-=60,a[(c+24-v)%24].durationFished+=60):(a[(c+24-v)%24].durationFished+=b,b-=b);n[31*d+m-1].durationFished+=l})),n.splice(59,3),n.splice(120,1),n.splice(181,1),n.splice(273,1),n.splice(334,1),s.a.createElement("div",{className:Q.a.container},s.a.createElement("div",{className:Q.a.variableHeader},s.a.createElement("div",{className:Q.a.navButton,onClick:e.prevVar},"\u2190"),s.a.createElement("div",{className:Q.a.variableName},l.name),s.a.createElement("div",{className:Q.a.navButton,onClick:e.nextVar},"\u2192")),s.a.createElement("div",{className:Q.a.basicVarInfo},s.a.createElement("div",{className:Q.a.spaceHolderOne}),s.a.createElement("div",{className:Q.a.basicInfo},s.a.createElement("div",null,"Catches: ",l.catches),s.a.createElement("div",null,"Time cast: ",e.mSToReadable(l.duration)),s.a.createElement("div",null,"Casts: ",l.castIndexes.length),s.a.createElement("div",null))),s.a.createElement("div",{className:Q.a.timeInfo},s.a.createElement("div",null,s.a.createElement("div",{className:Q.a.dailyTime},s.a.createElement("div",{className:Q.a.dailyYScale},s.a.createElement("div",null,"0h"),s.a.createElement("div",null,"5h"),s.a.createElement("div",null,"10h"),s.a.createElement("div",null,"15h"),s.a.createElement("div",null,"20h+")),s.a.createElement($,{times:a})),s.a.createElement("div",{className:Q.a.dailyXScale},a.map((function(e,a){return s.a.createElement("div",{style:{width:"".concat(3.75,"vw"),textAlign:"center"}},a)})))),s.a.createElement("div",null,s.a.createElement("div",{className:Q.a.yearlyTime},s.a.createElement("div",{className:Q.a.dailyYScale},s.a.createElement("div",null,"0h"),s.a.createElement("div",null,"5h"),s.a.createElement("div",null,"10h"),s.a.createElement("div",null,"15h"),s.a.createElement("div",null,"20h+")),s.a.createElement(te,{days:n})),s.a.createElement("div",{className:Q.a.monthXScale},s.a.createElement("div",{className:Q.a.month},"J"),s.a.createElement("div",{className:Q.a.month},"F"),s.a.createElement("div",{className:Q.a.month},"M"),s.a.createElement("div",{className:Q.a.month},"A"),s.a.createElement("div",{className:Q.a.month},"M"),s.a.createElement("div",{className:Q.a.month}," J"),s.a.createElement("div",{className:Q.a.month},"J"),s.a.createElement("div",{className:Q.a.month},"A"),s.a.createElement("div",{className:Q.a.month},"S"),s.a.createElement("div",{className:Q.a.month},"O"),s.a.createElement("div",{className:Q.a.month},"N"),s.a.createElement("div",{className:Q.a.month},"D")))),s.a.createElement("div",{className:Q.a.castHistory})))};var se=function(e){console.log("hello world");for(var a={},t=[{name:"Holton",lakes:[{name:"Holton",castIndexes:[],duration:0,catches:0,fish:[30,20,10,40]}]},{name:"Alderby",lakes:[{name:"Alderby",castIndexes:[],duration:0,catches:0,fish:[10,60,10,20]}]},{name:"Henstead",lakes:[{name:"Henstead",castIndexes:[],duration:0,catches:0,fish:[40,40,0,20]}]},{name:"Wisset",lakes:[{name:"Wisset",castIndexes:[],duration:0,catches:0,fish:[30,30,10,30]}]}],n=[{name:"Carp",castIndexes:[],stylePref:[.3,.6,0,.8],baitPref:[.6,.5,.4,0]},{name:"Roach",castIndexes:[],stylePref:[.8,.2,.1,.3],baitPref:[.6,.8,.2,0]},{name:"Pike",castIndexes:[],stylePref:[.4,.4,.8,.6],baitPref:[.3,.5,0,.8]},{name:"Perch",castIndexes:[],stylePref:[.3,.3,.7,.4],baitPref:[.4,.5,.4,.8]}],s=[{name:"Sweetcorn",castIndexes:[],duration:0,catches:0},{name:"Maggots",castIndexes:[],duration:0,catches:0},{name:"Bread",castIndexes:[],duration:0,catches:0},{name:"Lure",castIndexes:[],duration:0,catches:0}],r=[{name:"Float",castIndexes:[],duration:0,catches:0},{name:"Ledger",castIndexes:[],duration:0,catches:0},{name:"Spin",castIndexes:[],duration:0,catches:0},{name:"Feeder",castIndexes:[],duration:0,catches:0}],l=[],i=function(e){return Math.floor(Math.random()*Math.floor(e))},c=0;c<e;c++){var o=i(t.length),m=i(s.length),d=i(r.length),u=Date.now()-i(315576e5),v=i(2e7)+4e4,b=u-v,h=new Date;h.setMilliseconds(b);var f=0,_=0;f=((f=Math.abs(h.getHours()-12))+1)/6,_=Math.abs(h.getMonth()-7);var E=0;i((_+=1)*f)<1&&(E=1);for(var k=i(100),p=0,y=0;y<t[o].lakes[0].fish.length;y++){var N=t[o].lakes[0].fish[y];if(k<=(N+=p)){k=y;break}p=N}(n[k].baitPref[m]+n[k].stylePref[d])/2<.5&&(E=0,k=null),l.push({catch:E,castTime:u,reelInTime:b,duration:v,lake:o,bait:m,style:d,species:k}),t[o].lakes[0].castIndexes.push(c),s[m].castIndexes.push(c),r[d].castIndexes.push(c),E&&n[k].castIndexes.push(c),t[o].lakes[0].duration+=v,t[o].lakes[0].catches+=E,s[m].duration+=v,s[m].catches+=E,r[d].duration+=v,r[d].catches+=E}return a.castHistory=l,a.lakes=t,a.baits=s,a.styles=r,a.species=n,a},re=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).addLake=function(e){var a=Object(c.a)(n.state.lakes),t={name:e,lakes:[{name:e,castIndexes:[]}]};a.push(t),n.setState({lakes:a})},n.addBait=function(e){var a=Object(c.a)(n.state.baits),t={name:e,castIndexes:[]};a.push(t),n.setState({baits:a})},n.addStyle=function(e){var a=Object(c.a)(n.state.styles),t={name:e,castIndexes:[]};a.push(t),n.setState({styles:a})},n.addSpecies=function(e){var a=Object(c.a)(n.state.species),t={name:e,castIndexes:[]};a.push(t),n.setState({species:a})},n.editVarName=function(e,a){var t=prompt("New name:","".concat(n.state[e][a].name));if(t){var s=Object(c.a)(n.state[e]);s[a].name=t,n.setState(Object(i.a)({},e,s))}},n.deleteVar=function(e,a){alert("no work!")},n.setCurrentVariable=function(e,a){n.setState({currentVariable:{variableType:e,variableIndex:a}})},n.nextVar=function(){var e=n.state.currentVariable;e.variableIndex===n.state[e.variableType].length-1?e.variableIndex=0:e.variableIndex++,n.setState({currentVariable:e})},n.prevVar=function(){var e=n.state.currentVariable;0===e.variableIndex?e.variableIndex=n.state[e.variableType].length-1:e.variableIndex--,n.setState({currentVariable:e})},n.mSToReadable=function(e){var a=e/1e3%60,t=a.toFixed(),n=(e/1e3-a)/60%60,s=((e/1e3-a)/60-n)/60;return"".concat(s<10?"0".concat(s):s,":").concat(n<10?"0".concat(n):n,":").concat(t<10?"0".concat(t):t)},n.mSToDate=function(e){var a=new Date;return a.setTime(e),a},n.state={lakes:[],baits:[],styles:[],species:[],castHistory:[],currentVariable:["lakes",0]},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=se(1e5);console.log(e),this.setState({lakes:e.lakes,baits:e.baits,styles:e.styles,species:e.species,castHistory:e.castHistory})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:b.a.app},s.a.createElement(_.a,null,s.a.createElement(E,null),s.a.createElement(k.d,null,s.a.createElement(k.b,{path:"/fishv3/",exact:!0,render:function(a){return s.a.createElement(j,{lakes:e.state.lakes,addLake:e.addLake,setCurrentVariable:e.setCurrentVariable,mSToReadable:e.mSToReadable})}})),s.a.createElement(k.d,null,s.a.createElement(k.b,{path:"/fishv3/manage",render:function(a){return s.a.createElement(X,{lakes:e.state.lakes,baits:e.state.baits,styles:e.state.styles,species:e.state.species,addLake:e.addLake,addBait:e.addBait,addStyle:e.addStyle,addSpecies:e.addSpecies,setCurrentVariable:e.setCurrentVariable,editVarName:e.editVarName,deleteVar:e.deleteVar,mSToReadable:e.mSToReadable})}})),s.a.createElement(k.d,null,s.a.createElement(k.b,{path:"/fishv3/stats",render:function(a){return s.a.createElement(q,{lakes:e.state.lakes,baits:e.state.baits,styles:e.state.styles,species:e.state.species,castHistory:e.state.castHistory})}})),s.a.createElement(k.d,null,s.a.createElement(k.b,{path:"/fishv3/variable",render:function(a){return s.a.createElement(ne,{lakes:e.state.lakes,baits:e.state.baits,styles:e.state.styles,species:e.state.species,castHistory:e.state.castHistory,variable:e.state.currentVariable,nextVar:e.nextVar,prevVar:e.prevVar,mSToReadable:e.mSToReadable,mSToDate:e.mSToDate})}}))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.ba589bc0.chunk.js.map