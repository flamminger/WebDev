const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../data/Postkarten.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
});


//Connect to DB
// const db = new sqlite3.Database('../data/Postkarten.db', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) return console.error(err.message)
// });

//gets 1st 50 entries


async function get_main() {
    let sql = "SELECT * FROM 'Abfrage Haupttabelle' LIMIT 50;";
    return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
        if(error) {
            reject(error)
        }
        resolve(rows)


    })
})
}

const rows = get_main().then(rows => {
    rows.forEach(row => console.log(row))
}).catch(error => console.error(error))

console.log(rows)




