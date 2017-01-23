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

console.log("****************THE THIS KEYWORD*************************");


var person = {
    firstName: "Arunima",
    lastName: "Srivastava",
    fullName: function () {
        //Notice we use "this" just as we used "he" in the example sentence earlier:
        console.log(this.firstName + " " + this.lastName );

    },
    showAge: function () {
        console.log(this.age);
    }
};

var me = person;
me.age = 25;
me.fullName();
me.showAge();

console.log(this);