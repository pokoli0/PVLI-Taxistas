export default class Level1 extends Phaser.Scene {
    constructor() {
      super({ key: 'level1' });
    }
    
  preload() {
    //this.load.image('background', 'assets/Imagenes/fondolevel1.png');
    this.load.image('player', 'assets/Imagenes/player.png');
  }
  
  create() {
    //background = this.add.image(500, 250, 'background');
    player = this.physics.add.image(400, 300, 'player');
    player.setCollideWorldBounds(true);

    //this.cameras.main.setBounds(0, 0, 800, 600);
    //this.cameras.main.startFollow(player);
  
    cursors = this.input.keyboard.createCursorKeys();
  }
  
  update() {
    //player.setVelocity(0);
  
    if (cursors.up.isDown) {
        player.setVelocityY(-200);
    } else if (cursors.down.isDown) {
        player.setVelocityY(200);
    }
  
    if (cursors.left.isDown) {
         player.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        player.setVelocityX(200);
    }
 }
}