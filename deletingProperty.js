//Deleting property from object
/*syntax
object name = {
    properties
}*/
const bike =
{
    name:"Unicorn",
    company:"Honda",
    power:"150cc",
    model:2022,
    color:"Black",


}
console.log("The original string is"+" "+bike);
delete bike.model;
console.log("After deleting model property is "+" "+bike);