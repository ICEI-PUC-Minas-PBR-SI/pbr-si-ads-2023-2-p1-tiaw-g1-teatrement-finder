// Suponha que você tenha uma lista de serviços cadastrados e uma lista de usuários avaliadores
let servicosCadastrados = [
    { id: 1, nome: 'Clinica 1', descricao: 'Descrição do Clinica 1', avaliacoes: [] },
    { id: 2, nome: 'Clinica 2', descricao: 'Descrição do Clinica 2', avaliacoes: [] }
];

let usuariosAvaliadores = [
    { nome: 'Usuário 1' },
    { nome: 'Usuário 2' }
];

// Função para permitir que um usuário avalie um Clinica
function avaliarServico(usuario, servico, avaliacao) {
    // Verifica se o Clinica existe
    const servicoEncontrado = servicosCadastrados.find(s => s.id === servico.id);

    if (servicoEncontrado) {
        // Adiciona a avaliação ao Clinica
        servicoEncontrado.avaliacoes.push({ usuario: usuario.nome, avaliacao: avaliacao });
        console.log(`O Clinica '${servico.nome}' foi avaliado por '${usuario.nome}' com nota ${avaliacao}`);
    } else {
        console.log('Clinica não encontrado');
    }
}

// Exemplo de uso: um usuário avaliando um Clinica
let usuarioAvaliador = usuariosAvaliadores[0]; // Pode ser qualquer usuário avaliador
let servicoAvaliado = servicosCadastrados[0]; // Pode ser qualquer Clinica cadastrado

avaliarServico(usuarioAvaliador, servicoAvaliado, 4); // Avaliação do Clinica com nota 4