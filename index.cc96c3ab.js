!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequired76b;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired76b=a);var i=a("7Sf3J"),o=a("8x2sk"),s=a("9GT1X"),c=a("8kBMg"),l=a("gyWj4"),u=a("aHxE2"),d=a("9Isww"),f=a("8MBJY"),p=a("a2hTj");i=a("7Sf3J"),i=a("7Sf3J");function m(){i.refs.container.innerHTML="",i.refs.container.dataset.ids=""}var v=a("5vsmo"),g=a("bpxeT"),w=a("2TvXO");v=a("5vsmo"),i=a("7Sf3J");function h(e,n){var t=e.page,r=e.total_pages;var a=function(e){switch(e){case"trand":return console.log("trand-true"),i.refs.numbersPageTrand;case"filter":return console.log("filter-true"),i.refs.numbersPageFilter;case"search":return console.log("search-true"),i.refs.numbersPageSearch;default:return i.refs.numbersPageTrand}}(n);i.refs.numbersPageFilter.innerHTML="",i.refs.numbersPageSearch.innerHTML="",i.refs.numbersPageTrand.innerHTML="";var o=[];if(document.documentElement.clientWidth>767){if(r>9&&t<6){o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var s=1;s<=r;s+=1){if(s>8){o.push('<span class="container__numbers-span">...</span>'),o.push('<li class="container__numbers-item" data-page="'.concat(r,'">').concat(r,"</li>"));break}o.push('<li class="container__numbers-item" data-page="'.concat(s,'">').concat(s,"</li>"))}o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.insertAdjacentHTML("beforeend",o.join(""))}if(r<9){for(var c=1;c<=r&&!(c>9);c+=1)o.push('<li class="container__numbers-item" data-page="'.concat(c,'">').concat(c,"</li>"));a.insertAdjacentHTML("beforeend",o.join(""))}if(r>9&&t>=6&&t<r-6){o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),o.push('<li class="container__numbers-item" data-page="1">1</li>'),o.push('<span class="container__numbers-span">...</span>');for(var l=t-2;l<t;l+=1)o.push('<li class="container__numbers-item" data-page="'.concat(l,'">').concat(l,"</li>"));o.push('<li class="container__numbers-item" data-page="'.concat(t,'">').concat(t,"</li>"));for(var u=t+1;u<t+3;u+=1)o.push('<li class="container__numbers-item" data-page="'.concat(u,'">').concat(u,"</li>"));o.push('<span class="container__numbers-span">...</span>'),o.push('<li class="container__numbers-item" data-page="'.concat(r,'">').concat(r,"</li>")),o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.insertAdjacentHTML("beforeend",o.join(""))}if(r>9&&t>r-6){o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(var d=r;d>=r-8;d-=1)o.push('<li class="container__numbers-item" data-page="'.concat(d,'">').concat(d,"</li>"));o.push('<span class="container__numbers-span">...</span>'),o.push('<li class="container__numbers-item" data-page="1">1</li>'),o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),a.insertAdjacentHTML("beforeend",o.reverse().join(""))}}else{if(r>5&&t<4){o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var f=1;f<=r&&!(f>5);f+=1)o.push('<li class="container__numbers-item" data-page="'.concat(f,'">').concat(f,"</li>"));o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.insertAdjacentHTML("beforeend",o.join(""))}if(r<6){for(var p=1;p<=r&&!(p>5);p+=1)o.push('<li class="container__numbers-item" data-page="'.concat(p,'">').concat(p,"</li>"));a.insertAdjacentHTML("beforeend",o.join(""))}if(r>5&&t>=4&&t<r-4){o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var m=t-2;m<t;m+=1)o.push('<li class="container__numbers-item" data-page="'.concat(m,'">').concat(m,"</li>"));o.push('<li class="container__numbers-item" data-page="'.concat(t,'">').concat(t,"</li>"));for(var v=t+1;v<t+3;v+=1)o.push('<li class="container__numbers-item" data-page="'.concat(v,'">').concat(v,"</li>"));o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.insertAdjacentHTML("beforeend",o.join(""))}if(r>5&&t>r-4){o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(var g=r;g>=r-5;g-=1)o.push('<li class="container__numbers-item" data-page="'.concat(g,'">').concat(g,"</li>"));o.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),a.insertAdjacentHTML("beforeend",o.reverse().join(""))}}document.querySelector('[data-page="'.concat(t,'"]')).classList.add("is-active-page")}s=a("9GT1X");function b(e){(function(e){return _.apply(this,arguments)})(e).then((function(e){return m(),(0,v.createFilmCardMarkup)(e.results),e})).then((function(e){h(e,"trand")}))}function _(){return(_=e(g)(e(w).mark((function n(t){var r,a;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",r={option:"/trending/movie/day",page:t},(0,s.makeLangParam)(r),window.loader(),e.prev=4,e.next=7,window.filmoteka.fetchFilms(r);case 7:return a=e.sent,window.loaderRemove(),e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0),window.loaderRemove();case 16:case"end":return e.stop()}}),n,null,[[4,12]])})))).apply(this,arguments)}var y=function(){"use strict";function n(){e(f)(this,n);var t=(new Date).getFullYear();i.refs.dateFilter.innerHTML=function(){for(var e='<option value="" selected data-text="yearsFilter">Years</option>',n=t;n>=1900;n-=1)e+='<option value="'.concat(n,'">').concat(n,"</option>");return e}()}return e(p)(n,[{key:"ratingFilterOnChange",value:function(e){var n=e.target.value;""===n?(localStorage.setItem("filterByRating",""),window.filmoteka.filterByRating=""):(window.filmoteka.filterByRating=n,localStorage.setItem("filterByRating",n)),window.filterHendler.updateFilters()}},{key:"genreFilterOnChange",value:function(e){var n=e.target.value;""===n?(localStorage.setItem("filterByGenre",""),window.filmoteka.filterByGenre=""):(window.filmoteka.filterByGenre=n,localStorage.setItem("filterByGenre",n)),window.filterHendler.updateFilters()}},{key:"dataFilterOnChange",value:function(e){var n=e.target.value;""===n?(localStorage.setItem("dataFilter",""),window.filmoteka.dataFilter=""):(window.filmoteka.dataFilter=n,localStorage.setItem("dataFilter",n)),window.filterHendler.updateFilters()}},{key:"updateFilters",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(localStorage.getItem("filterByRating")||localStorage.getItem("filterByGenre")||localStorage.getItem("dataFilter")){window.loader();var n={region:"",page:e,option:"/discover/movie"};filmoteka.fetchFilms(n).then((function(e){console.log(e),m(),(0,v.createFilmCardMarkup)(e.results),h(e,"filter")})).finally((function(){return window.loaderRemove()}))}else b()}}]),n}(),L=a("bUH0J"),x=a("j0SV0");g=a("bpxeT"),w=a("2TvXO"),i=a("7Sf3J"),v=a("5vsmo"),s=a("9GT1X");i.refs.searchForm.addEventListener("submit",F);var k="",T=1;function F(e){return S.apply(this,arguments)}function S(){return(S=e(g)(e(w).mark((function n(t){var r,a;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&(t.preventDefault(),k=i.refs.searchInput.value),"/search/movie",console.log(k),r={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(k.trim())),page:T},""!==k){e.next=8;break}return i.refs.massages.classList.remove("hidden"),I(),e.abrupt("return");case 8:return(0,s.makeLangParam)(r),window.loader(),e.prev=10,e.next=13,window.filmoteka.fetchFilms(r);case 13:if(a=e.sent,console.log(a),0!==a.results.length){e.next=21;break}return i.refs.massages.classList.remove("hidden"),I(),i.refs.searchForm.reset(),window.loaderRemove(),e.abrupt("return");case 21:console.log(a),m(),(0,v.createFilmCardMarkup)(a.results),i.refs.searchForm.reset(),i.refs.modalOffer.innerHTML="",h(a,"search"),window.loaderRemove(),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(10),console.log(e.t0),window.loaderRemove();case 34:case"end":return e.stop()}}),n,null,[[10,30]])})))).apply(this,arguments)}function I(){setTimeout((function(){i.refs.massages.classList.add("hidden")}),5e3)}var j=F;a("44sU7");l=a("gyWj4"),g=a("bpxeT"),w=a("2TvXO"),i=a("7Sf3J"),g=a("bpxeT"),w=a("2TvXO");var M=a("dGF2p");v=a("5vsmo");function O(e){return H.apply(this,arguments)}function H(){return(H=e(g)(e(w).mark((function n(t){var r,a,i,o,s,c,l,u,d,f;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,a=t.poster_path,i=t.genre_ids,o=t.title,s=t.release_date,c=t.vote_average,l="",e.prev=2,e.next=5,(0,M.getGenres)();case 5:u=e.sent,l=u.filter((function(e){return i.includes(e.id)})).map((function(e){return e.name})).join(", "),d=localStorage.getItem("siteOptions"),""===l&&"ua"===d&&(l="Потрібно подивитись"),""===l&&"en"===d&&(l="Need watch"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:return f=a?"https://image.tmdb.org/t/p/w500".concat(a):v.DEFAULT_IMG,e.abrupt("return",'<li class="input-offer__item" data-id="'.concat(r,'">              \n              <img class="input-offer__img" src="').concat(f,'" alt="').concat(o,'"\n              loading="lazy" width="70" height="150">              \n              <div class="input-offer__desc">                        \n                  <h3 class="input-offer__title">').concat(o,'</h3>\n                  <p class="input-offer__genres">').concat(l,'</p>\n                  <p id="release_date">\n                  ').concat(s,'<span class="film-card__rating input-offer__rating">').concat(c,"</span>\n                  </p>                      \n              </div>              \n          </li>"));case 18:case"end":return e.stop()}}),n,null,[[2,12]])})))).apply(this,arguments)}s=a("9GT1X");var B={},E=a("l5bVx"),R="Expected a function",C=/^\s+|\s+$/g,G=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,N=/^0o[0-7]+$/i,A=parseInt,q="object"==typeof n&&n&&n.Object===Object&&n,J="object"==typeof self&&self&&self.Object===Object&&self,X=q||J||Function("return this")(),D=Object.prototype.toString,U=Math.max,W=Math.min,$=function(){return X.Date.now()};function Y(e,n,t){var r,a,i,o,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(R);function p(n){var t=r,i=a;return r=a=void 0,l=n,o=e.apply(i,t)}function m(e){return l=e,s=setTimeout(g,n),u?p(e):o}function v(e){var t=e-c;return void 0===c||t>=n||t<0||d&&e-l>=i}function g(){var e=$();if(v(e))return w(e);s=setTimeout(g,function(e){var t=n-(e-c);return d?W(t,i-(e-l)):t}(e))}function w(e){return s=void 0,f&&r?p(e):(r=a=void 0,o)}function h(){var e=$(),t=v(e);if(r=arguments,a=this,c=e,t){if(void 0===s)return m(c);if(d)return s=setTimeout(g,n),p(c)}return void 0===s&&(s=setTimeout(g,n)),o}return n=z(n)||0,V(t)&&(u=!!t.leading,i=(d="maxWait"in t)?U(z(t.maxWait)||0,n):i,f="trailing"in t?!!t.trailing:f),h.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},h.flush=function(){return void 0===s?o:w($())},h}function V(n){var t=void 0===n?"undefined":e(E)(n);return!!n&&("object"==t||"function"==t)}function z(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":e(E)(n))||function(e){return!!e&&"object"==typeof e}(n)&&"[object Symbol]"==D.call(n)}(n))return NaN;if(V(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=V(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(C,"");var r=P.test(n);return r||N.test(n)?A(n.slice(2),r?2:8):G.test(n)?NaN:+n}B=function(e,n,t){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(R);return V(t)&&(r="leading"in t?!!t.leading:r,a="trailing"in t?!!t.trailing:a),Y(e,n,{leading:r,maxWait:n,trailing:a})};function K(){return(K=e(g)(e(w).mark((function n(t){var r,a,o,c,l,u;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=t.target.value.trim()).length<3)){e.next=5;break}return i.refs.searchInput.classList.add("not-valid"),i.refs.modalOffer.innerHTML="",e.abrupt("return");case 5:return i.refs.modalOffer.innerHTML="",i.refs.searchInput.classList.remove("not-valid"),"/search/movie",a={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(r))},e.prev=9,(0,s.makeLangParam)(a),e.next=13,window.filmoteka.fetchFilms(a);case 13:if((o=e.sent).results.sort((function(e,n){return n.vote_average-e.vote_average})),c=3,0!==o.results.length){e.next=18;break}return e.abrupt("return");case 18:o.results.length<c&&(c=o.results.length),l="",u=0;case 21:if(!(u<c)){e.next=29;break}return e.t0=l,e.next=25,O(o.results[u]);case 25:l=e.t0+=e.sent;case 26:u+=1,e.next=21;break;case 29:i.refs.modalOffer.insertAdjacentHTML("beforeend",l),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(9),console.log(e.t1);case 35:case"end":return e.stop()}}),n,null,[[9,32]])})))).apply(this,arguments)}i.refs.searchInput.addEventListener("input",B((function(e){return K.apply(this,arguments)}),1e3)),i.refs.searchInput.addEventListener("focusout",(function(e){setTimeout((function(){i.refs.modalOffer.classList.add("visually-hidden")}),150)})),i.refs.searchInput.addEventListener("focusin",(function(e){i.refs.modalOffer.classList.remove("visually-hidden")})),i.refs.modalOffer.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"LI"===e.target.nodeName){i.refs.modalOffer.innerHTML="",i.refs.searchForm.reset(),i.refs.modalOverlay.classList.remove("visually-hidden");var n=e.target.dataset.id;window.modal.openModal(n),i.refs.modalOverlay.dataset.modal=n}})),a("dldig"),window.filmoteka=new(0,o.Filmoteka),window.fireBase=new(0,l.FireBaseData),window.movieLibrary=new(0,c.MovieLibrary),window.filterHendler=new y,window.modal=new(0,L.Modal),window.loader=x.spinerStart,window.loaderRemove=x.spinerStop,i.refs.login.addEventListener("click",(function(e){window.fireBase.login()})),window.addEventListener("scroll",u.hidenButton),document.querySelector(".btn-up").addEventListener("click",u.upClick),(0,s.setLanguage)(),window.movieLibrary.updateLang(),document.querySelector(".translate").addEventListener("click",(function(){(0,s.changeLanguage)(),localStorage.removeItem("newsArr"),location.reload()})),(0,d.setColor)(),i.refs.colorSelector.addEventListener("click",d.changeColor),function(){var e=document.querySelector("#rating-filter");e.addEventListener("change",window.filterHendler.ratingFilterOnChange),localStorage.getItem("filterByRating")&&(window.filmoteka.filterByRating=localStorage.getItem("filterByRating"),e.value=localStorage.getItem("filterByRating"));var n=document.querySelector("#genre-filter");n.addEventListener("change",window.filterHendler.genreFilterOnChange),localStorage.getItem("filterByGenre")&&(window.filmoteka.filterByGenre=localStorage.getItem("filterByGenre"),n.value=localStorage.getItem("filterByGenre"));var t=document.querySelector("#date-filter");t.addEventListener("change",window.filterHendler.dataFilterOnChange),localStorage.getItem("dataFilter")&&(window.filmoteka.dataFilter=localStorage.getItem("dataFilter"),t.value=localStorage.getItem("dataFilter"));window.filterHendler.updateFilters()}(),i.refs.numbersPageTrand.addEventListener("click",(function(e){"LI"===e.target.nodeName&&b(e.target.textContent)})),i.refs.numbersPageFilter.addEventListener("click",(function(e){"LI"===e.target.nodeName&&window.filterHendler.updateFilters(e.target.textContent)})),i.refs.numbersPageSearch.addEventListener("click",(function(e){"LI"===e.target.nodeName&&(n=e.target.textContent,T=n,j());var n}))}();
//# sourceMappingURL=index.cc96c3ab.js.map
