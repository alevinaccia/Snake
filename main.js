const W = 800;
const H = 600;

const columns = W / 50;
const rows = H / 50;

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

    player = game.add.image(W / 2, H / 2, 'snake');

    apple = game.add.image(game.rnd.integerInRange(0, columns) * 50,  game.rnd.integerInRange(0, rows) * 50 , 'food');

    console.log(rows, columns , apple.x, apple.y)

    setAnchor(player, 0.5, 0.5)

    setAnchor(apple, 0.5, 0.5);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {
    checkMovement();
}

function checkMovement() {
    if (cursors.up.isDown) {
        player.y -= 3;
    }
    else if (cursors.down.isDown) {
        player.y += 3;
    }
    else if (cursors.left.isDown) {
        player.x -= 3;
    }
    else if (cursors.right.isDown) {
        player.x += 3;
    }

}

function setAnchor(sprite, xValue, yValue) {
    sprite.anchor.x = xValue;
    sprite.anchor.y = yValue;
}
