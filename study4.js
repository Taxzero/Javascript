//1. 블록문

//블록문
{
    var foo = 10;
    console.log(foo);

}

//제어문
var x = 0;
while (x < 10) {
    x++;
}

console.log(x); //10

//함수 선언문
function sum(x,y) {
    return x + y;
}
console.log(sum(1,2)); //3


//2. 조건문

if (조건식) {
    //조건식이 참이면 이 코드 블록이 실행된다.
}else {
    //조건식이 거짓이면 이 코드 블록이 실행된다.
}

if (조건식1) {
    // 조건식1이 참이면 이 코드 블록이 실행된다.
  } else if (조건식2) {
    // 조건식2이 참이면 이 코드 블록이 실행된다.
  } else {
    // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
  }

  var num = 2;
  var kind;

  //if 문
  if (num>0) {
      kind = '양수';
  } else {
      kind = '음수'; // 음수를 구별할 수 없다.
  }
  console.log(kind); //양수

  //if....else문
  if ( num > 0 ) {
      kind = '양수';
  }else {
      kind = '음수'; // 0은 음수가 아니다.
  }

  // if…else if 문
if (num > 0) {
    kind = '양수';
  } else if (num < 0) {
    kind = '음수';
  } else {
    kind = '영';
  }
  console.log(kind); // 양수



var num = 2;
var kind;

if (num > 0)      kind = '양수';
else if (num < 0) kind = '음수';
else              kind = '영';

console.log(kind); // 양수


// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
var x =2;
var result

if(x % 2) { // 2 % 2는 0이고 0은 false로 취급된다.
    result = '홀수';
}else {
    result = '짝수';
}

console.log(result); //짝수


// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수


var num = 2;

// 0은 false로 취급된다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind); // 양수


///swich표현식

/*switch (표현식) {
    case 표현식1:
      switch 문의 표현식과 표현식1이 일치하면 실행될 문;
      break;
    case 표현식2:
      switch 문의 표현식과 표현식2가 일치하면 실행될 문;
      break;
    default:
      switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;
  }*/


  // 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = 'January';
  case 2:
    monthName = 'February';
  case 3:
    monthName = 'March';
  case 4:
    monthName = 'April';
  case 5:
    monthName = 'May';
  case 6:
    monthName = 'June';
  case 7:
    monthName = 'July';
  case 8:
    monthName = 'August';
  case 9:
    monthName = 'September';
  case 10:
    monthName = 'October';
  case 11:
    monthName = 'November';
  case 12:
    monthName = 'December';
  default:
    monthName = 'Invalid month';
}

console.log(monthName); // Invalid month


// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = 'January';
    break;
  case 2:
    monthName = 'February';
    break;
  case 3:
    monthName = 'March';
    break;
  case 4:
    monthName = 'April';
    break;
  case 5:
    monthName = 'May';
    break;
  case 6:
    monthName = 'June';
    break;
  case 7:
    monthName = 'July';
    break;
  case 8:
    monthName = 'August';
    break;
  case 9:
    monthName = 'September';
    break;
  case 10:
    monthName = 'October';
    break;
  case 11:
    monthName = 'November';
    break;
  case 12:
    monthName = 'December';
    break;
  default:
    monthName = 'Invalid month';
}

console.log(monthName); // November

var year = 2000; //2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      days =31;
      break;
    case 4: case 6: case 9: case 11:
      days = 30;
      break;
    case 2:

    // 윤년계산 알고리즘
    // 1. 년도가 4로 나누어 떨어지는 해는 윤년(2000, 2004, 2008, 2012, 2016, 2020...)
    // 2. 그 중에서 년도가 100으로 나누어 떨어지는 해는 평년(2000, 2100, 2200...)
    // 3. 그 중에서 년도가 400으로 나누어 떨어지는 해는 윤년(2000, 2400, 2800...)
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('Invalid month');
}

console.log(days); //29

/////3. 반복문
/* 
for (초기화식; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
} 
*/

for (var i = 0; i < 2; i++) {
    console.log(i);
}

  
for (var i = 1; i >= 0; i--) {
 console.log(i);
}

for (;;) { } //무한루프

for(var i = 1; i<=6; i++) {
    for(var j = 1; j <= 6; j++) {
        if ( i + j === 6) console.log(`[${i}, ${j}]`);
    }
}
/*
[1, 5]
[2, 4]
[3, 3]
[4, 2]
[5, 1]
*/

// 3.2 while 문
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while(count < 3) {
    console.log(count);
    count++;
} // 0 1 2

//무한루프
while (true) {} //조건식의 평가 결과가 언제나 참이면 무한루프가 된다.

var count = 0;

// 무한루프
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2

// 3.3 do..while문
var count = 0;

//count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do{
    console.log(count);
    count++;
}while (count < 3); // 0 1 2

// 4. break 문

if (true) {
    break; // Uncaught SyntaxError: Illegal break statement
}

// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

// foo라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}
console.log('Done!');

// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        // i + j === 3이면 외부 for 문을 탈출한다.
        if(i + j ===3 ) break outer;
    }
}

console.log('Done!');

var string = 'Hello World.';
var index;

//문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
    //문자열의 개별 문자가 'l'이면
    if(string[i] === 'l') {
        index = i;
        break; //반복문을 탈출한다.
    }
}

console.log(index); //2

// 참고로 String.prototype.indexof 메소드를 사용해도 같은 동작을 한다.
console.log(string.indexOf('l')); //2


//5.continue문//
var string = 'Hello World.';
var count = 0;

// 문자열은 유사배열이므로 for문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 중감식으로 이동한다.
    if(string[i] !== 'l') continue;
    count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); //3

//참고로 String.prototype.match 메소드를 사용해도 같은 동작을 한다.
console.log(string.match(/l/g).length); //3

//////

for(var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 종료한다.
  if (string[i] === 'l') count++;
}


// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가 시킨다.
  if ( string[i] === 'l'){
    count++;
    // code
    // code
    // code
  }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다.
for(var i = 0; i < string.length; i++) {
  //'l'이 아니면 카운트를 증가시키지 않는다.
  if (string[i]!== 'l') continue;

  count++;
  // code
  // code
  // code
}
