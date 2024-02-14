$(document).ready(function () {
    $(".container")
        .mouseenter(function () {
            $(".card").stop().animate(
                {
                    top: "-90px",
                },
                "slow"
            );
        })
        .mouseleave(function () {
            $(".card").stop().animate(
                {
                    top: 0,
                },
                "slow"
            );
        });

    let button = document.getElementById('no');
    let height = window.innerHeight - 100;
    let width = window.innerWidth - 100;

    button.addEventListener('mouseover', function () {
        button.style.position = "absolute";

        // Definindo os limites
        let topLimit = 0;
        let leftLimit = 0;
        let bottomLimit = window.innerHeight - button.clientHeight;
        let rightLimit = window.innerWidth - button.clientWidth;

        // Gerando coordenadas dentro dos limites
        let randomTop = Math.max(topLimit, Math.min(bottomLimit, Math.random() * (bottomLimit - topLimit)));
        let randomLeft = Math.max(leftLimit, Math.min(rightLimit, Math.random() * (rightLimit - leftLimit)));

        button.style.top = randomTop + 'px';
        button.style.left = randomLeft + 'px';
    });

    button.addEventListener('mouseleave', function () {
        // Adicionando um atraso de 10 segundos (10000 milissegundos) antes de voltar à posição original
        setTimeout(function () {
            // Animando o retorno à posição original
            button.style.position = "static"; // Volta ao fluxo normal do documento
        }, 1000); // 10000 milissegundos = 10 segundos
    });
});
