/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */



    // Configuración del juego
    let config = {
        type: Phaser.CANVAS,
        width:1000,
        height: 500,

        
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 400 },
                debug: false
            }
        },
        parent: "juego"
    };

    // Inicializa el juego con la configuración.
    new Phaser.Game(config);


