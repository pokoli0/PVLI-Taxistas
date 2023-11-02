export default class Level1 extends Phaser.Scene {
    constructor() {
      super({ key: 'level1' });
    }
    preload(){
      this.load.tilemapTiledJSON('tilemap', 'assets/Mapas/mapa.json');
      this.load.image('patronesTilemap', 'assets/CP_V1.1.0_nyknck/tileset/CP_V1.0.4.png');
    }
    create(){
      this.map = this.make.tilemap({
        key: 'tilemap',
        tileWidth: 64, 
        tileHeight: 64 
      });
      const tileset1 = this.map.addTilesetImage('level1', 'patronesTilemap');
      this.carretera = this.map.createLayer('carretera', tileset1);
      this.asfalto = this.map.createLayer('asfalto', tileset1);
      this.cesped = this.map.createLayer('cesped', tileset1);
      this.casas = this.map.createLayer('casas', tileset1);
      this.hierba = this.map.createLayer('hierba', tileset1);
      // Establece los límites de la cámara para que se ajusten al tamaño del mapa
      this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

      // Ajusta la cámara para que muestre todo el mapa
      this.cameras.main.scrollX = 0;  // Desplazamiento horizontal
      this.cameras.main.scrollY = 0;  // Desplazamiento vertical
      
      
      
    }
    
  preload() {
    this.load.image('background', 'assets/Imagenes/fondolevel1.png');
    this.load.image('player', 'assets/Imagenes/player.png');
  }
  
  create() {
    //background = this.add.image(500, 250, 'background').setDepth(0);
    player = this.physics.add.image(400, 300, 'player').setDepth(1);
    player.setCollideWorldBounds(true);

    //this.cameras.main.setBounds(0, 0, 800, 600);
    //this.cameras.main.startFollow(player);
    const keys = this.input.keyboard.addKeys({
      'up': Phaser.Input.Keyboard.KeyCodes.W,
      'down': Phaser.Input.Keyboard.KeyCodes.S,
      'left': Phaser.Input.Keyboard.KeyCodes.A,
      'right': Phaser.Input.Keyboard.KeyCodes.D
  });

  cursors = keys;
  }
  
  update() {
    if (cursors.up.isDown) {
      player.setVelocityY(-200);
  } else if (cursors.down.isDown) {
      player.setVelocityY(200);
  } else {
      player.setVelocityY(0); 
  }

  if (cursors.left.isDown) {
      player.setVelocityX(-200);
  } else if (cursors.right.isDown) {
      player.setVelocityX(200);
  } else {
      player.setVelocityX(0); 
 }
}
}
