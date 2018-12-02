/**
* selection sort -> The selection sort improves on the bubble sort by making only one exchange
* for every passthrough the list. In order to do this, a selection sort looks for the largest
* value as it makes a pass and, after completing the pass, places it in the proper location
* @param {data} data to be sorted
* @return {output} sorted data
*/
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
