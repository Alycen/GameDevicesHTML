var game;

function SniperSim() {
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;
}

SniperSim.prototype.initCanvas = function() {
	this.canvas = document.createElement('canvas');

	this.ctx = this.canvas.getContext('2d');

	document.body.appendChild(this.canvas);

	this.canvas.width = this.screenWidth;
	this.canvas.height  = this.screenHeight;
}

SniperSim.prototype.gameLoop = function() {
	console.log("gameLoop");
	window.requestAnimationFrame(game.gameLoop);
}

function main() {
	game = new SniperSim();

	console.log("Sniper Sim");

	game.initCanvas();
	game.draw();
	game.gameLoop
}

SniperSim.prototype.draw = function() {
	
}