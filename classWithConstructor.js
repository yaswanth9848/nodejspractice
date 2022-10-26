//Programs on class with constructor
//1. Hello world
class hello
{
    constructor(firstName,lastName)
    {
        this.firstName ="Hello";
        this.lastName = "World";
    }
    sampleMethod()
    {
        return`${this.firstName} ${this.lastName}`
    }
}
const  result1 = new hello("Hello","lastName");
 console.log(result1.sampleMethod());


//2. Person Details
class person   {
    constructor(name,age,height)
    {
        this.name = name;
        this.age = age;
        this.height = height;
    }
personMethod()
    {
       return `person details : name is  ${this.name}, age is ${this.age}, height is  ${this.height}`
    }

    }
    const result2 = new person("Ashok",22,5.8);
    console.log(result2.personMethod());

//3. Full Name
class Name 
{
    constructor(firstName,lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    nameMethod()
    {
        return`Person FullName is ${this.firstName}${this.lastName}`
    }

}    
const result3 = new Name("Yaswanth","Sai")
console.log(result3.nameMethod());

//4. Using for loop
class greet 
{
    constructor (a,b)
    {
    this.a = a;
    this.b =b;
    for (a =0;a<10;a++)
    {
        console.log(a);
    }
}
    forMethod()
    {
        return  `For loop Output is `
    }
}


const result4= new greet()
console.log(result4.forMethod());

//5. using  while in class
class great
{
  constructor (i)
  {
    this.i = i;
    i = 20;
    while(i>0)
    {
        console.log(i)
        i--;
    }
  }
  whileMethod()
  {
     return `Result for while loop is`
  }
}
 const result5 = new great()
console.log(result5.whileMethod());