define(['./basicModel'], function(BasicModel) {

    var text = "";
    var title = "";

    var model1 = new BasicModel(title, text);
    return model1;
});

function updateUserlist(model) {

    ServerAPI.getAllUsers(function(data, status, res) {
        model.text = "";
        userslist = data.responseJSON;
        for (var i = 0; i < userslist.length; i++) {
            model.text += userslist[i].id + " " + userslist[i].title + "<br>";
        }
        $('.container h2').html(model.getText());
    });
};