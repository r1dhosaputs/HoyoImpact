// https://docs.google.com/spreadsheets/d/1u_4gd1MiH7-5fNZZ7Z5LmcPlKjaljS3NFxUV37PwGWY/edit?usp=sharing

let SHEET_ID = '1u_4gd1MiH7-5fNZZ7Z5LmcPlKjaljS3NFxUV37PwGWY';
let SHEET_TITLE = 'Data Anggota HoyoImpact';
let SHEET_RANGE = 'A:F';

let FULL_URL = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE;

// Access 'res' within the correct scope (within the then() callback)
fetch(FULL_URL)
    .then(function (res) {
        return res.text();
    })
    .then(rep => {
        // Use slice and substring instead of substr
        let data = JSON.parse(rep.slice(47, -2));
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });


