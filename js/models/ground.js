ground = {
    y: 550,
    height: 50,
    color: "#ffdf70",

    Draw: function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, this.y, WIDTH, this.height);
    }
}