export default class Shop extends Phaser.Scene{
    constructor(){
        super({ key: 'Shop' });

        this.gpsActivado = false;
        this.aceleracionActivada = false;
        this.tiempoActivado = false;
    }
    create() {
        const width = this.cameras.main.width; 
        const height = this.cameras.main.height;  

        this.add.image(0, 0, 'FondoTienda').setOrigin(0).setDisplaySize(width, height);

        const botonGPS = this.add.image(100, 100, 'GPS').setInteractive().setScale(0.3);
        const botonAceleracion = this.add.image(300, 100, 'Aceleracion').setInteractive().setScale(0.3);
        const botonTiempo = this.add.image(100, 300, 'TiempoExtra').setInteractive().setScale(0.3);
        const botonVolver = this.add.image(300, 300, 'Dias').setInteractive().setScale(0.3);

        botonGPS.on('pointerdown', () => this.botonGPSPresionado());
        botonAceleracion.on('pointerdown', () => this.botonAceleracionPresionado());
        botonTiempo.on('pointerdown', () => this.botonTiempoPresionado());
        botonVolver.on('pointerdown', () => this.botonVolverPresionado());
    }

    botonGPSPresionado(){
        this.gpsActivado = true;
    }

    botonAceleracionPresionado(){
        this.aceleracionActivada = true;
    }

    botonTiempoPresionado(){
        this.tiempoActivado = true;
    }

    botonVolverPresionado(){
        this.scene.stop('Shop');
        this.scene.start('menuDias', {
            gpsActivado: this.gpsActivado,
            aceleracionActivada: this.aceleracionActivada,
            tiempoActivado: this.tiempoActivado,
        });
    }
}