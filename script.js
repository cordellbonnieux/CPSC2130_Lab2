const canvas = document.querySelector('canvas');
canvas.width = 768;
canvas.height = 576;
const ctx = canvas.getContext('2d');

/* Draw a monkey image to canvas and crop */
function addMonkey() {
    const img = new Image();
    img.src = 'img/monkey.jpg';
    img.onload = () => {
        ctx.drawImage(
            img, 
            200, 100, //tilesheet x, y
            210, 800,  //how large of a grab
            100, 0, // where it is placed on the canvas
            200, 600 //size of the placement
        )
    }
}

/* Spawns a banana at (x, y) */
function drawBanana(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 5;
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(
        (x+50), y, 
        (x+110), (y-80), 
        (x+80), (y-100)
    );
    ctx.lineTo(x + 88, y - 110);
    ctx.bezierCurveTo(
        (x+150), y,
        (x+50),(y+10),
        x, y
        );
    ctx.fill();
    ctx.stroke();
}

/* Spawns a lot of bananas all over the place (it's bananas) */
function drawBananas() {
    const amountOfBananas = Math.random() * (100 - 20) + 20;
    for (let i = 0; i < amountOfBananas; i++) {
        const x = Math.random() * ((canvas.width - 75) - 75) + 75;
        const y = Math.random() * ((canvas.height - 75) - 75) + 75;
        drawBanana(x, y);
    }
}

/* Draws the ground Rect */
function drawGround() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);
}

/* Draws all images the the screen */
function draw() {
    drawGround();
    drawBananas();
    addMonkey();
}

draw();
