const a = "Arun"
switch(a)
{
    case  'Roshan' == 'Arun' :
    {
    console.log("Mismatch");
    }
    break;
    case  'Akshaya':
    {
        console.log("Mismatch");
    }
    break;
    case   "Sakshi" :
    {
        console.log("Mismatch");
    }
    break;
    case   'Arun '== 'Arun':
    {
        console.log("Match");
    }
    break;
    case  "faiz" :
    {
        console.log("Mismatch");
    }
    break;

default :
console.log("No Name is Matched");
}

switch ("jan")
{
    case  'jan':
        {
      console.log("31 days");
        } 
     break;
    case 'feb':
        console.log("28 days");
    break;
    case 'mar' :
        console.log("30 days");
        break;
      default:
        console.log("No month is matched");
}


