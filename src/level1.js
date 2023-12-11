import Car from './Coche.js'
import Person from './Person.js'
import PersonExtras from './PersonExtras.js'
import leerPersonajes from "./leerPersonajes.js";

const personajesData = {
  personas: [
  {key: 'dia1p1', textura: 'VerdeDia1.png', asesino: true },
  {key: 'dia1p2', textura: 'MoradoDia1.png', asesino: true },
  {key: 'dia1p3', textura: 'AzulDia1.png', asesino: false }]
  };
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
      this.puntos; // Inicializa los puntos
      this.textoPuntos; // Variable para almacenar el objeto de texto de los puntos
      this.nivel
    }
    // handleCollision(car, colisiones){
    //   car.setVelocity(0,0);
    // }
    preload(){
      
      this.nivelActual = this.sys.settings.data.nivelActual;
      this.load.spritesheet(
        'person',
        'assets/Imagenes/Personajes/' + personajesData.personas[this.nivelActual].textura,
        { frameWidth: 16, frameHeight: 26 }
      );
      this.load.image('patronesTilemap', 'assets/CP_V1.1.0_nyknck/tileset/CP_V1.0.4.png');

      this.load.image('moneda', 'assets/Imagenes/imagenesPrueba/moneda.png');
      
      this.load.image('TaxiVertical', 'assets/sprites/taxi2.png');
      this.load.image('TaxiHorizontal', 'assets/sprites/taxi.png');
      this.load.image('BocadilloPerson', 'assets/sprites/Taxi Puntero1.png');
      this.load.image('Explosion', 'assets/sprites/explosion.png');
    }
    create(data){
      // Recibe datos del control de niveles
      this.nivelActual = data.nivelActual;
      this.puntos = data.puntos;
      
      
      this.createTileMap();

      const moneda = this.add.sprite(40, 40, 'moneda');
      moneda.setScale(0.15);
      moneda.setScrollFactor(0);
      moneda.setDepth(4);
      // Crear objeto de texto para los puntos
      
      this.textoPuntos = this.add.text(moneda.x,
        moneda.y, this.puntos, { fontSize: '48px', fill: '#000' , align: 'center',});
    this.textoPuntos.setOrigin(0.5);
      this.textoPuntos.setScrollFactor(0);
      this.textoPuntos.setDepth(5);

      // Establece los límites de la cámara para que se ajusten al tamaño del mapa
      this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
      this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
      this.physics.world.gravity.y = 0; // Esto desactiva la gravedad en el eje Y

      this.car = new Car(this, 450, 120,'TaxiVertical','TaxiHorizontal','Explosion');
      
      // Cambiar la textura del personaje aquí
    
    this.createPerson();
      
      this.colisiones.setCollision(132);
      this.physics.add.collider(this.car, this.colisiones,()=>this.car.cocheExplota());
      this.physics.add.collider(this.PersonExtras, this.colisiones, ()=>this.onCollisionPersonExtras());
     
      this.events.on('cambiarEscena', (nuevaEscena, asesino) => {
        this.scene.start('LoadConversacionScene', {asesino: asesino, puntos: this.puntos, nivel: this.nivel});
    });
     
      this.cameras.main.startFollow(this.car, true, 0.1, 0.1);

    }
    
createPerson() {
    this.person = new Person(
      this,
      575,
      230,
      'person',
      'BocadilloPerson',
      personajesData.personas[this.nivelActual].asesino
    );
    this.PersonExtras = new PersonExtras(this, 400, 300, 'person');
  }
  cargarNivelSiguiente() {
    // Llama al control de niveles para avanzar al siguiente nivel
    this.scene.get('controlLevels').avanzarAlSiguienteNivel();
  }

  onCollisionPersonExtras() {
    this.PersonExtras.Colission();
  }

    update(){
      this.car.update();
      this.PersonExtras.update();
    }
    
    debug()
    {
      console.log("hola");
    }

    createTileMap(){
      // Carga el tilemap según el nivel actual
      this.nivel = this.scene.get('controlLevels').getNivelActual();
        const tilemapKey = this.nivel.key;
        this.map = this.make.tilemap({
            key: tilemapKey,
            tileWidth: 64,
            tileHeight: 64
        });
      const tileset1 = this.map.addTilesetImage(this.nivel.key, 'patronesTilemap');
      this.carretera = this.map.createLayer('carretera', tileset1);
      this.asfalto = this.map.createLayer('asfalto', tileset1);
      this.cesped = this.map.createLayer('cesped', tileset1);
      this.casas = this.map.createLayer('casas', tileset1);
      this.casas.setDepth(2);
      this.hierba = this.map.createLayer('hierba', tileset1);
      this.hierba.setDepth(3);
      this.puentes = this.map.createLayer('Puentes', tileset1);
      this.colisiones = this.map.createLayer('colisiones', tileset1);
      this.explosiones = this.map.createLayer('explosiones', tileset1);
    }
}