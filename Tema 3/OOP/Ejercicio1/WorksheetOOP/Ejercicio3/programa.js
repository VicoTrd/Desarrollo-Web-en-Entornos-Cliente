class Lambdasian{
    name;
    age;
    location;

    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }
     speak(){
        return "Hello my name is " + this.name + ", I am from " + this.location;
     }
}

let jose = new Lambdasian({name:"jose", age: 30, location: "Granada"});