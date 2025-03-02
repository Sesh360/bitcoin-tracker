import{r as h,d as y,I as S,a as O,b as $,c as I,e as F,o as B,f as w,w as a,g as r,h as f,i,j as d,t as v,n as V,k as P,F as z,l as E,m as Y,p as R,q as N,s as j,u as U,v as q,x as K,y as H,S as W,z as G,A as J,B as Q,C as X,D as Z,E as x,G as ee,H as ne,J as te,K as oe,L as se,_ as k,M as re,N as ie}from"./vendor-DiI8fGuu.js";function Le(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();const b={bitcoinHoldings:h(ce()),percentChanges:h({"1h":0,"12h":0,"24h":0,"7d":0,"30d":0,"180d":0,"1y":0,"3y":0,"5y":0,ytd:0}),async getBitcoinPrice(){try{return(await(await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")).json()).bitcoin.usd}catch(e){return console.error("Error fetching Bitcoin price:",e),0}},async getBitcoinPercentChanges(){var e;try{const c=await(await fetch("https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false")).json(),p=c.market_data.price_change_percentage_24h_in_currency.usd/2,g={"1h":c.market_data.price_change_percentage_1h_in_currency.usd,"12h":p,"24h":c.market_data.price_change_percentage_24h_in_currency.usd,"7d":c.market_data.price_change_percentage_7d_in_currency.usd,"30d":c.market_data.price_change_percentage_30d_in_currency.usd,"180d":((e=c.market_data.price_change_percentage_200d_in_currency)==null?void 0:e.usd)||0,ytd:40.5,"1y":120.5,"3y":280.4,"5y":450.7};return this.percentChanges.value=g,g}catch(n){return console.error("Error fetching Bitcoin percentage changes:",n),this.percentChanges.value}},updateBitcoinHoldings(e){localStorage.setItem("bitcoin-holdings",e.toString()),this.bitcoinHoldings.value=e},getHoldings(){return this.bitcoinHoldings}};function ce(){const e=localStorage.getItem("bitcoin-holdings");return e?parseFloat(e):0}const ae=y({name:"PricePage",components:{IonContent:I,IonPage:$,IonRefresher:O,IonRefresherContent:S},setup(){const e=h(0),n=h("price"),c=b.bitcoinHoldings,p=F(()=>{const l=e.value*c.value;return Math.round(l)}),o=async()=>{const l=await b.getBitcoinPrice();e.value=Math.round(l)},s=async l=>{await o(),l.target.complete()},u=()=>{n.value=n.value==="price"?"holdings":"price"},t=l=>Math.round(l).toLocaleString("en-US"),g=l=>l.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:8});return B(()=>{o()}),{bitcoinPrice:e,bitcoinHoldings:c,holdingsValue:p,viewMode:n,refreshPrice:s,toggleView:u,formatWholeDollar:t,formatBitcoin:g}}}),M="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%20viewBox='0%200%204091.27%204091.73'%3e%3cg%3e%3c!--%20Bitcoin%20circle%20with%20improved%20outline%20technique%20--%3e%3ccircle%20cx='2045.64'%20cy='2045.87'%20r='2000'%20fill='%23F7931A'%20/%3e%3ccircle%20cx='2045.64'%20cy='2045.87'%20r='2020'%20fill='none'%20stroke='rgba(0,%200,%200,%200.5)'%20stroke-width='40'%20/%3e%3c!--%20Bitcoin%20symbol%20with%20improved%20outline%20technique%20--%3e%3cpath%20fill='rgba(255,%20255,%20255,%200.9)'%20d='M2947.77%201754.38c40.72,-272.26%20-166.56,-418.61%20-450,-516.24l91.95%20-368.8%20-224.5%20-55.94%20-89.51%20359.09c-59.02,-14.72%20-119.63,-28.59%20-179.87,-42.34l90.16%20-361.46%20-224.36%20-55.94%20-92%20368.68c-48.84,-11.12%20-96.81,-22.11%20-143.35,-33.69l0.26%20-1.16%20-309.59%20-77.31%20-59.72%20239.78c0,0%20166.56,38.18%20163.05,40.53%2090.91,22.69%20107.35,82.87%20104.62,130.57l-104.74%20420.15c6.26,1.59%2014.38,3.89%2023.34,7.49%20-7.49,-1.86%20-15.46,-3.89%20-23.73,-5.87l-146.81%20588.57c-11.11,27.62%20-39.31,69.07%20-102.87,53.33%202.25,3.26%20-163.17,-40.72%20-163.17,-40.72l-111.46%20256.98%20292.15%2072.83c54.35,13.63%20107.61,27.89%20160.06,41.3l-92.9%20373.03%20224.24%2055.94%2092%20-369.07c61.26,16.63%20120.71,31.97%20178.91,46.43l-91.69%20367.33%20224.51%2055.94%2092.89%20-372.33c382.82,72.45%20670.67,43.24%20791.83,-303.02%2097.63,-278.78%20-4.86,-439.58%20-206.26,-544.44%20146.69,-33.83%20257.18,-130.31%20286.64,-329.61l-0.07%20-0.05zm-512.93%20719.26c-69.38,278.78%20-538.76,128.08%20-690.94,90.29l123.28%20-494.2c152.17,37.99%20640.17,113.17%20567.67,403.91zm69.43%20-723.3c-63.29,253.58%20-453.96,124.75%20-580.69,93.16l111.77%20-448.21c126.73,31.59%20534.85,90.55%20468.94,355.05l-0.02%200z'%20/%3e%3cpath%20fill='none'%20stroke='rgba(0,%200,%200,%200.5)'%20stroke-width='40'%20d='M2947.77%201754.38c40.72,-272.26%20-166.56,-418.61%20-450,-516.24l91.95%20-368.8%20-224.5%20-55.94%20-89.51%20359.09c-59.02,-14.72%20-119.63,-28.59%20-179.87,-42.34l90.16%20-361.46%20-224.36%20-55.94%20-92%20368.68c-48.84,-11.12%20-96.81,-22.11%20-143.35,-33.69l0.26%20-1.16%20-309.59%20-77.31%20-59.72%20239.78c0,0%20166.56,38.18%20163.05,40.53%2090.91,22.69%20107.35,82.87%20104.62,130.57l-104.74%20420.15c6.26,1.59%2014.38,3.89%2023.34,7.49%20-7.49,-1.86%20-15.46,-3.89%20-23.73,-5.87l-146.81%20588.57c-11.11,27.62%20-39.31,69.07%20-102.87,53.33%202.25,3.26%20-163.17,-40.72%20-163.17,-40.72l-111.46%20256.98%20292.15%2072.83c54.35,13.63%20107.61,27.89%20160.06,41.3l-92.9%20373.03%20224.24%2055.94%2092%20-369.07c61.26,16.63%20120.71,31.97%20178.91,46.43l-91.69%20367.33%20224.51%2055.94%2092.89%20-372.33c382.82,72.45%20670.67,43.24%20791.83,-303.02%2097.63,-278.78%20-4.86,-439.58%20-206.26,-544.44%20146.69,-33.83%20257.18,-130.31%20286.64,-329.61l-0.07%20-0.05zm-512.93%20719.26c-69.38,278.78%20-538.76,128.08%20-690.94,90.29l123.28%20-494.2c152.17,37.99%20640.17,113.17%20567.67,403.91zm69.43%20-723.3c-63.29,253.58%20-453.96,124.75%20-580.69,93.16l111.77%20-448.21c126.73,31.59%20534.85,90.55%20468.94,355.05l-0.02%200z'%20/%3e%3c/g%3e%3c/svg%3e",C=(e,n)=>{const c=e.__vccOpts||e;for(const[p,o]of n)c[p]=o;return c},le={class:"center-content"},ue={class:"display-container"},de={class:"price"},pe={class:"holdings-wrapper"};function ge(e,n,c,p,o,s){const u=r("ion-refresher-content"),t=r("ion-refresher"),g=r("ion-content"),l=r("ion-page");return f(),w(l,null,{default:a(()=>[i(g,{fullscreen:!0,class:"bitcoin-bg"},{default:a(()=>[i(t,{slot:"fixed",onIonRefresh:n[0]||(n[0]=_=>e.refreshPrice(_))},{default:a(()=>[i(u)]),_:1}),d("div",le,[d("div",{class:"logo-container",onClick:n[1]||(n[1]=(..._)=>e.toggleView&&e.toggleView(..._))},n[3]||(n[3]=[d("img",{src:M,alt:"Bitcoin",class:"bitcoin-logo"},null,-1)])),d("div",ue,[d("div",{class:"price-container",onClick:n[2]||(n[2]=(..._)=>e.toggleView&&e.toggleView(..._))},[d("p",de,"$"+v(e.formatWholeDollar(e.viewMode==="price"?e.bitcoinPrice:e.holdingsValue)),1),d("div",pe,[d("p",{class:V(["holdings",{visible:e.viewMode==="holdings"}])},v(e.formatBitcoin(e.bitcoinHoldings))+" BTC ",3)])])])])]),_:1})]),_:1})}const A=C(ae,[["render",ge],["__scopeId","data-v-9bbc0547"]]),_e=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),he=y({name:"ChangePage",components:{IonContent:I,IonPage:$,IonRefresher:O,IonRefresherContent:S},setup(){const e=h(b.percentChanges.value),n=h(!0),c=async()=>{try{await b.getBitcoinPercentChanges(),e.value=b.percentChanges.value,n.value=!1}catch(t){console.error("Error in component fetching percentage changes:",t),n.value=!1}},p=async t=>{await c(),t.target.complete()},o=t=>{switch(t){case"1h":return"1 Hour";case"12h":return"12 Hours";case"24h":return"1 Day";case"7d":return"1 Week";case"30d":return"1 Month";case"180d":return"6 Months";case"1y":return"1 Year";case"3y":return"3 Years";case"5y":return"5 Years";case"ytd":return"YTD";case"genesis":return"Genesis";default:return t}},s=t=>{if(t>1e4)return"+".concat(Math.round(t/1e3),"K%");if(t>1e3)return"+".concat((t/1e3).toFixed(1),"K%");const g=t>=0?"+":"";return"".concat(g).concat(t.toFixed(2),"%")},u=t=>t>=0?"positive":"negative";return B(()=>{c()}),{percentChanges:e,isLoading:n,refreshData:p,formatPeriod:o,formatPercentage:s,getChangeClass:u}}}),me={class:"center-content"},fe={class:"changes-container"},be={class:"period"};function ve(e,n,c,p,o,s){const u=r("ion-refresher-content"),t=r("ion-refresher"),g=r("ion-content"),l=r("ion-page");return f(),w(l,null,{default:a(()=>[i(g,{fullscreen:!0,class:"bitcoin-bg"},{default:a(()=>[i(t,{slot:"fixed",onIonRefresh:n[0]||(n[0]=_=>e.refreshData(_))},{default:a(()=>[i(u)]),_:1}),d("div",me,[n[1]||(n[1]=d("div",{class:"logo-container"},[d("img",{src:M,alt:"Bitcoin",class:"bitcoin-logo"})],-1)),d("div",fe,[(f(!0),P(z,null,E(e.percentChanges,(_,m)=>(f(),P("div",{class:"change-row",key:m},[d("div",be,v(e.formatPeriod(m)),1),d("div",{class:V(["change",e.getChangeClass(_)])},v(e.formatPercentage(_)),3)]))),128))])])]),_:1})]),_:1})}const ye=C(he,[["render",ve],["__scopeId","data-v-2fa7bb36"]]),we=y({name:"HoldingsPage",components:{IonContent:I,IonPage:$,IonButton:j,IonItem:N,IonInput:R,IonLabel:Y},setup(){const e=h(0),n=h(0),c=()=>{e.value<0&&(e.value=0)},p=async()=>{b.updateBitcoinHoldings(e.value),await(await q.create({message:"Saved",duration:1500,color:"dark",position:"bottom"})).present()},o=s=>s.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:8});return B(()=>{n.value=b.bitcoinHoldings.value,e.value=n.value}),U(b.bitcoinHoldings,s=>{n.value=s}),{bitcoinAmount:e,currentHoldings:n,onAmountChange:c,saveHoldings:p,formatBitcoin:o}}}),Ce={class:"center-content"},$e={class:"holdings-container"},Pe={class:"input-wrapper"},Ie={key:0,class:"current-holdings"};function Be(e,n,c,p,o,s){const u=r("ion-label"),t=r("ion-input"),g=r("ion-item"),l=r("ion-button"),_=r("ion-content"),m=r("ion-page");return f(),w(m,null,{default:a(()=>[i(_,{fullscreen:!0,class:"bitcoin-bg"},{default:a(()=>[d("div",Ce,[d("div",$e,[d("div",Pe,[i(g,{class:"bitcoin-input"},{default:a(()=>[i(u,{position:"stacked"},{default:a(()=>n[1]||(n[1]=[H("BTC Amount")])),_:1}),i(t,{type:"number",modelValue:e.bitcoinAmount,"onUpdate:modelValue":n[0]||(n[0]=L=>e.bitcoinAmount=L),onIonChange:e.onAmountChange},null,8,["modelValue","onIonChange"])]),_:1})]),i(l,{expand:"block",onClick:e.saveHoldings},{default:a(()=>n[2]||(n[2]=[H("Save")])),_:1},8,["onClick"]),e.currentHoldings>0?(f(),P("div",Ie,[d("p",null,v(e.formatBitcoin(e.currentHoldings))+" BTC",1)])):K("",!0)])])]),_:1})]),_:1})}const T=C(we,[["render",Be],["__scopeId","data-v-c2fdd7b6"]]),He=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),ke=y({name:"App",components:{IonApp:J,Swiper:G,SwiperSlide:W,PricePage:A,ChangePage:ye,HoldingsPage:T},setup(){return{swiper:h(null),swiperOptions:{initialSlide:0,speed:400,spaceBetween:0}}}});function Se(e,n,c,p,o,s){const u=r("price-page"),t=r("swiper-slide"),g=r("change-page"),l=r("holdings-page"),_=r("swiper"),m=r("ion-app");return f(),w(m,null,{default:a(()=>[i(_,{options:e.swiperOptions,ref:"swiper"},{default:a(()=>[i(t,null,{default:a(()=>[i(u)]),_:1}),i(t,null,{default:a(()=>[i(g)]),_:1}),i(t,null,{default:a(()=>[i(l)]),_:1})]),_:1},8,["options"])]),_:1})}const Oe=C(ke,[["render",Se]]),Ve=y({name:"Tabs",components:{IonTabs:ee,IonTabBar:x,IonTabButton:Z,IonIcon:X,IonPage:$,IonRouterOutlet:Q},setup(){return{cashOutline:te,walletOutline:ne}}});function Me(e,n,c,p,o,s){const u=r("ion-router-outlet"),t=r("ion-icon"),g=r("ion-tab-button"),l=r("ion-tab-bar"),_=r("ion-tabs"),m=r("ion-page");return f(),w(m,null,{default:a(()=>[i(_,null,{default:a(()=>[i(u),i(l,{slot:"bottom"},{default:a(()=>[i(g,{tab:"price",href:"/tabs/price"},{default:a(()=>[i(t,{icon:e.cashOutline},null,8,["icon"])]),_:1}),i(g,{tab:"holdings",href:"/tabs/holdings"},{default:a(()=>[i(t,{icon:e.walletOutline},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})}const Ae=C(Ve,[["render",Me],["__scopeId","data-v-8479cce6"]]),Te=[{path:"/",redirect:"/tabs/price"},{path:"/tabs/",component:Ae,children:[{path:"",redirect:"/tabs/price"},{path:"price",component:()=>k(()=>Promise.resolve().then(()=>_e),[])},{path:"holdings",component:()=>k(()=>Promise.resolve().then(()=>He),void 0)}]}],D=oe({history:se(""),routes:Te}),De=re(Oe).use(ie).use(D);D.isReady().then(()=>{De.mount("#app")});export{Le as __vite_legacy_guard};
