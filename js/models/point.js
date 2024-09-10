points = {
    font: "normal 14pt Arial",
    color: "#000",
    total: 0,
    calc: function() {
        this.total += 1;

        if (this.total % 1000 === 0) {
            VELOCITY += 0.5;
            this.bonus();
        }

    },
    bonus: function() {
        this.total += 100;
    },
    draw: function () {
        CTX.fillStyle = this.color;
        CTX.font = this.font;
        CTX.fillText(this.total + " points", 10, 26);
    },
    restart: function () {
        this.total = 0;
        VELOCITY = 3
    }
}