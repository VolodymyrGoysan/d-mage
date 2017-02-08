(function LibImageFiltersLaplaceModule() {

  const laplace = (imgData, tmpImgData, options) => {
    const multiplier = options.multiplier,
          laplaceKernel = new Float32Array(
            [ -1, -1, -1, -1, -1,
              -1, -1, -2, -1, -1,
              -1, -2, 24, -2, -1,
              -1, -1, -2, -1, -1,
              -1, -1, -1, -1, -1].map((v) => v * multiplier));

    Lib.ImageFilter.convolve(imgData, tmpImgData, { weightsMatrix: laplaceKernel });
  };

  Lib.ImageFilter.laplace = laplace;
})();
