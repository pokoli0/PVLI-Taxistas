export default class Person extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 1);
        this.x = x; 
        this.y = y;
        this.texture = texture
        scene.add.existing(this);
        scene.physics.world.enable(this);
        scene.physics.add.overlap(this, scene.car, this.handleCollision, null, this);

        scene.anims.create({
            key: 'standing',
            frames: scene.anims.generateFrameNumbers(texture, { start: 0, end: 3 }),
            frameRate: 2,
            repeat: -1
        });
        this.play(`standing`);
    }
    handleCollision(person, car) {
        this.scene.events.emit('cambiarEscena', 'conversacionLvl1');
    }
}