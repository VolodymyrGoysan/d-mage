(function LibImageFiltersGammaModule() {
  const gamma = (imageData, newImageData, options) => {
    const amount = options.amount || 0.2,
          data = imageData.data,
          tmpData = newImageData.data;

		for(let i = 0; i < data.length; i += 4) {
			tmpData[i] = 255 * Math.pow(data[i] / 255, amount);
			tmpData[i + 1] = 255 * Math.pow(data[i + 1] / 255, amount);
			tmpData[i + 2] = 255 * Math.pow(data[i + 2] / 255, amount);
		}
  }

  Lib.ImageFilter.gamma = gamma;
})();
