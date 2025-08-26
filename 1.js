var robo = document.getElementById("robo");
let idleImageNumber = 0;
let idleAnimationNumber = 0;


function idleAnimation() {
   
idleImageNumber = idleImageNumber + 1;
    

 

   if(idleImageNumber == 11){
        idleImageNumber =  1;
    }

robo.src = "resources/Idle (" + idleImageNumber + ").png";    


  }


function idleAnimationStart() {
    idleAnimationNumber = setInterval(idleAnimation,200);
}

