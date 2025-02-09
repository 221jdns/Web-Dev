if ("0") {
    alert( 'Hello' );
}   
// false

let name = prompt("What is official name of JavaScript" , "ECMAScript");
if(name == "ECMAScript"){
    alert("Right!");
}
else{
    alert("You don't know? ECMAScript!");
}


let number = prompt("Write a number");
if(number > 0){
    alert(1);
}
else if(number < 0){
    alert(-1);
}
else{
    alert(0);
}


let result = (a + b < 4) ? "Below": "Over";


let login = (login =="Employee") ? message = "Hello" : 
    (login == "Director") ? message = "Greetings" :
        (login == "") ? message = "No login" :
            mesage ='';

