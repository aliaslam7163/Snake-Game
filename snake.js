//////////////////////////////////////////////////////SNAKE GAME HOUR 1 BEGINNING/////////////////////////
function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1; //horizontal speed SNAKE GAME HOUR 2 BEGINNING/////////////////////////
    this.ySpeed = 0; //vertical speed SNAKE GAME HOUR 2 BEGINNING/////////////////////////
    this.total = 0;  /////////////SNAKE GAME HOUR 4 BEGINNING/////////////////////////
    this.snakeBody = [];

    this.draw = function(){
        ctx.fillStyle = '#FFFFFF';
        for(let i = 0; i <= this.snakeBody.length - 1; i++){
            ctx.fillRect(this.snakeBody[i].x,this.snakeBody[i].y,scale,scale)
        }
        ctx.fillRect(this.x,this.y,scale,scale);
    }
//////////////////////////////////////////////////////SNAKE GAME HOUR 2 BEGINNING/////////////////////////
    this.update = function(){
 
        for(let i = 0; i < this.snakeBody.length - 1;i++)
        {
            
            this.snakeBody[i] = this.snakeBody[i+1]; //We loop over the whole snake, and 
            console.log(i,this.total,this.snakeBody[i],this.snakeBody[i+1]);
        }
        this.snakeBody[this.total - 1] = {x:this.x, y:this.y}; //This creates the lead, the snake's head because when length is zero, surely there must be a head?

        this.x += this.xSpeed; // HW make the assignment for end of hour 2 be to make the blinking light moving perfectly diagonally across canvas
        this.y += this.ySpeed;

        //////////////////////DISCUSS WHAT ARE THE IF CASES FOR RUNNING INTO CANVAS ENDS. HOW DO WE 'WRAP' AROUND?
        if(this.x > canvas.width){
            this.x = 0;
        }
        if(this.x < 0){
            this.x = canvas.width;
        }
        if(this.y > canvas.height){
            this.y = 0;
        }
        if(this.y < 0){
            this.y = canvas.height;
        }
    }


//////////////////////////////////////////////////////SNAKE GAME HOUR 3 BEGINNING/////////////////////////
this.changeDirection = function(direction){
    switch(direction){
        case 'Up':
            this.xSpeed = 0; //Stop moving to the right/left when I go up/down
            this.ySpeed = -scale * 1; 
            break;
        case 'Down':
            this.xSpeed = 0; //Stop moving to the right/left when I go up/down
            this.ySpeed = scale * 1; 
            break;
        case 'Right':
            this.xSpeed = scale * 1; //Stop moving to up/down when I go right/left
            this.ySpeed = 0; 
            break;
        case 'Left':
            this.xSpeed = -scale * 1; //Stop moving to up/down when I go right/left
            this.ySpeed = 0; 
            break;
    }
    // console.log(this.x);
    // console.log(this.y);
}


//////////////////////////////////////////////////////SNAKE GAME HOUR 4 BEGINNING/////////////////////////
this.eatFruit = function(fruit){
    if(this.x == fruit.x && this.y == fruit.y){
        console.log("Eating fruit. NOM NOM NOM");
        this.total++;
        console.log(this.snakeBody.length,this.snakeBody);
        return true;
    }
    return false;
}

}