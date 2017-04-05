define(function () {
    function BasicModel(title, text) {
        this.title = title;
        this.text = text;
    }

    BasicModel.prototype.getTitle = function() {
        return this.title;
    };

     BasicModel.prototype.getText = function() {
        return this.text;
    };

    return BasicModel;
});
