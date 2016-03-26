module Doubledip.State {
  export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.image('menu-background', 'assets/images/logo.png');
      this.load.image('no-double-dipping', 'assets/images/no_double_dipping.jpeg');
      this.load.image('person-turned', 'assets/images/person-turned.png');
      this.load.image('person0', 'assets/images/person0.png');
      this.load.image('table', 'assets/images/table.png');
      this.load.image('bowl', 'assets/images/bowl.png');
      // Load remaining assets here
    }

    create() {
      this.game.state.start('menu');
    }
  }
}