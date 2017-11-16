fps = {
    value: 0,
    font: "normal 16pt Arial",
    color: "#000",
    lastRun: {},
    
    calc: function () {
        if (!this.lastRun) {
            lastRun = new Date().getTime();
            window.requestAnimationFrame(Loop);
            return;
        }
        var delta = (new Date().getTime() - this.lastRun) / 1000;
        this.lastRun = new Date().getTime();
        this.value = Math.round(1 / delta);
    },
    draw: function () {
        CTX.fillStyle = this.color;
        CTX.font = this.font;
        CTX.fillText(this.value + " fps", 10, 26);
    }
}