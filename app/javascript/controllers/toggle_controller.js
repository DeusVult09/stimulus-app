import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "list", "visible", "invisible" ]

  toggle() {
    this.listTarget.hidden = !this.listTarget.hidden
  }
  

  switch() {
    this.visibleTarget.hidden = !this.visibleTarget.hidden
    this.invisibleTarget.hidden = !this.invisibleTarget.hidden
  }



}