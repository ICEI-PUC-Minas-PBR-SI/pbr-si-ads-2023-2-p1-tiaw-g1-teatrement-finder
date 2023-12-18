const apiUrl =
  'https://atypicalconnectclinicas-e-tratamentos.pricillalopes.repl.co';

var dadosUsuarios = [];
var dasosPrestadores = [];

function init() {
  getCadastros('prestadores', dados => {
    dadosUsuarios = dados;
  });

  getCadastros('usuarios_comuns', dados => {
    dasosPrestadores = dados;
  });
}
function validarLogin() {
  // Obtém os valores inseridos pelo usuário
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;

  console.log('validalogin');

  // Verifica se as credenciais existem no JSON
  const usuarioEncontrado = dadosUsuarios.find(
    user => user.Email === email && user.Senha === senha
  );
  const prestadorEncontrado = dasosPrestadores.find(
    user => user.Email === email && user.Senha === senha
  );

  if (usuarioEncontrado) {
    alert('Login bem-sucedido como usuário comum!');
    // Redireciona para a página de destino do usuário comum
    window.location.href = 'template.html';
  } else if (prestadorEncontrado) {
    alert('Login bem-sucedido como prestador!');
    // Redireciona para a página de destino do prestador
    window.location.href = 'template.html';
  } else {
    alert('Credenciais inválidas. Verifique seu email e senha.');
  }
  // Retorna false para impedir o envio do formulário, já que você está usando o onsubmit
  return false;
}

function getCadastros(rota, processaDados) {
  fetch(`${apiUrl}/${rota}`)
    .then(response => response.json())
    .then(data => {
      processaDados(data);
    })
    .catch(error => {
      console.error(`Erro ao ler ${rota} via API JSONServer:`, error);
    });
}
