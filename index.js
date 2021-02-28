//const dices = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"]
const rollDiceBtn = document.querySelector("#roll-dice-btn")
const numberOfDice = document.querySelector("#number-of-dice")
const showRoll = document.querySelector("#show-rolls")

const dices =[{DiceNum:1,Dice: "&#9856"}, {DiceNum:2, Dice:"&#9857"}, {DiceNum:3, Dice:"&#9858"}, {DiceNum:4,Dice: "&#9859"}, {DiceNum:5, Dice:"&#9860"}, {DiceNum:6, Dice:"&#9861"}]

const generateRoll = () =>{
    showRoll.innerHTML = ""

    for(let i=0; i<numberOfDice.value; i++){
        let random= dices[Math.floor(Math.random() * dices.length)]
        showRoll.innerHTML += random["Dice"]
    }


}


rollDiceBtn.addEventListener("click", generateRoll)