//1
const a = {
    name:"rahul",
    age:20,
    city:"Hyderabad",
    State:"Telangana"
}

for(let  key in a)
{
    console.log(key,a[key]);
}

//2
const mobiles = {
     name:"redmi",country:"china",
     name:"realme",country:"china",
     name:"oppo",country:"china",
     name:"Samsung",country:"korea" }

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
    Company:"Honda",name:"Unicorn",
    Company:"Hero",name:"Glamour",
    Company:"Bajaj",name:"Platina"
}
for (const key in bikes)
{
    console.log(`bikes.${key} = ${bikes[key]}`);
 }

//4.apps
const apps ={
    name:"whatsapp",color:"green",
    name:"facebook",color:"blue",
    name:"Telegram",color:"blue",
}

for(const key in apps)
{
    console.log(key,apps[key]);
}

