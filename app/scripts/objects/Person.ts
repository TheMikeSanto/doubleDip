module Doubledip {
	export class Person extends Phaser.Sprite {
		game: Phaser.Game;
		facing: boolean;
		stateChangedAt: Date;
		blah: Phaser.Sound;

		constructor(game: Phaser.Game, spriteName: string, x: number, y: number) {
			super (game, x, y, spriteName, 0);
			this.scale.setTo(3, 3);
			this.facing = true;
			this.game = game;
			this.blah = this.game.add.audio('blah');
			var frontAnim = this.animations.add('turnToFront', [1, 2, 3, 4, 5]);
			var backAnim = this.animations.add('turnToBack', [5, 4, 3, 2, 1]);
			this.animations.add('exclaim', [6, 7, 8, 9]);
			frontAnim.onComplete.add(function() {
				this.facing = true;
			}, this);
			backAnim.onComplete.add(function() {
				this.facing = false;
			});			
		}

		toggleFace() {
			if (this.facing) {
				this.animations.play('turnToBack', 6, false);
			} else {
				this.blah.play();
				this.animations.play('turnToFront', 6, false);
				this.game.time.events.add(Phaser.Timer.SECOND * 3, function() {
					this.toggleFace();
				}, this);
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