var person={
    name :'aman',
age :24,
email :'amanjchauhan',
hobbies : 'chess'

}

console.log(person);

person.location = 'ghaziabad';
console.log(person);

person['email']='aman.chauhan@gmail.com';

console.log(person);

var family={
    mother:{
        name:'abc',
        age:57,

    },
    father:{
        name:'def',
        age:60,
        
    },
    sibling:{
        name:'ghi',
        age:32,
        
    }
}
console.log(family);

// function greet(a) {
//     return "goodmorning"+family[0].name
// }

// console.log(greet(a));

// Shallow copy

console.log("family=> ", family);
var newfamily = family;    
console.log("New family=> ", newfamily);

let person_deepcopy = JSON.parse(JSON.stringify(person));

console.log(person_deepcopy);



function printValues(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            printValues(obj[key]);   
        } else {
            console.log(obj[key]);    
        }
    }
}

printValues(family);
