// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000507010101030303020303030304030306080a07010101010103040101010103010608080a0a0a0701010101050701010101060c0c0c080807010105080807010101010101010608080a0a080c08080701050a0a070101060808080b0109080d0508080808070101060c0b010109080b0908080c080807010101010105080d0109080d01060808070101030106080d0106080d010106080f11010301010908070109080701010610120101010508080b0109080b010101010101050a08080b0105080d0101030101010508080c0b010109080807010101050a08080b0101010209080808080808080808080101030303060c0c0c0c0c0c0c0c0c0b0103030203`, img`
. . 2 2 2 . . . . . . . . . . . 
. . . . 2 2 2 2 2 . . 2 2 2 2 . 
2 . . . . . . . 2 2 2 2 . . 2 2 
2 2 . . . . . . . 2 2 . . . . 2 
2 2 2 2 2 2 . . . . . . . . . . 
2 . . . . 2 2 . . . . . 2 . . . 
. . . . . . 2 2 . . . 2 2 . . . 
. . . . . . . 2 2 2 2 2 . . . 2 
. . . 2 . . . . 2 2 . 2 . . . 2 
. . . 2 2 . . . . 2 . 2 2 . . . 
2 . . . 2 2 . . . 2 2 2 . . . . 
2 . . . 2 2 2 2 2 2 . . . . . 2 
. . . 2 2 . 2 2 2 . . . . . 2 2 
. . . . 2 2 2 . . . . . 2 2 2 . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . . . . . 2 . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath6,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
