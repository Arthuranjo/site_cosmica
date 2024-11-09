let detalhesVisiveis = false;  

function mostrarDetalhes(produtoId) {
    const produtos = {
        1: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA TRANSVERSAL AFETO",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["item c", "item c", "item c"]  
        },
        2: {
            img: "imagens/calcaprincipal.png",
            titulo: "BOLSA AFETO 2",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["item c", "item b", "item c"]  
        },
        3: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 3",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["item b", "item b", "item c"]
        },
        4: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 4",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["item c", "item b", "item c"]
        },
        5: {
            img: "imagens/mochila-principal.png",
            titulo: "BOLSA AFETO 5",
            descricao: "Ao escolher nossas criações, você não está apenas, adquirindo moda, você está fazendo parte de um movimento que valorizao meio ambiente e transforma desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["item a", "item b", "item c"]  
        }
    };

    const produto = produtos[produtoId];

    
    document.getElementById("produto-principal-img").src = produto.img;
    document.getElementById("produto-principal-titulo").innerText = produto.titulo;
    document.getElementById("produto-principal-descricao").innerText = produto.descricao;
    document.getElementById("produto-principal-subtitulo").innerHTML = produto.subtitulo;

    
    const listaDescricao = document.getElementById("lista-descricao");
    listaDescricao.innerHTML = '';  

    if (produto.detalhes && produto.detalhes.length > 0) {
        produto.detalhes.forEach(detalhe => {
            const li = document.createElement('li');
            li.textContent = detalhe;
            listaDescricao.appendChild(li);
        });
    } else {
        listaDescricao.innerHTML = '<li>Nenhum detalhe disponível.</li>';
    }

    
    detalhesVisiveis = true;
    document.getElementById("mostrarDetalhesBtn").style.display = 'none';
    document.getElementById("mostrarMenosBtn").style.display = 'inline-block';  
}

function mostrarMenosDetalhes() {
   
    document.getElementById("lista-descricao").innerHTML = '';
    
    
    detalhesVisiveis = false;
    document.getElementById("mostrarDetalhesBtn").style.display = 'inline-block';  
    document.getElementById("mostrarMenosBtn").style.display = 'none';  
}





