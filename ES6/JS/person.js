export class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        return `Hello My Name is ${this.name} and I am ${this.age} years Old.`;
    }

}

export const defaultAge=30;