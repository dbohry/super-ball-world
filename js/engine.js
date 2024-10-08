let BACKGROUND_COLOR = "#80daff",
    CANVAS_STYLE = "1px solid #000",
    HEIGHT,
    WIDTH,
    MAX_JUMPS = 2,
    FRAME = 0,
    CTX = {},
    VELOCITY = 3,
    STATUS_NOW,
    STATUS = {
        ready: 0,
        playing: 1,
        game_over: 2
    };

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

        document.addEventListener("mousedown", this.handleInput.bind(this));
        document.addEventListener("keydown", this.handleInput.bind(this));

        STATUS_NOW = STATUS.ready;
        Loop();
    },
    handleInput: function (evt) {
        if (evt.type === 'mousedown' || evt.code === 'Space' || evt.code === 'Enter') {
            if (STATUS_NOW === STATUS.playing) {
                player.jump();
            } else if (STATUS_NOW === STATUS.ready) {
                STATUS_NOW = STATUS.playing;
            } else if (STATUS_NOW === STATUS.game_over && player.y >= HEIGHT) {
                STATUS_NOW = STATUS.ready;
                player.velocity = 0;
                player.y = 0;
            }
        }
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
    if (STATUS_NOW === STATUS.playing) {
        block.refresh();
    } else if (STATUS_NOW === STATUS.game_over) {
        block.clean();
    }
}

const IMG_GAME_OVER = new Image();
IMG_GAME_OVER.src = "../img/game_over.png";

const IMG_GAME_START = new Image();
IMG_GAME_START.src = "../img/game_start.png";

function Draw() {
    CTX.fillStyle = BACKGROUND_COLOR;
    CTX.fillRect(0, 0, WIDTH, HEIGHT);

    fps.draw();
    points.draw();

    if (STATUS_NOW === STATUS.ready) {
        if (IMG_GAME_START.complete) {
            CTX.drawImage(IMG_GAME_START, WIDTH / 2 - 50, HEIGHT / 2 - 50, 100, 100);
        } else {
            CTX.fillStyle = "green";
            CTX.fillRect(WIDTH / 2 - 50, HEIGHT / 2 - 50, 100, 100);
        }

        points.restart();
    }

    if (STATUS_NOW === STATUS.game_over) {
        if (IMG_GAME_OVER.complete) {
            CTX.drawImage(IMG_GAME_OVER, WIDTH / 2 - 50, HEIGHT / 2 - 50, 100, 100);
        } else {
            CTX.fillStyle = "red";
            CTX.fillRect(WIDTH / 2 - 50, HEIGHT / 2 - 50, 100, 100);
        }
    }

    if (STATUS_NOW === STATUS.playing) {
        block.draw();
        points.calc();
    }

    ground.draw();
    player.draw();
}

main.start();