/**
* merge ->  compare the arrays item by item and return the concatenated result
* @param {left} left left half of the list
* @param {right} right right half of the list
* @return {result} sorted array
*/
function merge(left, right) {
  let result = []
  // checking if all params are non-zeros
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result
}

/**
* merge sort ->   Split the array into halves and merge them recursively
* @param {data} data data to be sorted
* @param {right} right right half of the list
* @return {func} merge function called recursively
*/
function mergeSort(array) {
  // spliting
  if (array.length < 2) return array
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle, array.length)

  // merging and sorting
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
module.exports = mergeSort
