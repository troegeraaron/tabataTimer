var myMS = "0" + 0
var mySS = "0" + 0
var myMM = "0" + 0
var myStop;
var seconds = 3;
var begin;
document.getElementById("goRest").innerHTML = "Ready?";
document.getElementById("output").innerHTML = `${myMM}:${mySS}:${myMS}`
function myTimer() {
    myMS++
    if (myMS < 10){
        myMS = "0" + myMS;
    }
    if (myMS > 99){
        mySS++;
        myMS = "0" + 0;
        if (mySS < 10){
            mySS = "0" + mySS;
        }
    }
    if (myStop === "Go!"){
        if (mySS === 20){
            mySS = "0" + 0;
            myStop = "Rest";
        }
    } else if (myStop === "Rest") {
        if (mySS === 10){
            mySS = "0" + 0;
            myStop = "Go!";
            myMM++
            if (myMM < 10){
                myMM = "0" + myMM;
            }
        }
    }
    if (myMM === 8){
        stopTimer();
        myStop = "Finished"
    }
    document.getElementById("goRest").innerHTML = myStop;
    document.getElementById("output").innerHTML = `${myMM}:${mySS}:${myMS}`
}
function startTimer() {
    begin = setInterval(myTimer, 10)
    myStop = "Go!";
}
function preCount() {
    document.getElementById("goRest").innerHTML = seconds;
    let myFunc = setInterval(function() {
        seconds--;
        document.getElementById("goRest").innerHTML = seconds;
        if (seconds === 0) {
            clearInterval(myFunc);
        }
    }, 1000)
    myFunc;  
    let preCount = setTimeout(startTimer, 3000)   
}
function stopTimer() {
    clearInterval(begin);
    
}
function resetTimer() {
    clearInterval(begin);
    myMS = "0" + 0;
    mySS = "0" + 0;
    myMM = "0" + 0;
    seconds = 3;
    document.getElementById("goRest").innerHTML = "Ready?";
    document.getElementById("output").innerHTML = `${myMM}:${mySS}:${myMS}`
}