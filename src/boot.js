export default class Boot extends Phaser.Scene{
    constructor(){
        super({key: "Boot"});
    }
    preload(){
        //MAPA
        this.load.image('patronesTilemap', 'assets/CP_V1.1.0_nyknck/tileset/CP_V1.0.4.png');

        //SPRITES
        this.load.image('moneda', 'assets/Imagenes/imagenesPrueba/moneda.png');
        this.load.image('TaxiVertical', 'assets/sprites/taxi2.png');
        this.load.image('TaxiHorizontal', 'assets/sprites/taxi.png');
        this.load.image('BocadilloPerson', 'assets/sprites/Taxi Puntero1.png');
        this.load.image('Explosion', 'assets/sprites/explosion.png');
        this.load.image('fondo', 'assets/Imagenes/fondoConver.png');
        this.load.image('botonCont', 'assets/Imagenes/Botones/Continuar.png');
        this.load.image('moneda', 'assets/Imagenes/imagenesPrueba/moneda.png');
        this.load.image('botonCielo', 'assets/Imagenes/Botones/Cielo.png');
        this.load.image('botonInf', 'assets/Imagenes/Botones/Infierno.png');
        this.load.image('dejarVivo', 'assets/Imagenes/Botones/Vivo.png');

        //MENU
        this.load.image('fondoMenu','assets/Imagenes/fondo.jpg' );
        this.load.image('playButton','assets/Imagenes/Botones/playButton.png' );

        //AUDIOS
        this.load.audio('PuertaCoche', 'assets/Sonido_Musica/Puerta de coche.mp3'); 
        this.load.audio('EncendidoMotor', 'assets/Sonido_Musica/Encendido motor.mp3');
        this.load.audio('MuerteChico', 'assets/Sonido_Musica/Lego yoda death sound.mp3');
        this.load.audio('MuerteChica', 'assets/Sonido_Musica/Sound effect- screaming girl.mp3');


        //ANIMACIONS
        this.load.spritesheet(
            'personIdleVer',
            'assets/Imagenes/Personajes/VerdeDia1.png',
            { frameWidth: 16, frameHeight: 26 }
          );
        this.load.spritesheet(
            'personIdleMor',
            'assets/Imagenes/Personajes/MoradoDia1.png',
            { frameWidth: 16, frameHeight: 26 }
          );  
          this.load.spritesheet(
            'personIdleAz',
            'assets/Imagenes/Personajes/AzulDia1.png',
            { frameWidth: 16, frameHeight: 26 }
          );
    }
    create(){
        this.anims.create({
            key: 'personVer',
            frames:  this.anims.generateFrameNames('personIdleVer', { start: 0, end: 3}),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({
            key: 'personMor',
            frames:  this.anims.generateFrameNames('personIdleMor', { start: 0, end: 3}),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({
            key: 'personAz',
            frames:  this.anims.generateFrameNames('personIdleAz', { start: 0, end: 3}),
            frameRate: 2,
            repeat: -1
        });
        this.scene.start("menuInicial");
    }
}