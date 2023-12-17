export default class Shop extends Phaser.Scene{
    constructor(){
        super({ key: 'Shop' });

        this.gpsActivado = false;
        this.aceleracionActivada = false;
        this.tiempoActivado = false;
        this.menuDiasScene;
    }

    init(data){
        this.monedas = data.monedas;
        this.menuDiasScene = data.menuDiasScene;
    }
    create() {
        const width = this.cameras.main.width; 
        const height = this.cameras.main.height;  

        this.add.image(0, 0, 'FondoTienda').setOrigin(0).setDisplaySize(width, height);

        const textoMonedas = this.add.text(375, 100, `Monedas: ${this.monedas}`, {
            fontSize: '32px',
            fill: '#fff',
            align: 'center',
        });

        const botonGPS = this.add.image(200, 200, 'GPS').setInteractive().setScale(0.3);
        const botonAceleracion = this.add.image(500, 200, 'Aceleracion').setInteractive().setScale(0.3);
        const botonTiempo = this.add.image(800, 200, 'TiempoExtra').setInteractive().setScale(0.3);
        const botonVolver = this.add.image(50, 450, 'VolverMenuDias').setInteractive().setScale(0.3);

        botonGPS.on('pointerdown', () => this.botonGPSPresionado(textoMonedas));
        botonAceleracion.on('pointerdown', () => this.botonAceleracionPresionado(textoMonedas));
        botonTiempo.on('pointerdown', () => this.botonTiempoPresionado(textoMonedas));
        botonVolver.on('pointerdown', () => this.botonVolverPresionado());
    }

    botonGPSPresionado(textoMonedas){
        if(this.monedas > 100 && !this.gpsActivado){
            this.gpsActivado = true;
            this.monedas -= 100;
            textoMonedas.setText(`Monedas: ${this.monedas}`);
        }
    }

    botonAceleracionPresionado(textoMonedas){
        if(this.monedas > 75 && !this.aceleracionActivada){
        this.aceleracionActivada = true;
        this.monedas -= 75;
        textoMonedas.setText(`Monedas: ${this.monedas}`);
        }
    }

    botonTiempoPresionado(textoMonedas){
        if(this.monedas > 50 && !this.tiempoActivado){
        this.tiempoActivado = true;
        this.monedas -= 50;
        textoMonedas.setText(`Monedas: ${this.monedas}`);
        }
    }

    botonVolverPresionado(){
        this.menuDiasScene.actualizarMonedas(this.monedas);

        this.scene.stop('Shop');
        this.scene.start('menuDias', {
            gpsActivado: this.gpsActivado,
            aceleracionActivada: this.aceleracionActivada,
            tiempoActivado: this.tiempoActivado,
        });
    }
}