import Phaser from 'phaser';
import React from 'react';

import Level01 from '../level01.js';

function Index() {
  const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 896,
    height: 448,
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
      Level01
    ],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 0
        },
        debug: true,
        showBody: true,
        showStaticBody: true
      },
    }
  };

  const game = new Phaser.Game(config);
  return <div id='game' />
}

export default Index;