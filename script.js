document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Impede o envio do formulário
    event.preventDefault();

    // Obtém os valores dos campos
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Valida o e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex simples para validação de e-mail
    if (!email) {
        alert('Por favor, digite o e-mail.');
        return;
    } else if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Valida a senha
    if (!senha) {
        alert('Por favor, digite a senha.');
        return;
    } else if (senha.length < 6) { // Exemplo: a senha deve ter pelo menos 6 caracteres
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    // Se todas as validações passarem, você pode prosseguir com o envio do formulário
    alert('Formulário enviado com sucesso!');
    // Aqui você pode fazer uma requisição AJAX ou enviar o formulário normalmente
    // this.submit(); // Descomente esta linha se quiser enviar o formulário
});
