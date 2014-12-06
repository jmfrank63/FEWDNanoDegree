/**
* checkInvaildNumbers checks if any of the given
* numbers are invalid and returns a message (truthy)
* if so or an empty string (falsy) if valid.
*/
function checkInvalidNumbers(x, y) {
    // define start of message
    var message = "Can't compare relationships because ";
    
    // check first number if valid
    if (isNaN(x)) {
        // first is not so check second
        if (isNaN(y)) {
            message += x + " and " + y + " are not numbers";
        }
        // only first is invalid
        else {
            message += x + " is not a number";
        }
    }
    // first is valid so check second
    else if (isNaN(y)) {
        message += y + " is not a number";
    }
    // both are valid
    else {
        message = '';
    }
    return message;
}

/*
* compareNumbers compares two numbers on a mathematical
* bases. The correctness of the input variables is assumed
* no checks are being done.
*/

function compareNumbers(x, y) {
    // constant definitions
    EQUAL = '=';
    GREATER = '>';
    LESS = '<';
    
    // check for equality
    if (x === y) {
            return EQUAL;
        }
        // not equal check for greater
        else if (x > y) {
            return GREATER;
        }
        // only less is left
        else {
            return LESS;
        }
}

/**
* getRelationship is a function comparing two input values
* as numbers. If any of the input values aren't numbers
* a message is returned otherwise a string with the corresponding 
* mathematical operator representing the relationship is returned.
*/

function getRelationship(x, y) {
    // variable definitions and check for validity
    var message = checkInvalidNumbers(x, y);
    
    // empty message means numbers are valid
    if (!message) {
        return compareNumbers(x, y);
    }
    return message;
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this","something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
console.log(getRelationship(4,1)); // added by student
console.log(getRelationship(4,4.0)); // added by student
console.log(getRelationship(2.5,2.5)); // added by student