class Car {
    constructor() {
        this.tyres = 4;
    }
    setTyres(t) {
        this.tyres = t
    }
    displayCarProps(){
        console.log(`your car has ${this.tyres} tyres`) 
    }
}
    let sportsCar = new Car();
    sportsCar.setTyres(4)
    sportsCar.displayCarProps()



// Write a class method to return the number of tyres of a Car Class