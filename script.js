const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

/* Draw image to canvas */
function addMonkey() {
    const img = new Image();
    img.src = 'img/monkey.jpg';
    img.onload = () => {
        context.drawImage(
            img, 
            200, 100, //tilesheet x, y
            210, 800,  //how large of a grab
            100, 0, // where it is placed on the canvas
            55, 150 //size of the placement
        )
    }
}

function drawBanana() {
    
}

addMonkey();