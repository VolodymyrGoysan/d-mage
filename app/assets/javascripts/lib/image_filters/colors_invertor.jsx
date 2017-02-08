(function LibImageFiltersColorsInvertorModule() {
  const colorsInvertor = (imageData, newImageData) => {
    const data = imageData.data,
          newData = newImageData.data;

    for (let i = 0; i < data.length; i += 4) {
      newData[i] = 255 - data[i];
      newData[i + 1] = 255 - data[i + 1];
      newData[i + 2] = 255 - data[i + 2];
    }
  }

  Lib.ImageFilter.colorsInvertor = colorsInvertor;
})();
