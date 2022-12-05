const sql = require('mssql');
const sqlConfigLocal = {
  user:'Yaswanth',
  password:'yaswanth@9848',
  database:'nodejs_3',
  server: 'localhost',
  options: {
    trustServerCertificate: true // change to true for local dev / self-signed certs
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
};
const new1 = async () => {
    try
     {
     // make sure that any items are correctly URL encoded in the connection string
     await sql.connect(sqlConfigLocal);
     const result1 = await sql.query `select studentCity from   studentDetails where studentCity like 'Ongole'` ;
     const result2 = await sql.query `select studentId from studentDetails where studentId   Between  2 and 5`;
    const result3 =  await sql.query` select *  from studentDetails`;  
    console.log(result1)
    return promise.resolve(result3)  ;
     }
     catch(err)
     {
         return err;
     }   
 };
new1().then((result) =>
{
    console.log(`Result is :${JSON.stringify(result)}`);
}).catch((err) =>
{
  console.log(err);
})