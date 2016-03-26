module Doubledip {
	export class Bowl extends Phaser.Sprite {
		state: Doubledip.State.Main;

		constructor(state: Doubledip.State.Main, x: number, y: number) {
			super (state.game, x, y, 'bowl', 0);
			this.inputEnabled = true;
			this.scale.setTo(3, 3);
			this.state = state;
			this.events.onInputDown.add(this.onClick, this);
			console.log('dip1');
		}

		onClick (sprite, pointer) {
			var caught = false;
			this.state.people.forEach(function(person: Person) {
				if (person.facing) {
					caught = true;
				}
			});

			if (caught) {
				// game over
				console.log('caught!');
			} else {
				this.state.updateScore();
			}
		}
	}
}