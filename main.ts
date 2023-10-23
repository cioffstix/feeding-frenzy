namespace SpriteKind {
    export const tresure = SpriteKind.create()
    export const treasure_2 = SpriteKind.create()
    export const enviorment = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tunnel = true
    tiles.setTilemap(tilemap`level8`)
    tiles.placeOnTile(Morpeko, tiles.getTileLocation(0, 1))
    game.showLongText("Wow! It's so dark! Anyway, get to the tunnel's exit.", DialogLayout.Center)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    if (info.score() >= 20) {
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
    info.changeScoreBy(1)
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
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(20)
    game.over(true, effects.confetti)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tunnel == true) {
        Morpeko.setVelocity(85, 100)
    } else {
        Morpeko.setVelocity(85, 0)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    velo = false
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
    info.changeScoreBy(1)
    placeberry2()
})
let velo = false
let bubbles: Sprite = null
let nanab_berry: Sprite = null
let oran_berry: Sprite = null
let tunnel = false
let Morpeko: Sprite = null
scene.setBackgroundColor(7)
Morpeko = sprites.create(assets.image`Morpeko`, SpriteKind.Player)
Morpeko.setPosition(10, 15)
tunnel = false
if (tunnel == false) {
    controller.moveSprite(Morpeko, 85, 85)
} else {
    game.splash("yup")
}
scene.cameraFollowSprite(Morpeko)
tiles.setTilemap(tilemap`level1`)
info.setScore(0)
game.showLongText("Testing!", DialogLayout.Center)
game.showLongText("Can you hear me???????????????", DialogLayout.Center)
game.showLongText("Great!", DialogLayout.Center)
game.showLongText("I am R.O.G.E.R, Robot onboard guide to all emergency rodeos!", DialogLayout.Center)
game.showLongText("That's me in your ear!", DialogLayout.Center)
game.showLongText("Anyways, i will be helping you get through the levels of FEEDING FRENZY!", DialogLayout.Center)
game.showLongText("For this level, find the hole, and then climb down it.", DialogLayout.Center)
game.onUpdate(function () {
    if (velo == true) {
        Morpeko.setVelocity(0, 100)
    }
})
