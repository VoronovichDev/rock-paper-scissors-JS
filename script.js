let score = document.querySelector("#score")
let step = document.querySelector("#step")
let buttons = document.querySelector('#btns')
let finalResult = document.querySelector('#finalResult')
let resetBtn = document.querySelector('#reset')

buttons.addEventListener('click', (e) => playRound(e.target.className, getComputerChoice()))

function getComputerChoice() {
   let arr = ['rock', 'paper', 'scissors']

   function randomNum(min, max) {
      let num = min + Math.random() * (max + 1 - min)
      return Math.floor(num)
   }
   let res = arr[randomNum(0, 2)]
   return res
}



let result = [];

function playRound(playerSelection, computerSelection) {
   let winAmount
   let loseAmount
   let humanStep = playerSelection.toLowerCase();
   let robotStep = computerSelection

   updateState = () => {
      winAmount = result.filter(r => r === "win").length
      loseAmount = result.filter(r => r === "lose").length
   }
   showScore = (w, l) => {
      score.innerHTML = `You - ${w}:${l} - Computer `
   }
   showRoundResult = (resultOfRound) => {
      if (resultOfRound == 'Draw') {
         step.innerHTML = `${resultOfRound}! You and Computer chose: ${humanStep}`
      } else {
         step.innerHTML = `You ${resultOfRound}! Computer chose: ${robotStep}, you chose: ${humanStep}`
      }
   }


   if (humanStep === 'rock' && robotStep === 'paper') {
      showRoundResult('lost')
      result.push('lose')
      updateState()
      showScore(winAmount, loseAmount)

   }
   else if (humanStep === 'rock' && robotStep === 'scissors') {
      showRoundResult('won')
      result.push('win')
      updateState()
      showScore(winAmount, loseAmount)
   }
   else if (humanStep === 'paper' && robotStep === 'rock') {
      showRoundResult('won')
      result.push('win')
      updateState()
      showScore(winAmount, loseAmount)
   }
   else if (humanStep === 'paper' && robotStep === 'scissors') {
      showRoundResult('lost')
      result.push('lose')
      updateState()
      showScore(winAmount, loseAmount)
   }
   else if (humanStep === 'scissors' && robotStep === 'rock') {
      showRoundResult('lost')
      result.push('lose')
      updateState()
      showScore(winAmount, loseAmount)
   }
   else if (humanStep === 'scissors' && robotStep === 'paper') {
      showRoundResult('won')
      result.push('win')
      updateState()
      showScore(winAmount, loseAmount)
   }
   else if (humanStep === robotStep) {
      showRoundResult('Draw')
      updateState()
      showScore(winAmount, loseAmount)
   }

   if (winAmount === 5) {
      finalResult.innerHTML = `GAME OVER! You won with a score ${winAmount}:${loseAmount}`
      let arr = Array.from(buttons.children)
      arr.forEach(b => b.disabled = true)
      resetBtn.classList.toggle("reset")

   } else if (loseAmount === 5) {
      finalResult.innerHTML = `GAME OVER! You lost with a score ${winAmount}:${loseAmount}`
      let arr = Array.from(buttons.children)
      arr.forEach(b => b.disabled = true)
      resetBtn.classList.toggle("reset")
   } else if (winAmount === 5 && loseAmount === 5) {
      finalResult.innerHTML = `GAME OVER! DRAW ${loseAmount}:${winAmount}`
      let arr = Array.from(buttons.children)
      arr.forEach(b => b.disabled = true)
      resetBtn.classList.toggle("reset")
   }
}

resetBtn.addEventListener('click', startNewGame)
function startNewGame() {
   result = []
   updateState()
   resetBtn.classList.toggle("reset")
   finalResult.innerHTML = ''
   step.innerHTML = ''
   score.innerHTML = ''
   let arr = Array.from(buttons.children)
   arr.forEach(b => b.disabled = false)
}
