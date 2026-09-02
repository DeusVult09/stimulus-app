import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "list" ]

  toggle() {
    this.listTarget.hidden = !this.listTarget.hidden
  }

}