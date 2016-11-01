(function() {
    'use strict';
    window.github = window.github || {};
    window.github.data = [];

    $.ajax({
            url: 'https://api.github.com/users/lengstrom/orgs',
            method: 'GET',
            dataType: 'json'
        })
        .done(function handleLoad(data) {
            console.log('data passed', data)
            window.github.data.push(data);
        });


}());
