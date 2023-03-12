 let guestScore = 0
let homeScore = 0

function homeFreethrow(){
    console.log("home score is 1")
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}

function homeThreePointer(){
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}

function homeTwoPointer(){
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}

function guestFreethrow(){
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}

function guestThreePointer(){
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}

function guestTwoPointer(){
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}

function reset(){
    guestScore = 0
    homeScore = 0
    document.getElementById("guest-score").textContent = guestScore
    document.getElementById("home-score").textContent = homeScore
}