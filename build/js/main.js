var Doubledip;
(function (Doubledip) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.resize = function (element, context) {
            var _this = context;
            var scale = Math.min(window.innerWidth / _this.game.width, window.innerHeight / _this.game.height);
            element.style.minHeight = window.innerHeight.toString() + 'px';
            _this.game.scale.setUserScale(scale, scale, 0, 0);
        };
        return Utils;
    })();
    Doubledip.Utils = Utils;
})(Doubledip || (Doubledip = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Doubledip;
(function (Doubledip) {
    var State;
    (function (State) {
        var Boot = (function (_super) {
            __extends(Boot, _super);
            function Boot() {
                _super.apply(this, arguments);
                this.parentElement = document.getElementById('game-content');
            }
            Boot.prototype.preload = function () {
                this.load.image('preload-bar', 'assets/images/preload-bar.png');
            };
            Boot.prototype.create = function () {
                this.game.stage.backgroundColor = 0xFFFFFF;
                this.game.scale.fullScreenTarget = this.parentElement;
                this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
                this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
                this.game.scale.pageAlignHorizontally = true;
                this.game.scale.pageAlignVertically = true;
                this.game.stage.disableVisibilityChange = true;
                this.game.input.maxPointers = 1;
                this.game.scale.setResizeCallback(function () {
                    Doubledip.Utils.resize(this.parentElement, this);
                }, this);
                this.game.stage.backgroundColor = 0xffff99;
                // Assign global settings here
                this.game.state.start('preload');
            };
            return Boot;
        })(Phaser.State);
        State.Boot = Boot;
    })(State = Doubledip.State || (Doubledip.State = {}));
})(Doubledip || (Doubledip = {}));
var Doubledip;
(function (Doubledip) {
    var State;
    (function (State) {
        var Preload = (function (_super) {
            __extends(Preload, _super);
            function Preload() {
                _super.apply(this, arguments);
            }
            Preload.prototype.preload = function () {
                this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
                this.load.setPreloadSprite(this.preloadBar);
                this.load.image('menu-background', 'assets/images/menu-background.png');
                this.load.image('no-double-dipping', 'assets/images/no_double_dipping.jpeg');
                this.load.image('person-turned', 'assets/images/person-turned.png');
                this.load.image('person0', 'assets/images/person0.png');
                this.load.image('table', 'assets/images/table.png');
                // Load remaining assets here
            };
            Preload.prototype.create = function () {
                this.game.state.start('menu');
            };
            return Preload;
        })(Phaser.State);
        State.Preload = Preload;
    })(State = Doubledip.State || (Doubledip.State = {}));
})(Doubledip || (Doubledip = {}));
var Doubledip;
(function (Doubledip) {
    var State;
    (function (State) {
        var Menu = (function (_super) {
            __extends(Menu, _super);
            function Menu() {
                _super.apply(this, arguments);
            }
            Menu.prototype.create = function () {
                var _this = this;
                this.background = this.add.sprite(80, 0, 'no-double-dipping');
                this.input.onDown.addOnce(function () {
                    _this.game.state.start('main');
                });
            };
            return Menu;
        })(Phaser.State);
        State.Menu = Menu;
    })(State = Doubledip.State || (Doubledip.State = {}));
})(Doubledip || (Doubledip = {}));
var Doubledip;
(function (Doubledip) {
    var State;
    (function (State) {
        var Main = (function (_super) {
            __extends(Main, _super);
            function Main() {
                _super.apply(this, arguments);
            }
            Main.prototype.create = function () {
                this.stage.backgroundColor = 0xffff99;
                var table = this.game.add.sprite(0, 854, 'table');
                var personY = 472;
                var person0 = new Doubledip.Person(this.game, 'person0', 10, personY);
                var person1 = new Doubledip.Person(this.game, 'person0', 266, personY);
                var person2 = new Doubledip.Person(this.game, 'person0', 522, personY);
                this.game.add.existing(person0);
                this.game.add.existing(person1);
                this.game.add.existing(person2);
            };
            return Main;
        })(Phaser.State);
        State.Main = Main;
    })(State = Doubledip.State || (Doubledip.State = {}));
})(Doubledip || (Doubledip = {}));
var Doubledip;
(function (Doubledip) {
    var Person = (function (_super) {
        __extends(Person, _super);
        function Person(game, spriteName, x, y) {
            _super.call(this, game, x, y, spriteName, 0);
            this.scale.setTo(3, 3);
            this.game = game;
        }
        return Person;
    })(Phaser.Sprite);
    Doubledip.Person = Person;
})(Doubledip || (Doubledip = {}));
/// <reference path="../vendor/phaser-official/typescript/phaser.d.ts"/>
/// <reference path='Utils.ts'/>
/// <reference path='states/Boot.ts'/>
/// <reference path='states/Preload.ts'/>
/// <reference path='states/Menu.ts'/>
/// <reference path='states/Main.ts'/>
/// <reference path='objects/Person.ts'/>
var Doubledip;
(function (Doubledip) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 720, 1280, Phaser.CANVAS, 'game-div');
            this.state.add('boot', Doubledip.State.Boot);
            this.state.add('preload', Doubledip.State.Preload);
            this.state.add('menu', Doubledip.State.Menu);
            this.state.add('main', Doubledip.State.Main);
            this.state.start('boot');
        }
        return Game;
    })(Phaser.Game);
    Doubledip.Game = Game;
})(Doubledip || (Doubledip = {}));
window.onload = function () {
    var game = new Doubledip.Game();
};
//# sourceMappingURL=main.js.map