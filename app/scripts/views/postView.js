define([
    'underscore',
    'jquery',
    'marionette',
    'backbone',
    'models/postModel',
    'collections/commentsCollection',
    'views/SingleCommentListingView',
    'text!templates/postTemplate.html'
], function (_, $, Marionette, Backbone, PostModel, CommentsCollection, SingleCommentListingView, PostTemplate) {
    "use strict";

    return Marionette.CompositeView.extend({
        template: _.template(PostTemplate),
        childView: SingleCommentListingView,
        childViewContainer: '.comments'
    });
});
