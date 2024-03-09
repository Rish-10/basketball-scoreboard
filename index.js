let homePoints = 0 
let awayPoints = 0 

let theCurrentHomePoints = document.getElementById("home-points") 
let theCurrentAwayPoints = document.getElementById("away-points")

function onePointHome() {
    homePoints += 1
    theCurrentHomePoints.innerText = homePoints
}



function twoPointsHome() {
    homePoints += 2
    theCurrentHomePoints.innerText = homePoints
}



function threePointsHome() {
    homePoints += 3
    theCurrentHomePoints.innerText = homePoints
}





function onePointAway() {
    awayPoints += 1
    theCurrentAwayPoints.innerText = awayPoints
}



function twoPointsAway() {
    awayPoints += 2
    theCurrentAwayPoints.innerText = awayPoints
}



function threePointsAway() {
    awayPoints += 3
    theCurrentAwayPoints.innerText = awayPoints
}




function newGame() {
    homePoints = 0 
    awayPoints = 0 
    theCurrentHomePoints.innerText = 0  
    theCurrentAwayPoints.innerText = 0
}