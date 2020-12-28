/*Operator Symbol Function
- Addition + Adds two values
- Subtraction − Subtracts one value from another
- Multiplication ∗ Multiplies two values
- Division / Divides one value by another
- Modulus % Divides one value by another and returns the remainder
- Increment + + Shortcut to add 1 to a single number
- Decrement − − Shortcut to subtract 1 from a single number
- Unary Plus (+... or -...) Leaves numeric values as-is, but will attempt to change nonnumeric values into numbers
- Unary Negation − Makes a positive negative or a negative positive*/

//Note: If one of the operands is NaN, the result will be NaN.

/*let n1 = 3;
let n2 = 6;
let theSum = n1 + n2;
console.log(theSum);

let n3 = 2
let theResult = ++n3;
console.log(theResult);

let n4 = 2
let theResult2 = n4++;
console.log(theResult2);
console.log(n4);*/

/*let n1 = 4;
let n2 = "7";
theSum = n1 + n2;
console.log(theSum);

theSum2 = n1 + (+n2);
console.log(theSum2);

let theResult = 5 + (-3);
console.log(theResult);*/


/*Operator Symbol Function
- Assignment = Assigns the value on the right side of the operator to a variable
- Add and assign += Adds the value on the right side of the operator to the variable on the left side, and then assigns the new value to the variable
- Subtract and assign –= Subtracts the value on the right side of the operator from the variable on the left side, and then assigns the new value to the variable
- Multiply and assign *= Multiplies the value on the right side of the operator by the variable on the left side, and then assigns the new value to the variable
- Divide and assign /= Divides the variable on the left side of the operator by the value on the right side, and then assigns the new value to the variable
- Modulus and assign %= Takes the integer remainder of dividing the variable on the left side by the value*/

/*let myMoney = 1000;
myMoney = myMoney + 1;
console.log(myMoney);*/

/*let myMoney = 1000;
myMoney += 1;
console.log(myMoney);
myMoney += 99;
console.log(myMoney);

let salary = 2000;
let bonus = 300;
console.log(salary += bonus);

let name = "Bob";
name += "by";
console.log(name);

let salary2 = 2000;
let fixedBills = 900;
console.log(salary2 -= fixedBills);

let myMoney2 = 2000;
let multBy = 100;
console.log(myMoney2 *= multBy);
myMoney2 *= 100;
console.log(myMoney2);

let myMoney3 = 2000000000;
let multBy3 = 2;
console.log(myMoney3 /= multBy3);
myMoney3 /= 2;
console.log(myMoney3);

let myMoney4 = 2000;
let multBy4 = 100;
console.log(myMoney4 %= multBy4);
myMoney4 %= 100;
console.log(myMoney4);*/

/*let payCheck = 2000;
console.log(payCheck);
payCheck += 2000;
console.log(payCheck);
payCheck -= 500;
console.log(payCheck);
payCheck *= 0;
console.log(payCheck);
payCheck += 500;
console.log(payCheck);
payCheck -= 80;
console.log(payCheck);*/


/*Operator Symbol Function
- Is equal to == Returns true if the values on both sides of the operator
are equal to each other
- Is not equal to != Returns true if the values on both sides of the operator are not equal to each other
- Strict is equal to === Returns true if the values on both sides are equal and of the same type
- Strict is not equal to !== Returns true if the values on both sides are not equal or not of the same type
- Is greater than > Returns true if the value on the left side of the operator is greater than the value on the right side
- Is less than < Returns true if the value on the left side of the operator
is less than the value on the right side
- Is greater than or equal to >= Returns true if the value on the left side of the operator is greater than or equal to the value on the right side
- Is less than or equal to <= Returns true if the value on the left side of the operator is less than or equal to the value on the right side*/

let isTrue = 4 == 4;
console.log(isTrue);

let isTrue2 = "4" == 4;
console.log(isTrue2);

let isTrue3 = "4" === 4;
console.log(isTrue3);

/*
The Is-Equal-To Operator (==)
Comparison Return Value Reason
- 4 == 4 true Two equal numbers
- (4+2) == (3+3) true Result on both sides is 6, and 6 is equal to 6
- “my socks” == “my socks” true Both strings are exactly the same
- 1 == true true The Boolean value of true is converted to 1
- 4 == 5 false 4 and 5 are not equal numbers
- (4+3) == (2+2) false Result on left is 7, result on right is 4, and these are not equal
- “My socks” == “my socks” false Strings are not exactly alike (capitalization)
- 1 == false false The Boolean value of false is converted to 0
*/

/* 
The Is-Not-Equal-To Operator (!=)
Comparison Return Value Reason
- 4 != 3 true 4 and 3 are not equal numbers
- “CooL” != “cool” true Strings do not have the same
- 4 != 4 false 4 is equal to 4
- “cool” != “cool” false Strings are exactly alike, so they are equal
*/

/*
The Strict Is-Equal-To Operator (===)
Comparison Return Value Reason
- 4 === 4 true Two equal numbers
- (4+2) === (3+3) true Result on both sides is 6, and both
values are numbers
- “my socks” === “my socks” true Both values are strings, and are exactly
the same
- 7 === “7” false The number and string are different types
- “My socks” === “my socks” false Strings are not exactly alike (capitalization)
- “2” === (1+1) false The values are of different types
*/

/*
The Strict Is-Not-Equal-To Operator (!==)
Comparison Return Value Reason
- 4 !== 3 true 4 and 3 are not equal numbers
- “4” !== 4 true Values on each side are of different types
- 4 !== 4 false 4 is equal to 4
- “cool” !== “cool” false Strings are exactly alike, so they are equal
*/

/*
The Is-Greater-Than Operator (>)
Comparison Return Value Reason
- 5 > 2 true 5 is greater than 2
- true > 0 true Boolean value true is converted to 1
- “a” > “A” true Character code for “a” is 97, and character code for “A” is 65
- “A” > “1” true Character code for “A” is 65, and character code for “1” is 49
- “10” < “2” true Character code for “1” is 49, and character code for “2” is 50
- 5 > 7 false 5 is less than 7, not greater
- false > 0 false Boolean value of false is converted to 0
- 2 > 2 false These are equal, so the value on the left is not greater
*/

/*
The Is-Less-Than Operator (<)
Comparison Return Value Reason
- 2 < 10 true 2 is less than 10
- “A” < “a” true Character code for “A” is 65, and character code for “a” is 97
- 10 < 2 false 10 is greater than 2, not less
- “a” < “A” false Character code for “a” is 97, and character code for “A” is 65
- 10 < 10 false These are equal, so the value on the left is not less
*/

/*
The Is-Greater-Than-or-Equal-To Operator (>=)
Comparison Return Value Reason
- 5 >= 2 true 5 is greater than 2
- 2 >= 2 true 2 is equal to 2
- “a” >= “A” true Character code for “a” is 97, and character code for “A” is 65
- “A” >= “A” true The character codes are both 65
- 1 >= 2 false 1 is less than 2
- “A” >= “a” false Character code for “A” is 65, and character code for “a” is 97
*/

/*
The Is-Less-Than-or-Equal-To Operator (<=)
Comparison Return Value Reason
- 2 <= 5 true 2 is less than 5
- 2 <= 2 true 2 is equal to 2
- “A” <= “a” true Uppercase letters are less than lowercase letters
- “A” <= “A” true The strings are equal
- 5 <= 2 false 5 is greater than 2, not less than or equal to
- “a” <= “A” false Lowercase letters are greater than uppercase letters, not less than or equal to
*/

/*
THE LOGICAL OPERATORS
Operator Symbol Function
- AND && Returns true if the statements on both sides of the operator are true
- OR || Returns true if a statement on either side of the operator is true
- NOT ! Returns true if the statement to the right side of the operator is not true
*/

/*
The AND Operator (&&) - The logical operator AND returns true if the comparisons on both sides of the && operator are true. If one or both comparisons on either side of the operator are false, a value of false is
returned. Some statements that use the AND operator are shown in the following table.
Statement Return Value Reason
- (1==1) && (2==2) true Comparisons on both sides are true: 1 is equal
to 1, and 2 is equal to 2
- (2>1) && (3<=4) true Comparisons on both sides are true: 2 is
greater than 1, and 3 is less than 4
- (“A”<=“A”) && (“c”!=“d”) true Comparisons on both sides are true: “A” is equal to “A”, and “c” is not equal to “d”
- (1==1) && (2==3) false Comparison on the right is false
- (“a”!=“a”) && (“b”!=“q”) false Comparison on the left is false
- (2>7) && (5>=20) false Comparisons on both sides are false
*/

/*
The OR Operator (||) - To return false, the comparisons on both sides of the operator must return false. The following table shows some examples of comparisons using the OR operator.
Statement Return Value Reason
- (2==2) || (3>5) true Comparison on the left is true
- (5>17 ) || (4!=9) true Comparison on the right is true
- (3==3) || (7<9) true Both comparisons are true
- (4<3) || (2==1) false Both comparisons are false
- (3!=3) || (4>=8) false Both comparisons are false
*/

/*
The NOT Operator (!) - The logical operator NOT can be used on a single comparison to say, “If this is not the case, then return true.” Basically, it can make an expression that would normally return false return true, or make an expression that would normally return true return false. The following table shows some examples of this operator at work.
Comparison Return Value Reason
- !(3 == 3) false 3 is equal to 3 is true, but the NOT
operator makes this statement false
- !(2 > 5) true 2 is greater than 5 is false; the NOT
*/

/*
The Bitwise Operators - Bitwise operators are logical operators that work at the bit level, where there is a bunch of ones and zeros. You will not be using them in the examples presented in this book, but you may see them in some scripts on the Web. The following table lists some of the bitwise operators and their symbols, which should help you spot a bitwise operator if you see one.
Operator Symbol
- AND &
- XOR ^
- OR |
- NOT ~
- Left Shift <<
- Signed Right Shift >>
- Unsigned Right Shift >>>
*/

/*
Special Operators - There are a number of special operators in JavaScript that are used to perform specific tasks, or to aid in shortening code. Table 5-5 lists the special operators and their purposes.
Don’t be discouraged if many of the terms used in this table look unfamiliar. Objects, arrays, and other unfamiliar terms are discussed in later chapters. Many of these operators will be reintroduced at the appropriate point in the later chapters, where their purpose can be
expressed more clearly.
Operator Symbol Purpose
- Conditional ?: Often used as a short if/else type of statement. A condition is placed
before the question mark (?) and a value is placed on each side of
the colon (:).
- Comma , Evaluates the statements on both sides of the operator, and returns
the value of the second statement.
- Delete Delete Used to delete an object, a property, or an element in an array.
- In In Returns true if a property is in a specified object.
- Instanceof instanceof Returns true if an object is of a specified object type.
- New New Creates an instance of an object.
- This This Refers to the current object.
- Typeof Typeof Returns a string that tells you the type of the value being evaluated.
- Void Void Allows an expression to be evaluated without returning a value.
*/

/*let result = (8 + 7) - (4 * 3) + (8 - 2);
document.write(result);*/

/*
Type of Operator Example of Operators
- Parentheses (overrides others) ( )
- Unary (mathematical, logical, or bitwise) – ++ – – ! ~ typeof void delete
- Multiplication, division, modulus * / %
- Addition, subtraction + –
- Shifts (bitwise) >>> >> <<
- Relational comparison > >= < <= in instanceof
- Equality comparison == != === !==
- AND (bitwise) &
- XOR (bitwise) ^
- OR (bitwise) |
- AND (logical) &&
- OR (logical) ||
- Conditional ?:
- Assignment = += –= *= /= %= <<= >>= >>>= &= ^= |=
- Comma
*/

let num1 = 2;
let num2 = 2;
let num3 = '2';
if (num1 == num2 && num2 === num3) {
   document.write("True");
} else {
   document.write("False");
}

let a = !(17 >= 20); //opposite value
console.log(a);

let b = (1 == 1) && (2 < 0);
console.log(b);

let c = (4 >= 4) && (5 <= 2);
console.log(c);