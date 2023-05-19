var ValidateModule = (function () {
    //set module vars
    var result = $('#result');
    var btn = $('#valBtn');

    //expose this function
    return {
        bindUiActions: function () {
            btn.click(function () {
                var input = $('#input').val();
                ValidateModule.validatePhoneNumber(input);
            });
        },
        validatePhoneNumber: function (input) {
            var regex = /1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/;

            //result.html(regex.test(input));
            if (input.match(regex)) {
                result.html("<p>Valid Number</p>");
            } else {
                result.html("<p>Invalid Number</p>");
            }
        }
    }
})();
ValidateModule.bindUiActions();