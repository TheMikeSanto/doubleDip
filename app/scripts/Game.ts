/// <reference path="../vendor/phaser-official/typescript/phaser.d.ts"/>

/// <reference path='Utils.ts'/>
/// <reference path='states/Boot.ts'/>
/// <reference path='states/Preload.ts'/>
/// <reference path='states/Menu.ts'/>
/// <reference path='states/Main.ts'/>
/// <reference path='objects/Bowl.ts'/>
/// <reference path='objects/Person.ts'/>

module Doubledip {
  export class Game extends Phaser.Game {
    constructor() {
      super(720, 1280, Phaser.CANVAS, 'game-div');

      this.state.add('boot', State.Boot);
      this.state.add('preload', State.Preload);
      this.state.add('menu', State.Menu);
      this.state.add('main', State.Main);

      this.state.start('boot');
    }
  }
}

window.onload = () => {
  var game = new Doubledip.Game();
}