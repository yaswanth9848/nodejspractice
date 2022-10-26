//inheritance
class car
{
    constructor(name,color)
    {
        this.name = name;
        this.color = color;
    }
    methodcar()
    {
        return `Name of car is ${this.name},color is ${this.color}`
    }
}
class car1 extends car
{
    constructor(name,color,company)
    {
        super(name,color)
        this.company = company;
    }
    methodcar1()
    {
        return `Name of car is ${this.name},color is ${this.color},company is ${this.company}` 
    }
}
const result1 = new car1("ciaz","Blue","Suzuki");
console.log(result1.methodcar1());
console.log(result1.methodcar());

//2.Details of Date of birth
class dob
{
    constructor(date,month)
    {
        this.date = date;
        this.month = month;
    }
    methoddob()
    {
        return `person date of bith is ${this.date} ${this.month}`

    }
}
class dob1 extends dob
{
    constructor(date,month,year)
    {
        super(date,month);
        this.year = year;
    }
    methoddob1()
    {
        return `person Date of birth  is ${this.date},${this.month},${this.year}`;
    }
}
const result2 = new dob1(10,10,2005);
console.log(result2.methoddob1());
console.log(result2.methoddob());

//3.
class bike
{
    constructor(name,color)
    {
        this.name = name;
        this.color = color;
    }
    methodbike()
    {
        return `Name of bike is ${this.name},color is ${this.color}`
    }
}
class bike1 extends bike
{
    constructor(name,color,company)
    {
        super(name,color)
        this.company = company;
    }
    methodbike1()
    {
        return `Name of bike is ${this.name},color is ${this.color},company is ${this.company}` ;
    }
}
const result3 = new bike1("Glamour","Blue","Hero");
console.log(result3.methodbike1());

console.log(result3.methodbike());

//4.Addition 
class Add
{
    constructor(a,b)
    {
        this.a = a;
        this.b = b;
    }
    methodAdd()
    {
        return `Addition  is ${this.a+this.b+this.c}`
    }
}
class Add1 extends Add
{
    constructor(a,b,c)
    {
        super(a,b)
        this.c = c;
    }
    methodAdd1()
    {
        return ``
    }
}
const result4 = new Add1(10,20,30);
console.log(result4.methodAdd1());
console.log(result4.methodAdd());

//5. full Name
class Name
{
    constructor(Name)
    {
        this.Name = Name;
    }
    methodName()
    {
        return `Name of person  is ${this.Name}`
    }
}
class FullName extends Name
{
    constructor(Name,FullName)
    {
        super(Name)
        this.FullName = FullName;
    }
    methodFullName()
    {
        return `Name of person  is ${this.Name} ,${this.FullName}` ;
    }
}
const result5 = new FullName("kirankumar");
console.log(result5.methodFullName());
console.log(result5.methodName());


