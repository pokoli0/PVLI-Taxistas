export default class LoadConversacionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadConversacionScene' });
        this.asesino;
        this.puntos;
    }
    preload(){
        this.load.audio('PuertaCoche', 'assets/Sonido_Musica/Puerta de coche.mp3'); 
        this.load.audio('EncendidoMotor', 'assets/Sonido_Musica/Encendido motor.mp3');
    }
    create() {
        this.asesino = this.sys.settings.data.asesino;
        this.puntos = this.sys.settings.data.puntos;
        this.nivel = this.sys.settings.data.nivel;
        console.log(this.puntos);
        this.cameras.main.setBackgroundColor(0x000000); 

        const puertaCocheAudio = this.sound.add('PuertaCoche');
        const encendidoMotorAudio = this.sound.add('EncendidoMotor');
        puertaCocheAudio.play();

        puertaCocheAudio.on('complete', () => {
            encendidoMotorAudio.play();

            encendidoMotorAudio.on('complete', () => {
                const conversacionScene = this.scene.get('conversacionLvl1');
                if (conversacionScene) {
                    this.scene.stop('conversacionLvl1');
                }
                this.scene.start('conversacionLvl1', { asesino: this.asesino, puntos: this.puntos, nivel: this.nivel });
            });
        });
    }
   
}