window.onload = () => {
    let roundsPlayed = 0
    let rock = 0;
    let paper = 1;
    let scissors = 2;
    let playerPoints = 0;
    let computerPoints = 0;
    const pointsText = document.createElement('p');
    const versusBox = document.getElementById('versusbox');  
    const stickmanBox = document.getElementById('stickmanbox');
    const stickImg = document.createElement('img');
    stickImg.src = '/images/stickman-icon.png';
    const scoreBox = document.getElementById('scorebox');
    const laptopBox = document.getElementById('laptopbox');
    const laptopImg = document.createElement('img');
    laptopImg.src = '/images/laptop-icon.png';
    const commentBox = document.getElementById('commentbox');
    const weaponBox = document.getElementById('weaponbox');
    const rockBox = document.getElementById('rockbox');
    const rockImg = document.createElement('img');
    rockImg.setAttribute('id', 'rockimg');
    rockImg.src = '/images/rock.png';
    const paperBox = document.getElementById('paperbox');
    const paperImg = document.createElement('img');
    paperImg.setAttribute('id', 'paperimg');
    paperImg.src = '/images/paper.png';
    const scissorBox = document.getElementById('scissorbox');
    const scissorImg = document.createElement('img');
    scissorImg.setAttribute('id', 'scissorimg');
    scissorImg.src = '/images/scissors.png';
    const weaponPrompt = document.getElementById('weaponprompt');
    const letsPlay = document.querySelector('#btnyes');

    letsPlay.addEventListener('click', () => {
        startPlay();
    });

    function startPlay() {
        const introDivs = document.querySelectorAll('.introcontent');
        introDivs.forEach(function(node) {
            node.classList.toggle('disappear');
        });
        introDivs[0].addEventListener('animationend', () => {
            for (let i = 0; i < introDivs.length ; i++) {
                introDivs[i].remove();
            }
            const reveal = document.querySelectorAll('.before');
            reveal.forEach(function(node) {
                node.classList.toggle('before');
            });
            stickmanBox.appendChild(stickImg);
            laptopBox.appendChild(laptopImg);
            stickImg.classList.toggle('slidefromleft');
            laptopImg.classList.toggle('slidefromright');
            rockBox.appendChild(rockImg);
            paperBox.appendChild(paperImg);
            scissorBox.appendChild(scissorImg);
            const weapons = document.querySelectorAll('.weapons');
            weapons.forEach(function(node) {
                node.classList.toggle('slidefrombelow');
            });
            pointsText.setAttribute('class', 'grow');
            
        });
    }   

    const commentText = document.createElement('p');
    commentBox.appendChild(commentText);
    let score = '0 - 0';
    pointsText.innerHTML = score;
    scoreBox.appendChild(pointsText);
    
    document.querySelectorAll('.weapons').forEach(function(node) {
        node.addEventListener('click', function(e) {
            
            if (e.target.id === 'rockimg' || e.target.id === 'rockbox') {
                playerThisRound = 'Rock';
            } else if (e.target.id === 'paperimg' || e.target.id === 'paperbox') {
                playerThisRound = 'Paper';
            } else if (e.target.id === 'scissorimg' || e.target.id === 'scissorbox') {
                playerThisRound =  'Scissors';
            }
            playRound(playerThisRound, computerPlay());
            pointsText.innerHTML = `${playerPoints} - ${computerPoints}`;
            roundsPlayed += 1;
            if (roundsPlayed === 5) {
                alert('that\'s enough');
            }
        });
    });

    function computerPlay () {
        let result = Math.floor(Math.random() * 3);
         switch (result) {
             case 0:
                 return 'Rock'
                 break;
             case 1:
                 return 'Paper'
                 break;
             case 2:
                 return 'Scissors'
                 break;
         }
     }
 
     function playRound(playerSelection, computerSelection) {
         let winningMessage = `Victory! ${playerSelection} beats ${computerSelection}.`
         let losingMessage = `You lose! ${computerSelection} beats ${playerSelection}.`
 
         if (playerSelection === computerSelection) {
             commentText.textContent = 
             `Ahh dang! No winner this round. ${playerSelection} nullifies ${computerSelection}`;
         }
 
         else if (playerSelection === 'Rock') {
             if (computerSelection === 'Scissors') {
                 playerPoints += 1;
                 commentText.textContent = winningMessage;
             } else if (computerSelection === 'Paper') { 
                 computerPoints += 1;
                 commentText.textContent = losingMessage;
             }
         }
 
         else if (playerSelection === 'Paper') {
             if (computerSelection === 'Rock') {
                 playerPoints += 1;
                 commentText.textContent = winningMessage;
             } else if (computerSelection === 'Scissors') { 
                 computerPoints += 1;
                 commentText.textContent = losingMessage;
             }
         }
 
         else if (playerSelection === 'Scissors') {
             if (computerSelection === 'Paper') {
                 playerPoints += 1;
                 commentText.textContent = winningMessage;
             } else if (computerSelection === 'Rock') { 
                 computerPoints += 1;
                 commentText.textContent = losingMessage;
             }
         }
     }
    

    

    function results() {
        if (playerPoints > computerPoints) {
           console.log(`You've won! You got ${playerPoints} and the computer got ${computerPoints}.`);
       } else if (computerPoints > playerPoints) {
           console.log(`Oh deary me. You lose. The computer got ${computerPoints} and you got ${playerPoints}.`);
       } else if (playerPoints === computerPoints){
           console.log(`It's a draw. You both got ${playerPoints} each.`)
       }
    }
}
