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
    stickImg.src = 'images/stickman-icon.png';
    const scoreBox = document.getElementById('scorebox');
    const laptopBox = document.getElementById('laptopbox');
    const laptopImg = document.createElement('img');
    laptopImg.src = 'images/laptop-icon.png';
    const commentBox = document.getElementById('commentbox');
    const commentText = document.createElement('p');
    const weaponBox = document.getElementById('weaponbox');
    const rockBox = document.getElementById('rockbox');
    const rockImg = document.createElement('img');
    rockImg.setAttribute('id', 'rockimg');
    rockImg.src = 'images/rock.png';
    const paperBox = document.getElementById('paperbox');
    const paperImg = document.createElement('img');
    paperImg.setAttribute('id', 'paperimg');
    paperImg.src = 'images/paper.png';
    const scissorBox = document.getElementById('scissorbox');
    const scissorImg = document.createElement('img');
    scissorImg.setAttribute('id', 'scissorimg');
    scissorImg.src = 'images/scissors.png';
    const weaponIcons = document.getElementById('weaponicons');
    const replayButton = document.createElement('button');
    replayButton.setAttribute('class', 'buttons');
    replayButton.setAttribute('id', 'replaybtn');
    replayButton.textContent = 'Replay';
    replayButton.style.margin = 'auto';
    const letsPlay = document.querySelector('#btnyes');
    const noPlay = document.querySelector('#btnno');

    noPlay.addEventListener('click', () => {
        clearIntro();
    });

    letsPlay.addEventListener('click', () => {
        startPlay();
    });

    commentBox.appendChild(commentText);
    pointsText.innerHTML = '0 - 0';
    scoreBox.appendChild(pointsText);
    const weaponsDivs = document.querySelectorAll('.weapons');

    weaponsDivs.forEach(function(node) {
        node.addEventListener('mouseover', weaponsHover);
        node.addEventListener('mouseout', weaponsOff);
    });
    
    weaponsDivs.forEach(function(node) {
        node.addEventListener('click', function(e) {
            if (e.currentTarget.id === 'rockbox') {
                playerThisRound = 'Rock';
            } else if (e.currentTarget.id === 'paperbox') {
                playerThisRound = 'Paper';
            } else if (e.currentTarget.id === 'scissorbox') {
                playerThisRound =  'Scissors';
            }
            playRound(playerThisRound, computerPlay());
            pointsText.innerHTML = `${playerPoints} - ${computerPoints}`;
            if (roundsPlayed === 5) {
                results();
            }
        });
    });

    function clearIntro() {
        const introDivs = document.querySelectorAll('.introcontent');
        introDivs.forEach(function(node) {
            node.classList.toggle('disappear');
        });
        introDivs[0].addEventListener('animationend', () => {
            for (let i = 0; i < introDivs.length ; i++) {
                introDivs[i].remove();
            }
            commentBox.classList.toggle('before');
            commentBox.classList.add('noplay');
            commentText.textContent = 'Oh.';
        });

    }

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

    function weaponsHover(e) {
        e.currentTarget.querySelector('img').style.transform = 'scale(1.06)';
    }

    function weaponsOff(e) {
        e.currentTarget.querySelector('img').style.transform = 'scale(1)';
    }

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
            if (playerSelection === 'Scissors') {
                commentText.textContent = 
            `Ahh dang! No winner this round. ${playerSelection} nullify ${computerSelection}`;
            } else {
            commentText.textContent = 
            `Ahh dang! No winner this round. ${playerSelection} nullifies ${computerSelection}`;
            }
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
        roundsPlayed += 1;
    }  

    function results() {
        commentText.classList.add('fadeforresults');
        commentText.addEventListener('animationend', () => {
            commentText.classList.remove('fadeforresults');
            if (playerPoints > computerPoints) {
                commentText.textContent = 
                `You've won! You got ${playerPoints} and the computer got ${computerPoints}.`;
            } else if (computerPoints > playerPoints) {
                commentText.textContent = 
                `Oh deary me. You lose. The computer got ${computerPoints} and you got ${playerPoints}.`;
            } else if (playerPoints === computerPoints){
                commentText.textContent =  
                `It's a draw.`;       
            }
            weaponsDivs.forEach(function(node) {
                node.classList.remove('slidefrombelow');
                node.classList.add('slidetobelow');
            });
            weaponsDivs[2].addEventListener('animationend', replayButtonToggle);
            replayButton.addEventListener('click', reset);
        });
    }

    function reset() {
        replayButton.classList.add('disappear2');
        weaponsDivs.forEach(function(node) {
            node.classList.add('slidefrombelow');
            node.classList.remove('slidetobelow');
        });
        weaponsDivs[1].addEventListener('animationend', resetGameVar);
        replayButton.removeEventListener('click', reset);
    }

    function replayButtonToggle() {
        if (document.querySelector('button')) {
            replayButton.classList.remove('disappear2');
        } else {
            weaponBox.insertBefore(replayButton, weaponIcons);
        }
        weaponsDivs[2].removeEventListener('animationend', replayButtonToggle);
    }

    function resetGameVar() {
        commentText.textContent = '';
        pointsText.innerHTML = '0 - 0';
        computerPoints = 0;
        playerPoints = 0;
        roundsPlayed = 0;
        weaponsDivs[1].removeEventListener('animationend', resetGameVar);
    }
}
