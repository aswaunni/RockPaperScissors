
let pStone;
let pPaper;
let pScissors;
let cStone;
let cPaper;
let cScissors;
let p_paper_button;
let p_scissors_button;
let p_stone_button;
let c_stone_button;
let c_paper_button;
let c_scissors_button;
let pp = 0;
let cp = 0;
let p_points;
let c_points;
let cSelection;
let pselection;
let tries = 5;
let res;

document.addEventListener('DOMContentLoaded', () => {
    init();
  });
  

function init() {
    pStone = document.querySelector('#player_stone');
    pPaper = document.querySelector('#player_paper');
    pScissors = document.querySelector('#player_scissors');
    cStone = document.querySelector('#computer_stone');
    cPaper = document.querySelector('#computer_paper');
    cScissors = document.querySelector('#computer_scissors');
    p_stone_button = document.querySelector('#p_stone_button');
    p_paper_button = document.querySelector('#p_paper_button');
    p_scissors_button = document.querySelector('#p_scissors_button');
    c_stone_button = document.querySelector('#c_stone_button');
    c_paper_button = document.querySelector('#c_paper_button');
    c_scissors_button = document.querySelector('#c_scissors_button');
    p_points = document.querySelector('#player_points');
    c_points = document.querySelector('#computer_points');
    res = document.querySelector('.result');

    p_stone_button.addEventListener('click', function() {
        if (tries == 5) 
            reset();
        resetImages();
        pStone.src = "stone_s.jpg";
        pselection = 0;
        startGame();
    });
    p_paper_button.addEventListener('click', function() {
        if (tries == 5) 
            reset();
        resetImages();
        pPaper.src = "paper_s.jpg";
        pselection = 1;
        startGame();
    });
    p_scissors_button.addEventListener('click', function() {
        if (tries == 5) 
            reset();
        resetImages();
        pScissors.src = "scissors_s.jpg";
        pselection = 2;
        startGame();
    });
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        cStone.src = 'stone_s.jpg';
    } else if (choice == 1) {
        cPaper.src = 'paper_s.jpg';
    } else {
        cScissors.src = 'scissors_s.jpg';
    }
    return choice;
}

function playRound(player, computer) {
    let result = 0;
    if (player == 1) {
        if (computer == 0)
            result=1;
        else if (computer == 2)
            result=-1;
    } else if (player == 0) {
        if (computer == 2)
            result=1;
        else if (computer == 1)
            result=-1;
    } else {
        if (computer == 1)
            result=1;
        else if (computer == 0)
            result=-1;
    }

    return result;
}

function startGame() {

    cSelection = getComputerChoice();
    let result = playRound(pselection, cSelection);
    if (result == 1) {
        pp += 1;
        p_points.textContent = pp.toString();
    }
    else if (result == -1) {
        cp += 1;
        c_points.textContent = cp.toString();
    }

    if ((--tries) == 0) {
        declareResult();
        tries = 5;
    } 
}

function declareResult() {
    if (pp > cp) {
        res.textContent = 'You won the GAME!!';
    } else if (pp < cp) {
        res.textContent = 'You lost the GAME!!';
    } else {
        res.textContent = 'The GAME was a Draw!!';
    }
}

function resetImages() {
    pStone.src = 'stone.jpg';
    pPaper.src = 'paper.jpg';
    pScissors.src = 'scissors.jpg';
    cStone.src = 'stone.jpg';
    cPaper.src = 'paper.jpg';
    cScissors.src = 'scissors.jpg';
}

function reset() {
    resetImages();
    res.textContent = '';
    pp = 0;
    cp = 0;
    p_points.textContent = '0';
    c_points.textContent = '0';
}




