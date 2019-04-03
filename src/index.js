const $ = require('jquery'); // eslint-disable-line import/no-unresolved
const NoUISlider = require('nouislider');
const wNumb = require('wnumb');

$.fn.enableNoUISlider = function() {
    this.filter('input[type=range]:not(.js-nouislider-initialized)').each(function() {
        const $rangeInput = $(this);

        $rangeInput.css({display: 'none'}).addClass('js-nouislider-initialized');

        const $wrapper = $('<div class="nouislider-range-wrapper"><div></div></div>')
            .insertAfter($rangeInput);

        const min         = $rangeInput.attr('min')          ? Number($rangeInput.attr('min'))   : 0;
        const max         = $rangeInput.attr('max')          ? Number($rangeInput.attr('max'))   : 100;
        const step        = $rangeInput.attr('step')         ? Number($rangeInput.attr('step'))  : 1;
        const value       = $rangeInput.attr('value')        ? Number($rangeInput.attr('value')) : 1;
        const wnumbFormat = $rangeInput.data('wnumb-format') ? $rangeInput.data('wnumb-format')  : null;

        const options = {
            start: value, // [value, value2...]
            step,
            // connect: false,  // Display colored bars between handles
            range: {
                min,
                max,
            },
            tooltips: [true],
        };

        if (wnumbFormat !== null) {
            options.format = wNumb(wnumbFormat);
        }

        const noUiSliderInstance = NoUISlider.create($wrapper.find('div').get(0), options);

        $rangeInput.on('change', function () {
            noUiSliderInstance.set(this.value);
        });

        noUiSliderInstance.on('change', (values, handle, unencoded/* , tap, positions */) => {
            $rangeInput.val(unencoded[0]).trigger('change');
            noUiSliderInstance.set(unencoded[0]);
        });
    });
};
