(function LibImageFiltersBrightnessModule() {
  const brightness = (imageData, tmpImageData, options) => {
    const tmpData = tmpImageData.data,
          data = imageData.data,
          adjust = options.adjust || 0;

    for (let i = 0; i < data.length; i += 4) {
      tmpData[i] = data[i] + adjust;
      tmpData[i + 1] = data[i + 1] + adjust;
      tmpData[i + 2] = data[i + 2] + adjust;
    }
  };

  Lib.ImageFilter.brightness = brightness;
})();
