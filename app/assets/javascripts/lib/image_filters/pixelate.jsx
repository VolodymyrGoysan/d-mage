(function LibImageFiltersPixelateModule() {

  const pixelate = (imageData, tmpImageData, options) => {
    const tmpData = tmpImageData.data,
          data = imageData.data,
          radius = options.radius || 1,
      		width = imageData.width,
      		height = imageData.height,
      		delta = 2 * radius;

		for(let y = radius; y < height - radius; y += delta) {
			for(let x = radius; x < width - radius; x += delta) {
				for(let ny = -radius; ny < radius; ++ny) {
					for(let nx = -radius; nx < radius; ++nx) {
						tmpData[(width * (y + ny) + x + nx) * 4] = data[(width * y + x) * 4];
						tmpData[(width * (y + ny) + x + nx) * 4 + 1] = data[(width * y + x) * 4 + 1];
						tmpData[(width * (y + ny) + x + nx) * 4 + 2] = data[(width * y + x) * 4 + 2];
					}
				}
			}
		}
  };

  Lib.ImageFilter.pixelate = pixelate;
})();
