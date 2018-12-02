/**
* Linear search -> search through each item one at a time
*
* @param {data} data to be searched on
* @param {search} search value to search
*/
function linearSearch(data, search) {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] === search) {
      return i;
    }
  } return -1;
}
