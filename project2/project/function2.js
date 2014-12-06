var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

/**
* alphabetizer takes a list of "firstname name" and returns 
* a copy of "name, firstname" in alphabetical order
*/

function alphabetizer(names) {
    // variable definitions
    var _names = [];
    var _name;
    
    // loop over names split each element and add swaped
    // content with comma and space to new array.
    for (var i = 0; i < names.length; i++) {
        _name = names[i].split(" ");
        _names[i] = _name[1] + ", " + _name[0];
    }
    // return sorted array
    return _names.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));