var robo = document.getElementById("robo");
let idleImageNumber = 1;
let idleAnimationInterval = 0;

function idleAnimation() {
    robo.src = "resources/Idle (" + idleImageNumber + ").png";
    idleImageNumber++;
    if (idleImageNumber > 10) {
        idleImageNumber = 1;
    }
}

function idleAnimationStart() {
    idleAnimationInterval = setInterval(idleAnimation, 200);
}

let runImageNumber = 1;
let runAnimationInterval = 0;

function runAnimation() {
    robo.src = "resources/Run (" + runImageNumber + ").png";
    runImageNumber++;
    if (runImageNumber == 8) {
        runImageNumber = 1;
    }
}

function runAnimationStart() {
    clearInterval(idleAnimationInterval);
    runAnimationInterval = setInterval(runAnimation, 100);
}

function keycheck(event) {
    var keycode = event.which;
    if (keycode == 13) {
        if (runImageNumber === 1) {
            runAnimationStart();
        }
    }

    if(mbai == 0){
        mbai = setInterval(movebackground,100);
    }

}


var bpx =0;
var mbai =0;


function movebackground(){

    bpx = bpx -20;
    document.getElementById("back").style.backgroundPositionX = bpx + "px";
}