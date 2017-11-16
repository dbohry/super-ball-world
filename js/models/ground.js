ground = {
    y: 550,
    height: 50,
    color: "#e8da78",

    Draw: function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, this.y, WIDTH, this.height);
    }
}