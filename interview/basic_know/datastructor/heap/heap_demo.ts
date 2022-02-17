import { MinHeap } from "./lib/heap";

const minHeap = new MinHeap();
minHeap.insert(13)
minHeap.insert(17)
minHeap.insert(14)
minHeap.insert(23)
minHeap.insert(93)
minHeap.insert(1)
console.log(minHeap.getIsArray());
console.log(minHeap.findMinimum());