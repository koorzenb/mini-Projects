const WIDTH = 2500;
const HEIGHT = 2500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = HEIGHT;
canvas.width = WIDTH;
let analyzer;

async function getAudio() {
    const stream = await navigator.mediaDevices.getUserMedia({audio:true});
    const audioCtx = new AudioContext();
    analyzer = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyzer);
} 