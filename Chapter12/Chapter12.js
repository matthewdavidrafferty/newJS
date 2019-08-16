var trainSpeed = 250;
var trainPosition = 0;
var animation;



var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", speedUp);


function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 5;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 660) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 760) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}