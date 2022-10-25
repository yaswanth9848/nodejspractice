//1
const a = {
    name:"rahul",
    age:20,
    city:"Hyderabad",
    State:"Telangana"
}
let res= " ";
let l = a.length;
for(let key in a) //for(let i=0;i<10;i++)
{
    res = a[key];
console.log(`${key}=${res}`);

}

//2
const mobiles = {
     name1:"redmi",country1:"china",
     name2:"realme",country2:"china",
     name3:"oppo",country3:"china",
     name4:"Samsung",country4:"korea" }

 for(const key in mobiles)
    {
        if(mobiles.hasOwnProperty.call(mobiles,key))
        {
            const element = mobiles[key];
            console.log(element);
        }

    }

    


3.
const bikes= {
    Company1:"Honda",name1:"Unicorn",
    Company2:"Hero",name2:"Glamour",
    Company3:"Bajaj",name3:"Platina"
}
let r = "";
for (let key in bikes)
{
    r = bikes[key]
    console.log(`${key} = ${r}`);
 }

//4.apps
const apps ={
    name1:"whatsapp",color1:"green",
    name2:"facebook",color2:"blue",
    name3:"Telegram",color3:"blue",
}

for(const key in apps)
{
    console.log(key,apps[key]);
}

//5.
const school ={
    name1:"Chaitanya",Branch:"Cse",
    name2:"Sandeep",color2:"Ece",
    name3:"kiran",color3:"civil",
}
for(const key in school)
{
    console.log(school,school[key]);
}




 