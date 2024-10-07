document.getElementsByClassName("form").addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const message = document.getElementById("message").value

    if (name === "" || email === "" || assunto === "" || message === ""){
        alert('Por favor, preencha todos os campos.')
    }else{
        alert('Mensagem enviada com sucesso!')
    }

})