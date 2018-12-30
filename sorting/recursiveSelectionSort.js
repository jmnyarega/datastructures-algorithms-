// stored contents of sorted array
sortedArray = []

/**
* selectionSort ->  goes through each element in an array to determine the least items and adds it to the new array
* @param {arr} arr unsorted array input
* @return {sortedArray} sorted array
*/
function selectionSort(arr) {
  const array = arr
  if(array.length != 0) {
    const lestItem = Math.min(...array)
    sortedArray.push(lestItem)
    const Index = array.indexOf(lestItem)
    const funArray = array.filter((item, index) => Index !== index )
    selectionSort(funArray)
  }
  return sortedArray
}

console.log(selectionSort([5, 4, 1, 8, 7, 2, 6, 3, 0, 10])) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 10
