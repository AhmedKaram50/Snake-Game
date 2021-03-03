class SnakeObject{
    constructor() {
        this.randomSnakeX = Math.round(Math.random() * 10) * 30;
        this.randomSnakeY = Math.round(Math.random() * 10) * 30;

        this.startWidth = 30;
        this.movesAtOnce = 30;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
        this.loseAudio = document.getElementById("lose");
    }
    draw() {
        snakeContext.fillStyle = "#d63031";
        snakeContext.fillRect(this.randomSnakeX, this.randomSnakeY, this.startWidth, 30)
        for (let i = 0; i < this.tail.length; i++) {
            snakeContext.fillRect(this.tail[i].x, this.tail[i].y, this.startWidth, 30)
        }
    }
    move() {
        if (this.randomSnakeX < 550 - 30 && this.randomSnakeY < 550 - 30 && this.randomSnakeX > -30 && this.randomSnakeY > -30) {
            this.randomSnakeX += this.xSpeed
            this.randomSnakeY += this.ySpeed
        } else{
            this.lose()
        }
        for (let i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[i + 1]
            if (this.randomSnakeX === this.tail[i].x && this.randomSnakeY === this.tail[i].y) {
                this.lose()
            }
        }
        this.tail[this.total] = {x: this.randomSnakeX, y: this.randomSnakeY}
    }
    direction (direction) {
        switch(direction) {
            // Up
            case 38:
                this.xSpeed = 0;
                this.ySpeed = -this.movesAtOnce;
                break;
            // Down
            case 40:
                this.xSpeed = 0;
                this.ySpeed = this.movesAtOnce;
                break;
            // Left
            case 37:
                this.xSpeed = -this.movesAtOnce;
                this.ySpeed = 0;
                break;
            // Right
            case 39:
                this.xSpeed = this.movesAtOnce;
                this.ySpeed = 0;
                break;
        }
    }
    grow () {
        this.total += 1;
    }
    lose() {
        this.loseAudio.play()
        this.tail = []
        this.total = 0
        this.randomSnakeX = Math.round(Math.random() * 10) * 30;
        this.randomSnakeY = Math.round(Math.random() * 10) * 30;
        console.log("ahmed")
        score = 0;
    }
}
