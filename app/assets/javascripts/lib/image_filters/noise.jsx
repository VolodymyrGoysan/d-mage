(function LibImageFiltersNoiseModule() {
  const noise = (imageData, newImageData, options) => {
    const data = imageData.data,
          newData = newImageData.data,
          upper = options.upper || 30,
          lower = options.lower || -30,
          level = options.level || 100,
          radius = upper - lower;

    for (let i = 0; i < data.length; i += 4) {
      if (Math.floor(Math.random() * 100) > (100 - level)) {
        mod = Math.floor((Math.random() * radius) - upper);
        newData[i] = data[i] + mod;
        newData[i + 1] = data[i + 1] + mod;
        newData[i + 2] = data[i + 2] + mod;
      }
    }
  }

  Lib.ImageFilter.noise = noise;
})();
