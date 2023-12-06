export default class conversacionLvl1 extends Phaser.Scene{
    constructor(){
        super({key: 'conversacionLvl1'});

        this.dialogoActual = null;
        this.indice = 0;
        this.color = 0;
        this.jsonDialogo;
        this.dialogosText;
        this.asesino;
        this.puntos;
        this.textoPuntos;
    }
    preload(){
        this.load.image('fondo', 'assets/Imagenes/fondoConver.png');
        this.load.text('dia1p1', 'assets/Guiones/dia1p1.txt');
        this.load.image('botonCont', 'assets/Imagenes/Botones/Continuar.png');
        this.load.image('moneda', 'assets/Imagenes/imagenesPrueba/moneda.png');
    }

    create(){
        this.asesino = this.sys.settings.data.asesino;
        this.puntos = this.sys.settings.data.puntos;
        
        this.add.sprite(500, 250, 'fondo');

        const moneda = this.add.sprite(40, 40, 'moneda');
        moneda.setScale(0.15);
        this.textoPuntos = this.add.text(26, 20, '0', { fontSize: '48px', fill: '#000' });

        // Cargar el archivo de texto
        this.lecturaArchivoText();
        
        this.dialogosText = JSON.parse(this.jsonDialogo);
        var textoDelDialogoActual = this.dialogosText.dialogos[0].texto;
        console.log(textoDelDialogoActual);
        
        this.mostrarDialogo(textoDelDialogoActual);
    }
    
    lecturaArchivoText(){
        var contenido = this.cache.text.get('dia1p1');

        // Dividir el contenido en líneas
        var lineas = contenido.split('\n');
        // Crear un objeto para almacenar el diálogo
        var dialogoData = {
           dialogos: []
        };

        for (let i = 0; i < lineas.length; i++) {
           // Extraer el número y el texto de cada línea
           var matches = lineas[i].match(/^\s*(\d+)\s*(.*)\s*$/);
            if (matches && matches.length === 3) {
            var numero = parseInt(matches[1], 10);
            var texto = matches[2].trim();
            // Agregar cada línea al array de diálogos
            // Agregar cada línea al array de diálogos con número y texto
            dialogoData.dialogos.push({
                indice: i,
                numero: numero,
                texto: texto
            });
        }
    }

        // Convertir el objeto a formato JSON
        this.jsonDialogo = JSON.stringify(dialogoData);

        // Mostrar el JSON en la consola (puedes guardarlo en un archivo si lo prefieres)
        console.log(this.jsonDialogo);

    }
    opcionPulsada(texto){
        if (this.dialogoActual) {
            this.dialogoActual.destroy(true);
        }
        texto = this.siguientePregunta(texto);
        this.dialogoActual = this.mostrarDialogo(texto);
    }
    
    mostrarDialogo(texto){
        // const colores = [0xfff000, 0xff0000, 0xffff00, 0xfffff0];
        const grupoDialogo = this.add.group();

        // Agregar texto al grupo
        const cuadrado = this.add.zone(145, 133, 395, 47);
        cuadrado.setOrigin(0);
        // this.add.graphics().lineStyle(2, '#000000').strokeRectShape(cuadrado);
        const textoDialogo = this.add.text(145 + cuadrado.width / 2, 133 + cuadrado.height / 2,texto, { fill: '#000000',  wordWrap: { width: cuadrado.width, useAdvancedWrap: true },
        wordWrapWidth: cuadrado.width });
        // Ajusta el origen del texto al centro
        textoDialogo.setOrigin(0.5, 0.5);
        grupoDialogo.add(textoDialogo);
        this.color++;
        if(this.indice == this.dialogosText.dialogos.length - 1){
            const botonCont= this.add.sprite(325, 400, 'botonCont').setInteractive();;
            botonCont.setScale(0.3);
            botonCont.on("pointerdown", () => {
                this.scene.start('escenaDecision',{asesino: this.asesino, puntos: this.puntos} );
               //  { mapName: 'finalMap1',dash:false, click:false, middle:'one' });
              });
        }
        else{
        if (this.jsonDialogo.includes(texto)) {
            for (let j = 0; j < 2; j++) {
                this.indice++;
                const x = 102;
                const y = 205 + 70 * j;

                const res = this.add.zone(x, y, 440, 47);
                res.setOrigin(0);
                res.setInteractive();
                // Obtener la respuesta correspondiente a la pregunta
                let respuesta = this.getRespuesta(texto);
                this.indice++;
                const preguntas = this.add.text(x + res.width / 2, y + res.height / 2, respuesta, { fill: '#000000',  wordWrap: { width: res.width, useAdvancedWrap: true },
                wordWrapWidth: res.width });
                grupoDialogo.add(preguntas);
                
                // Ajusta el origen del texto al centro
                preguntas.setOrigin(0.5, 0.5);
                
                
                res.once('pointerdown', () => this.opcionPulsada(respuesta));
                // this.add.graphics().lineStyle(2, colores[this.color]).strokeRectShape(res);
                
                grupoDialogo.add(res);
            }
        }
        
        // Asignar el grupo actual al dialogoActual
        this.dialogoActual = grupoDialogo;
        return grupoDialogo; // Importante devolver el grupo para que puedas utilizarlo fuera de la función
    }
    }
    getRespuesta(pregunta) {
        // Buscar la respuesta correspondiente a la pregunta en tu array de diálogos
        const dialogo = this.dialogosText.dialogos.find(dialogo => dialogo.texto === pregunta);
        return dialogo ? this.dialogosText.dialogos[this,this.indice].texto : '';
    }
    siguientePregunta(pregunta) {
        // Obtener el índice del diálogo actual
        const indiceActual = this.dialogosText.dialogos.findIndex(dialogo => dialogo.texto === pregunta);
    
         // Verificar si se encontró el diálogo y si tiene un siguiente índice
        if (indiceActual !== -1) {
            const siguienteIndice = (indiceActual + 1) % this.dialogosText.dialogos.length;
            return this.dialogosText.dialogos[siguienteIndice].texto;
        }

        // Si no se encontró el diálogo, devolver una cadena vacía
        return '';
    }
}