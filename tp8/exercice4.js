const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorBox = document.getElementById('colorBox');
const infos = document.getElementById('infos');

const img = new Image();
img.crossOrigin = "Anonymous"; 
img.src = 'https://picsum.photos/600/450?random=1'; 

img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    try {
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const r = pixel[0];
        const g = pixel[1];
        const b = pixel[2];
        const hex = rgbToHex(r, g, b);

        colorBox.style.backgroundColor = hex;

        infos.innerHTML = `RGB: (${r}, ${g}, ${b})<br>HEX: ${hex}`;
        
    } catch (error) {
        infos.innerHTML = "Erreur CORS";
    }
});