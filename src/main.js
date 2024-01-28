// Name: Nick Corfmat
// Game: Rocket Patrol 2: Starfighter Assault
// Project duration:

// Mods:
// - New spaceship type (5 pts)
// - Implement mouse movement + firing control (5 pts)
// - Display remaining time (3 pts)
// - Create new scrolling background (1 pt)

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3