function quadrado(){
 var q = ''
for (var i = 0; i< 4; i++) {
for (var a = 0; a< 4; a++) {
	q += '*'
}
    q += '<br>'
}
document.getElementById('resul').innerHTML = q
	
};

function quadradov(){
var x = 3;
var q = ''
for (var i = 0; i < x; i++) {//linha
for (var a = 0; a <4; a++) {
if((i==0)||(i==x-1)){//coluna
	q += '*';
} else{
if((a==0) ||(a==4-1)){
   q += '<br>';
}else if(a==3-1){
	q += '<br>*&nbsp&nbsp&nbsp&nbsp*';
} else{   	
   q += '*&nbsp&nbsp&nbsp&nbsp*'
   }
                
}
}
  
}
document.getElementById('resul').innerHTML = q
};
	
function retangulo(){
 var q = ''
for (var i = 0; i< 4; i++) {
for (var a = 0; a< 10; a++) {
	q += '*'
}
    q += '<br>'
}
document.getElementById('resul').innerHTML = q
};
	

function retangulov(){
var x = 4;
var q = ''
for (var i = 0; i < x; i++) {//linha
for (var a = 0; a <10; a++) {
if((i==0)||(i==x-1)){//coluna
	q += '*';
} else{

if(a==0){
   q += '<br>*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*';
}

}
}if(i==2){

      q += '<br>'; 
}
}

document.getElementById('resul').innerHTML = q
};


function triangulo(){
 var j,i,l;
 var q =""
 var n = 10;
for (var i = 0; i<= n; i++)
	
 {
	for (j = 1; j <= n-i ; j++) {
	q += '&nbsp'
}
for (l = 1; l <= n+i-9 ; l++) {
	q += '*'
}
	q += '<br>'
    
}
document.getElementById('resul').innerHTML = q
	
};

function triangulov(){
 var j,i,l;
 var q =""
 var n = 10;
for (var i = 0; i<= n; i++)
	
 {
	for (j = 1; j <= n-i ; j++) {
	q += '&nbsp'
}
for (l = 1; l <= n+i-10 ; l++) {
	if ((l==1)||(l==1)) {
	q += '*'
	}else 
	if (i==10) {
	q += '*'
	}else
	 if (l<=10) {
	 	q += '&nbsp&nbsp'
	 }
}
	q += '*<br>'
    
}
document.getElementById('resul').innerHTML = q
}

function circulo(){
	var x,y;
	var q = '';
 for (x = 5; x >= 0; x--) {
 	for (y = 5 ; y >= -2; y--) {
 	console.log("result"+y +"xxx+"+x);
 	     if ((x==5)&&(y==2)) {
 		q +='****'
 	} if ((x==5)&&(y==3)) {
 		q +='***'
 	}else if ((x==5)&&(y==4)) {
 		q +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==4)&&(y==0)||(x==4)&&(y==1)||(x==4)&&(y==2)) {
 		q +='****'
 	}else if ((x==3)&&(y==0)) {
 		q +='**'

 	}else if ((x==3)&&(y==1)||(x==3)&&(y==2)||(x==3)&&(y==3)) {
 		q +='****'
 	}else if ((x==2)&&(y==0)) {
 		q +='**'
 	}else if ((x==2)&&(y==0)||(x==2)&&(y==1)||(x==2)&&(y==2)||(x==2)&&(y==3)) {
 		q +='****'
 	}else if ((x==1)&&(y==0)||(x==1)&&(y==1)||(x==1)&&(y==2)) {
 		q +='****'
 	}else if ((x==0)&&(y==2)||(x==0)&&(y==3)) {
 		q +='&nbsp&nbsp&nbsp'
 	}else if ((x==0)&&(y==0)||(x==0)&&(y==1)) {
 		q +='****'
}else if (y==5) {
 		q +='<br>&nbsp&nbsp&nbsp&nbsp'
}else
 		q +='&nbsp&nbsp&nbsp'
 	
 }
 }
document.getElementById('resul').innerHTML = q
}

function circulov(){
	var x,y;
	var q = '';
 for (x = 5; x >= 0; x--) {
 	for (y = 5 ; y >= -2; y--) {
 	console.log("result"+y +"xxx+"+x);
 	     if ((x==5)&&(y==1)||(x==5)&&(y==2)||(x==5)&&(y==3)||(x==5)&&(y==0)) {
 		q +='*'
 	}else if ((x==5)&&(y==4)) {
 		q +='&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==4)&&(y==0)||(x==4)&&(y==2)) {
 		q +='*'
 	}else if ((x==4)&&(y==1)) {
       q +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==3)&&(y==0)||(x==3)&&(y==3)) {
 		q +='*'
 	}else if ((x==3)&&(y==1)||(x==3)&&(y==2)) {
 		q +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	} if ((x==2)&&(y==0)||(x==2)&&(y==3)) {
 		q +='*'
 	}else if ((x==2)&&(y==1)||(x==2)&&(y==2)) {
       q +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	} if ((x==1)&&(y==1)) {
       q +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==1)&&(y==0)||(x==1)&&(y==2)) {
 		q +='*'
 	}else if ((x==0)&&(y==4)) {
 		q +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==0)&&(y==1)||(x==0)&&(y==2)||(x==0)&&(y==3)||(x==0)&&(y==0)) {
 		q +='*&nbsp&nbsp'
}else if (y==5) {
 		q +='<br>&nbsp&nbsp&nbsp&nbsp'
}else
 		q +='&nbsp&nbsp'
 	
 }
 }
document.getElementById('resul').innerHTML = q
}

function xiz(){
 	var x,y;
	var q = '';
 for (x = 5; x >= 0; x--) {
 	for (y = 5 ; y >= -2; y--) {
 	console.log("result"+y +"xxx+"+x);
       if ((x==5)&&(y==0)||(x==5)&&(y==4)) {
        q +='*'
    }else if ((x==5)&&(y==1)||(x==5)&&(y==2)||(x==5)&&(y==3)) {
 		q +='&nbsp'
 	}else if ((x==4)&&(y==1)||(x==4)&&(y==3)) {
 		q +='*'
 	}else if ((x==4)&&(y==0)||(x==4)&&(y==2)||(x==4)&&(y==4)) {
 		q +='&nbsp'
 	}else if ((x==3)&&(y==2)) {
 		q +='*'
 	}else if ((x==3)&&(y==0)||(x==3)&&(y==1)||(x==3)&&(y==3)||(x==3)&&(y==4)) {
 		q +='&nbsp'
 	}else if ((x==2)&&(y==1)||(x==2)&&(y==3)) {
        q +='*'
 	}else if ((x==2)&&(y==0)||(x==2)&&(y==2)||(x==2)&&(y==4)) {
 		q +='&nbsp'
 	}else if ((x==1)&&(y==0)||(x==1)&&(y==4)) {
        q +='*'
 	}else if ((x==1)&&(y==1)||(x==1)&&(y==2)||(x==1)&&(y==3)) {
 		q +='&nbsp'
 	}else if ((x==0)&&(y==0)||(x==0)&&(y==1)||(x==0)&&(y==2)||(x==0)&&(y==3)||(x==0)&&(y==4)) {
 		q +='!'
 	}else if (y==5) {
 		q +='<br>&nbsp&nbsp&nbsp&nbsp'
}else
 		q +='&nbsp&nbsp&nbsp'
 	
 }
 }
document.getElementById('resul').innerHTML = q
}

function casa($a){
	var x,y;
	var q = '';
 for (x = 5; x >= 0; x--) {
 	for (y = 9 ; y >= 0; y--) {
 	console.log("result"+y +"xxx+"+x);
          if ((x==5)&&(y==0)||(x==5)&&(y==1)||(x==5)&&(y==2)||(x==5)&&(y==3)||(x==5)&&(y==4)||(x==5)&&(y==5)||(x==5)&&(y==6)) {
        q +='*&nbsp'
 	}else if ((x==5)&&(y==7)||(x==5)&&(y==8)) {
 		q +='&nbsp&nbsp'
 	}else if ((x==4)&&(y==0)||(x==4)&&(y==5)||(x==4)&&(y==7)) {
 		q +='*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==4)&&(y==1)||(x==4)&&(y==2)||(x==4)&&(y==3)||(x==4)&&(y==4)||(x==4)&&(y==6)||(x==4)&&(y==8)) {
 		q +='&nbsp'
 	}else if ((x==3)&&(y==0)||(x==3)&&(y==1)||(x==3)&&(y==2)||(x==3)&&(y==3)||(x==3)&&(y==4)||(x==3)&&(y==5)||(x==3)&&(y==6)||(x==3)&&(y==7)||(x==3)&&(y==8)) {
 		q +='*&nbsp'
 	}else if ((x==2)&&(y==0)) {
 		q +='¨¨¨¨'
 	}else if ((x==2)&&(y==1)||(x==2)&&(y==2)||(x==2)&&(y==3)||(x==2)&&(y==4)||(x==2)&&(y==5)||(x==2)&&(y==6)||(x==2)&&(y==7)||(x==2)&&(y==8)) {
 		q +='¨¨'
 	}else if ((x==1)&&(y==0)||(x==1)&&(y==5)||(x==1)&&(y==8)) {
 		q +='*&nbsp&nbsp&nbsp'
 	}else if ((x==1)&&(y==1)||(x==1)&&(y==2)||(x==1)&&(y==3)||(x==1)&&(y==4)||(x==1)&&(y==6)||(x==1)&&(y==7)) {
 		q +='&nbsp¨'
 	}else if ((x==0)&&(y==0)||(x==0)&&(y==1)||(x==0)&&(y==2)||(x==0)&&(y==3)||(x==0)&&(y==4)||(x==0)&&(y==5)||(x==0)&&(y==6)||(x==0)&&(y==7)||(x==0)&&(y==8)) {
        q +='*&nbsp'
 	}else if (y==9) {
 		q +='<br>'
}else
 		q +='e&nbsp&nbsp&nbsp'
 	
 }
 }
document.getElementById('resul').innerHTML = q
}

