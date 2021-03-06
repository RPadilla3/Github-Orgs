(function() {
    'use strict';
    window.github = window.github || {};
    window.github.data = [];
    $('.load')
        .on('click', function tokenPush() {
            var myToken = $('#token').val();
            $.ajax({
                    url: 'https://api.github.com/users/jisaacks/orgs',
                    method: 'GET',
                    dataType: 'json',
                    headers: {
                        Authorization: 'token ' + myToken //never Commit a token
                    }
                })
                .done(function handleLoad(data) {
                    console.log('data passed', data);
                    window.github.data(data);
                })
                .fail(function dataFail(xhr) {
                    console.log('data failed', xhr);
                });
        });



}());
