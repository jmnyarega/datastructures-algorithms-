
/**
  * The Insertion Sort -> It always maintains a sorted sublist in the lower positions of the list
  * @param {data} data to be sorted
 */
const insertionSort = (data) => {
  const inputArr = data;
  const { length } = inputArr;
  let output = '';
  for (let i = 1; i < length; i += 1) {
    const key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j -= 1;
    }
    inputArr[j + 1] = key;
    output += `\n Pass ${i} -> ${inputArr}`;
  }
  return output;
};
console.log(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]));
