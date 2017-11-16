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

    Refresh: function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > ground.y - this.height) {
            this.y = ground.y - this.height;
            this.jumps = 0;
        }
    },
    Jump: function () {
        if (this.jumps < MAX_JUMPS) {
            this.velocity = -this.jumpforce;
            this.jumps++;
        }
    },
    Draw: function () {
        CTX.fillStyle = this.color;
        CTX.fillRect(this.x, this.y, this.width, this.height);
    }
}
