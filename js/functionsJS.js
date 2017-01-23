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










//ANONYMOUS Function

var add = function (a , b) {
    return a + b;

}


console.log(add(2, 3));