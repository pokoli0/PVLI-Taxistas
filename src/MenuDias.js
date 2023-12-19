const radios = [
  { dialogo: 'radioDia1.txt' },
  { dialogo: 'radioDia2.txt' },
  { dialogo: 'radioDia3.txt' }
];

export default class MenuDias extends Phaser.Scene{
    constructor() {
        super({ key: 'menuDias' });
        this.textoMonedas;
        this.level = 1;
        this.dia1;
        this.dia2;
        this.dia3;
      }

      create() {
        //Ponemos imagenes:
        const background = this.add.video(500, 250, 'FondoMenu');
        this.ButtonClicked = this.sound.add('Button');
        this.CursorOnButton = this.sound.add('CursorOnButton');

        background.play(true); // Reproduce el video en bucle

      this.add.image(850, 420, 'Moneda').setScale(1.5);
        this.textoMonedas = this.add.text(748, 385, this.puntos, {
        fontSize: '70px',
        fontFamily: "VT323",
        fill: '#fff',
        align: 'center',
        });
        this.createBotones();
        
    }

    init(data) {
        // Accede a los booleanos desde el objeto de datos
        this.gpsActivado = data.gpsActivado || false;
        this.aceleracionActivada = data.aceleracionActivada || false;
        this.tiempoActivado = data.tiempoActivado || false;
        this.levelCompletado = data.levelCompletado || false;
        this.puntos = data.puntos;
    }

    createBotones(){
              
    this.botonDia1();
    this.botonDia2();
    this.botonDia3();

    const ButtonClicked = this.sound.add('Button');
    const CursorOnButton = this.sound.add('CursorOnButton');
    const botonTienda = this.add.image(500, 450, 'Tienda').setInteractive().setScale(0.3);
      botonTienda.on('pointerdown', () => {
        ButtonClicked.play();
        this.scene.stop('menuDias');
        this.scene.start('Shop', {
          puntos : this.puntos,
           menuDiasScene: this,
           levelCompletado: this.levelCompletado
        });}
      );   
      botonTienda.on('pointerover', () => {
            CursorOnButton.play();
            botonTienda.setScale(0.35);
    });
    
    botonTienda.on('pointerout', () => {
          botonTienda.setScale(0.3);
    }); 
      //Ponemos sonido a la escena:
      /*var musica = this.sound.add('menuSong');
      musica.play({
          loop: true //para que este en bucle
      })*/
    }

    /*actualizarMonedas(monedas) {
        this.monedas = monedas;
        this.textoMonedas.setText(this.monedas);
    }*/

    botonDia1(){
      this.dia1 = this.add.image(200, 250, 'diasBotones').setInteractive();
      this.dia1.on("pointerdown", () => {
        this.ButtonClicked.play();
        this.level++;
        this.scene.start('Radio', {
            gpsActivado: this.gpsActivado,
            aceleracionActivada: this.aceleracionActivada,
            tiempoActivado: this.tiempoActivado,
            puntos: this.puntos,
            radio: radios[0].dialogo
        });
    });
    this.dia1.on('pointerover', () => {
      this.CursorOnButton.play();
      this.dia1.setScale(1.1);
});

this.dia1.on('pointerout', () => {
    this.dia1.setScale(1);
});
      this.add.text(153, 170, //Posicion de las preguntas (CAMBIAR ESTO)
                  "DIA 1", 
                  { 
                      fill: '#FFFFFF',  //Color del texto de las preguntas
                      fontFamily: "VT323",
                      fontSize: '50px'
                  });
    }

    botonDia2(){
      this.dia2 = this.add.image(500, 250, 'diasBotones');
      this.add.text(453, 170, //Posicion de las preguntas (CAMBIAR ESTO)
      "DIA 2", 
      { 
          fill: '#FFFFFF',  //Color del texto de las preguntas
          fontFamily: "VT323",
          fontSize: '50px'
      });
      const candado = this.add.image(500, 300, 'candado');
      if(this.levelCompletado  && this.level == 2){
        this.dia2.setInteractive();
        this.dia1.disableInteractive();
        candado.setVisible(false);
        this.dia2.on("pointerdown", () => {
          this.ButtonClicked.play();
          this.level++;
          this.scene.start('Radio', {
              gpsActivado: this.gpsActivado,
              aceleracionActivada: this.aceleracionActivada,
              tiempoActivado: this.tiempoActivado,
              puntos: this.puntos,
              radio: radios[1].dialogo
          });
      });
      this.dia2.on('pointerover', () => {
            this.CursorOnButton.play();
            this.dia2.setScale(1.1);
    });
    
    this.dia2.on('pointerout', () => {
          this.dia2.setScale(1);
    });
    }
    }
    botonDia3(){
      this.dia3 = this.add.image(800, 250, 'diasBotones');
      this.add.text(753, 170, //Posicion de las preguntas (CAMBIAR ESTO)
      "DIA 3", 
      { 
          fill: '#FFFFFF',  //Color del texto de las preguntas
          fontFamily: "VT323",
          fontSize: '50px'
      });
      const candado=this.add.image(800, 300, 'candado');
      if(this.levelCompletado  && this.level == 3){
        this.dia3.setInteractive();
        this.dia2.disableInteractive();
        candado.setVisible(false);
        this.dia3.on("pointerdown", () => {
          this.ButtonClicked.play();
          this.level++;
          this.scene.start('Radio', {
              gpsActivado: this.gpsActivado,
              aceleracionActivada: this.aceleracionActivada,
              tiempoActivado: this.tiempoActivado,
              puntos: this.puntos,
              radio: radios[2].dialogo
          });
      });
      this.dia3.on('pointerover', () => {
        this.CursorOnButton.play();
        this.dia3.setScale(1.1);
  });
  
  this.dia3.on('pointerout', () => {
      this.dia3.setScale(1);
  });
    }
    }
}