var game;
var LEVEL_ONE;

function Game() {
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;
}

function main() {
	game = new Game();
	LEVEL_ONE = new Level();

	console.log("Sniper Sim");

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
	console.log("gameLoop");

	LEVEL_ONE.Update();
	game.Draw();
	window.requestAnimationFrame(game.gameLoop);
}

Game.prototype.Draw = function() {
	this.ctx.clearRect(0,0,this.screenWidth, this.screenHeight);
	LEVEL_ONE.Draw();
}