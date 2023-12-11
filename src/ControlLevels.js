

const niveles = [
  { key: 'level1', mapa: 'mapa2.json', dialogo: 'dia1p1.txt' },
  { key: 'level1', mapa: 'mapa2.json', dialogo: 'dia1p2.txt' },
  { key: 'level1', mapa: 'mapa2.json', dialogo: 'dia1p3.txt' },
];

export default class ControlLevels extends Phaser.Scene{
    constructor(){
        super({key: 'controlLevels'});
        this.nivelActual = 0;
        
    }
    
    preload(){
    }

    create(){

        this.cargarNivel();
    }
    getNivelActual() {
        return niveles[this.nivelActual];
    }
    cargarNivel(puntos){
        const nivel = niveles[this.nivelActual];
        // Aquí decides qué mapa cargar según el nivel actual
        const mapaKey = nivel.mapa;

        // Verifica si el mapa ya está cargado
        if (!this.cache.tilemap.get(mapaKey)) {
            // Carga el mapa solo si aún no está en caché
            this.load.tilemapTiledJSON(mapaKey, 'assets/Mapas/' + mapaKey);
            this.load.start();

            this.load.once('complete', () => {
                this.iniciarEscenaNivel(nivel);
            });
        } else {
            // Si el mapa ya está en caché, simplemente inicia la escena de nivel
            this.iniciarSiguienteNivel(nivel, puntos);
        }
    }

    iniciarEscenaNivel(nivel) {
        
        // Inicializa la escena de nivel con el mapa ya cargado
        this.scene.start('level1', { puntos: 0, nivelActual: this.nivelActual, nivelData: nivel });
    }
    iniciarSiguienteNivel(nivel, punto) {
        
        // Inicializa la escena de nivel con el mapa ya cargado
        this.scene.start('level1', { puntos: punto, nivelActual: this.nivelActual, nivelData: nivel });
    }
    avanzarAlSiguienteNivel(puntos) {
        this.nivelActual++;
    
        if (this.nivelActual < niveles.length) {
            this.scene.stop('conversacionLvl1');
            this.cargarNivel(puntos);
        } else {
          console.log('¡Has completado todos los niveles!');
          // Puedes implementar aquí lo que desees hacer cuando completes todos los niveles
        }
      }
}