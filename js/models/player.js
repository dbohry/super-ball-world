function getRandomLlamaImage() {
    const images = ["../img/llama1.png", "../img/llama2.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

const IMG_PLAYER = new Image();
IMG_PLAYER.src = getRandomLlamaImage();

IMG_PLAYER.onload = () => {
    console.log('Player image loaded successfully');
};

IMG_PLAYER.onerror = () => {
    console.error('Failed to load player image');
};

const player = {
    x: 50,
    y: 0,
    height: 50,
    width: 50,
    gravity: 0.8,
    velocity: 0,
    jumpForce: 18,
    jumps: 0,

    refresh: function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > ground.y - this.height && STATUS_NOW !== STATUS.game_over) {
            this.y = ground.y - this.height;
            this.jumps = 0;
            this.velocity = 0;
        }
    },
    jump: function () {
        if (this.jumps < MAX_JUMPS) {
            this.velocity = -this.jumpForce;
            this.jumps++;
        }
    },
    draw: function () {
        if (IMG_PLAYER.complete) {
            CTX.drawImage(IMG_PLAYER, this.x, this.y, this.width, this.height);
        } else {
            CTX.fillStyle = "#ff9239";
            CTX.fillRect(this.x, this.y, this.width, this.height);
        }
    }
};
