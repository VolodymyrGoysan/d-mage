(function LibImageFiltersHighlightModule() {
  const highlight = (imageData, newImageData, options) => {
    const data = imageData.data,
          newData = newImageData.data,
          high = options.high || 255,
          low = options.low || 0;

    for (let i = 0; i < data.length; i += 4) {
      if (data[i] <= low) {
        newData[i] = data[i] * (1 - low / 255);
        newData[i + 1] = data[i + 1] * (1 - low / 255);
        newData[i + 2] = data[i + 2];
      } else if (data[i] >= high) {
        newData[i] = data[i];
        newData[i + 1] = data[i + 1] * high / 255;
        newData[i + 2] = data[i + 2] * high / 255;
      } else {
        newData[i] = data[i];
        newData[i + 1] = data[i + 1];
        newData[i + 2] = data[i + 2];
      }
    }
  }

  Lib.ImageFilter.highlight = highlight;
})();
