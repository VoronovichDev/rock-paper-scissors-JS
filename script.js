function getComputerChoice() {
   let arr = ['rock', 'paper', 'scissors']

   function randomNum(min, max) {
      let num = min + Math.random() * (max + 1 - min)
      return Math.floor(num)
   }
   let res = arr[randomNum(0, 2)]
   return res
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection == null) {
      return
   }
   let humanStep = playerSelection.toLowerCase();
   let robotStep = computerSelection

   if (humanStep === 'rock' && robotStep === 'paper') {
      return "Lose"
   } else if (humanStep === 'rock' && robotStep === 'scissors') {
      return "Win"
   } else if (humanStep === 'paper' && robotStep === 'rock') {
      return "Win"
   } else if (humanStep === 'paper' && robotStep === 'scissors') {
      return "Lose"
   } else if (humanStep === 'scissors' && robotStep === 'rock') {
      return "Lose"
   } else if (humanStep === 'scissors' && robotStep === 'paper') {
      return "Win"
   } else if (humanStep === robotStep) {
      return `Draw`
   } else if (humanStep !== 'rock' && humanStep !== 'paper' && humanStep !== 'scissors' || humanStep == 'null') {
      return `You wrote invalid value, try again`
   }
}

function game(n) {
   for (let i = 0; i < n; i++) {
      let playerSelection = prompt('Chose rock, paper or scissors ...');

      if (playerSelection == undefined) {
         return
      }

      let computerSelection = getComputerChoice()

      result.push(playRound(playerSelection, computerSelection))

      console.log(`${playRound(playerSelection, computerSelection)}: your choice: ${playerSelection}, robots choice: ${computerSelection} `)

   }

   // utility log
   console.log('array of round results ', result)

   let winArr = []
   let loseArr = []
   let winStr = 'Win'
   let loseStr = 'Lose'
   let idx = result.indexOf(winStr)
   let idx2 = result.indexOf(loseStr)
   while (idx != -1) {
      winArr.push(idx)
      idx = result.indexOf(winStr, idx + 1);
   }
   while (idx2 != -1) {
      loseArr.push(idx2)
      idx2 = result.indexOf(loseStr, idx2 + 1);
   }
   // utility log
   console.log('winArray ', winArr, ' number of wins ', winArr.length)

   // utility log
   console.log('loseArray ', loseArr, ' number of losses ', loseArr.length)

   if (winArr.length > loseArr.length) {
      console.log(`Congratulations, you won with a score ${winArr.length}:${loseArr.length}`)
   } else if (winArr.length < loseArr.length) {
      console.log(`Sorry, but you lost with a score ${winArr.length}:${loseArr.length}`)
   } else if (winArr.length === loseArr.length) {
      console.log(`Draw ${result.length - winArr.length}:${result.length - loseArr.length}`)
   }
}

let result = [];

let amountOfRounds = prompt('Enter the number of rounds you would like to play... ')

game(amountOfRounds)