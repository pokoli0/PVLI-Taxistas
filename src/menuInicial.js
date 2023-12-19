//Clase para el menu principal del juego
export default class Menu extends Phaser.Scene {
    constructor() {
      super({ key: 'menuInicial' });
  
    }
    preload() {
    }
    create() {

        //Ponemos imagenes:
        this.add.image(500, 250, 'fondoMenu'); //Fondo
        const button = this.add.image(this.scale.width / 2, this.scale.height / 1.6, 'Play').setInteractive().setScale(0.4); //Boton

        //Ponemos sonido a la escena:
       /* var musica = this.sound.add('menuSong');
        musica.play({
            loop: true //para que este en bucle
        })*/

        //Conexion con escena level (al pulsar boton)
        button.on("pointerdown", () => {
            this.sound.stopAll(); //que pare la musica del menu de inicio
            this.scene.start('menuDias');
        });
    }
  }