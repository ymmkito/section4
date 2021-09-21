// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数上書き";
// console.log(val1);

// var val1 = "var変数再宣言";
// console.log(val1);

// var val1 = "var変数";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数上書き";
// console.log(val2);

// var val2 = "let変数再宣言";
// console.log(val2);

console.clear();

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数上書き";
// console.log(val3);

// var val3 = "const変数再宣言";
// console.log(val3);

//constで定義したオブジェクトのプロパティは変更可
// const val4 = {
//   name: "aaa",
//   age: 20
// };
// console.log(val4);
// val4.name = "bbb";
// console.log(val4);
// val4.addree = "Kyoto";

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// val5.push("fish");

// const name = "aaa";
// const age = 28;

// const message = "私のの名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);
// const message2 = `私は名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const sayHello = (name = "guest") => console.log(`こんにちは${name}さん`);
// sayHello("bbb");
// sayHello();

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1, num2, arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);
