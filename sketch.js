class Shar {
    constructor(x, y, w, h, speed, vx, vy) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.vx = vx;
        this.vy = vy;
    }
}

const shar_1 = new Shar(50, 50, 80, 80, 1, 1, 1);
const shar_2 = new Shar(150, 50, 80, 80, 2, -1, 1);

const box = {
    width: 600,
    height: 400,
}

function setup() {
    createCanvas(box.width, box.height);
    background(51);
}
  
function draw() {
    background(220);
    ellipse(shar_1.x, shar_1.y, shar_1.w, shar_1.h);
    ellipse(shar_2.x, shar_2.y, shar_2.w, shar_2.h);
    let xCoords = shar_2.x - shar_1.x;
    let yCoords = shar_2.y - shar_1.y;
    let radius = shar_1.w / 2 + shar_2.w / 2;


    if (Math.pow(radius, 2) >= (Math.pow(xCoords, 2) + Math.pow(yCoords, 2))) {
        console.log("ichida");
        shar_1.speed = 0;
        shar_2.speed = 0;
    }

    if ((shar_1.x === (box.width - shar_1.h / 2) && shar_1.vx === 1) || (shar_1.x === shar_1.h / 2 && shar_1.vx === -1)) {
        shar_1.vx = shar_1.vx * (-1);
    }
    if ((shar_1.y === (box.height - shar_1.h / 2) && shar_1.vy === 1) || (shar_1.y === shar_1.h / 2 && shar_1.vy === -1)) {
        shar_1.vy = shar_1.vy * (-1);
    }

    if ((shar_2.x === (box.width - shar_2.h / 2) && shar_2.vx === 1) || (shar_2.x === shar_2.h / 2 && shar_2.vx === -1)) {
        shar_2.vx = shar_2.vx * (-1);
    }
    if ((shar_2.y === (box.height - shar_2.h / 2) && shar_2.vy === 1) || (shar_2.y === shar_2.h / 2 && shar_2.vy === -1)) {
        shar_2.vy = shar_2.vy * (-1);
    }

    shar_1.x = shar_1.x + shar_1.vx * shar_1.speed;
    shar_1.y = shar_1.y + shar_1.vy * shar_1.speed;
    shar_2.x = shar_2.x + shar_2.vx * shar_2.speed;
    shar_2.y = shar_2.y + shar_2.vy * shar_2.speed;
    //     if (Math.pow((el.w / 2 + el.w / 2), 2) === Math.pow((el.y - el.y), 2) + Math.pow((el.x - el.x), 2)) {
    //         console.log("chich");
    //     }
}