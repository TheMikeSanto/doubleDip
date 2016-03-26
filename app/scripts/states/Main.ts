module Doubledip.State {
  export class Main extends Phaser.State {
    create() {
      this.stage.backgroundColor = 0xffff99;
      var table = this.game.add.sprite(0, 854, 'table');
      var bowl = this.game.add.sprite(300, 920, 'bowl');
      bowl.scale.setTo(3, 3);
      var personY = 472;
      var person0 = new Person(this.game, 'person0', 10, personY);
      var person1 = new Person(this.game, 'person0', 266, personY);
      var person2 = new Person(this.game, 'person0', 522, personY);
      this.game.add.existing(person0);
      this.game.add.existing(person1);
      this.game.add.existing(person2);
    }
  }
}