namespace SpriteKind {
    export const edge = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const tedge = SpriteKind.create()
    export const brick = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.brick, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.playTone(262, music.beat(BeatFraction.Eighth))
    info.changeScoreBy(100)
    numbricks += -1
    otherSprite.startEffect(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, sprite.vy * -1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numbricks))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.edge, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx * -1, sprite.vy)
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.tedge, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, sprite.vy * -1)
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
function makeBrick (x: number, y: number) {
    rannum = Math.randomRange(0, 4)
    numbricks += 1
    if (rannum == 0) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    }
    if (rannum == 1) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    }
    if (rannum == 2) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    }
    if (rannum == 3) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    }
    if (rannum == 4) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    }
    brick2.setPosition(x, y)
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, sprite.vy * -1)
    music.playTone(262, music.beat(BeatFraction.Eighth))
    if (sprite.vy >= -150) {
        if (sprite.vy == -145) {
            sprite.startEffect(effects.fire)
            music.pewPew.play()
        }
        sprite.vy += -5
    }
})
function buildSetBricks () {
    for (let index = 0; index <= 8; index++) {
        for (let index2 = 0; index2 < row; index2++) {
            makeBrick(index * 16 + 16, column * 8 + 24)
            column += 1
        }
        column = 0
    }
    if (row < 7) {
        row += 1
    }
}
let brick2: Sprite = null
let rannum = 0
let row = 0
let numbricks = 0
let column = 0
scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e f e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e f e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e f e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e f e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 5 5 e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e f e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e f e e e 5 5 5 5 5 5 e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e f e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 5 e e e f e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e f e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e f e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e f e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e f f f f f 
f f f f f e e e e f e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e f e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 5 f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 5 5 f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e 5 5 5 5 5 5 5 5 5 5 5 f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e f e 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e f e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e 5 5 5 5 5 5 5 5 5 5 5 f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e f e e e e e e e e e 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 5 5 e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e 5 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e 5 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 e e 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e f e e e e e e e 5 5 5 5 5 e e e e e e e e e e e f e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e f e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e f e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e f e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 e 5 5 5 5 5 5 e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e 5 5 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 e e 5 5 5 5 5 5 e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 e e 5 5 5 5 5 5 e e e e e e e e e e f f f f f 
f f f f f e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e 5 5 5 5 5 5 e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e 5 5 5 5 5 5 e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 e e e e 5 5 5 5 5 5 e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 e e e e 5 5 5 5 5 5 5 e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e e f e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e f e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e f e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 e e f e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e f e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e f e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e f e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 5 e e f e 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e f e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 5 e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e 5 5 5 5 5 5 e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 e e 5 5 5 5 5 5 5 5 e e e e e e e e e f e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e 5 5 5 5 5 5 e e e e e e f e e e e e e 5 5 5 5 5 5 e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e f e e e e e e e e e 5 5 5 5 5 5 e e 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e f 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 5 5 5 e e 5 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 e e e e f e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e f e e 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e f e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e f e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e f e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e f e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 5 e e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e f e e 5 5 5 5 5 e e 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e 5 5 5 5 5 e e e e e e e e e e 5 5 5 5 5 e e e e e e 5 5 5 5 5 e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e f e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e f e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
game.showLongText("Brick Break!", DialogLayout.Bottom)
game.showLongText("Move with arrow keys and start with 'A' button.", DialogLayout.Bottom)
music.playMelody("E F G - D E F - ", 240)
let startBallVar = 0
scene.setBackgroundImage(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`)
let paddle = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f f 6 6 6 6 6 6 6 6 f f 6 6 
. f 5 5 f . . . . . . f 5 5 f . 
. f 5 5 f . . . . . . f 5 5 f . 
. . f f . . . . . . . . f f . . 
`, SpriteKind.Player)
paddle.setPosition(80, 110)
controller.moveSprite(paddle, 100, 0)
paddle.setFlag(SpriteFlag.StayInScreen, true)
let top = sprites.create(img`
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`, SpriteKind.tedge)
top.setPosition(80, 0)
let right = sprites.create(img`
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
`, SpriteKind.edge)
right.setPosition(159, 60)
let Left = sprites.create(img`
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
e 
`, SpriteKind.edge)
Left.setPosition(0, 60)
let Ballvar = sprites.create(img`
c a a c 
a a a a 
a a a a 
c a a c 
`, SpriteKind.ball)
info.setLife(3)
info.setScore(0)
column = 0
numbricks = 0
row = 3
buildSetBricks()
game.onUpdate(function () {
    if (startBallVar == 0) {
        Ballvar.setPosition(paddle.x, 103)
        Ballvar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        Ballvar.setVelocity(Math.randomRange(-30, 30), -50)
        startBallVar = 2
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    if (Ballvar.y > paddle.y) {
        startBallVar = 0
        info.changeLifeBy(-1)
        effects.clearParticles(Ballvar)
    }
})
forever(function () {
    if (numbricks <= 0) {
        startBallVar = 0
        effects.clearParticles(Ballvar)
        info.changeScoreBy(500)
        music.setVolume(40)
        effects.confetti.startScreenEffect()
        music.playMelody("E F G - D E F - ", 240)
        effects.confetti.endScreenEffect()
        music.setVolume(128)
        numbricks = 0
        buildSetBricks()
    }
})
