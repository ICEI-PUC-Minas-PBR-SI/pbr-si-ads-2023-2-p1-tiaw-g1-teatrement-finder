# Testes

Com o objetivo de garantir que o software estivesse em conformidade com os requisitos funcionais e não funcionais definidos para o sistema, realizou-se um processo que envolveu a análise da interação do software com diferentes inputs. Além disso, foram verificados o correto funcionamento de suas funcionalidades e identificados eventuais desvios em relação aos requisitos estabelecidos. Esse procedimento proporcionou uma abordagem mais centrada no usuário, visando assegurar a eficácia e a qualidade do software no contexto do projeto.

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, email, senha e telefone e clica no botão "Continuar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte 2 do cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa seu tipo de usuário (prestador ou comum), data de nascimento e clica em criar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://youtu.be/NYEZtSS4FvQ |

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://youtu.be/NYEZtSS4FvQ |


## Avaliação dos Testes de Software

O software demonstrou estar em grande parte conforme os requisitos funcionais estipulados, evidenciando um alinhamento positivo com as expectativas do projeto.
Ao adotar essas estratégias, o grupo visa não apenas corrigir as falhas identificadas, mas também aprimorar continuamente a solução, garantindo que ela atenda da melhor forma possível às necessidades e expectativas dos usuários finais. Essa abordagem iterativa contribuirá para o desenvolvimento de um software mais robusto, eficiente e alinhado com os objetivos do projeto.

# Testes de Usabilidade
Regular:

Indica uma experiência mediana, com aspectos positivos e negativos equilibrados. Os usuários conseguiram realizar as tarefas, mas houve áreas que precisam de melhoria para proporcionar uma experiência mais fluida.

Bom:

Reflete uma experiência positiva, com boa navegação e usabilidade. Os usuários conseguiram realizar as tarefas de forma eficiente, com poucos ou nenhum obstáculo notável.

Ótimo:

Indica a mais alta satisfação subjetiva. Os usuários tiveram uma experiência excepcional, encontrando a navegação e usabilidade do site altamente intuitivas e eficazes na execução das tarefas propostas.

## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 3                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



