let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


let schedule = {};

alert (isEmpty(schedule));

schedule["8:30"] = "get up";

alert (isEmpty(schedule));

function isEmpty(object){
    for (let value in object){
        return false;
    }
    return true;
}



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function MathAdd(object){
    let sum = 0;
    for(let value in object){
        sum+=value;

    }
    return sum;
}



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj){
    for(let value in obj){
        if(typeof obj[value] == 'number'){
            obj[value] *=2;
        }
    }
}
