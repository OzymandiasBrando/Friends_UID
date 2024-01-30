const botoesCopiar = document.querySelectorAll('[id^="botao-copiar"]');

botoesCopiar.forEach(botao => {
    botao.addEventListener('click', () => {
        
        const numeroParaCopiar = botao.getAttribute('data-numero');

        const elementoTemporario = document.createElement('textarea');
        
        elementoTemporario.value = numeroParaCopiar;

        document.body.appendChild(elementoTemporario);

        elementoTemporario.select();
        
        document.execCommand('copy');

        document.body.removeChild(elementoTemporario);
    });
});
