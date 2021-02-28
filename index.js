//const dices = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"]
const rollDiceBtn = document.querySelector("#roll-dice-btn")
const numberOfDice = document.querySelector("#number-of-dice")
const showRoll = document.querySelector("#dice-para")
const sumOfRolls= document.querySelector("#sum-para")

const dices =[{DiceNum:1,Dice: "&#9856"}, {DiceNum:2, Dice:"&#9857"}, {DiceNum:3, Dice:"&#9858"}, {DiceNum:4,Dice: "&#9859"}, {DiceNum:5, Dice:"&#9860"}, {DiceNum:6, Dice:"&#9861"}]

const generateRoll = () =>{
    showRoll.innerHTML = ""
    
    let sum=0
    for(let i=0; i<numberOfDice.value; i++){
        let random= dices[Math.floor(Math.random() * dices.length)]
        showRoll.innerHTML += random["Dice"]

        sum+= Number(random["DiceNum"])
        sumOfRolls.textContent = `Sum: ${sum}`
    }

    const ul= document.querySelector("#list")
    const li= document.createElement("li")
    li.textContent = `${showRoll.innerHTML}=${sum}`
    ul.appendChild(li)

}


rollDiceBtn.addEventListener("click", generateRoll)