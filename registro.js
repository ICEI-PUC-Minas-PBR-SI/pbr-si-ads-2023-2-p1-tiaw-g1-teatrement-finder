const apiUrl =
  'https://atypicalconnectclinicas-e-tratamentos.pricillalopes.repl.co';
let ultimoIdPrestadores = 0;
let ultimoIdUsuarios = 0;

function init() {
  getCadastros('prestadores', dados => {
    ultimoIdPrestadores = dados.length;
  });

  getCadastros('usuarios_comuns', dados => {
    ultimoIdUsuarios = dados.length;
  });
}

function cadastrar() {
  let Nome = document.getElementById('nome').value;
  let Email = document.getElementById('email').value;
  let Telefone = document.getElementById('telefone').value;
  let Endereco = document.getElementById('endereco').value;
  let Senha = document.getElementById('senha').value;
  let ConfirmaSenha = document.getElementById('confirmaSenha').value;
  let Prestador = document.getElementById('prestador').checked;
  let prestadorOng = document.getElementById('prestadorOng').checked;

  if (Senha !== ConfirmaSenha) {
    alert('As senhas não estão iguais!');
    return;
  }

  if (Prestador) {
    const prestadores = {
      Id: ultimoIdPrestadores + 1,
      Nome,
      Email,
      Telefone,
      Senha,
      Tipo: prestadorOng ? 'Ong' : 'Clinica',
    };

    inserirCadastro(prestadores, 'prestadores');
  } else {
    const usuarioComum = {
      Id: ultimoIdUsuarios + 1,
      Nome,
      Email,
      Telefone,
      Endereco,
      Senha,
    };

    inserirCadastro(usuarioComum, 'usuarios_comuns');
  }
}

function verificaOpcao(campo) {
  var prestadorCheckbox = document.getElementById('prestador');
  var usuarioComumCheckbox = document.getElementById('usuarioComum');
  var prestadorOng = document.getElementById('prestadorOng');
  var prestadorClinica = document.getElementById('prestadorClinica');
  var prestadorOng = document.getElementById('prestadorOng');
  var prestadorClinica = document.getElementById('prestadorClinica');

  if (campo === 'prestador') {
    if (prestadorCheckbox.checked) {
      usuarioComumCheckbox.checked = false;
      prestadorCheckbox.checked = true;
      prestadorOng.disabled = false;
      prestadorClinica.disabled = false;
    } else {
      usuarioComumCheckbox.checked = false;
      prestadorCheckbox.checked = false;
      prestadorOng.disabled = true;
      prestadorClinica.disabled = true;
      prestadorOng.checked = false;
      prestadorClinica.checked = false;
    }
  } else {
    if (usuarioComumCheckbox.checked) {
      usuarioComumCheckbox.checked = true;
      prestadorCheckbox.checked = false;
      prestadorOng.disabled = true;
      prestadorClinica.disabled = true;
      prestadorOng.checked = false;
      prestadorClinica.checked = false;
    } else {
      usuarioComumCheckbox.checked = false;
      prestadorCheckbox.checked = false;
    }
  }
}

function inserirCadastro(cadastro, rota) {
  fetch(`${apiUrl}/${rota}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cadastro),
  })
    .then(response => response.json())
    .then(data => {
      alert('Registro inserido com sucesso');
    })
    .catch(error => {
      console.error('Erro ao inserir cadastro via API JSONServer:', error);
    });
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
