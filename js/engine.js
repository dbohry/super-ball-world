var BACKGROUND_COLOR = "#80daff",
    CANVAS_STYLE = "1px solid #000",
    HEIGHT,
    WIDTH,
    MAX_JUMPS = 3,
    FRAME = 0,
    CTX = {};

main = {
    canvas: {},

    start: function () {
        HEIGHT = window.innerHeight;
        WIDTH = window.innerWidth;

        if (WIDTH >= 500) {
            WIDTH = 600;
            HEIGHT = 600;
        }

        this.canvas = document.createElement("canvas");
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.canvas.style.border = CANVAS_STYLE;

        CTX = this.canvas.getContext("2d")

        document.body.appendChild(this.canvas);
        document.addEventListener("mousedown", this.Click);

        Loop();
    },
    Click: function (evt) {
        player.jump();
    }
}

function Loop() {
    Refresh();
    Draw();
    fps.calc();

    window.requestAnimationFrame(Loop);
}

function Refresh() {
    FRAME++;
    player.refresh();
}

function Draw() {
    CTX.fillStyle = BACKGROUND_COLOR;
    CTX.fillRect(0, 0, WIDTH, HEIGHT);

    fps.draw();
    ground.draw();
    block.draw();
    player.draw();
}

main.start();