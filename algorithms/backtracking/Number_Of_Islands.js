// ==================================================== Number of Islands ===============================================================

var numIslands = function (grid) {
    if (grid == null || grid.length == 0) return 0;
    let m = grid.length;
    let n = grid[0].length;
    let noOfIslands = 0;

    // Looping through all the elements in a matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // if an element is "1" call the helper function to see all the connected paths to that element
            if (grid[i][j] == "1") {
                ++noOfIslands;
                findConnectedPaths(grid, m, n, i, j);
            }
        }
    }
    return noOfIslands;
};

function findConnectedPaths(grid, m, n, row, col) {
    //checking of the row and columns are borders and the element is "0" if its "0" it's considered to be water which we cannot go further and explore
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == "0") return;

    //Changing the value to be zero to kind of mark it as already visited path
    grid[row][col] = 0;

    //Exploring all the possiblilties of element being land

    // UP
    findConnectedPaths(grid, m, n, row - 1, col);
    //DOWN
    findConnectedPaths(grid, m, n, row + 1, col);
    //LEFT
    findConnectedPaths(grid, m, n, row, col - 1);
    //RIGHT
    findConnectedPaths(grid, m, n, row, col + 1);
}
