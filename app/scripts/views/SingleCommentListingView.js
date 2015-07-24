define([
    'underscore',
    'marionette',
    'text!templates/SingleCommentListingTemplate.html'
], function (_, Marionette, SingleCommentListingTemplate) {
    "use strict";

    return Marionette.ItemView.extend({
        template: _.template(SingleCommentListingTemplate),
        className: 'panel panel-default comments'
    });
});
