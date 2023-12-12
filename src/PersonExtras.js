export default class PersonExtras extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.world.enable(this);

        this.MuerteChico = scene.sound.add('MuerteChico');
        this.MuerteChica = scene.sound.add('MuerteChica');

        this.collided = false;

        scene.physics.add.collider(this, scene.colisiones, this.handleCollisionMap, null, this);

        this.speed = 10;
        this.randomizeDirection(); 
    }

    handleCollisionMap() {
        this.randomizeDirection();
    }

    handleCollisionCar(car, personExtrasArray) {
        if(!this.collided){
            this.collided = true;
            this.setAngle(90);
            this.body.velocity.x = 0; 
            this.body.velocity.y = 0;
            const randomsound = Phaser.Math.Between(0,1);     
            if(randomsound == 0){
             this.MuerteChico.play();
            }   
            else{
             this.MuerteChica.play();
            }
        }
        this.scene.physics.world.disable(this);
    }

    randomizeDirection() {
        const randomDirectionX = Phaser.Math.RND.sign();
        const randomDirectionY = Phaser.Math.RND.sign();
        
        this.body.velocity.x = this.speed * randomDirectionX;
        this.body.velocity.y = this.speed * randomDirectionY;
    }
    
}
