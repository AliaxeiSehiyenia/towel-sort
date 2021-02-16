module.exports = function towelSort(matrix) {
  if (matrix) {
    function Sort(ElementArr, index) {
      var n = ElementArr.length;
      if (index % 2 == 1) {
        for (var i = 0; i < n - 1; i++) {
          for (var j = 0; j < n - 1 - i; j++) {
            if (ElementArr[j + 1] > ElementArr[j]) {
              var t = ElementArr[j + 1];
              ElementArr[j + 1] = ElementArr[j];
              ElementArr[j] = t;
            }
          }
        }
      } else {
        for (var i = 0; i < n - 1; i++) {
          for (var j = 0; j < n - 1 - i; j++) {
            if (ElementArr[j + 1] < ElementArr[j]) {
              var t = ElementArr[j + 1];
              ElementArr[j + 1] = ElementArr[j];
              ElementArr[j] = t;
            }
          }
        }
      }

      return ElementArr;
    }

    matrix.forEach(Sort);
    return matrix.flat();
  } else {
    return new Array();
  }
};
