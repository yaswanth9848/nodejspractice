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
const conn = async () => {
    try
     {
     // make sure that any items are correctly URL encoded in the connection string
     await sql.connect(sqlConfigLocal);
     const result1 = await sql.query`insert into Employee values(4,'Lokesh','10th lane','Guntur')`
     const result2 = await sql.query`update  Employee set Address = '10th lane' where EmployeeName ='Ajay'`;
     const result3 = await sql.query`delete from Employee where EmployeeName = 'Arun'`;
     const result4 = await sql.query`select * from Employee`

     return result4 ;
    } 
    catch (err) {
       return err
    }
   };
conn().then(result => {
    console.log(`Result is :${JSON.stringify(result)}`);
}).catch(err=>{
    console.error(` In error :${err}`);
});
