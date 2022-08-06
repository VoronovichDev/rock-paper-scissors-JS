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

   if (humanStep === 'rock' && robotStep === 'paper') {
      step.innerHTML = `You lost! Computer chose: ${robotStep}, you chose: ${humanStep}`
      result.push('lose')
      console.log(result)
      winAmount = result.filter(r => r === "win").length
      loseAmount = result.filter(r => r === "lose").length
      score.innerHTML = `You - ${winAmount}:${loseAmount} - Computer `

   } else if (humanStep === 'rock' && robotStep === 'scissors') {
      step.innerHTML = `You won! Computer chose: ${robotStep}, you chose: ${humanStep}`
      result.push('win')
      console.log(result)
      winAmount = result.filter(r => r === "win").length
      loseAmount = result.filter(r => r === "lose").length
      score.innerHTML = `You - ${winAmount}:${loseAmount} - Computer `

   } else if (humanStep === 'paper' && robotStep === 'rock') {
      step.innerHTML = `You won! Computer chose: ${robotStep}, you chose: ${humanStep}`
      result.push('win')
      console.log(result)
      winAmount = result.filter(r => r === "win").length
      loseAmount = result.filter(r => r === "lose").length
      score.innerHTML = `You - ${winAmount}:${loseAmount} - Computer `

   } else if (humanStep === 'paper' && robotStep === 'scissors') {
      step.innerHTML = `You lost! Computer chose: ${robotStep}, you chose: ${humanStep}`
      result.push('lose')
      console.log(result)
      winAmount = result.filter(r => r === "win").length
      loseAmount = result.filter(r => r === "lose").length
      score.innerHTML = `You - ${winAmount}:${loseAmount} - Computer `

   } else if (humanStep === 'scissors' && robotStep === 'rock') {
      step.innerHTML = `You lost! Computer chose: ${robotStep}, you chose: ${humanStep}`
      result.push('lose')
      console.log(result)
      winAmount = result.filter(r => r === "win").length
      loseAmount = result.filter(r => r === "lose").length
      score.innerHTML = `You - ${winAmount}:${loseAmount} - Computer `

   } else if (humanStep === 'scissors' && robotStep === 'paper') {
      step.innerHTML = `You won! Computer chose: ${robotStep}, you chose: ${humanStep}`
      result.push('win')
      console.log(result)
      winAmount = result.filter(r => r === "win").length
      loseAmount = result.filter(r => r === "lose").length
      score.innerHTML = `You - ${winAmount}:${loseAmount} - Computer `

   } else if (humanStep === robotStep) {
      step.innerHTML = `Draw! You and Computer chose: ${humanStep}`
      result.push('win', 'lose')
      console.log(result)
      winAmount = result.filter(r => r === "win").length
      loseAmount = result.filter(r => r === "lose").length
      score.innerHTML = `You - ${winAmount}:${loseAmount} - Computer `
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
   winAmount = result.filter(r => r === "win").length
   loseAmount = result.filter(r => r === "lose").length
   resetBtn.classList.toggle("reset")
   finalResult.innerHTML = ''
   step.innerHTML = ''
   score.innerHTML = ''
   let arr = Array.from(buttons.children)
   arr.forEach(b => b.disabled = false)

}
