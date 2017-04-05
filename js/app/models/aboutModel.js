define(['./basicModel'], function(BasicModel) {

    var text = "";
    ServerAPI.getUser(1, function(data, status, res){
    	text = data.responseJSON.title;
    });

    var title = ""
    // var object = {
    //  	id: 2,
    //     title: 'Oscar'
    // }
    // ServerAPI.postUser(object, function(data, status, res) {
    //     title = data.responseJSON.title;
    // });

    var model1 = new BasicModel(title, text);
    return model1;
});



// function myFunction() {
// var data;
// $.ajax({
//     url: 'http://jsonplaceholder.typicode.com/posts/1',
//     dataType: "json",
//     async: false,
//     success: function (resp) {
//         data = resp.title;
//     },
//     error: function () {}
// }); 

// return data; 
//}