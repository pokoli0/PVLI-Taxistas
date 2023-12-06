export default class Person extends Phaser.GameObjects.Container {
    constructor(scene, x, y, texture1, texture2, asesino) {
        super(scene, x, y);
        this.texture1 = new Phaser.GameObjects.Sprite(scene, 0, 0, texture1);
        this.texture2 = new Phaser.GameObjects.Sprite(scene, 0, -40, texture2);

        this.add(this.texture1);
        this.add(this.texture2);

        scene.add.existing(this);
        scene.physics.world.enable(this.texture1);
        scene.physics.add.overlap(this.texture1, scene.car, this.handleCollision, null, this);

        scene.anims.create({
            key: 'standing',
            frames: scene.anims.generateFrameNumbers(texture1, { start: 0, end: 3 }),
            frameRate: 2,
            repeat: -1
        });
        this.texture1.play('standing');
        this.asesino = asesino;
    }

    handleCollision(person, car) {
        this.scene.events.emit('cambiarEscena', 'conversacionLvl1', this.asesino);
    }
}
