export default class Car extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, textureUp, textureDown, textureRight, textureLeft) {
      super(scene, x, y, textureDown);
      scene.add.existing(this);
      scene.physics.world.enable(this);
      this.keys = scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
      });
      this.textureUp = textureUp;
      this.textureDown = textureDown;
      this.textureRight = textureRight;
      this.textureLeft = textureLeft;
    }
  
    update() {    
      if (this.keys.up.isDown) {
        this.setTexture(this.textureUp); 
        this.body.setVelocityY(-100); 
      } else if (this.keys.down.isDown) {
        this.setTexture(this.textureDown); 
        this.body.setVelocityY(100); 
      } else {
        this.body.setVelocityY(0); 
      }
  
      if (this.keys.left.isDown) {                    
        this.setTexture(this.textureLeft); 
        this.body.setVelocityX(-100); 
      } else if (this.keys.right.isDown) {   
        this.setTexture(this.textureRight); 
        this.body.setVelocityX(100);
      } else {
        this.body.setVelocityX(0); 
      }
    }
  }
  