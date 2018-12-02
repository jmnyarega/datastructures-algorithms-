
function selectionSort(data) {
  const arr = data;
  let minIdx;
  let temp;
  const len = arr.length;
  let output = '';
  for (let i = 0; i < len; i += 1) {
    minIdx = i;
    for (let j = i + 1; j < len; j += 1) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    output += `\n Pass ${i} -> ${arr}`;
  }
  return output;
}

console.log(selectionSort([9, 7, 5, 4, 3, 1]));
