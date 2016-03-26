module Doubledip.State {
  export class Main extends Phaser.State {
    create() {
      this.stage.backgroundColor = 0xffff99;
      var person0 = this.game.add.sprite(0, 500, 'person0');
      var person1 = this.game.add.sprite(256, 500, 'person0');
      var person2 = this.game.add.sprite(512, 500, 'person0');
      person0.scale.setTo(4, 4);
      person1.scale.setTo(4, 4);
      person2.scale.setTo(4, 4);
    }
  }
}