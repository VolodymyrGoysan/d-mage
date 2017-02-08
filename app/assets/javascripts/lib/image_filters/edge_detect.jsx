(function LibImageFiltersEdgeDetectModule() {
  const edgeDetect = (imageData, newImageData, options) => {
    const multiplier = options.multiplier,
          matrix = [ -1, -1, -1, -1, 8, -1, -1, -1, -1 ].map((v) => v * multiplier);

    Lib.ImageFilter.convolve(imageData, newImageData,
      { weightsMatrix: matrix, opaque: true }
    );
  };



  Lib.ImageFilter.edgeDetect = edgeDetect;
})();
