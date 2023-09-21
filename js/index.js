// Game Constants & Variables
let direction = { x: 0, y: 0 };
const foodSound = new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameover.mp3");
const moveSound = new Audio("../music/move.mp3");
const musicSound = new Audio("../music/music.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
food = { x: 13, y: 10 };

// Game Functions
function main(ctime) {
  window.requestAnimationFrame(main);
  // console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function isCollide(sarr){
  return false;
}

function gameEngine() {
  // part 1 : Updating the snakearr & food
  if(isCollide(snakeArr)){
    gameOverSound.play();
    musicSound.pause();
    inputDir = { x: 0, y: 0};
    alert("Game Over. Press any key to play again!");
    snakeArr = [{x:13 , y:15}];
    musicSound.play();
    score = 0;
  }

  // If you have eaten the food, increment the score and regenrate the food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
  }

  // part 2 : Display the snake & food
  // Display the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });

  // Display the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Main logic starts from here
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 }; // start the game
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      input.x = 0;
      input.y = 1;
      break;
    case "ArrowDown":
      console.log("ArrowDown");
      input.x = 0;
      input.y = -1;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      input.x = -1;
      input.y = 0;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      input.x = 1;
      input.y = 0;
      break;

    default:
      break;
  }
});
