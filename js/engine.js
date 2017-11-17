var BACKGROUND_COLOR = "#80daff",
    CANVAS_STYLE = "1px solid #000",
    HEIGHT,
    WIDTH,
    MAX_JUMPS = 3,
    FRAME = 0,
    CTX = {},
    VELOCITY = 6,
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
        document.addEventListener("mousedown", this.Click);

        STATUS_NOW = STATUS.ready;
        Loop();
    },
    Click: function (evt) {
        if (STATUS_NOW == STATUS.playing) {
            player.jump();
        } else if (STATUS_NOW == STATUS.ready) {
            STATUS_NOW = STATUS.playing;
        } else if (STATUS_NOW == STATUS.game_over && player.y >= HEIGHT) {
            STATUS_NOW = STATUS.ready;
            player.velocity = 0;
            player.y = 0;
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
    if (STATUS_NOW == STATUS.playing) {
        block.refresh();
    } else if (STATUS_NOW == STATUS.game_over) {
        block.clean();
    }
}

function Draw() {
    CTX.fillStyle = BACKGROUND_COLOR;
    CTX.fillRect(0, 0, WIDTH, HEIGHT);

    fps.draw();

    if (STATUS_NOW == STATUS.ready) {
        CTX.fillStyle = "green";
        CTX.fillRect(WIDTH / 2 - 50, HEIGHT / 2 - 50, 100, 100);
    }

    if (STATUS_NOW == STATUS.game_over) {
        var IMG_GAME_OVER = new Image();
        IMG_GAME_OVER.src = "./img/game_over.png";

        CTX.fillStyle = "red";
        CTX.fillRect(WIDTH / 2 - 50, HEIGHT / 2 - 50, 100, 100);
    }

    if (STATUS_NOW == STATUS.playing) {
        block.draw();
    }
    
    ground.draw();
    player.draw();
}

main.start();