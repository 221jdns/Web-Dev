let i = 3;

while (i) {
  alert( i-- );
}
//0


i = 0;
while (++i < 5) alert( i );
//4



i = 0;
while (i++ < 5) alert( i );
//5


for (i = 0; i < 5; i++) alert( i );
//


for (i = 0; i < 5; ++i) alert( i );


for(i = 2; i <10;i++){
    if(!(i%2==0)){
        continue;
    }
    else{
        alert(i);
    }
}

while(i<3){
    alert( `number ${i}!` );
    ++i;
}

let num;

do{
    num = prompt("Enter a number greater than 100?", 0);
} while(num <=100 && num);


let number = prompt("Write n: ");
let a = 0;
while(a < number){
    if(a == 1){
        continue;
    }
    else if(a==2 || a==3){
        alert(a);
    }
    else if(a % a == 0 && a % 1 == 0){
        alert(a);
    }
    else{
        continue;
    }
}