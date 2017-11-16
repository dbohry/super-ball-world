block = {
    _blocks: [],
    _colors: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", " #78ff5d"],

    Insert: function () {
        this._blocks.push({
            x: WIDTH,
            width: 30 + Math.floor(20 * Math.random()),
            height: 30 + Math.floor(100 * Math.random()),
            color: this._colors[Math.floor(5 * Math.random())]
        });
    },
    Refresh: function () {

    },
    Draw: function () {
        for (var i = 0, size = this._blocks.length; i < size; i++) {
            var b = this._blocks[i];
            CTX.fillStyle = b.color;
            CTX.fillRect(b.x, ground.y - b.height, b.width, b.height);
        }
    }
}