const { Connection, Request } = require("tedious");



function queryDatabase() {
  
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT TOP (1000) * FROM [dbo].[VisionTable]`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}

document.getElementById('refresh').addEventListener('click',function(){
  // Create connection to database
const config = {
  authentication: {
    options: {
      userName: "visiondatabase", // update me
      password: "QWE666qwe!" // update me
    },
    type: "default"
  },
  server: "visiondatabaseserver.database.windows.net", // update me
  options: {
    database: "visiondatabase", //update me
    encrypt: true
  }
};

  const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
  alert("Hi");
});

connection.connect();
})