//programs on call back
//1.
function hello()
    {
        console.log("hello is called");
    }
hello();
function world(callback)
{
    console.log("world is called");
}
world();
world(hello);
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
A(B);

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
Sai(Yaswanth);
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
greet1(greet);
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
good1(good)
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
great2(great1);
