const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();
console.log(video, canvas, faceCanvas, faceDetector);

// const optionsInputs = document.querySelectorAll(
//   '.controls input[type="range"]'
// );

// const options = {
//   SIZE: 10,
//   SCALE: 1.35,
// };

async function populateVideo(){
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {width: 1280, height: 720}
  });
  video.srcObject = stream;
  await video.play();
}

populateVideo();
got up to 19 min