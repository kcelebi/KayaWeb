var x=20;
var y=20;
var mat = [];
var dead = 0;

function setup(){
	createCanvas(x*20, y*20);
	frameRate(6);
	var c = 0;
	for(var i=0; i < y; i++){
		var sup = [];
		for(var j =0; j < x; j++){
			var num = Math.floor(Math.random()*2);
			if(num == 1 && c < x+2000){
				sup.push(1);
				c++;
			}
			else{
				sup.push(0);
			}
			//sup.push(0);
		}
		mat.push(sup);
	}

	/*mat[0][0] = 1;
	mat[0][1] = 1;
	mat[1][0] = 1;
	mat[1][1] = 1;*/

	/*mat[3][3] = 1;
	mat[4][3] = 1;
	mat[3][4] = 1;
	mat[4][4] = 1;
	mat[5][5] = 1;
	mat[5][6] = 1;
	mat[6][5] = 1;
	mat[6][6] = 1;

	mat[13][3] = 1;
	mat[14][3] = 1;
	mat[13][4] = 1;
	mat[14][4] = 1;
	mat[15][5] = 1;
	mat[15][6] = 1;
	mat[16][5] = 1;
	mat[16][6] = 1;

	mat[15][54] = 1;
	mat[15][55] = 1;
	mat[16][54] = 1;
	mat[16][55] = 1;
	mat[13][56] = 1;
	mat[14][56] = 1;
	mat[13][57] = 1;
	mat[14][57] = 1;

	mat[5][54] = 1;
	mat[5][55] = 1;
	mat[6][54] = 1;
	mat[6][55] = 1;
	mat[3][56] = 1;
	mat[4][56] = 1;
	mat[3][57] = 1;
	mat[4][57] = 1;

	//lul ship
	/*mat[10][6] = 1;
	mat[11][7] = 1;
	mat[11][8] = 1;
	mat[10][8] = 1;
	mat[9][8] = 1;

	mat[10][11] = 1;
	mat[11][12] = 1;
	mat[11][13] = 1;
	mat[10][13] = 1;
	mat[9][13] = 1;

	mat[10][16] = 1;
	mat[10][19] = 1;
	mat[11][20] = 1;
	mat[12][16] = 1;
	mat[12][20] = 1;
	mat[13][17] = 1;
	mat[13][18] = 1;
	mat[13][19] = 1;
	mat[13][20] = 1;

	mat[10][40] = 1;
	mat[10][37] = 1;
	mat[11][36] = 1;
	mat[12][40] = 1;
	mat[12][36] = 1;
	mat[13][39] = 1;
	mat[13][38] = 1;
	mat[13][37] = 1;
	mat[13][36] = 1;

	mat[10][45] = 1;
	mat[11][44] = 1;
	mat[11][43] = 1;
	mat[10][43] = 1;
	mat[9][43] = 1;*/


	/*mat[10][4+5] = 1;
	mat[11][4+5] = 1;
	mat[10][5+5] = 1;
	mat[11][5+5] = 1;

	mat[8][17+5] = 1;
	mat[8][16+5] = 1;
	mat[9][15+5] = 1;
	mat[10][14+5] = 1;
	mat[11][14+5] = 1;
	mat[12][14+5] = 1;
	mat[13][15+5] = 1;
	mat[14][16+5] = 1;
	mat[14][17+5] = 1;

	mat[11][18+5] = 1;
	mat[9][19+5] = 1;
	mat[10][20+5] = 1;
	mat[11][20+5] = 1;
	mat[12][20+5] = 1;
	mat[11][21+5] = 1;
	mat[13][19+5] = 1

	mat[10][24+5] = 1;
	mat[9][24+5] = 1;
	mat[8][24+5] = 1;
	mat[10][25+5] = 1;
	mat[9][25+5] = 1;
	mat[8][25+5] = 1;
	mat[7][26+5] = 1;
	mat[7][28+5] = 1;
	mat[6][28+5] = 1;
	mat[11][26+5] = 1;
	mat[11][28+5] = 1;
	mat[12][28+5] = 1;

	mat[8][38+5] = 1;
	mat[9][38+5] = 1;
	mat[8][39+5] = 1;
	mat[9][39+5] = 1;*/


	dead = x*y-3;
}

function draw(){
	background(0);
	for(var y_ =0; y_<y; y_++){
		for(var x_= 0; x_<x;x_++){
			if(mat[y_][x_] == 1){
				fill(255);
				rect(x_*width/x,y_*height/y,width/x,height/y);
				//console.log(height/y)
			}
			
		}
	}
	update();
	
} 

function update(){
	var f=[];
	for(var y_ =0; y_<y; y_++){
		var sup = [];
		for(var x_= 0; x_<x;x_++){
			sup.push(0);
		}
		f.push(sup);
	}
	for(var y_ =0; y_<y; y_++){
		for(var x_= 0; x_<x;x_++){
			var n = [ [y_+1,x_], [y_-1,x_], [y_+1,x_+1], [y_,x_+1],
					[y_-1,x_+1],[y_+1,x_-1],[y_,x_-1],[y_-1,x_-1]];

			//console.log(n[0][0]);
			var alive = 0;
			for(var p = 0; p < n.length; p++){
				/*console.log(n[p][0]);
				console.log(x_);
				console.log(y_);*/
				if(in_bounds(n[p][0],n[p][1]) ){
					/*console.log(n[p][0]);
					console.log(x_);
					console.log(y_);*/
					if(mat[n[p][0]][n[p][1]] == 1){
						alive ++;
					}
				}
			}
			//console.log(alive);
			if(mat[y_][x_] == 1 && (alive <2 || alive >3)){
				f[y_][x_] = 0;
				dead ++;
			}
			else if( mat[y_][x_] == 0 && alive == 3){
				f[y_][x_] = 1;
				dead --;
			}
			else{
				f[y_][x_] = mat[y_][x_];
			}
		}
	}
	for(var y_ =0; y_<y; y_++){
		for(var x_= 0; x_<x;x_++){
			//console.log(f[y_][x_]);
			mat[y_][x_] = f[y_][x_];
		}
	}
}

function in_bounds(a,b){
	if(a>-1 && b >-1 && a < y && b < x){
		return true;
	}
	return false;
}