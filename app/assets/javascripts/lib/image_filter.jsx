(function LibImageFilterModule(){
  class ImageFilter {
    static filterImage (filterName, imageData, tmpImageData, filterOptions = {}) {
      return ImageFilter[filterName](imageData, tmpImageData, filterOptions);
    }
  }

  Lib.ImageFilter = ImageFilter;
})();
