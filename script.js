function gameboard() {
    let board = '';
    const rows = 3;
    const cols = 3;

    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let k = 0; k < cols; k++) {
            row += "."
            if (k < cols - 1) row += ' | '
        }
        board += row;
        if (i < rows - 1) {
            board += '\n' + '-'.repeat(row.length) + '\n';
        }
    }

    console.log(board)
}

gameboard();