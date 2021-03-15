window.onload = () => {
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
            document.getElementById('intro').setAttribute('id', 'versusbox');
            const versusBox = document.getElementById('versusbox');  
            const stickmanBox = document.createElement('div');
            const laptopBox = document.createElement('div');
            stickmanBox.setAttribute('id', 'stickmanbox');
            laptopBox.setAttribute('id', 'laptopbox');
            versusBox.appendChild(stickmanBox);
            versusBox.appendChild(laptopBox);
            let stickImg = document.createElement('img');
            stickImg.src = '/images/stickman-icon.png';
            stickmanBox.appendChild(stickImg);
            let laptopImg = document.createElement('img');
            laptopImg.src = '/images/laptop-icon.png';
            laptopBox.appendChild(laptopImg);
            const scoreBox = document.createElement('div');
            scoreBox.setAttribute('id', 'scorebox');
            versusBox.insertBefore(scoreBox, laptopBox);
            const points = document.createElement('div');
            points.setAttribute('id', 'points');
            scoreBox.appendChild(points);
            const commentBox = document.createElement('div');
            commentBox.setAttribute('id', 'commentary');
            const buttonBox = document.querySelector('.buttonbox');
            const siteWrap = document.querySelector('#site-wrap');
            siteWrap.insertBefore(commentBox, buttonBox);
            const pointsText = document.createElement('p');
            pointsText.textContent = 'sample text';
            points.appendChild(pointsText);
            const rockBox = document.createElement('div');
            rockBox.setAttribute('id', 'rockbox');
            const paperBox = document.createElement('div');
            paperBox.setAttribute('id', 'paperbox');
            const scissorBox = document.createElement('div');
            scissorBox.setAttribute('id', 'scissorbox');
            buttonBox.appendChild(rockBox);
            buttonBox.appendChild(paperBox);
            buttonBox.appendChild(scissorBox);
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
