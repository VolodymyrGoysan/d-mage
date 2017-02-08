(function LimImageFiltersGrayScaleModule() {
  const grayScale = (imageData, newImageData) => {
    const data = imageData.data,
          newData = newImageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = 0.2126 * data[i],
            g = 0.7152 * data[i + 1],
            b = 0.0722 * data[i + 2];

      newData[i] = newData[i + 1] = newData[i + 2] = r + g + b;
    }
  }

  Lib.ImageFilter.grayScale = grayScale;
})();
