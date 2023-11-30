export default class conversacionLvl1 extends Phaser.Scene{
    constructor(){
        super({key: 'conversacionLvl1'});

        this.dialogoActual = null;
        this.indice = 0;
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
        const opciones = ['pregunta1', 'pregunta2'];

    if (opciones.includes(opcion)) {
        const colores = (opcion === 'pregunta1') ? 0xfff000 : 0xff0000;
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                const x = 340 + 340 * j;
                const y = 170 + 100 * i;

                const res = this.add.zone(x, y, 300, 30);
                res.setOrigin(0);
                res.setInteractive();
                const opcionSeleccionada = opciones[this.indice];
                res.once('pointerdown', () => this.opcionPulsada(opcionSeleccionada));
                this.add.graphics().lineStyle(2, colores).strokeRectShape(res);
            }
        }
    }
    this.indice++;
    }
}