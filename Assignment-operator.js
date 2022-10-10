a = 10;
b = 20;
console.log(a,b);      // single (=) operator will assign operator to variable


c = 40;
d = 40;
if(c==d)  // double(==) operator used to compare the variables 
{
    console.log("c and d values are same" );
}
else 
{
    console.log("c and d values are not  same");
}

let f = 10;
let g = "10";
if(f===g)   // (===) Assignment operator is used to compare the variables and data types
{
    console.log("f and g are same");
}
else
{
  console.log("f and g are not same");
}

let i = 10;
let j = 20;
k = i++;
l = ++j;
console.log(k,l);

let m = 30;
let n = 40;
o = m+=12;
p = n-=5;
console.log(o,p);

let q = 10;
let r = 20;
let s = q*=2;
let t = r/=5;
console.log(s,t);
