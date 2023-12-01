export default class conversacionLvl1 extends Phaser.Scene{
    constructor(){
        super({key: 'conversacionLvl1'});

        this.dialogoActual = null;
        this.indice = 0;
        this.texto = ['Muy buenas, señor conduuctoor...',
        'Pues mira, tengo que ver a mi abuela que me tiene que enseñar a coser estos pantalones',
        'No me importaría aunque también depende mucho de que vas a poner, jaja', 
        'Ah sí, que pena lo que ha ocurrido pero en una ciudad tan grande, va a ocurrir esta clase de cosas inevitablemente', 
        'Lo mejor que me ha pasado en la vida entera'];
    }
    preload(){
        this.load.image('fondo', 'assets/Imagenes/fondoConver.png')
    }

    create(){
        this.add.sprite(500, 250, 'fondo');
       
        this.mostrarDialogo(this.texto[0], 'pregunta1');
       
    }
    opcionPulsada(texto){
        if (this.dialogoActual) {
            this.dialogoActual.destroy(true);
        }
        this.dialogoActual = this.mostrarDialogo(texto);

    }
   
    mostrarDialogo(texto){
        const colores = [0xfff000, 0xff0000, 0xffff00, 0xfffff0];
        const grupoDialogo = this.add.group();

        // Agregar texto al grupo
        const cuadrado = this.add.zone(145, 133, 395, 47);
        cuadrado.setOrigin(0);
        this.add.graphics().lineStyle(2, '#000000').strokeRectShape(cuadrado);
        const textoDialogo = this.add.text(145 + cuadrado.width / 2, 133 + cuadrado.height / 2,texto, { fill: '#000000',  wordWrap: { width: cuadrado.width, useAdvancedWrap: true },
        wordWrapWidth: cuadrado.width });
        // Ajusta el origen del texto al centro
        textoDialogo.setOrigin(0.5, 0.5);
        grupoDialogo.add(textoDialogo);
        this.indice++;
        // Agregar opciones al grupo
        if (this.texto.includes(texto)) {
            for (let j = 0; j < 3; j++) {
                const x = 102;
                const y = 205 + 70 * j;

                const res = this.add.zone(x, y, 440, 47);
                res.setOrigin(0);
                res.setInteractive();
                texto = this.texto[this.indice];
                res.once('pointerdown', () => this.opcionPulsada(texto));
                this.add.graphics().lineStyle(2, colores[this.indice]).strokeRectShape(res);

                grupoDialogo.add(res);
            }
        }
        
        // Asignar el grupo actual al dialogoActual
        this.dialogoActual = grupoDialogo;
        return grupoDialogo; // Importante devolver el grupo para que puedas utilizarlo fuera de la función
    }
}