import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static classes = ["supported"];
  connect() {
    if ("clipboard" in navigator) {
      this.element.classList.add(this.supportedClass);
      console.log(this.supportedClass);
    }
  }
  //   copy(event) {
  //     event.preventDefault();
  //     // const elem = this.sourceTarget;
  //     // const value = elem.value;
  //     navigator.clipboard.writeText(this.sourceTarget.value);
  //     console.log(event);
  //   }
  copy() {}
}
