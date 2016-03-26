module Doubledip.State {
  export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;

    preload() {
      this.load.image('menu-background', 'assets/images/logo.png');
      this.load.image('no-double-dipping', 'assets/images/no_double_dipping.jpeg');
      this.load.image('death-bg', 'assets/images/death-bg.png');
      this.load.image('person-turned', 'assets/images/person-turned.png');
      this.load.image('table', 'assets/images/table.png');
      this.load.image('bowl', 'assets/sprites/bowl.png');
      this.load.image('hand', 'assets/sprites/hand.png');
      this.load.image('chips', 'assets/sprites/chips.png');
      this.load.spritesheet('person0', 'assets/sprites/person/person0.png', 64, 128, 9);
      this.load.spritesheet('person1', 'assets/sprites/person/person1.png', 64, 128, 9);
      this.load.spritesheet('person2', 'assets/sprites/person/person2.png', 64, 128, 9);
      this.load.audio('mouth', ['assets/audio/mouth.wav']);
      this.load.audio('scream1', ['assets/audio/scream1.ogg']);
      this.load.audio('blah', ['assets/audio/blah.wav']);
      this.load.audio('crowd', ['assets/audio/crowd.wav']);
      // Load remaining assets here
    }

    create() {
      this.game.state.start('menu');
    }
  }
}