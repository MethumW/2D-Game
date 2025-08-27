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
    if (runImageNumber > 7) { 
        runImageNumber = 1;
    }
}

function runAnimationStart() {
    clearInterval(idleAnimationInterval);
    clearInterval(runAnimationInterval); 
    runAnimationInterval = setInterval(runAnimation, 100);
}

function keycheck(event) {
    var keycode = event.which;
    if (keycode == 13) {
        if (runAnimationInterval === 0) {
            runAnimationStart();
        }
        if (mbai === 0) {
            mbai = setInterval(movebackground, 100);
        }
    }

    if (keycode == 32) {
        if (jumpAnimationNumber === 0) {
            jumpAnimationStart();
        }
        if (mbai === 0) {
            mbai = setInterval(movebackground, 100);
        }
    }
}

// backgroundposition-x = bpx
// movebackgroundanimationid = mbai
var bpx = 0;
var mbai = 0;

function movebackground() {
    bpx = bpx - 20;
    document.getElementById("back").style.backgroundPositionX = bpx + "px";
}

let jumpImageNumber = 1;
let jumpAnimationNumber = 0;
roboMarginTop = 500;


function jumpAnimation() {
    robo.src = "resources/Jump (" + jumpImageNumber + ").png";
    jumpImageNumber++;

if (jumpImageNumber <=6){
    roboMarginTop = roboMarginTop -15;
    robo.style.marginTop = roboMarginTop + "px";
    robo.style.marginTop = 200 + "px";

}

if(jumpImageNumber >= 7 && jumpImageNumber <= 10){
    roboMarginTop = roboMarginTop + 15;
    robo.style.marginTop = roboMarginTop + "px";
    robo.style.marginTop = 500 + "px";

}








    if (jumpImageNumber > 10) {
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        jumpImageNumber = 1;
        runAnimationStart();
    }
}

function jumpAnimationStart() {
    clearInterval(idleAnimationInterval);
    clearInterval(runAnimationInterval); 
    clearInterval(jumpAnimationNumber); 
    jumpImageNumber = 1;
    jumpAnimationNumber = setInterval(jumpAnimation, 100);
}