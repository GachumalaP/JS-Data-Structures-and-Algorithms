const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
}

//5,8,19,1,15,20
const input = [5, 8, 19, 1, 15, 20];
const BubbleSort = (input) => {
    for (let i = 1; i < input.length; i++) {
        let isSorted = false;
        for (let j = 0; j < input.length - 1; j++) {
            if (input[j] > input[j + 1]) {
                swap(input, i, j);
                isSorted = true;
            }
        }
        if (!isSorted) {
            break;
        }
    }
}