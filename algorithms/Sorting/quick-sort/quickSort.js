const input = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23];

const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
}

const quickSort = (input, low = 0, high = input.length - 1) => {
    if (low < high) {
        const pivotIndex = partition(input, low, high);
        quickSort(input, low, pivotIndex - 1);
        quickSort(input, pivotIndex + 1, high);
    }
    return input;
}

const partition = (input, low, high) => {
    //consider the first element as pivot
    let pivotIndex = low;
    let pivot = input[pivotIndex];
    let maxElementsCount = 0;

    // check how many elements are greater than pivot element
    for (let i = low + 1; i <= high; i++) {
        if (input[i] > pivot) maxElementsCount++;
    }

    // swap the pivot element to the position(Number of elements - number of max elements)
    const swapPosition = high - maxElementsCount;
    swap(input, pivotIndex, swapPosition);

    pivotIndex = swapPosition;
    pivot = input[pivotIndex];


    // two pointers 
    // all the elements lower than pivot should be on the left side and higher elements whould be on the right side 
    let i = low;
    let j = high;

    while (i != pivotIndex && j != pivotIndex) {
        if (input[i] > pivot && input[j] < pivot) {
            swap(input, i, j);
            i++;
            j--;
        }
        else if (input[i] < pivot) {
            i++;
        }
        else if (input[i] > pivot) {
            j--;
        }
    }
    return pivotIndex;
}

quickSort(input);
