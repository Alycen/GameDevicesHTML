var civ;

function Level () {
	// List<Civilian> // includes objects that inherit from Civilian
	this.x = 0;
	this.y = 0;
	this.width = 400;
	this.height = 300;
	this.scale = 1;
	this.img = new Image();
	this.img.src = "town.png";	// Sprite / Image for level
	// TargetInfo
	civ = new Civilian(150,50);
}

// The levels scale will increase when the PLAYER inits the RangeFinder State or Sniper State
// CheckShotCivilian(Civilian Victim)

Level.prototype.Update = function() {

}

Level.prototype.Draw = function() {
	game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	civ.Draw();
	console.log("Level Drawing");
}