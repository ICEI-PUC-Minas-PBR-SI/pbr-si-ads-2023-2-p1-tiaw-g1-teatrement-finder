// Arquivo: alterarSenha.js

function alterarSenha() {
  // Obtém os valores inseridos pelo usuário
  const email = document.getElementById('email').value;
  const senhaAtual = document.getElementById('senhaAtual').value;
  const novaSenha = document.getElementById('novaSenha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  // Obtém os dados do JSON (simulando uma requisição a um servidor)
  const dadosJSON = {
    usuarios_comuns: [
      {
        ID: 1,
        Nome: 'Davi Campos Souza',
        Email: 'Davi@gmail.com',
        Telefone: '31 98965-0406',
        Endereco: 'Rua Jose Albino, 534',
        Senha: 'Senha123',
      },
    ],
    // ... outros dados do JSON ...
  };

  // Procura pelo usuário comum no JSON
  const usuarioEncontrado = dadosJSON.usuarios_comuns.find(
    user => user.Email === email && user.Senha === senhaAtual
  );

  // Verifica se o usuário foi encontrado e se as senhas novas coincidem
  if (usuarioEncontrado && novaSenha === confirmarSenha) {
    // Atualiza a senha do usuário
    usuarioEncontrado.Senha = novaSenha;
    alert('Senha alterada com sucesso!');
  } else {
    alert(
      'Não foi possível alterar a senha. Verifique suas credenciais e tente novamente.'
    );
  }
}
