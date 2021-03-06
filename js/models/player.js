player = {
    x: 50,
    y: 0,
    height: 50,
    width: 50,
    color: "#ff9239",
    gravity: 1.6,
    velocity: 0,
    jumpforce: 23.6,
    jumps: 0,

    refresh: function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > ground.y - this.height && STATUS_NOW != STATUS.game_over) {
            this.y = ground.y - this.height;
            this.jumps = 0;
            this.velocity = 0;
        }
    },
    jump: function () {
        if (this.jumps < MAX_JUMPS) {
            this.velocity = -this.jumpforce;
            this.jumps++;
        }
    },
    draw: function () {
        CTX.fillStyle = this.color;
        CTX.fillRect(this.x, this.y, this.width, this.height);
    }
}
