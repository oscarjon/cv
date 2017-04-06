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

            document.getElementById("adduser").addEventListener("click", function() {

                var title = document.getElementById("title").value;

                var object = {
                    title: title
                }
                ServerAPI.postUser(object, function(data, status, res) {
                    document.getElementById("title").value = "";
                    hej(model);
                });

            });

                 document.getElementById("deleteuser").addEventListener("click", function() {

                var id = document.getElementById("asd").value;

                ServerAPI.deleteUser(id, function(data, status, res) {
                    document.getElementById("asd").value = "";
                });

            });

        });
    });