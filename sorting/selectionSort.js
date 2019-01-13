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

//// TODO: Document this function
