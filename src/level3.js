import Car from './Coche.js'
import Person from './Person.js'
import PersonExtras from './PersonExtras.js'

const personajesData = {
  personas: [
    { key: 'dia3p1', textura: 'MoradoDia1.png', asesino: true },
    { key: 'dia3p2', textura: 'VerdeDia1.png', asesino: false },
    { key: 'dia3p3', textura: 'AzulDia1.png', asesino: false }]
};
export default class Level2 extends Phaser.Scene {
  constructor() {
    super({ key: 'level3' });
    //para poder hacer el evento
    //   this.emitter = EventDispatcher.getInstance();
    //   this.previousLetterTime = 0;
    //   this.introFinished = false;
    //   this.maxVol = 0.7;
    //   this.muteVol = 0;
    //   this.isMute = false;
    this.puntos = 0; // Inicializa los puntos
    this.textoPuntos; // Variable para almacenar el objeto de texto de los puntos
    this.nivel;
    this.personExtrasArray = [];
    this.personajes = 3;
  }
  init(data){
    // Recibe datos del control de niveles
    this.nivelActual = data.nivelActual;
    this.puntos = data.puntos;
    this.gpsActivado = data.gpsActivado || false;
    this.aceleracionActivada = data.aceleracionActivada || false;
    this.tiempoActivado = data.tiempoActivado || false;
    this.initialTime = 120;
  }
  preload() {
    
  }
  create() {
    this.createTileMap();
    this.Level3Music = this.sound.add('Level3');
    this.Level3Music.play({
        loop: true 
    })
    const moneda = this.add.sprite(40, 40, 'moneda');
    moneda.setScale(0.15);
    moneda.setScrollFactor(0);
    moneda.setDepth(7);
    // Crear objeto de texto para los puntos

    this.textoPuntos = this.add.text(moneda.x,
      moneda.y, this.puntos, { fontSize: '48px', fontFamily: "VT323", fill: '#fff', align: 'center', });
    this.textoPuntos.setOrigin(0.5);
    this.textoPuntos.setScrollFactor(0);
    this.textoPuntos.setDepth(8);

    // Establece los límites de la cámara para que se ajusten al tamaño del mapa
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.physics.world.gravity.y = 0; // Esto desactiva la gravedad en el eje Y, puedes ajustarlo según tus necesidades

    this.car = new Car(this, 450, 120, 'TaxiVertical', 'TaxiHorizontal', 'Explosion','boom', this.aceleracionActivada, this.gpsActivado);
    this.car.setDepth(3);

    // Cambiar la textura del personaje aquí

    this.createPerson();
    this.createExtras();

    
    this.colisiones.setCollision(132);

    this.physics.add.collider(this.car, this.explosiones);
    this.explosiones.setTileIndexCallback(666, this.tileExplosion, this);
    this.physics.add.collider(this.car, this.colisiones, () => this.car.cocheExplota());

    this.events.on('cambiarEscena', (nuevaEscena, asesino) => {
      this.Level3Music.stop();
      this.car.StopCarSounds();
      this.scene.start('LoadConversacionScene', { asesino: asesino, puntos: this.puntos, nivel: this.nivel });
    });

    this.cameras.main.startFollow(this.car, true, 0.1, 0.1);

    //Texto Tiempo
    if(this.tiempoActivado){
      this.initialTime = 180;  // Ajusta el tiempo inicial si el tiempo está activado
    }
    this.timerText = this.add.text(850, 25, this.formatTime(this.initialTime), {
      fontFamily: 'VT323',
      fontSize: '60px',
      fill: '#FFF',
    });
    this.timerText.setDepth(8).setScrollFactor(0);
    this.timer = this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true,
      startAt: 0,
      start: true,
    });
  }

  createPerson() {
    if (this.nivelActual % this.personajes == 0) {
      this.person = new Person(
        this,
        1540,
        1200,
        'personMor',
        'personIdleMor',
        'BocadilloPerson',
        personajesData.personas[this.nivelActual % this.personajes].asesino,
      );
    }
    else if (this.nivelActual % this.personajes == 1) {
      this.person = new Person(
        this,
        660,
        1510,
        'personVer',
        'personIdleVer',
        'BocadilloPerson',
        personajesData.personas[this.nivelActual % this.personajes].asesino,
      );
    }
    else if (this.nivelActual % this.personajes == 2) {
      this.person = new Person(
        this,
        1810,
        450,
        'personAz',
        'personIdleAz',
        'BocadilloPerson',
        personajesData.personas[this.nivelActual % this.personajes].asesino,
      );
    }
  }

  createExtras() {
    const textures = ['personIdleVer', 'personIdleMor', 'personIdleAz', 'personIdleAma'];
    let animsKey = '';
    for (let i = 0; i < 50; i++) {
        const x = Phaser.Math.Between(0, this.map.widthInPixels);
        const y = Phaser.Math.Between(0, this.map.heightInPixels);
        const randomTexture = Phaser.Math.RND.pick(textures);
        switch(randomTexture){
            case "personIdleVer":
            this.animsKey = 'personVer';
            break;
            case "personIdleMor":
            this.animsKey = 'personMor';
            break;
            case "personIdleAz":
            this.animsKey = 'personAz';
            break;
            case "personIdleAma":
            this.animsKey = 'personAma';
            break;
        }
        const personExtra = new PersonExtras(this, x, y, randomTexture, this.animsKey);
        personExtra.setDepth(2);
        this.physics.add.collider(this.car, personExtra, () => {
          personExtra.handleCollisionCar(this.car, this.personExtrasArray);
      });

        this.personExtrasArray.push(personExtra);
    }
}


  cargarNivelSiguiente() {
    // Llama al control de niveles para avanzar al siguiente nivel
    this.Level3Music.stop();
    this.scene.get('controlLevels').avanzarAlSiguienteNivel();
  }

  update() {
    this.car.update();
  }

  createTileMap() {
    // Carga el tilemap según el nivel actual
    this.nivel = this.scene.get('controlLevels').getNivelActual();
    this.map = this.make.tilemap({
      key: 'level1',
      tileWidth: 64,
      tileHeight: 64
    });
    const tileset1 = this.map.addTilesetImage('level1', 'patronesTilemap');
    this.carretera = this.map.createLayer('carretera', tileset1);
    this.asfalto = this.map.createLayer('asfalto', tileset1);
    this.cesped = this.map.createLayer('cesped', tileset1);
    this.adicionales = this.map.createLayer('adicionales', tileset1);
    this.casas = this.map.createLayer('casas', tileset1);
    this.casas.setDepth(4);
    this.hierba = this.map.createLayer('hierba', tileset1);
    this.hierba.setDepth(5);
    this.puentes = this.map.createLayer('Puentes', tileset1);
    this.colisiones = this.map.createLayer('colisiones', tileset1);
    this.explosiones = this.map.createLayer('explosiones', tileset1);
  }

  tileExplosion(sprite, tile) {
    const BOOM= this.sound.add('boom')
    BOOM.play();
    let boom=this.add.image(this.car.x,this.car.y,'Explosion',)
    this.tweens.add({
      targets: boom,
      scale: 0,
      ease: 'sine.inout',
      duration: 800,
      delay: 50,
      repeat: 0,
      yoyo: false
  });
    this.explosiones.removeTileAt(tile.x, tile.y);
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  updateTimer() {
    if (this.initialTime > 0) {
        this.initialTime -= 1; // Restar 1 segundo
        const remainingTime = Math.ceil(this.initialTime);
        this.timerText.setText(this.formatTime(remainingTime));
    } else {
        this.scene.pause();
        const centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const Alarma = this.sound.add('Alarma');

        const message = this.add.text(centerX, centerY, 'SE AGOTO EL TIEMPO', {
            fontSize: '60px',
            fontFamily: 'VT323',
            fill: '#fff'
        }).setOrigin(0.5, 0.5);
        message.setDepth(8);

        Alarma.play();
        Alarma.once('complete', () => {
            this.car.StopCarSounds();
            this.Level3Music.stop();
            message.destroy();
            this.scene.resume();
            this.scene.start('menuDias');
        });
    }
}
}