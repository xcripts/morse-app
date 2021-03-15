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
let TimeSection = document.querySelector(".time");

// functions
function getMorseScreen() {
    return morseScreen.innerText;
}
function setMorseScreen(m) {
    morseScreen.innerHTML += m;
}
function clrMorseScreen() {
    morseScreen.innerText = '';
}
function getTextScreen() {
    return textScreen.innerText;
}
function setTextScreen(t) {
    textScreen.innerHTML += t;
}
function clrTextScreen() {
    textScreen.innerText = '';
}

let flag1, flag2;

// ...morse button mousedown event
morseBtn.addEventListener("mousedown", function() {

    beep.play();
    
    flag1 = new Date().getTime();

    if(active) {
        clearTimeout(mt);
        clearTimeout(st);
    } 
    // style
    this.style.width = "90px";
    this.style.height = "90px";
    // morseScreen.style.boxShadow = "inset 0px -20px 20px rgba(0, 248, 0, 0.1)"

});

// ..morse button mouseup even
morseBtn.addEventListener("mouseup", function() {
    beep.pause();
    beep.currentTime = 0.1;
    flag2 = new Date().getTime();
    let passed = flag2 - flag1;
    if (passed < 150) {
        setMorseScreen(".");
    } else if (passed < 450) {
        setMorseScreen("-");
    }

    mt = setTimeout(() => { // translate morse 
        let index = morseAlph.indexOf(getMorseScreen());
        if (morseAlph.includes(getMorseScreen())) {
            setTextScreen(alph[index]);
        }

        clrMorseScreen();
        // morseScreen.style.boxShadow = "inset 0px 0px 0px rgba(0, 248, 0, 0.0)";
    }, 400);
    
    st = setTimeout(() => {setTextScreen('&nbsp');}, 1050); // blank space
   
    active = true;
    // style
    this.style.width = "100px";
    this.style.height = "100px";
    
});


// ..clear button events
clearBtn.addEventListener("mousedown", function() {
    textScreen.innerText = '';
    clearTimeout(st);
    // style
    this.style.width = "45px";
    this.style.height = "45px";
});

clearBtn.addEventListener("mouseup", function() {
    // style
    this.style.width = "50px";
    this.style.height = "50px";
});


// ..delete button events
deleteBtn.addEventListener("mousedown", function() {
    let text = getTextScreen();
    text = text.slice(0, -1);
    clrTextScreen();
    setTextScreen(text);
    // style
    this.style.width = "45px";
    this.style.height = "45px";
});

deleteBtn.addEventListener("mouseup", function() {
    // style
    this.style.width = "50px";
    this.style.height = "50px";
});


setInterval(() => { // display time
    TimeSection.innerText = Date().substring(16, 24);
}, 1000);
