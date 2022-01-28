const canvas = document.querySelector('canvas');
canvas.width = 768;
canvas.height = 576;
const ctx = canvas.getContext('2d');
const text = [
    'I love bananas, bananas',
    'are good for me, they are',
    'good for you! Eat the',
    'brown part of the banana',
    'too! Bananas are so rich',
    'with potassium, that they',
    'also produce potassium-40,',
    'an unstable naturally',
    'occuring isotope. Meaning',
    'the average banana,',
    'produces a positron (anti-',
    'matter particle) every',
    '75 minutes!'
];

draw();

/* Draws all images the the screen */
function draw() {
    drawGround();
    drawBananas();
    addMonkey();
    drawBubble();
    addText(text, 418, 320, 15);
}

/* Draw a monkey image to canvas and crop */
function addMonkey() {
    const img = new Image();
    img.src = 'img/monkey.jpg';
    img.alt = 'A monkey in a tree';
    img.onload = () => {
        ctx.drawImage(
            img, 
            200, 100,
            210, 800,
            100, 0,
            200, 600
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
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

/* Spawns a lot of bananas all over the place (it's bananas) */
function drawBananas() {
    const amountOfBananas = Math.random() * (100 - 20) + 20;
    for (let i = 0; i < amountOfBananas; i++) {
        const x = Math.random() * ((canvas.width - 75) - 10) + 10;
        const y = Math.random() * ((canvas.height - 75) - 10) + 10;
        drawBanana(x, y);
    }
}

/* Draws the ground Rect */
function drawGround() {
    /* Requirement: Rectangle */
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 10;
    ctx.strokeRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);
    ctx.fillRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);
    ctx.stroke();
}

/* Draws the comic-style text buddle */
function drawBubble() {
    ctx.fillStyle = '#fff';
    // make the backing for the main bubble
    ctx.beginPath();
    ctx.arc(525, 400, 152, 0, 2 * Math.PI);
    ctx.stroke();
    // make the triangle part
    /* Requirement: A shape created by a combination of line segments */
    ctx.beginPath()
    ctx.moveTo(300, 325);
    ctx.lineTo(500, 300);
    ctx.lineTo(425, 475);
    ctx.lineTo(300, 325);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // make the cirle part
    /* Requirement: Arc */
    ctx.beginPath();
    ctx.arc(525, 400, 150, 0, 2 * Math.PI);
    ctx.fill();
}

/* Adds text[] to canvas at (x, y), each ele of text array is a new line */
function addText(text, x, y, fontSize) {
    ctx.fillStyle = '#000';
    ctx.font = `${fontSize}px Mochiy Pop P One`;
    for (let i = 0; i < text.length; i++) {
        ctx.fillText(text[i], x, y + (i * fontSize));
    }
}
