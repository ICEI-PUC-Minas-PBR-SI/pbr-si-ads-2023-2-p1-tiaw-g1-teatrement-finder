# Especificações do Projeto

A aplicação utilizará tecnologias web para criar uma plataforma acessível através de navegadores em dispositivos desktop e móveis. O desenvolvimento envolverá linguagens como HTML, CSS e JavaScript tanto para o front-end quanto para o back-end. Além disso, um banco de dados será utilizado para armazenar informações relacionadas a clínicas, ONGs e avaliações de usuários. Medidas rigorosas de segurança e proteção de dados serão implementadas para assegurar a privacidade dos usuários.

Diante dos fatos mencionados, esta aplicação será parte de um amplo e diversificado ecossistema dedicado ao cuidado e apoio às pessoas com TEA e outros transtornos relacionados. Seu objetivo principal é conectar os diversos envolvidos e simplificar a busca por serviços e informações cruciais.

## Personas

Maria, Idade: 35 anos.
Descrição: Maria é mãe de um jovem com TEA e comorbidades. Ela está em busca de clínicas que ofereçam terapias específicas para o seu filho. Maria valoriza uma plataforma que forneça informações detalhadas sobre tratamentos e a possibilidade de entrar em contato com outros pais para trocar experiências.

Lucas, Idade: 28 anos. 
Descrição: Lucas é um terapeuta que trabalha com crianças e adultos com TEA e comorbidades. Ele está à procura de clínicas especializadas onde possa encaminhar seus pacientes para tratamentos específicos. Lucas valoriza uma plataforma que apresente opções de clínicas e informações sobre suas abordagens terapêuticas. 

Ana, Idade: 22 anos. 
Descrição: Ana está estudando psicologia e busca clínicas para seu estágio supervisionado que atendam pessoas com TEA e comorbidades. Ela procura uma plataforma que liste clínicas e ofereça informações sobre as populações atendidas. 

Sofia, Idade: 30 anos. 
Descrição: Sofia é pesquisadora em saúde e está interessada em estudar os tratamentos disponíveis para TEA e comorbidades. Ela busca uma plataforma que reúna informações sobre clínicas que possam ser úteis para sua pesquisa.

Carlos, Idade: 45 anos.
Descrição: Carlos é professor de uma escola inclusiva e está em busca de clínicas que ofereçam suporte para seus alunos com TEA e comorbidades. Ele valoriza uma plataforma que apresente opções de clínicas e recursos educacionais relacionados.

Vanessa, Idade: 37 anos.
Descrição: Vanessa é uma recente mãe solteira dedicada a cuidar de seu filho que possui Transtorno do Espectro Autista (TEA). Ela enfrenta desafios significativos devido à complexidade de cuidar de seu filho sozinha e à carência de informações sobre tratamentos e métodos educacionais adequados para o desenvolvimento dele. Devido a sua alienação voltado ao Transtorno de seu filho, ela está em busca de uma plataforma que possa fornecer informações abrangentes sobre os cuidados do mesmo e orientações valiosas para apoiar seu desenvolvimento futuro.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Vanessa | Justamente pelo indivíduo ser alienado com a temática do transtorno presente na vida de seu filho, ela possui complicações para cuidar do mesmo e buscar tratamentos/métodos educacionais. Ela busca uma plataforma que possa sanar os problemas e auxilia-la na criação de seu filho. | Conforme o contexto abordado na história do usuário, a plataforma conseguiria disponibilizar informações relativas ao Transtorno de Espectro Autista, disponibilizando conteúdos, estudos, pesquisas que possam mudar, ou melhorar a perspectiva do usuário sobre o modo de criação e abordagem em situações que desenvolveriam seu filho. |

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Carlos | Carlos é professor de uma escola inclusiva e necessitaria de uma plataforma que forneceria uma vasta opção de clínicas que oferecem  suporte para seus alunos com as devidas comorbidades. | A plataforma atenderia a demanda do usuário por fornecer a opção de cadastro de usuários provedores (Ongs/Clínicas) provenientes a funcionalidades e recursos educacionais que auxiliariam a sanar a adversidade do usuário. | 

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Sofia | Sofia, uma pesquisadora na área da saúde, está interessada em investigar os tratamentos disponíveis para Transtorno do Espectro Autista (TEA) e suas comorbidades. Ela está em busca de uma plataforma que centralize informações sobre clínicas que possam contribuir para sua pesquisa. | A plataforma permite fornecer informações de relevância para incrementar dados, eventos e conteúdos genêricos relativos ao TEA, o que atinigiria o propósito do usuário (Sofia). |


Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que quaisquer indivíduos efetuem seu cadastro na plataforma, tendo a necessidade de categorizar o tipo de conta a ser criada: (usuário comum, usuário prestador). Juntamente, a inclusão de informações pessoais, como: (nome, telefone, endereço)  e credenciais de acesso (e-mail, senha).| ALTA | Paulo Arthur Araújo de Andrade |
|RF-002| Incremetação de uma ferramenta de exibição que permite que seja mostrado ao usuário as funcionalidades, procedimentos e serviços oferericos pelo prestador. | UJ FDG | Rafael Nicolas Araújo Custódio |
|RF-003| Disponibilizar um sistema de avaliação para que usuários possam compartilhar feedback sobre clínicas e terapias, contribuindo para a transparência e qualidade das informações. | ALTA | Pricilla Lopes Braga |
|RF-004| Integração de um sistema de autentificação para que somente usuários cadastrados na plataforma consigam acessa-la com suas credenciais (e-mail e senha).  | ALTA | Paulo Arthur Araújo de Andrade |
|RF-005| Garantir a acessibilidade da plataforma em dispositivos móveis, atendendo às necessidades de usuários que preferem acessar informações em movimento. | MÉDIA | Pricilla Lopes Braga |


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



