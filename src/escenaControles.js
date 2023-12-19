export default class Controles extends Phaser.Scene {
    constructor() {
      super({ key: 'escenaControles' });
    }

    preload(){
        this.load.image('controles', 'assets/Imagenes/Controles.png');
    }

    create(){
        //Ponemos imagenes:
        this.add.image(500, 250, 'controles'); //Imagen de los controles

        //Botón atrás:
        const backButton = this.add.image(this.scale.width - 925, this.scale.height - 50, 'VolverMenuDias').setInteractive().setScale(0.25);

        const ButtonClicked = this.sound.add('Button');
        const CursorOnButton = this.sound.add('CursorOnButton');

        //Conexion con escena Main Menu
        backButton.on("pointerdown", () => {
            this.scene.start('menuInicial');
            ButtonClicked.play(); 
        });
        backButton.on('pointerover', () => {
            CursorOnButton.play();
            backButton.setScale(0.3);
        });
        backButton.on('pointerout', () => {
            backButton.setScale(0.25);
        });
    }
}