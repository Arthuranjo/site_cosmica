function mostrarDetalhes(produtoId) {
    // Dados dos produtos
    const produtos = {
        1: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA TRANSVERSAL AFETO",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            
        },
        2: {
            img: "imagens/calcaprincipal.png",
            titulo: "BOLSA AFETO 2",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:"
        },
        3: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 3",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:"
        },

        4: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 4",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:"
            
        },

        5: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 5",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:"
        },

    };

    
    const produto = produtos[produtoId];
    document.getElementById("produto-principal-img").src = produto.img;
    document.getElementById("produto-principal-titulo").innerText = produto.titulo;
    document.getElementById("produto-principal-descricao").innerText = produto.descricao;
    document.getElementById("produto-principal-subtitulo").innerHTML = produto.subtitulo;
}
