var shopinglist=['rice','clothes','milk','apples','orengers']

shopinglist.forEach(element => {
    console.log(element);
});

console.log( shopinglist.push('brush'));

console.log( shopinglist.pop());

console.log( shopinglist.shift());

console.log( shopinglist.unshift('oil'));

// filter

function a(k){
    return k.length<6
}

var shortlist= shopinglist.filter(a)
console.log(shortlist);

// map

function capitalizeWords(arr) {
    return arr.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
  
      return firstLetter + rest;
    });
  }

  console.log(capitalizeWords(shopinglist));

//   reduce

function characterCount(arr) {
    return arr.reduce(function(charCount, item) {
      return charCount + item.length;
    }, 0);
  }

  console.log( characterCount(shopinglist));

//   slice

  var partialList=shopinglist.slice(0,3)

  console.log(partialList);

// splice

console.log(shopinglist.splice(1,2));

// sort

console.log(shopinglist.sort());