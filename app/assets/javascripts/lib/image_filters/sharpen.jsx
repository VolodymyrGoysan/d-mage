(function LibImageFiltersSharpenModule() {
  const sharpen = (imageData, newImageData, options) => {
    const weights = [0, -1, 0, -1, 5, -1, 0, -1, 0],
        katet = Math.round(Math.sqrt(weights.length)),
        half = (katet * 0.5) | 0,
        amount = options.amount || 2,
        height = imageData.height,
        width = imageData.width,
        tmpData = newImageData.data,
        data = imageData.data;

    let y = height;
    while (y--) {
      let x = width;
      while (x--) {
        let sy = y, sx = x, r = 0, g = 0, b = 0, a = 0,
            tmpOff = (y * width + x) * 4;

        for (let cy = 0; cy < katet; cy++) {
          for (let cx = 0; cx < katet; cx++) {
            let scy = sy + cy - half;
            let scx = sx + cx - half;

            if (scy >= 0 && scy < height && scx >= 0 && scx < width) {
              const dataOff = (scy * width + scx) * 4;
              const wt = weights[cy * katet + cx];

              r += data[dataOff] * wt;
              g += data[dataOff + 1] * wt;
              b += data[dataOff + 2] * wt;
              a += data[dataOff + 3] * wt;
            }
          }
        }

        tmpData[tmpOff] = r * amount + data[tmpOff] * (1 - amount);
        tmpData[tmpOff + 1] = g * amount + data[tmpOff + 1] * (1 - amount);
        tmpData[tmpOff + 2] = b * amount + data[tmpOff + 2] * (1 - amount)
        tmpData[tmpOff + 3] = data[tmpOff + 3];
      }
    }

    return newImageData;
  };

  Lib.ImageFilter.sharpen = sharpen;
})();
