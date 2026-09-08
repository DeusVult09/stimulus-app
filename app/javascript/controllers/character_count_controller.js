import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "counter", "warning" ]


  count() {
    const length = this.inputTarget.value.length
    this.counterTarget.textContent = length
    if (length >= 90 && length < 100) {
        this.warningTarget.textContent = "You are close to the limit!"
    } else if (length >= 100 ) {
        this.warningTarget.textContent = "Your post should be less than 100 characters!"
        
    } else {
        this.warningTarget.textContent = ""
    }
  }
}