const SelectionSort = (input) => {
    for (let i = 0; i < input.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < input[minIndex]) {
                minIndex = j;
            }
        }
        //swap
        [input[i], input[minIndex]] = [input[minIndex], input[i]];
    }
}
