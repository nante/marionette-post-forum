define([
    'backbone'
], function (Backbone) {
    "use strict";

    return Backbone.Model.extend({
        url: function () {
            return 'http://localhost:3000' + '/posts/' + this.id;
        }
    });
});
