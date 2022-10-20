// Travelling through object using for loop
const persons = [
    {name:"person1",age:20},
    {name:"person2",age:23},
    {name:"person3",age:25},
    {name:"person4",age:27}
    
    
]

for(i=0;i<persons.length;i++)
{
    console.log("Name is" ,persons[i].name + " "+"age is"+ " " +persons[i].age);
}