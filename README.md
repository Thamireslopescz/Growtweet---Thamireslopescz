# GrowTwitter - Rede Social Estilo Twitter com Programação Orientada a Objetos

![aaaa-removebg-preview](https://github.com/Thamireslopescz/Growtweet---Thamireslopescz/assets/100656019/c3bab35d-55f7-456f-8389-bf66608525df)

## Descrição

GrowTwitter é uma aplicação de rede social, similar ao Twitter, desenvolvida em TypeScript com base em Programação Orientada a Objetos (POO). O projeto foi criado com o objetivo de praticar e aplicar conceitos avançados de POO, utilizando classes e interfaces.

## Funcionalidades

- Cadastro de usuários
- Cadastro de tweets por usuários
- Mecanismo de seguidores entre usuários
- Likes e replies em tweets

## Arquitetura

A estrutura do projeto é organizada da seguinte forma:

```
├── src/
│   ├── controllers/
│   │   ├── FeedController.ts
│   │   ├── TweetsController.ts
│   │   └── UserController.ts
│   ├── data/
│   │   ├── tweets.ts
│   │   └── users.ts
│   ├── middlewares/
│   │   └── userMiddlewares.ts
│   ├── models/
│   │   ├── Like.ts
│   │   ├── Reply.ts
│   │   ├── Tweet.ts
│   │   └── User.ts
│   ├── types/
│   │   └── typesTweet.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação

Para utilizar o GrowTwitter em sua máquina local, siga os seguintes passos:

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/grow-twitter.git
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Execute a aplicação:

```bash
npm start
```

## Uso

Ao executar a aplicação, os tweets e interações serão apresentados no console, conforme definido na estrutura do projeto.

## Testes

Para executar os testes automatizados do projeto, utilize o seguinte comando:

```bash
npm test
```

## Contribuição

O GrowTwitter é um projeto em constante evolução e a comunidade de desenvolvedores é fundamental para torná-lo ainda melhor. Se você quiser contribuir para o projeto, siga os passos abaixo:

### Reportando problemas

Se você encontrar algum bug ou problema, por favor, abra uma issue detalhada, descrevendo passos para reproduzir o erro. Inclua informações sobre o ambiente em que encontrou o problema, como versão do Node.js e sistema operacional.

### Sugestão de melhorias

Se você tiver alguma ideia de como melhorar o GrowTwitter, fique à vontade para abrir uma issue explicando sua sugestão. Adoramos ouvir novas ideias e estamos abertos a discutir e implementar melhorias significativas.

### Envio de Pull Requests

Se você quiser contribuir com código, envie um Pull Request com suas alterações. Certifique-se de seguir as diretrizes de estilo de código do projeto e inclua testes adequados para suas mudanças. Ao enviar um Pull Request, forneça uma explicação clara do problema que sua alteração está resolvendo e detalhe as modificações feitas.

### Desenvolvimento local

Caso queira desenvolver novas funcionalidades, é recomendado criar uma branch separada para suas alterações a partir da branch `main`. Isso ajuda a manter o histórico do projeto organizado e facilita a revisão das suas mudanças.

Agradecemos antecipadamente por qualquer contribuição que você fizer para o GrowTwitter. Sua ajuda é muito apreciada e é o que torna projetos de código aberto como este cada vez melhores! 🌟
