/**
file: button.js
import: _main.js
*/
(function () {
    var _bl = window.BROKEN_LEGS; // $BL
    var widgetName = 'button';
    _bl.addWidgets(widgetName, {
        isApply : function (element) {
            // TODO
            var tag = _bl.tagName(element);
            if (tag == 'button') {
                return true;
            }
            if ( tag == 'input' ) {
                var inputType = $(element).prop('type').toLowerCase();
                return ( inputType == 'button' || inputType == 'submit' );
            }
            return false;
        },
        applyWidget : function (element, optionObject) {
            // TODO
        }
    });
})();