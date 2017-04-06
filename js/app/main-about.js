define([
        'jquery',
        'app/models/aboutModel',
        'bootstrap'
    ],

    function($, model) {
        'use strict';

        $(function() {

            updateUserlist(model);

            $('.container h2').html(model.getText());

            document.getElementById("adduser").addEventListener("click", function() {

                var title = document.getElementById("title").value;

                var object = {
                    title: title
                }
                ServerAPI.postUser(object, function(data, status, res) {
                    document.getElementById("title").value = "";
                    updateUserlist(model);
                });

            });

            document.getElementById("deleteuser").addEventListener("click", function() {

                var id = document.getElementById("asd").value;

                ServerAPI.deleteUser(id, function(data, status, res) {
                    document.getElementById("asd").value = "";
                    updateUserlist(model);
                });

            });

        });
    });