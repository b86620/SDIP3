// Anthony Arrats
// July 24, 2014
// SDI 1407

// Prompt

var thePrompt = prompt("What is your name?");

// Procedure

var nameFunction = function(personName) {
    
    if (personName === "Lee") {
        
        console.log("Glad to see you here. You're familiar face.")
        
    } else {
    
        console.log("Hello,", personName,"I don't know you, but you're welcome to come along.")
        
    }

};


// Confirm and Boolean

var theConfirmation = confirm("Are you ready to go?");

var confirmFunc = function(confirmation, personName) {

    var counter = 0;
    var endCount = 4;
    
    while (counter < endCount) {
        
        if (!confirmation) {
            
            console.log("I only have", endCount - counter, "minutes left!");
            
            counter += 1;
            
        } else {
            
            console.log("Let's go.");
            
            break;
            
        }
        
    }
    
    return confirmation;    
};

// Array and loop




var personFunction = function() {
    var peopleArray = ["Emily", "Anthony", "John", "Bill"];
    var arrayLength = peopleArray.length;
    console.log(arrayLength + " is how many people who want to join in.");
    
    for (var person in peopleArray) {
        console.log(peopleArray[person] + " wants to join as well.");
    }
    console.log(peopleArray.pop() + " has decided not to come with us though.")
};



// String function
var stringFunction = function(string1, string2) {
    
    return string1 + " " + string2;
    
}

// Function Calls
nameFunction(thePrompt);
var myReturn = confirmFunc(theConfirmation, thePrompt);
var myString = stringFunction("Glad we finally made it here", "Where to now?");
personFunction();

// Outputs
console.log("Ready to go:",myReturn);
console.log(myString);
