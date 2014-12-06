function getRelationship(x, y) {
    // Your code goes here!
    // "Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
    var message;
    
    if (isNaN(x) || isNaN(y)) {
        if (isNaN(x) &&  isNaN(y)) {
                message = "Can't compare relationships because " + x + " and " + y + " are not numbers";
            }
        else if (isNaN(x)) {
            message = "Can't compare relationships because " + x + " is not a number";
        }
        else {
            message = "Can't compare relationships because " + y + " is not a number";
        }
    }
    else if (x == y) {
            message = "=";
        }
    else if (x < y) {
        message = "<";
    }
    else {
        message = ">";
    }
    return message;
};

// Try logging these functions to test your code!
console.log(getRelationship(4,1));
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship(2.5,2.5));
console.log(getRelationship("that",2));
console.log(getRelationship("this","something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));