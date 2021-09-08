char c;
int num;

///////////

int mainModule(void) {
    int num = 46;
    char * str = "String";

    num = "String";

    return 0;
}

//////////

var str = 'Hello';
var num = 1;
var bool = true;

var foo = 'string';
console.log(typeof foo);
foo = 1;
console.log(typeof foo);

///////////

var integer = 10;
var double = 10.12;
var negative = -20;
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

/////////////

console.log(binary);
console.log(octal);
console.log(hex);

console.log(binary===octal);
console.log(octal===hex);

///////////////

console.log(1===1.0);

var result = 4/2;
console.log(result);
result = 3/2;
console.log(result);

///////////////

var pInf = 10/0; // 양의 무한대
console.log(pInf);

var nInf = 10 / -0; //음의 무한대
console.log(nInf);

var nan = 1 * 'string';//연산불가
console.log(nan);

///////////////

var str = "String";
str = 'string';
str = `string`;

str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다."
str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.'

//////////////

var str = 'Hello';
str = 'world';

/////////////

var str = 'string';

for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

str[0] = 'S'; //문자열을 변경 할 수 없다.
console.log(str);

/////////////

var str = 'string';
console.log(str);

str = 'String';
console.log(str);

str += 'test';
console.log(str);

str = str.substring(0,3);
console.log(str);

str = str.toUpperCase();
console.log(str);

/////////////

var foo = true;
var bar = false;

console.log(typeof foo);
console.log(typeof bar);

//////////////

var foo;
console.log(foo);

/////////////

var foo = 'Lee';
foo - null;

/////////////

var element = document.querySelector('.myElem');
console.log(element);

//////////////

var foo = null;
console.log(typeof foo === null);
console.log(foo === null);

/////////////

var key = Symbol('key');
console.log(typeof);

var obj = {};
obj[key] = 'value';
console.log(obj[key]);

/////////////

var score;
score = 80;
score = 90;
score;

var average = (50 + 100) / 2;

////////////

3.141592653589793 * 2 * 2;

//////////////

var circleArea = 3.141592653589793 *2*2;
var cylinderVolume = circleArea *5;

//////////////

var PI = 3.141592653589793;
var radius = 2;
var circleArea = PI * radius * radius;
var cylinderVolume = 5;
var cylinderVolume = circleArea * cylinderHeigth;

/////////////

var name;
naem = 'Lee';

var age = 30;

var person = 'Lee';
    address = 'Seoul';
    price = 200;

var price = 10;
var tax = 1;
var total = price + tax;

/////////////

var x;
console.log(x);
console.log(y);

////////////

var x =1;
console.log(x);

var x = 100;
console.log(x);

////////////

var foo;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = {};
console.log(typeof foo);

foo = 3;
console.log(typeof foo);

foo = 3.14;
console.log(typeof foo);

foo = 'Hi';
console.log(typeof foo);

foo = true;
console.log(typeof foo);

///////////

console.log(foo);
var foo = 123;
console.log(foo);
{
    var foo = 456;
}
console.log(foo);

//////////////