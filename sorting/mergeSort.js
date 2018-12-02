/**
* merge ->  compare the arrays item by item and return the concatenated result
* @param {left} left left half of the list
* @param {right} right right half of the list
* @return {mergingResult} sorted array
*/
function merge(left, right) {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft += 1;
    } else {
      result.push(right[indexRight]);
      indexRight += 1;
    }
  }
  const mergingResult = result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  console.log('merging ', mergingResult);
  return mergingResult;
}

/**
* merge sort ->   Split the array into halves and merge them recursively
* @param {data} data data to be sorted
* @param {right} right right half of the list
* @return {func} merge function called recursively
*/
function mergeSort(data) {
  console.log('Splitting ', data);
  if (data.length === 1) {
    return data;
  }

  const middle = Math.floor(data.length / 2);
  const left = data.slice(0, middle);
  const right = data.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
}


const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
