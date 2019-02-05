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
var newPos = new Phaser.Point(0, 0);
var tail = [];
var life = 0;

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

    apple = game.add.image(0, 0, 'food');

    apple.position = randomPos();

    console.log(rows, columns, apple.x, apple.y)

    cursors = game.input.keyboard.createCursorKeys();

}
//This method is called every frame
function update() {

    checkMovement();

    deathByWall();

    deathByTail();

    if (x % fpsScale == 0) {

        var pos = player.position;

        tail.push(game.add.sprite(pos.x, pos.y, 'snake'));

        if (tail.length > life) {

            var elementsToRemove = tail.splice(0, tail.length - life);

            for (i = 0; i < elementsToRemove.length; i++) {
                elementsToRemove[i].destroy();
            }

        }

        player.position.add(newPos.x, newPos.y);

    }

    if (isColliding(player, apple)) {

        score++;

        life++;

        apple.position = randomPos();

    }

    x++;

}
//Here we check the inputs of the player and making the player move
function checkMovement() {

    if (cursors.up.isDown) {

        newPos = new Phaser.Point(0, -unit);

    }
    else if (cursors.down.isDown) {

        newPos = new Phaser.Point(0, unit);

    }
    else if (cursors.left.isDown) {

        newPos = new Phaser.Point(-unit, 0);

    }
    else if (cursors.right.isDown) {

        newPos = new Phaser.Point(unit, 0);

    }

}

function isColliding(fristObj, secondObj) {
    if (fristObj.x == secondObj.x && fristObj.y == secondObj.y) {

        return true;

    } else {

        return false;

    }
}

function deathByWall() {
    if (player.position.x > W ||
        player.position.x < 0 ||
        player.position.y > H ||
        player.position.y < 0) {

        die();

    }
}

function die() {

    player.position.x = W / 2;
    player.position.y = H / 2;

    console.log("You've made a score of " + score);

    life = 0;

    score = 0;

}

//Random Position for the apple.
function randomPos() {
    xPos = Math.floor(Math.random() * columns);
    yPos = Math.floor(Math.random() * rows);

    return new Phaser.Point(xPos * 50, yPos * 50);
}

function deathByTail() {
    for (var i = 0; i < tail.length; i++) {
        var pos = tail[i].position;

        if (pos.x == player.position.x && pos.y == player.position.y) {

            die();

        }
    }
}
