function validarLogin() {
     // Obtém os valores inseridos pelo usuário
     const email = document.getElementById('email').value;
     const senha = document.getElementById('password').value;
   
     // Obtém os dados do JSON (simulando uma requisição a um servidor)
     const dadosJSON = {
       "usuarios_comuns": [
         {
           "ID": 1,
           "Nome": "Davi Campos Souza",
           "Email": "davi@gmail.com",
           "Telefone": "31 98965-0406",
           "Endereco": "Rua Jose Albino, 534",
           "Senha": "Senha123"
         }
       ],
       "prestadores": [
         {
           "ID": 2,
           "Nome": "Amar Barreiro",
           "Email": "amarbarreiro@gmail.com",
           "Telefone": "31 3333-3333",
           "Senha": "Amar123",
           "Tipo": "Ong",
           "AvaliacaoMedia": null,
           "Avaliacoes": [
             {
               "Nota": 8,
               "Comentario": "Quero expressar minha imensa gratidão pela experiência extraordinariamente positiva com [nome da ONG]. Cada interação com a equipe foi marcada pela dedicação, compaixão e eficácia. Suas iniciativas têm um impacto verdadeiramente transformador, e estou encantado por fazer parte desta jornada. O compromisso visível com a transparência e a excelência só solidifica minha admiração por essa ONG. Continuarei apoiando e recomendando entusiasticamente esta organização notável."
             }
           ],
           "Rating": []
         },
         {
           "ID": 3,
           "Nome": "Fisioclin",
           "Email": "fisioclin@gmail.com",
           "Telefone": "99 9999-9999",
           "Endereco": "Avenida João César de Oliveira, 789",
           "Senha": "123456",
           "Tipo": "Clinica",
           "AvaliacaoMedia": null,
           "Avaliacoes": [
             {
               "Nota": 5,
               "Comentario": "Minha experiência com esta clínica foi regular. Tenho observado aspectos positivos, como uma rede de profissionais de saúde abrangente, mas também encontrei desafios relacionados ao tempo de espera para agendamento de consultas. A comunicação poderia ser mais clara em algumas situações. No geral, é um serviço que atende às minhas necessidades, mas há espaço para melhorias na eficiência e na transparência."
             }
           ],
           "Rating": []
         }
       ]
     };
   
     // Verifica se as credenciais existem no JSON
     const usuarioEncontrado = dadosJSON.usuarios_comuns.find(user => user.Email === email && user.Senha === senha);
     const prestadorEncontrado = dadosJSON.prestadores.find(user => user.Email === email && user.Senha === senha);
   
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
   