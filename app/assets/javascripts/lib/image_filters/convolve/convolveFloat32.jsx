(function LibImageFiltersConvolveFloat32Module() {
  const convolveFloat32 = (imageData, tmpImageData, options) => {
    const weightsMatrix = options.weightsMatrix || [1,1,1,1,1,1,1,1,1]
    const wmSide = Math.round(Math.sqrt(weightsMatrix.length));
    const halfSide = Math.floor(wmSide/2);
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
        for (let i=0; i<wmSide; i++) {
          for (let j=0; j<wmSide; j++) {
            const ijy = Math.min(height-1, Math.max(0, yy + i - halfSide));
            const ijx = Math.min(width-1, Math.max(0, xx + j - halfSide));
            const off = (ijy*width+ijx)*4;
            const w = weightsMatrix[i*wmSide+j];
            r += data[off] * w;
            g += data[off+1] * w;
            b += data[off+2] * w;
          }
        }
        tmpData[tmpOff] = r;
        tmpData[tmpOff+1] = g;
        tmpData[tmpOff+2] = b;
        tmpData[tmpOff+3] = 255;
      }
    }
    return tmpImageData;
  };

  Lib.ImageFilter.convolveFloat32 = convolveFloat32;
})();
