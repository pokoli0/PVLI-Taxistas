export default class conversacionLvl1 extends Phaser.Scene{
    constructor(){
        super({key: 'conversacionLvl1'});

        this.dialogoActual = null;
    }
    preload(){
        this.load.image('fondo', 'assets/Imagenes/fondoConversacion.jpg')
    }

    create(){
        this.add.sprite(500, 250, 'fondo');
        // Configuración inicial de la escena conversacional
        this.add.text(500, 125, 'BIENVENIDO A LA ESCENA CONVERSACIONAL', { fill: '#000000' });

        this.dialogoActual = this.textoOpciones('pregunta1');
       
    }
    opcionPulsada(opcion){
        if (this.dialogoActual) {
            this.dialogoActual.destroy();
        }
        this.dialogoActual = this.textoOpciones(opcion);

    }
    textoOpciones(opcion){
        if(opcion == 'pregunta2'){
            const res1 = this.add.zone(340, 170, 300, 30);
            res1.setOrigin(0);
            res1.setInteractive();
            res1.once('pointerdown', () => this.opcionPulsada('pregunta2'));
            this.add.graphics().lineStyle(2, 0xfff000).strokeRectShape(res1);
           
            const res2 = this.add.zone(680, 170, 300, 30);
            res2.setOrigin(0);
            res2.setInteractive();
            res2.once('pointerdown', () => this.opcionPulsada('pregunta2'));
            this.add.graphics().lineStyle(2, 0xfff000).strokeRectShape(res2);
        }
        else if (opcion == 'pregunta1'){
            const res1 = this.add.zone(340, 170, 300, 30);
            res1.setOrigin(0);
            res1.setInteractive();
            res1.once('pointerdown', () => this.opcionPulsada('pregunta2'));
            this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(res1);
           
            const res2 = this.add.zone(680, 170, 300, 30);
            res2.setOrigin(0);
            res2.setInteractive();
            res2.once('pointerdown', () => this.opcionPulsada('pregunta2'));
            this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(res2);
        }
    }
}