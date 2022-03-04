controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.x += -5
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.x += 5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    score += 1
    music.playMelody("F A C5 - - - - - ", 120)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy()
    game.over(false)
    game.splash("your score is")
    game.splash(score)
    game.splash("well done")
})
let score = 0
let mySprite2: Sprite = null
game.splash("welcome to plane dodger!  Use the 'A' button to go right and 'B' to go left.   The aim of the game is to not be hit by a plane. You also have to touch the apples falling from the sky.")
scene.setBackgroundColor(9)
mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
let mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
let mySprite3 = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
let mySprite4 = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
let mySprite5 = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(80, 113)
mySprite.setPosition(81, 0)
mySprite3.setPosition(13, 0)
mySprite4.setPosition(40, 0)
mySprite5.setPosition(5, 0)
forever(function () {
    music.playMelody("E F G - A F E D ", 120)
})
forever(function () {
    for (let index = 0; index < 6; index++) {
        pause(400)
        mySprite4.y += 20
    }
    mySprite4.setPosition(randint(0, 160), 0)
})
forever(function () {
    for (let index = 0; index < 6; index++) {
        pause(400)
        mySprite.y += 20
    }
    mySprite.setPosition(randint(0, 160), 0)
})
forever(function () {
    for (let index = 0; index < 6; index++) {
        pause(400)
        mySprite3.y += 20
    }
    mySprite3.setPosition(randint(0, 160), 0)
})
forever(function () {
    for (let index = 0; index < 6; index++) {
        pause(400)
        mySprite5.y += 20
    }
    mySprite5.setPosition(randint(0, 160), 0)
})
