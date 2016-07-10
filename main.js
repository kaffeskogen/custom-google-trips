'use strict';

get('style.css').then(function(response) {
    console.log('yay, success!')
}, function(response) {
    throw new Error(response);
})