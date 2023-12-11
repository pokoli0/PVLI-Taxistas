export default class PersonExtras extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture) {
        super(scene, x, y);
        this.texture = texture;
        
        scene.add.existing(this);
        scene.physics.world.enable(this);

        scene.anims.create({
            key: 'Frontwalking',
            frames: scene.anims.generateFrameNumbers(texture, { start: 4, end: 5}),
            frameRate: 2,
            repeat: -1
        });
        scene.anims.create({
            key: 'Upwalking',
            frames: scene.anims.generateFrameNumbers(texture, { start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
        });
        scene.anims.create({
            key: 'Rightwalking',
            frames: scene.anims.generateFrameNumbers(texture, { start: 2, end: 3}),
            frameRate: 2,
            repeat: -1
        });
        scene.anims.create({
            key: 'Leftwalking',
            frames: scene.anims.generateFrameNumbers(texture, { start: 6, end: 7}),
            frameRate: 2,
            repeat: -1
        });
        this.play('Upwalking');
        this.speed = 50;
        this.body.setVelocity(0, this.speed);
    }
    Colission() {
        this.body.setVelocity(0, -this.speed);
    }
}
