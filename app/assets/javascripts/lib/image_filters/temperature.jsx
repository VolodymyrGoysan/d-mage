(function LibImageFiltersTemperatureModule() {
  const temperature = (imageData, newImageData, options) => {
    const data = imageData.data,
          tmpData = newImageData.data,
          temp = options.temperature || 80;

    for(let i = 0; i < data.length; i += 4) {
			let r = data[i];
			let g = data[i + 1];
			let b = data[i + 2];

      if (temp <= 66) {
        r = 255;
        g = 99.4708025861 * Math.log(temp) - 161.1195681661;
      } else {
        r = 329.698727446 * Math.pow((temp - 60), -0.1332047592);
        g = 288.1221695283 * Math.pow((temp - 60), -0.0755148492);
      }
      if (temp >= 66) {
        b = 255
      } else if (temp <= 19) {
        b = 0
      } else {
        b = 138.5177312231 * Math.log(temp - 10) - 305.0447927307;
      }

      if (r < 0) { r = 0 } else if (r > 255) { r = 255 }
      if (g < 0) { g = 0 } else if (g > 255) { g = 255 }
      if (b < 0) { b = 0 } else if (b > 255) { b = 255 }

			tmpData[i] = r / 255 * data[i];
			tmpData[i + 1] = g / 255 * data[i + 1];
			tmpData[i + 2] = b / 255 * data[i + 2];
		}
  }

  Lib.ImageFilter.temperature = temperature;
})();
