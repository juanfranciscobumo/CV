$(document).ready(function() {
    // Initialize Animate On Scroll (AOS) library
    AOS.init({
        // Uncomment the line below for on-scroll animations to be played only once
        // once: true
    });

    // Smooth scrolling for links with hashes
    $('a.smooth-scroll').click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname
        ) {
            // Determine the element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Check if a scroll target exists
            if (target.length) {
                // Only prevent the default action if the animation will actually happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation completes
                    // Changing focus for accessibility reasons
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target is focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements that are not focusable
                        $target.focus(); // Setting focus again
                    }
                });
            }
        }
    });

    // Generate table rows with reference data
    generarFilas();

    // Add hover class to table rows using event delegation
    $('#reference-table tbody').on('mouseenter', 'tr', function() {
        $(this).addClass('hovered');
    }).on('mouseleave', 'tr', function() {
        $(this).removeClass('hovered');
    });
});

// Referencias data array
var referencias = [
    {
        nombre: 'Diana Milena Camacho',
        cargo: 'Analista de pruebas automatización',
        empresa: 'Mercado libre',
        telefono: '3128058948',
        ubicacion: 'Medellín - Antioquia - Colombia',
    },
    {
        nombre: 'Laura Ramírez',
        cargo: 'Analista de pruebas automatización',
        empresa: 'Alcaldia de Medellín',
        telefono: '3127355514',
        ubicacion: 'Medellín - Antioquia - Colombia',
    },
    {
        nombre: 'José Fernando Gómez',
        cargo: 'Analista de desarrollo',
        empresa: 'Sofka Technologies',
        telefono: '3042802015',
        ubicacion: 'Medellín - Antioquia - Colombia',
    }
];

// Function to dynamically generate table rows
function generarFilas() {
    var tbody = $('#reference-table tbody');
    tbody.empty(); // Clear existing content

    // Loop through the referencias array to create table rows
    referencias.forEach(function(referencia) {
        var row = $('<tr>');
        row.append('<td>' + referencia.nombre + '</td>');
        row.append('<td>' + referencia.cargo + '</td>');
        row.append('<td>' + referencia.empresa + '</td>');
        row.append('<td>' + referencia.telefono + '</td>');
        row.append('<td>' + referencia.ubicacion + '</td>');
        tbody.append(row);
    });
}