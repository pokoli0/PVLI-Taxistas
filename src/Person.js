export default class Person extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.x = x; 
        this.y = y;
        this.texture = texture
        scene.add.existing(this);
        scene.physics.world.enable(this);
        scene.physics.add.overlap(this, scene.car, this.handleCollision, null, this);
    }

    handleCollision(person, car) {
        this.scene.events.emit('cambiarEscena', 'conversacionLvl1');
    }
}