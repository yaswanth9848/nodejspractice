// min and max
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
const new3  = async  () =>
{
 try
 {
     await sql.connect(sqlConfigLocal);
     const result1 = await sql.query `select   max(salary) from friends`;
     const result2 = await sql.query `select  min(salary ) from friends `;
     const result3 = await sql.query `select * from friends ` ;
     return result2 ;
 }
catch(err)
{
    console.log(err)
}
}

new3().then((result) =>
{
    console.log(result);
}).catch((err)=>
{
 console.log(err);
})