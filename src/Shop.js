export default class Shop extends Phaser.Scene{
    constructor(){
        super({ key: 'Shop' });

        this.gpsActivado = false;
        this.aceleracionActivada = false;
        this.tiempoActivado = false;
    }
    create() {
        this.add.image(0, 0, 'tienda').setOrigin(0);

        const botonGPS = this.add.image(100, 100, 'botonGPS').setInteractive();
        const botonAceleracion = this.add.image(300, 100, 'botonAceleracion').setInteractive();
        const botonTiempo = this.add.image(100, 300, 'botonTiempo').setInteractive();
        const botonVolver = this.add.image(300, 300, 'botonVolver').setInteractive();

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
        this.scene.start('MenuDias', {
            gpsActivado: this.gpsActivado,
            aceleracionActivada: this.aceleracionActivada,
            tiempoActivado: this.tiempoActivado,
        });
    }
}