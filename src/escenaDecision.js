export default class escenaDecision extends Phaser.Scene{
    constructor(){
        super({key: 'escenaDecision'});
        this.asesino;
        this.puntos; // Inicializa los puntos
        this.textoPuntos; // Variable para almacenar el objeto de texto de los puntos
        this.time = 0;
    }
    preload(){
        this.load.image('botonCielo', 'assets/Imagenes/Botones/Cielo.png');
        this.load.image('botonInf', 'assets/Imagenes/Botones/Infierno.png');
        this.load.image('dejarVivo', 'assets/Imagenes/Botones/Vivo.png');
    }
    create(){
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
        botonCielo.setScale(0.4);
        botonCielo.on('pointerdown', () => {
            if (!this.asesino) {
                this.puntos += 25; // Incrementa los puntos en 50
                this.actualizarPuntos(); // Actualiza el objeto de texto
            }else{
                this.puntos -= 15; // Incrementa los puntos en 50
                this.actualizarPuntos(); // Actualiza el objeto de texto
            }
            this.time.delayedCall(1000, () => {
                botonCielo.disableInteractive();
            // Obtener referencia a la escena de controlLevels
            const controlLevelsScene = this.scene.get('controlLevels');
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
        botonInf.setScale(0.4);
        botonInf.on('pointerdown', () => {
            if (this.asesino) {
                this.puntos += 25; // Incrementa los puntos en 50
                this.actualizarPuntos(); // Actualiza el objeto de texto
            }else{
                this.puntos -= 15; // Incrementa los puntos en 50
                this.actualizarPuntos(); // Actualiza el objeto de texto
            }
        });
    }
    botonVivir(){
        const dejarVivo= this.add.sprite(500, 400, 'dejarVivo').setInteractive();
        dejarVivo.setScale(0.4);
        
    }
}