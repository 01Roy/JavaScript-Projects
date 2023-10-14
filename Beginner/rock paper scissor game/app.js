const selectionBtns = document.querySelectorAll("[data-selection]");
const finalColum = document.querySelector("[data-final-coloum]");
const computerscoreSpan = document.querySelector('[data-computer-score');
const yourscoreSpan = document.querySelector('[data-your-score');
const selections = [
    {
        name:"rock",
        emoji:"✊",
        beats:"scissor"
    },
    {
        name:"paper",
        emoji:"✋",
        beats:"rock"
    },
    {
        name:"scissor",
        emoji:"✌️",
        beats:"paper"
    }
]

selectionBtns.forEach(item=>{
    item.addEventListener("click",e=>{
        const selectedbtn=item.dataset.selection;
        const selection = selections.find(selection=>selection.name===selectedbtn)
        makeselection(selection)
    })
})

function makeselection(selection){
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection,computerSelection);
    const computerWinnner = isWinner(computerSelection,selection);
    console.log(computerSelection);

    addSelectionResult(computerSelection,computerWinnner);
    addSelectionResult(selection,yourWinner);

    if(yourWinner) incrementScore(yourscoreSpan);
    if(computerWinnner) incrementScore(computerscoreSpan);

}

function incrementScore(scoreSpan){
 scoreSpan.innerText = parseInt(scoreSpan.innerText)+1;
}

function addSelectionResult(selection,winner){
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result_selection');
    if(winner) div.classList.add('winner');
  finalColum.after(div);
}

function isWinner(selection,opponentSelection){
  return selection.beats=== opponentSelection.name;
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random()*selections.length)
    return selections[randomIndex]
}


