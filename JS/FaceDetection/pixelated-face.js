const faceDetector = new window.FaceDetector();
const video = document.querySelector('video.webcam');
const canvas = document.querySelector('canvas.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('canvas.face');
const faceCtx = faceCanvas.getContext('2d');
const SCALE = 1.2;
const SIZE = 10;
console.log(video, canvas, faceCanvas, faceDetector);

got up to 35 censor
// const optionsInputs = document.querySelectorAll(
//   '.controls input[type="range"]'
// );

// const options = {
//   SIZE: 10,
//   SCALE: 1.35,
// };

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  console.log(video.width);
  
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  faces.forEach(drawFace);
  requestAnimationFrame(detect)
}

function drawFace(face) {
  const {width, height, top, left } = face.boundingBox;
  console.log({width, height, top, left });
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.strokeStyle = 'yellow';
ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height)
}

populateVideo().then(detect); 