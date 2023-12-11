//Clase para el menu principal del juego
export default class Menu extends Phaser.Scene {
    constructor() {
      super({ key: 'menuInicial' });
  
    }
    preload() {

        //Imagenes
        this.load.image('fondoMenu', 'assets/Imagenes/fondo.jpg');
        this.load.image('Portada', 'assets/Imagenes/Portada.png');
        this.load.image('playButton', 'assets/Imagenes/Botones/playButton.png');

        //Sonido
        this.load.audio('menuSong', 'assets/Sonido_Musica/MusicaInicio.mp3');
    }
    create() {

        //Ponemos imagenes:
        this.add.image(500, 250, 'Portada'); //Fondo
        const button = this.add.image(this.scale.width / 2, this.scale.height / 1.2, 'playButton').setInteractive(); //Boton

        //Ponemos sonido a la escena:
        var musica = this.sound.add('menuSong');
        musica.play({
            loop: true, //para que est� en bucle
            mute: false
        })

        //Conexion con escena level (al pulsar bot�n)
        button.on("pointerdown", () => {
            this.sound.stopAll(); //que pare la musica del menu de inicio
            this.scene.start('level1');
        });
  
  
      this.add.image(500, 250, 'fondoMenu');
      const play = this.add.image(this.scale.width / 2, this.scale.height / 1.2, 'playButton').setInteractive();

      //conexion con escena level
     play.on("pointerdown", () => {
         this.scene.start('controlLevels');
       });
    }
  }