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
			this.animations.add('turnToFront', [1, 2, 3, 4, 5]);
			this.animations.add('turnToBack', [5, 4, 3, 2, 1]);
			this.animations.add('exclaim', [6, 7, 8, 9]);
		}

		toggleFace() {
			if (this.facing) {
				// this.frame = 0;
				this.animations.play('turnToBack', 6, false);
			} else {
				// this.frame = 1;
				this.animations.play('turnToFront', 6, false);
			}
			this.facing = !this.facing;
		}

		determineFace() {
			var chance = Utils.randomInt(1, 100);
			if (chance > 90) {
				this.toggleFace();
			}
		}

		init() {
			this.animations.play('turnToFront', 6, false);
		}
	}
}