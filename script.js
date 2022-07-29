function getComputerChoice() {
   let arr = ['Rock', 'Paper', 'Scissors']

   function randomNum(min, max) {
      let num = min + Math.random() * (max + 1 - min)
      return Math.floor(num)
   }
   let res = arr[randomNum(0, 2)]
   return res
}

