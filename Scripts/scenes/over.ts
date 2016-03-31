/**
 * @module scenes
 */
module scenes{
    /**
     * This class instantiate the game over scene
     * @Class Over
     * @extends scene.Scene
     */
    export class Over extends scenes.Scene{
        
         private _stage:createjs.Stage;
        private _blocker: HTMLElement;
        private _gameOverLable:createjs.Text;
        private _restartButton:createjs.Bitmap;
       
        /**
         * Empty constructor
         * @constructor
         */
        constructor(){
            super();
            this._initialize();
            this.start();
        }
                //PRIVATE METHODS +++++
        
       private _setupCanvas(): void {
    canvas.style.width = "100%";
    canvas.setAttribute("height", (config.Screen.HEIGHT).toString());
    canvas.style.backgroundColor = "#ffffff";
}

        private _initialize():void{
               // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display="none";
          
            this._setupCanvas();
            
            this._stage = new createjs.Stage(canvas);
             
            this._stage.enableMouseOver(20);
        }
           /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
        public start(): void {
              this._gameOverLable=new createjs.Text("Game Over","80px Consolas","#000000");
           this._gameOverLable.regX=this._gameOverLable.getMeasuredWidth()*0.5;
           this._gameOverLable.regY=this._gameOverLable.getMeasuredHeight()*0.5;
           this._gameOverLable.x=config.Screen.WIDTH*0.5;
           this._gameOverLable.y=config.Screen.HEIGHT*0.5;
           this._stage.addChild(this._gameOverLable); 
           this._restartButton=new createjs.Bitmap(assets.getResult("RestartButton"));
           this._restartButton.regX=this._restartButton.getBounds().width*0.5;
           this._restartButton.regY=this._restartButton.getBounds().height*0.5;
           this._restartButton.x=config.Screen.WIDTH*0.5;
           this._restartButton.y=(config.Screen.HEIGHT*0.5)+100;
           this._stage.addChild(this._restartButton);
           
           this._restartButton.on("mouseover",(event:createjs.MouseEvent)=>{
               event.target.alpha=0.7;
           });
           
             this._restartButton.on("mouseout",(event:createjs.MouseEvent)=>{
               event.target.alpha=1;
           });
           
             this._restartButton.on("click",(event:createjs.MouseEvent)=>{
               currentScene=config.Scene.PLAY;
               changeScene();
           });

        }
        
        /**
         * The update method updates the animation loop and other objects
         * 
         * @method update
         * @return void
         */
        public update(): void {
              this._stage.update();
        }
        
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         * 
         * @method resize
         * @return void
         */
        public resize():void {
            this._setupCanvas();
        }
        
    }
    
    
}