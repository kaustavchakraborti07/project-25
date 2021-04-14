class Paper{
	constructor(x,y,r)
	{
	var options={
		isStatic:false,
		restitution:0.3,
		friction:5,
		density:1
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(x,y, (r-20)/2, options);
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push();
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
image(this.image,0,0,this.r,this.r);
			pop()
	}

}