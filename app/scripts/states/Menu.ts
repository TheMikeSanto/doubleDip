module Doubledip.State {
  export class Menu extends Phaser.State {
    background: Phaser.Sprite;

    create() {
      this.background = this.add.sprite(0, 120, 'menu-background');
      this.input.onDown.addOnce(() => {
        this.game.state.start('main');
      });
    }
  }
}