export default class Radio extends Phaser.Scene {
    constructor() {
        super({ key: 'Radio' });

        this.dialogoActual = null;
        this.jsonDialogo;
        this.dialogosText;
    }

    preload(){
        this.nivel = this.sys.settings.data.nivel;
        this.cache.text.remove('dialogoActual');
        if (!this.cache.text.has('dialogoActual')) {
            this.load.text('dialogoActual', 'assets/Guiones/' + this.nivel.dialogo);
        }
    }

    create() {
        if (!this.dialogoActual) {
            // Cargar el archivo de texto
            this.lecturaArchivoText();
            this.dialogosText = JSON.parse(this.jsonDialogo);

            var textoDelDialogoActual = this.dialogosText.dialogos[0].texto;
            console.log(textoDelDialogoActual);

            this.mostrarDialogo(textoDelDialogoActual);
        }
    }

    lecturaArchivoText() {
        const contenido = this.cache.text.get('dialogoActual');
        const lineas = contenido.split('\n');
    
        const dialogoData = {
            dialogos: lineas.map((linea, indice) => {
                const [numero, texto] = linea.match(/^\s*(\d+)\s*(.*)\s*$/).slice(1);
                return { indice, numero: parseInt(numero, 10), texto: texto.trim() };
            }),
        };
    
        this.jsonDialogo = JSON.stringify(dialogoData);
        console.log(this.jsonDialogo);
    }
    

    mostrarDialogo(texto) {
        const grupoDialogo = this.add.group();

        // Agregar texto al grupo
        const cuadrado = this.add.zone(145, 133, 395, 47);
        cuadrado.setOrigin(0);
        const textoDialogo = this.add.text(
            145 + cuadrado.width / 2,
            133 + cuadrado.height / 2,
            texto,
            {
                fill: '#000000',
                wordWrap: { width: cuadrado.width, useAdvancedWrap: true },
                wordWrapWidth: cuadrado.width,
            }
        );

        // Ajusta el origen del texto al centro
        textoDialogo.setOrigin(0.5, 0.5);
        grupoDialogo.add(textoDialogo);

        // Asignar el grupo actual al dialogoActual
        this.dialogoActual = grupoDialogo;
        return grupoDialogo; // Importante devolver el grupo para que puedas utilizarlo fuera de la función
    }
}
