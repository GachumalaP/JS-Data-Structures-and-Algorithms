//works on divide and conquer technique
//space and time complexity O(n) & O(nlogn)

const input = [7, 1, 3, 2, 10, 4];

const arr1 = [1, 3, 9];
const arr2 = [2, 6, 80];

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const merge = (arr1, arr2) => {
    const mergedSortedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedSortedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedSortedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedSortedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedSortedArray.push(arr2[j]);
        j++;
    }
    return mergedSortedArray;
}
