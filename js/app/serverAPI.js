var ServerAPI = (function() {

    var BASE_URL = 'http://localhost:3000';

    function getUser(userId, callback) {
        $.ajax({
            method: 'GET',
            url: BASE_URL + '/posts/' + userId,
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

    return {
        getUser: getUser,
        postUser: postUser
    };

})();