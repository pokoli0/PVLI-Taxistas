//Clase para el menu principal del juego
export default class Menu extends Phaser.Scene {
    constructor() {
      super({ key: 'menuInicial' });
  
    }
    preload(){
        this.load.image('fondoMenu','assets/Imagenes/fondo.jpg' );
        this.load.image('playButton','assets/Imagenes/playButton.png' )
    }
    create() {
  
    //   this.sonidoMenu();
  
      this.add.image(500, 250, 'fondoMenu');
      const play = this.add.image(this.scale.width / 2, this.scale.height / 1.2, 'playButton').setInteractive();
    //   this.playbutton2 = this.add.text(this.scale.width / 2 - 60, this.scale.height / 2 + 120, "________").setInteractive();
    //   this.playbutton3 = this.add.text(this.scale.width / 2 - 180, this.scale.height / 2 - 40, "____________").setInteractive();
    //   this.playbutton4 = this.add.text(this.scale.width / 2 + 340, this.scale.height / 2 + 175, "______").setInteractive();
  
  
    
    //   this.playbutton2.setScale(3);
    //   this.playbutton3.setScale(3);
    //   this.playbutton4.setScale(3);
  
    //   //conexion con escena level
     play.on("pointerdown", () => {
         this.scene.start('level1');
        //  { mapName: 'finalMap1',dash:false, click:false, middle:'one' });
       });
  
    //   //conexion con escena level3
    //   this.playbutton2.on("pointerdown", () => {
    //     this.menusong.destroy();
    //     this.scene.start('level1',{ mapName: 'map3',dash:true, click:true , middle:'one' })
    //   });
  
    //   //conexion con escena configuracion
    //   this.playbutton3.on("pointerdown", () => {
  
    //     this.menusong.destroy();
    //     this.scene.start('configuracion');
    //   });
  
    //   //conexion con escena creditos
    //   this.playbutton4.on("pointerdown", () => {
    //     this.menusong.destroy();
    //     this.scene.start('Creditos');
    //   });
  
    }
  
    // sonidoMenu() {
    //   const config = {
    //     mute: false,
    //     volume: 1,
    //     rate: 1,
    //     detune: 0,
    //     seek: 0,
    //     loop: true,
    //     delay: 0
    //   };
    //   this.menusong = this.sound.add('menusong');
    //   this.menusong.play();
    // }
  }