// Lista de participantes
let amigos = [];

// Função para adicionar um novo amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();

    // Verifica se o nome é válido
    if (!nomeAmigo) {
        alert("Por favor, insira um nome válido!");
        return;
    }

    // Evita adicionar nomes duplicados
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adiciona o nome à lista
    amigos.push(nomeAmigo);

    // Atualiza a interface
    const li = document.createElement("li");
    li.textContent = nomeAmigo;
    document.getElementById("listaAmigos").appendChild(li);

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos dois participantes para o sorteio!");
        return;
    }

    // Embaralha os nomes
    const sorteio = [...amigos].sort(() => Math.random() - 0.5);

    // Gera os pares do sorteio
    const pares = [];
    sorteio.forEach((amigo, index) => {
        const amigoSorteado = sorteio[(index + 1) % sorteio.length];
        pares.push(`${amigo} tirou ${amigoSorteado}`);
    });

    // Atualiza a interface com os resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores
    pares.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        resultado.appendChild(li);
    });
}

