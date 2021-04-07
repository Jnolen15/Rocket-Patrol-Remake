let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    Scene: [Menu, Play],
}

let game = new Phaser.Game();

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;