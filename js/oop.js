
console.log("****************THE THIS KEYWORD*************************");

"use strict";

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


var func = function (one, two) {
    console.log( this , one, two);

};


var r = {}, g = {}, b = {}, y = { color: "yellow"};
r.my_method = func;
r.my_property = "awesomeness";
r.my_method(g,b);


//default global object will be assigned to this in the below function call
//func( r, g);

//call() takes first argument as the owner object and rest of the arguments
//are passed as parameters.

//Here, r is the owner object
func.call(r, g, b);

//Here, y is the owner object
r.my_method.call(y, g, b);


//Here, this in func will get a global(default) object
//setTimeout(func(y, g), 1000);

//This is the way which in which we can call func()
//setTimeout(function () {r.my_method(y, g);}, 1000);

console.log(this);

new r.my_method(g, b);


console.log("****************PROTOTYPE CHAINING*************************");

//Following is a object literal

var gold = { type: "precious" };
var ornament = Object.create(gold);
ornament.type = "jewellery";


console.log(gold.isPrototypeOf(ornament));
console.log(Function.prototype.isPrototypeOf(Object));
console.log(Object.prototype.isPrototypeOf(gold));

console.log(gold instanceof Object);
console.log(Function instanceof Object);
console.log(Object instanceof Function);
//console.log(Object instanceof gold);

console.log(Object.getPrototypeOf(gold));




/*All objects will have a constructor property.  Objects created without
the explicit use of a constructor function (i.e. the object and array literals)
will have a constructor property that points to the Fundamental Object constructor
 type for that object e.g. Array, Number, Object.
 */

// .constructor Returns a reference to the Object constructor function that
// created the instance object.
console.log(ornament.constructor);


// gold has inherited from Object.prototype and ornament has inherited
// from gold (not gold.prototype). Since, gold is a object literal
// not a constructor function. Only constructor function has a
//property .prototype

console.log(Object.getPrototypeOf({}) === Object.prototype);

console.log(Object.getPrototypeOf(gold) === Object.prototype);

console.log(Object.getPrototypeOf(ornament) === gold);

console.log(Object.getPrototypeOf(Object.prototype))

console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);


var myArr = [];

console.log(myArr.constructor);

console.log("************PSEUDOCLASSICAL Pattern *****************");

/* One question arises, What is the need of storing all the methods inside
* the property methid of a constructor function? The answer is to save memory.
* Otherwise, if we declare the sayHello() inside the Dog function then everytime
* an object is created, large amount of space is dedicated to save the method.
* But, in this case the function is saved at one place and whenver called it will
* be looked upon on Dog.prototype. */



function Dog(name, age) {
    //this = Object.create(Dog.prototype);
    //the above line is automatically inserted by the intepreter when
    //the instance is made with new keyword.
    this.name = name.valueOf();
    this.age = age;
    //return this.
}

Dog.prototype.sayHello = function () {
                                    console.log(this.name +"  says woof woof!!!");
                                        };


function Pug(name, age, height, description) {
    Dog.call(this, name, age);
    this.height = height;
    this.description = description;
}



//WRONG PRACTICE
//Pug.prototype = new Dog();


//Correct way
Pug.prototype = Object.create(Dog.prototype);

var guddu = new Pug("guddu", 3 ,"8 inches", "Sweet and friendly");


//Notice how the constructor is referring to Dog at this point
//because along with the other methods in the prototype the constructor
//property of Dog is also got copied in Pug's prototype.
console.log(guddu.constructor);

//Fix the above issue
Pug.prototype.constructor = Pug;


//Add Speciality
Pug.prototype.showMe = function () {
        console.log("I am awesome and I know it!!! ");
}


console.log(guddu.constructor);




console.log("*****************FUNCTIONAL Class ***********************************");
//These creates the instances of a particular class. Like
//Constructor function.

var Car = function ( loc ) {
    var obj = {
        loc: loc,
        move: function () {
            obj.loc ++;

        }
    };

    return obj;
}

var amy = Car(1);
//amy.move();
var ben = Car(9);
//ben.move();




















