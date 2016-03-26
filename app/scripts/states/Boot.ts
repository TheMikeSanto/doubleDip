module Doubledip.State {
  export class Boot extends Phaser.State {
    parentElement: HTMLElement = document.getElementById('game-content');

    preload() {
      this.load.image('preload-bar', 'assets/images/preload-bar.png');
    }

    create() {
      this.game.scale.fullScreenTarget = this.parentElement;
      this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.stage.disableVisibilityChange = true;
      this.game.input.maxPointers = 1;
      this.game.scale.setResizeCallback(function() {
        Utils.resize(this.parentElement, this);
      }, this)
      this.game.stage.backgroundColor = 0xffff99;
            // Assign global settings here
      
      this.game.state.start('preload');
    }
  }
}