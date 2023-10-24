namespace SpriteKind {
    export const tresure = SpriteKind.create()
    export const treasure_2 = SpriteKind.create()
    export const enviorment = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    right = false
    tunnel = true
    tiles.setTilemap(tilemap`level8`)
    tiles.placeOnTile(Morpeko, tiles.getTileLocation(0, 1))
    game.showLongText("Wow! It's so dark! Anyway, get to the tunnel's exit.", DialogLayout.Center)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (indibuttons == true) {
        up = true
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    info.changeScoreBy(50)
    floor += 1
    if (floor == 2) {
        tiles.setTilemap(tilemap`level17`)
        tiles.placeOnTile(Morpeko, tiles.getTileLocation(15, 3))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    if (info.score() >= 150) {
        tiles.setTileAt(tiles.getTileLocation(7, 4), sprites.dungeon.collectibleInsignia)
        tiles.setTileAt(tiles.getTileLocation(6, 4), sprites.dungeon.collectibleInsignia)
        tiles.setWallAt(tiles.getTileLocation(7, 4), false)
        tiles.setWallAt(tiles.getTileLocation(6, 4), false)
    } else {
        game.showLongText("You need to get more points first!", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tresure, function (sprite, otherSprite) {
    oran_berry.destroy(effects.disintegrate, 500)
    info.changeScoreBy(5)
    placeberry()
})
function placeberry2 () {
    nanab_berry = sprites.create(img`
        .............eee
        ............555e
        ...........5555.
        ..........55555.
        ........5ff555..
        .......5555ff...
        ......5555555...
        .....5555555....
        ....5555555.....
        ...55555555.....
        ...5555555......
        ...555555.......
        ...555555.......
        ...55555........
        ...55555........
        ...53355........
        ...333355.......
        ...333333.......
        ...333333.......
        ....333333......
        .....333333.....
        .....333333.....
        ......333333....
        ......333333....
        ........3333....
        `, SpriteKind.treasure_2)
    tiles.placeOnTile(nanab_berry, tiles.getTileLocation(randint(1, 14), randint(8, 14)))
}
function makebubbles () {
    bubbles = sprites.create(img`
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 6 9 9 8 8 8 1 1 1 1 1 1 9 9 
        9 6 9 9 9 9 6 8 8 1 1 1 1 1 1 9 
        9 9 9 9 9 9 9 6 8 8 8 8 1 1 1 9 
        9 9 9 9 9 9 9 9 9 9 6 8 8 1 1 9 
        9 9 9 9 9 9 9 9 9 9 9 6 8 1 1 9 
        9 9 9 9 9 9 9 9 9 9 9 9 8 1 1 9 
        9 9 9 9 9 9 9 9 9 9 9 9 8 8 1 9 
        9 9 9 9 9 9 9 9 9 9 9 9 6 8 8 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 6 8 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 6 6 9 9 9 9 9 9 9 9 9 9 6 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        `, SpriteKind.enviorment)
    tiles.placeOnTile(bubbles, tiles.getTileLocation(randint(0, 16), randint(0, 15)))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (indibuttons == true) {
        left = true
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    right = false
    Morpeko.setVelocity(0, 100)
})
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
controller.C.onEvent(ControllerButtonEvent.Pressed, function () {
    info.startCountdown(10)
    info.stopCountdown()
    right = false
    tunnel = true
    tiles.setTilemap(tilemap`level8`)
    tiles.placeOnTile(Morpeko, tiles.getTileLocation(0, 1))
    game.showLongText("Wow! It's so dark! Anyway, get to the tunnel's exit.", DialogLayout.Center)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (indibuttons == true) {
        right = true
    }
})
function placeberry () {
    oran_berry = sprites.create(img`
        ................
        ................
        ................
        ...77...........
        ...777.77.......
        ...777777.......
        .....777........
        ...8888888......
        ..88888f888.....
        .88f88888888....
        .8888f888888....
        .888888888f8....
        .8f888f88888....
        .88888888f88....
        .88888888888....
        .888f888f888....
        ..8888f8888.....
        ...8888888......
        ................
        ................
        `, SpriteKind.tresure)
    tiles.placeOnTile(oran_berry, tiles.getTileLocation(randint(1, 14), randint(8, 15)))
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    up = false
    Morpeko.setVelocity(0, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (indibuttons == true) {
        down = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tunnel = false
    indibuttons = false
    game.splash("Great job!", "On to level 2!")
    tiles.setTilemap(tilemap`level2`)
    scene.setBackgroundColor(6)
    placeberry()
    placeberry2()
    info.startCountdown(100)
    game.showLongText("R.O.G.E.R here! For this level, eat all the berries you can.", DialogLayout.Center)
    game.showLongText("Once you have eaten 20 berries, flick the lever.", DialogLayout.Center)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.treasure_2, function (sprite, otherSprite) {
    nanab_berry.destroy(effects.disintegrate, 500)
    info.changeScoreBy(5)
    placeberry2()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(50)
    game.splash("Excellent!", "Level Three")
    tiles.setTilemap(tilemap`level16`)
    tiles.placeOnTile(Morpeko, tiles.getTileLocation(15, 3))
    floor = 1
    game.showLongText("Now you need to get out of this building. Just find the stairs!", DialogLayout.Center)
})
let down = false
let left = false
let bubbles: Sprite = null
let nanab_berry: Sprite = null
let oran_berry: Sprite = null
let floor = 0
let up = false
let indibuttons = false
let tunnel = false
let Morpeko: Sprite = null
let right = false
right = false
Morpeko = sprites.create(assets.image`Morpeko`, SpriteKind.Player)
Morpeko.setPosition(75, 27)
game.splash("FEEDING FRENZY", "Press A to start")
Morpeko.setPosition(10, 15)
tunnel = false
scene.cameraFollowSprite(Morpeko)
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
info.setScore(0)
game.showLongText("Testing!", DialogLayout.Center)
game.showLongText("Can you hear me???????????????", DialogLayout.Center)
game.showLongText("Great!", DialogLayout.Center)
game.showLongText("I am R.O.G.E.R, Robot onboard guide to all emergency rodeos!", DialogLayout.Center)
game.showLongText("That's me in your ear!", DialogLayout.Center)
game.showLongText("Anyways, i will be helping you get through the levels of FEEDING FRENZY!", DialogLayout.Center)
game.showLongText("For this level, find the hole, and then climb down it.", DialogLayout.Center)
scene.setBackgroundColor(7)
game.onUpdate(function () {
    if (left == true) {
        if (tunnel == true) {
            Morpeko.setVelocity(-85, 70)
        }
    }
    if (down == true) {
        if (tunnel == true) {
            Morpeko.setVelocity(0, 100)
        }
    }
    if (up == true) {
        if (tunnel == true) {
            Morpeko.setVelocity(0, -90)
        }
    }
    if (right == true) {
        if (tunnel == true) {
            Morpeko.setVelocity(85, 100)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (tunnel == true) {
        indibuttons = true
    } else {
        indibuttons = false
        controller.moveSprite(Morpeko)
    }
})
