//Primitive Type
let id : number =5; //imply data type  ----explicit
let myName :String= "Chalermchai" ;
let isPublished : boolean = true;
let x : any = "hello" ;


console.log("id :"+typeof(id)+" "+id)
console.log("myname:"+typeof(myName)+" "+myName)
console.log("isPublished :"+typeof(isPublished)+" "+isPublished)
console.log("x :"+typeof(x)+" "+x)


// String Template ${} ==> EL (Expression Language in java)
//ใช้ quote แบบ backtick````````````
let age: number = 25 


//collection Types
let ids : number[] ;
ids =[1,2,3,4,5] ;

let arr : any[];
arr = [1,"2",true,3.5]

//Name Friends
let friendName : String[];
friendName = ["Tan","Mild","March","Toy","Ploy"]

console.log(`My name is ${myName}. I am ${age} year old`)
console.log(ids)
console.log(friendName)

//ตัวแปรแบบ array 

ids.forEach(i => {
    console.log(`-: ${i}`)
});

console.log("เพื่อน")
friendName.forEach(i => {
    console.log(`-: ${i}`)
});








let salary : number[] = [1000,2000,5000,10000]; //10\
let commission : number[]=[] ;
let bonus : number[] = [];
salary.forEach((s)=>{
    commission.push(s*0.1)
})
salary.forEach((s)=>{
     if(s<=1000){
         bonus.push(s*2);
     }
})

console.log(commission);
console.log(bonus);
//ให้หาโบนัสของแต่ละคนโดย เงินเดือน <1000 โบนัส 2 เท่า
//1001-5000 โบนัส 1.5
//5004-10000 โบนัส 1.2
// 10001 ขึ้นไป โบนัส 1 เท่า

//tiple
let prod1: [number,String,string,number];
prod1 = [1,"Chocolate","Pack",100];

// console.log(prod1[0]);
// console.log(prod1[1]);
// console.log(prod1[2]);
// console.log(prod1[3]);

prod1.forEach(p=>{
    console.log(p);
})

let products : [number, String,String,number][];
products = [
    [1,"Strawberry","pcs",20],
    [2,"Banana","pcs",25],
    [3,"Orange","pcs",10],
    [4,"Kiwi","pcs",30],
    [5,"Apple","pcs",25]
]
products.forEach(p=>{
    p[3] += 5 ;
    console.log(`${p[0]}.${p[1]} (${p[2]}) : ${p[3]}`);
})

products.push(prod1);
console.log(products);


//ให้update คะแนนรวม แสดงรหัส ชื่อ และ คะแนนรวม
let student : [String,String,number,number,number][];
student = [
    ["1001","Kongpop",20,50,0],
    ["1002","Jakrit",18,50,0],
    ["1003","Chalermchai",21,49,0],
    ["1004","Chavavrit",15,35,0],
    ["1005","Thanakorn",17,31,0],
]
student.forEach(s=>{

    s[4] += s[3]+s[2] ;
    console.log(`${s[0]}:${s[1]},Total :${s[4]}`);
})

enum Direction1{
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2{
    Up = "Up",
    Down ="Down",
    Left = "Left",
    Right = "Right"
}
console.clear()
console.log(Direction1.Left)
console.log(Direction2.Left)

//สร้าง pdf 
// setPaper(size,orientation)
//1:a4 2:a5 3:a6
//1:Portrait 0:Landscape
//
enum PaperSize{
    A4 = 1,
    A5 = 2,
    A6 = 3
}
enum Orientation{
    Portrait = 1,
    Landscape = 2
}

console.log(PaperSize);

//Defined Type
type Student ={
    id : number,
    name : String,
    tel : String,
    line_id?: String //Optional -- nullable
}
let wasok : Student = {
    id:1001,name:"Wasok",tel:"0999999"
}
console.log(wasok)

//Union Type
let sid : number | string 
sid = 101 ;
console.clear()
console.log(typeof(sid));

sid = "555" ;
console.log(typeof(sid));


//function
function addNumber(x:number,y:number):number{
    return x + y ;
}
console.log(addNumber(1,3));

function showlog(m : number|string): void {
    console.log(m);
}
showlog(123);
showlog("456");

//Interface Function
//โครงเปล่า ๆ ของฟังก์ชั่น ที่ยังไม่ได้กำหนดการทำงาน

interface MathFunc{
    (x:number,y:number):number
}
const addNum : MathFunc = (a:number,b:number):number=>{return a+b};
const subNum : MathFunc = (x:number,y:number):number=>x-y;

console.log(addNumber(5,7));
console.log(subNum(5,7));

//Interface classes
interface Human{
    id :number,
    name : string,
    age : number,
    tel? : string ,
    //func as a property
    move(): string,
    eat?():string
}

//สร้าง obj จาก interface Human , implement move(),eat() ด้วย
const student1 :Human = {
    id : 123,
    name : "Chalermchai",
    age : 30,
    move:function():string{
        return "Running"
    }
}

//Chalermchai
const boxer : Human = {
    id : 123, 
    name : "Buakao",
    age : 50,
    move:function():string{
        return "Walking"
    } ,
    eat:function():string{
        return "proteen"
    }
}


const grandMom : Human={
    id : 9,
    name : "pao",
    age : 50,
    move:function():string{
        return "Crawling"
    },
    eat:function():string{
        return "proteen"
    }
}

console.log(student1.move())
console.log(grandMom.move())

//class
class Driver implements Human{
    id:number;
    name:string;
    age:number;

    //arg-constructor
    constructor(id:number,name:string,age:number){
        this.id = id 
        this.name = name
        this.age =age

    }
    move(){
        return `${this.name} moves by driving.`;
    }
    eat(){
        return `${this.name} eat rice.`;
    }

}
console.clear()
const d1 = new Driver(101,"Anurak",20);
console.log(d1.move())
console.log(d1.eat())


//Homework2 : due Nov 19 ,2021
//Q1 ให้สร้าง Tuple ของนักเรียน [id,name,mid,final,project,grade]
                //          [1,'chalermchai',20,25,30,""]
                //output    :<mid+final+project>,Grade:<grade>
                //grade 4,3.5------
                //Filename : Chalermchai_Q1.ts


//Q2
//การบ้าน implement 1 อาชีพ จาก Human
//แสดงการ implement move(),eat()
//แสดงการสร้าง Object
//FileName:Anurak_Q2.ts


//generic is  <----> type อะไรก้อได้//ยังไม่ทราบ type ตอนสร้างฟังชั่น
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items);
}
let n1= [1,2,3,4]
let n2 = ["A","B","C","D"]

console.log(getArray([n1,n2]))