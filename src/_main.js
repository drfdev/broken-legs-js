/**
file: _main.js
import: jquery
*/
var BROKEN_LEGS = window.BROKEN_LEGS || {
    /**
    lib version
    */
    version: '0.1_07.2019',
    /**
    widgets list
    contains objects with structure:
    {
        name : '', // widget name
        widget: { // widget object
            // function, return true / false
            // detect element to apply widget mechanics
            isApply : function (element) { ...; },
            // function, return void
            // make element with widget
            applyWidget : function (element, [options]) { ...; }
        }
    }
    usage:
    widgets['widgetName']
    */
    widgets : {},
    addWidgets : function (widgetName, widgetObject) {
        var previousWidget = window.BROKEN_LEGS.widgets[widgetName];
        if ($.type(previousWidget) !== 'undefined') {
            console.error('replace widget: ' + widgetName);
        }
        window.BROKEN_LEGS.widgets[widgetName] = widgetObject;
        // create short-version of build-function
        // example: $BL.button(...);
        window.BROKEN_LEGS[widgetName] = function (element, options) {
            window.BROKEN_LEGS.build(element, widgetName, options);
        };
    },
    /**
    Make widget to element, with some options
    */
    build : function (element, widgetName, options) {
        if ($.type(element) === 'undefined') {
            console.log('undefined element');
            return;
        }
        // id of object can pass
        if ($.type(element) === 'string') {
            element = $('#' + element)
        }
        if (element.length == 0) {
            // element does not exists
            return;
        }
        var widget = window.BROKEN_LEGS.widgets[widgetName];
        if ($.type(widget) !== 'undefined') {
            if (widget.isApply(element)) {
                widget.applyWidget(element, options);
            }
        }
    },
// Utility functions:
    tagName : function (element) {
        var el$ = $(element);
        if (el$.length == 0) {
            return '';
        }
        return el$.prop('tagName').toLowerCase();
    }
};
/**
$BL is short version of window.BROKEN_LEGS
*/
var $BL = window.BROKEN_LEGS;