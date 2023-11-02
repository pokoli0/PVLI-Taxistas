export default class Level1 extends Phaser.Scene {
    constructor() {
      super({ key: 'level1' });
    }
    
  preload() {
    this.load.image('background', 'assets/Imagenes/fondolevel1.png');
    this.load.image('player', 'assets/Imagenes/player.png');
  }
  
  create() {
    //background = this.add.image(500, 250, 'background').setDepth(0);
    player = this.physics.add.image(400, 300, 'player').setDepth(1);
    player.setCollideWorldBounds(true);

    //this.cameras.main.setBounds(0, 0, 800, 600);
    //this.cameras.main.startFollow(player);
    const keys = this.input.keyboard.addKeys({
      'up': Phaser.Input.Keyboard.KeyCodes.W,
      'down': Phaser.Input.Keyboard.KeyCodes.S,
      'left': Phaser.Input.Keyboard.KeyCodes.A,
      'right': Phaser.Input.Keyboard.KeyCodes.D
  });

  cursors = keys;
  }
  
  update() {
    if (cursors.up.isDown) {
      player.setVelocityY(-200);
  } else if (cursors.down.isDown) {
      player.setVelocityY(200);
  } else {
      player.setVelocityY(0); 
  }

  if (cursors.left.isDown) {
      player.setVelocityX(-200);
  } else if (cursors.right.isDown) {
      player.setVelocityX(200);
  } else {
      player.setVelocityX(0); 
 }
}
}
