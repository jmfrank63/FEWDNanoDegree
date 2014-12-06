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

function alphabetizer(names) {
    // Your code goes here!
    
    for (i=0; i < names.length; i++) {
        var name = names[i].split(" ");
        names[i] = name[1] + ", " + name[0];
    }
    return names.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));