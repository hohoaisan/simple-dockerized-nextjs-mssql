// https://tediousjs.github.io/node-mssql/
export default async function(req,res) {
  const sql = require('mssql')
  const USER_NAME = process.env.USER_NAME || "sa"
  const PASSWORD = process.env.PASSWORD;
  const DATABASE_NAME = process.env.DATABASE_NAME;
  const HOST_NAME = process.env.HOST_NAME;

  const config = {
    user: USER_NAME,
    password: PASSWORD,
    server: HOST_NAME,
    database: DATABASE_NAME
  } 

  try {
    await sql.connect(config)
    const result = await sql.query(`select 1`);
    res.status(200).json({
      USER_NAME,
      PASSWORD,
      DATABASE_NAME,
      HOST_NAME,
      STATUS: "Connection success"
  })
}
  catch (err) {
    res.status(200).json({
      USER_NAME,
      PASSWORD,
      DATABASE_NAME,
      HOST_NAME,
      STATUS: "Connection error" + err
  })}
}