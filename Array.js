//join
const a = [1,2,3,4,5];
const b = console.log(a.join("*")); //array.join() is used to separate  the data 
console.log( typeof b);

//tostrings
const c = [1,2,3,4,5,6.12,"Java script"];
console.log(c,typeof c);
const d = c.toString();
console.log(d,typeof d);

//Random  element
const e = [1,2,3,4,5];
const f = Math.floor(Math.random(e)*e.length);
console.log(f);

//length
const g = [1,2,3,4,5]
console.log(g.length); 

//adding
const h = [10,20,30,40]
h[6] =70;
console.log(h);

//reversing
const i = [1,2,3,4,5];
console.log(i.reverse());  // reverse() is used to reverse the given array
  
//pop
const j = [1,2,3,4,5,6,7];
z = j.pop(5); //pop() is used to delete the last element
console.log(z);

//shift()
const  k = [1,2,3,4,5]
k.shift() // shift (deleting the  beginning element)
console.log(k);


const  l = [1,2,3,4,5]
l.unshift(4) // unshift (adding at  beginning element)
console.log(l);


//concatinating
const m = [1,2,3,4,5]
const n = [6,7,8,9,10]
const o = [11,12,13,14,15]
p =  m.concat(n,o) // concate(merging)
console.log(p);

//splice()
const  q = [1,2,3,4,5];
q.splice(0,0,5,6,7) //splice(index,no.of.deletions,elements)
console.log(q);
 

const r =[10,20,30,40,50];
r.splice(1,2,60)
console.log(r);
 
//slice
const s = [10,20,30,40,50,60,70,80];
t = s.slice(3,5)
console.log(t);


var v = [1,2,3,4,5,6,7,8]
 {
    v.slice(3,5)
    console.log(v); //slice
 }
