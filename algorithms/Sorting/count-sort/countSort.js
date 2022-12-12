const input = [2, 2, 1, 3, 10, 5, 6, 7];

// Count sort works on positve values only

const countSort = (input) => {

    // find the maximun element in the array
    let maxElement = Math.max(...input);

    // create new array with size maxElement + 1

    const arr = new Array(maxElement + 1);

    // loop through the input array and for every occurance, increment the value at index in newly created array by 1
    for (let i = 0; i < input.length; i++) {
        if (arr[input[i]]) {
            arr[input[i]]++;
        }
        else {
            arr[input[i]] = 1;
        }
    }

    // loop through the newly created array and print out the values 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            while (arr[i] != 0) {
                console.log(i);
                arr[i]--;
            }
        }
    }
}
