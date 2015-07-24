require.config({
    paths: {
        'jquery': 'vendor/jquery/dist/jquery',
        'underscore': 'vendor/underscore-amd/underscore',
        'marionette': 'vendor/marionette/lib/backbone.marionette',
        'backbone': 'vendor/backbone-amd/backbone',
        'text': 'vendor/text/text',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'templates': '../templates'
    },
    shim: {
        'bootstrap': {deps: ['jquery']},
        'vendor/bootstrap/js/slider': { deps: ['jquery'], exports: '$.fn.slider' },
        'vendor/bootstrap/js/affix': { deps: ['jquery'], exports: '$.fn.affix' },
        'vendor/bootstrap/js/alert': { deps: ['jquery'], exports: '$.fn.alert' },
        'vendor/bootstrap/js/button': { deps: ['jquery'], exports: '$.fn.button' },
        'vendor/bootstrap/js/carousel': { deps: ['jquery'], exports: '$.fn.carousel' },
        'vendor/bootstrap/js/collapse': { deps: ['jquery'], exports: '$.fn.collapse' },
        'vendor/bootstrap/js/dropdown': { deps: ['jquery'], exports: '$.fn.dropdown' },
        'vendor/bootstrap/js/modal': { deps: ['jquery'], exports: '$.fn.modal' },
        'vendor/bootstrap/js/popover': { deps: ['jquery'], exports: '$.fn.popover' },
        'vendor/bootstrap/js/scrollspy': { deps: ['jquery'], exports: '$.fn.scrollspy'},
        'vendor/bootstrap/js/tab': { deps: ['jquery'], exports: '$.fn.tab'},
        'vendor/bootstrap/js/tooltip': { deps: ['jquery'], exports: '$.fn.tooltip'},
        'vendor/bootstrap/js/transition': { deps: ['jquery'], exports: '$.support.transition'},
        'vendor/bootstrap/js/typeahead': { deps: ['jquery'], exports: '$.fn.typeahead'}
    }
});

require([
    'bootstrap'
], function () {
    "use strict";

    require(['app'], function(App) {
        App.start();
    });
});
