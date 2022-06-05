// datatable | jquery
$(document).ready(function () {
    $('#postcard_table').DataTable({
        'ajax': '/WebDev/data/postcards.json',
        'columnDefs': [
            {className: "entry-head-desc", "targets": [3]}],
        'columns': [
            {'data': 'Schiff', defaultContent: ""},
            {'data': 'Klasse', defaultContent: ""},
            {'data': 'Beschreibung', defaultContent: ""},
            {
                'data': 'Bild', "render": function (data) {
                    return '<a href="assets/img/boote/' + data + '_V.jpg" target="_blank" class="text-muted entry-btn">Go</a>';
                }
            }
        ]
    });
});


document.addEventListener('scroll', function (event) {
    let nav = document.querySelector('.fixed-top');
    let stop = document.querySelector('.main-header');
    if (scrollY > stop.clientHeight - nav.clientHeight) {

        nav.classList.add('scrolled')
    } else
        nav.classList.remove('scrolled')
});
