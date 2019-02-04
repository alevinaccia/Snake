//Canvas width and height
const W = 800;
const H = 600;

//The size of the apple and the player *for convention we use it as the unit of the game*
const unit = 50;

//With this variables we obtain a grid in the canvas
const columns = W / unit;
const rows = H / unit;

//with use this consts for the movement system
const fpsScale = 10;  //Increasing the x every frame and dividing it by a const, we simulate the slowing down of the game
var x = 0;
var newPos = new Phaser.Point(0,0); 
var tail = [];

//Player score
var score = 0;

//Here we initialize the came
var game = new Phaser.Game(W, H, Phaser.CANVAS, null, {

    preload: preload,
    create: create,
    update: update
});
//We load the assets
function preload() {

    game.stage.backgroundColor = '000';

    game.load.image('snake', 'Assets/corpo.png');
    game.load.image('food', 'Assets/cibo.png');

}
//This method is called once the preload has finished
function create() {

    player = game.add.image(W / 2, H / 2, 'snake');

    apple = game.add.image(0 , 0 , 'food');

    apple.position = randomPos();

    console.log(rows, columns , apple.x, apple.y)

    cursors = game.input.keyboard.createCursorKeys();

}
//This method is called every frame
function update() {

    checkMovement();

    if(x % fpsScale == 0){

        player.position.add(newPos.x, newPos.y);

    }

    if(isColliding(player, apple)){

        score++;

        apple.position = randomPos();

    }
    
    x++;

}
//Here we check the inputs of the player and making the player move
function checkMovement() {

    if (cursors.up.isDown ) {

        newPos = new Phaser.Point(0 , -unit);

        inputRecived = true;
    }
    else if (cursors.down.isDown ) {

        newPos = new Phaser.Point(0 , unit);

        inputRecived = true;
    }
    else if (cursors.left.isDown ) {

        newPos = new Phaser.Point(-unit , 0);

        inputRecived = true;
    }
    else if (cursors.right.isDown ) {

        newPos = new Phaser.Point(unit , 0);
        
        inputRecived = true;
    }

}

function isColliding(fristObj , secondObj){
    if(fristObj.x == secondObj.x && fristObj.y == secondObj.y){

        tail.push(game.add.image(player.position.x, player.position.y, 'snake'))

        return true;

    }else{

        return false;
        
    }
}

function tailMovement(){

    

}


//Random Position for the apple.
function randomPos(){
    xPos = Math.floor(Math.random() * columns);
    yPos = Math.floor(Math.random() * rows);

    return new Phaser.Point(xPos * 50, yPos* 50);
}
