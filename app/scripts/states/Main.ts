module Doubledip.State {
  export class Main extends Phaser.State {
		people: Person[];

    create() {
      var personY = 472;
			this.people = [];
      this.stage.backgroundColor = 0xffff99;
      var bowl = new Bowl(this.game, 300, 920);
      this.people[0] = new Person(this.game, 'person', 10, personY);
      this.people[1] = new Person(this.game, 'person', 266, personY);
      this.people[2] = new Person(this.game, 'person', 522, personY);
      var table = this.game.add.sprite(0, 854, 'table');
      
      this.game.add.existing(bowl);
      this.game.add.existing(this.people[0]);
      this.game.add.existing(this.people[1]);
      this.game.add.existing(this.people[2]);

      this.game.time.events.loop(Phaser.Timer.SECOND, this.determineFaces, this);
    }

    determineFaces () {
			this.people.forEach(function(person: Person) {
				person.determineFace();
			});
    }
  }
}