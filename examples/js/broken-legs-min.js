var BROKEN_LEGS=window.BROKEN_LEGS||{version:"0.1_07.2019",widgets:{},addWidgets:function(b,c){var a=window.BROKEN_LEGS.widgets[b];if($.type(a)!=="undefined"){console.error("replace widget: "+b)}window.BROKEN_LEGS.widgets[b]=c;window.BROKEN_LEGS[b]=function(e,d){window.BROKEN_LEGS.build(e,b,d)}},build:function(b,c,a){if($.type(b)==="undefined"){console.log("undefined element");return}if($.type(b)==="string"){b=$("#"+b)}var d=window.BROKEN_LEGS.widgets[c];if($.type(d)!=="undefined"){if(d.isApply(b)){d.applyWidget(b,a)}}}};var $BL=window.BROKEN_LEGS;(function(){var a=window.BROKEN_LEGS;var b="button";a.addWidgets(b,{isApply:function(c){return false},applyWidget:function(d,c){}})})();(function(){var a=window.BROKEN_LEGS})();(function(){var a=window.BROKEN_LEGS})();(function(){var a=window.BROKEN_LEGS})();