class SnakeObject{
    constructor() {
        this.randomSnakeX = Math.round(Math.random() * 10) * 30;
        this.randomSnakeY = Math.round(Math.random() * 10) * 30;

        this.startWidth = 30;
        this.movesAtOnce = 30;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
    draw() {
        snakeContext.fillStyle = "#d63031";
        snakeContext.fillRect(this.randomSnakeX, this.randomSnakeY, this.startWidth, 30)
    }
    move() {
        if (this.randomSnakeX < 550 - 30 && this.randomSnakeY < 550 - 30 && this.randomSnakeX > -30 && this.randomSnakeY > -30) {
            this.randomSnakeX += this.xSpeed
            this.randomSnakeY += this.ySpeed
        }
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
        this.startWidth += 30;
    }
}
