// to print in js 
console.log("Hello World by aanshi");
// varibales -> is like a container to  store data orr value
// 1.var=>Global scope, reinitiallized
// 2.const=>Local Scope, Not Reintiallized
// 3.let=>Local Scope ,Reinitiallized
firstname= 'aanshi';
console.log(firstname);
// comment only for radibility and understanding 

// datatypes:-
// 1.primitive ->(7) stored in Stack
//   1.a Number
//   1.b String 
//   1.c Boolean
//   1.d BigInt
//   1.e Symbol
//   1.f null
//   1.g undefined
// 2.Nonprimitive  ->store in Heap 
    // 2.a Object
    // 2.b Array
    // 2.c classes


// operators:-(+,-,*,/,%,++,--,>,<,==,====)
// == used as equal to sign 
// === used equal and same data type
// typeof ->used to tell which data type it is 
number=5;
console.log(typeof(number))
console.log(typeof(firstname))

// how do you get input from user?
// prompt is built in js functionality that helps you to get input from a user through browser
// fruit=prompt('What is your favourite fruit?');
// console.log(fruit);

food=prompt('How much food?')
tipper=0.2;
result=tipper*food;
console.log(result);
