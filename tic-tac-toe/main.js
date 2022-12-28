let currentPlayer = null;

const _prompt = document.querySelector('.prompt');
function writePrompt(str){
    _prompt.innerHTML = str;
}

const playerFactory = (mark) => {
    let opponent = null;
    

    function makeMove(){
        currentPlayer = currentPlayer.opponent;
        writePrompt(`Player ${currentPlayer.mark}'s Turn`);
    }
    
    return {mark, opponent, makeMove, writePrompt};
};

var gameBoard = (function() {
    'use strict';
    var _gameOver = false;
    var _theBoard = new Array(3);
    for (let i = 0; i < _theBoard.length; i++) {
        _theBoard[i] = new Array(3);
    }

    const board = document.querySelector('.board');

    function createBoard(){
        board.innerHTML = '';
        _resetArray();
        _gameOver = false;

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                const cellBtn = document.createElement('button');
                cellBtn.addEventListener('click', function(){
                    if (!_gameOver){
                        cellBtn.innerHTML = currentPlayer.mark;
                        _theBoard[i][j] = currentPlayer.mark;
                        _checkWinner();
                        if (_gameOver){
                            writePrompt(`Player ${currentPlayer.mark} won!`);
                            return;
                        }
                        currentPlayer.makeMove();
                    }
                }, {once: true});
                board.appendChild(cellBtn);
            }
        }
    }

    function _resetArray(){
        for (let i = 0; i < _theBoard.length; i++) {
            for (let j = 0; j < _theBoard[i].length; j++) {
                delete _theBoard[i][j];
            }
        }
    }

    function _checkWinner(){
        //check horizontal
        for (let i = 0; i < _theBoard.length; i++) {
            let counter = 0;
            for (let j = 1; j < _theBoard.length; j++) {
                if (_theBoard[i][j] === _theBoard[i][j-1] && _theBoard[i][j] !== undefined){
                    counter++;
                }
                if (counter === 2){
                    _gameOver = true;
                }
            }
        }

        //check vertical
        for (let i = 0; i < _theBoard.length; i++) {
            let counter = 0;
            for (let j = 1; j < _theBoard.length; j++) {
                if (_theBoard[j][i] === _theBoard[j-1][i] && _theBoard[j][i] !== undefined){
                    counter++;
                }
                if (counter === 2){
                    _gameOver = true;
                }
            }
        }

        //check diagnonal
        let counter = 0;
        for (let i = 1; i < _theBoard.length; i++) {
            if (_theBoard[i][i] === _theBoard[i-1][i-1] && _theBoard[i][i] !== undefined){
                counter++;
            }
            if (counter === 2){
                _gameOver = true;
            }
        }

        counter = 0;
        for (let i = 1; i < _theBoard.length; i++) {
            if (_theBoard[i][2-i] === _theBoard[i-1][3-i] && _theBoard[i][2-i] !== undefined){
                counter++;
            }
            if (counter === 2){
                _gameOver = true;
            }
        }
    }

    return {
        displayBoard: function(){
            console.log(_theBoard.length);
        }, createBoard
    }
})();

var displayController = (function(){
    function startGame(){
        let xPlayer = playerFactory('X');
        let oPlayer = playerFactory('O');
        xPlayer.opponent = oPlayer;
        oPlayer.opponent = xPlayer;
        gameBoard.createBoard();
        currentPlayer = xPlayer;
        writePrompt(`Player ${currentPlayer.mark}'s Turn`);
    }
    return{startGame}
})();

displayController.startGame()

const restart = document.querySelector('.restart');
restart.addEventListener('click', function(){
    displayController.startGame();
})