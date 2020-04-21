//////////////////////////////////////////////////////SNAKE GAME HOUR 4 BEGINNING/////////////////////////
function Fruit(){
    x = 0;
    y = 0;

    this.pickLocation = function(){
        this.x = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    }

    this.draw = function(){
        ctx.fillStyle = '#d4cf37';
        ctx.fillRect(this.x,this.y,scale,scale);
    }
}