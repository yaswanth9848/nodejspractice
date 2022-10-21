// Replacing string
const a = "I am from Hyderabad" ;
const b = a.replace("I am from Hyderabad" ," I am from Banglore"); //string.replace(old string,new string) is used to change string
console.log(b);

//Converting string from uppercase to lowercase

const c = "GOOD MORNING";
const d = c.toLowerCase();  //str.toLowerCase(); is a method to convert uppercase to lowercase letters 
console.log(d);

// Converting String from lowercase to uppercase

const e = "hello everyone";
const f = e.toUpperCase();  //str.toUpperCase(); is a used to convert lowercase to uppercase letters 
console.log(f);

// Concating String
 
const g = "Yaswanth";
const h = "Sai";
const i = g.concat( h ); //string1.concat(string2) is used to concat two strings
console.log(i);

// trim

const j = " Java script "
console.log(j);
console.log(j.trim()); // trim is used to remove spaces at starting and ending of string

//length
const k = "Yaswanth"    
console.log(k.length);  // string.length is used to  find length of string
//search()
const l = "Good Afternoon";
console.log(l.search("f")); // string.search() is used to find the index no of string 

//substring
const m = "Google, Facebook  ";
console.log(m.substring(3,8)); //string.substring(starting index, stop index) is used to 
console.log(m.slice(8,16));

//indexOf()
const n = "Good Evening";
console.log(n.indexOf("n"));  //indexOf() is used to find the index number of a string

//lastIndexof()
const o = "Good Evening";
console.log(o.lastIndexOf("g"));  //lastIndexOf() is used to find the last index number of a string

//charAt()
const p = "Welcome";
console.log(p.charAt("6"));  //charAt() is used to find word in a string by giving index number 

//charCodeAt()
const q = "Friday";
console.log(q.charCodeAt("5")); // charCodeAt() is used to find the Ascii number of a given index number
