var sentence = 'javascript The signal will be converted into digital code.'

console.log(sentence.length);


console.log(sentence.indexOf('e'))

var firstword=sentence.slice(0,-3);

console.log(firstword);

var lastword = sentence.substring(sentence.length-5);
console.log(lastword);

console.log(sentence.includes('javascript'));

console.log(sentence.replace('javascript','python'));

var newword=sentence.split(' ');

console.log(newword);

var newsentence= ['javascript', 'The', 'signal', 'will', 'be', 'converted', 'into', 'digital', 'code.']

function capitalizeWords(arr) {
    return arr.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
  
      return firstLetter + rest;
    });
  }

console.log(capitalizeWords(newsentence).join(" "));

console.log(sentence.indexOf('e'))