//Clase para el menu principal del juego
export default class Menu extends Phaser.Scene {
    constructor() {
      super({ key: 'menuInicial' });
  
    }
    preload(){
        this.load.image('fondoMenu','assets/Imagenes/fondo.jpg' );
        this.load.image('playButton','assets/Imagenes/playButton.png');
    }
    create() {
  
      this.add.image(500, 250, 'fondoMenu');
      const play = this.add.image(this.scale.width / 2, this.scale.height / 5.6, 'playButton').setInteractive();

     play.on("pointerdown", () => {
         this.scene.start('level1');
       });
    }
  }