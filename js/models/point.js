points = {
    font: "normal 14pt Arial",
    color: "#000",
    total: 0,
    calc: function() {
        this.total += 1;
    },
    draw: function () {
        CTX.fillStyle = this.color;
        CTX.font = this.font;
        CTX.fillText(this.total + " points", 510, 26);
    },
    restart: function () {
        this.total = 0;
    }
}