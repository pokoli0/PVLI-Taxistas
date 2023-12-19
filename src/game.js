import conversacionLvl1 from './conversacionLvl1.js';
import Level1 from './level1.js';
import Menu from './menuInicial.js';
import escenaControles from './escenaControles.js';
import LoadConversacionScene from './LoadConversacionScene.js';
import escenaDecision from './escenaDecision.js';
import ControlLevels from './ControlLevels.js';
import Boot from './boot.js';
import MenuDias from './MenuDias.js';
import Shop from './Shop.js';
import Level2 from './level2.js';
import Level3 from './level3.js';
import Radio from './Radio.js';

    // Configuración del juego
    let config = {
        type: Phaser.CANVAS,
        width:1000,
        height: 500,      
        pixelArt: true,
        scene:[Boot,Menu,MenuDias,escenaControles,Shop,Radio,ControlLevels, Level1,Level2,Level3, conversacionLvl1, LoadConversacionScene, escenaDecision],
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        parent: "juego"
    };
    new Phaser.Game(config);


