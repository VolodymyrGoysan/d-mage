(function LibImageFiltersColoredThresholdModule() {
  const coloredThreshold = (imageData, newImageData, options) => {
    const data = imageData.data,
          newData = newImageData.data,
          high = options.high || 255,
          low = options.low || 0;

    for (let i = 0; i < data.length; i += 4) {
      check(data, newData, high, low, i);
      check(data, newData, high, low, i + 1);
      check(data, newData, high, low, i + 2);
    }
  }

  const check = (data, newData, high, low, i) => {
    if (data[i] <= low) {
      newData[i] = 0;
    } else if (data[i] > high) {
      newData[i] = 0;
    } else {
      newData[i] = data[i];
    }
  }

  Lib.ImageFilter.coloredThreshold = coloredThreshold;
})();
