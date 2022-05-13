// mit NodeJS SQLite zu JSON
// Refactor Schachtelkürzel zu Schachtel
//Output auch als Json in data/postcards.json gespeichert
//
// const sqlite3 = require('sqlite3').verbose();
// // const db = new sqlite3.Database('../data/database/Postkarten.sqlite');
//
// let db = new sqlite3.Database('../data/Postkarten.db', (err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log('Connected to Postkarten.');
// });
//
// const sql = "SELECT * FROM 'Abfrage Haupttabelle';";
//
// function get_view(){
//     return new Promise((resolve) => {
//         db.all(sql,[],(err,rows)=>{
//             if(err){
//                 return console.error(err.message);
//             }
//
//             resolve(rows);
//         });
//     });
// }
//
// async function get_entries() {
//     const entries = await get_view();
//     console.log(entries)
// }
//
// get_entries()



//datatable
$(document).ready( function () {
    $('#postcard_table').DataTable({
        'ajax' : '../data/postcards.json',
        'columns' : [
            {'data' : 'Schiff', defaultContent: ""},
            {'data' : 'Klasse', defaultContent: ""},
            {'data' : 'Beschreibung', defaultContent: ""}
        ]
    });
} );


