import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name"];
  //   connect() {
  //     console.log("Hello , Stimulus!", this.element);
  //   }
  //   greet() {
  //     const element = this.nameTarget
  //     const name = element.value
  //     console.log(`Hello ${name}`);
  //   }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  get name() {
    return this.nameTarget.value;
  }
}
