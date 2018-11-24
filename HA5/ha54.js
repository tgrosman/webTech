class Vector {
	constructor(x,y){
		this.x = x;
		this.y =y;
	}
	plus(aVec){
		return new Vector(this.x + aVec.x, this.y + aVec.y);
	}
	minus(aVec){
		return new Vector(this.x - aVec.x, this.y - aVec.y);
	}
	 get length(){
	 	return Math.sqrt((this.x*this.x)+(this.y*this.y));
	 }
}
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);


