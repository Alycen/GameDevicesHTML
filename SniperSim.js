var game;
var civTest;
var LEVEL_ONE;

function Game() {
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;
}

function main() {
	game = new Game();
	civTest = new Civilian(200, 100);
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

	//LEVEL_ONE.Update();
	window.requestAnimationFrame(game.gameLoop);
}

Game.prototype.Draw = function() {
	LEVEL_ONE.Draw();
	civTest.Draw();
}