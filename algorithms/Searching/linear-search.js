//Method of finding an element with in the list starting from one end and going all the way until we found the value

let arr = [1, 2, 3, 4, 6, 8, 12];

const LinearSearch = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

console.log(LinearSearch(arr, 12));

//Time Complexity O(n) 