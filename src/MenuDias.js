export default class MenuDias extends Phaser.Scene{
    constructor() {
        super({ key: 'menuDias' });
      }

      create() {
        this.createBotones();
        
    }

    createBotones(){
      //Ponemos imagenes:
      this.add.image(500, 250, 'fondoMenu'); //Fondo
              
      this.add.image(200, 250, 'diasBotones');
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
      //Ponemos sonido a la escena:
      var musica = this.sound.add('menuSong');
      musica.play({
          loop: true //para que este en bucle
      })
    }
}