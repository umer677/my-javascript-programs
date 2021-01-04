let numbers = max(8,5);
console.log(numbers);
function max(a,b) {
    if(a > b) return a;
    return b;
    return (a > b) ? a:b;
    
}



let values = isLandscap(40,20);
console.log(values);
console.log(isLandscap(300,400))
function isLandscap(width,height) {
    return(width > height) ? 'this is landscap':'not landscap';
   return(width > height)
}

excersize
const num =fizzBuzz(15);
console.log(num);
function fizzBuzz(input) {
    if(typeof input !== 'number') return'unkown value';
    if((input % 3 === 0) && (input % 5 === 0)) return'fizzbuzz';
    if(input % 3 === 0) return 'fizz';
    if(input % 5 === 0) return 'buzz';
    
    return input;

    
}