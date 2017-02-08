(function LibImageFilltersHorizontalFlipModule() {
  const horizontalFlip = (imageData, newImageData) => {
    const data = imageData.data,
          newData = newImageData.data,
          width = imageData.width,
          height = imageData.height;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const offset = (y * width + x) * 4,
              newOffset = (y * width + (width - x - 1)) * 4;

        newData[newOffset] = data[offset];
        newData[newOffset + 1] = data[offset + 1];
        newData[newOffset + 2] = data[offset + 2];
        newData[newOffset + 3] = data[offset + 3];
      }
    }
  }

  Lib.ImageFilter.horizontalFlip = horizontalFlip;
})();
