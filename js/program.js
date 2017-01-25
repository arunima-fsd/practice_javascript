var me_object = {
	name : "Arunima Srivastava",
	age : 25,
	profession : "Full Stack Web Developer",
	skills : ["Python", "HTML", "CSS", "JavaScript"]

};

//$(".name").append(me_object.name);

//$(".skills").prepend(me_object.skills);


//substituting default values 
//$(".main").append((me_object.job) || ("finding destiny"));

var temp = me_object.name.concat(" creates awesomeness!!!");

console.log(temp);

function People () {
	this.superstar = "Michael Jackson";
}


// PROTOTYPE Explanation
// Source: http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/

/* A constructor is a function used for initializing new objects,
 and you use the new keyword to call the constructor. */

function Account ()
{
}
// This is the use of the Account constructor to create the userAccount object.â€‹
var userAccount = new Account (); 






/*  Moreover, all objects that inherit from another object also 
   inherit a constructor property. And this constructor property 
   is simply a property (like any variable) that holds or points 
   to the constructor of the object. */

//The constructor in this example is Object ()
var myObj = new Object ();

// And if you later want to find the myObj constructor:
console.log(myObj.constructor); // Object()



// Another example: Account () is the constructor
var userAccount = new Account (); 
// Find the userAccount object's constructor
console.log(userAccount.constructor); // Account()



/*  Object.prototype is the prototype attribute (or the prototype object) 
 of all objects created with new Object () or with {}. Object.prototype 
 itself does not inherit any methods or properties from any other object.*/


 function Animal(){
 	this.country = "India";
 }

 Animal.prototype.showNameandAge = function(){
 	console.log("Name of the animal is " + this.name + " and age is " + this.age);
 }

Animal.prototype.canThisFly = function(){
	if(this.canFly){
		console.log("Yes this animal, " + this.name + " can fly");
	}
	else{
		console.log("No, this animal, " + this.name + " can't fly.");
	}
}


function Dog(breed){
	this.name = "Dog";
	this.age = 14;
	this.isMammal = true;
	this.canFly = false;
	this.breed = breed;

}

Dog.prototype.showBreedandSize = function(){
	console.log("Breed of the dog is " + this.breed + " and size is " + this.size);
}

Dog.prototype.isMammal = function(){
	if(this.isMammal){
		console.log("Yes this animal, " + this.name + " is mammal");
	}
	else{
		console.log("No, this animal, " + this.name + " is not mammal.");
	}

}
/* WRONG WAY of inheritance.
* CORRECT WAY Dog.prototype = Object.create(Animal.prototype);
* Wrong method will giva the same effect but in that process
* calls the constructor function Animal, which is highly
* undesirable. */

Dog.prototype = new Animal();



var my_pug = new Dog("Pug");

console.log(my_pug.showNameandAge());
console.log(my_pug.breed);
console.log(my_pug.canFly);



//All about prototypes

//returns the type
//console.log(typeof me_object);
//console.log(me_object.hasOwnProperty("constructor"));

// CLOSURE example

function celebrityName( firstName) {
	var intro = "The name of the celebrity is: ";
	function introduction(lastName) {
		return intro + firstName + " " + lastName ;

    }

    return introduction;

}



var mJname = celebrityName("Barack");

console.log(mJname("Obama"));


//ANONYMOUS FUNCTION






/*When a function is stored as a property of an object,
we call it a method. When a method is invoked, this is
bound to that object. */






















