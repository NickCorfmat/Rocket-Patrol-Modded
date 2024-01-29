// Name: Nick Corfmat
// Mod Title: Rocket Patrol 2: Atmospheric Assault
// Project duration: 5 hours
//
// Mods:
// * New enemy Spaceship type (5 pts)
// * Mouse movement + firing control (5 pts)
// * Particle explosion (5 pts)
// * Display remaining time (3 pts)
// * Create new scrolling background (1 pt)
// * Implement 'FIRE' UI text (1 pt)
//
// Citations:
// * Mitchell Hudson, "23 Phaser 3 tutorial particle emitter stars", YouTube,
//   URL: https://www.youtube.com/watch?v=JSrafZXuehQ

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

let particleConfig = {
    x: 0,
    y: 0,
    speed: 120,
    lifespan: 300,
    blendMode: 'ADD'
}

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3