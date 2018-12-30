const sort = require('../sorting/mergeSort')

/**
* Binary Search
* @param {data} data to be searched on
* @param {search} search value to search
*/
function binarySearch(data, search) {
  const sortedData = sort(data)
  let lowIndex = 0
  let highIndex = sortedData.length - 1
  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2)
    if (sortedData[midIndex] === search) {
      return midIndex
    } else if (sortedData[midIndex] < search) {
      lowIndex = midIndex + 1
    } else {
      highIndex = midIndex - 1
    }
  }
  return -1
}

// driver

const search = binarySearch([1, 5, 3, 2, 3, 9], 9) // 5
