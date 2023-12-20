//Clase para el menu principal del juego
export default class Menu extends Phaser.Scene {
    constructor() {
      super({ key: 'menuInicial' });
    this.puntos = 175;
    }
    preload() {
    }
    create() {
        
        //Ponemos imagenes:
        const background = this.add.video(500, 250, 'FondoMenu');
        background.play(true); // Reproduce el video en bucle
        background.setAlpha(0.7);
        this.Music = this.sound.add('menu');
        this.Music.play({
            loop: true 
        })
        const button = this.add.image(this.scale.width / 2, this.scale.height / 1.6, 'Play').setInteractive().setScale(0.4); 
        const controlesButton = this.add.image(this.scale.width / 2, this.scale.height / 1.25, 'ControlesButton').setInteractive().setScale(0.35); //Boton de CONTROLES
        const ButtonClicked = this.sound.add('Button');
        const CursorOnButton = this.sound.add('CursorOnButton');
        

        //Ponemos sonido a la escena:
       /* var musica = this.sound.add('menuSong');
        musica.play({
            loop: true //para que este en bucle
        })*/
        this.ponerTitulo();
        //Conexion con escena level (al pulsar boton)
        button.on("pointerdown", () => {
            ButtonClicked.play();
            this.sound.stopAll(); //que pare la musica del menu de inicio
            this.scene.start('menuDias', {
                puntos : this.puntos
            });
            ButtonClicked.play();
        });
        button.on('pointerover', () => {
                CursorOnButton.play();
                button.setScale(0.45);
        });
        
        button.on('pointerout', () => {
                button.setScale(0.4);
        });

        //Conexion con escena Controles
        controlesButton.on("pointerdown", () => {
            ButtonClicked.play();
            this.scene.start('escenaControles');
        });
        controlesButton.on('pointerover', () => {
            CursorOnButton.play();
            controlesButton.setScale(0.4);
    });
    
    controlesButton.on('pointerout', () => {
        controlesButton.setScale(0.35);
    });
    }

    ponerTitulo(){
        console.log("Titulo")
        this.add.text(370, 20, //Posicion de las preguntas (CAMBIAR ESTO)
                    'DEATH\nCAB', 
                    { 
                        fill: '#ffe00f',  //Color del texto de las preguntas
                        fontFamily: "VT323",
                        fontSize: '130px',
                        align: 'center'
                    });
    }
  }