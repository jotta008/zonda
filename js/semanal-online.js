$(document).ready(function () {
    var tabla = $('#tabla > tbody');
    tabla.html('')
    $.ajax({
        async: false,
        type: "POST",
        url: "php/datos-horas.php",
        cache: false,
        dataType: "json",
        success: function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var elemento = document.createElement('tr');
                if (response.dias[i]['lunes'] != 1 ){
                    var dia = 0
                    var estado = 'Ocupado'
                }else{
                    var dia = 1
                    var estado = 'Libre'
                }
                if (response.dias[i]['martes'] != 1 ){
                    var dia_m = 0
                    var estado_m = 'Ocupado'
                }else{
                    var dia_m = 1
                    var estado_m = 'Libre'
                }
                if (response.dias[i]['miercoles'] != 1 ){
                    var dia_mm = 0
                    var estado_mm = 'Ocupado'
                }else{
                    var dia_mm = 1
                    var estado_mm = 'Libre'
                }
                if (response.dias[i]['jueves'] != 1 ){
                    var dia_j = 0
                    var estado_j = 'Ocupado'
                }else{
                    var dia_j = 1
                    var estado_j = 'Libre'
                }
                if (response.dias[i]['viernes'] != 1 ){
                    var dia_v = 0
                    var estado_v = 'Ocupado'
                }else{
                    var dia_v = 1
                    var estado_v = 'Libre'
                }
                
                elemento.innerHTML += ("<tr id='ti'><th>" + response.data[i]['id']+ "</th></tr>");
                elemento.innerHTML += ("<td><p data-id=" + dia + ">" + estado + "</p></td>");
                elemento.innerHTML += ("<td><p data-id=" + dia_m + ">" + estado_m + "</p></td>");
                elemento.innerHTML += ("<td><p data-id=" + dia_mm + ">" + estado_mm + "</p></td>");
                elemento.innerHTML += ("<td><p data-id=" + dia_j + ">" + estado_j + "</p></td>");
                elemento.innerHTML += ("<td><p data-id=" + dia_v + ">" + estado_v + "</p></td>");
                tabla.append(elemento);

            }
            $('td > p').each(function () {  
                var da = $(this).attr('data-id')
                if(da == 1){
                    $(this).parent().css({
                        'background': '#27ae60',
                        'color': '#f2f2f2'
                    })
                }
            })
            $('td').on('click', function (e) {  
              alert('Para reservar turno llame al 6201355 o al 3875264487')
            })
        }
    });
});