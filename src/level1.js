import Car from './Coche.js'
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
    preload(){
      this.load.tilemapTiledJSON('tilemap', 'assets/Mapas/mapa.json');
      this.load.image('patronesTilemap', 'assets/CP_V1.1.0_nyknck/tileset/CP_V1.0.4.png');
      this.load.image('Coche', 'assets/Imagenes/Coche.png');
    }
    create(){
      this.map = this.make.tilemap({
        key: 'tilemap',
        tileWidth: 64, 
        tileHeight: 64 
      });
      const tileset1 = this.map.addTilesetImage('level1', 'patronesTilemap');
      this.carretera = this.map.createLayer('carretera', tileset1);
      this.asfalto = this.map.createLayer('asfalto', tileset1);
      this.cesped = this.map.createLayer('cesped', tileset1);
      this.casas = this.map.createLayer('casas', tileset1);
      this.hierba = this.map.createLayer('hierba', tileset1);
      // Establece los límites de la cámara para que se ajusten al tamaño del mapa
      this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

      // Ajusta la cámara para que muestre todo el mapa
      this.cameras.main.scrollX = 0;  // Desplazamiento horizontal
      this.cameras.main.scrollY = 0;  // Desplazamiento vertical    

      this.car = new Car(this, 100, 100, 'Coche');

    }

    update(){
      this.car.update();
    }
    
}