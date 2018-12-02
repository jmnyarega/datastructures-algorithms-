/**
* Binary Search
* @param {data} data to be searched on
* @param {search} search value to search
*/
function binarySearch(data, search) {
  const sortedData = data.sort();
  let lowIndex = 0;
  let highIndex = sortedData.length - 1;
  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (sortedData[midIndex] === search) {
      return midIndex;
    } else if (sortedData[midIndex] < search) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  } return -1;
}

// driver

const search = binarySearch([1, 5, 3, 2, 3, 9], 9); // 5

// caveat
const search2 = binarySearch([1, 5, 3, 2, 3, 19], 19); // 19 -> This is javascript based error. happening when sorting via sorting function. It is an algorithm error
