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
        this.createbuttons();
    }

    botonGPSPresionado(textoMonedas){
        if(this.monedas > 100 && !this.gpsActivado){
            this.gpsActivado = true;
            this.monedas -= 100;
            textoMonedas.setText(this.monedas);
        }
    }

    botonAceleracionPresionado(textoMonedas){
        if(this.monedas > 75 && !this.aceleracionActivada){
        this.aceleracionActivada = true;
        this.monedas -= 75;
        textoMonedas.setText(this.monedas);
        }
    }

    botonTiempoPresionado(textoMonedas){
        if(this.monedas > 50 && !this.tiempoActivado){
        this.tiempoActivado = true;
        this.monedas -= 50;
        textoMonedas.setText(this.monedas);
        }
    }

    botonVolverPresionado(){
        this.menuDiasScene.actualizarMonedas(this.monedas);
        this.scene.start('menuDias', {
            gpsActivado: this.gpsActivado,
            aceleracionActivada: this.aceleracionActivada,
            tiempoActivado: this.tiempoActivado,
        });
    }

    createbuttons(){
        const width = this.cameras.main.width; 
        const height = this.cameras.main.height;  

        this.add.image(0, 0, 'FondoTienda').setOrigin(0).setDisplaySize(width, height);

        this.add.image(850, 420, 'Moneda').setScale(1.4);
        this.textoMonedas = this.add.text(700, 400, this.monedas, {
        fontSize: '50px',
        fill: '#fff',
        align: 'center',
        });

        const botonGPS = this.add.image(160, 200, 'GPS').setInteractive().setScale(0.3);
        if (!this.gpsActivado){
            this.add.image(170, 300, 'DescripcionGPS').setInteractive().setScale(0.2);
            this.add.image(190, 140, 'Moneda').setScale(1.2);
            this.precioGPS = this.add.text(115, 125, 100, {
                fontSize: '32px',
                fill: '#fff',
                align: 'center',
            });
        }
        const botonAceleracion = this.add.image(500, 200, 'Aceleracion').setInteractive().setScale(0.3);
        if (!this.aceleracionActivada){
            this.add.image(510, 300, 'DescripcionAceleracion').setInteractive().setScale(0.2);
            this.add.image(530, 140, 'Moneda').setScale(1.2);
            this.precioAceleracion = this.add.text(470, 125, 75, {
                fontSize: '32px',
                fill: '#fff',
                align: 'center',
            });
        }
        const botonTiempo = this.add.image(840, 200, 'TiempoExtra').setInteractive().setScale(0.3);
        if (!this.tiempoActivado){
            this.add.image(860, 300, 'DescripcionTiempoExtra').setInteractive().setScale(0.2);
            this.add.image(860, 140, 'Moneda').setScale(1.2);
            this.precioTiempoExtra = this.add.text(800, 125, 50, {
                fontSize: '32px',
                fill: '#fff',
                align: 'center',
            });
        }
        const botonVolver = this.add.image(50, 450, 'VolverMenuDias').setInteractive().setScale(0.3);

        botonGPS.on('pointerdown', () => this.botonGPSPresionado(this.textoMonedas));
        botonAceleracion.on('pointerdown', () => this.botonAceleracionPresionado(this.textoMonedas));
        botonTiempo.on('pointerdown', () => this.botonTiempoPresionado(this.textoMonedas));
        botonVolver.on('pointerdown', () => this.botonVolverPresionado());
    }
}