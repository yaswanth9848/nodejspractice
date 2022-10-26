class Caluclator
{
    constructor(a,b)
    {
        this.a = a;
        this.b = b;
    }
    Add()
    {
        return `Addition of two numbers is : ${this.a+this.b}`
    }
    Sub()
    {
    return `Subtraction  of two numbers is : ${this.a-this.b}`
    }
    Mul()
    {
    return `Multiplication  of two numbers is : ${this.a*this.b}`
    }
    Div()
    {
    return `Divison   of two numbers is : ${this.a/this.b}`
    }
    

}


const res = new  Caluclator(10,20);
const res1 = new  Caluclator(20,40);
console.log(res.Add());
console.log(res.Sub());
console.log(res.Mul());
console.log(res.Div());
