//1.
class car
{
  name = "ciaz";
   methodcar()
  {
    return`Name is ${this.name}`;
  }
}
class car1 extends car
{
    color = "Blue";
methodcar1()
    {
      //  const res = car.methodcar();
        //console.log(res)
        return `New Car is ${this.name} ,color is ${this.color}` ;
    }
}
const res1 = new car1("ciaz","Blue") 
console.log(res1.methodcar1());

//2.
class Name{
    name = "Ram";
    methodName()
    {
        return`Name is ${this.name}`;
    }
}
class FullName extends Name
{
    FullName = "SitaRam";
    methodFullName()
    {
        return `Full Name is ${this.FullName}`;
    }
}
const res2 = new FullName(FullName)
console.log(res2.methodFullName());

//3.Addition
class Add{
    a = 10;
    b = 20;
    methodAdd()
    {
        return`Name is ${this.a+this.b}`;
    }
}
class Add1 extends Add
{
        c  = 30;
    methodAdd1()
    {
        return `Addition  is ${this.a +this.b+this.c}`;
    }
}
const res3 = new Add1()
console.log(res3.methodAdd1());

//4.person details
 
class person{
    personName = "Mohan";
    methodName()
    {
        return`Name is ${this.personName}`;
    }
}
class personFullName extends person
{
    personFullName = "Rao";
    methodpersonFullName()
    {
        return `Full Name is ${this.personName}${this.personFullName}`;
    }
}
const res4 = new personFullName();
console.log(res4.methodpersonFullName());
//5 bikes
class bike{
    Name = "glamour";
    methodone()
    {
        return`Name is ${this.Name}`;
    }
}
class bike1 extends bike
{
    color = "blue";
    methodTwo()
    {
        return `Details of bike is ${this.Name},color is ${this.color}`;
    }
}
const res5 = new bike1()
console.log(res5.methodTwo());




