module Doubledip.State {
  export class Main extends Phaser.State {
		people: Person[];
		score: number;
		scoreText: Phaser.Text;
    hand: Phaser.Sprite;

    create() {
      var personY = 472;
			this.people = [];
			this.score = 0;
      this.stage.backgroundColor = 0xffff99;
      var bowl = new Bowl(this, 280, 940);
      this.people[0] = new Person(this.game, 'person0', 10, personY);
      this.people[1] = new Person(this.game, 'person1', 266, personY);
      this.people[2] = new Person(this.game, 'person2', 522, personY);
      var table = this.game.add.sprite(0, 854, 'table');
            
      this.game.add.existing(bowl);
      this.game.add.existing(this.people[0]);
      this.game.add.existing(this.people[1]);
      this.game.add.existing(this.people[2]);
      this.hand = this.game.add.sprite(320, 700, 'hand');
      this.hand.visible = false;
      this.hand.scale.setTo(8, 8);

      this.people.forEach(function(person: Person) {
        person.init();
      });

      this.game.time.events.loop(Phaser.Timer.SECOND, this.determineFaces, this);

      var scoreStyle = {
      	font: '128px Arial',
      	fill: '#000',
      	boundsAlignH: 'center',
				boundsAlignV: 'middle'
      }
      var scoreString = this.score + ' DIPS';
      this.scoreText = this.game.add.text(10, 10, scoreString, scoreStyle);
      this.scoreText.setTextBounds(0, 100, 720, 100);
    }

    determineFaces () {
			this.people.forEach(function(person: Person) {
				person.determineFace();
			});
    }

    updateScore() {
			this.score++;
      var scoreString = this.score.toString() + ' DIPS';
      this.scoreText.setText(scoreString);
    }
  }
}