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
const initSubmitLoader =()=>{
  const loader = document.querySelector(".loader")
  const forms = document.querySelectorAll('[data-show-loader="true"]')
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      // show loader
      loader.classList.add('active')

      let i = 0;
        const txt = 'Churning.....';
        const speed = 80;
        document.addEventListener("churning", typeWriter())
        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("churning").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }

      await setTimeout(() => {
        form.submit()
      }, 2000)
      // continue submit
    })
  });
}

// Initializing fullpage.js
document.addEventListener('turbolinks:load', () => {
  const fullPageInstance = new fullpage('#fullpage', {
      navigation: true,
      sectionsColor:['#F6F6F6', '#171924', '#F6F6F6', '#171924', '#F6F6F6', '#171924']
  });
  initSubmitLoader()
})
