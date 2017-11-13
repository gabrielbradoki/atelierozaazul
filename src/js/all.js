/* Remove o estilo anterior */

$(document).ready(function() {
    $('link[rel=stylesheet][href*="https://cdn.awsli.com.br/production/static/loja/estrutura/v1/css/all.min.css"]').remove();
});

/* Adiciona a classe nova de telefone do Font awesome */

$(document).ready(function() {
    $('.icon-phone').removeClass('icon-phone').addClass('fa fa-phone');
});