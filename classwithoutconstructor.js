// Programs on class without constructor
//1. hello world
class hello
{
    firstName = "Hello";
    lastName = "World";
    helloworld()
    {
    return`${this.firstName} ${this.lastName}`
    }
}
const res1 = new hello("Hello","world");
console.log(res1.helloworld());


//2.Printing Diwali wishes

class Diwali
{
DiwaliMethod()
{
    return `Happy Diwali To All`
}
}
const res2 = new Diwali()
console.log(res2.DiwaliMethod());

//3.Addition of two numbers
class greet1
{
    a = 10;
    b = 20;
  addMethod()
  {
    return `Addition of two numbers is ${this.a +this.b}`
  }
}
 const addition = new greet1()
 console.log(addition.addMethod());

//4.    using Array
class greet2
{
    a = [10,20,30];
    b = 40;

arrayMethod()
{
    return`The array is ${this.a}`
}
}
const res4 = new greet2()
console.log(res4.arrayMethod());


//5.using  string
class str
{
    a = "ram";
    strMethod()
    {
        return `The string is ${this.a} `
    }
}
const res6 = new str()
console.log(res6.strMethod());
