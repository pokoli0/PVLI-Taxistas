export default class Boot extends Phaser.Scene{
    constructor(){
        super({key: "Boot"});
    }
    preload(){
        //MAPA
        this.load.image('patronesTilemap', 'assets/CP_V1.1.0_nyknck/tileset/CP_V1.0.4.png');
        this.load.tilemapTiledJSON('level1', 'assets/Mapas/mapa2.json');

        //SPRITES
        this.load.image('diasBotones', 'assets/Imagenes/Botones/Dias.png');
        this.load.image('candado', 'assets/Imagenes/imagenesPrueba/candado.png');
        this.load.image('moneda', 'assets/Imagenes/imagenesPrueba/moneda.png');
        this.load.image('TaxiVertical', 'assets/sprites/taxi2.png');
        this.load.image('TaxiHorizontal', 'assets/sprites/taxi.png');
        this.load.image('BocadilloPerson', 'assets/sprites/Taxi Puntero.png');
        this.load.image('Explosion', 'assets/sprites/explosion.png');
        this.load.image('fondo', 'assets/Imagenes/fondoConver.png');
        this.load.image('botonCont', 'assets/Imagenes/Botones/Continuar.png');
        this.load.image('moneda', 'assets/Imagenes/imagenesPrueba/moneda.png');
        this.load.image('botonCielo', 'assets/Imagenes/Botones/Cielo.png');
        this.load.image('botonInf', 'assets/Imagenes/Botones/Infierno.png');
        this.load.image('dejarVivo', 'assets/Imagenes/Botones/Dejar vivo.png');
        this.load.image('CharcoSangre', 'assets/Imagenes/CharcoSangre.png');
        this.load.image('DescripcionGPS', 'assets/sprites/Descripcion de GPS.png')
        this.load.image('DescripcionAceleracion', 'assets/sprites/Descripcion de aceleracion.png')

        this.load.image('PagarAlquiler', 'assets/sprites/Pagar el alquiler.png')
        this.load.image('NoTienesDinero', 'assets/sprites/No tienes Dinero.png')
        
        this.load.image('BocadilloConver', 'assets/sprites/Bocadillo de conversacion.png')
        this.load.image('BocadilloOpcion', 'assets/sprites/Bocadillo de opcion.png')

        this.load.image('Tienda', 'assets/Imagenes/PruebaTienda/Tienda.png');
        this.load.image('Aceleracion', 'assets/Imagenes/PruebaTienda/Aceleracion.png');
        this.load.image('GPS', 'assets/Imagenes/PruebaTienda/GPS.png');
        this.load.image('VolverMenuDias', 'assets/Imagenes/Atras.png');
        this.load.image('TiempoExtra', 'assets/Imagenes/PruebaTienda/TiempoExtra.png');
        this.load.image('FondoTienda', 'assets/Imagenes/PruebaTienda/FondoTienda.png');
        this.load.image('FlechaVerde', 'assets/sprites/FlechaVerde.png');
        this.load.image('Moneda', 'assets/sprites/Moneda.png');

        //MENU
        this.load.image('Play','assets/Imagenes/Botones/Play.png' );
        this.load.image('ControlesButton', 'assets/Imagenes/Botones/controles.png')
        this.load.video('FondoMenu', 'assets/Archivos mp4/FondoMenu.mp4'); 
        this.load.image('GameOver', 'assets/sprites/Titulo GAME OVER.png')
        this.load.image('YOUWIN', 'assets/sprites/Titulo de Ganar.png')

        //RADIO
        this.load.video('Radio', 'assets/Archivos mp4/Radio Gif.mp4'); 

        //AUDIOS
        this.load.audio('PuertaCoche', 'assets/Sonido_Musica/Puerta de coche.mp3'); 
        this.load.audio('EncendidoMotor', 'assets/Sonido_Musica/Encendido motor.mp3');
        this.load.audio('MuerteChico', 'assets/Sonido_Musica/Lego yoda death sound.mp3');
        this.load.audio('MuerteChica', 'assets/Sonido_Musica/Sound effect- screaming girl.mp3');
        this.load.audio('boom','assets/Sonido_Musica/Explosion.mp3' )
        this.load.audio('menuSong', 'assets/Sonido_Musica/MusicaInicio.mp3');
        this.load.audio('Button', 'assets/Sonido_Musica/Button.mp3');
        this.load.audio('CursorOnButton', 'assets/Sonido_Musica/Cursor encima de boton.mp3');
        this.load.audio('ShopMusic', 'assets/Sonido_Musica/Shop Music.mp3');
        this.load.audio('BuySound', 'assets/Sonido_Musica/Comprar Sonido.mp3');
        this.load.audio('Alarma', 'assets/Sonido_Musica/AlarmaTiempo.mp3');
        this.load.audio('Coche', 'assets/Sonido_Musica/CarSound.mp3');
        this.load.audio('RadioSound', 'assets/Sonido_Musica/RadioSound.mp3');
        this.load.audio('MuscicaMenus', 'assets/Sonido_Musica/RadioSound.mp3');

        //ANIMACIONS
        this.load.spritesheet( 'personIdleVer', 'assets/Imagenes/Personajes/VerdeDia1.png',{ frameWidth: 17.25, frameHeight: 24 });
        this.load.spritesheet( 'personIdleMor','assets/Imagenes/Personajes/MoradoDia1.png',{ frameWidth: 17, frameHeight: 25 });  
        this.load.spritesheet('personIdleAz','assets/Imagenes/Personajes/AzulDia1.png',{ frameWidth: 16, frameHeight: 26 });
        this.load.spritesheet('personIdleAma','assets/Imagenes/Personajes/Amarillo.png',{ frameWidth: 16.5, frameHeight: 25 });
    }
    create(){
        this.anims.create({
            key: 'personVer',
            frames:  this.anims.generateFrameNames('personIdleVer', { start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({
            key: 'personMor',
            frames:  this.anims.generateFrameNames('personIdleMor', { start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({
            key: 'personAz',
            frames:  this.anims.generateFrameNames('personIdleAz', { start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({
            key: 'personAma',
            frames:  this.anims.generateFrameNames('personIdleAma', { start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
        });
        this.scene.start("menuInicial");
    }
}