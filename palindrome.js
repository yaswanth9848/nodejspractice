// reversing a string and checks palindrome
function string()
{
    const a = "DAD";
    console.log("The new string is "+" " +a);
    strsplit=a.split('')
    console.log("The splitted string is" +" "+strsplit);
    strReverse=strsplit.reverse();
    console.log("The Reversed string is "+" "+strReverse);
    strJoin=strReverse.join('');
    console.log("The Joined string is "+" "+ strJoin)
    if(a===strJoin)
    {
        console.log("it is a palindrome");
    }
    else
    {
        console.log("it is not a palindrome");
    }

}
string()