(function LibImageFiltersContrastModule() {
  const contrast = (imageData, newImageData, options) => {
    const data = imageData.data,
          tmpData = newImageData.data;

    let amount = options.amount || 2;

    if(amount < -100)
      amount = -100 ;
		else if(amount > 100)
			amount = 100 ;

		for(let i = 0; i < data.length; i += 4) {
			let r = data[i];
			let g = data[i + 1];
			let b = data[i + 2];
			r = ((((r / 255) - 0.5) * amount) + 0.5) * 255 ;
			g = ((((g / 255) - 0.5) * amount) + 0.5) * 255 ;
			b = ((((b / 255) - 0.5) * amount) + 0.5) * 255 ;
			if(r < 0)
				r = 0 ;
			else if(r > 255)
				r = 255 ;
			if(g < 0)
				g = 0 ;
			else if(g > 255)
				g = 255 ;
			if(b < 0)
				b = 0 ;
			else if(b > 255)
				b = 255 ;
			tmpData[i] = r ;
			tmpData[i + 1] = g ;
			tmpData[i + 2] = b ;
		}
  }

  Lib.ImageFilter.contrast = contrast;
})();
