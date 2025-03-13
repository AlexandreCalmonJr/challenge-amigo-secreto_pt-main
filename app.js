let listaAmigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (!nome || !isNaN(nome) || listaAmigos.includes(nome)) {
        alert('Por favor, digite um nome válido e não repetido.');
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (!listaAmigos.length) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    let amigoSorteado = listaAmigos.splice(Math.floor(Math.random() * listaAmigos.length), 1)[0];
    exibirResultado(amigoSorteado);
    atualizarLista();
}

function exibirResultado(amigo) {
    document.getElementById('resultado').innerHTML = `<li>O amigo sorteado foi: ${amigo}</li>`;
}

function resetarListaAmigos() {
    listaAmigos = [];
    atualizarLista();
}