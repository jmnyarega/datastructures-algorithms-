/**
* Binary Search
*
*/

function binarySearch(data, search) {
  let sortedData = data.sort()
  let lowIndex = 0
  let highIndex = sortedData.length - 1
  while(lowIndex <= highIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2)
    if(sortedData[midIndex] === search) {
      return midIndex
    } else if (sortedData[midIndex] < search) {
      lowIndex = midIndex + 1
    } else {
      highIndex = midIndex - 1
    }
  } return -1
}


// Read and understand this shiiiit  🧜‍♂️

