!function(){"use strict";var e,n={273:function(){var e=window.wp.blocks,n=window.wp.element,o=window.wp.i18n,r=window.wp.blockEditor;(0,e.registerBlockType)("create-block/single-post-block",{edit:function(){return(0,n.createElement)("p",(0,r.useBlockProps)(),(0,o.__)("Single Post Block – hello from the editor!","single-post-block"))},save:function(){return(0,n.createElement)("p",r.useBlockProps.save(),(0,o.__)("Single Post Block – hello from the saved content!","single-post-block"))}})}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,o,t,i){if(!o){var l=1/0;for(f=0;f<e.length;f++){o=e[f][0],t=e[f][1],i=e[f][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<l&&(l=i));if(c){e.splice(f--,1);var u=t();void 0!==u&&(n=u)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,t,i]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};r.O.j=function(n){return 0===e[n]};var n=function(n,o){var t,i,l=o[0],c=o[1],s=o[2],u=0;if(l.some((function(n){return 0!==e[n]}))){for(t in c)r.o(c,t)&&(r.m[t]=c[t]);if(s)var f=s(r)}for(n&&n(o);u<l.length;u++)i=l[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(f)},o=self.webpackChunksingle_post_block=self.webpackChunksingle_post_block||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var t=r.O(void 0,[431],(function(){return r(273)}));t=r.O(t)}();