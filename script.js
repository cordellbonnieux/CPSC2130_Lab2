const canvas = document.querySelector('canvas');
canvas.width = 768;
canvas.height = 576;
const ctx = canvas.getContext('2d');

/* Draw image to canvas */
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

function drawBanana() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 5;
    ctx.moveTo(400,300);
    ctx.bezierCurveTo(450, 300, 510, 220, 480, 200);
    ctx.lineTo(490, 195);
    //ctx.LineTo();
    //ctx.bezierCurveTo(520, 300, 480, 300, 450, 300);
    ctx.stroke();
}

function drawGround() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);
}

function drawShapes() {
    drawGround();
    drawBanana();
    
}

drawShapes();
//addMonkey();