const videoElement = document.getElementById('preview');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('startButton');
let scanning = false;

function startScan() {
    const constraints = {
        video: {
            facingMode: "environment"
        }
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            videoElement.srcObject = stream;
            videoElement.setAttribute("playsinline", true); // Required to tell iOS Safari we don't want fullscreen
            videoElement.play();
            scanning = true;
            requestAnimationFrame(tick);
        });
}

function tick() {
    if (scanning) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, canvas.width, canvas.height);
        
        if (code) {
            resultElement.textContent = `Data: ${code.data}`;
            scanning = false; // Stop scanning once a QR code is found
            videoElement.srcObject.getTracks().forEach(track => track.stop()); // Stop the camera
        } else {
            requestAnimationFrame(tick);
        }
    }
}

startButton.addEventListener('click', startScan);

