document.addEventListener('scroll', function() {
    var posScroll = window.pageYOffset;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // animated-text vai da esquerda para a direita
    var escalaVelocidade1 = 10; // ,uda a velocidade do animated-text
    var posText1 = (posScroll / maxScroll) * (escalaVelocidade1 + window.innerWidth);
    // n deixa que o texto não saia da tela pra direita
    posText1 = Math.min(window.innerWidth - '20' - document.getElementById('animated-text').offsetWidth, posText1); 
    // n deixa que o texto não saia da tela par esquerda
    posText1 = Math.max(0, posText1);
    document.getElementById('animated-text').style.left = posText1 + 'px';

    // animated-text2 se move da direita para a esquerda
    var escalaVelocidade2 = 10; // contrla a velocidade do animated-text2
    var posText2 = window.innerWidth - ((posScroll / maxScroll) * (escalaVelocidade2 + window.innerWidth));
    // ndeixa que o texto não saia da tela pra esquerda
    posText2 = Math.max(0, posText2);
    // ndeixa que o texto não saia da tela pra direita
    posText2 = Math.min(window.innerWidth - document.getElementById('animated-text2').offsetWidth, posText2);
    document.getElementById('animated-text2').style.left = posText2 + 'px';
});
