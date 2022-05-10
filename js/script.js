
const sqlite3 = require('sqlite3').verbose();
let sql;

//Connect to DB
const db = new sqlite3.Database('../data/Postkarten.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
});
//Get Mainview
sql = "SELECT * FROM 'Abfrage Haupttabelle' LIMIT 50;";

//db.run(sql)
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
        rows.forEach(row=>{
            console.log(row)

    })
})

db.close();