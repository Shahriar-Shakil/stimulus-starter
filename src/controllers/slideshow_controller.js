import { Controller } from "@hotwired/stimulus";

// export default class extends Controller {
//   static targets = ["slide"];
//   static values = { index: Number };

//   connect() {}
//   initialize() {
//     this.index = 0;
//     this.showCurrentSlide();
//     console.log(this.indexValue);
//     console.log(typeof this.indexValue);
//   }
//   next() {
//     if (this.index <= this.slideTargets.length) {
//       this.index++;
//       this.showCurrentSlide();
//     }
//   }
//   prev() {
//     if (this.index >= 0) {
//       this.index--;
//       this.showCurrentSlide();
//     }
//   }
//   showCurrentSlide() {
//     this.slideTargets.forEach((element, index) => {
//       element.hidden = index !== this.index;
//     });
//   }
// }
export default class extends Controller {
  static targets = ["slide"];
  static values = { index: { type: Number, default: 1 } };

  initialize() {
    console.log(this.indexValue);
  }
  next() {
    this.indexValue++;
  }

  prev() {
    this.indexValue--;
    console.log("working");
  }

  indexValueChanged() {
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue;
    });
  }
}
