var canvas,
    ctx,
    ctxFps,
    HEIGHT,
    WIDTH,
    frame = 0,
    fps = 0,
    lastRun,
    ground = {};

function main() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    if (WIDTH >= 500) {
        WIDTH = 600;
        HEIGHT = 600;
    }

    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d")
    ctxFps = canvas.getContext("2d")

    document.body.appendChild(canvas);
    document.addEventListener("mousedown", click);

    loop();

}

function click(evt) {
    alert(evt);
}

function loop() {
    refresh();
    draw();
    calcFps();
    window.requestAnimationFrame(loop);
}

function calcFps() {
    if (!lastRun) {
        lastRun = new Date().getTime();
        window.requestAnimationFrame(loop);
        return;
    }
    var delta = (new Date().getTime() - lastRun) / 1000;
    lastRun = new Date().getTime();
    fps = Math.round(1 / delta);
}

function draw() {
    ctx.fillStyle = "#50beff";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    drawFps();
}

function drawFps() {
    ctxFps.fillStyle = "#000";
    ctxFps.font = "normal 16pt Arial";
    ctxFps.fillText(fps + " fps", 10, 26);
}

function refresh() {
    frame++;
}

main();