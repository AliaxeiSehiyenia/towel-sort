module.exports = function towelSort(matrix) {
  if (matrix) {
    matrix.forEach(Sort);
    return matrix.flat();
    /* Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов 
    были рекурсивно "подняты" на указанный уровень depth. */
  } else return [];
};

function Sort(elementArr, index) {
    /* Пузырьковая сортировка. 
    Для реализации такой концепции нам нужны два указателя (два вложенных цикла). 
    Каждый раз, когда мы выполняем итерацию, верхняя граница уменьшается на единицу, 
    поскольку мы знаем, что этот элемент уже содержит отсортированное значение. */
  if (index % 2 == 1) { // Элементы с нечётным индексом сортируются по убыванию.
    for (let i = 0; i < elementArr.length - 1; i++) {
      for (let j = 0; j < elementArr.length - 1 - i; j++) {
        if (elementArr[j + 1] > elementArr[j]) {
          let t = elementArr[j + 1];
          elementArr[j + 1] = elementArr[j];
          elementArr[j] = t;
        }
      }
    }
  } else { // Элементы с чётным индексом сортируются по возростанию.
    for (let i = 0; i < elementArr.length - 1; i++) {
      for (let j = 0; j < elementArr.length - 1 - i; j++) {
        if (elementArr[j + 1] < elementArr[j]) {
          let t = elementArr[j + 1];
          elementArr[j + 1] = elementArr[j];
          elementArr[j] = t;
        }
      }
    }
  }
  return elementArr;
}
