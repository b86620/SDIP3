// Globals

var peopleArray = ["Anthony", "Emily", "Lee", "Derek"];

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

//Loop through array

var i;
for (i = 0; i < peopleArray.length; i++)
{
    console.log(peopleArray[i]);
}

// Number function

var numberFunction = function(number) {
    
    var i;
    var endCounter = number; 
    
    for (i = 0; i < endCounter; i++) {
        
        number -= 1;
        
        console.log("We have " + number + " minutes until we reach our destination.");
        
    }
    
    return number;
}

// String function
var stringFunction = function(string1, string2) {
    
    return string1 + " " + string2;
    
}

// Array function

var arrayFunction = function() {
    for (i = 0; i < peopleArray.length; i++)
    {
        console.log(peopleArray[i]);
    }
}

// Function Calls
nameFunction(thePrompt);
var myReturn = confirmFunc(theConfirmation, thePrompt);
var myNumber = numberFunction(185);
var myString = stringFunction("Glad we finally made it here", "Where to now?");

// JSON

var JSONObj = JSON.parse(JSONStr);

// Outputs

console.log("Ready to go:",myReturn);
console.log("We need " + myNumber + " gallons of gas to get to our destination.");
console.log("We have " + peopleArray.length.toString() + ".");
console.log(myString);
console.log(JSONObj.People[0].Name);
console.log(JSONObj.People[0].Age);