class Animal{
    public favFood: String;

    static numOfAnimals: number = 0;

    constructor(private name:string, private owner: string){
        Animal.numOfAnimals++;
    }

    ownerInfo(){
        document.write(this.name + " is owned by " + this.owner + "<br>");
    }

    static howManyAnimals():number{
        return Animal.numOfAnimals;
    }

    private _weight: number;

    get weight(): number{
        return this._weight;
    }

    set weight(weight: number){
        this._weight = weight;
    }

}

var spot = new Animal("Spot", "Doug");

spot.ownerInfo();

spot.weight = 100;

document.write("Spot's weight is " + spot.weight + "<br>");

var dog = new Animal("Zoo", "Ks");

document.write("# of Animals : " + Animal.howManyAnimals());


class Dog extends Animal{
    constructor(name: string, owner:string) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
}

var grover = new Dog("Grover", "Jimmy");

document.write("# of Animals: " + Animal.howManyAnimals() + "<br>");

document.write("Does grover have a name: " + ('name' in grover) + "<br>");

interface Vehicle{
    drive(): any;
}

class Car implements Vehicle{
    constructor(private wheels: number){

    }

    drive():void{
        document.write("The car drives with " + this.wheels + " wheels <br>");
    }
}

class Bicycle implements Vehicle{
    constructor(private wheels: number){

    }

    drive():void{
        document.write("The bicycle drives with " + this.wheels + " wheels <br>");
    }
}

var car = new Car(4);
var bike = new Bicycle(2);

car.drive();
bike.drive();
























