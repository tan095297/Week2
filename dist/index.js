//Primitive Type
let id = 5; //imply data type  ----explicit
let myName = "Chalermchai";
let isPublished = true;
let x = "hello";
console.log("id :" + typeof (id) + " " + id);
console.log("myname:" + typeof (myName) + " " + myName);
console.log("isPublished :" + typeof (isPublished) + " " + isPublished);
console.log("x :" + typeof (x) + " " + x);
// String Template ${} ==> EL (Expression Language in java)
//ใช้ quote แบบ backtick````````````
let age = 25;
//collection Types
let ids;
ids = [1, 2, 3, 4, 5];
let arr;
arr = [1, "2", true, 3.5];
//Name Friends
let friendName;
friendName = ["Tan", "Mild", "March", "Toy", "Ploy"];
console.log(`My name is ${myName}. I am ${age} year old`);
console.log(ids);
console.log(friendName);
//ตัวแปรแบบ array 
ids.forEach(i => {
    console.log(`-: ${i}`);
});
console.log("เพื่อน");
friendName.forEach(i => {
    console.log(`-: ${i}`);
});
let salary = [1000, 2000, 5000, 10000]; //10\
let commission = [];
let bonus = [];
salary.forEach((s) => {
    commission.push(s * 0.1);
});
salary.forEach((s) => {
    if (s <= 1000) {
        bonus.push(s * 2);
    }
});
console.log(commission);
console.log(bonus);
//ให้หาโบนัสของแต่ละคนโดย เงินเดือน <1000 โบนัส 2 เท่า
//1001-5000 โบนัส 1.5
//5004-10000 โบนัส 1.2
// 10001 ขึ้นไป โบนัส 1 เท่า
//tiple
let prod1;
prod1 = [1, "Chocolate", "Pack", 100];
// console.log(prod1[0]);
// console.log(prod1[1]);
// console.log(prod1[2]);
// console.log(prod1[3]);
prod1.forEach(p => {
    console.log(p);
});
let products;
products = [
    [1, "Strawberry", "pcs", 20],
    [2, "Banana", "pcs", 25],
    [3, "Orange", "pcs", 10],
    [4, "Kiwi", "pcs", 30],
    [5, "Apple", "pcs", 25]
];
products.forEach(p => {
    p[3] += 5;
    console.log(`${p[0]}.${p[1]} (${p[2]}) : ${p[3]}`);
});
products.push(prod1);
console.log(products);
//ให้update คะแนนรวม แสดงรหัส ชื่อ และ คะแนนรวม
let student;
student = [
    ["1001", "Kongpop", 20, 50, 0],
    ["1002", "Jakrit", 18, 50, 0],
    ["1003", "Chalermchai", 21, 49, 0],
    ["1004", "Chavavrit", 15, 35, 0],
    ["1005", "Thanakorn", 17, 31, 0],
];
student.forEach(s => {
    s[4] += s[3] + s[2];
    console.log(`${s[0]}:${s[1]},Total :${s[4]}`);
});
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.clear();
console.log(Direction1.Left);
console.log(Direction2.Left);
//สร้าง pdf 
// setPaper(size,orientation)
//1:a4 2:a5 3:a6
//1:Portrait 0:Landscape
//
var PaperSize;
(function (PaperSize) {
    PaperSize[PaperSize["A4"] = 1] = "A4";
    PaperSize[PaperSize["A5"] = 2] = "A5";
    PaperSize[PaperSize["A6"] = 3] = "A6";
})(PaperSize || (PaperSize = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Landscape"] = 2] = "Landscape";
})(Orientation || (Orientation = {}));
console.log(PaperSize);
let wasok = {
    id: 1001, name: "Wasok", tel: "0999999"
};
console.log(wasok);
//Union Type
let sid;
sid = 101;
console.clear();
console.log(typeof (sid));
sid = "555";
console.log(typeof (sid));
//function
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 3));
function showlog(m) {
    console.log(m);
}
showlog(123);
showlog("456");
const addNum = (a, b) => { return a + b; };
const subNum = (x, y) => x - y;
console.log(addNumber(5, 7));
console.log(subNum(5, 7));
//สร้าง obj จาก interface Human , implement move(),eat() ด้วย
const student1 = {
    id: 123,
    name: "Chalermchai",
    age: 30,
    move: function () {
        return "Running";
    }
};
//Chalermchai
const boxer = {
    id: 123,
    name: "Buakao",
    age: 50,
    move: function () {
        return "Walking";
    },
    eat: function () {
        return "proteen";
    }
};
const grandMom = {
    id: 9,
    name: "pao",
    age: 50,
    move: function () {
        return "Crawling";
    },
    eat: function () {
        return "proteen";
    }
};
console.log(student1.move());
console.log(grandMom.move());
//class
class Driver {
    //arg-constructor
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        return `${this.name} moves by driving.`;
    }
    eat() {
        return `${this.name} eat rice.`;
    }
}
console.clear();
const d1 = new Driver(101, "Anurak", 20);
console.log(d1.move());
console.log(d1.eat());
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
function getArray(items) {
    return new Array().concat(items);
}
let n1 = [1, 2, 3, 4];
let n2 = ["A", "B", "C", "D"];
console.log(getArray([n1, n2]));
