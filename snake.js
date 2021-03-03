/*
    Up Arrow	72
    Down Arrow	80
    Left Arrow	75
    Right Arrow	77
*/

// ==== Open Option Slide
const colors = [
    {
        first: "#f0932b",
        second: "#f9ca24"
    },
    {
        first: "#eb4d4b",
        second: "#ff7979"
    },
    {
        first: "#6ab04c",
        second: "#badc58"
    },
    {
        first: "#535c68",
        second: "#95afc0"
    },
    {
        first: "#130f40",
        second: "#30336b"
    },
    {
        first: "#22a6b3",
        second: "#7ed6df"
    },
]

let block = document.getElementById("block"),
    snake = document.getElementById("snake"),
    blockContext = block.getContext("2d"),
    snakeContext = snake.getContext("2d"),
    firstSquare = "#130f40",
    secondSquare = "#30336b";

blockColor(firstSquare, secondSquare)
function blockColor(first, second){
    blockContext.fillStyle = first;
    blockContext.fillRect(0, 0, 70, 70);
        
    blockContext.fillStyle = second;
    blockContext.fillRect(70, 0, 70, 70);

    blockContext.fillStyle = second;
    blockContext.fillRect(0, 70, 70, 70);
        
    blockContext.fillStyle = first;
    blockContext.fillRect(70, 70, 70, 70);

    // -Snake
    let fillWithSquares = snakeContext.createPattern(block, "repeat");
    snakeContext.fillStyle = fillWithSquares;
    snakeContext.fillRect(0, 0, snake.width, snake.height)
}

// = = = = Draw The Snake 
// 30 In Time
// let startWidth = 60,
//     randomSnakeX = Math.round(Math.random() * 490),
//     randomSnakeY = Math.round(Math.random() * 490),
//     randomFoodX = Math.round(Math.random() * 490),
//     randomFoodY = Math.round(Math.random() * 490);
// function snakeMove() {
//     snakeContext.save()
//     snakeContext.clearRect(0, 0, 550, 550)
//     snakeContext.restore()
//     requestAnimationFrame(snakeMove)
//     snakeContext.fillStyle = "#d63031";
//     snakeContext.fillRect(randomSnakeX, randomSnakeY, startWidth, 35)
//     if (randomSnakeX  < snake.width - startWidth) {
//         randomSnakeX++
//     }
// }
let randomFoodX = Math.round(Math.random() * 10) * 30,
    randomFoodY = Math.round(Math.random() * 10) * 30;
// = = = = Draw The Food


let slider = document.querySelector(".option .icon"),
    option = document.querySelector(".option"),
    themes = document.querySelectorAll(".style .theme");

slider.addEventListener("click", () => {
    if (option.classList.contains('opened')) {
        option.classList.remove("opened");
    } else {
        option.classList.add("opened");
    }
    
});

themes.forEach(element => {
    element.addEventListener("click", function () {
        themes.forEach(el => {
            el.classList.remove("active")
        });
        this.classList.add("active")
        firstSquare = colors[this.dataset.value].first
        secondSquare = colors[this.dataset.value].second
        
        blockColor(firstSquare, secondSquare)
    });
});

// Draw The Food
function food () {
    snakeContext.beginPath();
    snakeContext.fillStyle = "#fff";
    snakeContext.arc(randomFoodX + 15, randomFoodY + 15, 30 / 2, 0, Math.PI * 2);
    snakeContext.fill()
}

var snakeObj = new SnakeObject();
let scoreElement = document.getElementById("score"),
    bestElement = document.getElementById("best"),
    score = 0,
    best = 50;

setInterval(() => {
    snakeContext.clearRect(0, 0, 550, 550)
    blockColor(firstSquare, secondSquare)
    // Draw The Food
    food();
    snakeObj.draw()
    snakeObj.move()
    if (snakeObj.randomSnakeX === randomFoodX && snakeObj.randomSnakeY === randomFoodY){
        snakeObj.grow();
        score += 5
        randomFoodX = Math.round(Math.random() * 10) * 30,
        randomFoodY = Math.round(Math.random() * 10) * 30;
    }
    if (score > best) {
        best = score
        bestElement.innerHTML = best
        scoreElement.innerHTML = score
    } else {
        bestElement.innerHTML = best
        scoreElement.innerHTML = score
    }
}, 250);
// Keyboard Arrow Keys Handle
window.onkeydown = function (e){
    let d = e.keyCode;
    snakeObj.direction(d)
}

