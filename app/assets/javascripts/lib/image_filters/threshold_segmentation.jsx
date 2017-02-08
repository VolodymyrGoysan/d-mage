(function LibImageFiltersThresholdSegmentationModule() {
  const threshold_segmentation = (imageData, tmpImageData, options) => {
    const tmpData = tmpImageData.data,
          data = imageData.data,
          tones = options.tones || 2,
          tonesArray = [0];

    for (let i = 1; i < tones; i++) {
      tonesArray.push(Math.floor(255 / (tones - 1) * i))
    }

    // console.log(tonesArray);

    for (let p = 0; p < data.length; p++) {
      for (let t = 0; t < tonesArray.length; t++) {
        if (data[p] > tonesArray[t] && data[p] < tonesArray[t + 1]) {
          if ((data[p] - tonesArray[t]) > tonesArray[t + 1] - data[p]) {
            tmpData[p] = tonesArray[t + 1];
          } else {
            tmpData[p] = tonesArray[t];
          }
        }
      }
    }
  };

  Lib.ImageFilter.threshold_segmentation = threshold_segmentation;
})();
