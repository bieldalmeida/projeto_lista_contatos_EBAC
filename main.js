const form = document.getElementById('form-contato');
const contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    cadastrarContato();
});

function cadastrarContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    const contato = {
        nome: inputNomeContato.value,
        telefone: inputTelefoneContato.value
    };

    contatos.push(contato);
    atualizarTabelaContatos();

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizarTabelaContatos() {
    const tabelaContatos = document.getElementById('tabela-contatos');
    tabelaContatos.innerHTML = '';

    contatos.forEach(function(contato) {
        const linha = document.createElement('tr');
        linha.innerHTML = `<td>${contato.nome}</td><td>${contato.telefone}</td>`;
        tabelaContatos.appendChild(linha);
    });
}
