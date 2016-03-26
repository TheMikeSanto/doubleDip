module Doubledip {
	export class Person extends Phaser.Sprite {
		game: Phaser.Game;
		facing: boolean;
		stateChangedAt: Date;

		constructor(game: Phaser.Game, spriteName: string, x: number, y: number) {
			super (game, x, y, spriteName, 0);
			this.scale.setTo(3, 3);
			this.facing = true;
			this.game = game;
		}

		toggleFace() {
			this.facing = !this.facing;
			if (this.facing) {
				this.frame = 0;
			} else {
				this.frame = 1;
			}
		}

		determineFace() {
			var chance = Utils.randomInt(1, 100);
			if (chance > 90) {
				this.toggleFace();
			}
		}
	}
}