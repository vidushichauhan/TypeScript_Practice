
let age: number =10;
console.log("age right before",age);
if(age<20){
    age+=20;
}
console.log("age right now",age);

let sales: number =123_456_789;
let course: string ='TypeScript';
let is_published = true; 

let level;

function render(document : any){
    console.log(document)
}

let numbers: number[] = [1,2,3];
numbers[0] =5;
numbers.forEach(n => n.toString)


let user: [number, string] =[1,'Mosh']
user.push(1);

enum Size {Small=1 ,Medium,Large};
let mySize : number = Size.Large;



