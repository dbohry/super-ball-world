var canvas,
    ctx,
    HEIGHT,
    WIDTH,
    frame = 0,
    lastRun,
    maxJumps = 3;

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

    document.body.appendChild(canvas);
    document.addEventListener("mousedown", click);

    loop();

}

function click(evt) {
    block.Jump();
}

function loop() {
    refresh();
    draw();
    fps.Calc();
    
    window.requestAnimationFrame(loop);
}

function draw() {
    ctx.fillStyle = "#50beff";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    
    fps.Draw();
    ground.Draw();
    block.Draw();
}

function refresh() {
    frame++;

    block.Refresh();
}

main();