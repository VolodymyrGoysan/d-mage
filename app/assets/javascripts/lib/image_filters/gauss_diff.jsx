(function LibImageFiltersGaussDiffModule() {
  const gaussDiff = (imageData, newImageData, options) => {
    const data = imageData.data,
          tmpData = newImageData.data,
          width = imageData.width,
          height = imageData.height,
          threshold = options.threshold || 200,
          high = options.high || 0.35,
          low = options.low || 0.12;

    let bitmap = new Uint8ClampedArray(data.length / 4);

    // transform data to 65k array
    for (let i = 0; i < data.length; i+=4) {
      bitmap[i/4] = data[i];
    }

    // convert bitmap tobitmap with borders
    conv(bitmap, width, height, threshold, low, high);

    // transform back to 65k * 4
    for (let i = 0; i < bitmap.length; i++) {
      if (bitmap[i] == 255) {
        tmpData[i * 4] = bitmap[i];
        tmpData[i * 4 + 1] = 0;
        tmpData[i * 4 + 2] = 0;
      } else {
        tmpData[i * 4] = data[i * 4];
        tmpData[i * 4 + 1] = data[i * 4 + 1];
        tmpData[i * 4 + 2] = data[i * 4 + 2];
      }
    }
  }

  const conv = (bitmap, width, height, threshold, low, high) => {
    let pix = new Uint8ClampedArray(bitmap);

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        pix[i + j * width] = getConvColor(i, j, bitmap, width, height, low, high);
      }
    }

    return detectBorders(pix, bitmap, width, height, threshold);
  }

  const getConvColor = (x, y, bitmap, width, height, low, high) => {
    let m = 1, color = 0;

    for (let i = -m; i <= m; i++) {
      for (let j = -m; j < m; j++) {
        if ((x - i) >= 0 && (y - j) >= 0 && (x - i) < width && (y - j) < height) {
          color += bitmap[x + (y) * width] * (gaussOp(i, j, low) - gaussOp(i, j, high));
        }
      }
    }
    return color;
  }

  const gaussOp = (x, y, disp) => {
    return 1 / (2 * Math.PI * Math.pow(disp, 2)) * Math.exp(-(x * x + y * y) / (2 * Math.pow(disp, 2)));
  }

  const gaussCondition = (th, i, j, pix, width) => {
    return ((pix[i + j * width] < th && pix[i + (j + 1) * width] > th) ||
            (pix[i + j * width] > th && pix[i + (j + 1) * width] < th) ||
            (pix[i + j * width] < th && pix[i + 1 + j * width] > th) ||
            (pix[i + j * width] > th && pix[i + 1 + j * width] < th));
  }

  const detectBorders = (pix, bitmap, width, height, threshold) => {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        if (gaussCondition(threshold, i, j, pix, width)) {
          bitmap[i + j * width] = 255;
        }
      }
    }
    return bitmap;
  }

  Lib.ImageFilter.gaussDiff = gaussDiff;
})();
