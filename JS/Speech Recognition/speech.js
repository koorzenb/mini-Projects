import { handleResult } from "./handlers";
 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

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
    08:52
}

start();