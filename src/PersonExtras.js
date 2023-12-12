export default class PersonExtras extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.world.enable(this);

        scene.physics.add.collider(this, scene.colisiones, this.handleCollision, null, this);

        this.speed = 10;
        this.randomizeDirection(); 
    }

    update() {
        if (this.x <= 0 || this.x >= this.scene.map.widthInPixels) {
            this.randomizeDirection();
        }
    }

    handleCollision(person, colisiones) {
        this.randomizeDirection();
    }

    randomizeDirection() {
       // this.speed = Phaser.Math.Between(5, 20);
        
        const randomDirectionX = Phaser.Math.RND.sign();
        const randomDirectionY = Phaser.Math.RND.sign();
        
        this.body.velocity.x = this.speed * randomDirectionX;
        this.body.velocity.y = this.speed * randomDirectionY;
    }
    
}
