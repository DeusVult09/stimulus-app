import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "counter" ]

  connect() {
    this.count
  }

  count() {
    const length = this.inputTarget.value.length
    this.counterTarget.textContent = length
    if (length = 90) {
        console.log("You are close to the limit");
    } else if (length <= 100 ) {
        console.log("Your post should be less 100 characters")
    } else {
        console.log("Your text shouldn't be empty")
    }
  }
}