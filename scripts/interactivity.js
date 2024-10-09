document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector(".form");

    if(form){
        form.addEventListener('submit', function(event) {
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
        
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const text = "Olá, meu nome é Pablo Henrique e eu construo páginas web."; // Texto a ser digitado

    console.log(text)
    const typingElement = document.getElementById("typing-effect");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index); // Adiciona um caractere
            index++;
            setTimeout(type, 100); // Define a velocidade de digitação
        } else {
            typingElement.innerHTML += `<span class="cursor"></span>`; // Adiciona o cursor no final
        }
    }

    type(); // Inicia a função de digitação
});