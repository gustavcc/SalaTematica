/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
document.getElementById('ativarMicrofone').addEventListener('click', function () {
    if ('webkitSpeechRecognition' in window) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'pt-BR';

        recognition.onresult = function (event) {
        var result = event.results[0][0].transcript;
        document.getElementById('textoReconhecido').innerText = 'Texto reconhecido: ' + result;

        // Verificar frases e redirecionar
        verificarFrases(result);
        };

        recognition.start();
    } else {
        alert('Seu navegador não suporta a API de reconhecimento de fala.');
    }
    });

    function verificarFrases(frase) {
    // Converter para minúsculas para tornar a comparação sem distinção entre maiúsculas e minúsculas
    var fraseLowerCase = frase.toLowerCase();

    // Verificar frases e redirecionar
    if (fraseLowerCase.includes('desigualdades raciais')) {
        window.location.href = 'post3.html';
    } else if (fraseLowerCase.includes('impacto das')) {
        window.location.href = 'post6.html';
    } else if (fraseLowerCase.includes('tecnologias para')) {
        window.location.href = 'https://www.site.com';
    }
    else if (fraseLowerCase.includes('educação e capacitação')) {
        window.location.href = 'https://www.site.com';
    }
    else if (fraseLowerCase.includes('participação racial')) {
        window.location.href = 'https://www.site.com';
    }
    else if (fraseLowerCase.includes('desenvolvimento de')) {
        window.location.href = 'https://www.site.com';
    }
    else if (fraseLowerCase.includes('políticas públicas')) {
        window.location.href = 'https://www.site.com';
    }
    else if (fraseLowerCase.includes('parcerias e colaborações')) {
        window.location.href = 'https://www.site.com';
    }
    else if (fraseLowerCase.includes('desafios e oportunidades')) {
        window.location.href = 'https://www.site.com';
    }
    else if (fraseLowerCase.includes('ação coletiva')) {
        window.location.href = 'https://www.site.com';
    }
    }  

    function mostrarPopup() {
        // Adiciona a classe ao corpo quando o pop-up é aberto
        // Exibe o pop-up
        document.getElementById('popup').style.display = 'block';

    }

    function fecharPopup() {
        // Fecha o pop-up
        document.getElementById('popup').style.display = 'none';

    }