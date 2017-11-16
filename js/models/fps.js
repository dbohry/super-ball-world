fps = {
    value: 0,
    font: "normal 16pt Arial",
    color: "#000",
    calc: function () {
        if (!lastRun) {
            lastRun = new Date().getTime();
            window.requestAnimationFrame(loop);
            return;
        }
        var delta = (new Date().getTime() - lastRun) / 1000;
        lastRun = new Date().getTime();
        this.value = Math.round(1 / delta);
    },
    draw: function () {
        ctx.fillStyle = this.color;
        ctx.font = this.font;
        ctx.fillText(this.value + " fps", 10, 26);
    }
}