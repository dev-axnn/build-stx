(function(){"use strict";var t={3427:function(t,a,n){var e=n(9242),s=n(3396);const o={class:"wrap"};function r(t,a,n,e,r,c){const i=(0,s.up)("ModalV"),l=(0,s.up)("Header"),u=(0,s.up)("Visual"),d=(0,s.up)("WorkPart"),f=(0,s.up)("News"),h=(0,s.up)("CS"),v=(0,s.up)("About"),p=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i),(0,s._)("div",o,[(0,s.Wm)(l),(0,s.Wm)(u),(0,s.Wm)(d),(0,s.Wm)(f),(0,s.Wm)(h),(0,s.Wm)(v),(0,s.Wm)(p)])])}const c={class:"modal-wrap"},i=(0,s.uE)('<div class="modal-main" data-v-5898c8a7><span class="modal-logo" data-v-5898c8a7></span><p class="modal-notice" data-v-5898c8a7> 해당 사이트는 <strong data-v-5898c8a7>스터디용</strong>으로 제작되었으며,<br data-v-5898c8a7> 리소스는 <strong data-v-5898c8a7>원저작자</strong>에게 있음을 알려드립니다.<br data-v-5898c8a7> 문제사항이 있을 시 연락주시면 빠른 시일 내 조치하겠습니다.<br data-v-5898c8a7><span data-v-5898c8a7>본 사이트는 Chrome 에 최적화되어 있습니다.</span></p><div class="modal-corrections" data-v-5898c8a7><strong data-v-5898c8a7>아래 내용을 수정 및 보충하였습니다.</strong><ul class="clearfix" data-v-5898c8a7><li class="corrections-number" data-v-5898c8a7>(1)</li><li class="corrections-txt" data-v-5898c8a7>파비콘을 제작 및 추가하였습니다.</li></ul></div><div class="modal-close" data-v-5898c8a7> 확인했습니다. <i data-v-5898c8a7>( Enter 하여 닫기 )</i></div></div>',1),l=[i];function u(t,a,n,e,o,r){return(0,s.wg)(),(0,s.iD)("div",c,l)}var d=n(7387),f=n.n(d),h={setup(){return(0,s.bv)((()=>{let t=f()(".modal-wrap"),a=f()(".modal-close");a.click((function(){t.stop().fadeOut(300),f()("html").css("overflow","auto")})),f()("html").keydown((function(a){13==a.keyCode&&(t.stop().fadeOut(200),f()("html").css("overflow","auto"))}));let n=f()(".modal-main");n.click((function(t){t.stopPropagation()})),t.click((function(){t.stop().fadeOut(200),f()("html").css("overflow","auto")}))})),{}}},v=n(89);const p=(0,v.Z)(h,[["render",u],["__scopeId","data-v-5898c8a7"]]);var g=p,b=n(7139);const m={class:"header"},w={class:"inner"},_=(0,s._)("a",{href:"#",class:"logo"},"stx건설",-1),D={class:"gnb"},T={class:"depth1"},k=["href"],x={class:"depth2"},O=["href"],E=(0,s._)("div",{class:"lang"},[(0,s._)("a",{href:"#"},"ENG"),(0,s._)("i",{class:"lang-bar"}),(0,s._)("a",{href:"#",class:"lang-active"},"KOR")],-1);function N(t,a,n,e,o,r){return(0,s.wg)(),(0,s.iD)("header",m,[(0,s._)("div",w,[_,(0,s._)("nav",D,[(0,s._)("ul",T,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.gnbData,((t,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a},[(0,s._)("a",{href:t.mainurl},(0,b.zw)(t.maintxt),9,k),(0,s._)("ul",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.subData,((t,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a},[(0,s._)("a",{href:t.suburl},(0,b.zw)(t.subtxt),9,O)])))),128))])])))),128))])]),E])])}var S=n(65),U={setup(){const t=(0,S.oR)(),a=(0,s.Fl)((()=>t.getters.getGnbData));return t.dispatch("fetchGnb"),(0,s.bv)((()=>{let t=f()(".header"),a=f()(".gnb"),n=a.outerHeight(),e=t.outerHeight();t.css("height",e),a.mouseenter((function(){t.css("height",n)})),a.mouseleave((function(){t.css("height",e)}));let s=f()(".depth1 > li");f().each(s,(function(){f()(this).mouseenter((function(){f()(this).find(">a").addClass("depth1-focus")})),f()(this).mouseleave((function(){f()(this).find(">a").removeClass("depth1-focus")}))}))})),{gnbData:a}}};const y=(0,v.Z)(U,[["render",N]]);var C=y;const A={class:"visual"},W={class:"inner"},P=(0,s._)("h2",{class:"visual-title"},[(0,s.Uk)("BEST OF THE WORLD"),(0,s._)("br"),(0,s.Uk)("STX Engineering & Construction")],-1),X=(0,s.Uk)("세계최고를 향해 STX건설이 힘차게 질주합니다!"),F=(0,s._)("button",{class:"visual-bt"},"아래로 이동",-1);function H(t,a,n,e,o,r){const c=(0,s.up)("P");return(0,s.wg)(),(0,s.iD)("section",A,[(0,s._)("div",W,[P,(0,s.Wm)(c,{class:"visual-txt"},{default:(0,s.w5)((()=>[X])),_:1}),F])])}var j={setup(){return(0,s.bv)((()=>{let t=f()(".visual-bt"),a=f()(".part").offset().top;t.click((function(){f()("html").stop().animate({scrollTop:a},500)}))})),{}}};const Z=(0,v.Z)(j,[["render",H]]);var G=Z;const R={class:"part"},B=(0,s.uE)('<div class="inner"><h2 class="part-title">STX Engineering &amp; Construction Business</h2><p class="part-txt"> STX건설은 건문 역량 강화를 통해 건축, 주택, 토목, 플랜트 사업 영역에서<br> 탁월한 성과를 인정받은 기업으로 자연과 기술의 공간에 인류의 가치를 추구합니다. </p><ul class="part-list clearfix"><li><a href="#"><h3>건축사업</h3></a></li><li><a href="#"><h3>주택사업</h3></a></li><li><a href="#"><h3>토목사업</h3></a></li><li><a href="#"><h3>플랜트/공작기계사업</h3></a></li><li><a href="#"><h3>해외사업</h3></a></li></ul></div>',1),K=[B];function z(t,a,n,e,o,r){return(0,s.wg)(),(0,s.iD)("section",R,K)}var I={setup(){return(0,s.bv)((()=>{let t=f()(".part-list li"),a=1200/t.length;f().each(t,(function(t){let n=a*t;n*=-1,f()(this).css("background-position-x",n)}))})),{}}};const L=(0,v.Z)(I,[["render",z]]);var M=L;const V={class:"news"},Y={class:"inner clearfix"},q={class:"news-box clearfix"},Q=(0,s._)("h3",null,"공지사항",-1),J={class:"news-list"},$=["href"],tt={class:"news-box"},at=(0,s._)("h3",null,"보도자료",-1),nt={class:"news-list"},et=["href"];function st(t,a,n,e,o,r){return(0,s.wg)(),(0,s.iD)("section",V,[(0,s._)("div",Y,[(0,s._)("div",q,[Q,(0,s._)("ul",J,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.noticeData,((t,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a},[(0,s._)("a",{href:t.url},[(0,s._)("span",null,(0,b.zw)(t.title),1)],8,$)])))),128))])]),(0,s._)("div",tt,[at,(0,s._)("ul",nt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.newsData,((t,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a},[(0,s._)("a",{href:t.url},[(0,s._)("span",null,(0,b.zw)(t.title),1)],8,et)])))),128))])])])])}var ot={setup(){const t=(0,S.oR)(),a=(0,s.Fl)((()=>t.getters.getNoticeData)),n=(0,s.Fl)((()=>t.getters.getNewsData));return t.dispatch("fetchNotice"),t.dispatch("fetchNews"),{noticeData:a,newsData:n}}};const rt=(0,v.Z)(ot,[["render",st]]);var ct=rt;const it={class:"cs"},lt=(0,s._)("div",{class:"inner clearfix"},[(0,s._)("a",{href:"#",class:"cs-faq"},[(0,s._)("h3",null,"FAQ"),(0,s._)("p",null,[(0,s.Uk)(" STX건설 고객님들을 위해 "),(0,s._)("br"),(0,s.Uk)(" 자주하시는 질문과 답변을 정리하였습니다. ")])]),(0,s._)("a",{href:"#",class:"cs-qna"},[(0,s._)("h3",null,"고객문의"),(0,s._)("p",null,[(0,s.Uk)(" STX건설 고객상담은 고객만족 "),(0,s._)("br"),(0,s.Uk)(" 서비스를 위하여 최선을 다하고 있습니다. ")])])],-1),ut=[lt];function dt(t,a,n,e,o,r){return(0,s.wg)(),(0,s.iD)("section",it,ut)}var ft={};const ht=(0,v.Z)(ft,[["render",dt]]);var vt=ht;const pt={class:"about"},gt=(0,s.uE)('<div class="inner"><div class="about-top"><h2>ABOUT US</h2><p><strong> 고객의 믿음과 신뢰로 성장하는 <br> STX건설이 되겠습니다. </strong><span> STX건설 이름으로 세계 어디에서, 세계 누구와 겨뤄도<br> 자신 있는 세계 최고를 향해 웅비합니다. STX건설이라는 날개를<br> 하나 더 피고 세계로, 미래로 나아가는 STX건설의 힘찬 비상을 주목해 <br> 주십시오. </span></p></div><div class="about-bottom"><a href="#" class="about-link-1"> 경영이념 </a><a href="#" class="about-link-2"> 공유가치 </a><a href="#" class="about-link-3"> 중장기전략 </a></div></div>',1),bt=[gt];function mt(t,a,n,e,o,r){return(0,s.wg)(),(0,s.iD)("section",pt,bt)}var wt={};const _t=(0,v.Z)(wt,[["render",mt]]);var Dt=_t;const Tt={class:"footer"},kt=(0,s._)("div",{class:"inner"},[(0,s._)("div",{class:"footer-wrap"},[(0,s._)("address",null,[(0,s.Uk)(" 부산사무소 : (48059) 부산광역시 해운대구 센텀동로49 아이피파빌리온 8층 TEL : 051-791-3000 · FAX : 051-791-3099 "),(0,s._)("br"),(0,s.Uk)(" 창원사무소 : (51494) 경상남도 창원시 성산구 중앙대로 84번길 3, 9층904호 · TEL : 055-263-2060 · FAX : 055-263-2087 ")]),(0,s._)("span",{class:"copy"}," Copyright ⓒ 2018 STX CONSTRUCTION. LTD. All Rights Reserved. ")])],-1),xt=[kt];function Ot(t,a,n,e,o,r){return(0,s.wg)(),(0,s.iD)("footer",Tt,xt)}var Et={};const Nt=(0,v.Z)(Et,[["render",Ot]]);var St=Nt,Ut={name:"App",components:{ModalV:g,Header:C,Visual:G,WorkPart:M,News:ct,CS:vt,About:Dt,Footer:St},setup(){return{}}};const yt=(0,v.Z)(Ut,[["render",r]]);var Ct=yt,At=n(2483);const Wt=(0,At.p7)({history:(0,At.PO)(),routes:[{path:"/",name:"Home",component:""}]});var Pt=Wt,Xt=n(6265),Ft=n.n(Xt);const Ht={gnbData:[],noticeData:[],newsData:[]},jt={fetchGnb({commit:t}){Ft().get("./data/gnb.json").then((a=>{console.log("axios",a),t("UPDATE_GNB",a.data)})).catch((t=>console.log(t)))},fetchNotice({commit:t}){Ft().get("./data/notice.json").then((a=>{console.log(a),t("UPDATE_NOTICE",a.data)})).catch((t=>console.log(t)))},fetchNews({commit:t}){Ft().get("./data/news.json").then((a=>{console.log(a),t("UPDATE_NEWS",a.data)})).catch((t=>console.log(t)))}},Zt={UPDATE_GNB(t,a){console.log(a),t.gnbData=a},UPDATE_NEWS(t,a){t.newsData=a},UPDATE_NOTICE(t,a){t.noticeData=a}},Gt={getGnbData(t){return t.gnbData},getNoticeData(t){return t.noticeData},getNewsData(t){return t.newsData}};var Rt={state:Ht,actions:jt,mutations:Zt,getters:Gt},Bt=(0,S.MT)({modules:{stxStore:Rt}});(0,e.ri)(Ct).use(Pt).use(Bt).mount("#app")}},a={};function n(e){var s=a[e];if(void 0!==s)return s.exports;var o=a[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(a,e,s,o){if(!e){var r=1/0;for(u=0;u<t.length;u++){e=t[u][0],s=t[u][1],o=t[u][2];for(var c=!0,i=0;i<e.length;i++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](e[i])}))?e.splice(i--,1):(c=!1,o<r&&(r=o));if(c){t.splice(u--,1);var l=s();void 0!==l&&(a=l)}}return a}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[e,s,o]}}(),function(){n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,{a:a}),a}}(),function(){n.d=function(t,a){for(var e in a)n.o(a,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};n.O.j=function(a){return 0===t[a]};var a=function(a,e){var s,o,r=e[0],c=e[1],i=e[2],l=0;if(r.some((function(a){return 0!==t[a]}))){for(s in c)n.o(c,s)&&(n.m[s]=c[s]);if(i)var u=i(n)}for(a&&a(e);l<r.length;l++)o=r[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},e=self["webpackChunkvue_stx"]=self["webpackChunkvue_stx"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(3427)}));e=n.O(e)})();
//# sourceMappingURL=app.9d842e5c.js.map