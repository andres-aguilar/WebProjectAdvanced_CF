export default class Preloader {
  static preloadImages({images, completed}) {
    const promises = images.map(imagePath => Preloader.preloadImage({imagePath}));

    Promise.all(promises).then(completed);
  }

  static preloadImage({imagePath}) {
    return new Promise(function(resolve, reject) {
      let image = new Image();
      image.src = imagePath;
      image.onload = resolve
    });
  }
}
