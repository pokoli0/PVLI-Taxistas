export default class Shop extends Phaser.Scene{
    constructor(){
        super({ key: 'Shop' });

        this.gpsActivado = false;
        this.aceleracionActivada = false;
        this.tiempoActivado = false;
        this.menuDiasScene;
        this.ShopMusic;
    }

    init(data){
        this.puntos = data.puntos;
        this.menuDiasScene = data.menuDiasScene;
        this.levelCompletado = data.levelCompletado;
    }

    create() {
        this.createbuttons();
        this.ShopMusic = this.sound.add('ShopMusic');
        this.ShopMusic.play({
            loop: true 
        })
    }

    botonGPSPresionado(textoMonedas){
        if(this.puntos > 100 && !this.gpsActivado){
            this.gpsActivado = true;
            this.puntos -= 100;
            textoMonedas.setText(this.puntos);
        }
    }

    botonAceleracionPresionado(textoMonedas){
        if(this.puntos > 75 && !this.aceleracionActivada){
        this.aceleracionActivada = true;
        this.puntos -= 75;
        textoMonedas.setText(this.puntos);
        }
    }

    botonTiempoPresionado(textoMonedas){
        if(this.puntos > 50 && !this.tiempoActivado){
        this.tiempoActivado = true;
        this.puntos -= 50;
        textoMonedas.setText(this.puntos);
        }
    }

    botonVolverPresionado(){
        //this.menuDiasScene.actualizarMonedas(this.monedas);
        this.scene.start('menuDias', {
            gpsActivado: this.gpsActivado,
            aceleracionActivada: this.aceleracionActivada,
            tiempoActivado: this.tiempoActivado,
            levelCompletado: this.levelCompletado,
            puntos : this.puntos,
        });
    }

    createbuttons(){
        const width = this.cameras.main.width; 
        const height = this.cameras.main.height;  
        const ButtonClicked = this.sound.add('Button');
        const CursorOnButton = this.sound.add('CursorOnButton');
        const BuySound = this.sound.add('BuySound');


        this.add.image(0, 0, 'FondoTienda').setOrigin(0).setDisplaySize(width, height);

        this.add.image(850, 420, 'Moneda').setScale(1.5);
        this.textoMonedas = this.add.text(748, 385, this.puntos, {
        fontSize: '70px',
        fontFamily: "VT323",
        fill: '#fff',
        align: 'center',
        });

        const botonGPS = this.add.image(160, 200, 'GPS').setInteractive().setScale(0.3);
        if (!this.gpsActivado){
            botonGPS.on('pointerdown', () => {
                BuySound.play(); 
                botonGPS.setScale(0.3); 
                this.botonGPSPresionado(this.textoMonedas);
            });
            botonGPS.on('pointerover', () => {
                if (!this.gpsActivado){
                 CursorOnButton.play();
                 botonGPS.setScale(0.35);
                }
            });
            
            botonGPS.on('pointerout', () => {
                if (!this.gpsActivado){
                    botonGPS.setScale(0.3);
                    }
            });
            this.add.image(170, 300, 'DescripcionGPS').setInteractive().setScale(0.2);
            this.add.image(190, 130, 'Moneda').setScale(1.2);
            this.precioGPS = this.add.text(115, 105, 100, {
                fontSize: '50px',
                fontFamily: "VT323",
                fill: '#fff',
                align: 'center',
            });
        }
        else{
            this.Agotado1 = this.add.text(90, 250, "AGOTADO", {
                fontSize: '50px',
                fontFamily: "VT323",
                fill: '#fff',
                align: 'center',
            });
        }
        const botonAceleracion = this.add.image(500, 200, 'Aceleracion').setInteractive().setScale(0.3);
        if (!this.aceleracionActivada){
            botonAceleracion.on('pointerdown', () => {
                BuySound.play(); 
                botonAceleracion.setScale(0.3);
                this.botonAceleracionPresionado(this.textoMonedas)
            });
            botonAceleracion.on('pointerover', () => {
                if (!this.aceleracionActivada){
                    CursorOnButton.play();
                    botonAceleracion.setScale(0.35);
                }
            });
            
            botonAceleracion.on('pointerout', () => {
                if (!this.aceleracionActivada){
                    botonAceleracion.setScale(0.3);
                    }
            });
            this.add.image(510, 300, 'DescripcionAceleracion').setInteractive().setScale(0.2);
            this.add.image(530, 130, 'Moneda').setScale(1.2);
            this.precioAceleracion = this.add.text(470, 105, 75, {
                fontSize: '50px',
                fontFamily: "VT323",
                fill: '#fff',
                align: 'center',
            });
        }
        else{
            this.Agotado2 = this.add.text(430, 250, "AGOTADO", {
                fontSize: '50px',
                fontFamily: "VT323",
                fill: '#fff',
                align: 'center',
            });
        }
        const botonTiempo = this.add.image(840, 200, 'TiempoExtra').setInteractive().setScale(0.3);
        if (!this.tiempoActivado){
            botonTiempo.on('pointerdown', () => {
                BuySound.play(); 
                botonTiempo.setScale(0.3);
                this.botonTiempoPresionado(this.textoMonedas)
            });
            botonTiempo.on('pointerover', () => {
                if (!this.tiempoActivado){
                    CursorOnButton.play();
                    botonTiempo.setScale(0.35);
                }
            });
            
            botonTiempo.on('pointerout', () => {
                if (!this.tiempoActivado){
                    botonTiempo.setScale(0.3);
                    }
            });
            this.add.image(860, 300, 'DescripcionTiempoExtra').setInteractive().setScale(0.2);
            this.add.image(870, 130, 'Moneda').setScale(1.2);
            this.precioTiempoExtra = this.add.text(810, 105, 50, {
                fontSize: '50px',
                fontFamily: "VT323",
                fill: '#fff',
                align: 'center',
            });
        }
        else{
            this.Agotado3 = this.add.text(775, 250, "AGOTADO", {
                fontSize: '50px',
                fontFamily: "VT323",
                fill: '#fff',
                align: 'center',
            });
        }
        const botonVolver = this.add.image(this.scale.width - 925, this.scale.height - 50, 'VolverMenuDias').setInteractive().setScale(0.25);
        botonVolver.on('pointerdown', () => { 
            this.ShopMusic.stop(); 
            ButtonClicked.play(); 
            this.botonVolverPresionado();
        });
        botonVolver.on('pointerover', () => {
                CursorOnButton.play();
                botonVolver.setScale(0.3);
        });
        botonVolver.on('pointerout', () => {
                botonVolver.setScale(0.25);
        });
    }
}