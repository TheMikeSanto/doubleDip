module Doubledip {
	export class Person extends Phaser.Sprite {
		game: Phaser.Game;
		face: boolean;

		constructor(game: Phaser.Game, spriteName: string, x: number, y: number) {
			super (game, x, y, spriteName, 0);
			this.scale.setTo(3, 3);
			this.game = game;
		}
	}
}