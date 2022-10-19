//reversing string without using inbuilt functions
function abc()
{
    str="hello";
    console.log("the main string is"+" "+ str);
    let b = "";
for(let i=str.length-1;i>=0;i--)
{
    b = b+str[i];
}
 console.log("the reversed string is "+" "+b);

}
abc()
function def()
{
    str = "java";
    console.log("the main string is"+" "+ str);
    c = '';
    i=str.length-1;
    while(i>=0)
    {
        c=c+str[i];
        i--;
    }
    console.log("the reversed string is "+" "+c);
}
def()

