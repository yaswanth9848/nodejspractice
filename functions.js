/*
syntax
function function name(paramaters)
{
    statements
}
call*/
//1. program on addition using functions
function add(a,b)
{
    a = 10;
    b = 60;
    result = a+b;
    console.log(result);

}

add();
add();

//2. subtraction
function sub(a,b)
{
    a = 10;
    b = 5 ;
    result = a-b;
    console.log(result);
}
sub();

//3. multiplication

function mul(a,b)
{
    a = 10;
    b = 5 ;
    result = a*b;
    console.log(result);
}
mul();

//4.Divison
 function div(a,b)
 {
    a = 10; 
    b =5;
    result = a /b;
    console.log(result);
 }
 div();

 //5. for loop using functions
 function greet()
 {
    let a = [1,2,3,4,5]
     for(i=0;i<=5;i++)    // printing 1 to 5        
     console.log(i);
 }
 greet();
// 5b. increasing array value with 2 using for loop 
 function greet1()
 {
   let  arr =[1,2,3,4,5];
   let a =0;
   for(i=0;i<=5;i++)
   {
   console.log(arr[a]);   // adding array value with 2 using for
   arr[a]=arr[a]+2;
   }
   console.log(arr[a]);
 }
 greet1();

 //6. function using while
 function abc()
 {
  let  a=0;
    arr =[10,20,30,40,50];
    while(a<5)
    {
        
        console.log(arr[a]);   // decreasing array value with 2 using while
        arr[a]=arr[a]-2;
        a++;
    }
    console.log(arr);
 }
 abc();

// 7. function using do while
function Abc()
{
    let a =0;
    do
    {
        console.log(a);
        a++;
    }
    while(a<100)           // printing 1 to 100 numbers using while
    {
        console.log(a);

    }
}
Abc();

// 7b. function using while
function ABC()
{
   let a =100;
    do
    {
        console.log(a);   // printing 100 to 1 using while
        a--;
    }
    while(a>1)
    {
        console.log(a);
    }
}
ABC();

//8. function using if  statement 
 function xyz()
 {
    let a = "Hyderabad";
    let b = "Banglore";
    if(a ==b)
    {
        console.log("a and b are same ");
    }
    else 
    {
        console.log("a and b are not same");
    }

 }
 xyz();

 // 9. function using else if ladder
 function pqr()
 {
 let num1 = 10;
 let num2 = 20;
 let num3 = 30;
 let num4 = 40;
 if (num1==num2)
 {
    console.log("num1 and num2 are  same");
 }
 else if(num2==num3)
 {
    console.log("num2 and num3 are  same");
 }
else if(num3==num4)
{
    console.log("num3 and num4 are same");
}
else if(num4==num1)
{
    console.log("num4 and num1 are same");
}
else
{
console.log("no nums are matched");
}

 }
 pqr();

 //10. program on switch
 let a = "javascript";
 switch(a)
 {
    case a == 'sai':
        {
            console.log("a and sai are not match");
        } 
        break;
        case a == 'javascript':
        {
            console.log("a and Javascript are  matched");
     } break;

 }
 
//11. program on logical operator using functions
function logical()
{
 let num1 = 10;
 let num2 = 20;
 let num3 =  30;
 let num4 = 40;
 if(num1<num2 && num3<num4)
 {
 console.log("num2 and num4 are greater");
 }
 else(num1==num2 || num3<num4)
 {
 console.log("num3 is smaller");
 }
}
logical();

//12. Data types using functions
function data()
{
    let b = 10;
    let c = 20;
    let d = "Javascript";
    console.log(b+c+d);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);

}
data();
// arrays using functions
//13. join()
function Arr()
{
    let c =[1,2,3,4,5];
    {
    d = c.join('');   // join
    console.log(d);
    }
}    
Arr()
//14. reversing    
   function rev()
   {
    let e = [1,2,3,4,5,6];
    
    f = e.reverse()         // reversing array
    console.log(f);

   }
     rev()

 //15.shift 
 function shift()
 {   
let g = [100,120,130,140,150];
  {
    console.log(g);
    h = g.shift()           // shift() is used to delete the first array number
    console.log(h);
    console.log(g);
  }
 }
 shift()
// 16. unshift
function unshift()
 {   
let i = [100,120,130,140,150];
  {
    console.log(i);
    j = i.shift()           // shift() is used to delete the first array number
    console.log(j);
    console.log(i);
  }
 }
 unshift();
//17.concat
function concat()
{
 let k = [100,120,130,140];
 let l = [150,160,170,180];
 {
    m = k.concat(l);
    console.log(m);
 }
}
concat()
//18.splice
function splice()
{
    let n = [10,20,30,40,50];
    console.log(n);
    o =n.splice(1,2,60)
    console.log(o);
}
splice()

//19.slice
function slice()
{
    p = [100,120,130,140,150];
    {
    console.log(p);
    q = p.slice(1,3);
    console.log(q);
    console.log(p);
    }
}
slice()
// strings using functions
//20.indexOf
function index()
{
    let r = "Facebook";
    {
        console.log(r);
     s = r.indexOf("e");
     console.log(s);
    }
}
index()

//21.search
function search()
{
    let t = "whatsapp";
    console.log(t);
    u = t.search("s");
    console.log(u);
}
search();

//22.substring
function substring()
{
    let v = "Telegram";
    console.log(v);
    w = v.substring(4,8)
    console.log(w);
}
substring()

//23.replace
function replace()
{
    let x = "computer";
    {
        console.log('old string is' + x);
     y =x.replace("computer","laptop")
     console.log("replace string is" +y);

    }

}
replace()

//24. toUppercase  and toLowerCase
function letter()
{
    let  mn ="google";
    let jk = "CHROME" ;
    {
        console.log(mn);
    z =mn.toUpperCase()
    console.log(z);
    console.log(jk);
    Z=jk.toLowerCase()
    console.log(Z);
    }
}
letter()    

// 25 trim
function trim()
{
    B = "   online    "
    console.log(B);
    C = B.trim()
    console.log(C);

}
trim()

