function mostrarDetalhes(produtoId) {
    // Dados dos produtos
    const produtos = {
        1: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 1",
            descricao: "Bolsa transversal com dois bolsos internos, ideal para o seu dia a dia."
        },
        2: {
            img: "imagens/calcaprincipal.png",
            titulo: "BOLSA AFETO 2",
            descricao: "Bolsa compacta com bolso lateral e alças ajustáveis."
        },
        3: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 3",
            descricao: "Bolsa versátil com espaço interno espaçoso e acabamento de alta qualidade."
        },

        4: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 4",
            descricao: "Bolsa transversal com dois bolsos internos, ideal para o seu dia a dia."
        },

        5: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 5",
            descricao: "Bolsa transversal com dois bolsos internos, ideal para o seu dia a dia."
        }
    };

    
    const produto = produtos[produtoId];
    document.getElementById("produto-principal-img").src = produto.img;
    document.getElementById("produto-principal-titulo").innerText = produto.titulo;
    document.getElementById("produto-principal-descricao").innerText = produto.descricao;
}
