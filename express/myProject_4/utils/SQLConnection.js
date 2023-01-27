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


const connection = async () => {
  try
  {
  const pool = await sql.connect(sqlConfigLocal);
      return Promise.resolve(pool);
  }catch(err){
      return Promise.reject(err);
  }
}

    
exports.connection = connection;
