module Doubledip {
	export class Utils {
		static resize(element: HTMLElement, context: any) {
			var _this = context;
			var scale = Math.min(window.innerWidth / _this.game.width, window.innerHeight / _this.game.height);
			element.style.minHeight = window.innerHeight.toString() + 'px';
			_this.game.scale.setUserScale(scale, scale, 0, 0);
		}
		static randomInt(min: number, max: number) : number {
			return Math.floor(Math.random() * (max - min)) + min + 1;
		}
	}
}