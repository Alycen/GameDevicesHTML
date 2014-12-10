function Civilian(xPos, yPos) {
	this.x = xPos;
	this.y = yPos;
	//texture - not a touch area
	this.scale = 1;
	this.width = 23;	//width of tempNPC
	this.height = 49;	//height of tempNPC
	this.isMarked = false;
	this.isShot = false;

	this.img = new Image();
	this.img.src = "tempNPC.png";
	this.markImg = new Image();
	this.markImg.src = "mark.png";
	//States - Default, Alert;
}

Civilian.prototype.Move = function() {
	var timer = 30 * 3;	//assuming 30 FPS
	var UP=0, DOWN=1, LEFT=2, RIGHT=3, STOP=5;
	var verticleSpeed=1, horizontalSpeed=2;
	//random number generator between UP && STOP
	var dir; //= rand(UP, STOP);

	for ( ; timer >= 0 ; timer -- ) {
		if ( timer == 0 ) {
			timer = 30 * 3;
		}

		if ( dir == UP ) {
			this.y -= verticleSpeed;
		}
		else if ( dir == DOWN ) {
			this.y += verticleSpeed;
		}
		else if ( dir == LEFT ) {
			this.x -= horizontalSpeed;
		}
		else if ( dir == RIGHT ) {
			this.x += horizontalSpeed;
		}
		else {	// dir == STOP
			//do nothing;
			//this.x += 0;
			//this.y += 0;
		}
	}
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

///////////////////////////////////////////
// GET METHODS
///////////////////////////////////////////

Civilian.prototype.getScale = function() {
	return this.scale;
}

Civilian.prototype.getPositionX = function() {
	return this.x;
}
Civilian.prototype.getPositionY = function() {
	return this.y;
}

Civilian.prototype.Marked = function() {
	return this.isMarked;
}

Civilian.prototype.Shot = function() {
	return this.isShot;
}

//Civilian.prototype.getCivSprite() {

//}

///////////////////////////////////////////
// SET METHODS
///////////////////////////////////////////

Civilian.prototype.setScale = function(newScale) {
	this.scale = newScale;
}

Civilian.prototype.setPositionX = function(newX) {
	this.x = newX;
}
Civilian.prototype.setPositionY = function(newY) {
	this.y = newY;
}

Civilian.prototype.setMarked = function(marked) {
	this.isMarked = marked;
} 

Civilian.prototype.setShot = function(shot) {
	this.isShot = shot;
}