define([
    'backbone',
    'marionette',
    'views/homeView',
    'routers/mainRouter'
], function(Backbone, Marionette, HomeView, router) {
    "use strict";

    var App = Marionette.Application.extend({
        container: 'body',
        initialize: function() {
            this.regionManager = new Marionette.RegionManager();
            this.regionManager.addRegion('main', '.main');
        },
        onStart: function () {
            router.initialize();
            Backbone.history.start();
            this.regionManager.get('main').show(new HomeView());
        }
    });

    var app = new App();
    return app;
});
