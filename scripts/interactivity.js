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

document.addEventListener('DOMContentLoaded', function() {
    const text = "Olá, meu nome é Pablo Henrique e construo páginas web.";
    const typingElement = document.getElementById("typing-effect");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Velocidade de digitação
        } else {
            typingElement.innerHTML += `<span class="cursor"></span>`;
        }
    }

    type();
});