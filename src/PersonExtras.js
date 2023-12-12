export default class PersonExtras extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.world.enable(this);

        scene.physics.add.collider(this, scene.colisiones, this.handleCollisionMap, null, this);

        this.speed = 10;
        this.randomizeDirection(); 
    }

    update() {
        if (this.x <= 0 || this.x >= this.scene.map.widthInPixels) {
            this.randomizeDirection();
        }
    }

    handleCollisionMap() {
        this.randomizeDirection();
    }

    handleCollisionCar(car, personExtrasArray) {
        this.setAngle(90);
        this.body.velocity.x = 0; 
        this.body.velocity.y = 0;         
    }

    randomizeDirection() {
        const randomDirectionX = Phaser.Math.RND.sign();
        const randomDirectionY = Phaser.Math.RND.sign();
        
        this.body.velocity.x = this.speed * randomDirectionX;
        this.body.velocity.y = this.speed * randomDirectionY;
    }
    
}
