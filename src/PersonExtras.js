export default class PersonExtras extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.world.enable(this);

        scene.physics.add.collider(this, scene.colisiones, this.handleCollision, null, this);

        this.speed = 10;
        this.body.velocity.x = this.speed; // Velocidad inicial en el eje X
    }

    update() {
        if (this.x <= 0 || this.x >= this.scene.map.widthInPixels) {
            this.speed *= -1;
            this.body.velocity.x = this.speed;
        }
    }

    handleCollision(person, colisiones) {
        this.speed *= -1;
        this.body.velocity.x = this.speed;
    }
}
