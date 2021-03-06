var game;
var LEVEL_ONE;

var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function Game() {
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;
	setInterval(gameLoop, 30000);
}

function main() {
	game = new Game();
	LEVEL_ONE = new Level();

	game.initCanvas();
	game.Draw();
	game.gameLoop();
}

Game.prototype.initCanvas = function() {
	this.canvas = document.createElement('canvas');

	this.ctx = this.canvas.getContext('2d');

	document.body.appendChild(this.canvas);

	this.canvas.width = this.screenWidth;
	this.canvas.height  = this.screenHeight;
}

Game.prototype.gameLoop = function() {
	
	LEVEL_ONE.Update();
	game.Draw();
	window.requestAnimFrame(game.gameLoop);
}

Game.prototype.Draw = function() {
	this.ctx.clearRect(0,0,this.screenWidth, this.screenHeight);
	LEVEL_ONE.Draw();
}