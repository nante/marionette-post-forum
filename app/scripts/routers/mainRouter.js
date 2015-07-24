define([
    'jquery',
    'underscore',
    'backbone',
    'views/homeView',
    'views/postsView',
    'views/postView',
    'models/postModel',
    'collections/commentsCollection'
], function ($, _, Backbone, HomeView, PostsView, PostView,
    PostModel, CommentsCollection) {
    "use strict";

    var mainRouter = Backbone.Router.extend({
        routes: {
            '': 'homeRoute',
            'posts': 'postsRoute',
            'posts/:id': 'postRoute'
        },
        postsRoute: function () {
            var app = require('app');
            app.regionManager.get('main').show(new PostsView());
        },
        postRoute: function (postID) {
            var xhr;
            var comments;
            var app = require('app');
            var post = new PostModel({
                id: postID
            });

            post.fetch().done(function () {
                comments = new CommentsCollection({
                    postUID: postID
                });

                xhr = comments.fetch();

                $.when(xhr).done(function () {
                    app.regionManager.get('main').show(new PostView({
                        id: postID,
                        collection: comments,
                        model: post
                    }));
                });
            });
        },
        homeRoute: function () {
            var app = require('app');
            app.regionManager.get('main').show(new HomeView());
        }
    });
    var routing = {
        initialize: function () {
           this.myRouter = new mainRouter();
        }
    };
    return routing;
});
