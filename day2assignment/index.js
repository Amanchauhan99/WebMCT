var num=10

// multiply
function multiplybytwo(a){
    var mul=a*2
    return mul
}

console.log(multiplybytwo(num));

// divide
function dividebytwo(a){
    var div=a/2
    return div
}

console.log(dividebytwo(num));

// prime number

function primenumber(a){
    
    for(let i=1;i<=a;i++){
        let p=0;
        for(let j=2;j<i;j++){
        if(i%j==0){
             p=p+1
             break;
            }
            
        }
        if(p==0){
            console.log(i);
        }
    }
}
primenumber(97)