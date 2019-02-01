const W = 800;
const H = 600;



var game = new Phaser.Game(W, H, Phaser.CANVAS, 'container', {
    
    preload: preload,
    create: create,
    update: update
});

function preload() {

    game.stage.backgroundColor = '000';

    game.load.image('snake', 'Assets/corpo.png');
    game.load.image('food', 'Assets/cibo.png');

    
}

function create() {

    player = game.add.image(W/2, H/2, 'snake');

    setAnchor(player,0.5,0.5)

    cursors = game.input.keyboard.createCursorKeys();

}

function update(){
    checkMovement();
}

function checkMovement(){
    if(cursors.up.isDown){

    }
    else if(cursors.down.isDown){

    }
    else if(cursors.left.isDown){

    }
    else if(cursors.right.isDown){

    }

}

function setAnchor(sprite,xValue,yValue){
    sprite.anchor.x = xValue;
    sprite.anchor.y = yValue;
}