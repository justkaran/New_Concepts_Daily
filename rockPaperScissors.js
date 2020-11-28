const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  }
  else {
    console.log('Please enter a valid string')
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3)
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paperlino';
    case 2:
    return 'scissors';
  }
  return randomNumber
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Its a tie Joe'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper' || computerChoice == 'scissors') {
      return 'the user has won'
    }
    else {
      return 'the computer has won'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors' ) {
      return 'the computer has won'
    }
    else {
      return 'the user has won'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'the computer has won'
    }
    else {
      return 'the user has won'
    }
  }
}
//console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
//console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
//console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

const playGame = () => {
   const userChoice = getUserChoice('scissors');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();
