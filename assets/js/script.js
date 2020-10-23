let Nome = window.document.getElementById('Nome')
let Email = document.querySelector ('#Email')
let Telefone= window.document.getElementById('Telefone')
let Adicionarcomentario = document.querySelector('#Adicionar comentario')
let nomeok = false
let emailok = false
let adicionarcomentariook = false

Nome.style.width = "100%"
Email.style.width = '100%'
Telefone.style.width = "100%"

function validaNome (){
let txtNome = document.querySelector('#txtNome')
    if (Nome.value.length < 3){
        txtNome.innerHTML = 'Nome invalido'
txtNome.style.color = "red"
    }
    else {
        txtNome.innerHTML ='Nome valido'
        txtNome.style.color = "green"
        let nomeok = true
    }
}
function validaEmail (){
    let txtEmail = document.querySelector('#txtEmail')
    if (Email.value.indexOf('@')== -1){
        txtEmail.innerHTML = 'E-mail inavalido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
        let emailok = true
    }
}
function validaAdicionarcomentario (){
    let txtAdicionarcomentario = document.querySelector('#txtAdicionarcomentario')
    if (Adicionarcomentario.value.length >= 100 ){
        txtAdicionarcomentario.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
    txtAdicionarcomentario.style.color ="red"
    txtAdicionarcomentario.style.display ='block'
    }
    else{
        txtAdicionarcomentario.style.display ='none'
        let adicionarcomentariook = false
    }

}

function enviar (){
    if (nomeok == true && emailok== true && adicionarcomentariook== true){
        alert ('Formulario enviado com sucesso')
    }
    else{
        alert ('Preencha o formulario corretamente')
    }
}


