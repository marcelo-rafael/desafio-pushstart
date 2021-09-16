# Desafio Front End

O desafio é criar um site responsivo mobile-first que apresenta conteúdo dinâmico, seguindo as referências de um mockup interativo (algumas telas tem conteúdo no scroll).

O código fonte deverá ser disponibilizado em um repositório no GitHub, Bitbucket ou GitLab, acompanhado de instruções de uso.

Os requisitos ausentes na versão final devem estar listados na entrega do desafio. O candidato é livre para implementar recursos extra ou melhorias.

## Requisitos Técnicos

O site poderá ser desenvolvido com React, Angular, Vue.js, ou qualquer outra biblioteca moderna. Devem ser suportadas as versões mais modernas de Chrome, Firefox, Safari e Edge, em desktop e dispositivos móveis. Suporte a IE11 considera-se um plus.

O desenvolvedor fica livre para escolher bibliotecas adicionais para o que for necessário, mas espera-se que isso seja feito de forma adequada.

O mockup interativo deverá ser usado como referência para as interações e para a criação do layout responsivo mobile-first. O desenvolvedor é livre para criar as adaptações necessárias para telas maiores.

## Lógica e Fluxo

O fluxo de telas deverá ser o mesmo apresentado no mockup interativo. As telas de Login e de Feedback tem livre acesso; a tela da Timeline deverá ser acessível apenas para usuários logados.

O formulário de login deve realizar a autenticação através de uma chamada à API (POST /login), na qual é retornada uma chave de acesso para uso nas chamadas protegidas.

A tela de Feedback deverá validar o preenchimento dos campos e enviar esses dados através de uma chamada à API (POST /feedback). O usuário deverá ser notificado em caso de erro ou de sucesso.

A timeline mostra uma listagem de posts (não se esqueça de dar scroll no mockup) retornada por uma chamada protegida à API (GET /timeline).

## Chamadas à API

A interação com o back end é feita através de uma API Rest.

Quando uma requisição retornar uma resposta, ela será formatada em JSON. Quando houver erro na requisição (HTTP status code diferente de 200), a resposta incluirá detalhes do erro ocorrido.

Quando uma requisição exigir parâmetros, eles devem ser formatados em JSON e enviados no corpo da requisição.

Para realizar chamadas protegidas, o token obtido através do login deverá ser enviado no header X-Authorization da requisição.

As chamadas listadas abaixo tem seu caminho relativo ao link: <https://teste.pushstart.com.br/api/>

## POST /feedback

Parâmetros
{
  "name": "Drax", // O nome, com pelo menos 3 caracteres
  "email": "drax@gog.com",  // O e-mail, deve ser válido
  "message": "Why no login?"  // A mensagem, com pelo menos 10 caracteres
}

## POST /login

Parâmetros
{
  "username": "ash", // O usuário de acesso disponibilzado
  "password": "butterfree"  // A senha de acesso disponibilizada
}
Resposta
{
  "token": "rKlEuxcYJT" // O token a ser utilizado nas chamadas protegidas
}

## GET /timeline (protegida)

Resposta
O exemplo abaixo ilustra todos os tipos disponíveis de posts possíveis. Note que esse exemplo é o mesmo ilustrado no mockup interativo.

[
  {
    author: {
      name: "Mutante Cable",
      avatar:
        "https://teste.pushstart.com.br/uploads/avatars/855923325fa23283dda6da090d10fdf2.png"
    },
    createdAt: 1531232400,
    type: "image",
    data: {
      text: "Quem aí já assistiu filmes do Deadpool?",
      image:
        "https://teste.pushstart.com.br/uploads/images/3d4b2ca4aea7c2058d39044dec8306a6.png"
    },
    likes: 12
  },
  {
    author: {
      name: "Pikachu",
      avatar:
        "https://teste.pushstart.com.br/uploads/avatars/9ce44f88a25272b6d9cbb430ebbcfcf1.png"
    },
    createdAt: 1531221502,
    type: "banner",
    data: {
      text:
        "Todos temos o direito de escolher ficar dentro da pokebola ou não. Eu apoio essa ideia!"
    },
    likes: 22
  },
  {
    author: {
      name: "Jiraya",
      avatar:
        "https://teste.pushstart.com.br/uploads/avatars/855923325fa23283dda6da090d10fdf2.png"
    },
    createdAt: 1531220033,
    type: "video",
    data: {
      text: "Vazou o novo episódio de GOT!!!",
      cover:
        "https://teste.pushstart.com.br/uploads/videos/4a1a27296188c273f6733ead4fe4eff6.png",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    likes: 37
  },
  {
    author: {
      name: "Pikachu",
      avatar:
        "https://teste.pushstart.com.br/uploads/avatars/9ce44f88a25272b6d9cbb430ebbcfcf1.png"
    },
    createdAt: 1531220097,
    type: "banner",
    data: {
      text: "Qual pokemon inicial você escolheria para iniciar sua jornada?",
      closesAt: "1545739200",
      options: [
        {
          value: "Bulbassauro",
          votes: 540
        },
        {
          value: "Charmander",
          votes: 860
        },
        {
          value: "Squirtle",
          votes: 600
        }
      ]
    },
    likes: 54
  }
];
