var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @module scenes
 */
var scenes;
(function (scenes) {
    /**
     * This class instantiate the game over scene
     * @Class Over
     * @extends scene.Scene
     */
    var Over = (function (_super) {
        __extends(Over, _super);
        /**
         * Empty constructor
         * @constructor
         */
        function Over() {
            _super.call(this);
            this._initialize();
            this.start();
        }
        //PRIVATE METHODS +++++
        Over.prototype._setupCanvas = function () {
            canvas.style.width = "100%";
            canvas.setAttribute("height", (config.Screen.HEIGHT).toString());
            canvas.style.backgroundColor = "#ffffff";
        };
        Over.prototype._initialize = function () {
            // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display = "none";
            this._setupCanvas();
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        };
        /**
      * The start method is the main method for the scene class
      *
      * @method start
      * @return void
      */
        Over.prototype.start = function () {
            this._gameOverLable = new createjs.Text("Game Over", "80px Consolas", "#000000");
            this._gameOverLable.regX = this._gameOverLable.getMeasuredWidth() * 0.5;
            this._gameOverLable.regY = this._gameOverLable.getMeasuredHeight() * 0.5;
            this._gameOverLable.x = config.Screen.WIDTH * 0.5;
            this._gameOverLable.y = config.Screen.HEIGHT * 0.5;
            this._stage.addChild(this._gameOverLable);
            this._restartButton = new createjs.Bitmap(assets.getResult("RestartButton"));
            this._restartButton.regX = this._restartButton.getBounds().width * 0.5;
            this._restartButton.regY = this._restartButton.getBounds().height * 0.5;
            this._restartButton.x = config.Screen.WIDTH * 0.5;
            this._restartButton.y = (config.Screen.HEIGHT * 0.5) + 100;
            this._stage.addChild(this._restartButton);
            this._restartButton.on("mouseover", function (event) {
                event.target.alpha = 0.7;
            });
            this._restartButton.on("mouseout", function (event) {
                event.target.alpha = 1;
            });
            this._restartButton.on("click", function (event) {
                currentScene = config.Scene.PLAY;
                changeScene();
            });
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Over.prototype.update = function () {
            this._stage.update();
        };
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         *
         * @method resize
         * @return void
         */
        Over.prototype.resize = function () {
            this._setupCanvas();
        };
        return Over;
    })(scenes.Scene);
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map