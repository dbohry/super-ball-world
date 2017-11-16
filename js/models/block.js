block = {
    x: 50,
    y: 0,
    height: 50,
    width: 50,
    color: "#ff4e4e",
    gravity: 1.5,
    velocity: 0,
    jumpforce: 15,
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
        if (this.jumps < maxJumps) {
            this.velocity = -this.jumpforce;
            this.jumps++;
        }
    },
    Draw: function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
