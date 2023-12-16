export default class MenuDias extends Phaser.Scene{
    constructor() {
        super({ key: 'menuDias' });
        this.monedas = 1000;
      }

      create() {
        this.createBotones();
        
    }

    init(data) {
        // Accede a los booleanos desde el objeto de datos
        this.gpsActivado = data.gpsActivado || false;
        this.aceleracionActivada = data.aceleracionActivada || false;
        this.tiempoActivado = data.tiempoActivado || false;
    }

    createBotones(){
      //Ponemos imagenes:
      this.add.image(500, 250, 'fondoMenu'); //Fondo

      const textoMonedas = this.add.text(360, 75, `Monedas: ${this.monedas}`, {
        fontSize: '32px',
        fill: '#fff',
        align: 'center',
    });
              
      const dia1 = this.add.image(200, 250, 'diasBotones').setInteractive();
      dia1.on("pointerdown", () => {
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
      this.add.image(500, 250, 'diasBotones');
      this.add.text(453, 170, //Posicion de las preguntas (CAMBIAR ESTO)
                  "DIA 2", 
                  { 
                      fill: '#FFFFFF',  //Color del texto de las preguntas
                      fontFamily: "VT323",
                      fontSize: '50px'
                  });
      this.add.image(500, 300, 'candado');
      this.add.image(800, 250, 'diasBotones');
      this.add.text(753, 170, //Posicion de las preguntas (CAMBIAR ESTO)
                  "DIA 3", 
                  { 
                      fill: '#FFFFFF',  //Color del texto de las preguntas
                      fontFamily: "VT323",
                      fontSize: '50px'
                  });
      this.add.image(800, 300, 'candado');

      const botonTienda = this.add.image(500, 450, 'Tienda').setInteractive().setScale(0.5);
      botonTienda.on('pointerdown', () => {
        this.scene.stop('menuDias');
        this.scene.start('Shop', {
           monedas : this.monedas
        });}
      );
      
      //Ponemos sonido a la escena:
      var musica = this.sound.add('menuSong');
      musica.play({
          loop: true //para que este en bucle
      })
    }
}