class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log('Hello, ' + this.name + '!');
    }
  }
  
  let person = new Person('John', 25);

  