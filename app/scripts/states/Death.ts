module Doubledip.State {
	export class Death extends Phaser.State {
		background: Phaser.Sprite;

		create() {
			this.background = this.game.add.sprite(0, 0, 'death-bg');
			this.input.onDown.addOnce(() => {
				this.game.state.start('main');
			})
		}
	}
}