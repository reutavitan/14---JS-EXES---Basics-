let grid = [
    ["X", "O", "X"],
    ["O", "X", "x"],
    ["X", "O", "x"]
];
let count = 0;
for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === "X") {
            count++;
        }
    }
}
console.log(count);