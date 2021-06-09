let score_human = 0;
let score_comp  = 0;

let moves_arr = [
    "Paper", "Rock", "Scissors"
];

let moves_hash = {
    "Paper"    : "Rock",
    "Rock"     : "Scissors",
    "Scissors" : "Paper",
}

function playerSelectionWrapper(ch){
    if(score_human < 5 && score_comp < 5){
        playerSelection(ch)
    }
}

function playerSelection(ch){

    let winner = document.getElementById("winner");
    winner.style.color ="white";

    //var dec
    let playerSelection = moves_arr[ch-1]
    let compSelection = moves_arr[Math.floor(Math.random() * moves_arr.length)]
    if(playerSelection == compSelection){
        compSelection = moves_arr[Math.floor(Math.random() * moves_arr.length)]
    }


    //DOM
    let playerBox = document.getElementById("LPlayer");
    playerBox.innerText = playerSelection

    let compBox = document.getElementById("LComp");
    compBox.innerText = compSelection

    if(playerSelection == compSelection){
        winner.innerText = "Tie"
    }
    else{
        win = getWinner(playerSelection, compSelection) ;
        winner.innerText = (win == 1) ? "You" : "Computer";
        updateScore(win);
        chkScore();
        if(win){
            winner.style.color = "green";
        }
        else{
            winner.style.color = "red";
        }
    }
}

function getWinner(p1, p2){
    return (moves_hash[p1] == p2) ? 1 : 0;
}

function updateScore(w){
    if(w){
        document.getElementById("pScore").innerText = ++score_human;
    }
    else{
        document.getElementById("cScore").innerText = ++score_comp;
    }

}
function chkScore(){
    if(score_human > 4){
        alert("You have WON!!!")
    }
    else if(score_comp > 4){
        alert("You have Lost! :(")
    }
}