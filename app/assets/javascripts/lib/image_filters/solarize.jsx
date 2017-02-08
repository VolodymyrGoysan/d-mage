(function LibImageFiltersSolarizeModule() {
  const solarize = (imageData, tmpImageData, options) => {
    const threshold = options.threshold || 0,
          data = imageData.data,
          tmpData = tmpImageData.data;

		for(let i = 0; i < data.length; i += 4) {
      const r = data[i],
            g = data[i + 1],
            b = data[i + 2];

			const intensity = (r + g + b)/3;

			if(threshold > intensity) {
				tmpData[i] = 255 - r;
				tmpData[i + 1] = 255 - g;
				tmpData[i + 2] = 255 - b;
			} else {
        tmpData[i] = r;
				tmpData[i + 1] = g;
				tmpData[i + 2] = b;
      }
		};

    return tmpImageData;
  }

  Lib.ImageFilter.solarize = solarize;
})();
