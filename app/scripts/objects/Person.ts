module Doubledip {
	export class Person extends Phaser.Sprite {
		game: Phaser.Game;

		constructor(game: Phaser.Game, x: number, y:number) {
			super (game, x, y, 'person0', 0);

			this.game = game;
		}
	}
}