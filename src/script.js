// Seleciona o botão
const botaoCopiar = document.getElementById('botao-copiar');

// Adiciona um ouvinte de evento de clique ao botão
botaoCopiar.addEventListener('click', () => {
    // Obtém o número a ser copiado do atributo de dados do botão
    const numeroParaCopiar = botaoCopiar.getAttribute('data-numero');

    // Cria um elemento temporário para armazenar o número a ser copiado
    const elementoTemporario = document.createElement('textarea');
    
    // Define o valor do texto a ser copiado como o número do atributo de dados
    elementoTemporario.value = numeroParaCopiar;

    // Adiciona o elemento temporário ao documento
    document.body.appendChild(elementoTemporario);

    // Seleciona o texto dentro do elemento temporário
    elementoTemporario.select();

    // Tenta copiar o texto selecionado para a área de transferência do navegador
    document.execCommand('copy');

    // Remove o elemento temporário do documento
    document.body.removeChild(elementoTemporario);
});
