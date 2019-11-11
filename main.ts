input.onButtonPressed(Button.A, function () {
    if (Start == -1) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
        basic.showString("GO!")
        Start = 1
        tijd = 1500
        score = 0
        index = 0
        startstop = 0
        obstacles = []
        bird = game.createSprite(0, 2)
        bird.set(LedSpriteProperty.Blink, 300)
    } else if (Start == 1) {
        bird.change(LedSpriteProperty.Y, -1)
    } else if (Start == 2) {
        paddle.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Start == -1) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
        basic.showString("GO!")
        snelheid = 1000
        Score2 = 0
        val = 0
        bal = game.createSprite(2, 0)
        paddle = game.createSprite(2, 4)
        Start = 2
        basic.pause(500)
    } else if (Start == 1) {
        bird.change(LedSpriteProperty.Y, 1)
    } else if (Start == 2) {
        paddle.change(LedSpriteProperty.X, 1)
    }
})
let gat_y = 0
let ticks = 0
let bal: game.LedSprite = null
let val = 0
let Score2 = 0
let snelheid = 0
let paddle: game.LedSprite = null
let bird: game.LedSprite = null
let obstacles: game.LedSprite[] = []
let score = 0
let tijd = 0
let Start = 0
let index = 0
let startstop = 0
startstop = 0
index = 0
Start = -1
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Square)
basic.clearScreen()
basic.showString("Games")
basic.showString("A: Crashy-bird")
basic.showString("B: Vangut")
basic.forever(function () {
    if (Start == 1) {
        while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
            obstacles.removeAt(0).delete()
        }
        for (let obstacle2 of obstacles) {
            obstacle2.change(LedSpriteProperty.X, -1)
        }
        if (ticks % 3 == 0) {
            gat_y = Math.randomRange(0, 4)
            for (let index2 = 0; index2 <= 4; index2++) {
                if (index2 != gat_y) {
                    obstacles.push(game.createSprite(4, index2))
                }
            }
        }
        for (let obstacle3 of obstacles) {
            if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
                score = (score - 4) / 3
                game.addScore(score)
                game.gameOver()
            }
        }
        score += 1
        ticks += 1
        tijd += -10
        basic.pause(tijd)
    } else if (Start == 2) {
        if (bal.isTouching(paddle)) {
            bal.delete()
            bal = game.createSprite(Math.randomRange(0, 4), 0)
            Score2 += 1
            val = 0
            basic.pause(500)
        } else if (bal.isTouchingEdge() && val == 4) {
            bal.delete()
            paddle.delete()
            basic.clearScreen()
            game.setScore(Score2)
            game.gameOver()
        } else {
            snelheid += -10
            bal.change(LedSpriteProperty.Y, 1)
            val += 1
            basic.pause(snelheid)
        }
    }
})
