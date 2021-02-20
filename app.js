const morseAlph = [
    ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
    ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
    ".--","-..-","-.--","--..","-----",".----","..---","...--","....-",
    ".....","-....","--...","---..","----.",".-.-.-","--..--","---...",
    "..--..",".----.","-....-","-..-.",".-..-.",".--.-.","-...-","---."
];

const alph = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "0","1","2","3","4","5","6","7","8","9",
    ".",",",":","?","'","-","/",'"',"@","=","!"
];

const beep = new Audio("snd/beep.wav");
var active = false;

// DOM
let morseBtn = document.getElementById("morse-btn");
let clearBtn = document.getElementById("clear-btn");
let deleteBtn = document.getElementById("delete-btn");
let morseScreen = document.getElementById("morse-screen");
let textScreen = document.getElementById("text-screen");

// functions
function getMorseScreen() {
    return morseScreen.innerText;
}
function setMorseScreen(m) {
    morseScreen.innerText += m;
}
function clrMorseScreen() {
    morseScreen.innerText = '';
}
function getTextScreen() {
    return textScreen.innerText;
}
function setTextScreen(t) {
    textScreen.innerText += t;
}
function clrTextScreen() {
    textScreen.innerText = '';
}

let flag1, flag2;
// morse button mousedown event
morseBtn.addEventListener("mousedown", function() {
    beep.play();
    flag1 = new Date().getTime();
    
    beep.currentTime = 0.1;
    
    if(active) {
        clearTimeout(mt);
        clearTimeout(st);
    } 
    // style
    this.style.width = "90px";
    this.style.height = "90px";
});

// morse button mouseup even
morseBtn.addEventListener("mouseup", function() {
    beep.pause();
    flag2 = new Date().getTime();
    let passed = flag2 - flag1;

    if (passed < 150) {
        setMorseScreen(".");
    } else {
        setMorseScreen("-");
    }

    mt = setTimeout(function() {
        
        let index = morseAlph.indexOf(getMorseScreen());
        if (morseAlph.includes(getMorseScreen())) {
            setTextScreen(alph[index]);
        }

        clrMorseScreen();
    }, 400);
    
    st = setTimeout(function() {
        setTextScreen("\u00A0"); // blank space
    }, 1000);

    active = true;
    // style
    this.style.width = "100px";
    this.style.height = "100px";
});


clearBtn.addEventListener("mousedown", function() {
    textScreen.innerText = '';
    // style
    this.style.width = "45px";
    this.style.height = "45px";
});

clearBtn.addEventListener("mouseup", function() {
    // style
    this.style.width = "50px";
    this.style.height = "50px";
});


deleteBtn.addEventListener("mousedown", function() {
    textScreen.innerText = '';
    // style
    this.style.width = "45px";
    this.style.height = "45px";
});

deleteBtn.addEventListener("mouseup", function() {
    // style
    this.style.width = "50px";
    this.style.height = "50px";
});

