import Slider from './slider';

let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderText = document.querySelector("#slider-text");
let sliderImage = document.querySelector("#slider-image");

let slider = new Slider({
  elements: [
    {
      title: 'Lorem ipsum',
      subtitle: 'Plats',
      image: 'https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      title: 'Lorem ipsum',
      subtitle: 'Ipsum',
      image: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      title: 'Lorem ipsum 2',
      subtitle: 'Ipsum 2',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ],
  animationFn: function(element) {
    console.log(element);

    sliderTitle.innerHTML = element.title;
    sliderSubTitle.innerHTML = element.subtitle;
    sliderText.innerHTML = element.text;
    sliderImage.src = element.image;
  },
  speed: 3000
});

slider.play();
