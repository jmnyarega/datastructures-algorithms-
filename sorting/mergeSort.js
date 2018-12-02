// compare the arrays item by item and return the concatenated result
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

// Split the array into halves and merge them recursively
function mergeSort(arr) {
  console.log('Splitting ', arr);
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
}


const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
