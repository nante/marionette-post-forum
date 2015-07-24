define([
    'underscore',
    'marionette',
    'text!templates/homeTemplate.html'
], function (_, Marionette, HomeTemplate) {
    "use strict";

    return Marionette.ItemView.extend({
        template: _.template(HomeTemplate),
        ui: {
            testButton: '.btn--test'
        },
        events: {
            'click @ui.testButton': 'runTestMethod'
        }
    });
});
