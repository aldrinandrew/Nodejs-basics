var r=require("readline-sync")

var num1 = r.question("Enter the first number ")
var num2 = r.question("Enter the second number ")

if(num1>num2){
    console.log("The Larger number is",num1)
}else if(num1<num2){
    console.log("The Larger number is",num2)
}else if(num1==num2){
    console.log("The entered numbers are equal")
}
