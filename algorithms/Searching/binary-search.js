/*
--> Faster searching algorithm
--> Works on only sorted arrays
--> Idea is divide and conquer
--> considering the given input is sorted
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const BinarySearch = (arr, value) => {
    let leftPtr = 0
    let rightPtr = arr.length - 1;
    while (leftPtr <= rightPtr) {
        let middlePtr = Math.floor((leftPtr + rightPtr) / 2);
        if (arr[middlePtr] === value) return middlePtr
        else if (arr[middlePtr] > value) {
            rightPtr = middlePtr - 1;
        }
        else if (arr[middlePtr] < value) {
            leftPtr = middlePtr + 1;
        }
    }
    return -1;
}
