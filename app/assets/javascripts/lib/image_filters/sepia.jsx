(function LibImageFiltersSepiaModule() {
  const sepia = (imageData, newImageData, options) => {
    const data = imageData.data,
          tmpData = newImageData.data,
          multiplier = options.multiplier || 1;

    for(let i = 0; i < data.length; i += 4) {
			let r = data[i];
			let g = data[i + 1];
			let b = data[i + 2];
			r = ((r * 0.393) + (g * 0.769) + (b * 0.189)) / multiplier;
			g = ((r * 0.349) + (g * 0.686) + (b * 0.168)) / multiplier;
			b = ((r * 0.272) + (g * 0.534) + (b * 0.131)) / multiplier;
			tmpData[i] = (r > 255) ? 255 : r ;
			tmpData[i + 1] = (g > 255) ? 255 : g ;
			tmpData[i + 2] = (b > 255) ? 255 : b ;
		}
  }

  Lib.ImageFilter.sepia = sepia;
})();
