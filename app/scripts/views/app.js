define([
    'underscore',
    'jquery',
    'backbone',
    'routers/mainRouter',
    'text!templates/appTemplate.html'
], function (_, $, Backbone, MainRouter, AppTemplate) {
    "use strict";

    return Backbone.View.extend({
        el: 'body',
        template: AppTemplate,
        initialize: function() {
            this.render();
            MainRouter.initialize();
        },
        render: function () {
            this.$el.html(this.template).hide().fadeIn(300);
        }
    });
});
