def on_b_pressed():
    mySprite2.x += -5
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    mySprite2.x += 5
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    mySprite2.destroy()
    game.over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

mySprite2: Sprite = None
scene.set_background_color(9)
mySprite2 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
mySprite = sprites.create(assets.image("""
    myImage1
"""), SpriteKind.enemy)
mySprite2.set_position(80, 113)
mySprite.set_position(81, 0)

def on_forever():
    music.play_melody("E F G - A F E D ", 120)
forever(on_forever)

def on_forever2():
    for index in range(6):
        pause(400)
        mySprite.set_position(randint(0, 160), 0)
    mySprite.y += 20
forever(on_forever2)
