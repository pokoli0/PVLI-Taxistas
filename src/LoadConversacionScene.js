export default class LoadConversacionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadConversacionScene' });
        this.asesino;
    }
    preload(){
        this.load.audio('PuertaCoche', 'assets/Sonido_Musica/Puerta de coche.mp3'); 
        this.load.audio('EncendidoMotor', 'assets/Sonido_Musica/Encendido motor.mp3');
    }
    create() {
        this.asesino = this.sys.settings.data.asesino;
        this.cameras.main.setBackgroundColor(0x000000); 

        const puertaCocheAudio = this.sound.add('PuertaCoche');
        const encendidoMotorAudio = this.sound.add('EncendidoMotor');
        puertaCocheAudio.play();

        puertaCocheAudio.on('complete', () => {
            encendidoMotorAudio.play();

            encendidoMotorAudio.on('complete', () => {
                this.scene.start('conversacionLvl1',{asesino: this.asesino});
            });
        });
    }
}