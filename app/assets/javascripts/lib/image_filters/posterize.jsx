(function LibImageFiltersPosterizeModule() {
  const posterize = (imageData, newImageData, options) => {
    const colors = options.colors || 30,
          data = imageData.data,
          tmpData = newImageData.data,
          levels = [] ;

		let level = 1 ;
		for(let i = 0; i < 256; ++i) {
			if( i < (colors * level) )
				levels[i] = colors * (level - 1) ;
			else {
				levels[i] = (colors * level) ;
				++level ;
			}
		}

		for(let i = 0; i < data.length; i += 4) {
			tmpData[i] = levels[data[i]] ;
			tmpData[i + 1] = levels[data[i + 1]] ;
			tmpData[i + 2] = levels[data[i + 2]] ;
		}
  }

  Lib.ImageFilter.posterize = posterize;
})();
