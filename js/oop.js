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
setTimeout(function () {
    r.my_method(y, g);

}, 1000);

console.log(this);

new r.my_method(g, b);


