const cells = document.querySelectorAll('[data-cell]');
const resetButton = document.getElementById('resetBtn');
let currentPlayer = 'X';
let gameActive = true;

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleCellClick = (e) => {
    const cell = e.target;
    const index = Array.from(cells).indexOf(cell);
    
    if (cell.textContent !== '' || !gameActive) return;

    cell.textContent = currentPlayer;
    checkWinner();
    togglePlayer();
};

const checkWinner = () => {
    for (let i = 0; i < winningCombination.length; i++) {
        const [a, b, c] = winningCombination[i];
        
        if (cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
            gameActive = false;
            cells[a].style.color = 'green';
            cells[b].style.color = 'green';
            cells[c].style.color = 'green';
            alert(`${currentPlayer} wins!`);
            return;
        }
    }
    if ([...cells].every(cell => cell.textContent !== '')) {
        gameActive = false;
        alert("It's a draw!");
    }
};

const togglePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetBoard = () => {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.color = '';
    });
    gameActive = true;
    currentPlayer = 'X';
};

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetBoard);
