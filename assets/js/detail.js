
$('.showArticle > a').on('click', function(){
    var id = $(this).attr('href'); // Pega o HREF do A que é o ID do Article
    var articles = $('article');
 
    $('.showArticle').removeClass('selected'); // Remove a classe selected dos LIS
    $(this).parent().addClass('selected'); // Aplica a classe selected ao LI selecionado 
 
    articles.css('display', 'none'); // Esconde todos os Articles
    $(id).css('display', 'block'); // Mostra apenas o selecionado.
 });
