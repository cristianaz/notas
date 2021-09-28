$(function() {

  $('#calcular').click(function(e) {
      e.preventDefault();
      var primerValor = $('#valor1').val();
      var segundoValor = $('#valor2').val();
      var tercerValor = $('#valor3').val();
      var cuartoValor = $('#valor4').val()



  
  

        var resultado = parseFloat(primerValor) + parseFloat(segundoValor)+ parseFloat(tercerValor)+ parseFloat(cuartoValor);
        var promedio = parseFloat(resultado)/4;

    
    $('#resultado').text(promedio);
  });
});