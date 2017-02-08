(function LibImageFiltersEqualizationModule() {
  const equalization = (imageData, newImageData, options) => {
    const data = imageData.data,
          newData = newImageData.data,
          high = options.high || 255,
          low = options.low || 0,
          range = high - low;

    for (let i = 0; i <= data.length; i += 4) {
      if (data[i] >= high) {
        newData[i] = 255;
      } else if (data[i] <= low) {
        newData[i] = 0;
      } else {
        newData[i] = Math.floor((data[i] - low) * 255 / range);
      }

      if (data[i + 1] >= high) {
        newData[i + 1] = 255;
      } else if (data[i + 1] <= low) {
        newData[i + 1] = 0;
      } else {
        newData[i + 1] = Math.floor((data[i + 1] - low) * 255 / range);
      }

      if (data[i + 2] >= high) {
        newData[i + 2] = 255;
      } else if (data[i + 2] <= low) {
        newData[i + 2] = 0;
      } else {
        newData[i + 2] = Math.floor((data[i + 2] - low) * 255 / range);
      }
    }
  }

  Lib.ImageFilter.equalization = equalization;
})();
