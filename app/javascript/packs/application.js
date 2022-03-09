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

// // Importing fullpage.js
// import * as fullpage from 'fullpage.js';

// // When using fullPage extensions replace the previous import
// // of fullpage.js for this file
// //import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// // Initializing it
// document.addEventListener('turbolinks:load', () => {
//   debugger
//   var fullPageInstance = new fullpage_js__WEBPACK_IMPORTED_MODULE_6__('#myFullpage', {
//       sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
//   });
// })


// Optional. When using fullPage extensions
//import scrollHorizontally from './fullpage.scrollHorizontally.min';

// Optional. When using scrollOverflow:true
//import IScroll from 'fullpage.js/vendors/scrolloverflow';

// Importing fullpage.js
import fullpage from 'fullpage.js';

// When using fullPage extensions replace the previous import
// of fullpage.js for this file
//import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// Initializing it
document.addEventListener('turbolinks:load', () => {
  const fullPageInstance = new fullpage('#fullpage', {
      navigation: true,
      sectionsColor:[, '#480ca8', '#4895ef', '#560bad', '#4361ee', '#480ca8'],
      parallax: true,
  });
})
