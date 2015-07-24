define([
    'underscore',
    'jquery',
    'marionette',
    'backbone',
    'views/SinglePostListingView',
    'collections/postsCollection',
    'text!templates/postsTemplate.html'
], function (_, $, Marionette, Backbone, SinglePostListingView,
    PostsCollection, PostsTemplate) {
    "use strict";

    return Marionette.CollectionView.extend({
        template: _.template(PostsTemplate),
        childView: SinglePostListingView,
        collection: new PostsCollection(),
        initialize: function () {
            this.collection.fetch();
        }
    });
});
