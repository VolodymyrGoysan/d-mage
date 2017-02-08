(function LibImageFiltersHistogramModule() {
  const histogram = (image) => {
    const imgData = image.newImgData || image.imgData;
    const data = imgData.data;

    image.histogram = {
      red: new Int32Array(256),
      green: new Int32Array(256),
      blue: new Int32Array(256)
    }

    for (let i = 0; i < data.length; i += 4) {
      image.histogram.red[data[i]] += 1;
      image.histogram.green[data[i + 1]] += 1;
      image.histogram.blue[data[i + 2]] += 1;
    }
  }

  Lib.ImageFilter.histogram = histogram;
})();
