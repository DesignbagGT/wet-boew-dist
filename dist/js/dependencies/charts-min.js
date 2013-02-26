/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-rc1-development Build: 2013-02-26 04:33 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.fn.chartsGraph={generate:function(ab){var E={},T,s=b(ab),p,S;if(typeof(wet_boew_charts)!=="undefined"&&wet_boew_charts!==null){E=wet_boew_charts}T=b.extend(true,{"default-namespace":["wb-charts","wb-chart","wb-graph"],"graphclass-autocreate":true,"graphclass-overwrite-array-mode":true,"graphclass-typeof":"string","noencapsulation-autocreate":true,uniformtick:true,"uniformtick-typeof":"boolean","uniformtick-autocreate":true,"labeltheadrownum-typeof":"number","labeltheadrownum-autocreate":true,"legendinline-typeof":"boolean","legendinline-autocreate":true,"nolegend-typeof":"boolean","nolegend-autocreate":true,"topvalue-autocreate":true,"topvalue-typeof":"number","topvaluenegative-autocreate":true,"topvaluenegative-typeof":"boolean","bottomvalue-autocreate":true,"bottomvalue-typeof":"number","bottomvaluenegative-autocreate":true,"bottomvaluenegative-typeof":"boolean","nocutaxis-autocreate":true,"nocutaxis-typeof":"boolean","steps-autocreate":true,"steps-typeof":"number","decimal-autocreate":true,"decimal-typeof":"number","execdelay-autocreate":true,"execdelay-typeof":"number",serie:{type:"line",color:"blue"},serie2dAxis:{dasharray:"",fillopacity:100},heading2dAxis:{fill:"white",fillover:"blue",foreground:"black",foregroundover:"red"},"default-option":"type",type:"bar","type-autocreate":true,optionsClass:{"default-option":"type","type-autocreate":true,"color-autocreate":true,"overcolor-autocreate":true,"default-namespace":["wb-charts","wb-chart","wb-graph"],"dasharray-autocreate":true,"noencapsulation-autocreate":true,"fillopacity-autocreate":true,"fillopacity-typeof":"number"},width:b(ab).width(),"width-typeof":"number",height:b(ab).height(),"height-typeof":"number",maxwidth:"9999","maxwidth-typeof":"number",widthPadding:2,colors:["#be1e2d","#666699","#92d5ea","#ee8310","#8d10ee","#5a3b16","#26a4ed","#f45a90","#e9e744"],textColors:[],parsedirection:"x","parsedirection-typeof":"string","parsedirection-autocreate":true,drawDirection:"x",pieMargin:20,pieLabelsAsPercent:true,pieLabelPos:"inside",lineWeight:4,barGroupMargin:10,barMargin:1,font:{height:20,width:10,size:14},axis:{top:{tick:null,lenght:null,padding:null},right:{tick:null,lenght:null,padding:null},bottom:{tick:null,lenght:null,padding:null},left:{tick:null,lenght:null,padding:null},tick:true,lenght:4,padding:4,minNbIncrementStep:6}},E);T=n(T,(b(s).attr("class")!==undefined?b(s).attr("class"):""));function d(i){var j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c","indigo ":"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32","accent-1":"#8d201c","accent-2":"#EE8310","accent-3":"#2a7da6","accent-4":"#5a306b","accent-5":"#285228","accent-6":"#154055","accent-7":"#555555","accent-8":"#f6d200","accent-9":"#d73d38","accent-10":"#418541","accent-11":"#87aec9","accent-12":"#23447e","accent-13":"#999999"};if(typeof(i)==="number"){i="accent-"+(i+1)}return(j[i.toLowerCase()]!=="undefined"?j[i.toLowerCase()]:(b.isArray(T.colors)?T.colors[0]:T.colors))}function n(j,ai,o){var ah="",ag="",ae=false,af,i;if(typeof(j)!=="object"){return{}}j=jQuery.extend(true,{},j);if(typeof(ai)!=="string"||ai.lenght===0){return j}if(typeof(o)!=="string"||o.lenght===0){if(j["default-namespace"]&&(typeof(j["default-namespace"])==="string"||b.isArray(j["default-namespace"]))){o=j["default-namespace"]}else{return j}}if(j["default-namespace-separator"]&&typeof(j["default-namespace-separator"])==="string"){ah=j["default-namespace-separator"]}else{ah="-"}if(j["default-separator"]&&typeof(j["default-separator"])==="string"){ag=j["default-separator"]}else{ag=" "}if(j["default-autocreate"]){ae=true}i=ai.split(ag);b.each(i,function(){var av,ao=j,aq,ap,aw,an,ar,ak,aj,am=false,at=false,au,al;if(b.isArray(o)){for(ap=0,aw=o.length;ap<aw;ap+=1){if(o[ap]===(this.length>o[ap].length+ah.length?this.slice(0,o[ap].length):"")){af=o[ap].split(ah);av=this.split(ah).slice(af.length);aq=af[af.length-1];break}}}else{if(o===(this.length>o.length+ah.length?this.slice(0,o.length):"")){af=o.split(ah);av=this.split(ah).slice(af.length);aq=af[af.length-1]}}if(av&&aq){for(ap=0,aw=av.length;ap<aw;ap+=1){ar=(ap+2===aw?true:false);ak=(ap+1===aw?true:false);if(ak&&aw===1&&j["default-option"]){aq=j["default-option"]}else{if(!ak){aq=av[ap]}}if(ao[aq+"-typeof"]){aj=[];for(an=(ap+1);an<aw;an+=1){aj.push(av[an])}av[ap]=aj.join(ah);ar=false;ak=true;switch(ao[aq+"-typeof"]){case"boolean":if(av[ap]==="true"||av[ap]==="1"||av[ap]==="vrai"||av[ap]==="yes"||av[ap]==="oui"){av[ap]=true}else{if(av[ap]==="false"||av[ap]==="0"||av[ap]==="faux"||av[ap]==="no"||av[ap]==="non"){av[ap]=false}else{av[ap]=undefined}}break;case"number":if(!isNaN(parseInt(av[ap],10))){av[ap]=parseInt(av[ap],10)}else{av[ap]=undefined}break;case"string":break;case"undefined":case"function":case"locked":av[ap]=undefined;break;default:break}}if(ao[aq+"-overwrite-array-mode"]){am=true}if(ao[aq+"-autocreate"]){at=true}if(ar&&av[ap]!==undefined){aq=av[ap]}else{if(ak&&av[ap]!==undefined){if(ao[aq]&&am){if(b.isArray(ao[aq])){ao[aq].push(av[ap])}else{al=ao[aq];ao[aq]=[];ao[aq].push(al);ao[aq].push(av[ap])}}else{if(ao[aq]||ae||at||ao[aq]===0||ao[aq]===false){au="";if(typeof(av[ap])==="boolean"||typeof(av[ap])==="number"){au='{"'+aq+'": '+av[ap]+"}"}else{au='{"'+aq+'": "'+av[ap]+'"}'}ao=jQuery.extend(true,ao,jQuery.parseJSON(au))}}ap=aw}else{if(av[ap]!==undefined&&ao[av[ap]]){ao=ao[av[ap]];aq=av[ap]}else{if((ae||at)&&av[ap]!==undefined){au='{"'+av[ap]+'": {}}';ao=jQuery.extend(true,ao,jQuery.parseJSON(au));ao=ao[av[ap]]}else{ap=aw}}}}}}});return j}function Y(aj){var ak,ai,ah,ag,at;for(ak=0;ak<aj.theadRowStack.length;ak+=1){at=aj.theadRowStack[ak];for(ai=0;ai<at.cell.length;ai+=1){o=at.cell[ai];if((o.type===1||o.type===7)&&(!(ai>0&&o.uid===at.cell[ai-1].uid)&&!(ak>0&&o.uid===aj.theadRowStack[ak-1].cell[ai].uid))){if(!o.header){o.header=[]}if(!o.headers){o.headers=[]}if(!o.child){o.child=[]}if(!o.childs){o.childs=[]}if(ak>0){for(ah=0;ah<aj.theadRowStack[ak-1].cell[ai].header.length;ah+=1){o.headers.push(aj.theadRowStack[ak-1].cell[ai].header[ah]);aj.theadRowStack[ak-1].cell[ai].header[ah].childs.push(o)}o.headers.push(aj.theadRowStack[ak-1].cell[ai]);o.header.push(aj.theadRowStack[ak-1].cell[ai]);aj.theadRowStack[ak-1].cell[ai].child.push(o)}if(o.descCell){o.descCell.header=o;o.descCell.headers=o}}}}for(ak=0;ak<aj.row.length;ak+=1){at=aj.row[ak];var ar=[],ap=[],aq=[],an=[];if(at.headerset&&!at.idsheaderset){for(ai=0;ai<at.headerset.length;ai+=1){ar=ar.concat(at.headerset[ai])}at.idsheaderset=ar}if(at.header){for(ai=0;ai<at.header.length;ai+=1){ap=ap.concat(at.header[ai])}}ap=at.idsheaderset.concat(ap);for(ai=0;ai<at.cell.length;ai+=1){if((ai===0)||(ai>0&&at.cell[ai].uid!==at.cell[(ai-1)].uid)){var o=at.cell[ai],ae=[];if(!o.header){o.header=[]}if(!o.headers){o.headers=[]}if(o.col&&!o.col.dataheader){var af=o.col;var am=[],ao=[];if(af.headerLevel){for(ag=0;ag<af.headerLevel.length;ag+=1){ao=ao.concat(af.headerLevel[ag])}}if(af.header){for(ag=0;ag<af.header.length;ag+=1){am=am.concat(af.header[ag])}}if(!af.dataheader){af.dataheader=[]}af.dataheader=af.dataheader.concat(ao);af.dataheader=af.dataheader.concat(am)}if(o.col&&o.col.dataheader){ae=o.col.dataheader}if(o.type===1){if(!o.child){o.child=[]}if(!o.childs){o.childs=[]}for(ag=0;ag<an.length;ag+=1){if(o.colpos===(an[ag].colpos+an[ag].width)){var al=an[ag].child.length;if(al===0||(al>0&&an[ag].child[al-1].uid!==o.uid)){an[ag].child.push(o)}}an[ag].childs.push(o)}for(ag=0;ag<at.idsheaderset.length;ag+=1){if(!at.idsheaderset[ag].childs){at.idsheaderset[ag].childs=[]}at.idsheaderset[ag].childs.push(o)}o.header=o.header.concat(an);o.headers=o.headers.concat(ae);o.headers=o.headers.concat(at.idsheaderset);o.headers=o.headers.concat(an);an=an.concat(o)}if(o.type===2||o.type===3){aq=ap;if(o.addcolheaders){for(ag=0;ag<o.addcolheaders.length;ag+=1){ae=ae.concat(o.addcolheaders[ag])}}if(o.addrowheaders){for(ag=0;ag<o.addrowheaders.length;ag+=1){aq=aq.concat(o.addrowheaders[ag])}}o.headers=o.headers.concat(ae);o.headers=o.headers.concat(aq);o.header=o.headers}}}}}function O(j){j=j.replace(/\s\s+/g," ");j=j.replace(/^\s+|\s+$/g,"");var i={cellUnit:j.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/),cellValue:parseFloat(j.match(/[\+\-0-9]+[0-9,\. ]*/))};return i}var C=[],G=[],A,y;function u(j,i){var o;i+=1;C.push([j.child.length,i]);for(o=0;o<j.child.length;o+=1){if(j.child[o].child.length>0){i=u(j.child[o],i)}}i-=1;return i}function B(j,i){var o;i+=1;var af=0;af=j.flotValue-j.flotDelta;var ae=(j.flotDelta/j.child.length);if(!S||ae<S){S=ae}for(o=0;o<j.child.length;o+=1){j.child[o].flotDelta=ae;af=af+ae;j.child[o].flotValue=af;if(i===A){G.push([(j.child[o].flotValue-ae),b(j.child[o].elem).text()])}if(j.child[o].child.length>0){B(j.child[o],i)}}i-=1}function F(ai){var ae=0;var o=0;var j;var af;C=[];if(!ai.colgrouphead){return}for(af=0;af<ai.colgrouphead.col[0].cell.length;af+=1){j=ai.colgrouphead.col[0].cell[af];if(af===0||(af>0&&ai.colgrouphead.col[0].cell[af-1].uid!==j.uid)){if(j.rowgroup&&j.rowgroup.type===3){break}if(j.type===1||j.type===7){ae+=1;if(j.child.length>0){o=u(j,o)}}}}C.push([ae,o]);var ah=C[0][0];for(af=1;af<C.length;af+=1){ah=ah*C[af][0]}A=ai.colgrouphead.col.length-1;G=[];var ag=0;o=0;for(af=0;af<ai.colgrouphead.col[0].cell.length;af+=1){j=ai.colgrouphead.col[0].cell[af];if(af===0||(af>0&&ai.colgrouphead.col[0].cell[af-1].uid!==j.uid)){if(j.rowgroup&&j.rowgroup.type===3){break}if(j.type===1||j.type===7){j.flotDelta=(ah/ae);if(!S||j.flotDelta<S){S=j.flotDelta}ag+=j.flotDelta;j.flotValue=ag;if(o===A||((j.colpos-1)<A&&A<=((j.colpos-1)+(j.width-1)))){G.push([(j.flotValue-j.flotDelta),b(j.elem).text()])}if(j.child.length>0){B(j,o)}}}}return G}function f(j,i){var o;if(j.child.length===0){return}i+=1;C.push([j.child.length,i]);for(o=0;o<j.child.length;o+=1){f(j.child[o],i)}i-=1}function x(j,i){var o;if(j.child.length===0){return}i+=1;var af=0;af=j.flotValue;var ae=(!T.uniformtick?(j.flotDelta/j.child.length):1);if(!p||ae<p){p=ae}for(o=0;o<j.child.length;o+=1){j.child[o].flotDelta=ae;if(i===A){G.push([(!T.uniformtick?af:y),b(j.child[o].elem).text()])}if(i===(z.theadRowStack.length-1)||((j.rowpos-1)<(z.theadRowStack.length-1)&&(z.theadRowStack.length-1)<=((j.rowpos-1)+(j.height-1)))||(z.theadRowStack.length-1)===((j.rowpos-1)+(j.height-1))){y+=ae}j.child[o].flotValue=af;af=af+ae;x(j.child[o],i)}i-=1}function g(al){if(!al.theadRowStack){return}var af=-1;var o=-1;var ai;for(ai=0;ai<al.colgroup.length;ai+=1){if(al.colgroup[ai].type===2){af=al.colgroup[ai].start;o=al.colgroup[ai].end;break}}var ah=0;var j;var ak=0;C=[];var ae=0;for(ai=0;ai<al.theadRowStack[0].elem.cells.length;ai+=1){j=b(al.theadRowStack[0].elem.cells[ai]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=af&&(j.type===1||j.type===7)){ah+=1;ak+=j.width;f(j,ae)}}C.push([ah,ae]);var ag=C[0][0];for(ai=1;ai<C.length;ai+=1){ag=ag*C[ai][0]}T.labeltheadrownum=2;A=(!T.labeltheadrownum||(T.labeltheadrownum&&T.labeltheadrownum>al.theadRowStack.length)?al.theadRowStack.length:T.labeltheadrownum)-1;G=[];var aj=0;y=0;ae=0;for(ai=0;ai<al.theadRowStack[0].elem.cells.length;ai+=1){j=b(al.theadRowStack[0].elem.cells[ai]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=af&&(j.type===1||j.type===7)){j.flotDelta=(!T.uniformtick?(ag/ah):1);if(!p||j.flotDelta<p){p=j.flotDelta}j.flotValue=aj;if(ae===A||((j.rowpos-1)<A&&A<=((j.rowpos-1)+(j.height-1)))){G.push([(!T.uniformtick?aj:y),b(j.elem).text()])}if(ae===(al.theadRowStack.length-1)||((j.rowpos-1)<(al.theadRowStack.length-1)&&(al.theadRowStack.length-1)<=((j.rowpos-1)+(j.height-1)))||(al.theadRowStack.length-1)===((j.rowpos-1)+(j.height-1))){y+=j.flotDelta}aj+=j.flotDelta;x(j,ae)}}return G}if(!b(s).data().tblparser){a.fn.parsertable.parse(b(s))}var aa=s;var J={"default-option":"type","default-namespace":["wb-charts","wb-chart","wb-graph"],"type-autocreate":true,"color-typeof":"string","color-autocreate":true};var z=b(aa).data().tblparser;Y(z);var R,K;R=g(z);K=F(z);G=R;var Q=[];var q=false;var k=[],D=0,m,t,Z,X,V,e,c,v,U;if(T.type==="pie"){var M=b("<figure />").insertAfter(s);V=b("<figcaption />");b(M).append(V);e=b("caption",s).html();var I=b("caption",s).text();b(V).append(e);var P=(z.colgroup[0].type===1?z.colgroup[1]:z.colgroup[0]);for(t=z.lstrowgroup[0].row.length-1;t>=0;t-=1){for(Z=0;Z<P.col.length;Z+=1){k=[];D=0;for(X=0;X<P.col[Z].cell.length;X+=1){if(P.col[Z].cell[X].rowgroup.type!==2||(X>0&&P.col[Z].cell[X-1].rowgroup.uid!==P.col[Z].cell[X].rowgroup.uid)){break}m=P.col[Z].cell[X].row.header;k.push([D,O(b(P.col[Z].cell[t].elem).text()).cellValue]);D+=m[m.length-1].flotDelta}var L=n(J,(b(P.col[Z].cell[t].elem).attr("class")!==undefined?b(P.col[Z].cell[t].elem).attr("class"):""));Q.push({data:k,label:b(P.col[Z].dataheader[P.col[Z].dataheader.length-1].elem).text(),color:(!L.color?d(Z):d(L.color))})}c=b("<div />");var h="";if(z.lstrowgroup[0].row.length===1&&(b(z.lstrowgroup[0].row[0].header[0].elem).html()===e||z.lstrowgroup[0].row[0].header.length===0)){h=I;b(M).append(c)}else{var ad=b("<figure />").appendTo(M);var W=b("<figcaption />");m=z.lstrowgroup[0].row[t].header;h=b(m[m.length-1].elem).text();b(ad).append(W);b(W).append(b(m[m.length-1].elem).html());b(ad).append(c)}b(c).css("height",T.height);b(c).css("width",T.width);b(c).attr("role","img");b(c).attr("aria-label",h+" "+a.dic.get("%table-following"));b.plot(c,Q,{series:{pie:{show:true}}});if(!T.legendinline){b(".legend > div",c).remove();b(".legend > table",c).removeAttr("style").addClass("font-small");b(c).css("height","auto")}if(T.nolegend){b(".legend",c).remove()}Q=[]}if(!T.noencapsulation){v=b("<details />");U=b("<summary />");b(v).appendTo(M);b(U).text(e+a.dic.get("%table-mention")).appendTo(v).after(s);a.polyfills.enhance("detailssummary",v)}else{b(s).appendTo(M)}return}var H=0;var w;var N;for(Z=0;Z<z.lstrowgroup[0].row.length;Z++){N=n(J,(b(z.lstrowgroup[0].row[Z].header[z.lstrowgroup[0].row[Z].header.length-1].elem).attr("class")!==undefined?b(z.lstrowgroup[0].row[Z].header[z.lstrowgroup[0].row[Z].header.length-1].elem).attr("class"):""));if((!N.type&&(T.type==="bar"||T.type==="stacked"))||(N.type&&(N.type==="bar"||N.type==="stacked"))){H+=1;N.chartBarOption=H;if(!w&&((N.type&&N.type==="bar")||(!N.type&&T.type==="bar"))){w=true}}z.lstrowgroup[0].row[Z].header[z.lstrowgroup[0].row[Z].header.length-1].chartOption=N}for(Z=0;Z<z.lstrowgroup[0].row.length;Z++){k=[];var ac=0;D=0;N=z.lstrowgroup[0].row[Z].header[z.lstrowgroup[0].row[Z].header.length-1].chartOption;for(X=0;X<z.lstrowgroup[0].row[Z].cell.length;X++){if(ac>1&&z.lstrowgroup[0].row[Z].cell[X].col.groupstruct.type!==2){break}if(z.lstrowgroup[0].row[Z].cell[X].col.groupstruct.type===2){m=z.lstrowgroup[0].row[Z].cell[X].col.header;var l=D;if(w&&N.chartBarOption){l=D-(p/2)+((p/H)*(N.chartBarOption-1))}k.push([l,O(b(z.lstrowgroup[0].row[Z].cell[X].elem).text()).cellValue]);D+=m[m.length-1].flotDelta;ac++}}if(!N.type){N.type=T.type}if(N.type==="line"){Q.push({data:k,label:b(z.lstrowgroup[0].row[Z].header[z.lstrowgroup[0].row[Z].header.length-1].elem).text(),color:(!N.color?d(Z):d(N.color))})}else{if(N.type==="area"){Q.push({data:k,label:b(z.lstrowgroup[0].row[Z].header[z.lstrowgroup[0].row[Z].header.length-1].elem).text(),color:(!N.color?d(Z):d(N.color)),lines:{show:true,fill:true}})}else{if(N.type==="bar"||(w&&N.type==="stacked")){Q.push({data:k,label:b(z.lstrowgroup[0].row[Z].header[z.lstrowgroup[0].row[Z].header.length-1].elem).text(),color:(!N.color?d(Z):d(N.color)),bars:{show:true,barWidth:(1/H*0.9),align:"center"}})}else{if(N.type==="stacked"){Q.push({data:k,label:b(z.lstrowgroup[0].row[Z].header[z.lstrowgroup[0].row[Z].header.length-1].elem).text(),color:(!N.color?d(Z):d(N.color)),bars:{show:true,barWidth:0.9,align:"center"}})}else{if(N.type==="pie"){Q.push({data:k,label:b(z.lstrowgroup[0].row[Z].header[z.lstrowgroup[0].row[Z].header.length-1].elem).text(),color:(!N.color?d(Z):d(N.color))});q=true}}}}}}var r=b("<figure />").insertAfter(s);V=b("<figcaption />");b(r).append(V);e=b("caption",s).html();b(V).append(e);c=b("<div />");b(r).append(c);b(c).css("height",T.height);b(c).css("width",T.width);b(c).attr("role","img");b(c).attr("aria-label",b("caption",s).text()+" "+a.dic.get("%table-following"));if(!T.noencapsulation){v=b("<details />");U=b("<summary />");b(v).appendTo(r);b(U).text(e+a.dic.get("%table-mention")).appendTo(v).after(s);a.polyfills.enhance("detailssummary",v)}else{b(s).appendTo(r)}b.plot(c,Q,{xaxis:(G.length>0?{ticks:G}:{})});if(!T.legendinline){b(".legend > div",c).remove();b(".legend > table",c).removeAttr("style").addClass("font-small");b(c).css("height","auto")}if(T.nolegend){b(".legend",c).remove()}}};window.pe=a;return a}(jQuery));