$(function(){

    //TELA DE LOGIN
    $("#telaCadastro").click(function(){
        $("#login").hide();
        $("#cadastro").show();
    });//desativa tela login e ativa de cadastro

    //TELA DE CADASTRO
    $("#telaLogin").click(function(){
        $("#cadastro").hide();
        $("#login").show();
    });//desativa tela cadastro e ativa de login

    $("#btCadastrar").click(function(){

        let dados = {
            "usuario": $("#usuarioCad").val(),
            "senha": $("#senhaCad").val(),
            "confirmarSenha": $("#csenha").val()
        };

        if(dados.usuario == "" || dados.senha =="" || dados.confirmarSenha ==""){
            alert("Preencha todos os campos!")
            return false;
        }//verificar campos
        if(dados.senha != dados.confirmarSenha){
            alert("Senhas não conferem!")
            return false;
        }//verificar senha

        $.post("backend/cadastrar.php", dados, function(retorno){
            
        });//envia para o backend
    });

});