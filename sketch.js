const shar = [
    {x: 50, y: 50, w: 80, h: 80, speed: 1, vx: 1, vy: 1},
    {x: 150, y: 50, w: 80, h: 80, speed: 2, vx: 1, vy: 1},
]

function setup() {
    createCanvas(400, 400);
    background(51);
}
  
function draw() {
    background(220);
    shar.forEach(el => {
        ellipse(el.x, el.y, el.w, el.h);
        if ((el.x === 400 - el.h / 2 && el.vx === 1) || (el.x === el.h / 2 && el.vx === -1)) el.vx = el.vx * (-1);
        if ((el.y === 400 - el.w / 2 && el.vy === 1) || (el.y === el.w / 2 && el.vy === -1)) el.vy = el.vy * (-1);
        el.x = el.x + el.vx * el.speed;
        el.y = el.y + el.vy * el.speed;
    });
}