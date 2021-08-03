// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


window.jQuery = window.$ = require('jquery');

// Popper.js
require('bootstrap');
require("packs/admin/app.bundle.js");
require("packs/admin/vendors.bundle.js");

document.addEventListener("turbolinks:load", function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        $('[data-toggle="popover"]').popover()
    })
})