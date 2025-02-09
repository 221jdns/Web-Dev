function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  }



  function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered ); 
  
  alert( arr ); 



  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arrr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); 
  
  alert( arr );




  let arr3 = [5, 2, 1, -10, 8];

  arr.sort((a, b) => b - a);
  
  alert( arr );





  let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);

  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }




let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr4 = [ vasya, petya, masha ];

alert( getAverageAge(arr) );



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr5 = [1, 2, 3];
  shuffle(arr);
  alert(arr);



