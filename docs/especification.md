# Especificações do Projeto

A aplicação utilizará tecnologias web para criar uma plataforma acessível através de navegadores em dispositivos desktop e móveis. O desenvolvimento envolverá linguagens como HTML, CSS e JavaScript tanto para o front-end quanto para o back-end. Além disso, um banco de dados será utilizado para armazenar informações relacionadas a clínicas, ONGs e avaliações de usuários. Medidas rigorosas de segurança e proteção de dados serão implementadas para assegurar a privacidade dos usuários.

Diante dos fatos mencionados, esta aplicação será parte de um amplo e diversificado ecossistema dedicado ao cuidado e apoio às pessoas com TEA e outros transtornos relacionados. Seu objetivo principal é conectar os diversos envolvidos e simplificar a busca por serviços e informações cruciais.

## Personas

Maria, Idade: 35 anos
Descrição: Maria é mãe de um jovem com TEA e comorbidades. Ela está em busca de clínicas que ofereçam terapias específicas para o seu filho. Maria valoriza uma plataforma que forneça informações detalhadas sobre tratamentos e a possibilidade de entrar em contato com outros pais para trocar experiências.

Lucas, Idade: 28 anos 
Descrição: Lucas é um terapeuta que trabalha com crianças e adultos com TEA e comorbidades. Ele está à procura de clínicas especializadas onde possa encaminhar seus pacientes para tratamentos específicos. Lucas valoriza uma plataforma que apresente opções de clínicas e informações sobre suas abordagens terapêuticas. 

Ana, Idade: 22 anos 
Descrição: Ana está estudando psicologia e busca clínicas para seu estágio supervisionado que atendam pessoas com TEA e comorbidades. Ela procura uma plataforma que liste clínicas e ofereça informações sobre as populações atendidas. 

Sofia, Idade: 30 anos 
Descrição: Sofia é pesquisadora em saúde e está interessada em estudar os tratamentos disponíveis para TEA e comorbidades. Ela busca uma plataforma que reúna informações sobre clínicas que possam ser úteis para sua pesquisa.

Carlos, Idade: 45 anos 
Descrição: Carlos é professor de uma escola inclusiva e está em busca de clínicas que ofereçam suporte para seus alunos com TEA e comorbidades. Ele valoriza uma plataforma que apresente opções de clínicas e recursos educacionais relacionados.

Vanessa, Idade: 37 anos
Descrição: Vanessa é uma mãe solteira dedicada a cuidar de seu filho que possui Transtorno do Espectro Autista (TEA). Ela enfrenta desafios significativos devido à complexidade de cuidar de seu filho sozinha e à falta de informações sobre tratamentos e métodos educacionais adequados para o desenvolvimento dele. Vanessa está em busca de uma plataforma que possa fornecer informações abrangentes sobre os cuidados de seu filho e orientações valiosas para apoiar seu desenvolvimento futuro.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
