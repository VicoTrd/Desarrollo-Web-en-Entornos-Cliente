class Persona{
    name = "";
    age = 0;
    stomach = [];

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get nombreYEdad() {
        return this.name + " " + this.age;
    }

    eat(food){
        if(this.stomach.length <= 10)
            this.stomach.push(food);
    }

    poop(){
        this.stomach = [];
    }

    toString(){
        return "Nombre " + this.name + "Edad " + this.age; 
    }
}

nuevaPersona = new Persona("Alejandro", 19);
nuevaPersona.eat("Macarrones");
console.log(nuevaPersona.nombreYEdad);