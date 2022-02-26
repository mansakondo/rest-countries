import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  static targets = [ "input" ]

  connect() {
    console.log(this.element);
  }

  displayResults() {
    this.element.requestSubmit()
  }
}
