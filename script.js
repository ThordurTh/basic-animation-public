// window.addEventListener("load", start);
document.querySelector("#music").volume = 0.8; 
document.querySelector("#hit").volume = 1; 
document.querySelector("#bling").volume = 0.8; 
document.querySelector("#choose").volume = 0.8;
document.querySelector("#explosion").volume = 0.4; 
document.querySelector("#alienDown").volume = 0.2; 





function showInstructions() {
    playChoose();
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#title").classList.add("hidden");
    document.querySelector("#happyAlien").classList.add("hidden");
    document.querySelector("#sadAlien").classList.add("hidden");
    document.querySelector("#normalMeteoroid").classList.add("hidden");
    document.querySelector("#happyMeteoroid").classList.add("hidden");
    document.querySelector("#sadMeteoroid").classList.add("hidden");
    document.querySelector("#showInstructions").classList.add("hidden");

}

function backToMenu() {
    playChoose();
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#title").classList.remove("hidden");
    document.querySelector("#happyAlien").classList.remove("hidden");
    document.querySelector("#normalMeteoroid").classList.remove("hidden");
    document.querySelector("#showInstructions").classList.remove("hidden");
    document.querySelector("#background").classList.remove("background2");
    document.querySelector("#background").classList.add("background1");
    document.querySelector("#win").classList.add("winHidden");
    document.querySelector("#lose").classList.add("loseHidden");
    document.querySelector("#mainMenu").classList.add("hidden");
    document.querySelector(".start").classList.remove("hidden");
    document.querySelector("#sadMeteoroid").classList.add("hidden");
    document.querySelector("#sadAlien").classList.add("hidden");
    document.querySelector("#happyMeteoroid").classList.add("hidden");
}


let music = document.querySelector("#music");
music.pause();
hit.pause();

let choose = document.querySelector("#choose");
    function playChoose() {
        var sound = document.getElementById('sound');
        if (sound.src.match("assets/sound-on.svg")) {
            choose.play();
        }
        else {
            sound.src = "assets/sound-off.svg";
            choose.pause();
        }
    }  

function soundOnOff() {
    var sound = document.getElementById('sound');
    playChoose();
    if (sound.src.match("assets/sound-off.svg")) {
        sound.src = "assets/sound-on.svg";
        music.play();
    }
    else {
        sound.src = "assets/sound-off.svg";
        music.pause();
    }
}      
// GAME START
function startGame() {
    playChoose();

    let hit = document.querySelector("#hit");
    function playHit() {
        var sound = document.getElementById('sound');
        if (sound.src.match("assets/sound-on.svg")) {
            hit.load();
            hit.play();
        }
        else {
            sound.src = "assets/sound-off.svg";
            hit.pause();
        }
    }  

    
    let bling = document.querySelector("#bling");
    function playBling() {
        var sound = document.getElementById('sound');
        if (sound.src.match("assets/sound-on.svg")) {
            bling.play();
        }
        else {
            sound.src = "assets/sound-off.svg";
            bling.pause();
        }
    }  
    let explosion = document.querySelector("#explosion");
    function playExplosion() {
        var sound = document.getElementById('sound');
        if (sound.src.match("assets/sound-on.svg")) {
            explosion.play();
        }
        else {
            sound.src = "assets/sound-off.svg";
            explosion.paused();
        }
    }  
    let alienDown = document.querySelector("#alienDown");
    function playAlienDown() {
        var sound = document.getElementById('sound');
        if (sound.src.match("assets/sound-on.svg")) {
            alienDown.play();
        }
        else {
            sound.src = "assets/sound-off.svg";
            alienDown.paused();
        }
    }  
    
    
    document.querySelector("#mainMenu").classList.add("hidden");
    document.querySelector("#showInstructions").classList.add("hidden");
    document.querySelector("#title").classList.add("hidden");
    document.querySelector("#happyAlien").classList.add("hidden");
    document.querySelector("#sadAlien").classList.add("hidden");
    document.querySelector("#normalMeteoroid").classList.add("hidden");
    document.querySelector("#happyMeteoroid").classList.add("hidden");
    document.querySelector("#sadMeteoroid").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");


    let lives = 3;
    let score = 0;
    document.querySelector("#background").classList.remove("background2");
    document.querySelector("#background").classList.add("background1");
    document.querySelector("#timeBar").classList.add("timeBar");
    document.querySelector(".ui").classList.remove("uiHidden");
    document.querySelector("#win").classList.add("winHidden");
    document.querySelector("#lose").classList.add("loseHidden");
    document.querySelector(".start").classList.add("hidden");

    // Meteoroid Animation
    let meteoroidNumber = Math.floor(Math.random() * 8 + 1)

    document.querySelector("#meteoroid").classList.add("aniPos" + meteoroidNumber);

    document.querySelector("#meteoroid").addEventListener("click", addPoint);

    document.querySelector("#meteoroid").addEventListener("animationend", meteoAniEnd);

    function meteoAniEnd() {
        // console.log("LOOOSE");
        let meteoroidNumber = Math.floor(Math.random() * 8 + 1)
        document.querySelector("#meteoroid").classList.value = "";
        document.querySelector("#meteoroid").offsetHeight;
        document.querySelector("#meteoroid").classList.add("aniPos" + meteoroidNumber);
        console.log("meteoroidPos" + meteoroidNumber);    
        lives--;
        playExplosion();
        document.querySelector("#lives").textContent = " x " + lives;

        // console.log(lives);
        lose();
    }


function addPoint() {
    let meteoroidNumber = Math.floor(Math.random() * 8 + 1)
    score++;
    document.querySelector("#points").textContent = " x " + score;
    document.querySelector("#meteoroid").classList.value = "";
    document.querySelector("#meteoroid").offsetHeight;
    document.querySelector("#meteoroid").classList.add("aniPos" + meteoroidNumber);
    console.log("meteoroidPos" + meteoroidNumber);
    win();
    playHit();
}

// Alien Animation
let alienNumber = Math.floor(Math.random() * 8 + 1);
console.log(alienNumber);

document.querySelector("#alien").classList.add("aniAlienPos" + alienNumber);

document.querySelector("#alien").addEventListener("click", loseLive);

document.querySelector("#alien").addEventListener("animationend", aliAniEnd);



function aliAniEnd() {
    let alienNumber = Math.floor(Math.random() * 8 + 1);
    document.querySelector("#alien").classList.value = "";
    document.querySelector("#meteoroid").offsetHeight;
    document.querySelector("#alien").classList.add("aniAlienPos" + alienNumber);
    console.log(alienNumber);
    lives++;
    playBling();
    document.querySelector("#lives").textContent = " x " + lives;

}



function loseLive() {
    let alienNumber = Math.floor(Math.random() * 8 + 1);
    lives--;
    document.querySelector("#lives").textContent = " x " + lives;
    document.querySelector("#alien").classList.value = "";
    document.querySelector("#meteoroid").offsetHeight;
    document.querySelector("#alien").classList.add("aniAlienPos" + alienNumber);
    lose();
    playAlienDown();
    playHit();
}

// TIMER
document.querySelector(".timeBar").addEventListener("animationend", timer);

function timer() {
    document.querySelector("#meteoroid").classList.value = "";
    document.querySelector("#alien").classList.value = "";
    document.querySelector("#lose").classList.value = "";
    console.log("Time's up");
}
function reset() {
    lives = 3;
    score = 0;
    console.log(lives);
    document.querySelector("#lives").textContent = " x " + lives;
    document.querySelector("#points").textContent = " x " + score;
    document.querySelector("#meteoroid").removeEventListener("click", addPoint);
    document.querySelector("#meteoroid").removeEventListener("animationend", meteoAniEnd);
    document.querySelector("#alien").removeEventListener("click", loseLive);
    document.querySelector("#alien").removeEventListener("animationend", aliAniEnd);
    console.log("Game Reset")
    document.querySelector("#mainMenu").classList.remove("hidden");
}

function lose() {
    if (lives < 1) {
        document.querySelector(".timeBar").classList.add("timerPause");
        document.querySelector("#meteoroid").classList.value = "";
        document.querySelector("#alien").classList.value = "";
        document.querySelector("#lose").classList.value = "";
        document.querySelector("#background").classList.remove("background1");
        document.querySelector("#background").classList.add("background2");
        document.querySelector(".ui").classList.add("uiHidden");
        document.querySelector("#happyMeteoroid").classList.remove("hidden");
        document.querySelector("#sadAlien").classList.remove("hidden");
        reset();
    }
}

function win() {
    if (score > 9) {
        document.querySelector(".timeBar").classList.add("timerPause");
        document.querySelector("#meteoroid").classList.value = "";
        document.querySelector("#alien").classList.value = "";
        document.querySelector("#win").classList.value = "";
        document.querySelector(".ui").classList.add("uiHidden");
        document.querySelector("#happyAlien").classList.remove("hidden");
        document.querySelector("#sadMeteoroid").classList.remove("hidden");
        reset();
    }
}




}