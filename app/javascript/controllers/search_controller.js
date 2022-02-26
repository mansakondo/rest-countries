import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  static targets = [ "input" ]

  connect() {
    console.log(this.element);
  }

  display_results() {
    this.element.requestSubmit()
  }
}
