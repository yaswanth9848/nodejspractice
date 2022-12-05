// using like and wildcards
const sql = require('mssql');
const sqlConfigLocal = {
  user:'Yaswanth',
  password:'yaswanth@9848',
  database:'nodejs 4',
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
const new2  = async  () =>
{
 try
 {
     await sql.connect(sqlConfigLocal);
     const result1 = await sql.query `select studentName from   studentDetails where studentCity like  'Ongole'`;
     const result2 = await sql.query ` select * from studentDetails`
     return result1; 
 }
 catch(err) 
 {
     console.log(err);
 }

 };
 new2().then((result) =>
 {
     console.log(`Result is :${JSON.stringify(result)}`);
 }).catch((err) =>
 {
   console.log(err);
 })