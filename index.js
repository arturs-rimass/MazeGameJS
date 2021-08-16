const maze = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 2]
];
var pointPlayerX = 0
var pointPlayerY = 0
initial()
function initial() {
    const canvas = document.getElementById('myCanvas');
    canvas.width = 500;
    canvas.height = 500;
    const cellSize = 50;
    var context = canvas.getContext('2d');
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            drawMaze(i, j, cellSize, context)
        }
    }
}
function drawMaze(i, j, cellSize, context) {
    let x = j * cellSize;
    let y = i * cellSize;
    if (maze[i][j] === 1) cellColor = '#7e2811';
    else if (maze[i][j] === 0) cellColor = '#34eb37';
    else if (maze[i][j] === 2) cellColor = '#ff0000';
    if (i == pointPlayerX && j == pointPlayerY) cellColor = '#1870d5';
    context.beginPath();
    context.fillStyle = cellColor;
    context.fillRect(x, y, cellSize, cellSize);
}
document.onkeypress = (e) => {
    var key = e.key
    switch (key) {
        case 'w':
            if (pointPlayerX <= 0) return;
            if (isWall(pointPlayerX - 1, pointPlayerY)) {
                pointPlayerX--;
                initial();
                if (checkWin(pointPlayerX, pointPlayerY))
                    alert("Completed the maze!")
            }
            break;
        case 's':
            if (maze.length - 1 <= pointPlayerX) return;
            if (isWall(pointPlayerX + 1, pointPlayerY)) {
                pointPlayerX++;
                initial();
                if (checkWin(pointPlayerX, pointPlayerY))
                    alert("Completed the maze!")
            }
            break;
        case 'a':
            if (pointPlayerY <= 0) return;
            if (!isWall(pointPlayerX, pointPlayerY - 1)) {
                pointPlayerY--;
                initial();
                if (checkWin(pointPlayerX, pointPlayerY))
                    alert("Completed the maze!")
            }
            break;
        case 'd':
            if (maze.length - 1 <= pointPlayerY) return;
            if (!isWall(pointPlayerX, pointPlayerY + 1)) {
                pointPlayerY++;
                initial();
                if (checkWin(pointPlayerX, pointPlayerY))
                    alert("Completed the maze!")
            }
            break;
    }
    function isWall(pointPlayerX, pointPlayerY) {
        return maze[pointPlayerX][pointPlayerY] == 0
    }
    function checkWin(pointPlayerX, pointPlayerY) {
        return maze[pointPlayerX][pointPlayerY] == 2
    }
}