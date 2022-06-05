

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
