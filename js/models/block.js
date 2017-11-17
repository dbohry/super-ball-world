block = {
    _blocks: [],
    _colors: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", " #78ff5d"],
    insertionTime: 0,

    insert: function () {
        this._blocks.push({
            x: WIDTH,
            width: 30 + Math.floor(20 * Math.random()),
            height: 30 + Math.floor(100 * Math.random()),
            color: this._colors[Math.floor(5 * Math.random())]
        });

        this.insertionTime = 30 + Math.floor(40 * Math.random());
    },
    refresh: function () {
        if (this.insertionTime == 0)
            this.insert();
        else
            this.insertionTime--;

        for (var i = 0, size = this._blocks.length; i < size; i++) {
            var b = this._blocks[i];
            b.x -= VELOCITY;

            if (player.x < b.x + b.width && player.x + player.width > b.x && player.y + player.height > ground.y - b.height) {
                STATUS_NOW = STATUS.game_over;
            } else if (b.x <= -b.width) {
                this._blocks.splice(i, 1);
                size--;
                i--;
            }
        }
    },
    clean: function() {
        this._blocks = [];
    },
    draw: function () {
        for (var i = 0, size = this._blocks.length; i < size; i++) {
            var b = this._blocks[i];
            CTX.fillStyle = b.color;
            CTX.fillRect(b.x, ground.y - b.height, b.width, b.height);
        }
    }
}