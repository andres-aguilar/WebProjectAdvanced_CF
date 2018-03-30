import Slider from './slider';
import elements from './elements';

let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderText = document.querySelector("#slider-text");
let sliderImage = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let rigthArrow = document.querySelector(".rigth-arrow");
let leftArrow = document.querySelector(".left-arrow");

let slider = new Slider({
  elements,
  animationFn: function(element) {
    textContent.classList.add("hide");
    sliderImage.classList.add("hide");

    setTimeout(function() {
      sliderTitle.innerHTML = element.title;
      sliderSubTitle.innerHTML = element.subtitle;
      sliderText.innerHTML = element.text;
      sliderImage.src = element.image;

      textContent.classList.remove("hide");
      sliderImage.classList.remove("hide");
    }, 600);
  },
  speed: 5000
});

slider.play();

// Slider navigation
rigthArrow.addEventListener('click', slider.next);
leftArrow.addEventListener('click', slider.prev);
