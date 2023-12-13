export default class Person extends Phaser.GameObjects.Container {
    constructor(scene, x, y,animsKey, texture1, texture2, asesino) {
        super(scene, x, y);
        this.texture1 = new Phaser.GameObjects.Sprite(scene, 0, 0, texture1);
        this.texture2 = new Phaser.GameObjects.Sprite(scene, 0, -40, texture2);

        this.texture2.setScale(0.15);
        this.texture2.setDepth(4);

        this.add(this.texture1);
        this.add(this.texture2);
        

        scene.add.existing(this);
        scene.physics.world.enable(this.texture1);
        scene.physics.add.overlap(this.texture1, scene.car, this.handleCollision, null, this);
        console.log(texture1);
        this.texture1.anims.play(animsKey);
        this.asesino = asesino;
    }
    
    

    handleCollision(person, car) {
        this.scene.events.emit('cambiarEscena', 'conversacionLvl1', this.asesino);
    }
}
