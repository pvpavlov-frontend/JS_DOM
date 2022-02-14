'use strict';

class Slider {
  constructor(slides, currentSlideIndex = 1) {
    this.slides = slides;
    this.currentSlideIndex = currentSlideIndex;
  }

  set currentSlideIndex(v) {
    if (typeof v !== 'number') {
      throw TypeError();
    }
    if (
      Number.isNaN(v) ||
      v < 0 ||
      v > this.slides.length ||
      !Number.isInteger(v)
    ) {
      throw RangeError();
    }
    this._currentSlideIndex = v;
  }

  get currentSlideIndex() {
    return this._currentSlideIndex;
  }

  decSlideIndex() {
    this.currentSlideIndex = this.prevSlideIndex;
  }
  incSlideIndex() {
    this.currentSlideIndex = this.nextSlideIndex
  }


  get prevSlideIndex() {
    return (
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length
    );
  }

  get nextSlideIndex() {
    return (this.currentSlideIndex + 1) % this.slides.length;
  }

  get currentSlidePrev() {
    return this.slides[this.prevSlideIndex]
  }
  get currentSlide() {
    return this.slides[this._currentSlideIndex];
  }
  get currentSlidePrevNext() {
    return this.slides[this.nextSlideIndex];
  }
}