define([
    'backbone'
], function (Backbone) {
    'use strict';

    return Backbone.Collection.extend({
        url: 'http://localhost:3000' + '/posts/'
    });
});
