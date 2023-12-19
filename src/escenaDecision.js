export default class escenaDecision extends Phaser.Scene{
    constructor(){
        super({key: 'escenaDecision'});
        this.asesino;
        this.puntos; // Inicializa los puntos
        this.textoPuntos; // Variable para almacenar el objeto de texto de los puntos
        this.time = 0;
    }
    preload(){
    }
    create(){

        this.add.image(500, 250, 'fondo').setAlpha(0.5);
        
        this.asesino = this.sys.settings.data.asesino;
        this.puntos = this.sys.settings.data.puntos;
        
        const moneda = this.add.sprite(40, 40, 'moneda');
        moneda.setScale(0.15);
        this.textoPuntos = this.add.text(moneda.x,
            moneda.y, this.puntos, { fontSize: '48px', fill: '#000' , align: 'center',});
        this.textoPuntos.setOrigin(0.5);
        this.botonCielo();
        this.botonInfierno();
        this.botonVivir();
    }
    actualizarPuntos() {
        this.textoPuntos.setText(this.puntos);
    }
    botonCielo(){
        const botonCielo= this.add.sprite(250, 400, 'botonCielo').setInteractive();
        botonCielo.setScale(0.3);
        botonCielo.on('pointerdown', () => {
            if (!this.asesino) {
                this.puntos += 25; // Incrementa los puntos en 50
                this.actualizarPuntos(); // Actualiza el objeto de texto
                this.add.text(230, 170, //Posicion de las preguntas (CAMBIAR ESTO)
                "Has enviado a un ángel al cielo, felicidades.", 
                { 
                    fill: '#ffffff',  //Color del texto de las preguntas
                    fontFamily: "VT323",
                    fontSize: '30px'
                });
            }else{
                this.puntos -= 15; // Incrementa los puntos en 50
                this.actualizarPuntos(); // Actualiza el objeto de texto
                this.add.text(200, 133, //Posicion de las preguntas (CAMBIAR ESTO)
                "No ha sido tu mejor decision.", 
                { 
                    fill: '#ffffff',  //Color del texto de las preguntas
                    fontFamily: "VT323",
                    fontSize: '30px'
                });
            }
            botonCielo.disableInteractive();
            this.time.delayedCall(3000, () => {
            const controlLevelsScene = this.scene.get('controlLevels', {puntos: this.puntos});
            // Llamar al método avanzarAlSiguienteNivel() de la escena de controlLevels
            controlLevelsScene.avanzarAlSiguienteNivel(this.puntos);
            // Detener la escena actual
            this.scene.stop('escenaDecision');
            // Pasar los puntos a la escena de controlLevels
            });
            
            
        });
        
    }
    botonInfierno(){
        const botonInf= this.add.sprite(750, 400, 'botonInf').setInteractive();
        botonInf.setScale(0.3);
        botonInf.on('pointerdown', () => {
            if (this.asesino) {
                this.puntos += 25; // Incrementa los puntos en 50
                this.actualizarPuntos(); // Actualiza el objeto de texto
                this.add.text(200, 133, //Posicion de las preguntas (CAMBIAR ESTO)
                "¡Felicidades! Ha ganado un boleto de ida al infierno.\nQue no olvide llevar protector solar.", 
                { 
                    fill: '#ffffff',  //Color del texto de las preguntas
                    fontFamily: "VT323",
                    fontSize: '30px'
                });
            }else{
                this.puntos -= 15; // Incrementa los puntos en 50
                this.actualizarPuntos(); // Actualiza el objeto de texto
                this.add.text(200, 133, //Posicion de las preguntas (CAMBIAR ESTO)
                "Fallaste, ten cuidado esto podria tener consecuencias.",
                {
                    fill: '#ffffff',  //Color del texto de las preguntas
                    fontFamily: "VT323",
                    fontSize: '30px'
                });
            }
            botonInf.disableInteractive();
            this.time.delayedCall(3000, () => {
            const controlLevelsScene = this.scene.get('controlLevels');
            // Llamar al método avanzarAlSiguienteNivel() de la escena de controlLevels
            controlLevelsScene.avanzarAlSiguienteNivel(this.puntos);
            // Detener la escena actual
            this.scene.stop('escenaDecision');
            // Pasar los puntos a la escena de controlLevels
            });
        });

    }
    botonVivir(){
        const dejarVivo= this.add.sprite(500, 400, 'dejarVivo').setInteractive();
        dejarVivo.setScale(0.3);
        dejarVivo.on('pointerdown', () => {
            this.add.text(200, 133, //Posicion de las preguntas (CAMBIAR ESTO)
                "Su destino pende de un hilo.\nLa vida le ha dado una segunda oportunidad.",
                {
                    fill: '#ffffff',  //Color del texto de las preguntas
                    fontFamily: "VT323",
                    fontSize: '30px'
                });
            dejarVivo.disableInteractive();
            this.time.delayedCall(3000, () => {
            const controlLevelsScene = this.scene.get('controlLevels');
            // Llamar al método avanzarAlSiguienteNivel() de la escena de controlLevels
            controlLevelsScene.avanzarAlSiguienteNivel(this.puntos);
            // Detener la escena actual
            this.scene.stop('escenaDecision');
            // Pasar los puntos a la escena de controlLevels
            });
        });
    }
}