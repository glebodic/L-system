var len = 10 ;
var angle ;

var rules = [] ;

/* Koch curve 
var axiom = "F" ;

rules[0] = {
  a: "F",
  b: "F+F-F-F+F"
} ;

var angle = 90 ; */

/* Sierpinski triangle 
var axiom = "F-G-G" ;

rules[0] = {
  a: "F",
  b: "F-G+F+G-F"
} ;

rules[1] = {
  a: "G",
  b: "GG"
} ; 

var angle = 120 ;*/

/* Tree  */
var axiom = "F" ;

rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
} ;

var angle = 25 ; 


var sentence = axiom ;


function generate() {
  var nextSentence = "" ;
  // len *= 0.5 ;
  for (var i = 0 ; i < sentence.length ; i++) {
    var current = sentence.charAt(i);
    var found = false ;
    for (var j = 0 ; j < rules.length ; j++) {
      if (current == rules[j].a) {
        nextSentence += rules[j].b ;
        found = true ;
        break ;
      }
    }
    if (!found) {
      nextSentence += current ;
    }
  }
  sentence = nextSentence ;
  createP(sentence) ;
  turtle() ;
}

function turtle() {
  background(51) ;
  stroke(255) ;
  translate(width/2,height-10) ;
  for (var i=0 ; i<sentence.length; i++) {
    var current = sentence.charAt(i) ;
    if (current=="F" || current=="G") {
      line(0,0,0,-len) ;
      translate(0,-len)
    } else if (current == "+") {
      rotate(angle) ;
    } else if (current == "-") {
      rotate(-angle) ;
    }  else if (current == "[") {
      push() ;
    } else if (current == "]") {
      pop() ;
    } 
    
  }
}

function setup() {
  createCanvas(2000,1200);
  background(51);
  turtle() ;
  createP(sentence) ;
  angle = radians(angle) ;
  var button = createButton("generate") ;
  button.mousePressed(generate) ;
} 

function draw() {

}