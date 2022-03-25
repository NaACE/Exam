import Phaser from "phaser";

export default class Level01 extends Phaser.Scene {
  constructor() {
    super({
      key: "Level01",
    });
  }

  preload() {
    this.load.image("tiles", process.env.PUBLIC_URL + '/tilesets/tilesetll.png');
    
    this.load.image("player", process.env.PUBLIC_URL + '/images/player.png');
    this.load.image("wall", process.env.PUBLIC_URL + '/images/block.png');

    this.load.tilemapTiledJSON("map", process.env.PUBLIC_URL + '/tilemaps/level01.json');
  }

  create() {
    const map = this.make.tilemap({
      key: "map",
      tileWidth: 64,
      tileHeight: 64,
    });

    const tiles = map.addTilesetImage("tilesetll", "tiles");

    // Загружаем слой wall
    const walls = map.createLayer("wall", tiles, 0, 0);
    // Создаем спрайты блоков стены загружая объекты с ID=1 (см. в TilesMapEditor)

    this.wall = walls.createFromTiles(1, -1, {
      key: "block",
      origin: 0,
    });

    this.scoreText = this.add.text(10, 10, `Score: ${this.score}`, {
      fontSize: "30px",
    });
  }

  scoreUp() {
    this.score++;
    this.scoreText.setText(`Score: ${this.score}`);
    console.log("score", this.score);
  }
}
