/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: v3.1.8-development Build: 2014-01-03 03:29 PM EST
 *
 */
(function(b){var a=window.pe||{fn:{}};a.fn.chartsGraph={generate:function(ag){var H={},r=b(ag),ah=r,o,Y,E=[],J=[],C,A,N,B,W,O,V=[],p,k=[],F=0,n,t,af,ae,ab,e,G,u,aa,P,X,S,c,M,U,R,w,Q,y,L=0,v,T,ai,l,q,ad,z,h="",Z;function d(i){var j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32","accent-1":"#8d201c","accent-2":"#EE8310","accent-3":"#2a7da6","accent-4":"#5a306b","accent-5":"#285228","accent-6":"#154055","accent-7":"#555555","accent-8":"#f6d200","accent-9":"#d73d38","accent-10":"#418541","accent-11":"#87aec9","accent-12":"#23447e","accent-13":"#999999"};if(typeof i==="number"){i="accent-"+(i+1)}return(j[i.toLowerCase()]!=="undefined"?j[i.toLowerCase()]:(b.isArray(H.colors)?H.colors[0]:H.colors))}function m(j,ao,aj){var an="",am="",ak=false,al,i;if(typeof j!=="object"){return{}}j=jQuery.extend(true,{},j);if(typeof ao!=="string"||ao.lenght===0){return j}if(typeof aj!=="string"||aj.lenght===0){if(j["default-namespace"]&&(typeof j["default-namespace"]==="string"||b.isArray(j["default-namespace"]))){aj=j["default-namespace"]}else{return j}}if(j["default-namespace-separator"]&&typeof j["default-namespace-separator"]==="string"){an=j["default-namespace-separator"]}else{an="-"}if(j["default-separator"]&&typeof j["default-separator"]==="string"){am=j["default-separator"]}else{am=" "}if(j["default-autocreate"]){ak=true}i=ao.split(am);b.each(i,function(){var aB,av=j,ax,aw,aC,au,ay,aq,ap,at=false,az=false,aA,ar;if(b.isArray(aj)){for(aw=0,aC=aj.length;aw<aC;aw+=1){if(aj[aw]===(this.length>aj[aw].length+an.length?this.slice(0,aj[aw].length):"")){al=aj[aw].split(an);aB=this.split(an).slice(al.length);break}}}else{if(aj===(this.length>aj.length+an.length?this.slice(0,aj.length):"")){al=aj.split(an);aB=this.split(an).slice(al.length)}}if(aB&&al[al.length-1]){for(aw=0,aC=aB.length;aw<aC;aw+=1){ay=aw+2===aC;aq=aw+1===aC;if(aq&&aC){if(j[aB[aw]+"-autocreate"]||(j[aB[aw]]&&j[aB[aw]+"-typeof"]&&j[aB[aw]+"-typeof"]==="boolean")){aB.push("true");ax=aB[aw];aw+=1;aC=aB.length}else{if(av.preset&&av.preset[aB[aw]]){av=jQuery.extend(true,av,av.preset[aB[aw]]);break}else{if(aC===1){ax=j["default-option"]?j["default-option"]:undefined}else{ax=undefined}}}}else{if(!aq){ax=aB[aw]}}if(av[ax+"-typeof"]){ap=[];for(au=(aw+1);au<aC;au+=1){ap.push(aB[au])}if(aw<aC-1){aB[aw]=ap.join(an)}ay=false;aq=true;switch(av[ax+"-typeof"]){case"boolean":if(aB[aw]==="true"||aB[aw]==="1"||aB[aw]==="vrai"||aB[aw]==="yes"||aB[aw]==="oui"){aB[aw]=true}else{if(aB[aw]==="false"||aB[aw]==="0"||aB[aw]==="faux"||aB[aw]==="no"||aB[aw]==="non"){aB[aw]=false}else{aB[aw]=undefined}}break;case"number":if(!isNaN(parseInt(aB[aw],10))){aB[aw]=parseInt(aB[aw],10)}else{aB[aw]=undefined}break;case"string":break;case"undefined":case"function":case"locked":aB[aw]=undefined;break;default:break}}if(av[ax+"-overwrite-array-mode"]){at=true}if(av[ax+"-autocreate"]){az=true}if(ay&&aB[aw]!==undefined){ax=aB[aw]}else{if(aq&&aB[aw]!==undefined){if(av[ax]&&at){if(b.isArray(av[ax])){av[ax].push(aB[aw])}else{ar=av[ax];av[ax]=[];av[ax].push(ar);av[ax].push(aB[aw])}}else{if(av[ax]||ak||az||av[ax]===0||av[ax]===false){aA="";if(typeof aB[aw]==="boolean"||typeof aB[aw]==="number"){aA='{"'+ax+'": '+aB[aw]+"}"}else{aA='{"'+ax+'": "'+aB[aw]+'"}'}av=jQuery.extend(true,av,jQuery.parseJSON(aA))}}aw=aC}else{if(aB[aw]!==undefined&&av[aB[aw]]){av=av[aB[aw]];ax=aB[aw]}else{if((ak||az)&&aB[aw]!==undefined){aA='{"'+aB[aw]+'": {}}';av=jQuery.extend(true,av,jQuery.parseJSON(aA));av=av[aB[aw]]}else{aw=aC}}}}}}});return j}if(!a.fn.chartsGraph.O){H={"default-namespace":["wb-charts","wb-chart","wb-graph"],"graphclass-autocreate":true,"graphclass-overwrite-array-mode":true,"graphclass-typeof":"string","noencapsulation-autocreate":true,"noencapsulation-typeof":"boolean",uniformtick:true,"uniformtick-typeof":"boolean","uniformtick-autocreate":true,"labelposition-typeof":"number","labelposition-autocreate":true,"legendinline-typeof":"boolean","legendinline-autocreate":true,"nolegend-typeof":"boolean","nolegend-autocreate":true,"percentlegend-typeof":"boolean","percentlegend-autocreate":true,"topvalue-autocreate":true,"topvalue-typeof":"number","topvaluenegative-autocreate":true,"topvaluenegative-typeof":"boolean","bottomvalue-autocreate":true,"bottomvalue-typeof":"number","bottomvaluenegative-autocreate":true,"bottomvaluenegative-typeof":"boolean","ticks-autocreate":true,"ticks-typeof":"number","decimal-autocreate":true,"decimal-typeof":"number",pieradius:100,"pieradius-typeof":"number",pielblradius:100,"pielblradius-typeof":"number","piethreshold-autocreate":true,"piethreshold-typeof":"number","pietilt-autocreate":true,"pietilt-typeof":"number","pieinnerradius-autocreate":true,"pieinnerradius-typeof":"number","piestartangle-autocreate":true,"piestartangle-typeof":"number","piehighlight-autocreate":true,"piehighlight-typeof":"number","piehoverable-autocreate":true,"piehoverable-typeof":"boolean","default-option":"type",type:"bar","type-autocreate":true,width:b(ag).width(),"width-typeof":"number",height:b(ag).height(),"height-typeof":"number",parsedirection:"x","parsedirection-typeof":"string","parsedirection-autocreate":true,getcellvalue:function(j){var i=b.trim(b(j).text());i=i.replace(/\s/g,"");return[parseFloat(i.match(/[\+\-0-9]+[0-9,\. ]*/)),i.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/)]},preset:{donnut:{type:"pie",height:250,percentlegend:true,pieinnerradius:45,pietilt:50,piehoverable:true,decimal:1,piethreshold:8,legendinline:true,piestartangle:100},usnumber:{getcellvalue:function(j){var i=b.trim(b(j).text()).replace(/,/g,"");return[parseFloat(i.match(/[\+\-0-9]+[0-9,\. ]*/)),i.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/)]}},germannumber:{getcellvalue:function(j){var i=b.trim(b(j).text()).replace(/\./g,"");return[parseFloat(i.match(/[\+\-0-9]+[0-9,\. ]*/)),i.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/)]}}}};if(typeof wet_boew_charts!=="undefined"){if(wet_boew_charts.preset){a.fn.chartsGraph.O=jQuery.extend(true,{},wet_boew_charts.preset);delete wet_boew_charts.preset}b.extend(true,H,wet_boew_charts);if(a.fn.chartsGraph.O){b.extend(true,H.preset,a.fn.chartsGraph.O)}}a.fn.chartsGraph.O=H}H=a.fn.chartsGraph.O;H.height=b(ag).height();H.width=b(ag).width();if(!H.width){H.width=250}if(!H.height){H.height=250}H=m(H,(r.attr("class")!==undefined?r.attr("class"):""));b.each(r.data(),function(i,j){if(i.slice(0,8)==="wbcharts"){H[i.slice(8)]=j}});function ac(ap){var aq,ao,an,am,az,aj,ay,aw,ax,au,ak,al,at,av,ar;for(aq=0;aq<ap.theadRowStack.length;aq+=1){az=ap.theadRowStack[aq];for(ao=0;ao<az.cell.length;ao+=1){aj=az.cell[ao];if((aj.type===1||aj.type===7)&&(!(ao>0&&aj.uid===az.cell[ao-1].uid)&&!(aq>0&&aj.uid===ap.theadRowStack[aq-1].cell[ao].uid))){if(!aj.header){aj.header=[]}if(!aj.headers){aj.headers=[]}if(!aj.child){aj.child=[]}if(!aj.childs){aj.childs=[]}if(aq>0){for(an=0;an<ap.theadRowStack[aq-1].cell[ao].header.length;an+=1){aj.headers.push(ap.theadRowStack[aq-1].cell[ao].header[an]);ap.theadRowStack[aq-1].cell[ao].header[an].childs.push(aj)}aj.headers.push(ap.theadRowStack[aq-1].cell[ao]);aj.header.push(ap.theadRowStack[aq-1].cell[ao]);ap.theadRowStack[aq-1].cell[ao].child.push(aj)}if(aj.descCell){aj.descCell.header=aj;aj.descCell.headers=aj}}}}for(aq=0;aq<ap.row.length;aq+=1){az=ap.row[aq];ay=[];aw=[];ax=[];au=[];ak=[];if(az.headerset&&!az.idsheaderset){for(ao=0;ao<az.headerset.length;ao+=1){ay=ay.concat(az.headerset[ao])}az.idsheaderset=ay}if(az.header){for(ao=0;ao<az.header.length;ao+=1){aw=aw.concat(az.header[ao])}}aw=az.idsheaderset.concat(aw);for(ao=0;ao<az.cell.length;ao+=1){if((ao===0)||(ao>0&&az.cell[ao].uid!==az.cell[(ao-1)].uid)){aj=az.cell[ao];ak=[];if(!aj.header){aj.header=[]}if(!aj.headers){aj.headers=[]}if(aj.col&&!aj.col.dataheader){al=aj.col;at=[];av=[];if(al.headerLevel){for(am=0;am<al.headerLevel.length;am+=1){av=av.concat(al.headerLevel[am])}}if(al.header){for(am=0;am<al.header.length;am+=1){at=at.concat(al.header[am])}}if(!al.dataheader){al.dataheader=[]}al.dataheader=al.dataheader.concat(av);al.dataheader=al.dataheader.concat(at)}if(aj.col&&aj.col.dataheader){ak=aj.col.dataheader}if(aj.type===1){if(!aj.child){aj.child=[]}if(!aj.childs){aj.childs=[]}for(am=0;am<au.length;am+=1){if(aj.colpos===(au[am].colpos+au[am].width)){ar=au[am].child.length;if(ar===0||(ar>0&&au[am].child[ar-1].uid!==aj.uid)){au[am].child.push(aj)}}au[am].childs.push(aj)}for(am=0;am<az.idsheaderset.length;am+=1){if(!az.idsheaderset[am].childs){az.idsheaderset[am].childs=[]}az.idsheaderset[am].childs.push(aj)}aj.header=aj.header.concat(au);aj.headers=aj.headers.concat(ak);aj.headers=aj.headers.concat(az.idsheaderset);aj.headers=aj.headers.concat(au);au=au.concat(aj)}if(aj.type===2||aj.type===3){ax=aw;if(aj.addcolheaders){for(am=0;am<aj.addcolheaders.length;am+=1){ak=ak.concat(aj.addcolheaders[am])}}if(aj.addrowheaders){for(am=0;am<aj.addrowheaders.length;am+=1){ax=ax.concat(aj.addrowheaders[am])}}aj.headers=aj.headers.concat(ak);aj.headers=aj.headers.concat(ax);aj.header=aj.headers}}}}}function s(j,i){var aj;i+=1;E.push([j.child.length,i]);for(aj=0;aj<j.child.length;aj+=1){if(j.child[aj].child.length>0){i=s(j.child[aj],i)}}i-=1;return i}function D(j,i){var aj,ak,al=0;i+=1;al=j.flotValue-j.flotDelta;ak=(j.flotDelta/j.child.length);if(!Y||ak<Y){Y=ak}for(aj=0;aj<j.child.length;aj+=1){j.child[aj].flotDelta=ak;al=al+ak;j.child[aj].flotValue=al;if(i===C){J.push([(j.child[aj].flotValue-ak),b(j.child[aj].elem).text()])}if(j.child[aj].child.length>0){D(j.child[aj],i)}}i-=1}function I(ao){var aj,al,an,ak=0,j=0,am=0;E=[];if(!ao.colgrouphead){return}for(al=0;al<ao.colgrouphead.col[0].cell.length;al+=1){aj=ao.colgrouphead.col[0].cell[al];if(al===0||(al>0&&ao.colgrouphead.col[0].cell[al-1].uid!==aj.uid)){if(aj.rowgroup&&aj.rowgroup.type===3){break}if(aj.type===1||aj.type===7){ak+=1;if(aj.child.length>0){j=s(aj,j)}}}}E.push([ak,j]);an=E[0][0];for(al=1;al<E.length;al+=1){an=an*E[al][0]}C=ao.colgrouphead.col.length-1;J=[];j=0;for(al=0;al<ao.colgrouphead.col[0].cell.length;al+=1){aj=ao.colgrouphead.col[0].cell[al];if(al===0||(al>0&&ao.colgrouphead.col[0].cell[al-1].uid!==aj.uid)){if(aj.rowgroup&&aj.rowgroup.type===3){break}if(aj.type===1||aj.type===7){aj.flotDelta=(an/ak);if(!Y||aj.flotDelta<Y){Y=aj.flotDelta}am+=aj.flotDelta;aj.flotValue=am;if(j===C||((aj.colpos-1)<C&&C<=((aj.colpos-1)+(aj.width-1)))){J.push([(aj.flotValue-aj.flotDelta),b(aj.elem).text()])}if(aj.child.length>0){D(aj,j)}}}}return J}function f(j,i){var aj;if(j.child.length===0){return}i+=1;E.push([j.child.length,i]);for(aj=0;aj<j.child.length;aj+=1){f(j.child[aj],i)}i-=1}function x(aj,j){var ak,al,am=0,i=aj.groupZero.theadRowStack.length-1;if(aj.child.length===0){return}j+=1;am=aj.flotValue;al=(!H.uniformtick?(aj.flotDelta/aj.child.length):1);if(!o||al<o){o=al}for(ak=0;ak<aj.child.length;ak+=1){aj.child[ak].flotDelta=al;if(j===C){J.push([(!H.uniformtick?am:A),b(aj.child[ak].elem).text()])}if(j===i||((aj.rowpos-1)<i&&i<=((aj.rowpos-1)+(aj.height-1)))||i===((aj.rowpos-1)+(aj.height-1))){A+=al}aj.child[ak].flotValue=am;am=am+al;x(aj.child[ak],j)}j-=1}function g(ar){var al=-1,aj=-1,an=0,j,aq=0,ak=0,ap=0,ao,am;if(!ar.theadRowStack){return}for(ao=0;ao<ar.colgroup.length;ao+=1){if(ar.colgroup[ao].type===2){al=ar.colgroup[ao].start;aj=ar.colgroup[ao].end;break}}E=[];for(ao=0;ao<ar.theadRowStack[0].elem.cells.length;ao+=1){j=b(ar.theadRowStack[0].elem.cells[ao]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=al&&(j.type===1||j.type===7)){an+=1;aq+=j.width;f(j,ak)}}E.push([an,ak]);am=E[0][0];for(ao=1;ao<E.length;ao+=1){am=am*E[ao][0]}C=(!H.labelposition||(H.labelposition&&H.labelposition>ar.theadRowStack.length)?ar.theadRowStack.length:H.labelposition)-1;J=[];A=0;ak=0;for(ao=0;ao<ar.theadRowStack[0].elem.cells.length;ao+=1){j=b(ar.theadRowStack[0].elem.cells[ao]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=al&&(j.type===1||j.type===7)){j.flotDelta=(!H.uniformtick?(am/an):1);if(!o||j.flotDelta<o){o=j.flotDelta}j.flotValue=ap;if(ak===C||((j.rowpos-1)<C&&C<=((j.rowpos-1)+(j.height-1)))){J.push([(!H.uniformtick?ap:A),b(j.elem).text()])}if(ak===(ar.theadRowStack.length-1)||((j.rowpos-1)<(ar.theadRowStack.length-1)&&(ar.theadRowStack.length-1)<=((j.rowpos-1)+(j.height-1)))||(ar.theadRowStack.length-1)===((j.rowpos-1)+(j.height-1))){A+=j.flotDelta}ap+=j.flotDelta;x(j,ak)}}return J}function K(){var ak=[],am=0,at,al=0,ax="Table caption tag is missing",ao=10,aw=0,au,av=[],aj,aq,ap,an,ar;ax=b("caption",ah).text();b("tr ",ah).each(function(){ao+=1;if(aw<1){b("td,th",b(this)).each(function(){if(b(this).attr("colspan")===undefined){b(this).attr("colspan",1)}ao+=Number(b(this).attr("colspan"))})}aw+=1});for(aw=0;aw<ao;aw+=1){av[aw]=[];for(au=0;au<ao;au+=1){av[aw][au]=0}}b("tr ",ah).each(function(){al=0;var j=1,i=1;b("td,th",b(this)).each(function(){if(b(this).attr("colspan")===undefined){b(this).attr("colspan",1)}if(b(this).attr("rowspan")===undefined){b(this).attr("rowspan",1)}j=Number(b(this).attr("colspan"));i=Number(b(this).attr("rowspan"));while(av[am][al]===3){al+=1}var az=am,aC=am+i-1,aB,ay,aA;if(i>1&&j>1){aB=al;ay=al+j-1;for(aB=al;aB<=ay;aB+=1){for(az=am;az<=aC;az+=1){av[az][aB]=3}}}else{if(i>1){for(az=am;az<=aC;az+=1){av[az][al]=3}}}aA=b(this).clone();aA.attr("colspan",i);aA.attr("rowspan",j);(ak[al]=ak[al]||[])[am]=aA;al=al+j});am+=1});aj=b("<table>");b.each(ak,function(j){var i=b("<tr>");aj.append(i);b.each(ak[j],function(ay,az){i.append(az)})});aq=aj.html();ap='<table id="swappedGraph"><caption>'+ax+" (Horizontal to Vertical)</caption><thead>";aq=aq.replace(/<tbody>/gi,ap);aq=aq.replace(/<\/tbody>/gi,"</tbody></table>");aq=aq.replace(/\n/g,"");aq=aq.replace(/<tr/gi,"\n<tr");an=aq.split("\n");for(am=0,at=an.length;am<at;am+=1){ar=an[am];if(ar.match(/<td/i)!==null){an[am]="</thead><tbody>"+ar;break}}aq=an.join("\n");b(aq).insertAfter(ah).hide();return b(aq)}if(H.parsedirection==="y"){r=K(ah)}if(!b(r).data().tblparser){a.fn.parsertable.parse(b(r))}N={"default-option":"type","default-namespace":["wb-charts","wb-chart","wb-graph"],"type-autocreate":true,"color-typeof":"string","color-autocreate":true};B=b(r).data().tblparser;ac(B);W=g(B);O=I(B);J=W;if(H.type==="pie"){S=b("<figure />").insertAfter(ah);X=function(j,aj){var i;if(!H.decimal){i=Math.round(aj.percent)}else{i=Math.round(aj.percent*Math.pow(10,H.decimal));i=i/Math.pow(10,H.decimal)}if(H.nolegend){i=j+"<br/>"+i}return i+"%"};S.addClass("wb-charts");if(H.graphclass){if(b.isArray(H.graphclass)){for(af=0,c=H.graphclass.length;af<c;af+=1){S.addClass(H.graphclass[af])}}else{S.addClass(H.graphclass)}}ab=b("<figcaption />");b(S).append(ab);e=b("caption",ah).html();M=b("caption",ah).text();b(ab).append(e);U=(B.colgroup[0].type===1?B.colgroup[1]:B.colgroup[0]);for(t=B.lstrowgroup[0].row.length-1;t>=0;t-=1){for(af=0;af<U.col.length;af+=1){k=[];F=0;for(ae=0;ae<U.col[af].cell.length;ae+=1){if(U.col[af].cell[ae].rowgroup.type!==2||(ae>0&&U.col[af].cell[ae-1].rowgroup.uid!==U.col[af].cell[ae].rowgroup.uid)){break}n=U.col[af].cell[ae].row.header;P=H.getcellvalue(U.col[af].cell[t].elem);k.push([F,typeof P==="object"?P[0]:P]);F+=n[n.length-1].flotDelta;break}R=m(N,(b(U.col[af].cell[t].elem).attr("class")!==undefined?b(U.col[af].cell[t].elem).attr("class"):""));V.push({data:k,label:b(U.col[af].dataheader[U.col[af].dataheader.length-1].elem).text(),color:(!R.color?d(af):d(R.color))})}G=b("<div />");Z=b("<div />");if(B.lstrowgroup[0].row.length===1&&(b(B.lstrowgroup[0].row[0].header[0].elem).html()===e||B.lstrowgroup[0].row[0].header.length===0)){h=M;b(S).append(Z)}else{w=b("<figure />").appendTo(S);Q=b("<figcaption />");n=B.lstrowgroup[0].row[t].header;h=b(n[n.length-1].elem).text();w.append(Q);Q.append(b(n[n.length-1].elem).html());w.append(Z)}Z.append(G);G.css("height",H.height).css("width",H.width);Z.attr("role","img");Z.attr("aria-label",h+" "+a.dic.get("%table-following"));y={series:{pie:{show:true}}};if(H.nolegend){y.legend={show:false}}if(H.percentlegend){y.series.pie.radius=H.pieradius/100;y.series.pie.label={show:true,radius:H.pielblradius/100,formatter:X};if(H.piethreshold){y.series.pie.label.threshold=H.piethreshold/100}}if(H.pietilt){y.series.pie.tilt=H.pietilt/100}if(H.pieinnerradius){y.series.pie.innerRadius=H.pieinnerradius/100}if(H.piestartangle){y.series.pie.startAngle=H.piestartangle/100}if(H.piehighlight){y.series.pie.highlight=H.piehighlight/100}if(H.piehoverable){y.grid={hoverable:true}}b.plot(G,V,y);if(!H.legendinline){b(".legend > div",G).remove();b(".legend > table",G).removeAttr("style").addClass("font-small");b(".legend",G).appendTo(Z)}b(".pieLabel").removeAttr("id");V=[]}if(!H.noencapsulation){u=b("<details />");aa=b("<summary />");b(u).appendTo(S);b(aa).text(e+" "+a.dic.get("%table-mention")).appendTo(u).after(ah);a.polyfills.enhance("detailssummary",u)}else{b(ah).appendTo(S)}if(H.parsedirection==="y"){b(r).remove()}return}for(af=0;af<B.lstrowgroup[0].row.length;af++){T=m(N,(b(B.lstrowgroup[0].row[af].header[B.lstrowgroup[0].row[af].header.length-1].elem).attr("class")!==undefined?b(B.lstrowgroup[0].row[af].header[B.lstrowgroup[0].row[af].header.length-1].elem).attr("class"):""));if((!T.type&&(H.type==="bar"||H.type==="stacked"))||(T.type&&(T.type==="bar"||T.type==="stacked"))){L+=1;T.chartBarOption=L;if(!v&&((T.type&&T.type==="bar")||(!T.type&&H.type==="bar"))){v=true}}B.lstrowgroup[0].row[af].header[B.lstrowgroup[0].row[af].header.length-1].chartOption=T}for(af=0;af<B.lstrowgroup[0].row.length;af++){k=[];ai=0;F=0;T=B.lstrowgroup[0].row[af].header[B.lstrowgroup[0].row[af].header.length-1].chartOption;for(ae=0;ae<B.lstrowgroup[0].row[af].cell.length;ae++){if(ai>1&&B.lstrowgroup[0].row[af].cell[ae].col.groupstruct.type!==2){break}if(B.lstrowgroup[0].row[af].cell[ae].col.groupstruct.type===2){n=B.lstrowgroup[0].row[af].cell[ae].col.header;l=F;if(v&&T.chartBarOption){l=F-(o/2)+((o/L)*(T.chartBarOption-1));if(L===1){l=F}}P=H.getcellvalue(B.lstrowgroup[0].row[af].cell[ae].elem);k.push([l,typeof P==="object"?P[0]:P]);F+=n[n.length-1].flotDelta;ai++}}if(!T.type){T.type=H.type}if(T.type==="line"){V.push({data:k,label:b(B.lstrowgroup[0].row[af].header[B.lstrowgroup[0].row[af].header.length-1].elem).text(),color:(!T.color?d(af):d(T.color))})}else{if(T.type==="area"){V.push({data:k,label:b(B.lstrowgroup[0].row[af].header[B.lstrowgroup[0].row[af].header.length-1].elem).text(),color:(!T.color?d(af):d(T.color)),lines:{show:true,fill:true}})}else{if(T.type==="bar"||(v&&T.type==="stacked")){V.push({data:k,label:b(B.lstrowgroup[0].row[af].header[B.lstrowgroup[0].row[af].header.length-1].elem).text(),color:(!T.color?d(af):d(T.color)),bars:{show:true,barWidth:(1/L*0.9),align:"center"}})}else{if(T.type==="stacked"){V.push({data:k,label:b(B.lstrowgroup[0].row[af].header[B.lstrowgroup[0].row[af].header.length-1].elem).text(),color:(!T.color?d(af):d(T.color)),bars:{show:true,barWidth:0.9,align:"center"}})}else{if(T.type==="pie"){V.push({data:k,label:b(B.lstrowgroup[0].row[af].header[B.lstrowgroup[0].row[af].header.length-1].elem).text(),color:(!T.color?d(af):d(T.color))});p=true}}}}}}q=b("<figure />").insertAfter(ah);q.addClass("wb-charts");if(H.graphclass){if(b.isArray(H.graphclass)){for(af=0,ad=H.graphclass.length;af<ad;af+=1){q.addClass(H.graphclass[af])}}else{q.addClass(H.graphclass)}}ab=b("<figcaption />");b(q).append(ab);e=b("caption",ah).html();b(ab).append(e);G=b("<div />");b(q).append(G);G.css("height",H.height).css("width","100%");G.attr("role","img");G.attr("aria-label",b("caption",ah).text()+" "+a.dic.get("%table-following"));if(!H.noencapsulation){u=b("<details />");aa=b("<summary />");b(u).appendTo(q);b(aa).text(e+" "+a.dic.get("%table-mention")).appendTo(u).after(ah);a.polyfills.enhance("detailssummary",u)}else{b(ah).appendTo(q)}z={canvas:true,xaxis:(J.length>0?{ticks:J}:{})};if(H.topvalue){if(!z.yaxis){z.yaxis={}}if(H.topvaluenegative){H.topvalue*=-1}z.yaxis.max=H.topvalue}if(H.bottomvalue){if(!z.yaxis){z.yaxis={}}if(H.bottomvaluenegative){H.bottomvalue*=-1}z.yaxis.min=H.bottomvalue}if(H.steps){if(!z.yaxis){z.yaxis={}}z.yaxis.ticks=H.steps}b.plot(G,V,z);if(!H.legendinline){b(".legend > div",G).remove();b(".legend > table",G).removeAttr("style").addClass("font-small");G.css("height","auto")}if(H.nolegend){b(".legend",G).remove()}b("canvas:eq(1)",G).css("position","static");b("canvas:eq(0)",G).css("width","100%");if(H.parsedirection==="y"){b(r).remove()}}};window.pe=a;return a}(jQuery));