const cSmall = document.getElementById('canvasSmall');
const ctxSmall = cSmall.getContext('2d');

const cZoom = document.getElementById('canvasZoom');
const ctxZoom = cZoom.getContext('2d');

const img = new Image();
img.crossOrigin = "Anonymous";
img.src = 'https://picsum.photos/1920/1080?random=2'; 

const ratio = 3; 

img.onload = function() {
    ctxSmall.drawImage(img, 0, 0, cSmall.width, cSmall.height);
};

cSmall.addEventListener('mousemove', function(e) {
    const rect = cSmall.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const sourceX = mouseX * ratio - (cZoom.width / 2);
    const sourceY = mouseY * ratio - (cZoom.height / 2);

    ctxZoom.clearRect(0, 0, cZoom.width, cZoom.height);
    ctxZoom.drawImage(
        img,
        sourceX, sourceY, cZoom.width, cZoom.height, 
        0, 0, cZoom.width, cZoom.height             
    );
    
    ctxZoom.beginPath();
    ctxZoom.strokeStyle = "red";
    ctxZoom.lineWidth = 2;
    ctxZoom.strokeRect(0, 0, cZoom.width, cZoom.height);

   
    ctxSmall.drawImage(img, 0, 0, cSmall.width, cSmall.height);

    const radius = (cZoom.width / 2) / ratio;

    ctxSmall.beginPath();
    ctxSmall.arc(mouseX, mouseY, radius, 0, Math.PI * 2);
    ctxSmall.strokeStyle = "rgba(200, 200, 200, 0.8)";
    ctxSmall.lineWidth = 2;
    ctxSmall.stroke();
    ctxSmall.fillStyle = "rgba(128, 128, 128, 0.2)";
    ctxSmall.fill();
});

cSmall.addEventListener('mouseleave', function() {
    ctxSmall.drawImage(img, 0, 0, cSmall.width, cSmall.height);
    ctxZoom.clearRect(0, 0, cZoom.width, cZoom.height);
});