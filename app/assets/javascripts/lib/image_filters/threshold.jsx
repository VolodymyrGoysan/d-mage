(function LibImageFiltersThresholdModule() {
  const threshold = (imageData, newImageData, options) => {
    const data = imageData.data,
          newData = newImageData.data,
          threshold = options.threshold || 0,
          high = options.high || 255,
          low = options.low || 0;

    for (let i = 0; i < data.length; i += 4) {
      const r = 0.2126 * data[i],
            g = 0.7152 * data[i + 1],
            b = 0.0722 * data[i + 2],
            v = (r + g + b >= threshold) ? high : low;

      newData[i] = newData[i + 1] = newData[i + 2] = v;
    }
  }

  Lib.ImageFilter.threshold = threshold;
})();
