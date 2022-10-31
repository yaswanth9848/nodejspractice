//programs on call back
//1.
function hello()
    {
        console.log("hello is called");
    }
hello();
function world(hello)
{
    console.log("world is called");
}
world();
world(hello());
//2.
function A()
    {
        console.log("A is called");
    }
A();
function B(callback)
{
    console.log("B is called");
}
B();
A(B());

//3.

function Yaswanth()
    {
        console.log("Yaswanth is called");
    }
Yaswanth();
function Sai(callback)
{
    console.log("Sai is called");
}
Sai();
Sai(Yaswanth());
function greet()
{
    for(i=0;i<=10;i++)
    {
        console.log(i)
    }
}
greet()
function greet1()
{
    i =20;
    while(i>0)
    {
        console.log(i)
        i--;
    }
}
greet1();
greet1(greet());
//4.
function good()
{
    a = 10;
    b = 20;
    if(a!==b)
    {
        console.log("a and b are not equal");
    }
    else
    {
        console.log("a and b are equal");
    }
}
good()
function good1()
{
    a = 10;
    b = 20;
    if(a>b)
    {
        console.log("a is big");
    }
    else
    {
        console.log("b is big");
    }
}
good1();
good1(good())
//5.

function great1()
{
    i =10;
        do
    {
        console.log(i)
        i--;
    }
    while(i>1)
    {
        console.log(i);

    }
}
great1()
function great2()
{
    i =0;
    while(i<20)
    {
        console.log(i)
        i++;
    }
}
great2()
great2(great1());

//6.
function ctrl()
{
    console.log("hello");
}
function ctrl1()
{
    console.log("Good Morning");
}
ctrl()
ctrl1(ctrl())
//7 
function add(a,b)
{
res = a+b;
console.log(res);
}
function sub(a,b)
{
    res1 = a - b;
    console.log(res1);
}
add(10,20);
sub(10,20);
//8
function mul(a,b)
{
    res2 = a*b;
    console.log(res2);
}
function div(a,b)
{
    res3 = a/b;
    console.log(res3)
}
mul(10,20);
div(10,2);
//9
function name1(m)
{
    console.log("person name is" + " "+ m)
}
function age(n)
{
    console.log("person age is "+" "+n)
}
name1("sai")
age(20)
//10
function str(f)
{
    console.log("The original string is " +" "+ f)
 strSplit = f.split('');
 console.log("The splitted  string is " +" "+ strSplit)
 strRev = strSplit.reverse();
 console.log("The Reversed string is "+ " " +strRev)
 strJoin = strRev.join('');
 console.log("The joined string is " +" "+ strJoin)
}
str("ramu");