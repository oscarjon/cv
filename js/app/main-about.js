define([
        'jquery',
        'app/models/aboutModel',
        'bootstrap'
    ],

    function($, model) {
        'use strict';

        $(function() {

            $('.container h1').html(model.getTitle());

            $('.container h2').html(model.getText());

        });
    });