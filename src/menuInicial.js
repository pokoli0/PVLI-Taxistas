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
        const button = this.add.image(this.scale.width / 2, this.scale.height / 1.6, 'playButton').setInteractive(); //Boton de PLAY
        const controlesButton = this.add.image(this.scale.width, this.scale.heigh, 'controlesButton').setInteractive(); //Boton de CONTROLES

        //Ponemos sonido a la escena:
        var musica = this.sound.add('menuSong');
        musica.play({
            loop: true //para que este en bucle
        })

        //Conexion con escena level (al pulsar boton)
        button.on("pointerdown", () => {
            this.sound.stopAll(); //que pare la musica del menu de inicio
            this.scene.start('menuDias');
        });

        //Conexion con escena Controles
        controlesButton.on("pointerdown", () => {
            this.scene.start('escenaControles');
        });
    }
  }