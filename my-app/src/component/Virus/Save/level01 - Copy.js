import Phaser from "phaser";

import tiles from "./tilesets/tilesetll.png";
import player from "./images/player.png";
import cobblestone from "./images/cobblestone.png";
import eat from "./images/eat.png";
import floor from "./images/edible block.jpg";
import block from "./images/block.png";
import map from "./tilemaps/level01.json";

class Level01 extends Phaser.Scene {
  player;
  cursor;
  movementHistory = []; // история перемещения
  score = 0;

  constructor() {
    super({
      key: "Level01",
    });
  }

  // Размер тайла
  get tileSize() {
    return 64;
  }

  preload() {
    this.load.image("tiles", { tiles });
    this.load.image("player", { player });
    this.load.image("cobblestone", { cobblestone });
    this.load.image("eat", { eat });
    this.load.image("floor", { floor });
    this.load.image("block", { block });
    this.load.tilemapTiledJSON("map", { map });
  }

  create() {
    const map = this.make.tilemap({
      key: 'map',
      tileWidth: this.tileSize,
      tileHeight: this.tileSize,
    });

    const tiles = map.addTilesetImage("tilesetll", {tiles});

    // Загружаем слой wall
    const walls = map.createDynamicLayer("wall", tiles, 0, 0);
    // Создаем спрайты блоков стены загружая объекты с ID=1 (см. в TilesMapEditor)

    this.wall = walls.createFromTiles(1, -1, {
      key: "block",
      origin: 0,
    });
    // добавляем физику каждому спрайту блока стены
    this.wall.forEach((w) => this.physics.add.existing(w));

    const floor = map.createDynamicLayer("floor", tiles, 0, 0);
    const floors = floor.createFromTiles(2, -1, {
      key: "floor",
      origin: 0,
    });
    floors.forEach((f) => this.physics.add.existing(f));
    this.player = this.physics.add.sprite(96, 96, "player");
    // Установить камеру на игрока
    //this.cameras.main.startFollow(this.player);

    // загружаем слой eats
    const eats = map.createDynamicLayer("eats", tiles, 0, 0);
    //console.log(map.getTilesWithin(0, 0, eats.layer.width, eats.layer.height));
    const eat = eats.createFromTiles(4, -1, {
      key: "eat",
      origin: 0,
    });
    console.log(eat);
    eat.forEach((e) => this.physics.add.existing(e));
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keydown", () => {
      // при нажатии любой клавиши вызывается метод processMovement()
      this.processMovement();
    });

    this.physics.add.collider(floors, this.player, (f) => {
      // при коллизии игрока с зеленым полем последний уничтожается
      f.destroy();
    });

    this.physics.add.collider(eat, this.player, (e) => {
      // при коллизии игрока с едой последняя уничтожается и увеличивается счет
      e.destroy();
      this.scoreUp();
    });

    const shields = [];
    map.findObject("shield", (obj) => {
      //console.log(obj);
      shields.push(
        this.physics.add.sprite(
          obj.x + obj.width / 2,
          obj.y - obj.height / 2,
          "cobblestone"
        )
      );
    });

    // this.physics.add.collider(shields, this.player);
    // this.physics.add.collider(eats, shields);

    this.scoreText = this.add.text(10, 10, `Score: ${this.score}`, {
      fontSize: "30px",
    });
  }

  scoreUp() {
    this.score++;
    this.scoreText.setText(`Score: ${this.score}`);
    console.log("score", this.score);
  }

  isCollideWall() {
    // проверяет не касается ли стены
    return this.wall.some((w) => this.physics.overlap(w, this.player));
  }

  processMovement() {
    // Управление персонажем
    const keyDownState = this.getKeysDownState();
    this.movementHistory.push(keyDownState);
    if (keyDownState.down) {
      this.player.setY(this.player.y + this.tileSize);
    } else if (keyDownState.up) {
      this.player.setY(this.player.y - this.tileSize);
    } else if (keyDownState.left) {
      this.player.setX(this.player.x - this.tileSize);
    } else if (keyDownState.right) {
      this.player.setX(this.player.x + this.tileSize);
    }
  }

  getKeysDownState() {
    // Получаем текущее состояние кнопок с клавиатуры
    return {
      left: this.cursors.left.isDown === true,
      right: this.cursors.right.isDown === true,
      up: this.cursors.up.isDown === true,
      down: this.cursors.down.isDown === true,
    };
  }

  moveBack(lastStep) {
    if (!lastStep) return;
    if (lastStep.down) {
      this.player.setY(this.player.y - this.tileSize);
    } else if (lastStep.up) {
      this.player.setY(this.player.y + this.tileSize);
    } else if (lastStep.left) {
      this.player.setX(this.player.x + this.tileSize);
    } else if (lastStep.right) {
      this.player.setX(this.player.x - this.tileSize);
    }
  }

  update() {
    if (this.isCollideWall()) {
      // если есть коллизия со стеной, то отступаем назад
      const lastStep = this.movementHistory[this.movementHistory.length - 1];
      this.moveBack(lastStep);
    }
  }
}

export default Level01;
