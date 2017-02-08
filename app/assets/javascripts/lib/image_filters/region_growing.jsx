(function LibImageFiltersRegionGrowingModule() {
  const regionGrowing = (imageData, tmpImageData, options) => {
    const tmpData = tmpImageData.data,
          data = imageData.data,
          width = imageData.width,
          height = imageData.height,
          threshold = options.threshold || 15,
          startPoint = options.startPoint || [100, 100],
          type = options.type || 2;

    let pixels255 = [],
        region = [];

    // transform to 65k
    for (let i = 0; i < data.length; i+=4) {
      pixels255.push(new Array(data[i], 0));
    }

    // seed
    region.push(new Array(startPoint[0],startPoint[1],0));
    // // growe
    // for (let x in region) {
    //   if (region.length > 10000) {
    //     console.log('> 10000');
    //     return;
    //   } else if (region[x][0][0] > 0 && region[x][0][1] > 0 && region[x][0][0] < 255 && region[x][0][1] < 255) {
    //     setTimeout(detectRegions(region, pixels255, width, threshold, startPoint[0], startPoint[0]), 0);
    //   } else {
    //     detectRegions(region, pixels255, width, threshold, startPoint[0], startPoint[0]);
    //   }
    // }
    detectRegions(region, pixels255, width, threshold, startPoint[0], startPoint[0]);

    if (type == 1) {
      // draw border on 65k
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          if (pixels255[i + j * width][1] == 1) {
            const sum = pixels255[i - 1 + j * width][1] + pixels255[i + 1 + j * width][1] +
                      pixels255[i + (j - 1) * width][1] + pixels255[i + (j + 1) * width][1] +
                      pixels255[i + 1 + (j + 1) * width][1] + pixels255[i + 1 + (j - 1) * width][1] +
                      pixels255[i - 1 + (j + 1) * width][1] + pixels255[i - 1 + (j - 1) * width][1];

            (sum < 8) ? pixels255[i + j * width][0] = 255 : pixels255[i + j * width][0] = pixels255[i + j * width][0];
          }
        }
      }
    } else if (type == 2) {
      // draw region on 65k
      for (let p in pixels255) {
        (pixels255[p][1] == 1) ? pixels255[p][0] = 255 : pixels255[p][0] = pixels255[p][0];
      }
    }

    // transform back to 65k * 4
    for (let i = 0; i < pixels255.length; i++) {
      tmpData[i * 4] = pixels255[i][0];
      tmpData[i * 4 + 1] = pixels255[i][0];
      tmpData[i * 4 + 2] = pixels255[i][0];
      tmpData[i * 4 + 3] = 255;
    }
  };

  // recursive growing function
  const detectRegions = (region, pixels255, width, threshold, i, j) => {
    const diapason = threshold;

    let height = width;
    if (i > 0 && j > 0 && i < width && j < height) {
      if (Math.abs(pixels255[i + j * width][0] - pixels255[i + 1 + j * width][0]) < diapason
        && pixels255[i + 1 + j * width][1] != 1) {
          pixels255[i + 1 + j * width][1] = 1;
          region.push(new Array(i + 1, j, 0));
          detectRegions(region, pixels255, width, threshold, i + 1, j);
      }
      if (Math.abs(pixels255[i + j * width][0] - pixels255[i - 1 + j * width][0]) < diapason
        && pixels255[i - 1 + j * width][1] != 1) {
          pixels255[i - 1 + j * width][1] = 1;
          region.push(new Array(i - 1, j, 0));
          detectRegions(region, pixels255, width, threshold, i - 1, j);
      }
      if (Math.abs(pixels255[i + j * width][0] - pixels255[i + (j - 1) * width][0]) < diapason
        && pixels255[i + (j - 1) * width][1] != 1) {
          pixels255[i + (j - 1) * width][1] = 1;
          region.push(new Array(i, j - 1, 0));
          detectRegions(region, pixels255, width, threshold, i, j - 1);
      }
      if (Math.abs(pixels255[i + j * width][0] - pixels255[i + (j + 1) * width][0]) < diapason
        && pixels255[i + (j + 1) * width][1] != 1) {
          pixels255[i + (j + 1) * width][1] = 1;
          region.push(new Array(i, j + 1, 0));
          detectRegions(region, pixels255, width, threshold, i, j + 1);
      }
    }
  };

  Lib.ImageFilter.regionGrowing = regionGrowing;
})();
//
// // backup
// (function LibImageFiltersRegionGrowingModule() {
//   const regionGrowing = (imageData, tmpImageData, options) => {
//     const tmpData = tmpImageData.data,
//           data = imageData.data,
//           width = imageData.width,
//           height = imageData.height,
//           threshold = options.threshold || 15,
//           startPoint = options.startPoint || [100, 100],
//           type = options.type || 1;
//
//     let pixels255 = [],
//         region = [];
//
//     // transform to 65k
//     for (let i = 0; i < data.length; i+=4) {
//       pixels255.push(new Array(data[i], 0));
//     }
//
//     // seed
//     region.push(new Array(startPoint[0],startPoint[1],0));
//     // growe
//     detectRegions(region, pixels255, width, threshold);
//
//     if (type == 1) {
//       // draw border on 65k
//       for (let i = 0; i < width; i++) {
//         for (let j = 0; j < height; j++) {
//           if (pixels255[i + j * width][1] == 1) {
//             const sum = pixels255[i - 1 + j * width][1] + pixels255[i + 1 + j * width][1] +
//                       pixels255[i + (j - 1) * width][1] + pixels255[i + (j + 1) * width][1] +
//                       pixels255[i + 1 + (j + 1) * width][1] + pixels255[i + 1 + (j - 1) * width][1] +
//                       pixels255[i - 1 + (j + 1) * width][1] + pixels255[i - 1 + (j - 1) * width][1];
//
//             (sum < 8) ? pixels255[i + j * width][0] = 255 : pixels255[i + j * width][0] = pixels255[i + j * width][0];
//           }
//         }
//       }
//     } else if (type == 2) {
//       // draw region on 65k
//       for (let p in pixels255) {
//         (pixels255[p][1] == 1) ? pixels255[p][0] = 255 : pixels255[p][0] = pixels255[p][0];
//       }
//     }
//
//     // transform back to 65k * 4
//     for (let i = 0; i < pixels255.length; i++) {
//       tmpData[i * 4] = pixels255[i][0];
//       tmpData[i * 4 + 1] = pixels255[i][0];
//       tmpData[i * 4 + 2] = pixels255[i][0];
//       tmpData[i * 4 + 3] = 255;
//     }
//   };
//
//   // recursive growing function
//   const detectRegions = (region, pixels255, width, threshold) => {
//     const diapason = threshold;
//
//     for (let x in region) {
//       const i = region[x][0], j = region[x][1];
//       pixels255[i + j * width][1] = 1;
//
//       if (region[x][2] == 0 && i > 0 && j > 0 && i < 255 && j < 255) {
//         if (Math.abs(pixels255[i + j * width][0] - pixels255[i + 1 + j * width][0]) < diapason
//           && pixels255[i + 1 + j * width][1] != 1) {
//             pixels255[i + 1 + j * width][1] = 1;
//             region.push(new Array(i + 1, j, 0));
//         }
//         if (Math.abs(pixels255[i + j * width][0] - pixels255[i - 1 + j * width][0]) < diapason
//           && pixels255[i - 1 + j * width][1] != 1) {
//             pixels255[i - 1 + j * width][1] = 1;
//             region.push(new Array(i - 1, j, 0));
//         }
//         if (Math.abs(pixels255[i + j * width][0] - pixels255[i + (j - 1) * width][0]) < diapason
//           && pixels255[i + (j - 1) * width][1] != 1) {
//             pixels255[i + (j - 1) * width][1] = 1;
//             region.push(new Array(i, j - 1, 0));
//         }
//         if (Math.abs(pixels255[i + j * width][0] - pixels255[i + (j + 1) * width][0]) < diapason
//           && pixels255[i + (j + 1) * width][1] != 1) {
//             pixels255[i + (j + 1) * width][1] = 1;
//             region.push(new Array(i, j + 1, 0));
//         }
//         region[x][2] = 1;
//         detectRegions(region, pixels255, width, threshold);
//       }
//     }
//   };
//
//   Lib.ImageFilter.regionGrowing = regionGrowing;
// })();
