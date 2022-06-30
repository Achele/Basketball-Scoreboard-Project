//Assigning values to variables.
let homeScore = 0
let guestScore = 0
let guestFoul = 0
let homeFoul = 0
// let newGame = 0
// let newGameEl = document.getElementById("new-game")

//getting the id of the two score boards (home and guest) and the Fouls board
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeFoulEl = document.getElementById("home-foul")
let guestFoulEl = document.getElementById("guest-foul")
// console.log(points)

//  +1 home button
function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    scoreBoardColor()
}

//  +2 home button
function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    scoreBoardColor()
}

//  +3 home button
function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    scoreBoardColor()
}

//  +1 guest button
function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    scoreBoardColor()
}

//  +2 guest button
function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    scoreBoardColor()
}

//  +3 guest button
function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    scoreBoardColor()
}

//  +1 home foul
function increaseHomeFoul() {
    homeFoul += 1
    homeFoulEl.textContent = homeFoul
}

//  +1 guest foul
function increaseGuestFoul() {
    guestFoul += 1
    guestFoulEl.textContent = guestFoul
}


function gameStart() {
    // let newGame = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeFoulEl.textContent = 0
    guestFoulEl.textContent = 0
    homeFoul = 0
    guestFoul = 0
    guestScore = 0
    homeScore = 0
    homeScoreEl.classList.remove("losing", "winning", "draw");
    guestScoreEl.classList.remove("winning", "losing", "draw");
    // console.log(newGame)
    // document.getElementById("new-game-button").newGame = 0
}

/* function scoreColor() {
if (homeScore < guestScore) {
    homeScoreEl.backGroundColor = "darksalmon";
} else {
    homeScoreEl.backGroundColor = "green";
}
}
scoreColor();*/

// creating a function to highlight the score board color
function scoreBoardColor()  {
    if(homeScore > guestScore) {
        homeScoreEl.classList.remove("losing", "draw")
        guestScoreEl.classList.remove("winning", "draw")
        homeScoreEl.classList.add("winning")
        guestScoreEl.classList.add("losing")
        
    } else if(homeScore < guestScore) {
        homeScoreEl.classList.remove("winning", "draw")
        guestScoreEl.classList.remove("losing", "draw")
        homeScoreEl.classList.add("losing")
        guestScoreEl.classList.add("winning")
        
    } else if(homeScore = 0 & guestScore == 0) {
        homeScoreEl.classList.remove("losing", "draw", "winning")
        guestScoreEl.classList.remove("winning", "draw", "losing")
        
    } else {
        homeScoreEl.classList.remove("losing", "winning")
        guestScoreEl.classList.remove("winning", "losing")
        homeScoreEl.classList.add("draw")
        guestScoreEl.classList.add("draw")
    }
}
