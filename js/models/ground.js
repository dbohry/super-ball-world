ground = {
    y: 550,
    height: 50,
    color: "#e8da78",

    draw: function () {
        CTX.fillStyle = this.color;
        CTX.fillRect(0, this.y, WIDTH, this.height);
    }
}