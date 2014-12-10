function Civilian(xPos, yPos) {
	this.x = xPos;
	this.y = yPos;
	//texture - not a touch area
	this.scale = 1;
	this.width = 20;
	this.height = 30;
	this.isMarked = false;
	this.isShot = false;

	this.img = new Image();
	this.img.src = "tempNPC.png";
	this.markImg = new Image();
	this.markImg.src = "mark.png";
	//States - Default, Alert;
}

Civilian.prototype.Move = function() {

}

// Marked() 

// Shot() 

Civilian.prototype.Update = function() {
	this.Move();
	this.draw();
}

Civilian.prototype.draw = function() {
	game.ctx.drawImage(this.img, 0, 0, this.width, this.height);
}

