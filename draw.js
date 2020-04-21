//////////////////////////////////////////////////////SNAKE GAME HOUR 1 BEGINNING/////////////////////////
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
const scale = 10; //sets the scale of the canvas. how big is one block/pixel?
const rows = canvas.height / scale;
const columns = canvas.width / scale;
//////////////////////////////////////////////////////SNAKE GAME HOUR 1 BEGINNING/////////////////////////
let snake;

(function setup(){
    snake = new Snake(); //What does instantiation mean?
    // snake.draw();
    fruit = new Fruit();//////////////////////////////////////////////////////SNAKE GAME HOUR 4 BEGINNING/////////////////////////
    fruit.pickLocation();//////////////////////////////////////////////////////SNAKE GAME HOUR 4 BEGINNING/////////////////////////
    

    window.setInterval(function(){ //Explain setInterval in more details in HOUR 1
        ctx.clearRect(0,0,canvas.width,canvas.height); //clears the canvas before creating a new block... blinking light across canvas 
        fruit.draw();
        snake.update();             /////////////////////////////////////////SNAKE GAME HOUR 2 BEGINNING/////////////////
        snake.draw();               ///////////////////////////////////////SNAKE GAME HOUR 2 BEGINNING///////////////
        if(snake.eatFruit(fruit)){//////////////////////////////////////////////////////SNAKE GAME HOUR 4 BEGINNING/////////////////////////
            fruit.pickLocation();
        }
    },1000);
//////////////////////////////////////////////////////SNAKE GAME HOUR 3 BEGINNING/////////////////////////
    window.addEventListener('keydown',((evt) => { //Introduce what are eventListeners an what is a window?
        const direction = evt.key.replace('Arrow', '');//HW for part 2, implement more keys for 
        console.log(direction);
        snake.changeDirection(direction);
    }))
}());