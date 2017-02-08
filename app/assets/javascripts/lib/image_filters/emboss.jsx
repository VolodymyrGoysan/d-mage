(function LibImageFiltersEmbossModule() {
  const emboss = (imageData, newImageData, options) => {

    const amount = options.amount || 150;
    const array = [-18, -9, 9, -9, 100 - amount, 9, 0, 9, 18];
		const sum = array.reduce((a, b) => a + b);

		for (let i = 0; i < array.length; ++i) {
			array[i] /= sum;
    }

    Lib.ImageFilter.convolve(imageData, newImageData, { weightsMatrix: array, opaque: true });
  };

  Lib.ImageFilter.emboss = emboss;
})();
