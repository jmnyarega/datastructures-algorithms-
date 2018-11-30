const MinHeap = require('./minHeap.js');
const MaxHeap = require('./maxHeap.js');

// drivers

// minHeap
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(14);
minHeap.insert(9);
minHeap.insert(50);
minHeap.insert(5);

minHeap.getHeap(); // [ null, 5, 9, 10, 50, 14 ]

// maxHeap
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(14);
maxHeap.insert(9);
maxHeap.insert(50);
maxHeap.insert(5);

maxHeap.getHeap(); // [ null, 50, 14, 9, 10, 5 ]
