let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

alert( fruits.length ); //4




let style = ["Blues" , "Jazz"];

style.push("Rock");
style[Math.floor((styles.length - 1) / 2)] = "Classic";
style.shift();
style.unshift("Rap", "Raggy");




let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); //// a,b,function(){...}


function sumInput(input){
    let numbers = [];

    while(true){
        let value = prompt("Введите число", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
    

}



function getMaxSubSum(arr){
    let maxSum = 0;
    let partialSum = 0;
    for(let item of arr){
        partialSum +=item;
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum < 0 ) partialSum = 0;
    }
    return maxSum;

}