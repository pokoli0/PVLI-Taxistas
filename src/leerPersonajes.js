export default class leerPersonajes {
    constructor(scene,ruta){
        this.scene = scene;
        this.ruta = ruta;
        this.personasData = {
            personas: []
        }
    }
    preload(){
        this.scene.load.text('personajes', this.ruta);
    }
    leerdocumento(){
        var contenido = this.scene.cache.text.get('personajes');

        // Dividir el contenido en líneas
        var lineas = contenido.split('\n');

        for (let i = 0; i < lineas.length; i++) {
            // Extraer el número y el texto de cada línea
            var matches = lineas[i].match(/^\s*(\w+)\s*(\w+\.\w+)\s*(true|false)\s*$/);

            var indice = matches[1].trim(); 
            var textura = matches[2].trim(); 
            var asesino = matches[3].trim();

            this.personasData.personas.push({
                indice: indice,
                textura: textura,
                asesino: asesino === 'true'  // Convertir a un valor booleano
            });
        }
        return this.personasData;

    }
}