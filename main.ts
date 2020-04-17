namespace SpriteKind {
    export const edge = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const tedge = SpriteKind.create()
    export const brick = SpriteKind.create()
    export const Barrier = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.brick, function (sprite, otherSprite) {
    if (otherSprite == brickS) {
        music.jumpUp.play()
        paddle.setImage(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f f 6 6 6 6 6 6 6 6 f f 6 6 
. f 4 4 f . . . . . . f 4 4 f . 
. f 4 4 f . . . . . . f 4 4 f . 
. . f f . . . . . . . . f f . . 
`)
        controller.moveSprite(paddle, 100, 0)
        info.startCountdown(10)
    }
    if (otherSprite == brickL) {
        music.jumpUp.play()
        paddle.setImage(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f 6 6 
. f 5 5 f . . . . . . . . . . . . . . f 5 5 f . 
. f 5 5 f . . . . . . . . . . . . . . f 5 5 f . 
. . f f . . . . . . . . . . . . . . . . f f . . 
`)
        controller.moveSprite(paddle, 75, 0)
        info.startCountdown(10)
    }
    if (otherSprite == brickH) {
        music.jumpUp.play()
        if (info.life() == 3) {
            info.changeScoreBy(100)
        } else {
            info.changeLifeBy(1)
        }
    }
    if (otherSprite == brickB) {
        music.jumpUp.play()
        Block = sprites.create(img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
`, SpriteKind.Player)
        Block.setPosition(80, 98)
        Block.setVelocity(50, 0)
        Block.setFlag(SpriteFlag.BounceOnWall, true)
        info.startCountdown(10)
    }
    otherSprite.destroy()
    music.playTone(262, music.beat(BeatFraction.Eighth))
    info.changeScoreBy(100)
    numbricks += -1
    otherSprite.startEffect(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, sprite.vy * -1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Baddle = sprites.create(img`
. . f f . . . . f f . . 
. f 3 3 f . . f 3 3 f . 
. f 3 3 f . . f 3 3 f . 
7 7 f f 7 7 7 7 f f 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Player)
    Baddle.setPosition(80, 10)
    controller.player2.moveSprite(Baddle, 75, 0)
    Baddle.setFlag(SpriteFlag.StayInScreen, true)
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
    rannum = Math.randomRange(0, 10)
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
        brick2.setPosition(x, y)
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
        brick2.setPosition(x, y)
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
        brick2.setPosition(x, y)
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
        brick2.setPosition(x, y)
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
        brick2.setPosition(x, y)
    }
    if (rannum == 5) {
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
        brick2.setPosition(x, y)
    }
    if (rannum == 6) {
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
        brick2.setPosition(x, y)
    }
    if (rannum == 7) {
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
        brick2.setPosition(x, y)
    }
    if (rannum == 8) {
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
        brick2.setPosition(x, y)
    }
    if (rannum == 9) {
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
        brick2.setPosition(x, y)
    }
    if (rannum == 10) {
        ranpower = Math.randomRange(0, 3)
        if (ranpower == 0) {
            brickS = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 f f 4 4 4 4 4 4 f f 4 4 f 
f 4 f 5 5 f 4 4 4 4 f 5 5 f 4 f 
f 4 f 5 5 f 4 4 4 4 f 5 5 f 4 f 
f 4 4 f f 4 4 4 4 4 4 f f 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
            brickS.setPosition(x, y)
        }
        if (ranpower == 1) {
            brickL = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 8 8 1 8 8 8 8 8 8 8 8 1 8 8 f 
f 8 1 1 8 8 8 8 8 8 8 8 1 1 8 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 8 1 1 8 8 8 8 8 8 8 8 1 1 8 f 
f 8 8 1 8 8 8 8 8 8 8 8 1 8 8 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
            brickL.setPosition(x, y)
        }
        if (ranpower == 2) {
            brickH = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 1 1 1 1 2 2 1 1 2 2 1 1 1 1 f 
f 1 1 1 2 2 2 2 2 2 2 2 1 1 1 f 
f 1 1 1 2 2 2 2 2 1 2 2 1 1 1 f 
f 1 1 1 1 2 2 2 2 2 2 1 1 1 1 f 
f 1 1 1 1 1 2 2 2 2 1 1 1 1 1 f 
f 1 1 1 1 1 1 2 2 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
            brickH.setPosition(x, y)
        }
        if (ranpower == 3) {
            brickB = sprites.create(img`
f f f f f f f f f f f f f f f f 
f c c c c c c c c c c c c c c f 
f c c c c c c c c c c c c c c f 
f c c 1 1 1 1 1 1 1 1 1 1 c c f 
f c c 1 1 1 1 1 1 1 1 1 1 c c f 
f c c c c c c c c c c c c c c f 
f c c c c c c c c c c c c c c f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
            brickB.setPosition(x, y)
        }
    }
}
info.onCountdownEnd(function () {
    paddle.setImage(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f f 6 6 6 6 6 6 6 6 f f 6 6 
. f 5 5 f . . . . . . f 5 5 f . 
. f 5 5 f . . . . . . f 5 5 f . 
. . f f . . . . . . . . f f . . 
`)
    controller.moveSprite(paddle, 75, 0)
    Block.destroy()
    music.jumpDown.play()
})
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
let ranpower = 0
let brick2: Sprite = null
let rannum = 0
let Baddle: Sprite = null
let Block: Sprite = null
let brickB: Sprite = null
let brickH: Sprite = null
let brickL: Sprite = null
let brickS: Sprite = null
let row = 0
let column = 0
let paddle: Sprite = null
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
game.showLongText("Move with arrow keys and start with 'A' button. Press 'B' for P2.", DialogLayout.Bottom)
music.playMelody("- E F G - D E F ", 240)
scene.setBackgroundImage(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
paddle = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f f 6 6 6 6 6 6 6 6 f f 6 6 
. f 5 5 f . . . . . . f 5 5 f . 
. f 5 5 f . . . . . . f 5 5 f . 
. . f f . . . . . . . . f f . . 
`, SpriteKind.Player)
let startBallVar = 0
paddle.setPosition(80, 110)
controller.moveSprite(paddle, 75, 0)
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
let numbricks = 0
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
        music.playMelody("- E F G - D E F ", 240)
        effects.confetti.endScreenEffect()
        music.setVolume(128)
        numbricks = 0
        buildSetBricks()
    }
})
