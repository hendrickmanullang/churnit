import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
static targets = ["carousel", "field"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  getcardid() {
    const id = this.carouselTarget.querySelector(".carousel-item.active .card-carousel-selector-id").innerText
    this.fieldTarget.value = id
    console.log(id)
  }
}
