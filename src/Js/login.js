const getListaUsuarios = async ()=> {
    const urlBase = "https://json-server-vercel-liart.vercel.app/";
    const headers = { "Content-Type": "application/json",}
    const url = urlBase + '/usuario';
    const lst = await  fetch(url, { method: 'GET', headers: headers});
    return await lst.json();
  }
  
  const getUsuarioLogin = async (email,password)=> {
    let retorno = false;
    const users = await getListaUsuarios();
    if (users != null && users !== undefined && users.length > 0) {
        users.forEach((user) => {
            if (user.email == email && user.password == password) {
                console.log('entrou');
                retorno = true;
            }
      });
    }
    return retorno;
  }
  
  
  function block(form){
    return false;
  }

const LoginForm = async () => {
    console.log('Entrou na função LoginForm');  // Adicionado log
  
    let valid = true;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    console.log('Email:', email);  // Adicionado log
    console.log('Password:', password);  // Adicionado log
  
    if (!email || !password) {
      alert('Preencha todos os campos obrigatórios.');
      valid = false;
    }
  
    if (email.toLowerCase() !== 'davi@gmail.com' || password !== '123456') {
      alert('Usuário ou senha inválidos.');
      valid = false;
    }
  
    if (valid) {
      console.log('Realizando login...');  // Adicionado log
      // Certifique-se de que a função getUsuarioLogin está implementada corretamente
      const login = await getUsuarioLogin(email, password);
      if (!login) {
        alert('Usuário ou senha inválidos.');
        valid = false;
      }
      if (login) {
        window.location.href = 'template.html';
      }
    }
  
    console.log('Valid:', valid);  // Adicionado log
    return valid;
  };
  
  const btn = document.getElementById("btn");
  btn.addEventListener("click", async () => {
    console.log('Botão clicado');  // Adicionado log
    LoginForm();
  });
  
  const myTteste = () => {
    document.getElementById("email").value = 'davi@gmail.com';
    document.getElementById("password").value = '123456';
  };
  