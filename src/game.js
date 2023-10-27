/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */



    // Configuración del juego
    let config = {
        type: Phaser.AUTO,
        width: 1000,
        height: 500,
        scale: {
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
        },
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 400 },
                debug: false
            }
        }
    };

    // Inicializa el juego con la configuración.
    new Phaser.Game(config);


// // Función para detener el juego.
// function detenerJuego() {
//     if (game) {
//         game.destroy(true); // Detén y destruye el juego.
//     }
// }