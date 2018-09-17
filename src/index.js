module.exports = function solveEquation(equation) {

var str=equation.replace(/\s/g, '')
  
var a = parseInt(str)+"";
var aLength = a.length;

str=str.substring(aLength+4)

var b = parseInt(str)+"";
var bLength = b.length;

  if (b<0) {
   str=str.substring(bLength+2)
  }
  else {
   str=str.substring(bLength+3)
  }

var c = parseInt(str);

var D = (Math.pow(b,2)-4*a*c);

var x1 = (-b + Math.sqrt(D))/(2*a)
var x2 = (-b - Math.sqrt(D))/(2*a)

function round(x) {

  var delta = Math.abs(x-parseInt(x));
  
  if ((x<0)&&(delta<0.5)) {x = parseInt(x);
  }
  else if ((x<0)&&(delta>=0.5)) {x = parseInt(x)-1;
  }
  else if ((x>0)&&(delta<0.5)) {x = parseInt(x);
  }
  else if ((x>0)&&(delta>=0.5)) {x = parseInt(x)+1;
  }

return x
}

x1 = round(x1);
x2 = round(x2);

var result=[x1,x2];
result.sort(function(a,b){return a-b});

return result

}
