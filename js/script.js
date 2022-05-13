// mit NodeJS SQLite ausgeben
// Refactor Schachtelkürzel zu Schachtel
// Output  als json in data/postcards.json gespeichert
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


function generate_picture_name() {
    let arr = [];
    let i;
    for(i = 1; i<204; i++){
        let base_sub10 = 'PK0000_V';
        let base_sub100 = 'PK000_V';
        let base_sub1000 = 'PK00_V';
        if (i<10) {
            let picture = base_sub10+i;
            arr.push(picture);
        } else if (i < 100) {
            let picture = base_sub100+i;
            arr.push(picture);
        } else {
            let picture = base_sub1000+i;
            arr.push(picture)
        }

    }
    return arr
}

// generate_picture_name()


//datatable | jquery
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


