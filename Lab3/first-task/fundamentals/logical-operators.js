alert( null || 2 || undefined ); // 2

alert (alert(1) || 2 || alert(3)); //2

alert( 1 && null && 2 ); //null

alert( alert(1) && alert(2) ); //undefined

alert( null || 2 && 3 || 4 ); //3

let age;
let condition = age >= 14 && age <= 90;
if (condition){
    alert('Good');
}

if (!condition){
    alert('Bad');
}


if (-1 || 0) alert( 'first' ); //runs
if (-1 && 0) alert( 'second' );//does not run
if (null || -1 && 1) alert( 'third' );//runs





