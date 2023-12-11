export default class PersonExtras extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture) {
        super(scene, x, y);
        this.texture = texture;

        scene.add.existing(this);
        scene.physics.world.enable(this);

        scene.anims.create({
            key: 'standing',
            frames: scene.anims.generateFrameNumbers(texture, { start: 0, end: 7}),
            frameRate: 2,
            repeat: -1
        });
        this.play('standing');
    }
}
