let speed = 2;
let scale = 0.03; // Image scale
let canvas;
let ctx;
let logoColor;

let turtle = {
    x: 200,
    y: 300,
    xspeed: 2,
    yspeed: 2,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("turtle-grazing-area");

    //Draw the "grazing area"
    canvas.setAttribute('height', ht+"px");
    canvas.setAttribute('width', wdt+"px");
    ctx = canvas.getContext("2d");
    turtle.img.src = 'images/turtle-right.png';
    
    parentdiv = document.getElementById("turtle-friend")
    canvas.width  = parentdiv.clientWidth - parseInt(parentdiv.style.paddingLeft) - parseInt(parentdiv.style.paddingRight);
    canvas.height = parentdiv.clientHeight - parseInt(parentdiv.style.paddingTop) - parseInt(parentdiv.style.paddingBottom);
    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#027243'; //'#f8faf9';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw turtle and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(turtle.x, turtle.y, turtle.img.width*scale, turtle.img.height*scale);
        ctx.drawImage(turtle.img, turtle.x, turtle.y, turtle.img.width*scale, turtle.img.height*scale);
        //Move the turtle
        turtle.x+=turtle.xspeed;
        turtle.y+=turtle.yspeed;
        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(turtle.x+turtle.img.width*scale >= canvas.width || turtle.x <= 0){
        turtle.xspeed *= -1;
    }
        
    if(turtle.y+turtle.img.height*scale >= canvas.height || turtle.y <= 0){
        turtle.yspeed *= -1;
    }    
}
