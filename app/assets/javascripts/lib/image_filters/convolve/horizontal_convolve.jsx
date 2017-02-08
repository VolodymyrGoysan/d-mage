(function LibImageFiltersHorizontalConvolveModule() {
  const horizontalConvolve = (imageData, tmpImageData, options) => {
    const weightsVector = options.weightsVector || [1,1,1]
    const wvSide = weightsVector.length;
    const halfSide = Math.floor(wvSide/2);

    const data = imageData.data;
    const tmpData = tmpImageData.data;
    const width = imageData.width;
    const height = imageData.height;

    for (let y=0; y<height; y++) {
      for (let x=0; x<width; x++) {
        const yy = y;
        const xx = x;
        const tmpOff = (y*width+x)*4;
        let r=0, g=0, b=0;
        for (let i=0; i<wvSide; i++) {
          const ix = Math.min(width-1, Math.max(0, xx + i - halfSide));
          const iy = yy;
          const off = (iy*width+ix)*4;
          const w = weightsVector[i];
          r += data[off] * w;
          g += data[off+1] * w;
          b += data[off+2] * w;
        }
        tmpData[tmpOff] = r;
        tmpData[tmpOff+1] = g;
        tmpData[tmpOff+2] = b;
        tmpData[tmpOff+3] = 255;
      }
    }

    return tmpImageData;
  };

  Lib.ImageFilter.horizontalConvolve = horizontalConvolve;
})();
