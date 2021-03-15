window.onload = () => {
    
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
    rockImg.src = '/images/rock.png';
    const paperBox = document.getElementById('paperbox');
    const paperImg = document.createElement('img');
    paperImg.src = '/images/paper.png';
    const scissorBox = document.getElementById('scissorbox');
    const scissorImg = document.createElement('img');
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
            const pointsText = document.createElement('p');
            pointsText.setAttribute('class', 'grow');
            pointsText.textContent = 'sample text';
            scoreBox.appendChild(pointsText);

            document.querySelectorAll('.weapons').forEach(function(node) {
                node.addEventListener('click', function(e) {
                    console.dir(e);
                })
            })
        });
    }    
}




let playerPoints = 0;
      let computerPoints = 0;
      let rock = 0;
      let paper = 1;
      let scissors = 2;
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
        let string = playerSelection.toLowerCase();
        let capString = string.charAt(0).toUpperCase() + string.slice(1);
        let winningMessage = `Victory! ${capString} beats ${computerSelection}.`
        let losingMessage = `You lose! ${computerSelection} beats ${capString}.`

        if (capString === computerSelection) {
            console.log(`Ahh dang! No winner this round. ${capString} nullifies ${computerSelection}`);
        }

        else if (capString === 'Rock') {
            if (computerSelection === 'Scissors') {
                playerPoints += 1;
                console.log(winningMessage);
            } else if (computerSelection === 'Paper') { 
                computerPoints += 1;
                console.log(losingMessage);
            }
        }

        else if (capString === 'Paper') {
            if (computerSelection === 'Rock') {
                playerPoints += 1;
                console.log(winningMessage);
            } else if (computerSelection === 'Scissors') { 
                computerPoints += 1;
                console.log(losingMessage);
            }
        }

        else if (capString === 'Scissors') {
            if (computerSelection === 'Paper') {
                playerPoints += 1;
                console.log(winningMessage);
            } else if (computerSelection === 'Rock') { 
                computerPoints += 1;
                console.log(losingMessage);
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

    function game() {
       let i;
       for (i = 0; i < 5; i++) {
        playRound(prompt('What do you choose?', ''), computerPlay());
       }
       results();
       playerPoints = 0;
       computerPoints = 0;
    }
