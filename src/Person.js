export default class Person extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.x = x; 
        this.y = y;
        this.texture = texture
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.scene.physics.add.overlap(this, this.scene.car,()=>{console.log("pasa")} );
    }
}