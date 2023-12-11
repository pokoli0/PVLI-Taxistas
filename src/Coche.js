export default class Car extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, textureVertical, textureHorizontal, Explosion) {
    super(scene, x, y, textureHorizontal);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.keys = scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
    });
    this.textureUp = textureVertical;
    this.textureLeft = textureHorizontal;
    this.explosion = Explosion;
    this.accel = 1;
    this.muerto = false;
    // Ancho y alto del collider general
    const colliderWidth = 50;
    const colliderHeight = 50;
    // Creacion del collider general como un rectángulo alrededor del vehículo
    this.collider = scene.physics.add.sprite(x, y).setSize(colliderWidth, colliderHeight);

  }

  update() {
    //this.setAcceleration(0);
    if (!this.muerto) {
      this.collider.setPosition(this.x, this.y);
      if (this.keys.shift.isDown) {
        if (this.accel < 4)
          this.accel += 0.01;
        else
          this.accel = 4;
      } else {
        if (this.accel > 1)
          this.accel -= 0.1;
        else
          this.accel = 1;
      }
      let textureSet = false; // Variable para controlar si se ha configurado una textura

      if (this.keys.up.isDown) {
        this.flipY = false;
        this.setTexture(this.textureUp);
        this.body.setVelocityY(-100 * this.accel);
        textureSet = true;

      } else if (this.keys.down.isDown) {
        this.flipY = true;
        this.setTexture(this.textureUp);
        this.body.setVelocityY(100 * this.accel);
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
        this.body.setVelocityX(-100 * this.accel);
      }
      else if (this.keys.right.isDown) {
        if (!this.keys.down.isDown)
          this.flipY = false;
        this.flipX = true;
        if (!textureSet) {
          this.setTexture(this.textureLeft);
        }
        this.body.setVelocityX(100 * this.accel);
      } else {
        this.body.setVelocityX(0);
      }
      if (!this.keys.up.isDown && !this.keys.down.isDown && !this.keys.left.isDown && !this.keys.right.isDown) {
        this.accel = 1;
      }
    }
  }

  cocheExplota() {
    if (this.accel == 4) {
      this.muerto = true;
      this.body.setVelocityX(0);
      this.body.setVelocityY(0);
      this.setTexture(this.explosion);
    }
    else {
      this.accel = 1;
    }
  }

}
