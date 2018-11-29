/**
* Linear search -> search through each item one at a time
*
*/
function linearSearch(data, search) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === search) {
      return i;
    }
  } return -1;
}
