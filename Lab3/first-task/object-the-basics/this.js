function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); //error




  let calculator = {
    a:0,
    b:0,
    read(){
        this.a +=prompt('a?', 0);
        this.b +=prompt('b?', 0);
    },
    summa(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.summa() );
  alert( calculator.mul() );




  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };


