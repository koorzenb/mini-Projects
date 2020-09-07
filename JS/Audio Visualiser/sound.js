const WIDTH = 2500;
const HEIGHT = 2500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = HEIGHT;
canvas.width = WIDTH;
let analyzer;
let bufferLength;

function handleError(err) {
    console.error("Please give access to mic in order to proceed");
}

async function getAudio() {
    const stream = await navigator.mediaDevices.getUserMedia({audio:true}).catch(handleError);
    const audioCtx = new AudioContext();
    analyzer = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyzer);
    analyzer.fftSize = 2 ** 10;
    bufferLength = analyzer.frequencyBinCount; 
    const timeData = new Uint8Array(bufferLength);
    const frequencyData = new Uint8Array(bufferLength);
    drawTimeData(timeData);
} 
// until 29:00

function drawTimeData(timeData) {
    analyzer.getByteTimeDomainData(timeData);
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#ffc600';
    ctx.beginPath();
    const sliceWidth = WIDTH/ bufferLength;
    let x = 0;
    timeData.forEach((data, i) => {
        const v = data / 128;
        const y = (v*HEIGHT)/2;
        
        if(i===0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y)
        }
        x += sliceWidth;
    })
    ctx.stroke();
    requestAnimationFrame(() => drawTimeData(timeData))
    
}

getAudio();