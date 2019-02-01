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
    
}

function update(){
    
}