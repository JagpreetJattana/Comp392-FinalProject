/**
 * @mosule scenes
 *  */module scenes{
        /**
         * Menu Scene extends scenes.Scene superclass is used to 
         * create custom menu for THREEJS game
         * 
         * @class Menu
         * @extends Scene
         */
    export class Menu extends scenes.Scene{
        private _stage:createjs.Stage;
        private _blocker: HTMLElement;
        private _gameLable:createjs.Text;
        private _startButton:createjs.Bitmap;
       
     /**
      * Empty constructo - calls initialize and start method
      * Construtor
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

        /**
         * This method sets up default value for class members]and objects
         * @method _initialize
         * @return void
         */
        private _initialize():void{
               // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display="none";
          
            this._setupCanvas();
            
            this._stage = new createjs.Stage(canvas);
             
            this._stage.enableMouseOver(20);
        }
        //PUBLIC METHODS +++++++++++++++++
            /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
        public start(): void {
           this._gameLable=new createjs.Text("Coin Game","80px Consolas","#000000");
           this._gameLable.regX=this._gameLable.getMeasuredWidth()*0.5;
           this._gameLable.regY=this._gameLable.getMeasuredHeight()*0.5;
           this._gameLable.x=config.Screen.WIDTH*0.5;
           this._gameLable.y=config.Screen.HEIGHT*0.5;
           this._stage.addChild(this._gameLable); 
           this._startButton=new createjs.Bitmap(assets.getResult("StartButton"));
           this._startButton.regX=this._startButton.getBounds().width*0.5;
           this._startButton.regY=this._startButton.getBounds().height*0.5;
           this._startButton.x=config.Screen.WIDTH*0.5;
           this._startButton.y=(config.Screen.HEIGHT*0.5)+100;
           this._stage.addChild(this._startButton);
           
           this._startButton.on("mouseover",(event:createjs.MouseEvent)=>{
               event.target.alpha=0.7;
           });
           
             this._startButton.on("mouseout",(event:createjs.MouseEvent)=>{
               event.target.alpha=1;
           });
           
             this._startButton.on("click",(event:createjs.MouseEvent)=>{
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