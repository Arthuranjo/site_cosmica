let detalhesVisiveis = false;  


function mostrarDetalhes(produtoId) {
    const produtos = {
        1: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA TRANSVERSAL AFETO",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valoriza o meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Couro", "Camursa", "Feito com roupas"]
        },
        2: {
            img: "imagens/calcaprincipal.png",
            titulo: "BOLSA AFETO 2",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valoriza o meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["tecido", "Preto", "Bicolor"]
        },
        3: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 3",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valoriza o meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Alguma coisa", "alguma coisa", "Outra coisa"]
        },
        4: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 4",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valoriza o meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["coisa um", "Coisa dois", "Coisa tres"]
        },
        5: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 5",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valoriza o meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Detalhes 1", "Detalhes 2", "Detalhes 3"]
        }
    };

    
    const produto = produtos[produtoId];
    
    
    document.getElementById("produto-principal-img").src = produto.img;
    document.getElementById("produto-principal-titulo").innerText = produto.titulo;
    document.getElementById("produto-principal-descricao").innerText = produto.descricao;
    document.getElementById("produto-principal-subtitulo").innerHTML = produto.subtitulo;

    
    const listaDescricao = document.getElementById("lista-descricao");
    listaDescricao.innerHTML = '';  
    produto.detalhes.forEach(detalhe => {
        const li = document.createElement('li');
        li.textContent = detalhe;
        listaDescricao.appendChild(li);
    });

   
    detalhesVisiveis = true;
    document.getElementById("mostrarDetalhesBtn").style.display = 'none'; 
    document.getElementById("mostrarMenosBtn").style.display = 'inline-block'; 
    
     document.getElementById("mostrarDetalhesBtn").onclick = function() {
        mostrarDetalhes(produtoId);
    };
}

function mostrarMenosDetalhes() {
    document.getElementById("lista-descricao").innerHTML = '';
    detalhesVisiveis = false;
    document.getElementById("mostrarDetalhesBtn").style.display = 'inline-block'; 
    document.getElementById("mostrarMenosBtn").style.display = 'none'; 
}

function mudarImagem(imagem) {
    document.getElementById("produto-principal-img").src = imagem;
}








