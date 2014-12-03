var game;

function Game() {
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;
}

function main() {
	game = new SniperSim();

	console.log("Sniper Sim");

	game.initCanvas();
	game.draw();
	game.gameLoop
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
	window.requestAnimationFrame(game.gameLoop);
}

Game.prototype.draw = function() {
	
}