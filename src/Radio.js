export default class Radio extends Phaser.Scene {
    constructor() {
        super({ key: 'Radio' });

        this.dialogoActual = null;
        this.jsonDialogo;
        this.dialogosText;
        this.indice = 0;
    }

    init(data){
        // Accede a los booleanos desde el objeto de datos
        this.gpsActivado = data.gpsActivado || false;
        this.aceleracionActivada = data.aceleracionActivada || false;
        this.tiempoActivado = data.tiempoActivado || false;
        this.puntos = data.puntos;
        this.radioText = data.radio;
    }
    preload(){
        // this.nivel = this.sys.settings.data.nivel;
        this.cache.text.remove('dialogoActual');
        if (!this.cache.text.has('dialogoActual')) {
            this.load.text('dialogoActual', 'assets/Guiones/' + this.radioText);
        }
    }

    create() {
        if (!this.dialogoActual) {
            // Cargar el archivo de texto
            this.lecturaArchivoText();
            this.dialogosText = JSON.parse(this.jsonDialogo);

            var textoDelDialogoActual = this.dialogosText.parrafos[this.indice].texto;
            console.log(textoDelDialogoActual);

            this.mostrarDialogo(textoDelDialogoActual);
        }
    }

    lecturaArchivoText() {
        const contenido = this.cache.text.get('dialogoActual');
        const lineas = contenido.split('\n');
        
        var dialogoData = {
            parrafos: []
         };
         for (let i = 0; i < lineas.length; i++) {
             // Agregar cada línea al array de diálogos con número y texto
             dialogoData.parrafos.push({
                 texto: lineas[i]
             });
         }
    
        this.jsonDialogo = JSON.stringify(dialogoData);
        console.log(this.jsonDialogo);
    }
    
    opcionPulsada(texto){
        if (this.dialogoActual) {
            this.dialogoActual.destroy(true);
        }
        
        this.dialogoActual = this.mostrarDialogo(texto);
    }

    mostrarDialogo(texto) {
        const grupoDialogo = this.add.group();

        // Agregar texto al grupo
        const cuadrado = this.add.zone(200, 133, 600, 220);
        cuadrado.setOrigin(0);
        // this.add.graphics().lineStyle(2, 0xfff000).strokeRectShape(cuadrado);
        const textoDialogo = this.add.text(
            200 + cuadrado.width / 2,
            133 + cuadrado.height / 2,
            texto,
            {
                fill: '#ffffff',
                wordWrap: { width: cuadrado.width, useAdvancedWrap: true },
                wordWrapWidth: cuadrado.width,
            }
        );

        // Ajusta el origen del texto al centro
        textoDialogo.setOrigin(0.5, 0.5);
        grupoDialogo.add(textoDialogo);
        
        this.indice++;
        const pasar = this.add.zone(0, 0, 1000, 500);
        pasar.setOrigin(0);
        pasar.setInteractive();
        // this.add.graphics().lineStyle(2, 0xfff000).strokeRectShape(pasar);
        if(this.indice == this.dialogosText.parrafos.length){
            pasar.on("pointerdown", () => {
                this.dialogoActual = null;
                this.indice = 0;
                this.scene.start('controlLevels',{gpsActivado: this.gpsActivado,
                    aceleracionActivada: this.aceleracionActivada,
                    tiempoActivado: this.tiempoActivado,
                    puntos: this.puntos} );
               //  { mapName: 'finalMap1',dash:false, click:false, middle:'one' });
              });
        }
        else{
        pasar.once('pointerdown', () => this.opcionPulsada(this.dialogosText.parrafos[this.indice].texto));
        }
        // Asignar el grupo actual al dialogoActual
        this.dialogoActual = grupoDialogo;
        return grupoDialogo; // Importante devolver el grupo para que puedas utilizarlo fuera de la función
    }
    
    
}
