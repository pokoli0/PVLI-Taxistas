export default class escenaFinal extends Phaser.Scene{
    constructor(){
        super({ key: 'escenaFinal' });
    }
    init(data){
        this.pagado = data.pagado;
    }
    create(){
        if(this.pagado){
            this.add.image(500, 250, 'YOUWIN');
        }
        else{
            this.add.image(500, 250, 'GameOver');
        }
    }
}