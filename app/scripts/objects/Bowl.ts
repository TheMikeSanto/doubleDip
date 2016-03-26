module Doubledip {
	export class Bowl extends Phaser.Sprite {
		game: Phaser.Game;

		constructor(game: Phaser.Game, x: number, y: number) {
			super (game, x, y, 'bowl', 0);
			this.scale.setTo(3, 3);
			this.game = game;
		}
	}
}