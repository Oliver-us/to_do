$(function(){
    $("#botao").click(inserirTarefa);
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campoObs = $(".campoObs").val();

    var linha = funLinha(campoTitulo, campoObs);
    linha.find(".botarDeletar").click(deletaLinha);
    tabela.append(linha);
}

function funLinha(campoTitulo, campoObs){ // funcao com parametro
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campoObs);
    var colunaDelete = $("<td>");

    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href","#");
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone)
    colunaDelete.append(bdeletar);

    linha.append(colunaTarefa); //anexa mais codigo
    linha.append(colunaObs);
    linha.append(colunaDelete);

    return linha
}