(function LibImageFiltersHistogramSegmentationModule() {
  const histogram_segmentation = (imageData, tmpImageData, options) => {
    const tmpData = tmpImageData.data,
          data = imageData.data,
          tones = options.tones || 2,
          histogram = getHistogram(data),
          firstIndexes = findIndexes(histogram, immutableSortUp(histogram), tones),
          tonesSum = summarizeHistogram(histogram, firstIndexes),
          tonesArray = [];

    for (let x = 0; x < tones; x++) {
      tonesArray.push(histogram.indexOf(histogram[firstIndexes[x]]));
    }

    tonesArray.sort((a, b) => a - b);
    console.log(tonesArray);

    for (let p = 0; p < data.length; p++) {
      for (let t = 0; t < tonesArray.length; t++) {
        if (data[p] > tonesArray[t] && data[p] < tonesArray[t + 1]) {
          if ((data[p] - tonesArray[t]) > tonesArray[t + 1] - data[p]) {
            tmpData[p] = tonesArray[t + 1];
          } else {
            tmpData[p] = tonesArray[t];
          }
        } else if (data[p] < tonesArray[0]) {
          tmpData[p] = tonesArray[0];
        } else if (data[p] > tonesArray[tones-1]){
          tmpData[p] = tonesArray[tones-1];
        }
      }
    }

    return tmpImageData;
  };

  const getHistogram = (data) => {
    let histogram = new Int16Array(256);
    for (let i = 0; i < data.length; i+=4) {
      histogram[data[i]]+=1;
    }
    return histogram;
  }

  const summarizeHistogram = (hist, indexes) => {
    let sum = 0;
    for (let j = 0; j < indexes.length; j++) {
      sum += hist[indexes[j]];
    }
    return sum;
  }

  const immutableSortUp = (arr) => {
    return [...arr].sort((a, b) => b - a);
  }

  const findIndexes = (array, sorted_a, n) => {
    let indexes = [];
    for (let i = 0; i < n; i++) {
      indexes.push(array.indexOf(sorted_a[i]));
    };
    return indexes;
  };

  Lib.ImageFilter.histogram_segmentation = histogram_segmentation;
})();
