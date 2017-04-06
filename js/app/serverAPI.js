var ServerAPI = (function() {

    var BASE_URL = 'https://oscarjon.github.io/cv/db.json';

    function getUser(userId, callback) {
        $.ajax({
            method: 'GET',
            url: BASE_URL + '/posts/' + userId,
            complete: callback,
            async: false,
        });
    }

    function getAllUsers(callback) {
        $.ajax({
            method: 'GET',
            url: BASE_URL + '/posts',
            complete: callback,
            async: false,
        });
    }

    function postUser(object, callback) {
        $.ajax({
            method: 'POST',
            url: BASE_URL + '/posts/',
            complete: callback,
            async: false,
            data: object,
        });
    }

     function deleteUser(userId, callback) {
        $.ajax({
            method: 'DELETE',
            url: BASE_URL + '/posts/' + userId,
            complete: callback,
            async: false,
        });
    }

    return {
        getUser: getUser,
        postUser: postUser,
        getAllUsers: getAllUsers,
        deleteUser: deleteUser
    };

})();
