// ================================================ Rat in a maze =================================================================

function findPaths(m, n) {
    let result = [];
    //Created a visited Matrix to keep track of visisted paths, Filled with zero and once visited marking it as 1
    let visited = new Array(n).map(_ => new Array(4).fill(0));

    if (m[0][0] == 0) {
        return result;
    }

    let str = '';

    findPath(m, n, 0, 0, str);

    function findPath(m, n, row, col, str) {
        if (row == n - 1 && col == n - 1) {
            result.push(str);
            return;
        }
        else {
            visited[row][col] = 1;
        }
        //up
        if (row - 1 >= 0 && visited[row - 1][col] == 0 && m[row - 1][col] == 1) {
            findPath(m, n, row - 1, col, str + "U");
        }
        //down
        if (row + 1 < n && visited[row + 1][col] == 0 && m[row + 1][col] == 1) {
            findPath(m, n, row + 1, col, str + "D");
        }
        //left
        if (col - 1 >= 0 && visited[row][col - 1] == 0 && m[row][col - 1] == 1) {
            findPath(m, n, row, col - 1, str + "L");

        }
        //right
        if (col + 1 < n && visited[row][col + 1] == 0 && m[row][col + 1] == 1) {
            findPath(m, n, row, col + 1, str + "R");
        }

        visited[row][col] = 0;
    }

    return (result);
}