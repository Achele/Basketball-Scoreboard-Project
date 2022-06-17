let homeScore = 0
let guestScore = 0
let guestFoul = 0
let homeFoul = 0
// let newGame = 0
// let newGameEl = document.getElementById("new-game")
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeFoulEl = document.getElementById("home-foul")
let guestFoulEl = document.getElementById("guest-foul")
// console.log(points)

function increaseHomeScoreOne() {
   homeScore += 1
    homeScoreEl.textContent = homeScore
}
// add1()
function increaseHomeScoreTwo() {
     homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
   homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne() {
     guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function increaseHomeFoul() {
    homeFoul += 1
    homeFoulEl.textContent = homeFoul
}

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
    // console.log(newGame)
    // document.getElementById("new-game-button").newGame = 0
}

// function scoreColor() {
// if (homeScore < guestScore) {
//     homeScoreEl.backGroundColor = "darksalmon";
// } else {
//     homeScoreEl.backGroundColor = "green";
// }
// }
// scoreColor();