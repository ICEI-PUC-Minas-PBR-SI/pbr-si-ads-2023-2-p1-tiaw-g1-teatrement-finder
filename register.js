// Função para cadastrar um usuário
const cadastrarUsuario = () => {
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("name").value;
    const sobrenome = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("number").value;
    const senha = document.getElementById("password").value;
    const confirmarSenha = document.getElementById("confirmpassword").value;
    const concordaTermos = document.getElementById("agree-term").checked;
    const receberNewsletter = document.getElementById("newsletter").checked;
  
    // Verifica se a senha e a confirmação de senha são iguais
    if (senha !== confirmarSenha) {
      alert("Senha e confirmação de senha não coincidem.");
      return;
    }
  
    // Verifica se o usuário concordou com os termos
    if (!concordaTermos) {
      alert("Você precisa concordar com os termos de serviço.");
      return;
    }
  
    // Cria um objeto representando o usuário
    const usuario = {
      nome,
      sobrenome,
      email,
      numero,
      senha,
      receberNewsletter,
    };
  
    // Armazena o usuário na localStorage (convertendo para JSON)
    localStorage.setItem("usuario", JSON.stringify(usuario));
  
    // Redireciona para a página de template
    window.location.href = 'template.html';
  };
  
  // Adiciona um evento de clique ao botão de cadastrar
  const btnCadastrar = document.querySelector(".btn-primary");
  btnCadastrar.addEventListener("click", cadastrarUsuario);
  