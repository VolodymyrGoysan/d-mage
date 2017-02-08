(function LibImageFiltersSobelModule() {
  const sobel = (imgData, tmpImgData, options) => {
    const multiplier = options.multiplier,
          matrix_v = [-1, 0, 1, -2, 0, 2, -1, 0, 1].map((v) => v * multiplier),
          matrix_h = [-1, -2, -1, 0, 0, 0, 1, 2, 1].map((v) => v * multiplier),
          data = imgData.data,
          tmpData = tmpImgData.data,
          vertical = Lib.ImageFilter.convolveFloat32(imgData, tmpImgData,
                        { weightsMatrix: matrix_v }),
          horizontal = Lib.ImageFilter.convolveFloat32(imgData, tmpImgData,
                        { weightsMatrix: matrix_h });

    for (var i=0; i<tmpData.length; i+=4) {
      var v = Math.abs(vertical.data[i]);
      var h = Math.abs(horizontal.data[i]);
      tmpData[i] = v;
      tmpData[i+1] = h;
      tmpData[i+2] = (v+h)/4;
      tmpData[i+3] = 255;
    }

    Lib.ImageFilter.grayScale(tmpImgData, tmpImgData)
  };

  Lib.ImageFilter.sobel = sobel;
})();
