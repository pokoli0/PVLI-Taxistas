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
        const play = this.add.image(this.scale.width / 2, this.scale.height / 1.2, 'playButton').setInteractive(); //Boton

        //Ponemos sonido a la escena:
        var musica = this.sound.add('menuSong');
        musica.play({
            loop: true //para que esté en bucle
        })

        //Conexion con escena level (al pulsar botón)
        play.on("pointerdown", () => {
            this.scene.start('level1');
        });
  
  
    }
  }