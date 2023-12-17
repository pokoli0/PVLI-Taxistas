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
        this.add.image(0, 0, 'controles'); //Imagen de los controles
        const backButton = this.add.image(this.scale.width / 2, this.scale.height / 1.6, 'playButton').setInteractive(); //Boton de VOLVER


         //Conexion con escena Main Menu
         backButton.on("pointerdown", () => {
            this.scene.start('menuInicial');
        });
    }
}