import Menu from './menuInicial.js';



    // Configuración del juego
    let config = {
        type: Phaser.CANVAS,
        width:1000,
        height: 500,

        
        pixelArt: true,
        scene:[Menu],
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        parent: "juego"
    };

    // Inicializa el juego con la configuración.
    new Phaser.Game(config);


