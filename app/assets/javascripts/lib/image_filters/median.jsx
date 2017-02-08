(function LibImageFiltersMedianModule() {
  const median = (imageData, tmpImageData, options) => {
    const tmpData = tmpImageData.data,
          data = imageData.data,
          width = imageData.width,
          height = imageData.height,
          adjust = options.adjust || 0,
          radius = options.radius || 1;

    for (let i = radius * 4; i < width * 4 - radius * 4; i+=4) {
      for (let j = radius * 4; j < height * 4 - radius * 4; j+=4) {

        const mask = [];
        for (let x = i - radius * 4; x < i + radius * 4; x+=4) {
          for (let y = j - radius * 4; y < j + radius * 4; y+=4) {
            mask.push(data[x + y * width]);
          }
        }
        tmpData[i + j * width] = tmpData[i + j * width + 1] =
          tmpData[i + j * width + 2] = middle(mask);
      }
    }
  };

  const middle = (arr) => {
    return arr.sort()[Math.floor(arr.length/2)];
  }

  Lib.ImageFilter.median = median;
})();
//
// (function LibImageFiltersMedianModule() {
//   const median = (imageData, tmpImageData, options) => {
//     const tmpData = tmpImageData.data,
//           data = imageData.data,
//           width = imageData.width,
//           height = imageData.height,
//           adjust = options.adjust || 0,
//           radius = options.radius || 1;
//
//     for (let i = radius * 4; i < width * 4 - radius * 4; i+=4) {
//       for (let j = radius * 4; j < height * 4 - radius * 4; j+=4) {
//
//         const maskRed = [];
//         for (let x = i - radius * 4; x < i + radius * 4; x+=4) {
//           for (let y = j - radius * 4; y < j + radius * 4; y+=4) {
//             maskRed.push(data[x + y * width]);
//           }
//         }
//         tmpData[i + j * width] = data[
//           i + (middleId(maskRed)%(2 * radius + 1) - radius) * 4 +
//             (j + (Math.floor(middleId(maskRed)/(2 * radius + 1)) - radius) * 4 * width)
//         ];
//         tmpData[i + j * width + 1] = data[
//           i + (middleId(maskRed)%(2 * radius + 1) - radius) * 4 +
//             (j + (Math.floor(middleId(maskRed)/(2 * radius + 1)) - radius) * 4 * width) + 1
//         ];
//         tmpData[i + j * width + 2] = data[
//           i + (middleId(maskRed)%(2 * radius + 1) - radius) * 4 +
//             (j + (Math.floor(middleId(maskRed)/(2 * radius + 1)) - radius) * 4 * width) + 2
//         ];
//       }
//     }
//   };
//
//   const middleId = (arr) => {
//     return arr.indexOf(arr.sort()[Math.floor(arr.length/2)]);
//   }
//
//   Lib.ImageFilter.median = median;
// })();
