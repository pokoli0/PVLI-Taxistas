import Car from './Coche.js'
import Person from './Person.js'
export default class Level1 extends Phaser.Scene {
    constructor() {
      super({ key: 'level1' });
      //para poder hacer el evento
    //   this.emitter = EventDispatcher.getInstance();
    //   this.previousLetterTime = 0;
    //   this.introFinished = false;
    //   this.maxVol = 0.7;
    //   this.muteVol = 0;
    //   this.isMute = false;
    
  
    }
    // handleCollision(car, colisiones){
    //   car.setVelocity(0,0);
    // }
    preload(){
      this.load.tilemapTiledJSON('tilemap', 'assets/Mapas/mapa2.json');
      this.load.image('patronesTilemap', 'assets/CP_V1.1.0_nyknck/tileset/CP_V1.0.4.png');

      this.load.image('person', 'assets/Imagenes/playButton.png');
      this.load.image('TaxiVertical', 'assets/sprites/taxi2.png');
      this.load.image('TaxiHorizontal', 'assets/sprites/taxi.png');
      this.load.image('Explosion', 'assets/sprites/explosion.png');


    }
    create(){
      this.createTileMap();
      // Establece los límites de la cámara para que se ajusten al tamaño del mapa
      this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
      this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
      this.physics.world.gravity.y = 0; // Esto desactiva la gravedad en el eje Y, puedes ajustarlo según tus necesidades

      this.car = new Car(this, 450, 120,'TaxiVertical','TaxiHorizontal','Explosion');
      this.person = new Person(this, 600, 200, 'person');
      this.colisiones.setCollision(132);
      this.physics.add.collider(this.car, this.colisiones);
           
      this.explosiones.setCollision(3270);
      this.physics.add.collider(this.car, this.explosiones, ()=>{this.car.cocheExplota()});

      this.cameras.main.startFollow(this.car, true, 0.1, 0.1);

    }

    update(){
      this.car.update();
    }
    
    debug()
    {
      console.log("hola");
    }

    createTileMap(){
      this.map = this.make.tilemap({
        key: 'tilemap',
        tileWidth: 64, 
        tileHeight: 64 
      });
      const tileset1 = this.map.addTilesetImage('level1', 'patronesTilemap');
      this.carretera = this.map.createLayer('carretera', tileset1);
      this.parque = this.map.createLayer('parque',tileset1);
      this.asfalto = this.map.createLayer('asfalto', tileset1);
      this.cesped = this.map.createLayer('cesped', tileset1);
      this.casas = this.map.createLayer('casas', tileset1);
      this.casas.setDepth(2);
      this.hierba = this.map.createLayer('hierba', tileset1);
      this.hierba.setDepth(3);
      this.colisiones = this.map.createLayer('colisiones', tileset1);
      this.explosiones = this.map.createLayer('explosiones', tileset1);
    }
    
}