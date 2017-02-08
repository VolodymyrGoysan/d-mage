(function LibImageFiltersSeparableConvolveModule() {
  const separableConvolve = (imageData, tmpImageData, options) => {
    const horizWeights = options.horizWeights || [1,1,1,1,1,1,1,1,1],
          vertWeights = options.vertWeights || [1,1,1,1,1,1,1,1,1];

    return Lib.ImageFilter.horizontalConvolve(
      Lib.ImageFilter.verticalConvolve(imageData, tmpImageData, { weightsVector: vertWeights }),
      tmpImageData, { weightsVector: horizWeights }
    );
  };

  Lib.ImageFilter.separableConvolve = separableConvolve;
})();
