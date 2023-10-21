namespace SpriteKind {
    export const tresure = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.splash("Great job!", "On to level 2!")
    tiles.setTilemap(tilemap`level2`)
    scene.setBackgroundColor(6)
    placeberry()
    info.startCountdown(200)
    game.showLongText("R.O.G.E.R here! For this level, eat all the berries you can.", DialogLayout.Center)
    game.showLongText("If you can't find a berry, hit B.", DialogLayout.Center)
    game.showLongText("Once you have eaten 20 berries, flick the lever.", DialogLayout.Center)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    oran_berry.destroy()
    placeberry()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    if (info.score() >= 15) {
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
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(20)
    game.over(true, effects.confetti)
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
    tiles.placeOnTile(oran_berry, tiles.getTileLocation(randint(1, 15), randint(1, 15)))
}
let oran_berry: Sprite = null
scene.setBackgroundColor(7)
let Morpeko = sprites.create(assets.image`Morpeko`, SpriteKind.Player)
Morpeko.setPosition(10, 15)
controller.moveSprite(Morpeko, 85, 85)
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
