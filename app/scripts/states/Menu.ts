module Doubledip.State {
  export class Menu extends Phaser.State {
    background: Phaser.Sprite;

    create() {
      this.background = this.add.sprite(0, 120, 'menu-background');
      var bowl = this.game.add.sprite(260, 500, 'bowl');
      bowl.scale.setTo(3, 3);
      this.input.onDown.addOnce(() => {
        this.game.state.start('main');
      });
    }
  }
}