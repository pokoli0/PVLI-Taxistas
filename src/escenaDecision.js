export default class escenaDecision extends Phaser.Scene{
    constructor(){
        super({key: 'escenaDecision'});
        this.asesino;
        this.puntos = 0; // Inicializa los puntos
        this.textoPuntos; // Variable para almacenar el objeto de texto de los puntos
    }
    preload(){
        this.load.image('botonCielo', 'assets/Imagenes/Botones/Cielo.png');
        this.load.image('botonInf', 'assets/Imagenes/Botones/Infierno.png');
        this.load.image('dejarVivo', 'assets/Imagenes/Botones/Vivo.png');
    }
    create(){
        this.asesino = this.sys.settings.data.asesino;
        

        // Crear objeto de texto para los puntos
        this.textoPuntos = this.add.text(10, 10, '0', { fontSize: '64px', fill: '#fff' });

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