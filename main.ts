namespace SpriteKind {
    export const tresure = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.splash("Great job!", "On to level 2!")
    tiles.setTilemap(tilemap`level2`)
    placeberry()
    Ghost_of_hangryness = sprites.create(img`
        . c c c c c c c c c c c c c c . 
        c c c c c c c c c c c c c c c c 
        c c 1 1 1 c c c c c c 1 1 1 c c 
        c c 1 a 1 c c c c c c 1 a 1 c c 
        c c 1 a 1 c c c c c c 1 a 1 c c 
        c c 1 a 1 c c c c c c 1 a 1 c c 
        c c 1 a 1 c c c c c c 1 a 1 c c 
        c c 1 c 1 c c c c c c 1 c 1 c c 
        c c 1 1 1 c c c c c c 1 1 1 c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c . c . c c c . c . c . c . c 
        c . . . . c . . . . . c . . . c 
        `, SpriteKind.Enemy)
    Ghost_of_hangryness.follow(Morpeko, 40)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    oran_berry.setPosition(0, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tresure, function (sprite, otherSprite) {
    oran_berry.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
    placeberry()
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
let Ghost_of_hangryness: Sprite = null
let Morpeko: Sprite = null
Morpeko = sprites.create(assets.image`Morpeko`, SpriteKind.Player)
Morpeko.setPosition(10, 15)
controller.moveSprite(Morpeko, 85, 85)
scene.cameraFollowSprite(Morpeko)
tiles.setTilemap(tilemap`level1`)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    if (info.score() >= 20) {
        tiles.setWallAt(tiles.getTileLocation(14, 1), false)
    }
})
