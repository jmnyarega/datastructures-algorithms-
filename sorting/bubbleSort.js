/**
  * Implements bubble sort algorithm
  * compares adjacent items and exchanges those that are out of order.
  * @param {data} data to be sorted
  *
 */
function bubbleSort(data) {
  const arr = data;
  const len = arr.length;
  let output = '';
  for (let i = len - 1; i >= 0; i -= 1) {
    for (let j = 1; j <= i; j += 1) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
    output += `\nPass ${len - i} -> ${arr}`;
  }
  return output;
}

bubbleSort([9, 7, 5, 4, 3, 1]); // [1, 2, 3, 4, 5, 6]
