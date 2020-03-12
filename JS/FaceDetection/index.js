const faceDetector = new window.FaceDetector();
const video = document.querySelector('video.webcam');
const canvas = document.querySelector('canvas.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('canvas.face');
const faceCtx = faceCanvas.getContext('2d');
const SCALE = 1.2;
const SIZE = 10;