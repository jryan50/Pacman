var value=0
var Pacman = true;
var FaceDirection = 0;
var AnyKey;

var Xpos = 300;
var Ypos = 300;
var Dx = 0;
	var Dy = 0;

function setup() {
	createCanvas(600,600);
	background(100);
	
	ellipse(300,310,10,10);
	
	
	/*button = createButton('UP');
	button.position(50,250);
	button.size(70,70);
	button.mousePressed(Goup);
	
	button = createButton('DOWN');
	button.position(50,350);
	button.size(70,70);
	button.mousePressed(Godown);
	
	button = createButton('LEFT');
	button.position(50,150);
	button.size(70,70);
	button.mousePressed(Goleft);*/
	

	
	angleMode(DEGREES)
	frameRate(6)
	
	

}

function draw() {
	
	
		if(AnyKey===LEFT_ARROW){Goleft();}
		if(AnyKey===UP_ARROW){Goup();}
		if(AnyKey===DOWN_ARROW){Godown();}
		if(AnyKey===RIGHT_ARROW){Goright();}
	
	if (frameCount%2 ==0) {
		Pacman = !Pacman;
	}
	
	background(100)
	
	//FaceDireciton =2;
	
	Xpos = Xpos+Dx;
	Ypos = Ypos+Dy;
	
	PacPerson(Xpos,Ypos,FaceDirection, Pacman);
	
	

		
		
} //Draw

function keyPressed() {
	AnyKey = keyCode;
			
}
	
		
function PacPerson (X,Y,Dir,OpenClose,A,B) {
	var StartAng = 30;
	var StopAng  = -30;
	var AddOnAngle = 0;
	
	  if (Dir == 0){
			AddOnAngle = 0
			Dx=5
			Dy=0
			A=X-10
			B=Y-20
		}
	  if (Dir == 1){
			AddOnAngle = 270
			Dx=0
			Dy=-5
			A=X-20
			B=Y+10
		}
    if (Dir == 2){
			AddOnAngle = 90
			Dx=0
			Dy=5
			A=X+20
			B=Y-10
		}
	  if (Dir == 3){
			AddOnAngle = 180
			Dx=-5
			Dy=0
			A=X+10
			B=Y-20
			
		}
	  fill(244,241,66);
	  if (OpenClose == true) {
			arc(X, Y, 150, 159, StartAng+AddOnAngle, StopAng+AddOnAngle);
		} else {
			ellipse(X, Y, 150, 159)
			
		}
		fill(0,0,0);
		ellipse(A,B,20,20);
	
}




function Goup(){
	FaceDirection =1;
	AnyKey="";
}
function Godown(){
	FaceDirection =2;
	AnyKey="";
}
function Goleft(){
	FaceDirection =3;
	AnyKey="";
}
function Goright(){
	FaceDirection =0;
	AnyKey="";
}






	/*if ((Pacman) && (FaceDirection==0)) {
		fill(244,241,66);
		arc(300, 300, 150, 159, 30, -30);
		fill(0,0,0);
		ellipse(290, 270, 20, 20);
	 }
	if ((Pacman == false) && (FaceDirection==0)) {
		fill(244,241,66);
		ellipse(300, 300, 150, 159)
		fill(0,0,0);
		ellipse(290, 270, 20, 20);
	}
	
	if ((Pacman) && (FaceDirection==1)) {
		fill(244,241,66);
		arc(300, 300, 150, 159, -90+30, -90+-30);
		fill(0,0,0);
		ellipse(260, 305, 20, 20);
	 }
		if ((Pacman == false) && (FaceDirection==1)) {
		fill(244,241,66);
		ellipse(300, 300, 150, 159)
		fill(0,0,0);
		ellipse(260, 305, 20, 20);
	}
	
		if ((Pacman == false) && (FaceDirection==2)) {
		fill(244,241,66);
		ellipse(300, 300, 150, 159)
		fill(0,0,0);
		ellipse(260, 305, 20, 20);
	}
	
	if ((Pacman) && (FaceDirection==2)) {
		fill(244,241,66);
		arc(300, 300, 150, 159, 90+30, 90+-30);
		fill(0,0,0);
		ellipse(260, 305, 20, 20);
		
	}
		if ((Pacman == false) && (FaceDirection==3)) {
		fill(244,241,66);
		ellipse(300, 300, 150, 159)
		fill(0,0,0);
		ellipse(310, 270, 20, 20);
			
		}
	
		if ((Pacman) && (FaceDirection==3)) {
		fill(244,241,66);
		arc(300, 300, 150, 159, 180+30, 180+-30);
		fill(0,0,0);
		ellipse(310, 270, 20, 20);
		}
		*/
