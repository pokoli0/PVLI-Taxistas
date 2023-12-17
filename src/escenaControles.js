export default class Controles extends Phaser.Scene {
    constructor() {
      super({ key: 'escenaControles' });
    }

    preload(){
        this.load.image('controles', 'assets/Imagenes/Controles.png');
    }

    create(){
        //Ponemos imagenes:
        this.add.image(500, 250, 'fondoMenu'); //Fondo
        this.add.image(, , 'controles'); //Imagen de los controles

        // Añade el botón para volver al menú inicial
        var botonVolver = this.add.image(400, 500, 'botonVolver').setInteractive();

        // Configura el evento del botón para volver al menú inicial
        botonVolver.on('pointerdown', function () {
            this.scene.start('MainMenu'); // Cambia 'MainMenu' por el nombre de tu escena de menú inicial
        }, this);
    }
}