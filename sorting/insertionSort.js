/**
  * The Insertion Sort -> It always maintains a sorted sublist in the lower positions of the list
  * @param {data} data to be sorted
 */
function insertionSort(arr) {
  let unsortedArray = arr
  let sortedArray = arr
  for (let i = 0; i < unsortedArray.length; i++) {
    let key = unsortedArray[i]
    let j = i-1
    while( j >= 0 && key < unsortedArray[j] ) {
      sortedArray[j+1] = unsortedArray[j]
      j -= 1
    }
    sortedArray[j+1] = key
  }
  return sortedArray
}

console.log(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]));
