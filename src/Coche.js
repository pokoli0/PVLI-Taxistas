class Car extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture);
      scene.add.existing(this);
      scene.physics.world.enable(this);
      
      this.keys = scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
      });
    }
  
    update() {    
      if (this.keys.up.isDown) {
        this.body.setVelocityY(-100); 
      } else if (this.keys.down.isDown) {
        this.body.setVelocityY(100); 
      } else {
        this.body.setVelocityY(0); 
      }
  
      if (this.keys.left.isDown) {
        this.body.setVelocityX(-100); 
      } else if (this.keys.right.isDown) {
        this.body.setVelocityX(100);
      } else {
        this.body.setVelocityX(0); 
      }
    }
  }
  