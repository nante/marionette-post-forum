define([
    'underscore',
    'marionette',
    'text!templates/SinglePostListingTemplate.html'
], function (_, Marionette, SinglePostListingTemplate) {
    "use strict";

    return Marionette.ItemView.extend({
        template: _.template(SinglePostListingTemplate),
        className: 'thumbnail'
    });
});
