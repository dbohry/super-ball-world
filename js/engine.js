var BACKGROUND_COLOR = "#80daff",
    CANVAS_STYLE = "1px solid #000",
    HEIGHT,
    WIDTH,
    MAX_JUMPS = 3,
    FRAME = 0;

var canvas,
    ctx,
    lastRun;

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
    canvas.style.border = CANVAS_STYLE;

    ctx = canvas.getContext("2d")

    document.body.appendChild(canvas);
    document.addEventListener("mousedown", click);

    loop();

}

function click(evt) {
    player.Jump();
}

function loop() {
    refresh();
    draw();
    fps.Calc();

    window.requestAnimationFrame(loop);
}

function draw() {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    fps.Draw();
    ground.Draw();
    block.Draw();
    player.Draw();
}

function refresh() {
    FRAME++;

    player.Refresh();
}

main();