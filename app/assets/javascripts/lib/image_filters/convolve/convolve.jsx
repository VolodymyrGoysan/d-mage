(function LibImageFiltersConvolveModule() {
  const convolve = (imageData, tmpImageData, options) => {
    const opaque = options.opaque || 1,
          multiplier = options.multiplier || 1,
          weightsMatrix = options.weightsMatrix.map((v) => v * multiplier) || [0,0,0,0,-1,0,0,0,0],
          wmSide = Math.round(Math.sqrt(weightsMatrix.length)),
          halfSide = Math.floor(wmSide/2),
          data = imageData.data,
          tmpData = tmpImageData.data,
          width = imageData.width,
          height = imageData.height,
          alphaFac = opaque ? 1 : 0;

    for (let y=0; y<height; y++) {
      for (let x=0; x<width; x++) {
        const yy = y;
        const xx = x;
        const tmpOff = (y*width+x)*4;
        let r = 0, g = 0, b = 0, a = 0;
        for (let i = 0; i < wmSide; i++) {
          for (let j = 0; j < wmSide; j++) {
            let ijy = yy + i ;
            let ijx = xx + j ;
            if (ijy >= 0 && ijy < height && ijx >= 0 && ijx < width) {
              const off = (ijy*width + ijx)*4;
              const w = weightsMatrix[i*wmSide + j];
              r += data[off] * w;
              g += data[off + 1] * w;
              b += data[off + 2] * w;
              a += data[off + 3] * w;
            }
          }
        }
        tmpData[tmpOff] = r;
        tmpData[tmpOff + 1] = g;
        tmpData[tmpOff + 2] = b;
        tmpData[tmpOff + 3] = a + alphaFac*(255-a);
      }
		}

    return tmpImageData;
  };

  Lib.ImageFilter.convolve = convolve;
})();
