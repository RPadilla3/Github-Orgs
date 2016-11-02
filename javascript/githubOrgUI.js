(function() {
    'use strict';
    window.github = window.github || {};

    window.github.data = function data(data){
      $(data).each(function pullInData(i) {
          console.log('it works', data);
        $('ul').append('<li><img src="' + data[i].avatar_url + '"/><p>' + data[i].login + '</p></li>');
      });
    };
}());
