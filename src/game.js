import conversacionLvl1 from './conversacionLvl1.js';
import Level1 from './level1.js';
import Menu from './menuInicial.js';
import LoadConversacionScene from './LoadConversacionScene.js';
import escenaDecision from './escenaDecision.js';

    // Configuración del juego
    let config = {
        type: Phaser.CANVAS,
        width:1000,
        height: 500,      
        pixelArt: true,
        scene:[Menu, Level1, conversacionLvl1, LoadConversacionScene, escenaDecision],
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


