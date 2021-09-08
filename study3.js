// 리터럴 표현식
10

//식별자 표현식
sum

// 연산자 표현식
10+20

//함수/메소드 호출 표현식
square()

//연산자 표현식
var x = 10;
x + 30; // 식별자 표현식과 숫자 리터럴과 연산자의 조합

////문과표현식/////

//변수 선언문
var x;

//할당문
x = 5;

// 함수 선언문
function foo () {}

//조건문
if (x>5) {...}

//반복문
for(var i = 0; i < 10; i++){...}

//선언문(Declaration statement)
var x =5 * 10;

//할당문(Assingment statement)
x = 100; 

var foo = var x = 5 * 10;

var foo = x = 100;

/////연산자란?/////

// 산술 연산자
5*4 //20

//문자열 연결 연산자
'My name is' + 'Lee'

//할당 연산자
var color = 'red';

//비교 연산자
3 > 5 // false

//논리 연산자
(5 > 3) && (2 < 4) //true

// 타입 연산자
typeof 'HI' // 'string'


//산술연산자
5 + 2  // 7
5 - 2  // 3
5 * 2  // 10
5 / 2  // 2.5
5 % 2  // 1

//단한 산술 연산자
var x =5, result;

//선대입 후 증가(Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

//선대입 후대입 (prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

//선대입 후감소 (Postfix decrement operator)
result = x==;
console.log(result, x) // 7 6

//선감소 후 대입 (Prefix decrement operator)
result = --x;
console.log(result,x); // 5 5

+10 // 10
+'10' // 10
+true //1
+false //0

-10 // -10
-'10'//-10
-true //-1
-false // -0

//문자열 연결연산자
'1' + '2' // '12'
'1' + 2 // '12'


//산술 연산자
1 + 2 //3
1 + true //2 (true-> 1)
1 + false // 1 (false->0)
true + false //1
1 + null // 1 (null->0)
1 + undefinded // nan (nudefined->nan)

//할당연산자
var x;

x=10; //10
x+=5; //15
x-=5; // 10
x*=5; //50
x/=5; //10
x%=5; //0

var str = 'My name is';
str += 'Lee'; // My name is Lee

var x;
console.log(x =10); //10

var x, y;
y = x =10 //연쇄 할당(Chained assignment)
console.log(x,y); // 10 10

// 동등비교
5 == 5 //true

//타입은 다르지만 암묵적 타입 변화를 통해 타입을 일치시키면 같은 값을 가진다.
5 =='5' //true
5==8 //false

'' == '0' //false
0 == '' //true
0 == '0' //true

false == 'false' //false
false == '0' // true

false == undefined //false
false == null //false
null == undefined //true

//일치비교
5 === 5 //true
5 === '5' //false

NaN === NaN //false

isNaN(NaN) //true

0 === -0 //true

// 부동등 비교
5 != 8    // true
5 != 5    // false
5 != '5'  // false

// 불일치 비교
5 !== 8   // true
5 !== 5   // false
5 !== '5' // true

// 대소 관계 비교
5 > 0    // true
5 > 5    // false
5 > 8    // false

5 < 0    // false
5 < 5    // false
5 < 8    // true

5 >= 0   // true
5 >= 5   // true
5 >= 8   // false

5 <= 0   // false
5 <= 5   // true
5 <= 8   // true


///삼항조건 연산자
// 조건식 ? 조건식이 true일때 반환할 값: 조건식이 false일때 반환할 값

var x =2;

// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 2 %% 2는 0이고 0은 false로 암묵적 타입 변환된다.

var result = x % 2 ? '홀수':'짝수';
console.log(result); // 짝수

var x = 2, result

//x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환한다.

if(x % 2) result = '홀수';
else       result = '짝수';

console.log(result); //짝수

// 논리연산자.//

//논리합(||)연산자
true || true //true
true || false //true
false || true //true
false || false //false

//논리곱(&&)연산자
true && true   // true
true && false  // false
false && true  // false
false && false // false

// 논리 부정(!) 연산자
!true  // false
!false // true

//암묵적 타입 변환
!0 // true

// 단축평가
'Cat' && 'Dog' //"Dog"

//쉼표연산자
var x,y,z;
x=1, y=2, z=3; // 3

//그룹연산자
10*2+3// 23
10 * (2 +3) // 50

//typrof 연산자
typeof ''              // "string"
typeof 1               // "number"
typeof NaN             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof null            // "object"
typeof []              // "object"
typeof {}              // "object"
typeof new Date()      // "object"
typeof /test/gi        // "object"
typeof function () {}  // "function"

typeof null // "Object"

var foo = null;
console.log(typeod foo === null); // false
console.log(foo === null); //true

typeof undeclared //"undefined"


