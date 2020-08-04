import { handleResult } from "./handlers";
import { colors } from "./colors";
 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const colorsEl = document.querySelector(".colors");

function displayColors(myColors) {
    return myColors.map(color => {
        return `<span class='color' style="background: ${color}">${color}</span>`;
    }).join('');
    // 19:12 
}

function start(params) {
    if(!("SpeechRecognition" in window)) {
        console.log("sorry, speechRecog not supported");
        return;
    }
    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.interimResults = true;
    recog.onresult = handleResult;
    recog.start();
}

start();

const newCOlors = Object.keys(colors)
console.log(newCOlors);
colorsEl.innerHTML = displayColors(newCOlors);