/* Functions in javascript are FIRST CLASS OBJECTS.
This means that javascript functions are just a special
type of object that can do all the things that regular objects can do.
 */


// 1. A function is an instance of the Object type:

function feedCat(){
    console.log("Kibble, tinned food and water");
}

console.log(feedCat instanceof Function);
console.log(feedCat instanceof Object);



//2. A function can have properties and has a link back to its constructor method:

feedCat.food = "kibble";
console.log(feedCat.food);
console.log(feedCat.constructor);



//3.You can store the function in a variable:

var eveningChore = feedCat;
eveningChore();


//4. You can pass the function as a parameter to another function:

function doEveningChores(chores){
    for(var x=0; x< chores.length; x++)
        chores[x]();
}
doEveningChores([feedCat]);

//5. You can return the function from a function:

function tonightChores(){
    return feedCat;
}

var tonight = tonightChores();
console.log(tonight);
tonight();





console.log("****************CLOSURE AND EXECUTION CONTEXT***********");

var saga = [];
var hero = "Shah Rukh Khan"
var newSaga = function () {
    var number = Math.floor(Math.random() * 20);
    saga.push(function () {
        var someNumber = Math.floor(Math.random() * 100);
        console.log(hero.toString() + " " + number.toString() + " " + someNumber.toString());

    });

};

newSaga();
saga[0]();
saga[0]();
saga[0]();

newSaga();
saga[0]();
saga[1]();
saga[0]();


console.log("***********ANONYMOUS FUNCTION***************");


//Created with a function operator

function myName(oneAnonFunctionObject){


    oneAnonFunctionObject();
    //console.log( typeof oneAnonFunctionObject.name);
    return function () {
        console.log("I am another Anon function which is being returned");
    }
}

var oneMoreAnonFunctionObject = myName(function () {
                                      console.log("I am one anon function which is passed as parameter.");
                                        });
oneMoreAnonFunctionObject();


console.log("***********CONSTRUCTOR FUNCTION***************");

function Pet(name, species, breed, hello, isMammal){
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.hello = hello;
    this.isMammal = isMammal;
    this.sayHello = function () {
        console.log(this.hello);

    }
    this.showMammalness = function () {
        if(this.isMammal){
            console.log("Mammal");
        }
        else{
            console.log("Not mammal");
        }

    }

}

var mickey = new Pet("Mickey", "Dog", "American Eskimo", "Bho bho", true);
mickey.sayHello();
mickey.showMammalness();
//console.log(mickey.constructor.toString());

var AnotherPetConstFunction = mickey.constructor;
var shiro = new AnotherPetConstFunction("Shiro", "Dog", "Labrador", "Bhooooooooo", true);
shiro.sayHello();

// IMPORTANT: Objects maintain the link to the function that created them
var arr = [];
console.log(arr.constructor.toString());



