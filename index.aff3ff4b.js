!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired76b;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired76b=a);var i=a("7Sf3J"),o=a("8x2sk"),s=a("9GT1X"),c=a("8kBMg"),l=a("gyWj4"),u=a("aHxE2"),d=a("9Isww"),f=a("8MBJY"),p=a("a2hTj");i=a("7Sf3J"),i=a("7Sf3J");function m(){i.refs.container.innerHTML="",i.refs.container.dataset.ids=""}var v=a("5vsmo"),g=a("bpxeT"),h=a("2TvXO");v=a("5vsmo"),i=a("7Sf3J");function w(e){var t=e.page,n=e.total_pages;i.refs.boxNumbersPage.innerHTML="";var r=[];if(document.documentElement.clientWidth>767){if(n>9&&t<6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var a=1;a<=n;a+=1){if(a>8){r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="'.concat(n,'">').concat(n,"</li>"));break}r.push('<li class="container__numbers-item" data-page="'.concat(a,'">').concat(a,"</li>"))}r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n<9){for(var o=1;o<=n&&!(o>9);o+=1)r.push('<li class="container__numbers-item" data-page="'.concat(o,'">').concat(o,"</li>"));i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n>9&&t>=6&&t<n-6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),r.push('<li class="container__numbers-item" data-page="1">1</li>'),r.push('<span class="container__numbers-span">...</span>');for(var s=t-2;s<t;s+=1)r.push('<li class="container__numbers-item" data-page="'.concat(s,'">').concat(s,"</li>"));r.push('<li class="container__numbers-item" data-page="'.concat(t,'">').concat(t,"</li>"));for(var c=t+1;c<t+3;c+=1)r.push('<li class="container__numbers-item" data-page="'.concat(c,'">').concat(c,"</li>"));r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="'.concat(n,'">').concat(n,"</li>")),r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n>9&&t>n-6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(var l=n;l>=n-8;l-=1)r.push('<li class="container__numbers-item" data-page="'.concat(l,'">').concat(l,"</li>"));r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="1">1</li>'),r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.reverse().join(""))}}else{if(n>5&&t<4){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var u=1;u<=n&&!(u>5);u+=1)r.push('<li class="container__numbers-item" data-page="'.concat(u,'">').concat(u,"</li>"));r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n<6){for(var d=1;d<=n&&!(d>5);d+=1)r.push('<li class="container__numbers-item" data-page="'.concat(d,'">').concat(d,"</li>"));i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n>5&&t>=4&&t<n-4){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var f=t-2;f<t;f+=1)r.push('<li class="container__numbers-item" data-page="'.concat(f,'">').concat(f,"</li>"));r.push('<li class="container__numbers-item" data-page="'.concat(t,'">').concat(t,"</li>"));for(var p=t+1;p<t+3;p+=1)r.push('<li class="container__numbers-item" data-page="'.concat(p,'">').concat(p,"</li>"));r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n>5&&t>n-4){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(var m=n;m>=n-5;m-=1)r.push('<li class="container__numbers-item" data-page="'.concat(m,'">').concat(m,"</li>"));r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.reverse().join(""))}}document.querySelector('[data-page="'.concat(t,'"]')).classList.add("is-active-page"),(n>9&&document.documentElement.clientWidth>767||n>5&&document.documentElement.clientWidth<768)&&(i.refs.boxNumbersPage.firstElementChild.addEventListener("click",(function(){var e=t;e>1&&window.filterHendler.updateFilters(e-1)})),i.refs.boxNumbersPage.lastElementChild.addEventListener("click",(function(){var e=t;e<n&&window.filterHendler.updateFilters(e+1)})))}i=a("7Sf3J"),s=a("9GT1X");function b(e){(function(){return _.apply(this,arguments)})(e).then((function(e){return m(),(0,v.createFilmCardMarkup)(e.results),e})).then((function(e){w(e)}))}function _(){return _=e(g)(e(h).mark((function t(){var n,r,a,i=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,r={option:"/trending/movie/day",page:n},(0,s.makeLangParam)(r),window.loader(),e.prev=5,e.next=8,window.filmoteka.fetchFilms(r);case 8:return a=e.sent,window.loaderRemove(),e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),window.loaderRemove();case 17:case"end":return e.stop()}}),t,null,[[5,13]])}))),_.apply(this,arguments)}i.refs.boxNumbersPage.addEventListener("click",(function(e){"LI"===e.target.nodeName&&window.filterHendler.updateFilters(e.target.textContent)}));var y=function(){"use strict";function t(){e(f)(this,t);var n=(new Date).getFullYear();i.refs.dateFilter.innerHTML=function(){for(var e='<option value="" selected data-text="yearsFilter">Years</option>',t=n;t>=1900;t-=1)e+='<option value="'.concat(t,'">').concat(t,"</option>");return e}()}return e(p)(t,[{key:"ratingFilterOnChange",value:function(e){var t=e.target.value;""===t?(localStorage.setItem("filterByRating",""),window.filmoteka.filterByRating=""):(window.filmoteka.filterByRating=t,localStorage.setItem("filterByRating",t)),window.filterHendler.updateFilters()}},{key:"genreFilterOnChange",value:function(e){var t=e.target.value;""===t?(localStorage.setItem("filterByGenre",""),window.filmoteka.filterByGenre=""):(window.filmoteka.filterByGenre=t,localStorage.setItem("filterByGenre",t)),window.filterHendler.updateFilters()}},{key:"dataFilterOnChange",value:function(e){var t=e.target.value;""===t?(localStorage.setItem("dataFilter",""),window.filmoteka.dataFilter=""):(window.filmoteka.dataFilter=t,localStorage.setItem("dataFilter",t)),window.filterHendler.updateFilters()}},{key:"updateFilters",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;localStorage.getItem("filterByRating")||localStorage.getItem("filterByGenre")||localStorage.getItem("dataFilter")?(window.loader(),filmoteka.fetchFilms({region:"",page:e,option:"/discover/movie"}).then((function(e){m(),(0,v.createFilmCardMarkup)(e.results)})).finally((function(){return window.loaderRemove()}))):b(e)}}]),t}();g=a("bpxeT"),h=a("2TvXO"),i=a("7Sf3J"),v=a("5vsmo");function x(e){var t,n=e.poster_path,r=e.title,a=e.id;return t=n?"".concat(v.BASE_IMAGES_URL).concat(n):v.DEFAULT_IMG,'<li class="slider__item">\n                <img class="slider-film__img" src="'.concat(t,'" alt="').concat(r,'" loading="lazy"  height="500" data-id=').concat(a,">                \n            </li>")}function k(){return L.apply(this,arguments)}function L(){return(L=e(g)(e(h).mark((function t(){var n,r,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",n={option:"/trending/movie/week"},e.next=4,window.filmoteka.fetchFilms(n);case 4:return r=e.sent,a="",r.results.forEach((function(e){a+=x(e)})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function S(e){return e.clientWidth<=900?4:e.clientWidth<1092?5:e.clientWidth>=1092?6:void 0}function F(){return(F=e(g)(e(h).mark((function t(){var n,r,a,o,s,c,l,u,d,f,p;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,r=6,a=1,o=document.querySelector(".slider-container"),e.next=6,k();case 6:s=e.sent,i.refs.jsSliderContainer.innerHTML=s,c=document.querySelectorAll(".slider__item"),l=c.length,r=S(o),u=o.clientWidth/r,d=a*u,c.forEach((function(e){e.style.minWidth="".concat(u,"px")})),window.addEventListener("resize",(function(){r=S(o);var e=o.clientWidth/r;c.forEach((function(t){t.style.minWidth="".concat(e,"px")})),n=0,f(),p()})),i.refs.btnNext.addEventListener("click",(function(){var e=c[0].clientWidth;console.log(e);var t=l-(Math.abs(n)+r*u)/u;n-=t>=a?d:t*u,f(),p()})),i.refs.btnPrev.addEventListener("click",(function(){var e=Math.abs(n)/u;n+=e>=a?d:e*u,f(),p()})),p=function(){i.refs.btnPrev.disabled=0===n,i.refs.btnNext.disabled=n<=-(l-r)*u},(f=function(){i.refs.track.style.transform="translateX(".concat(n,"px)")})(),p();case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var T=a("bUH0J"),I=a("j0SV0"),E=(f=a("8MBJY"),p=a("a2hTj"),a("dIxxU")),M=(i=a("7Sf3J")).refs.newsWrapper.offsetWidth,O=i.refs.news.scrollWidth,j=function(){"use strict";function t(){e(f)(this,t),this.toDate=(new Date).getDate(),localStorage.getItem("newsArr")&&null!=localStorage.getItem("newsArr")?(this.newsArr=JSON.parse(localStorage.getItem("newsArr")),this.upDate=localStorage.getItem("upDate"),this.toDate!=this.upDate?this.fetchNews():this.updateNews()):this.fetchNews();setInterval(this.move,40)}return e(p)(t,[{key:"fetchNews",value:function(){var e=this,t="uk";try{var n=localStorage.getItem("siteOptions");"ua"===n&&(t="uk"),"eng"===n&&(t="en")}catch(e){console.log(e)}var r={method:"GET",url:"https://api.newscatcherapi.com/v2/search",params:{q:"Ukraine",lang:t,sort_by:"relevancy",page:"1"},headers:{"x-api-key":"mof9O_f3PWnZRIRc-SXKZz806th-jcFoXeoDXgqGKpU"}};E.default.request(r).then((function(t){e.newsArr=t.data.articles,localStorage.setItem("newsArr",JSON.stringify(e.newsArr)),localStorage.setItem("upDate",(new Date).getDate()),e.updateNews()})).catch((function(e){console.error(e)}))}},{key:"updateNews",value:function(){for(var e="";!((e+=this.newsArr[Math.floor(Math.random()*this.newsArr.length)].title).length>400);)e+=" • ";i.refs.news.textContent=e}},{key:"move",value:function(){var e=getComputedStyle(i.refs.news).transform.split(",");e=void 0===e[4]?-1:parseFloat(e[4])-1,i.refs.news.style.transform=-e>=O?"translateX("+M+"px)":"translateX("+e+"px)"}}]),t}();a("iU1Pc");g=a("bpxeT"),h=a("2TvXO"),i=a("7Sf3J"),v=a("5vsmo"),s=a("9GT1X");function N(){return(N=e(g)(e(h).mark((function t(n){var r,a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"/search/movie",r=i.refs.searchInput.value,console.log(r),a={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(r.trim()))},""!==r){e.next=9;break}return i.refs.massages.classList.remove("hidden"),H(),e.abrupt("return");case 9:return(0,s.makeLangParam)(a),window.loader(),e.prev=11,e.next=14,window.filmoteka.fetchFilms(a);case 14:if(0!==(o=e.sent).results.length){e.next=21;break}return i.refs.massages.classList.remove("hidden"),H(),i.refs.searchForm.reset(),window.loaderRemove(),e.abrupt("return");case 21:console.log(o),m(),(0,v.createFilmCardMarkup)(o.results),i.refs.searchForm.reset(),i.refs.modalOffer.innerHTML="",window.loaderRemove(),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(11),console.log(e.t0),window.loaderRemove();case 33:case"end":return e.stop()}}),t,null,[[11,29]])})))).apply(this,arguments)}function H(){setTimeout((function(){i.refs.massages.classList.add("hidden")}),5e3)}i.refs.searchForm.addEventListener("submit",(function(e){return N.apply(this,arguments)})),a("44sU7");l=a("gyWj4"),g=a("bpxeT"),h=a("2TvXO"),i=a("7Sf3J"),g=a("bpxeT"),h=a("2TvXO");var B=a("dGF2p");v=a("5vsmo");function A(e){return R.apply(this,arguments)}function R(){return(R=e(g)(e(h).mark((function t(n){var r,a,i,o,s,c,l,u,d,f;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,a=n.poster_path,i=n.genre_ids,o=n.title,s=n.release_date,c=n.vote_average,l="",e.prev=2,e.next=5,(0,B.getGenres)();case 5:u=e.sent,l=u.filter((function(e){return i.includes(e.id)})).map((function(e){return e.name})).join(", "),d=localStorage.getItem("siteOptions"),""===l&&"ua"===d&&(l="Потрібно подивитись"),""===l&&"en"===d&&(l="Need watch"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:return f=a?"https://image.tmdb.org/t/p/w500".concat(a):v.DEFAULT_IMG,e.abrupt("return",'<li class="input-offer__item" data-id="'.concat(r,'">              \n              <img class="input-offer__img" src="').concat(f,'" alt="').concat(o,'"\n              loading="lazy" width="70" height="150">              \n              <div class="input-offer__desc">                        \n                  <h3 class="input-offer__title">').concat(o,'</h3>\n                  <p class="input-offer__genres">').concat(l,'</p>\n                  <p id="release_date">\n                  ').concat(s,'<span class="film-card__rating input-offer__rating">').concat(c,"</span>\n                  </p>                      \n              </div>              \n          </li>"));case 18:case"end":return e.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}s=a("9GT1X");var C={},G=a("l5bVx"),W="Expected a function",D=/^\s+|\s+$/g,P=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,X=/^0o[0-7]+$/i,J=parseInt,U="object"==typeof t&&t&&t.Object===Object&&t,z="object"==typeof self&&self&&self.Object===Object&&self,Y=U||z||Function("return this")(),$=Object.prototype.toString,K=Math.max,V=Math.min,Z=function(){return Y.Date.now()};function Q(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(W);function p(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function m(e){return l=e,s=setTimeout(g,t),u?p(e):o}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function g(){var e=Z();if(v(e))return h(e);s=setTimeout(g,function(e){var n=t-(e-c);return d?V(n,i-(e-l)):n}(e))}function h(e){return s=void 0,f&&r?p(e):(r=a=void 0,o)}function w(){var e=Z(),n=v(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return m(c);if(d)return s=setTimeout(g,t),p(c)}return void 0===s&&(s=setTimeout(g,t)),o}return t=te(t)||0,ee(n)&&(u=!!n.leading,i=(d="maxWait"in n)?K(te(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),w.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},w.flush=function(){return void 0===s?o:h(Z())},w}function ee(t){var n=void 0===t?"undefined":e(G)(t);return!!t&&("object"==n||"function"==n)}function te(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(G)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==$.call(t)}(t))return NaN;if(ee(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=ee(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(D,"");var r=q.test(t);return r||X.test(t)?J(t.slice(2),r?2:8):P.test(t)?NaN:+t}C=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(W);return ee(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),Q(e,t,{leading:r,maxWait:t,trailing:a})};function ne(){return(ne=e(g)(e(h).mark((function t(n){var r,a,o,c,l,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=n.target.value.trim()).length<3)){e.next=5;break}return i.refs.searchInput.classList.add("not-valid"),i.refs.modalOffer.innerHTML="",e.abrupt("return");case 5:return i.refs.modalOffer.innerHTML="",i.refs.searchInput.classList.remove("not-valid"),"/search/movie",a={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(r))},e.prev=9,(0,s.makeLangParam)(a),e.next=13,window.filmoteka.fetchFilms(a);case 13:if((o=e.sent).results.sort((function(e,t){return t.vote_average-e.vote_average})),c=3,0!==o.results.length){e.next=18;break}return e.abrupt("return");case 18:o.results.length<c&&(c=o.results.length),l="",u=0;case 21:if(!(u<c)){e.next=29;break}return e.t0=l,e.next=25,A(o.results[u]);case 25:l=e.t0+=e.sent;case 26:u+=1,e.next=21;break;case 29:i.refs.modalOffer.insertAdjacentHTML("beforeend",l),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(9),console.log(e.t1);case 35:case"end":return e.stop()}}),t,null,[[9,32]])})))).apply(this,arguments)}i.refs.searchInput.addEventListener("input",C((function(e){return ne.apply(this,arguments)}),1e3)),i.refs.searchInput.addEventListener("focusout",(function(e){setTimeout((function(){i.refs.modalOffer.classList.add("visually-hidden")}),150)})),i.refs.searchInput.addEventListener("focusin",(function(e){i.refs.modalOffer.classList.remove("visually-hidden")})),i.refs.modalOffer.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"LI"===e.target.nodeName){i.refs.modalOffer.innerHTML="",i.refs.searchForm.reset(),i.refs.modalOverlay.classList.remove("visually-hidden");var t=e.target.dataset.id;window.modal.openModal(t),i.refs.modalOverlay.dataset.modal=t}})),a("dldig"),window.filmoteka=new(0,o.Filmoteka),window.fireBase=new(0,l.FireBaseData),window.movieLibrary=new(0,c.MovieLibrary),window.filterHendler=new y,window.modal=new(0,T.Modal),window.loader=I.spinerStart,window.loaderRemove=I.spinerStop;new j;i.refs.login.addEventListener("click",(function(e){window.fireBase.login()})),window.addEventListener("scroll",u.hidenButton),document.querySelector(".btn-up").addEventListener("click",u.upClick),(0,s.setLanguage)(),window.movieLibrary.updateLang(),document.querySelector(".translate").addEventListener("click",(function(){(0,s.changeLanguage)(),localStorage.removeItem("newsArr"),location.reload()})),(0,d.setColor)(),i.refs.colorSelector.addEventListener("click",d.changeColor),function(){var e=document.querySelector("#rating-filter");e.addEventListener("change",window.filterHendler.ratingFilterOnChange),localStorage.getItem("filterByRating")&&(window.filmoteka.filterByRating=localStorage.getItem("filterByRating"),e.value=localStorage.getItem("filterByRating"));var t=document.querySelector("#genre-filter");t.addEventListener("change",window.filterHendler.genreFilterOnChange),localStorage.getItem("filterByGenre")&&(window.filmoteka.filterByGenre=localStorage.getItem("filterByGenre"),t.value=localStorage.getItem("filterByGenre"));var n=document.querySelector("#date-filter");n.addEventListener("change",window.filterHendler.dataFilterOnChange),localStorage.getItem("dataFilter")&&(window.filmoteka.dataFilter=localStorage.getItem("dataFilter"),n.value=localStorage.getItem("dataFilter"));window.filterHendler.updateFilters()}(),function(){F.apply(this,arguments)}()}();
//# sourceMappingURL=index.aff3ff4b.js.map