namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 5 5 . . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . . . 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true, effects.confetti)
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010303030303010101010101010101010103010101010303010101010101010101030101010104030303010101010101010301010106010101030303010101010103010103030101010101030303010101030101030301010101010101030101030301010303030303030301010301030301010103030101010103010103010301010501030301010101030105030103010103030303010101010301010303030101030101010101010103010101010101010303010101010101030101010105010101030101010101010303030303010103030301010101010101010101010303030101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . . . . . 2 . . . . 
2 2 . . . . . . . . . 2 . . . . 
. 2 2 2 . . . . . . . 2 . . . . 
. . . 2 2 2 . . . . . 2 . . 2 2 
. . . . . 2 2 2 . . . 2 . . 2 2 
. . . . . . . 2 . . 2 2 . . 2 2 
2 2 2 2 2 . . 2 . 2 2 2 . . 2 2 
. . . 2 2 . . 2 . 2 . . . . 2 2 
. . . . 2 . . 2 . 2 . . 2 2 2 2 
. . . . 2 . . 2 2 2 . . 2 . . . 
. . . . 2 . . . . . . . 2 2 . . 
. . . . 2 . . . . . . . . 2 . . 
. . . . 2 2 2 2 2 2 . 2 2 2 . . 
. . . . . . . . . 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,myTiles.tile1,sprites.dungeon.collectibleRedCrystal],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
