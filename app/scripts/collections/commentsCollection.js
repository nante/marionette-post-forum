define([
    'backbone'
], function (Backbone) {
    "use strict";

    return Backbone.Collection.extend({
        initialize: function (options) {
            this.postID = options.postUID;
        },
        url: function () {
            return 'http://localhost:3000' + '/posts/' + this.postID + '/comments';
        }
    });
});
