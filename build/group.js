!function(){"use strict";var e,n={624:function(){var e=window.wp.blocks,n=window.wp.element,o=window.wp.i18n,r=window.wp.blockEditor;(0,e.registerBlockType)("create-block/single-post-group",{edit:function(){return(0,n.createElement)("p",(0,r.useBlockProps)(),(0,o.__)("Single Post Block – hello from the editor!","single-post-block"))},save:function(){return(0,n.createElement)("p",r.useBlockProps.save(),(0,o.__)("Single Post Block – hello from the saved content!","single-post-block"))}})}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,o,t,i){if(!o){var c=1/0;for(f=0;f<e.length;f++){o=e[f][0],t=e[f][1],i=e[f][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||c>=i)&&Object.keys(r.O).every((function(e){return r.O[e](o[u])}))?o.splice(u--,1):(l=!1,i<c&&(c=i));if(l){e.splice(f--,1);var s=t();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,t,i]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={81:0,847:0};r.O.j=function(n){return 0===e[n]};var n=function(n,o){var t,i,c=o[0],l=o[1],u=o[2],s=0;if(c.some((function(n){return 0!==e[n]}))){for(t in l)r.o(l,t)&&(r.m[t]=l[t]);if(u)var f=u(r)}for(n&&n(o);s<c.length;s++)i=c[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(f)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var t=r.O(void 0,[847],(function(){return r(624)}));t=r.O(t)}();