export default class MenuDias extends Phaser.Scene{
    constructor() {
        super({ key: 'menuDias' });
        this.monedas = 1000;
        this.textoMonedas;
        this.level = 1;
      }

      create() {
        //Ponemos imagenes:
      this.add.image(500, 250, 'fondoMenu'); //Fondo

      this.add.image(560, 95, 'Moneda').setScale(1.4);
      this.textoMonedas = this.add.text(420, 75, this.monedas, {
        fontSize: '50px',
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
    }

    createBotones(){
              
    this.botonDia1();
    this.botonDia2();
    this.botonDia3();

      const botonTienda = this.add.image(500, 450, 'Tienda').setInteractive().setScale(0.35);
      botonTienda.on('pointerdown', () => {
        this.scene.stop('menuDias');
        this.scene.start('Shop', {
           monedas : this.monedas,
           menuDiasScene: this
        });}
      );    
      //Ponemos sonido a la escena:
      var musica = this.sound.add('menuSong');
      musica.play({
          loop: true //para que este en bucle
      })
    }

    actualizarMonedas(monedas) {
        this.monedas = monedas;
        this.textoMonedas.setText(this.monedas);
    }

    botonDia1(){
      const dia1 = this.add.image(200, 250, 'diasBotones').setInteractive();
      dia1.on("pointerdown", () => {
        this.level++;
        this.scene.start('controlLevels', {
            gpsActivado: this.gpsActivado,
            aceleracionActivada: this.aceleracionActivada,
            tiempoActivado: this.tiempoActivado
        });
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
      const dia2 = this.add.image(500, 250, 'diasBotones');
      this.add.text(453, 170, //Posicion de las preguntas (CAMBIAR ESTO)
      "DIA 2", 
      { 
          fill: '#FFFFFF',  //Color del texto de las preguntas
          fontFamily: "VT323",
          fontSize: '50px'
      });
      this.add.image(500, 300, 'candado');
      if(this.levelCompletado  && this.level == 2){
        dia2.setInteractive();
        dia2.on("pointerdown", () => {
          this.level++;
          this.scene.start('controlLevels', {
              gpsActivado: this.gpsActivado,
              aceleracionActivada: this.aceleracionActivada,
              tiempoActivado: this.tiempoActivado
          });
      });
    }
    }
    botonDia3(){
      const dia3 = this.add.image(800, 250, 'diasBotones');
      this.add.text(753, 170, //Posicion de las preguntas (CAMBIAR ESTO)
      "DIA 3", 
      { 
          fill: '#FFFFFF',  //Color del texto de las preguntas
          fontFamily: "VT323",
          fontSize: '50px'
      });
      this.add.image(800, 300, 'candado');
      if(this.levelCompletado  && this.level == 3){
        dia3.setInteractive();
        dia3.on("pointerdown", () => {
          this.scene.start('controlLevels', {
              gpsActivado: this.gpsActivado,
              aceleracionActivada: this.aceleracionActivada,
              tiempoActivado: this.tiempoActivado
          });
      });
    }
    }
}