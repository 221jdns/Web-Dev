let num = +prompt("Enter a value");
let num2 = +prompt("Enter a value");

alert(num + num2);


alert( Math.round(6.35 * 10) / 10 );


function readNumber(){
    let num;
    do {
        num = prompt("Enter a number?", 0);
    } while ( !isFinite(num) );
    
    if (num === null || num === '') return null;
    
    return +num;

}
alert(`Read: ${readNumber()}`);



let i = 0;
while (i != 10) {
  i += 0.2;
} //loop is infinite because it never be equal to 10



function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );





function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );
