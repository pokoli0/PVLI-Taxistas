import Menu from './menuInicial.js';
import Level1 from './level1.js';


    // Configuración del juego
    let config = {
        type: Phaser.AUTO,
        width:1000,
        height: 500,      
        pixelArt: true,
        scene:[Menu, Level1],
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


