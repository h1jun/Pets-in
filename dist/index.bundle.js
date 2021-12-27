(()=>{"use strict";var t,e,n,a,r,o={181:(t,e,n)=>{n.d(e,{d:()=>r,I:()=>a});const a={pageNo:1,numOfRows:10,upkind:"",upr_cd:"",org_cd:"",state:"",bgnde:"",endde:""},r=async t=>{const e=await(async({pageNo:t,numOfRows:e,upkind:n,upr_cd:a,org_cd:r,state:o,bgnde:s,endde:c})=>{try{return(await fetch(`/api/lost-pets?upr_cd=${a}&org_cd=${r}&upkind=${n}&state=${o}&pageNo=${t}&numOfRows=${e}&bgnde=${s}&endde=${c}`)).json()}catch(t){console.log(t)}})(t),[n,a]=(t=>{const{items:{item:e},totalCount:n}=t;return[e,n]})(e);return[n,a]}},103:(t,e,n)=>{n.a(t,(async t=>{var e=n(181),a=n(535),r=n(105),o=n(346),s=t([o]);o=(s.then?await s:s)[0];const c="showing",i=document.querySelector(".slider__item:first-child");function d(){const t=document.querySelector(".showing");if(t){t.classList.remove(c);const e=t.nextElementSibling;e?e.classList.add(c):i.classList.add(c)}else i.classList.add(c)}d(),setInterval(d,2e3),o.l;let[l,u]=await(0,e.d)({...e.I,numOfRows:6}),p=await(0,a.D)();(0,r.l)(l),(0,r.P)(p),t()}),1)},346:(t,e,n)=>{n.a(t,(async t=>{n.d(e,{l:()=>y});var a=n(181);const r=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,[o,s]=(()=>{let t=new Date,e=new Date;return t.setDate(e.getDate()-1),e=r(e),t=r(t),[e,t]})();a.I.bgnde=s,a.I.endde=o;let[c,i]=await(0,a.d)(a.I),[d,l]=await(0,a.d)({...a.I,upkind:"417000"}),[u,p]=await(0,a.d)({...a.I,upkind:"422400"}),[_,m]=await(0,a.d)({...a.I,upkind:"429900"});const g=document.querySelector(".news__description"),b=document.getElementById("myChart"),h=[l,p,m];g.innerHTML=`오늘은<br><span style="color: var(--main-color-orange)">${i}</span>마리의 반려동물이<br>가족을 기다리고 있습니다.<br>새로운 가족이 되어주세요!<br>\n`;const y=new Chart(b,{type:"doughnut",options:{responsive:!1,plugins:{title:{display:!0,text:"오늘 접수된 유기동물 현황"}}},data:{labels:["강아지","고양이","기타"],datasets:[{label:"Lost Pets Dataset",data:h,backgroundColor:["#ecbb7f","#a48772","#a47272"],hoverOffset:4}]}});t()}),1)},105:(t,e,n)=>{n.d(e,{l:()=>o,P:()=>s});const a=t=>{const{desertionNo:e,popfile:n,kindCd:a,sexCd:r}=t;return`\n        <div class="board__content">\n          <a href="/lostPets/${e}">\n            <img\n                class="board__img"\n                src="${n}"\n                alt=""\n            />\n            <h4 class="content__title">${a} / ${r}</h4>\n          </a>\n        </div>\n  `},r=t=>{const{_id:e,title:n,thumbnail:a}=t;return`\n        <div class="board__content">\n          <a href="/myPetBoard/${e}">\n            <img\n                class="board__img"\n                src="${a||"https://via.placeholder.com/200x250/B2B2B2/FFFFFF/?text=NO%20Image"}"\n                alt=""\n            />\n            <h4 class="content__title">${n}</h4>\n          </a>\n        </div>\n  `},o=t=>{const e=t.map(a);document.querySelector(".board__save .board__contentsBox").innerHTML=e.join("")},s=t=>{const e=t.map(r);document.querySelector(".board__story .board__contentsBox").innerHTML=e.join("")}},535:(t,e,n)=>{n.d(e,{D:()=>r});const a=t=>{const{data:e}=t;return console.log("getmyPetBoardList 테스트: ",a),e},r=async()=>{const t=await(async()=>{try{return(await fetch("/api/getMyPetBoardPreview")).json()}catch(t){console.log(t)}})();return a(t)}}},s={};function c(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={exports:{}};return o[t](n,n.exports,c),n.exports}t="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n=t=>{t&&(t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},a=t=>!--t.r&&t(),r=(t,e)=>t?t.push(e):a(e),c.a=(o,s,c)=>{var i,d,l,u=c&&[],p=o.exports,_=!0,m=!1,g=(e,n,a)=>{m||(m=!0,n.r+=e.length,e.map(((e,r)=>e[t](n,a))),m=!1)},b=new Promise(((t,e)=>{l=e,d=()=>(t(p),n(u),u=0)}));b[e]=p,b[t]=(t,e)=>{if(_)return a(t);i&&g(i,t,e),r(u,t),b.catch(e)},o.exports=b,s((o=>{if(!o)return d();var s,c;i=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var s=[];o.then((t=>{c[e]=t,n(s),s=0}));var c={};return c[t]=(t,e)=>(r(s,t),o.catch(e)),c}}var i={};return i[t]=t=>a(t),i[e]=o,i})))(o);var l=new Promise(((t,n)=>{(s=()=>t(c=i.map((t=>t[e])))).r=0,g(i,s,n)}));return s.r?l:c})).then(d,l),_=!1},c.d=(t,e)=>{for(var n in e)c.o(e,n)&&!c.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c(103)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDVHdCLEVBQUlySSxHQUFrQjZHLEVBQ3RCNUcsRUFBY3lHLEdBQ2RBLEVBQVEsS0FFVCxJQUFJMkIsRUFBTSxHQUVWLE9BRE9BLEVBQUl0SSxHQUFlLENBQUM2RyxFQUFJUSxLQUFZakgsRUFBY3VHLEVBQU9FLEdBQUtnQixFQUFXLE1BQUVSLElBQzNFaUIsR0FHVCxJQUFJQyxFQUFNLEdBR0wsT0FGQUEsRUFBSXZJLEdBQWdCNkcsR0FBUTFHLEVBQWlCMEcsR0FDN0MwQixFQUFJdEksR0FBa0I0SCxFQUNmVSxLQStCR0MsQ0FBU2YsR0FFdkIsSUFBSU0sRUFBVSxJQUFJQyxTQUFRLENBQUNDLEVBQVNaLE1BQ25DUixFQUFLLElBQU9vQixFQUFRRyxFQUFTakIsRUFBWTFCLEtBQUtnRCxHQUFPQSxFQUFFeEksT0FDcEQ2RyxFQUFJLEVBQ1BVLEVBQVFMLEVBQWFOLEVBQUlRLE1BRTFCLE9BQU9SLEVBQUdDLEVBQUlpQixFQUFVSyxLQUN0QkMsS0FBS2pCLEVBQWNDLEdBQ3RCQyxHQUFlLEdPbkVoQm5CLEVBQW9Cc0MsRUFBSSxDQUFDbEMsRUFBU21DLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWHZDLEVBQW9CeUMsRUFBRUYsRUFBWUMsS0FBU3hDLEVBQW9CeUMsRUFBRXJDLEVBQVNvQyxJQUM1RUUsT0FBT0MsZUFBZXZDLEVBQVNvQyxFQUFLLENBQUVJLFlBQVksRUFBTUMsSUFBS04sRUFBV0MsTUNKM0V4QyxFQUFvQnlDLEVBQUksQ0FBQ04sRUFBS1csSUFBVUosT0FBT0ssVUFBVUMsZUFBZUMsS0FBS2QsRUFBS1csR0NHeEQ5QyxFQUFvQixNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3RlYW0zLXByb2plY3QvLi9zcmMvanMvbG9zdFBldHMvZ2V0TG9zdFBldHMuanMiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC8uL3NyYy9qcy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC8uL3NyYy9qcy9tYWluL21haW5DaGFydC5qcyIsIndlYnBhY2s6Ly90ZWFtMy1wcm9qZWN0Ly4vc3JjL2pzL21haW4vbWFpblByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC8uL3NyYy9qcy9wZXRTdG9yeS9nZXRQcmV2aWV3LmpzIiwid2VicGFjazovL3RlYW0zLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlYW0zLXByb2plY3Qvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB3ZWJwYWNrVGhlbiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgdGhlblwiKSA6IFwiX193ZWJwYWNrX3RoZW5fX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgY29tcGxldGVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSkge1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciBjb21wbGV0ZUZ1bmN0aW9uID0gKGZuKSA9PiAoIS0tZm4uciAmJiBmbigpKTtcbnZhciBxdWV1ZUZ1bmN0aW9uID0gKHF1ZXVlLCBmbikgPT4gKHF1ZXVlID8gcXVldWUucHVzaChmbikgOiBjb21wbGV0ZUZ1bmN0aW9uKGZuKSk7XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1RoZW5dKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRjb21wbGV0ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdFx0cXVldWUgPSAwO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9ialt3ZWJwYWNrVGhlbl0gPSAoZm4sIHJlamVjdCkgPT4gKHF1ZXVlRnVuY3Rpb24ocXVldWUsIGZuKSwgZGVwWydjYXRjaCddKHJlamVjdCkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRcdFx0XHRcdFx0cmV0W3dlYnBhY2tUaGVuXSA9IChmbikgPT4gKGNvbXBsZXRlRnVuY3Rpb24oZm4pKTtcblx0XHRcdFx0XHRcdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlID0gaGFzQXdhaXQgJiYgW107XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIGlzRXZhbHVhdGluZyA9IHRydWU7XG5cdHZhciBuZXN0ZWQgPSBmYWxzZTtcblx0dmFyIHdoZW5BbGwgPSAoZGVwcywgb25SZXNvbHZlLCBvblJlamVjdCkgPT4ge1xuXHRcdGlmIChuZXN0ZWQpIHJldHVybjtcblx0XHRuZXN0ZWQgPSB0cnVlO1xuXHRcdG9uUmVzb2x2ZS5yICs9IGRlcHMubGVuZ3RoO1xuXHRcdGRlcHMubWFwKChkZXAsIGkpID0+IChkZXBbd2VicGFja1RoZW5dKG9uUmVzb2x2ZSwgb25SZWplY3QpKSk7XG5cdFx0bmVzdGVkID0gZmFsc2U7XG5cdH07XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSAoKSA9PiAocmVzb2x2ZShleHBvcnRzKSwgY29tcGxldGVRdWV1ZShxdWV1ZSksIHF1ZXVlID0gMCk7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1RoZW5dID0gKGZuLCByZWplY3RGbikgPT4ge1xuXHRcdGlmIChpc0V2YWx1YXRpbmcpIHsgcmV0dXJuIGNvbXBsZXRlRnVuY3Rpb24oZm4pOyB9XG5cdFx0aWYgKGN1cnJlbnREZXBzKSB3aGVuQWxsKGN1cnJlbnREZXBzLCBmbiwgcmVqZWN0Rm4pO1xuXHRcdHF1ZXVlRnVuY3Rpb24ocXVldWUsIGZuKTtcblx0XHRwcm9taXNlWydjYXRjaCddKHJlamVjdEZuKTtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0aWYoIWRlcHMpIHJldHVybiBvdXRlclJlc29sdmUoKTtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbiwgcmVzdWx0O1xuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShyZXN1bHQgPSBjdXJyZW50RGVwcy5tYXAoKGQpID0+IChkW3dlYnBhY2tFeHBvcnRzXSkpKSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHdoZW5BbGwoY3VycmVudERlcHMsIGZuLCByZWplY3QpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IHJlc3VsdDtcblx0fSkudGhlbihvdXRlclJlc29sdmUsIHJlamVjdCk7XG5cdGlzRXZhbHVhdGluZyA9IGZhbHNlO1xufTsiLCJjb25zdCBzZWFyY2hQYXJhbXMgPSB7XG4gIHBhZ2VObzogMSxcbiAgbnVtT2ZSb3dzOiAxMCxcbiAgdXBraW5kOiBcIlwiLFxuICB1cHJfY2Q6IFwiXCIsXG4gIG9yZ19jZDogXCJcIixcbiAgc3RhdGU6IFwiXCIsXG4gIGJnbmRlOiBcIlwiLFxuICBlbmRkZTogXCJcIixcbn07XG5cbmNvbnN0IGdldExvc3RQZXREYXRhID0gYXN5bmMgKHtcbiAgcGFnZU5vLFxuICBudW1PZlJvd3MsXG4gIHVwa2luZCxcbiAgdXByX2NkLFxuICBvcmdfY2QsXG4gIHN0YXRlLFxuICBiZ25kZSxcbiAgZW5kZGUsXG59KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAvYXBpL2xvc3QtcGV0cz91cHJfY2Q9JHt1cHJfY2R9Jm9yZ19jZD0ke29yZ19jZH0mdXBraW5kPSR7dXBraW5kfSZzdGF0ZT0ke3N0YXRlfSZwYWdlTm89JHtwYWdlTm99Jm51bU9mUm93cz0ke251bU9mUm93c30mYmduZGU9JHtiZ25kZX0mZW5kZGU9JHtlbmRkZX1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0TG9zdFBldExpc3QgPSAoZGF0YSkgPT4ge1xuICBjb25zdCB7XG4gICAgaXRlbXM6IHsgaXRlbTogbG9zdFBldExpc3QgfSxcbiAgICB0b3RhbENvdW50LFxuICB9ID0gZGF0YTtcbiAgcmV0dXJuIFtsb3N0UGV0TGlzdCwgdG90YWxDb3VudF07XG59O1xuXG5jb25zdCBnZXRMb3N0UGV0cyA9IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgY29uc3QgbG9zdFBldERhdGEgPSBhd2FpdCBnZXRMb3N0UGV0RGF0YShwYXJhbXMpO1xuICBjb25zdCBbbG9zdFBldExpc3QsIHRvdGFsQ291bnRdID0gZ2V0TG9zdFBldExpc3QobG9zdFBldERhdGEpO1xuICByZXR1cm4gW2xvc3RQZXRMaXN0LCB0b3RhbENvdW50XTtcbn07XG5cbmV4cG9ydCB7IGdldExvc3RQZXRzLCBzZWFyY2hQYXJhbXMgfTtcbiIsIi8vIGltcG9ydCBcIi4uL3N0eWxlL2luZGV4LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi4vc3R5bGUvcmVzZXQuY3NzXCI7XG5pbXBvcnQgeyBnZXRMb3N0UGV0cywgc2VhcmNoUGFyYW1zIH0gZnJvbSBcIi4uL2xvc3RQZXRzL2dldExvc3RQZXRzLmpzXCI7XG5pbXBvcnQgeyBnZXRNeVBldEJvYXJkIH0gZnJvbSBcIi4uL3BldFN0b3J5L2dldFByZXZpZXcuanNcIjtcbmltcG9ydCB7IHBhaW50TG9zdFBldFByZXZpZXcsIHBhaW50TXlQZXRCb2FyZFByZXZpZXcgfSBmcm9tIFwiLi9tYWluUHJldmlldy5qc1wiO1xuaW1wb3J0IHsgbXlDaGFydCB9IGZyb20gXCIuL21haW5DaGFydC5qc1wiO1xuXG4vLyDsnbTrr7jsp4Ag7Iqs65287J20642UXG5jb25zdCBTSE9XSU5HX19DTEFTUyA9IFwic2hvd2luZ1wiO1xuY29uc3QgZmlyc3RTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19pdGVtOmZpcnN0LWNoaWxkXCIpO1xuZnVuY3Rpb24gc2xpZGUoKSB7XG4gIGNvbnN0IGN1cnJlbnRTaWxkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke1NIT1dJTkdfX0NMQVNTfWApO1xuICBpZiAoY3VycmVudFNpbGRlKSB7XG4gICAgY3VycmVudFNpbGRlLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0lOR19fQ0xBU1MpO1xuICAgIGNvbnN0IG5leHRTbGlkZSA9IGN1cnJlbnRTaWxkZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKG5leHRTbGlkZSkge1xuICAgICAgbmV4dFNsaWRlLmNsYXNzTGlzdC5hZGQoU0hPV0lOR19fQ0xBU1MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoU0hPV0lOR19fQ0xBU1MpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoU0hPV0lOR19fQ0xBU1MpO1xuICB9XG59XG5cbnNsaWRlKCk7XG5zZXRJbnRlcnZhbChzbGlkZSwgMjAwMCk7XG5cbi8vIO2GteqzhFxubXlDaGFydDtcblxuLy8g67O07Zi4IOqyjOyLnO2MkCDrr7jrpqzrs7TquLBcbmxldCBbbG9zdFBldExpc3QsIHRvdGFsQ291bnRdID0gYXdhaXQgZ2V0TG9zdFBldHMoe1xuICAuLi5zZWFyY2hQYXJhbXMsXG4gIG51bU9mUm93czogNixcbn0pO1xubGV0IG15UGV0Qm9hcmRMaXN0ID0gYXdhaXQgZ2V0TXlQZXRCb2FyZCgpO1xuXG5wYWludExvc3RQZXRQcmV2aWV3KGxvc3RQZXRMaXN0KTtcbnBhaW50TXlQZXRCb2FyZFByZXZpZXcobXlQZXRCb2FyZExpc3QpO1xuIiwiaW1wb3J0IHsgZ2V0TG9zdFBldHMsIHNlYXJjaFBhcmFtcyB9IGZyb20gXCIuLi9sb3N0UGV0cy9nZXRMb3N0UGV0cy5qc1wiO1xuXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgY29uc3QgeXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1tID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgZGQgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgcmV0dXJuIGAke3l5fS0ke21tfS0ke2RkfWA7XG59O1xuXG5jb25zdCBzZXRUd29EYXRlcyA9ICgpID0+IHtcbiAgbGV0IHllc3RlcmRheSA9IG5ldyBEYXRlKCk7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHllc3RlcmRheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDEpO1xuXG4gIHRvZGF5ID0gZm9ybWF0RGF0ZSh0b2RheSk7XG4gIHllc3RlcmRheSA9IGZvcm1hdERhdGUoeWVzdGVyZGF5KTtcbiAgcmV0dXJuIFt0b2RheSwgeWVzdGVyZGF5XTtcbn07XG5cbmNvbnN0IFt0b2RheSwgeWVzdGVyZGF5XSA9IHNldFR3b0RhdGVzKCk7XG5zZWFyY2hQYXJhbXMuYmduZGUgPSB5ZXN0ZXJkYXk7XG5zZWFyY2hQYXJhbXMuZW5kZGUgPSB0b2RheTtcblxubGV0IFtsb3N0UGV0TGlzdCwgdG90YWxDb3VudF0gPSBhd2FpdCBnZXRMb3N0UGV0cyhzZWFyY2hQYXJhbXMpO1xuXG5sZXQgW2RvZ0xpc3QsIGRvZ0NvdW50XSA9IGF3YWl0IGdldExvc3RQZXRzKHtcbiAgLi4uc2VhcmNoUGFyYW1zLFxuICB1cGtpbmQ6IFwiNDE3MDAwXCIsXG59KTtcblxubGV0IFtjYXRMaXN0LCBjYXRDb3VudF0gPSBhd2FpdCBnZXRMb3N0UGV0cyh7XG4gIC4uLnNlYXJjaFBhcmFtcyxcbiAgdXBraW5kOiBcIjQyMjQwMFwiLFxufSk7XG5cbmxldCBbb3RoZXJzTGlzdCwgb3RoZXJzQ291bnRdID0gYXdhaXQgZ2V0TG9zdFBldHMoe1xuICAuLi5zZWFyY2hQYXJhbXMsXG4gIHVwa2luZDogXCI0Mjk5MDBcIixcbn0pO1xuXG5jb25zdCBuZXdzX19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3c19fZGVzY3JpcHRpb25cIik7XG5jb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2hhcnRcIik7XG5jb25zdCBkYXRhID0gW2RvZ0NvdW50LCBjYXRDb3VudCwgb3RoZXJzQ291bnRdO1xuXG5uZXdzX19kZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBg7Jik64qY7J2APGJyPjxzcGFuIHN0eWxlPVwiY29sb3I6IHZhcigtLW1haW4tY29sb3Itb3JhbmdlKVwiPiR7dG90YWxDb3VudH08L3NwYW4+66eI66as7J2YIOuwmOugpOuPmeusvOydtDxicj7qsIDsobHsnYQg6riw64uk66as6rOgIOyeiOyKteuLiOuLpC48YnI+7IOI66Gc7Jq0IOqwgOyhseydtCDrkJjslrTso7zshLjsmpQhPGJyPlxuYDtcblxuY29uc3QgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgdHlwZTogXCJkb3VnaG51dFwiLFxuICBvcHRpb25zOiB7XG4gICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgcGx1Z2luczoge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgdGV4dDogXCLsmKTripgg7KCR7IiY65CcIOycoOq4sOuPmeusvCDtmITtmalcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZGF0YToge1xuICAgIGxhYmVsczogW1wi6rCV7JWE7KeAXCIsIFwi6rOg7JaR7J20XCIsIFwi6riw7YOAXCJdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkxvc3QgUGV0cyBEYXRhc2V0XCIsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI2VjYmI3ZlwiLCBcIiNhNDg3NzJcIiwgXCIjYTQ3MjcyXCJdLFxuICAgICAgICBob3Zlck9mZnNldDogNCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgeyBteUNoYXJ0IH07XG4iLCJjb25zdCBjcmVhdGVMb3N0UGV0UHJldmlldyA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkZXNlcnRpb25ObywgcG9wZmlsZSwga2luZENkLCBzZXhDZCxcbiAgfSA9IGl0ZW07XG5cbiAgY29uc3QgbG9zdFBldFByZXZpZXdUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkX19jb250ZW50XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIi9sb3N0UGV0cy8ke2Rlc2VydGlvbk5vfVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzPVwiYm9hcmRfX2ltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPVwiJHtwb3BmaWxlfVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJjb250ZW50X190aXRsZVwiPiR7a2luZENkfSAvICR7c2V4Q2R9PC9oND5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiBsb3N0UGV0UHJldmlld1RlbXBsYXRlO1xufTtcblxuY29uc3QgY3JlYXRlTXlQZXRCb2FyZFByZXZpZXcgPSAoaXRlbSkgPT4ge1xuICBjb25zdCB7IF9pZCwgdGl0bGUsIHRodW1ibmFpbCB9ID0gaXRlbTtcblxuICBjb25zdCBsb3N0UGV0UHJldmlld1RlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmRfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiL215UGV0Qm9hcmQvJHtfaWR9XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJib2FyZF9faW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9XCIke3RodW1ibmFpbCB8fCAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMHgyNTAvQjJCMkIyL0ZGRkZGRi8/dGV4dD1OTyUyMEltYWdlJ31cIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiY29udGVudF9fdGl0bGVcIj4ke3RpdGxlfTwvaDQ+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgYDtcblxuICByZXR1cm4gbG9zdFBldFByZXZpZXdUZW1wbGF0ZTtcbn07XG5cbmNvbnN0IHBhaW50TG9zdFBldFByZXZpZXcgPSAobG9zdFBldExpc3QpID0+IHtcbiAgY29uc3QgbG9zdFBldEl0ZW1zID0gbG9zdFBldExpc3QubWFwKGNyZWF0ZUxvc3RQZXRQcmV2aWV3KTtcbiAgY29uc3QgbG9zdEJvYXJkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5ib2FyZF9fc2F2ZSAuYm9hcmRfX2NvbnRlbnRzQm94JyxcbiAgKTtcbiAgbG9zdEJvYXJkQ29udGVudC5pbm5lckhUTUwgPSBsb3N0UGV0SXRlbXMuam9pbignJyk7XG59O1xuXG5jb25zdCBwYWludE15UGV0Qm9hcmRQcmV2aWV3ID0gKHByZXZpZXdBcnkpID0+IHtcbiAgY29uc3QgcGV0Qm9hcmRJdGVtcyA9IHByZXZpZXdBcnkubWFwKGNyZWF0ZU15UGV0Qm9hcmRQcmV2aWV3KTtcbiAgY29uc3QgbXlQZXRCb2FyZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuYm9hcmRfX3N0b3J5IC5ib2FyZF9fY29udGVudHNCb3gnLFxuICApO1xuICBteVBldEJvYXJkQ29udGVudC5pbm5lckhUTUwgPSBwZXRCb2FyZEl0ZW1zLmpvaW4oJycpO1xufTtcblxuZXhwb3J0IHsgcGFpbnRMb3N0UGV0UHJldmlldywgcGFpbnRNeVBldEJvYXJkUHJldmlldyB9O1xuIiwiY29uc3QgZ2V0UHJldmlld0RhdGEgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9nZXRNeVBldEJvYXJkUHJldmlld2ApO1xuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBnZXRteVBldEJvYXJkTGlzdCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogbXlQZXRCb2FyZExpc3QgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKFwiZ2V0bXlQZXRCb2FyZExpc3Qg7YWM7Iqk7Yq4OiBcIiwgZ2V0bXlQZXRCb2FyZExpc3QpO1xuICByZXR1cm4gbXlQZXRCb2FyZExpc3Q7XG59O1xuXG5jb25zdCBnZXRNeVBldEJvYXJkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBteVBldEJvYXJkRGF0YSA9IGF3YWl0IGdldFByZXZpZXdEYXRhKCk7XG4gIGNvbnN0IG15UGV0Qm9hcmRzID0gZ2V0bXlQZXRCb2FyZExpc3QobXlQZXRCb2FyZERhdGEpO1xuICByZXR1cm4gbXlQZXRCb2FyZHM7XG59O1xuXG5leHBvcnQgeyBnZXRNeVBldEJvYXJkIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTAzKTtcbiJdLCJuYW1lcyI6WyJ3ZWJwYWNrVGhlbiIsIndlYnBhY2tFeHBvcnRzIiwiY29tcGxldGVRdWV1ZSIsImNvbXBsZXRlRnVuY3Rpb24iLCJxdWV1ZUZ1bmN0aW9uIiwic2VhcmNoUGFyYW1zIiwicGFnZU5vIiwibnVtT2ZSb3dzIiwidXBraW5kIiwidXByX2NkIiwib3JnX2NkIiwic3RhdGUiLCJiZ25kZSIsImVuZGRlIiwiZ2V0TG9zdFBldHMiLCJhc3luYyIsInBhcmFtcyIsImxvc3RQZXREYXRhIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0TG9zdFBldERhdGEiLCJsb3N0UGV0TGlzdCIsInRvdGFsQ291bnQiLCJkYXRhIiwiaXRlbXMiLCJpdGVtIiwiZ2V0TG9zdFBldExpc3QiLCJTSE9XSU5HX19DTEFTUyIsImZpcnN0U2xpZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZSIsImN1cnJlbnRTaWxkZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm5leHRTbGlkZSIsIm5leHRFbGVtZW50U2libGluZyIsImFkZCIsInNldEludGVydmFsIiwibXlQZXRCb2FyZExpc3QiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImdldERhdGUiLCJ0b2RheSIsInllc3RlcmRheSIsIkRhdGUiLCJzZXREYXRlIiwic2V0VHdvRGF0ZXMiLCJkb2dMaXN0IiwiZG9nQ291bnQiLCJjYXRMaXN0IiwiY2F0Q291bnQiLCJvdGhlcnNMaXN0Iiwib3RoZXJzQ291bnQiLCJuZXdzX19kZXNjcmlwdGlvbiIsImN0eCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibXlDaGFydCIsIkNoYXJ0IiwidHlwZSIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJPZmZzZXQiLCJjcmVhdGVMb3N0UGV0UHJldmlldyIsImRlc2VydGlvbk5vIiwicG9wZmlsZSIsImtpbmRDZCIsInNleENkIiwiY3JlYXRlTXlQZXRCb2FyZFByZXZpZXciLCJfaWQiLCJ0aHVtYm5haWwiLCJwYWludExvc3RQZXRQcmV2aWV3IiwibG9zdFBldEl0ZW1zIiwibWFwIiwiam9pbiIsInBhaW50TXlQZXRCb2FyZFByZXZpZXciLCJwcmV2aWV3QXJ5IiwicGV0Qm9hcmRJdGVtcyIsImdldG15UGV0Qm9hcmRMaXN0IiwiZ2V0TXlQZXRCb2FyZCIsIm15UGV0Qm9hcmREYXRhIiwiZ2V0UHJldmlld0RhdGEiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIlN5bWJvbCIsInF1ZXVlIiwiZm9yRWFjaCIsImZuIiwiciIsInB1c2giLCJhIiwiYm9keSIsImhhc0F3YWl0IiwiY3VycmVudERlcHMiLCJvdXRlclJlc29sdmUiLCJyZWplY3QiLCJpc0V2YWx1YXRpbmciLCJuZXN0ZWQiLCJ3aGVuQWxsIiwiZGVwcyIsIm9uUmVzb2x2ZSIsIm9uUmVqZWN0IiwibGVuZ3RoIiwiZGVwIiwiaSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlaiIsInJlamVjdEZuIiwicmVzdWx0IiwidGhlbiIsIm9iaiIsInJldCIsIndyYXBEZXBzIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=