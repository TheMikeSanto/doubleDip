module Doubledip {
	export class Bowl extends Phaser.Sprite {
		state: Doubledip.State.Main;

		constructor(state: Doubledip.State.Main, x: number, y: number) {
			super (state.game, x, y, 'bowl', 0);
			this.inputEnabled = true;
			this.scale.setTo(3, 3);
			this.state = state;
			this.events.onInputDown.add(this.onClick, this);
			this.events.onInputUp.add(this.onUp, this);
		}

		onClick (sprite, pointer) {
			var caught = false;
			this.state.hand.visible = true;
			// this.state.game.add.tween(this.state.hand).to({
			// 	angle: -45
			// }, 2000, Phaser.Easing.Linear.None, true);
			this.state.people.forEach(function(person: Person) {
				if (person.facing) {
					caught = true;
					person.animations.play('exclaim', 6, false);
					this.state.failure();
				}
			}, this);

			if (caught) {
				// game over
				console.log('caught!');
			} else {
				this.state.updateScore();
			}
		}

		onUp (sprite, pointer) {
			this.state.hand.visible = false;
		}

		determineCaught (person: Person) {

		}
	}
}