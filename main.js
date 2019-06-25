const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreBoard = {
    player: 0,
    computer: 0
}

// play gam

function play(e){

    restart.style.display = 'inline';
    const playerChoice = (e.target.id);
    const computerChoice = getComputerChoice();

    const winner = getwinner(playerChoice, computerChoice);
  
    showWinner(winner, computerChoice);
}

// winner

function getwinner(p, c){
    if(p === c){
        return 'draw';
    }else if(p === 'patthar'){
        if(c === 'kagaz'){
            return 'computer';
        } else {
            return 'player';
        }
    } else if(p === 'kagaz'){
        if(c === 'kaichi'){
            return 'computer';
        }else{
            return 'player';
        }
    } else if(p === 'kaichi'){
        if(c === 'patthar'){
            return 'computer';
        }else{
            return 'player';
        }
    }
}


// computer?

function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'patthar';
    } else if(rand <= 0.67){
        return 'kagaz';
    } else {
        return 'kaichi';
    }
}

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
      // Inc player score
      scoreBoard.player++;
      // Show modal result
      result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
          computerChoice.slice(1)}</strong></p>
      `;
    } else if (winner === 'computer') {
      // Inc computer score
      scoreBoard.computer++;
      // Show modal result
      result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
          computerChoice.slice(1)}</strong></p>
      `;
    } else {
      result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
          computerChoice.slice(1)}</strong></p>
      `;
    }
    // Show score
    score.innerHTML = `
      <p>Player: ${scoreBoard.player}</p>
      <p>Computer: ${scoreBoard.computer}</p>
      `;
  
    modal.style.display = 'block';
  }
  function restartGame() {
      scoreBoard.player = 0;
      scoreBoard.computer = 0;
      score.innerHTML = `
        <p>player: 0</p>
        <p>Computer: 0</p>
      `;
  }

  function clearMdal(e){
      if(e.target == modal){
          modal.style.display = 'none';
      }
  }

// event listoners

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearMdal);
restart.addEventListener('click', restartGame);