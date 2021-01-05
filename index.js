let numbertobeprint = max(8,5);
console.log(numbertobeprint);
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


const num =fizzBuzz(15);
console.log(num);
function fizzBuzz(input) {
    if(typeof input !== 'number') return'unkown value';
    if((input % 3 === 0) && (input % 5 === 0)) return'fizzbuzz';
    if(input % 3 === 0) return 'fizz';
    if(input % 5 === 0) return 'buzz';
    
    return input;
// here is 
    
}


const value = checkspeed(190);

function checkspeed(speed) {
    const speedlimit = 70;
    const kmperpoint = 5;
    if(speed < 70)
    console.log('ok');
    else{
        const point = Math.floor((speed - speedlimit) / kmperpoint);
        if(point >= 12)
        console.log('licensed suspended');
        else
        console.log('points',point)
    }
    
}
findNumbers(20);
function findNumbers(limit) {
    for(let i = 0; i<= limit; i++){
        if (i % 2 === 0) console.log(i,'Even Number');
        else console.log(i,'odd Numbers');
        //const message = (i % 2 === 0) ? 'EVEN': 'ODD'
        //console.log(i,message);

    }
    
}

console.log(sumofMultiples(110));
function sumofMultiples(values) {
    let sum = 0;

    for(let i = 0; i<= values; i++)
    if (i % 3 === 0 || i % 5 === 0)
    sum += i;
    return sum;
    
}


const marks = [10,20,30];
console.log(grad(marks));
function grad(marks) {
let sum =0;
for(let mark of marks)
sum += mark;
let average = sum / marks.length;
if(average < 50) return 'F';
if(average < 60) return 'D';
if(average < 70) return 'C';
if(average <80) return 'B';
if(average < 90) return 'A';
return 'A+';


    
}
stars(5);
function stars(show){
    for(let row = 1; row <= show; row++){
        let pattern ='';
        for (let i=0;i< row;i++)
        pattern += '*';
      console.log(pattern);
    }
}

console.log(arrayRange(10,20));

function arrayRange(min,max) {

    const output =[];
    for(let i = min; i<= max; i++)
    output.push(i);
    return output;
    
}
