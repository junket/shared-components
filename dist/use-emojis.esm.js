function e(){var e=[],i={"o/":"👋","</3":"💔","<3":"❤️","8-D":"😃","8D":"😃","8)":"😃","B-D":"😎",BD:"😎","B)":"😎",":-D":"😄",":D":"😄",":'(":"😢",":'-(":"😢",":-))":"😁",":)":"😊",":-)":"😊",":]":"😊","0:)":"😇","0:-)":"😇","O:-)":"😇","3:)":"😈","3:-)":"😈","}:)":"😈","}:-)":"😈",";)":"😉",";-)":"😉",";-]":"😉",";D":"😉",";]":"😉",":-|":"😐",":|":"😐",":-/":"😕",":(":"😞",":-(":"😞",":[":"😞","%)":"😖","%-)":"😖",":-P":"😜",":-b":"😜",":-p":"😜",":-Þ":"😜",":-þ":"😜",":P":"😜",":b":"😜",":p":"😜",":Þ":"😜",":þ":"😜","d:":"😜",":-O":"😮",":-o":"😮",":O":"😮",":o":"😮"};return{emojiMap:i,replaceEmoticonsWithEmojis:function(o){var r=o.value,t=o.selectionStart,n=t-4,a=r.slice(n,t);for(var c in i)if(a.indexOf(c)>-1&&e[n]!==c){r=r.slice(0,n)+a.replace(c,i[c])+r.slice(t);for(var l=0;l<3;l++)e[n+l]=c}return o.selectionStart=t,o.selectionEnd=t,r}}}export{e as default};
//# sourceMappingURL=use-emojis.esm.js.map