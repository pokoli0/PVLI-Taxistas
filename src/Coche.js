export default class Car extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, textureVertical, textureHorizontal) {
      super(scene, x, y, textureHorizontal);
      scene.add.existing(this);
      scene.physics.world.enable(this);
      this.keys = scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
        shift:  Phaser.Input.Keyboard.KeyCodes.SHIFT,
      });
      this.textureUp = textureVertical;
      this.textureLeft = textureHorizontal;
      
      // Ancho y alto del collider general, ajusta estos valores según tu vehículo
      const colliderWidth = 50;
      const colliderHeight = 50;

      // Crea el collider general como un rectángulo alrededor del vehículo
      this.collider = scene.physics.add.sprite(x, y).setSize(colliderWidth, colliderHeight);
      this.collider.visible = false; // Haz que el collider no sea visible en el juego
    }  
    update() {
      this.collider.setPosition(this.x, this.y);
      var accel;
      if (this.keys.shift.isDown) {
        accel = 2;
      } else {
        accel = 1;
      }
    
      let textureSet = false; // Variable para controlar si se ha configurado una textura

      if (this.keys.up.isDown) {
        this.flipY = false;
        this.setTexture(this.textureUp);
        this.body.setVelocityY(-100 * accel);
        textureSet = true;

      } else if (this.keys.down.isDown) {
        this.flipY = true;
        this.setTexture(this.textureUp);
        this.body.setVelocityY(100 * accel);
        textureSet = true;

      } else {
        this.body.setVelocityY(0);
      }

      if (this.keys.left.isDown) {
        if (!this.keys.down.isDown)
          this.flipY = false;

        this.flipX = false;
        if (!textureSet) {
          this.setTexture(this.textureLeft);
        }
        this.body.setVelocityX(-100 * accel);
      } else if (this.keys.right.isDown) {
        if (!this.keys.down.isDown)
          this.flipY = false;

        this.flipX = true;
        if (!textureSet) {
          this.setTexture(this.textureLeft);
        }
        this.body.setVelocityX(100 * accel);
      } else {
        this.body.setVelocityX(0);
      }
    }

  }
  