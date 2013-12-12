/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: v3.1.7-development Build: 2013-12-12 12:49 PM EST
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-fegc",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");b.gridsmenu=pe.main.find(".module-menu-section");var i=pe.menu.navcurrent(b.menubar,b.bcrumb),h=i.parents("div.mb-sm"),d,g,k,f,j,e;if(!pe.svg||pe.svgfix){e=b.sft.length!==0;j=function(m){var n=c("#gcwu-wmms img, #gcwu-sig img, #gcwu-sig-coa img").get(),l=n.length,o;while(l--){o=n[l];o.src=(m?o.src.replace(".png","-alt.png"):o.src.replace("-alt.png",".png"))}};if(e){window.onbeforeprint=function(){j(true)};window.onafterprint=function(){j(false)}}g=c("#gcwu-wmms-in, #gcwu-sig-in, #gcwu-sig-coa-in").get();d=g.length;while(d--){k=g[d];f=k.getElementsByTagName("object");if(f.length>0){k.innerHTML=k.innerHTML.replace(/<object[\s\S]*?\/object>/i,f[0].innerHTML)}}}if(h.length!==0){h.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){i=pe.menu.navcurrent(pe.secnav,b.bcrumb);h=i.parents("ul");h.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){i=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var A,T="",e,p,ac=pe.dic.get("%settings"),E=pe.dic.get("%hyphen")+pe.dic.get("%main-page"),F,v,f,n,aa,af="",x='<a data-role="button" data-iconpos="notext"',H=' data-rel="popup" data-position-to="window"',r=x+H,I='<div data-role="popup" data-overlay-theme="a"',L='<div data-role="header"',ae=L+"><h1>",G=' data-theme="c" class="ui-corner-all">',s=L+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',ab=x+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",W=r+' data-icon="back" class="ui-btn-left"',U=">"+pe.dic.get("%back")+"</a>",ad="</div></div>",q='<ul data-role="listview"',B="",P,m,w,t,N,g,d,Z,Y,y,o,Q,K,k,D=c(document),V,l,C,S,M,X,J,R,u,O,z=typeof wet_boew_mobile_view!=="undefined"&&wet_boew_mobile_view.header_fixed;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");v=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");A=I+' id="jqm-wb-mb" class="jqm-wb-mb">'+ae+e+"</h1>"+ab+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){K=b.bcrumb[0];P=K.getElementsByTagName("a");if(P.length!==0){V=P[0].href}A+='<section><div id="jqm-mb-location-text">'+K.innerHTML+"</div></section>"}else{A+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){T+="<section><div><h2>"+v.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){T+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}A+='<div id="jqm-mb-menu"></div></nav></div></div></div>';af+=A;b.menu=T;B+=r+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){p=pe.dic.get("%search");f=b.search[0];n=f.innerHTML;f=f.getElementsByTagName("input");y=f.length;while(y--){f[y].setAttribute("data-role","none")}aa=I+' id="jqm-wb-search">'+ae+p+"</h1>"+ab+'</div><div data-role="content"><div>'+n.substring(n.indexOf("<form"))+"</div></div></div>";af+=aa;B+=r+' data-icon="search" href="#jqm-wb-search">'+p+"</a>"}l='<div data-role="header"'+(z?' data-position="fixed"':"")+'><div class="ui-title"><div></div></div><map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof V!=="undefined"){l+=x+' href="'+V+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){l+=x+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(B.length!==0){l+=B}l+=r+' href="#popupSettings" data-icon="gear">'+ac+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(l);b.gcnb.find(".ui-title").append(c("#gcwu-wmms").clone());b.title[0].className+=" ui-bar-b";J=document.getElementById("wb-session");t=b.gcnb.find('li[id*="-lang"]');F=I+' id="popupSettings"'+G;F+=s+ac+"</h1>"+ab+"</div>";F+=h+q+">";if(J!==null){S=J.getElementsByClassName("settings");for(Z=0,y=S.length;Z!==y;Z+=1){M=S[Z].getElementsByTagName("a")[0];F+='<li><a href="'+M.getAttribute("href")+'">'+M.innerHTML+"</a></li>"}X=J.getElementsByClassName("session")[0].getElementsByTagName("a")[0];F+='<li><a href="'+X.getAttribute("href")+'">'+X.innerHTML+"</a></li>"}if(t.length!==0){F+='<li><a href="#popupLanguages"'+H+">"+pe.dic.get("%languages")+"</a></li>"}F+='<li class="ui-corner-bottom"><a href="#popupAbout"'+H+">"+pe.dic.get("%about")+"</a></li>";F+="</ul>"+ad;if(t.length!==0){F+=I+' id="popupLanguages"'+G;F+=s+pe.dic.get("%languages")+"</h1>"+W+' href="#popupSettings"'+U+ab+"</div>";F+=h+q+">";if(t.filter('[id*="-lang-current"]').length===0){F+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}Q=t.get();y=Q.length;Z=y;while(Z--){K=Q[Z];m=K.getElementsByTagName("a")[0];F+="<li"+(Z===0?' class="ui-corner-bottom"':"");if(K.id.indexOf("-lang-current")!==-1){F+='><a href="javascript:;" class="ui-disabled">'+K.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{F+='><a href="'+m.href+'" lang="'+m.getAttribute("lang")+'">'+m.innerHTML+"</a></li>"}}F+="</ul>"+ad}F+=I+' id="popupAbout" data-theme="c" class="ui-corner-all jqm-wb-mb">';F+=s+pe.dic.get("%about")+"</h1>"+W+' href="#popupSettings"'+U+ab+"</div>";F+=h;F+='<div class="site-app-title"><div class="ui-title">'+b.title[0].getElementsByTagName("a")[0].innerHTML+"</div></div>";K=pe.main.find("#gcwu-date-mod").children();if(K.length!==0){d=K[1];if(d.getElementsByTagName("time").length===0){F+='<div class="app-version">'+K[0].innerHTML+" "+d.innerHTML+"</div>"}}F+='<div data-role="controlgroup" data-theme="c"><div data-role="collapsible-set" data-inset="false">';F+=q+">";P=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(Z=0,y=P.length;Z!==y;Z+=1){m=P[Z];F+='<li class="top-level'+(Z===0?" ui-corner-top":"")+'"><a href="'+m.href+'">'+m.innerHTML+"</a></li>"}F+="</ul>";Q=b.sft.find(".gcwu-col-head");R=false;y=Q.length;for(Z=0;Z!==y;Z+=1){K=Q.eq(Z);m=K.children("a");k=K.find("+ ul, + address ul");d=m.length!==0?m[0].innerHTML:K[0].innerHTML;if(k.length!==0){if(R){F+="</ul>";R=false}F+='<div class="wb-nested-menu" data-role="collapsible"><h2>'+d+"</h2>"+q+">";P=k[0].getElementsByTagName("a");for(Y=0,o=P.length;Y!==o;Y+=1){K=P[Y];F+='<li><a href="'+K.href+'">'+K.innerHTML+"</a></li>"}if(m.length!==0){F+='<li><a href="'+m.attr("href")+'">'+m.html()+E+"</a></li>"}F+="</ul></div>"}else{if(m.length!==0){if(!R){F+=q+">";R=true}F+='<li class="top-level'+(Z===0?" ui-corner-top":"")+'"><a href="'+m.attr("href")+'">'+m.html()+"</a></li>"}}}if(R){F+="</ul>"}u=b.gcnb.find("#gcwu-sig-in, #gcwu-sig-coa-in").children();if(u.length!==0){F+='<div class="wb-nested-menu" data-role="collapsible"><h2>'+(typeof u.attr("aria-label")!=="undefined"?u.attr("aria-label"):u.attr("alt"))+"</h2>"+q+">";Q=b.gcnb.find("li").add(b.gcft.find("li")).get();y=Q.length;for(Z=0;Z!==y;Z+=1){K=Q[Z];O=K.id;if(O.indexOf("gcwu-gcnb-lang")===-1&&O!=="gcwu-gcft-ca"){m=K.getElementsByTagName("a");if(m.length!==0){m=m[0];F+='<li><a href="'+m.href+(m.hasAttribute("target")?'" target="'+m.getAttribute("target"):"")+'">'+m.innerHTML+"</a></li>"}}}F+="</ul></div>"}d=F.lastIndexOf("<li");o=F.indexOf("<li class",d)===d?11:3;F=F.substring(0,d)+'<li class="ui-corner-bottom'+(o===3?'"':" ")+F.substring(d+o)+"</ul></div></div>"+ad;pe.bodydiv.append(af+F)}else{t=document.getElementById("gcwu-lang");if(t!==null){Q=t.getElementsByTagName("li");N='<div data-role="navbar"><ul>';for(Z=0,y=Q.length;Z<y;Z+=1){K=Q[Z];m=K.getElementsByTagName("a")[0];N+='<li><a href="'+m.href+'"'+(K.hasAttribute("lang")?' lang="'+K.getAttribute("lang")+'"':"")+' data-theme="a">'+m.innerHTML+"</a></li>"}N+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=N;t=document.getElementById("gcwu-other-lang");if(t!==null){t.parentNode.removeChild(t)}}d=document.getElementById("gcwu-tc");if(d!==null){Q=d.getElementsByTagName("li");w='<ul class="ui-grid-a">';for(Z=0,y=Q.length;Z<y;Z+=1){K=Q[Z];m=K.getElementsByTagName("a")[0];w+='<li class="ui-block-'+(Z%2!==0?"b":"a")+'"><a href="'+m.href+'"'+(K.hasAttribute("lang")?' lang="'+K.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+m.innerHTML+"</a></li>"}w+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=w}C=document.getElementById("gcwu-wmms");if(C!==null){pe.footer[0].getElementsByTagName("footer")[0].appendChild(C)}}D.on("pagecreate",function(){var aj=b.gcnb.find("#gcwu-mnavbar"),ak=pe.bodydiv.find("#jqm-mb-menu"),ai,ag,ah,j;if(aj.length!==0){if(!aj.hasClass("ui-controlgroup")){aj.controlgroup()}aj.removeClass("wb-hide");if(ak.length!==0){ak.append(b.menu);aj.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){ak.trigger("create");ai=ak[0].getElementsByClassName("ui-controlgroup");j=ai.length;while(j--){K=ai[j];ah=K.getElementsByTagName("li")[0];if(ah.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&ah.className.indexOf("ui-corner-top")===-1){ah.className+=" ui-corner-top"}ag=K.getElementsByClassName("ui-btn");ah=ag[ag.length-1];if(typeof ah!=="undefined"&&ah.className.indexOf("ui-corner-bottom")===-1){ah.className+=" ui-corner-bottom"}}})}}function i(am,al,ap,ao){var an;c.mobile.showPageLoadingMsg();an=c.mobile.transitionHandlers.simultaneous("pop",al,ap,ao);an.done(function(){c.mobile.hidePageLoadingMsg()});return an}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});D.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.preIE9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));