// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
import "bootstrap"
import "@fortawesome/fontawesome-free/js/all";

// Importing fullpage.js
import fullpage from 'fullpage.js';

// Initializing fullpage.js
document.addEventListener('turbolinks:load', () => {
  const fullPageInstance = new fullpage('#fullpage', {
      navigation: true,
      sectionsColor:['#F6F6F6']
  });
})
