/**
 *  Markdown
 **/
// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

!function(e){function t(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function r(){var e=require("util");return"Markdown.mk_block( "+e.inspect(this.toString())+", "+e.inspect(this.trailing)+", "+e.inspect(this.lineNumber)+" )"}function n(e){for(var t=0,r=-1;-1!==(r=e.indexOf("\n",r+1));)t++;return t}function i(e,t){function r(e){this.len_after=e,this.name="close_"+t}var n=e+"_state",i="strong"==e?"em_state":"strong_state";return function(l){if(this[n][0]==t)return this[n].shift(),[l.length,new r(l.length-t.length)];var a=this[i].slice(),s=this[n].slice();this[n].unshift(t);{var o=this.processInline(l.substr(t.length)),c=o[o.length-1];this[n].shift()}if(c instanceof r){o.pop();var u=l.length-c.len_after;return[u,[e].concat(o)]}return this[i]=a,this[n]=s,[t.length,t]}}function l(e){for(var t=e.split(""),r=[""],n=!1;t.length;){var i=t.shift();switch(i){case" ":n?r[r.length-1]+=i:r.push("");break;case"'":case'"':n=!n;break;case"\\":i=t.shift();default:r[r.length-1]+=i}}return r}function s(e){return d(e)&&e.length>1&&"object"==typeof e[1]&&!d(e[1])?e[1]:void 0}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(e){if("string"==typeof e)return o(e);var t=e.shift(),r={},n=[];for(!e.length||"object"!=typeof e[0]||e[0]instanceof Array||(r=e.shift());e.length;)n.push(arguments.callee(e.shift()));var i="";for(var l in r)i+=" "+l+'="'+o(r[l])+'"';return"img"==t||"br"==t||"hr"==t?"<"+t+i+"/>":"<"+t+i+">"+n.join("")+"</"+t+">"}function u(e,t,r){var n;r=r||{};var i=e.slice(0);"function"==typeof r.preprocessTreeNode&&(i=r.preprocessTreeNode(i,t));var l=s(i);if(l){i[1]={};for(n in l)i[1][n]=l[n];l=i[1]}if("string"==typeof i)return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",l&&delete l.references;break;case"code_block":i[0]="pre",n=l?2:1;var a=["code"];a.push.apply(a,i.splice(n)),i[n]=a;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":i[0]="a";var o=t[l.ref];if(!o)return l.original;delete l.ref,l.href=o.href,o.title&&(l.title=o.title),delete l.original;break;case"img_ref":i[0]="img";var o=t[l.ref];if(!o)return l.original;delete l.ref,l.src=o.href,o.title&&(l.title=o.title),delete l.original}if(n=1,l){for(var c in i[1])n=2;1===n&&i.splice(n,1)}for(;n<i.length;++n)i[n]=arguments.callee(i[n],t,r);return i}function h(e){for(var t=s(e)?2:1;t<e.length;)"string"==typeof e[t]?t+1<e.length&&"string"==typeof e[t+1]?e[t]+=e.splice(t+1,1)[0]:++t:(arguments.callee(e[t]),++t)}var f=e.Markdown=function _(e){switch(typeof e){case"undefined":this.dialect=_.dialects.Gruber;break;case"object":this.dialect=e;break;default:if(!(e in _.dialects))throw new Error("Unknown Markdown dialect '"+String(e)+"'");this.dialect=_.dialects[e]}this.em_state=[],this.strong_state=[],this.debug_indent=""};e.parse=function(e,t){var r=new f(t);return r.toTree(e)},e.toHTML=function(t,r,n){var i=e.toHTMLTree(t,r,n);return e.renderJsonML(i)},e.toHTMLTree=function(e,t,r){"string"==typeof e&&(e=this.parse(e,t));var n=s(e),i={};n&&n.references&&(i=n.references);var l=u(e,i,r);return h(l),l};var g=f.mk_block=function(e,n,i){1==arguments.length&&(n="\n\n");var l=new String(e);return l.trailing=n,l.inspect=r,l.toSource=t,void 0!=i&&(l.lineNumber=i),l};f.prototype.split_blocks=function(e){var t,r=/([\s\S]+?)($|\n(?:\s*\n|$)+)/g,i=[],l=1;for(null!=(t=/^(\s*\n)/.exec(e))&&(l+=n(t[0]),r.lastIndex=t[0].length);null!==(t=r.exec(e));)i.push(g(t[1],t[2],l)),l+=n(t[0]);return i},f.prototype.processBlock=function(e,t){var r=this.dialect.block,n=r.__order__;if("__call__"in r)return r.__call__.call(this,e,t);for(var i=0;i<n.length;i++){var l=r[n[i]].call(this,e,t);if(l)return(!d(l)||l.length>0&&!d(l[0]))&&this.debug(n[i],"didn't return a proper array"),l}return[]},f.prototype.processInline=function(e){return this.dialect.inline.__call__.call(this,String(e))},f.prototype.toTree=function(e,t){var r=e instanceof Array?e:this.split_blocks(e),n=this.tree;try{for(this.tree=t||this.tree||["markdown"];r.length;){var i=this.processBlock(r.shift(),r);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{t&&(this.tree=n)}},f.prototype.debug=function(){var e=Array.prototype.slice.call(arguments);e.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,e),"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log.apply(null,e)},f.prototype.loop_re_over_block=function(e,t,r){for(var n,i=t.valueOf();i.length&&null!=(n=e.exec(i));)i=i.substr(n[0].length),r.call(this,n);return i},f.dialects={},f.dialects.Gruber={block:{atxHeader:function(e,t){var r=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(!r)return void 0;var n=["header",{level:r[1].length}];return Array.prototype.push.apply(n,this.processInline(r[2])),r[0].length<e.length&&t.unshift(g(e.substr(r[0].length),e.trailing,e.lineNumber+2)),[n]},setextHeader:function(e,t){var r=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(!r)return void 0;var n="="===r[2]?1:2,i=["header",{level:n},r[1]];return r[0].length<e.length&&t.unshift(g(e.substr(r[0].length),e.trailing,e.lineNumber+2)),[i]},code:function(e,t){var r=[],n=/^(?: {0,3}\t| {4})(.*)\n?/;if(!e.match(n))return void 0;e:for(;;){var i=this.loop_re_over_block(n,e.valueOf(),function(e){r.push(e[1])});if(i.length){t.unshift(g(i,e.trailing));break e}if(!t.length)break e;if(!t[0].match(n))break e;r.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=t.shift()}return[["code_block",r.join("\n")]]},horizRule:function(e,t){var r=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(!r)return void 0;var n=[["hr"]];return r[1]&&n.unshift.apply(n,this.processBlock(r[1],[])),r[3]&&t.unshift(g(r[3])),n},lists:function(){function e(e){return new RegExp("(?:^("+o+"{0,"+e+"} {0,3})("+l+")\\s+)|(^"+o+"{0,"+(e-1)+"}[ ]{0,4})")}function t(e){return e.replace(/ {0,3}\t/g,"    ")}function r(e,t,r,n){if(t)return e.push(["para"].concat(r)),void 0;var i=e[e.length-1]instanceof Array&&"para"==e[e.length-1][0]?e[e.length-1]:e;n&&e.length>1&&r.unshift(n);for(var l=0;l<r.length;l++){var a=r[l],s="string"==typeof a;s&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=a:i.push(a)}}function n(e,t){for(var r=new RegExp("^("+o+"{"+e+"}.*?\\n?)*$"),n=new RegExp("^"+o+"{"+e+"}","gm"),i=[];t.length>0;){if(r.exec(t[0])){var l=t.shift(),a=l.replace(n,"");i.push(g(a,l.trailing,l.lineNumber))}break}return i}function i(e,t,r){var n=e.list,i=n[n.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(t+1==r.length)i.push(["para"].concat(i.splice(1)));else{var l=i.pop();i.push(["para"].concat(i.splice(1)),l)}}var l="[*+-]|\\d+\\.",a=/[*+-]/,s=new RegExp("^( {0,3})("+l+")[ 	]+"),o="(?: {0,3}\\t| {4})";return function(l,o){function c(e){var t=a.exec(e[2])?["bulletlist"]:["numberlist"];return p.push({list:t,indent:e[1]}),t}var u=l.match(s);if(!u)return void 0;for(var h,f,p=[],g=c(u),d=!1,_=[p[0].list];;){for(var b=l.split(/(?=\n)/),k="",m=0;m<b.length;m++){var y="",w=b[m].replace(/^\n/,function(e){return y=e,""}),M=e(p.length);if(u=w.match(M),void 0!==u[1]){k.length&&(r(h,d,this.processInline(k),y),d=!1,k=""),u[1]=t(u[1]);var x=Math.floor(u[1].length/4)+1;if(x>p.length)g=c(u),h.push(g),h=g[1]=["listitem"];else{var S=!1;for(f=0;f<p.length;f++)if(p[f].indent==u[1]){g=p[f].list,p.splice(f+1),S=!0;break}S||(x++,x<=p.length?(p.splice(x),g=p[x-1].list):(g=c(u),h.push(g))),h=["listitem"],g.push(h)}y=""}w.length>u[0].length&&(k+=y+w.substr(u[0].length))}k.length&&(r(h,d,this.processInline(k),y),d=!1,k="");var $=n(p.length,o);$.length>0&&(v(p,i,this),h.push.apply(h,this.toTree($,[])));var j=o[0]&&o[0].valueOf()||"";if(!j.match(s)&&!j.match(/^ /))break;l=o.shift();var A=this.dialect.block.horizRule(l,o);if(A){_.push.apply(_,A);break}v(p,i,this),d=!0}return _}}(),blockquote:function(e,t){if(!e.match(/^>/m))return void 0;var r=[];if(">"!=e[0]){for(var n=e.split(/\n/),i=[];n.length&&">"!=n[0][0];)i.push(n.shift());e=n.join("\n"),r.push.apply(r,this.processBlock(i.join("\n"),[]))}for(;t.length&&">"==t[0][0];){var l=t.shift();e=new String(e+e.trailing+l),e.trailing=l.trailing}{var a=e.replace(/^> ?/gm,"");this.tree}return r.push(this.toTree(a,["blockquote"])),r},referenceDefn:function(e,t){var r=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(!e.match(r))return void 0;s(this.tree)||this.tree.splice(1,0,{});var n=s(this.tree);void 0===n.references&&(n.references={});var i=this.loop_re_over_block(r,e,function(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1));var t=n.references[e[1].toLowerCase()]={href:e[2]};void 0!==e[4]?t.title=e[4]:void 0!==e[5]&&(t.title=e[5])});return i.length&&t.unshift(g(i,e.trailing)),[]},para:function(e){return[["para"].concat(this.processInline(e))]}}},f.dialects.Gruber.inline={__oneElement__:function(e,t,r){var n,i;t=t||this.dialect.inline.__patterns__;var l=new RegExp("([\\s\\S]*?)("+(t.source||t)+")");if(n=l.exec(e),!n)return[e.length,e];if(n[1])return[n[1].length,n[1]];var i;return n[2]in this.dialect.inline&&(i=this.dialect.inline[n[2]].call(this,e.substr(n.index),n,r||[])),i=i||[n[2].length,n[2]]},__call__:function(e,t){function r(e){"string"==typeof e&&"string"==typeof i[i.length-1]?i[i.length-1]+=e:i.push(e)}for(var n,i=[];e.length>0;)n=this.dialect.inline.__oneElement__.call(this,e,t,i),e=e.substr(n.shift()),v(n,r);return i},"]":function(){},"}":function(){},"\\":function(e){return e.match(/^\\[\\`\*_{}\[\]()#\+.!\-]/)?[2,e[1]]:[1,"\\"]},"![":function(e){var t=e.match(/^!\[(.*?)\][ \t]*\([ \t]*(\S*)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1)),t[2]=this.dialect.inline.__call__.call(this,t[2],/\\/)[0];var r={alt:t[1],href:t[2]||""};return void 0!==t[4]&&(r.title=t[4]),[t[0].length,["img",r]]}return t=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),t?[t[0].length,["img_ref",{alt:t[1],ref:t[2].toLowerCase(),original:t[0]}]]:[2,"!["]},"[":function b(e){var t=String(e),r=f.DialectHelpers.inline_until_char.call(this,e.substr(1),"]");if(!r)return[1,"["];var b,n,i=1+r[0],l=r[1];e=e.substr(i);var a=e.match(/^\s*\([ \t]*(\S+)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(a){var s=a[1];if(i+=a[0].length,s&&"<"==s[0]&&">"==s[s.length-1]&&(s=s.substring(1,s.length-1)),!a[3])for(var o=1,c=0;c<s.length;c++)switch(s[c]){case"(":o++;break;case")":0==--o&&(i-=s.length-c,s=s.substring(0,c))}return s=this.dialect.inline.__call__.call(this,s,/\\/)[0],n={href:s||""},void 0!==a[3]&&(n.title=a[3]),b=["link",n].concat(l),[i,b]}return a=e.match(/^\s*\[(.*?)\]/),a?(i+=a[0].length,n={ref:(a[1]||String(l)).toLowerCase(),original:t.substr(0,i)},b=["link_ref",n].concat(l),[i,b]):1==l.length&&"string"==typeof l[0]?(n={ref:l[0].toLowerCase(),original:t.substr(0,i)},b=["link_ref",n,l[0]],[i,b]):[1,"["]},"<":function(e){var t;return null!=(t=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?t[3]?[t[0].length,["link",{href:"mailto:"+t[3]},t[3]]]:"mailto"==t[2]?[t[0].length,["link",{href:t[1]},t[1].substr("mailto:".length)]]:[t[0].length,["link",{href:t[1]},t[1]]]:[1,"<"]},"`":function(e){var t=e.match(/(`+)(([\s\S]*?)\1)/);return t&&t[2]?[t[1].length+t[2].length,["inlinecode",t[3]]]:[1,"`"]},"  \n":function(){return[3,["linebreak"]]}},f.dialects.Gruber.inline["**"]=i("strong","**"),f.dialects.Gruber.inline.__=i("strong","__"),f.dialects.Gruber.inline["*"]=i("em","*"),f.dialects.Gruber.inline._=i("em","_"),f.buildBlockOrder=function(e){var t=[];for(var r in e)"__order__"!=r&&"__call__"!=r&&t.push(r);e.__order__=t},f.buildInlinePatterns=function(e){var t=[];for(var r in e)if(!r.match(/^__.*__$/)){var n=r.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(1==r.length?n:"(?:"+n+")")}t=t.join("|"),e.__patterns__=t;var i=e.__call__;e.__call__=function(e,r){return void 0!=r?i.call(this,e,r):i.call(this,e,t)}},f.DialectHelpers={},f.DialectHelpers.inline_until_char=function(e,t){for(var r=0,n=[];;){if(e[r]==t)return r++,[r,n];if(r>=e.length)return null;var i=this.dialect.inline.__oneElement__.call(this,e.substr(r));r+=i[0],n.push.apply(n,i.slice(1))}},f.subclassDialect=function(e){function t(){}function r(){}return t.prototype=e.block,r.prototype=e.inline,{block:new t,inline:new r}},f.buildBlockOrder(f.dialects.Gruber.block),f.buildInlinePatterns(f.dialects.Gruber.inline),f.dialects.Maruku=f.subclassDialect(f.dialects.Gruber),f.dialects.Maruku.processMetaHash=function(e){for(var t=l(e),r={},n=0;n<t.length;++n)if(/^#/.test(t[n]))r.id=t[n].substring(1);else if(/^\./.test(t[n]))r["class"]=r["class"]?r["class"]+t[n].replace(/./," "):t[n].substring(1);else if(/\=/.test(t[n])){var i=t[n].split(/\=/);r[i[0]]=i[1]}return r},f.dialects.Maruku.block.document_meta=function(e){if(e.lineNumber>1)return void 0;if(!e.match(/^(?:\w+:.*\n)*\w+:.*$/))return void 0;s(this.tree)||this.tree.splice(1,0,{});var t=e.split(/\n/);for(p in t){var r=t[p].match(/(\w+):\s*(.*)$/),n=r[1].toLowerCase(),i=r[2];this.tree[1][n]=i}return[]},f.dialects.Maruku.block.block_meta=function(e){var t=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(!t)return void 0;var r,n=this.dialect.processMetaHash(t[2]);if(""===t[1]){var i=this.tree[this.tree.length-1];if(r=s(i),"string"==typeof i)return void 0;r||(r={},i.splice(1,0,r));for(a in n)r[a]=n[a];return[]}var l=e.replace(/\n.*$/,""),o=this.processBlock(l,[]);r=s(o[0]),r||(r={},o[0].splice(1,0,r));for(a in n)r[a]=n[a];return o},f.dialects.Maruku.block.definition_list=function(e,t){var r,n=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"];if(!(s=e.match(n)))return void 0;for(var l=[e];t.length&&n.exec(t[0]);)l.push(t.shift());for(var a=0;a<l.length;++a){var s=l[a].match(n),o=s[1].replace(/\n$/,"").split(/\n/),c=s[2].split(/\n:\s+/);for(r=0;r<o.length;++r)i.push(["dt",o[r]]);for(r=0;r<c.length;++r)i.push(["dd"].concat(this.processInline(c[r].replace(/(\n)\s+/,"$1"))))}return[i]},f.dialects.Maruku.inline["{:"]=function(e,t,r){if(!r.length)return[2,"{:"];var n=r[r.length-1];if("string"==typeof n)return[2,"{:"];var i=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var l=this.dialect.processMetaHash(i[1]),a=s(n);a||(a={},n.splice(1,0,a));for(var o in l)a[o]=l[o];return[i[0].length,""]},f.buildBlockOrder(f.dialects.Maruku.block),f.buildInlinePatterns(f.dialects.Maruku.inline);var v,d=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};v=Array.prototype.forEach?function(e,t,r){return e.forEach(t,r)}:function(e,t,r){for(var n=0;n<e.length;n++)t.call(r||e,e[n],n,e)},e.renderJsonML=function(e,t){t=t||{},t.root=t.root||!1;var r=[];if(t.root)r.push(c(e));else for(e.shift(),!e.length||"object"!=typeof e[0]||e[0]instanceof Array||e.shift();e.length;)r.push(c(e.shift()));return r.join("\n\n")}}(function(){return"undefined"==typeof exports?(window.markdown={},window.markdown):exports}());
																																																																																																																																																																																																																																																																																																																																																	 /** 
toMarkdown																																																																																																																																																																																																																																																																																																																																																	  **/
var toMarkdown=function(string){var ELEMENTS=[{patterns:'p',replacement:function(str,attrs,innerHTML){return innerHTML?'\n\n'+innerHTML+'\n':'';}},{patterns:'br',type:'void',replacement:'\n'},{patterns:'h([1-6])',replacement:function(str,hLevel,attrs,innerHTML){var hPrefix='';for(var i=0;i<hLevel;i++){hPrefix+='#';}return'\n\n'+hPrefix+' '+innerHTML+'\n';}},{patterns:'hr',type:'void',replacement:'\n\n* * *\n'},{patterns:'a',replacement:function(str,attrs,innerHTML){var href=attrs.match(attrRegExp('href')),title=attrs.match(attrRegExp('title'));return href?'['+innerHTML+']'+'('+href[1]+(title&&title[1]?' "'+title[1]+'"':'')+')':str;}},{patterns:['b','strong'],replacement:function(str,attrs,innerHTML){return innerHTML?'**'+innerHTML+'**':'';}},{patterns:['i','em'],replacement:function(str,attrs,innerHTML){return innerHTML?'_'+innerHTML+'_':'';}},{patterns:'code',replacement:function(str,attrs,innerHTML){return innerHTML?'`'+innerHTML+'`':'';}},{patterns:'img',type:'void',replacement:function(str,attrs,innerHTML){var src=attrs.match(attrRegExp('src')),alt=attrs.match(attrRegExp('alt')),title=attrs.match(attrRegExp('title'));return'!['+(alt&&alt[1]?alt[1]:'')+']'+'('+src[1]+(title&&title[1]?' "'+title[1]+'"':'')+')';}}];for(var i=0,len=ELEMENTS.length;i<len;i++){if(typeof ELEMENTS[i].patterns==='string'){string=replaceEls(string,{tag:ELEMENTS[i].patterns,replacement:ELEMENTS[i].replacement,type:ELEMENTS[i].type});}else{for(var j=0,pLen=ELEMENTS[i].patterns.length;j<pLen;j++){string=replaceEls(string,{tag:ELEMENTS[i].patterns[j],replacement:ELEMENTS[i].replacement,type:ELEMENTS[i].type});}}}function replaceEls(html,elProperties){var pattern=elProperties.type==='void'?'<'+elProperties.tag+'\\b([^>]*)\\/?>':'<'+elProperties.tag+'\\b([^>]*)>([\\s\\S]*?)<\\/'+elProperties.tag+'>',regex=new RegExp(pattern,'gi'),markdown='';if(typeof elProperties.replacement==='string'){markdown=html.replace(regex,elProperties.replacement);}else{markdown=html.replace(regex,function(str,p1,p2,p3){return elProperties.replacement.call(this,str,p1,p2,p3);});}return markdown;}function attrRegExp(attr){return new RegExp(attr+'\\s*=\\s*["\']?([^"\']*)["\']?','i');}string=string.replace(/<pre\b[^>]*>`([\s\S]*)`<\/pre>/gi,function(str,innerHTML){innerHTML=innerHTML.replace(/^\t+/g,'  ');innerHTML=innerHTML.replace(/\n/g,'\n    ');return'\n\n    '+innerHTML+'\n';});string=string.replace(/^(\s{0,3}\d+)\. /g,'$1\\. ');var noChildrenRegex=/<(ul|ol)\b[^>]*>(?:(?!<ul|<ol)[\s\S])*?<\/\1>/gi;while(string.match(noChildrenRegex)){string=string.replace(noChildrenRegex,function(str){return replaceLists(str);});}function replaceLists(html){html=html.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi,function(str,listType,innerHTML){var lis=innerHTML.split('</li>');lis.splice(lis.length-1,1);for(i=0,len=lis.length;i<len;i++){if(lis[i]){var prefix=(listType==='ol')?(i+1)+".  ":"*   ";lis[i]=lis[i].replace(/\s*<li[^>]*>([\s\S]*)/i,function(str,innerHTML){innerHTML=innerHTML.replace(/^\s+/,'');innerHTML=innerHTML.replace(/\n\n/g,'\n\n    ');innerHTML=innerHTML.replace(/\n([ ]*)+(\*|\d+\.) /g,'\n$1    $2 ');return prefix+innerHTML;});}}return lis.join('\n');});return'\n\n'+html.replace(/[ \t]+\n|\s+$/g,'');}var deepest=/<blockquote\b[^>]*>((?:(?!<blockquote)[\s\S])*?)<\/blockquote>/gi;while(string.match(deepest)){string=string.replace(deepest,function(str){return replaceBlockquotes(str);});}function replaceBlockquotes(html){html=html.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi,function(str,inner){inner=inner.replace(/^\s+|\s+$/g,'');inner=cleanUp(inner);inner=inner.replace(/^/gm,'> ');inner=inner.replace(/^(>([ \t]{2,}>)+)/gm,'> >');return inner;});return html;}function cleanUp(string){string=string.replace(/^[\t\r\n]+|[\t\r\n]+$/g,'');string=string.replace(/\n\s+\n/g,'\n\n');string=string.replace(/\n{3,}/g,'\n\n');return string;}return cleanUp(string);};if(typeof exports==='object'){exports.toMarkdown=toMarkdown;}
/* 




/* ===================================================
 * bootstrap-markdown.js v2.9.0
 * http://github.com/toopay/bootstrap-markdown
 * ===================================================
 * Copyright 2013-2015 Taufan Aditya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function ($) {

  "use strict"; // jshint ;_;

  /* MARKDOWN CLASS DEFINITION
   * ========================== */

  var Markdown = function (element, options) {
    // @TODO : remove this BC on next major release
    // @see : https://github.com/toopay/bootstrap-markdown/issues/109
    var opts = ['autofocus', 'savable', 'hideable', 'width', 
      'height', 'resize', 'iconlibrary', 'language', 
      'footer', 'fullscreen', 'hiddenButtons', 'disabledButtons'];
    $.each(opts,function(_, opt){
      if (typeof $(element).data(opt) !== 'undefined') {
        options = typeof options == 'object' ? options : {}
        options[opt] = $(element).data(opt)
      }
    });
    // End BC

    // Class Properties
    this.$ns           = 'bootstrap-markdown';
    this.$element      = $(element);
    this.$editable     = {el:null, type:null,attrKeys:[], attrValues:[], content:null};
    this.$options      = $.extend(true, {}, $.fn.markdown.defaults, options, this.$element.data('options'));
    this.$oldContent   = null;
    this.$isPreview    = false;
    this.$isFullscreen = false;
    this.$editor       = null;
    this.$textarea     = null;
    this.$handler      = [];
    this.$callback     = [];
    this.$nextTab      = [];

    this.showEditor();
  };

  Markdown.prototype = {

    constructor: Markdown

  , __alterButtons: function(name,alter) {
      var handler = this.$handler, isAll = (name == 'all'),that = this;

      $.each(handler,function(k,v) {
        var halt = true;
        if (isAll) {
          halt = false;
        } else {
          halt = v.indexOf(name) < 0;
        }

        if (halt === false) {
          alter(that.$editor.find('button[data-handler="'+v+'"]'));
        }
      });
    }

  , __buildButtons: function(buttonsArray, container) {
      var i,
          ns = this.$ns,
          handler = this.$handler,
          callback = this.$callback;

      for (i=0;i<buttonsArray.length;i++) {
        // Build each group container
        var y, btnGroups = buttonsArray[i];
        for (y=0;y<btnGroups.length;y++) {
          // Build each button group
          var z,
              buttons = btnGroups[y].data,
              btnGroupContainer = $('<div/>', {
                                    'class': 'btn-group'
                                  });

          for (z=0;z<buttons.length;z++) {
            var button = buttons[z],
                buttonContainer, buttonIconContainer,
                buttonHandler = ns+'-'+button.name,
                buttonIcon = this.__getIcon(button.icon),
                btnText = button.btnText ? button.btnText : '',
                btnClass = button.btnClass ? button.btnClass : 'btn',
                tabIndex = button.tabIndex ? button.tabIndex : '-1',
                hotkey = typeof button.hotkey !== 'undefined' ? button.hotkey : '',
                hotkeyCaption = typeof jQuery.hotkeys !== 'undefined' && hotkey !== '' ? ' ('+hotkey+')' : '';

            // Construct the button object
            buttonContainer = $('<button></button>');
            buttonContainer.text(' ' + this.__localize(btnText)).addClass('btn-default btn-sm').addClass(btnClass);
            if(btnClass.match(/btn\-(primary|success|info|warning|danger|link)/)){
                buttonContainer.removeClass('btn-default');
            }
            buttonContainer.attr({
                'type': 'button',
                'title': this.__localize(button.title) + hotkeyCaption,
                'tabindex': tabIndex,
                'data-provider': ns,
                'data-handler': buttonHandler,
                'data-hotkey': hotkey
            });
            if (button.toggle === true){
              buttonContainer.attr('data-toggle', 'button');
            }
            buttonIconContainer = $('<span/>');
            buttonIconContainer.addClass(buttonIcon);
            buttonIconContainer.prependTo(buttonContainer);

            // Attach the button object
            btnGroupContainer.append(buttonContainer);

            // Register handler and callback
            handler.push(buttonHandler);
            callback.push(button.callback);
          }

          // Attach the button group into container dom
          container.append(btnGroupContainer);
        }
      }

      return container;
    }
  , __setListener: function() {
      // Set size and resizable Properties
      var hasRows = typeof this.$textarea.attr('rows') !== 'undefined',
          maxRows = this.$textarea.val().split("\n").length > 5 ? this.$textarea.val().split("\n").length : '5',
          rowsVal = hasRows ? this.$textarea.attr('rows') : maxRows;

      this.$textarea.attr('rows',rowsVal);
      if (this.$options.resize) {
        this.$textarea.css('resize',this.$options.resize);
      }

      this.$textarea
        .on('focus',    $.proxy(this.focus, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))
        .on('change',   $.proxy(this.change, this))
        .on('select',   $.proxy(this.select, this));

      if (this.eventSupported('keydown')) {
        this.$textarea.on('keydown', $.proxy(this.keydown, this));
      }

      // Re-attach markdown data
      this.$textarea.data('markdown',this);
    }

  , __handle: function(e) {
      var target = $(e.currentTarget),
          handler = this.$handler,
          callback = this.$callback,
          handlerName = target.attr('data-handler'),
          callbackIndex = handler.indexOf(handlerName),
          callbackHandler = callback[callbackIndex];

      // Trigger the focusin
      $(e.currentTarget).focus();

      callbackHandler(this);

      // Trigger onChange for each button handle
      this.change(this);

      // Unless it was the save handler,
      // focusin the textarea
      if (handlerName.indexOf('cmdSave') < 0) {
        this.$textarea.focus();
      }

      e.preventDefault();
    }

  , __localize: function(string) {
      var messages = $.fn.markdown.messages,
          language = this.$options.language;
      if (
        typeof messages !== 'undefined' &&
        typeof messages[language] !== 'undefined' &&
        typeof messages[language][string] !== 'undefined'
      ) {
        return messages[language][string];
      }
      return string;
    }

  , __getIcon: function(src) {
    return typeof src == 'object' ? src[this.$options.iconlibrary] : src;
  }

  , setFullscreen: function(mode) {
    var $editor = this.$editor,
        $textarea = this.$textarea;

    if (mode === true) {
      $editor.addClass('md-fullscreen-mode');
      $('body').addClass('md-nooverflow');
      this.$options.onFullscreen(this);
    } else {
      $editor.removeClass('md-fullscreen-mode');
      $('body').removeClass('md-nooverflow');

      if (this.$isPreview == true) this.hidePreview().showPreview()
    }

    this.$isFullscreen = mode;
    $textarea.focus();
  }

  , showEditor: function() {
      var instance = this,
          textarea,
          ns = this.$ns,
          container = this.$element,
          originalHeigth = container.css('height'),
          originalWidth = container.css('width'),
          editable = this.$editable,
          handler = this.$handler,
          callback = this.$callback,
          options = this.$options,
          editor = $( '<div/>', {
                      'class': 'md-editor',
                      click: function() {
                        instance.focus();
                      }
                    });

      // Prepare the editor
      if (this.$editor === null) {
        // Create the panel
        var editorHeader = $('<div/>', {
                            'class': 'md-header btn-toolbar'
                            });

        // Merge the main & additional button groups together
        var allBtnGroups = [];
        if (options.buttons.length > 0) allBtnGroups = allBtnGroups.concat(options.buttons[0]);
        if (options.additionalButtons.length > 0) {
          // iterate the additional button groups
          $.each(options.additionalButtons[0], function(idx, buttonGroup){
            
            // see if the group name of the addional group matches an existing group
            var matchingGroups = $.grep(allBtnGroups, function(allButtonGroup, allIdx){
              return allButtonGroup.name === buttonGroup.name;
            });

            // if it matches add the addional buttons to that group, if not just add it to the all buttons group
            if(matchingGroups.length > 0) {
              matchingGroups[0].data = matchingGroups[0].data.concat(buttonGroup.data);
            } else {              
              allBtnGroups.push(options.additionalButtons[0][idx]);
            }

          });
        } 

        // Reduce and/or reorder the button groups
        if (options.reorderButtonGroups.length > 0) {
          allBtnGroups = allBtnGroups
              .filter(function(btnGroup) {
                return options.reorderButtonGroups.indexOf(btnGroup.name) > -1;
              })
              .sort(function(a, b) {
                if (options.reorderButtonGroups.indexOf(a.name) < options.reorderButtonGroups.indexOf(b.name)) return -1;
                if (options.reorderButtonGroups.indexOf(a.name) > options.reorderButtonGroups.indexOf(b.name)) return 1;
                return 0;
              });
        }

        // Build the buttons
        if (allBtnGroups.length > 0) {
          editorHeader = this.__buildButtons([allBtnGroups], editorHeader);
        }

        if (options.fullscreen.enable) {
          editorHeader.append('<div class="md-controls"><a class="md-control md-control-fullscreen" href="#"><span class="'+this.__getIcon(options.fullscreen.icons.fullscreenOn)+'"></span></a></div>').on('click', '.md-control-fullscreen', function(e) {
              e.preventDefault();
              instance.setFullscreen(true);
          });
        }

        editor.append(editorHeader);

        // Wrap the textarea
        if (container.is('textarea')) {
          container.before(editor);
          textarea = container;
          textarea.addClass('md-input');
          editor.append(textarea);
        } else {
          var rawContent = (typeof toMarkdown == 'function') ? toMarkdown(container.html()) : container.html(),
              currentContent = $.trim(rawContent);

          // This is some arbitrary content that could be edited
          textarea = $('<textarea/>', {
                       'class': 'md-input',
                       'val' : currentContent
                      });

          editor.append(textarea);

          // Save the editable
          editable.el = container;
          editable.type = container.prop('tagName').toLowerCase();
          editable.content = container.html();

          $(container[0].attributes).each(function(){
            editable.attrKeys.push(this.nodeName);
            editable.attrValues.push(this.nodeValue);
          });

          // Set editor to blocked the original container
          container.replaceWith(editor);
        }

        var editorFooter = $('<div/>', {
                           'class': 'md-footer'
                         }),
            createFooter = false,
            footer = '';
        // Create the footer if savable
        if (options.savable) {
          createFooter = true;
          var saveHandler = 'cmdSave';

          // Register handler and callback
          handler.push(saveHandler);
          callback.push(options.onSave);

          editorFooter.append('<button class="btn btn-success" data-provider="'
                              + ns
                              + '" data-handler="'
                              + saveHandler
                              + '"><i class="icon icon-white icon-ok"></i> '
                              + this.__localize('Save')
                              + '</button>');


        }

        footer = typeof options.footer === 'function' ? options.footer(this) : options.footer;

        if ($.trim(footer) !== '') {
          createFooter = true;
          editorFooter.append(footer);
        }

        if (createFooter) editor.append(editorFooter);

        // Set width
        if (options.width && options.width !== 'inherit') {
          if (jQuery.isNumeric(options.width)) {
            editor.css('display', 'table');
            textarea.css('width', options.width + 'px');
          } else {
            editor.addClass(options.width);
          }
        }

        // Set height
        if (options.height && options.height !== 'inherit') {
          if (jQuery.isNumeric(options.height)) {
            var height = options.height;
            if (editorHeader) height = Math.max(0, height - editorHeader.outerHeight());
            if (editorFooter) height = Math.max(0, height - editorFooter.outerHeight());
            textarea.css('height', height + 'px');
          } else {
            editor.addClass(options.height);
          }
        }

        // Reference
        this.$editor     = editor;
        this.$textarea   = textarea;
        this.$editable   = editable;
        this.$oldContent = this.getContent();

        this.__setListener();

        // Set editor attributes, data short-hand API and listener
        this.$editor.attr('id',(new Date()).getTime());
        this.$editor.on('click', '[data-provider="bootstrap-markdown"]', $.proxy(this.__handle, this));

        if (this.$element.is(':disabled') || this.$element.is('[readonly]')) {
          this.$editor.addClass('md-editor-disabled');
          this.disableButtons('all');
        }

        if (this.eventSupported('keydown') && typeof jQuery.hotkeys === 'object') {
          editorHeader.find('[data-provider="bootstrap-markdown"]').each(function() {
            var $button = $(this),
                hotkey = $button.attr('data-hotkey');
            if (hotkey.toLowerCase() !== '') {
              textarea.bind('keydown', hotkey, function() {
                $button.trigger('click');
                return false;
              });
            }
          });
        }

        if (options.initialstate === 'preview') {
          this.showPreview();
        } else if (options.initialstate === 'fullscreen' && options.fullscreen.enable) {
          this.setFullscreen(true);
        }

      } else {
        this.$editor.show();
      }

      if (options.autofocus) {
        this.$textarea.focus();
        this.$editor.addClass('active');
      }

      if (options.fullscreen.enable && options.fullscreen !== false) {
        this.$editor.append('<div class="md-fullscreen-controls">'
                        + '<a href="#" class="exit-fullscreen" title="Exit fullscreen"><span class="' + this.__getIcon(options.fullscreen.icons.fullscreenOff) + '">'
                        + '</span></a>'
                        + '</div>');
        this.$editor.on('click', '.exit-fullscreen', function(e) {
          e.preventDefault();
          instance.setFullscreen(false);
        });
      }

      // hide hidden buttons from options
      this.hideButtons(options.hiddenButtons);

      // disable disabled buttons from options
      this.disableButtons(options.disabledButtons);

      // Trigger the onShow hook
      options.onShow(this);

      return this;
    }

  , parseContent: function(val) {
      var content;

      // parse with supported markdown parser
      var val = val || this.$textarea.val();

      if (this.$options.parser) {
        content = this.$options.parser(val);
      } else if (typeof markdown == 'object') {
        content = markdown.toHTML(val);
      } else if (typeof marked == 'function') {
        content = marked(val);
      } else {
        content = val;
      }

      return content;
    }

  , showPreview: function() {
      var options = this.$options,
          container = this.$textarea,
          afterContainer = container.next(),
          replacementContainer = $('<div/>',{'class':'md-preview','data-provider':'markdown-preview'}),
          content,
          callbackContent;

      if (this.$isPreview == true) {
        // Avoid sequenced element creation on missused scenario
        // @see https://github.com/toopay/bootstrap-markdown/issues/170
        return this;
      }
      
      // Give flag that tell the editor enter preview mode
      this.$isPreview = true;
      // Disable all buttons
      this.disableButtons('all').enableButtons('cmdPreview');

      // Try to get the content from callback
      callbackContent = options.onPreview(this);
      // Set the content based from the callback content if string otherwise parse value from textarea
      content = typeof callbackContent == 'string' ? callbackContent : this.parseContent();

      // Build preview element
      replacementContainer.html(content);

      if (afterContainer && afterContainer.attr('class') == 'md-footer') {
        // If there is footer element, insert the preview container before it
        replacementContainer.insertBefore(afterContainer);
      } else {
        // Otherwise, just append it after textarea
        container.parent().append(replacementContainer);
      }

      // Set the preview element dimensions
      replacementContainer.css({
        width: container.outerWidth() + 'px',
        height: container.outerHeight() + 'px'
      });

      if (this.$options.resize) {
        replacementContainer.css('resize',this.$options.resize);
      }

      // Hide the last-active textarea
      container.hide();

      // Attach the editor instances
      replacementContainer.data('markdown',this);

      if (this.$element.is(':disabled') || this.$element.is('[readonly]')) {
        this.$editor.addClass('md-editor-disabled');
        this.disableButtons('all');
      }

      return this;
    }

  , hidePreview: function() {
      // Give flag that tell the editor quit preview mode
      this.$isPreview = false;

      // Obtain the preview container
      var container = this.$editor.find('div[data-provider="markdown-preview"]');

      // Remove the preview container
      container.remove();

      // Enable all buttons
      this.enableButtons('all');
      // Disable configured disabled buttons
      this.disableButtons(this.$options.disabledButtons);

      // Back to the editor
      this.$textarea.show();
      this.__setListener();

      return this;
    }

  , isDirty: function() {
      return this.$oldContent != this.getContent();
    }

  , getContent: function() {
      return this.$textarea.val();
    }

  , setContent: function(content) {
      this.$textarea.val(content);

      return this;
    }

  , findSelection: function(chunk) {
    var content = this.getContent(), startChunkPosition;

    if (startChunkPosition = content.indexOf(chunk), startChunkPosition >= 0 && chunk.length > 0) {
      var oldSelection = this.getSelection(), selection;

      this.setSelection(startChunkPosition,startChunkPosition+chunk.length);
      selection = this.getSelection();

      this.setSelection(oldSelection.start,oldSelection.end);

      return selection;
    } else {
      return null;
    }
  }

  , getSelection: function() {

      var e = this.$textarea[0];

      return (

          ('selectionStart' in e && function() {
              var l = e.selectionEnd - e.selectionStart;
              return { start: e.selectionStart, end: e.selectionEnd, length: l, text: e.value.substr(e.selectionStart, l) };
          }) ||

          /* browser not supported */
          function() {
            return null;
          }

      )();

    }

  , setSelection: function(start,end) {

      var e = this.$textarea[0];

      return (

          ('selectionStart' in e && function() {
              e.selectionStart = start;
              e.selectionEnd = end;
              return;
          }) ||

          /* browser not supported */
          function() {
            return null;
          }

      )();

    }

  , replaceSelection: function(text) {

      var e = this.$textarea[0];

      return (

          ('selectionStart' in e && function() {
              e.value = e.value.substr(0, e.selectionStart) + text + e.value.substr(e.selectionEnd, e.value.length);
              // Set cursor to the last replacement end
              e.selectionStart = e.value.length;
              return this;
          }) ||

          /* browser not supported */
          function() {
              e.value += text;
              return jQuery(e);
          }

      )();
    }

  , getNextTab: function() {
      // Shift the nextTab
      if (this.$nextTab.length === 0) {
        return null;
      } else {
        var nextTab, tab = this.$nextTab.shift();

        if (typeof tab == 'function') {
          nextTab = tab();
        } else if (typeof tab == 'object' && tab.length > 0) {
          nextTab = tab;
        }

        return nextTab;
      }
    }

  , setNextTab: function(start,end) {
      // Push new selection into nextTab collections
      if (typeof start == 'string') {
        var that = this;
        this.$nextTab.push(function(){
          return that.findSelection(start);
        });
      } else if (typeof start == 'number' && typeof end == 'number') {
        var oldSelection = this.getSelection();

        this.setSelection(start,end);
        this.$nextTab.push(this.getSelection());

        this.setSelection(oldSelection.start,oldSelection.end);
      }

      return;
    }

  , __parseButtonNameParam: function (names) {
      return typeof names == 'string' ?
                      names.split(' ') :
                      names;

    }

  , enableButtons: function(name) {
      var buttons = this.__parseButtonNameParam(name),
        that = this;

      $.each(buttons, function(i, v) {
        that.__alterButtons(buttons[i], function (el) {
          el.removeAttr('disabled');
        });
      });

      return this;
    }

  , disableButtons: function(name) {
      var buttons = this.__parseButtonNameParam(name),
        that = this;

      $.each(buttons, function(i, v) {
        that.__alterButtons(buttons[i], function (el) {
          el.attr('disabled','disabled');
        });
      });

      return this;
    }

  , hideButtons: function(name) {
      var buttons = this.__parseButtonNameParam(name),
        that = this;

      $.each(buttons, function(i, v) {
        that.__alterButtons(buttons[i], function (el) {
          el.addClass('hidden');
        });
      });

      return this;
    }

  , showButtons: function(name) {
      var buttons = this.__parseButtonNameParam(name),
        that = this;

      $.each(buttons, function(i, v) {
        that.__alterButtons(buttons[i], function (el) {
          el.removeClass('hidden');
        });
      });

      return this;
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element;
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;');
        isSupported = typeof this.$element[eventName] === 'function';
      }
      return isSupported;
    }

  , keyup: function (e) {
      var blocked = false;
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break;

        case 9: // tab
          var nextTab;
          if (nextTab = this.getNextTab(),nextTab !== null) {
            // Get the nextTab if exists
            var that = this;
            setTimeout(function(){
              that.setSelection(nextTab.start,nextTab.end);
            },500);

            blocked = true;
          } else {
            // The next tab memory contains nothing...
            // check the cursor position to determine tab action
            var cursor = this.getSelection();

            if (cursor.start == cursor.end && cursor.end == this.getContent().length) {
              // The cursor already reach the end of the content
              blocked = false;
            } else {
              // Put the cursor to the end
              this.setSelection(this.getContent().length,this.getContent().length);

              blocked = true;
            }
          }

          break;

        case 13: // enter
          blocked = false;
          break;
        case 27: // escape
          if (this.$isFullscreen) this.setFullscreen(false);
          blocked = false;
          break;

        default:
          blocked = false;
      }

      if (blocked) {
        e.stopPropagation();
        e.preventDefault();
      }

      this.$options.onChange(this);
    }

  , change: function(e) {
      this.$options.onChange(this);
      return this;
    }
  , select: function (e) {
      this.$options.onSelect(this);
      return this;
    }
  , focus: function (e) {
      var options = this.$options,
          isHideable = options.hideable,
          editor = this.$editor;

      editor.addClass('active');

      // Blur other markdown(s)
      $(document).find('.md-editor').each(function(){
        if ($(this).attr('id') !== editor.attr('id')) {
          var attachedMarkdown;

          if (attachedMarkdown = $(this).find('textarea').data('markdown'),
              attachedMarkdown === null) {
              attachedMarkdown = $(this).find('div[data-provider="markdown-preview"]').data('markdown');
          }

          if (attachedMarkdown) {
            attachedMarkdown.blur();
          }
        }
      });

      // Trigger the onFocus hook
      options.onFocus(this);

      return this;
    }

  , blur: function (e) {
      var options = this.$options,
          isHideable = options.hideable,
          editor = this.$editor,
          editable = this.$editable;

      if (editor.hasClass('active') || this.$element.parent().length === 0) {
        editor.removeClass('active');

        if (isHideable) {
          // Check for editable elements
          if (editable.el !== null) {
            // Build the original element
            var oldElement = $('<'+editable.type+'/>'),
                content = this.getContent(),
                currentContent = this.parseContent(content);

            $(editable.attrKeys).each(function(k,v) {
              oldElement.attr(editable.attrKeys[k],editable.attrValues[k]);
            });

            // Get the editor content
            oldElement.html(currentContent);

            editor.replaceWith(oldElement);
          } else {
            editor.hide();
          }
        }

        // Trigger the onBlur hook
        options.onBlur(this);
      }

      return this;
    }

  };

 /* MARKDOWN PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.markdown;

  $.fn.markdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('markdown')
        , options = typeof option == 'object' && option;
      if (!data) $this.data('markdown', (data = new Markdown(this, options)))
    })
  };

  $.fn.markdown.messages = {};

  $.fn.markdown.defaults = {
    /* Editor Properties */
    autofocus: false,
    hideable: false,
    savable: false,
    width: 'inherit',
    height: 'inherit',
    resize: 'none',
    iconlibrary: 'glyph',
    language: 'en',
    initialstate: 'editor',
    parser: null,

    /* Buttons Properties */
    buttons: [
      [{
        name: 'groupFont',
        data: [{
          name: 'cmdBold',
          hotkey: 'Ctrl+B',
          title: 'Bold',
          icon: { glyph: 'glyphicon glyphicon-bold', fa: 'fa fa-bold', 'fa-3': 'icon-bold' },
          callback: function(e){
            // Give/remove ** surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('strong text');
            } else {
              chunk = selected.text;
            }

            // transform selection and set the cursor into chunked text
            if (content.substr(selected.start-2,2) === '**'
                && content.substr(selected.end,2) === '**' ) {
              e.setSelection(selected.start-2,selected.end+2);
              e.replaceSelection(chunk);
              cursor = selected.start-2;
            } else {
              e.replaceSelection('**'+chunk+'**');
              cursor = selected.start+2;
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },{
          name: 'cmdItalic',
          title: 'Italic',
          hotkey: 'Ctrl+I',
          icon: { glyph: 'glyphicon glyphicon-italic', fa: 'fa fa-italic', 'fa-3': 'icon-italic' },
          callback: function(e){
            // Give/remove * surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('emphasized text');
            } else {
              chunk = selected.text;
            }

            // transform selection and set the cursor into chunked text
            if (content.substr(selected.start-1,1) === '_'
                && content.substr(selected.end,1) === '_' ) {
              e.setSelection(selected.start-1,selected.end+1);
              e.replaceSelection(chunk);
              cursor = selected.start-1;
            } else {
              e.replaceSelection('_'+chunk+'_');
              cursor = selected.start+1;
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },{
          name: 'cmdHeading',
          title: 'Heading',
          hotkey: 'Ctrl+H',
          icon: { glyph: 'glyphicon glyphicon-header', fa: 'fa fa-header', 'fa-3': 'icon-font' },
          callback: function(e){
            // Append/remove ### surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent(), pointer, prevChar;

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('heading text');
            } else {
              chunk = selected.text + '\n';
            }

            // transform selection and set the cursor into chunked text
            if ((pointer = 4, content.substr(selected.start-pointer,pointer) === '### ')
                || (pointer = 3, content.substr(selected.start-pointer,pointer) === '###')) {
              e.setSelection(selected.start-pointer,selected.end);
              e.replaceSelection(chunk);
              cursor = selected.start-pointer;
            } else if (selected.start > 0 && (prevChar = content.substr(selected.start-1,1), !!prevChar && prevChar != '\n')) {
              e.replaceSelection('\n\n### '+chunk);
              cursor = selected.start+6;
            } else {
              // Empty string before element
              e.replaceSelection('### '+chunk);
              cursor = selected.start+4;
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        }]
      },{
        name: 'groupLink',
        data: [{
          name: 'cmdUrl',
          title: 'URL/Link',
          hotkey: 'Ctrl+L',
          icon: { glyph: 'glyphicon glyphicon-link', fa: 'fa fa-link', 'fa-3': 'icon-link' },
          callback: function(e){
            // Give [] surround the selection and prepend the link
            var chunk, cursor, selected = e.getSelection(), content = e.getContent(), link;

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('enter link description here');
            } else {
              chunk = selected.text;
            }

            link = prompt(e.__localize('Insert Hyperlink'),'http://');

            if (link !== null && link !== '' && link !== 'http://' && link.substr(0,4) === 'http') {
              var sanitizedLink = $('<div>'+link+'</div>').text();

              // transform selection and set the cursor into chunked text
              e.replaceSelection('['+chunk+']('+sanitizedLink+')');
              cursor = selected.start+1;

              // Set the cursor
              e.setSelection(cursor,cursor+chunk.length);
            }
          }
        },{
          name: 'cmdImage',
          title: 'Image',
          hotkey: 'Ctrl+G',
          icon: { glyph: 'glyphicon glyphicon-picture', fa: 'fa fa-picture-o', 'fa-3': 'icon-picture' },
          callback: function(e){
            // Give ![] surround the selection and prepend the image link
            var chunk, cursor, selected = e.getSelection(), content = e.getContent(), link;

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('enter image description here');
            } else {
              chunk = selected.text;
            }

            link = prompt(e.__localize('Insert Image Hyperlink'),'http://');

            if (link !== null && link !== '' && link !== 'http://' && link.substr(0,4) === 'http') {
              var sanitizedLink = $('<div>'+link+'</div>').text();

              // transform selection and set the cursor into chunked text
              e.replaceSelection('!['+chunk+']('+sanitizedLink+' "'+e.__localize('enter image title here')+'")');
              cursor = selected.start+2;

              // Set the next tab
              e.setNextTab(e.__localize('enter image title here'));

              // Set the cursor
              e.setSelection(cursor,cursor+chunk.length);
            }
          }
        }]
      },{
        name: 'groupMisc',
        data: [{
          name: 'cmdList',
          hotkey: 'Ctrl+U',
          title: 'Unordered List',
          icon: { glyph: 'glyphicon glyphicon-list', fa: 'fa fa-list', 'fa-3': 'icon-list-ul' },
          callback: function(e){
            // Prepend/Give - surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            // transform selection and set the cursor into chunked text
            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('list text here');

              e.replaceSelection('- '+chunk);
              // Set the cursor
              cursor = selected.start+2;
            } else {
              if (selected.text.indexOf('\n') < 0) {
                chunk = selected.text;

                e.replaceSelection('- '+chunk);

                // Set the cursor
                cursor = selected.start+2;
              } else {
                var list = [];

                list = selected.text.split('\n');
                chunk = list[0];

                $.each(list,function(k,v) {
                  list[k] = '- '+v;
                });

                e.replaceSelection('\n\n'+list.join('\n'));

                // Set the cursor
                cursor = selected.start+4;
              }
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },
        {
          name: 'cmdListO',
          hotkey: 'Ctrl+O',
          title: 'Ordered List',
          icon: { glyph: 'glyphicon glyphicon-th-list', fa: 'fa fa-list-ol', 'fa-3': 'icon-list-ol' },
          callback: function(e) {

            // Prepend/Give - surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            // transform selection and set the cursor into chunked text
            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('list text here');
              e.replaceSelection('1. '+chunk);
              // Set the cursor
              cursor = selected.start+3;
            } else {
              if (selected.text.indexOf('\n') < 0) {
                chunk = selected.text;

                e.replaceSelection('1. '+chunk);

                // Set the cursor
                cursor = selected.start+3;
              } else {
                var list = [];

                list = selected.text.split('\n');
                chunk = list[0];

                $.each(list,function(k,v) {
                  list[k] = '1. '+v;
                });

                e.replaceSelection('\n\n'+list.join('\n'));

                // Set the cursor
                cursor = selected.start+5;
              }
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },
        {
          name: 'cmdCode',
          hotkey: 'Ctrl+K',
          title: 'Code',
          icon: { glyph: 'glyphicon glyphicon-asterisk', fa: 'fa fa-code', 'fa-3': 'icon-code' },
          callback: function(e) {
            // Give/remove ** surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('code text here');
            } else {
              chunk = selected.text;
            }

            // transform selection and set the cursor into chunked text
            if (content.substr(selected.start-4,4) === '```\n'
                && content.substr(selected.end,4) === '\n```') {
              e.setSelection(selected.start-4, selected.end+4);
              e.replaceSelection(chunk);
              cursor = selected.start-4;
            } else if (content.substr(selected.start-1,1) === '`'
                && content.substr(selected.end,1) === '`') {
              e.setSelection(selected.start-1,selected.end+1);
              e.replaceSelection(chunk);
              cursor = selected.start-1;
            } else if (content.indexOf('\n') > -1) {
              e.replaceSelection('```\n'+chunk+'\n```');
              cursor = selected.start+4;
            } else {
              e.replaceSelection('`'+chunk+'`');
              cursor = selected.start+1;
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },
        {
          name: 'cmdQuote',
          hotkey: 'Ctrl+Q',
          title: 'Quote',
          icon: { glyph: 'glyphicon glyphicon-comment', fa: 'fa fa-quote-left', 'fa-3': 'icon-quote-left' },
          callback: function(e) {
            // Prepend/Give - surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            // transform selection and set the cursor into chunked text
            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('quote here');

              e.replaceSelection('> '+chunk);

              // Set the cursor
              cursor = selected.start+2;
            } else {
              if (selected.text.indexOf('\n') < 0) {
                chunk = selected.text;

                e.replaceSelection('> '+chunk);

                // Set the cursor
                cursor = selected.start+2;
              } else {
                var list = [];

                list = selected.text.split('\n');
                chunk = list[0];

                $.each(list,function(k,v) {
                  list[k] = '> '+v;
                });

                e.replaceSelection('\n\n'+list.join('\n'));

                // Set the cursor
                cursor = selected.start+4;
              }
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        }]
      },{
        name: 'groupUtil',
        data: [{
          name: 'cmdPreview',
          toggle: true,
          hotkey: 'Ctrl+P',
          title: 'Preview',
          btnText: 'Preview',
          btnClass: 'btn btn-primary btn-sm',
          icon: { glyph: 'glyphicon glyphicon-search', fa: 'fa fa-search', 'fa-3': 'icon-search' },
          callback: function(e){
            // Check the preview mode and toggle based on this flag
            var isPreview = e.$isPreview,content;

            if (isPreview === false) {
              // Give flag that tell the editor enter preview mode
              e.showPreview();
            } else {
              e.hidePreview();
            }
          }
        }]
      }]
    ],
    additionalButtons:[], // Place to hook more buttons by code
    reorderButtonGroups:[],
    hiddenButtons:[], // Default hidden buttons
    disabledButtons:[], // Default disabled buttons
    footer: '',
    fullscreen: {
      enable: false,
      icons: {
        fullscreenOn: {
          fa: 'fa fa-expand',
          glyph: 'glyphicon glyphicon-fullscreen',
          'fa-3': 'icon-resize-full'
        },
        fullscreenOff: {
          fa: 'fa fa-compress',
          glyph: 'glyphicon glyphicon-fullscreen',
          'fa-3': 'icon-resize-small'
        }
      }
    },

    /* Events hook */
    onShow: function (e) {},
    onPreview: function (e) {},
    onSave: function (e) {},
    onBlur: function (e) {},
    onFocus: function (e) {},
    onChange: function(e) {},
    onFullscreen: function(e) {},
    onSelect: function (e) {}
  };

  $.fn.markdown.Constructor = Markdown;


 /* MARKDOWN NO CONFLICT
  * ==================== */

  $.fn.markdown.noConflict = function () {
    $.fn.markdown = old;
    return this;
  };

  /* MARKDOWN GLOBAL FUNCTION & DATA-API
  * ==================================== */
  var initMarkdown = function(el) {
    var $this = el;

    if ($this.data('markdown')) {
      $this.data('markdown').showEditor();
      return;
    }

    $this.markdown()
  };

  var blurNonFocused = function(e) {
    var $activeElement = $(document.activeElement);

    // Blur event
    $(document).find('.md-editor').each(function(){
      var $this            = $(this),
          focused          = $activeElement.closest('.md-editor')[0] === this,
          attachedMarkdown = $this.find('textarea').data('markdown') ||
                             $this.find('div[data-provider="markdown-preview"]').data('markdown');

      if (attachedMarkdown && !focused) {
        attachedMarkdown.blur();
      }
    })
  };

  $(document)
    .on('click.markdown.data-api', '[data-provide="markdown-editable"]', function (e) {
      initMarkdown($(this));
      e.preventDefault();
    })
    .on('click focusin', function (e) {
      blurNonFocused(e);
    })
    .ready(function(){
      $('textarea[data-provide="markdown"]').each(function(){
        initMarkdown($(this));
      })
    });

}(window.jQuery);