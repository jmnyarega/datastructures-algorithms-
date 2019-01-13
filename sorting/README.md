# SORTING

- Sorting a list of items into ascending or descending order can help either a human or a computer find items on that list quickly,
perhaps using an algorithm like binary search

- JavaScript has a built-in sorting method. It works on arrays of numbers, or even on arrays of strings
```js
var animals = ["gnu", "zebra", "antelope", "aardvark", "yak", "iguana"];
animals.sort();
console(animals); // ["aardvark", "antelope", "gnu", "iguana", "yak", "zebra"]
```

- Even though JavaScript has a built-in sorting method, sorting is a great example of how there may be many ways to think about the same problem,
some perhaps better than others. Understanding sorting is a traditional first step towards mastery of algorithms and computer science

## Selection Sort

## Selection sort Pseudocode
1. Find the smallest card. Swap it with the first card.
2. Find the second-smallest card. Swap it with the second card.
3. Find the third-smallest card. Swap it with the third card.
4. Repeat finding the next-smallest card, and swapping it into the correct position until the array is sorted.

```js
function SelectionSort(data) {
  let minIdx;
  let temp;
  let array = data 
  for (let i = 0; i < array.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] < array[minIdx]) {
        minIdx = j
      }
    }
    temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }
  return array;
}
const sorted = SelectionSort([9,8,7,6,5,3,2,1,0])
console.log(sorted) // [ 0, 1, 2, 3, 5, 6, 7, 8, 9 ]
```

## Alternative Pseudocode for selection Sort algorithm
1. Find the next-smallest card to put into its correct location i.e _if the array initially has values [13, 19, 18, 4, 10],
we first need to find the index of the smallest value in the array. Since 4 is the smallest value, the index of the smallest value is 3_
2. Selection sort would swap the value at index 3 with the value at index 0, giving _[4, 19, 18, 13, 10]_
3. Find the index of the smallest value in the subarray that starts at index 1 i.e _For our example, if the full array is [4, 19, 18, 13, 10], 
then the smallest value in the subarray starting at index 1 is 10, and it has index 4 in the original array. So index 4 is the location of the
second-smallest element of the full array_

```js
function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

function indexOfMinimum(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;
    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

function selectionSort(array) {
    for(var i = 0; i < array.length; i++) {
        var minIndex = indexOfMinimum(array, i);
        swap(array, minIndex, i);
    }
  return array;
};

const sorted = selectionSort([9,8,7,6,5,3,2,1,0])
console.log(sorted)

```

## Analysis of Selection Sort

- Selection sort loops over indices in the array; for each index, selection sort calls indexOfMinimum and swap.
If the length of the array is n n, there are n n indices in the array.
- Since each execution of the body of the loop runs two lines of code, you might think that 2 n 2n lines of code are executed by selection sort.
But it's not true! Remember that indexOfMinimum and swap are functions: when either is called, some lines of code are executed
- How many lines of code are executed by a single call to swap? In the usual implementation, it's three lines, so that each call to swap takes constant time.

### Asymptotic running-time analysis for selection sort
The total running time for selection sort has three parts:
1.  The running time for all the calls to indexOfMinimum.
2.  The running time for all the calls to swap.
3.  The running time for the rest of the loop in the selectionSort function.

* Part 2 & 3 , for n calls to swap, and each call takes _constant_ time, Using our asymptotic notation, the time for all calls to swap is \Theta(n) Θ(n).
* Part 1, the running time for all the calls to indexOfMinimum is \Theta(n^2) Θ(n)
