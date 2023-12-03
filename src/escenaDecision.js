export default class escenaDecision extends Phaser.Scene{
    constructor(){
        super({key: 'escenaDecision'});
    }
    preload(){

    }
    create(){
        this.botonCielo();
    }

    botonCielo(){
        const cuadrado = this.add.zone(145, 133, 395, 47);
        cuadrado.setOrigin(0);
        cuadrado.setInteractive();
        const cielo = this.add.text(145 + cuadrado.width / 2, 133 + cuadrado.height / 2,"CIELO", { fill: '#000000',  wordWrap: { width: cuadrado.width, useAdvancedWrap: true },
        wordWrapWidth: cuadrado.width });
        this.add.graphics().lineStyle(2, 0xfff000).strokeRectShape(cuadrado);
    }
}