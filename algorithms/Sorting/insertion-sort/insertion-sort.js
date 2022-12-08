const swap = (arr, pos1, pos2) => {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
}

const insertionSort = (input) => {
    for (let i = 0; i < input.length; i++) {
        let temp = i;
        for (let j = i - 1; j >= 0; j--) {
            if (input[temp] < input[j]) {
                swap(input, temp, j);
                temp--;
            }
            else {
                break;
            }
        }
    }
}

/*
Time complexity 

Best case O(n) inner loop will not get executed if the if condition is false

Worst case O(n*n)

Space complexity O(1)
*/
