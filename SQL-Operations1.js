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
  const ABC = async () =>
  {
    try{
      await sql.connect(sqlConfigLocal);
      const result1 = await sql.query ` select EmployeeName from Employee where EmployeeName like 'Ram' `;
      const result2 = await  sql.query `select * Employee`;
      return result2      
    }
    catch(err)
    {
      return err;
    }
  };

ABC().then((result)=>
{
  console.log(result);
}).catch((err) =>
{
   console.log(err);
});