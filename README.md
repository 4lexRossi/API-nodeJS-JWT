<h1 align="center">Curso - Desenvolvimento Back-end com Node.js</h1>

Esse repo é uma API de uma série de aulas em back-end da plataforma 
[Digital Innovation One](https://digitalinnovation.one/sign-up?ref=QFX2ZVP4RU)
uma incrivel aula ministrada por [Henrique schreiner](https://www.linkedin.com/in/henriqueschreiner/) com alguns updates meus =D


# node-jwt
Exemplo de API em Node.js usando JWT

## clone o repositório 
```
   git clone https://github.com/4lexRossi/API-nodeJS-JWT.git
```

## Gerando certificados

O algorítmo de encriptação do token usa o conteúdo de arquivos de certificados que contém as chaves pública e privada. Para gerar estes arquivos, execute o arquivo:

```
$ ./generateKeys.sh
```
A senha solicitada pelo comando pode ficar em branco. Os arquivos **_private.key_** e **_public.key_** serão gerados na pasta **_src_**.

## Instalar dependências
```
    npm install
```

## Para iniciar o servidor Express, use o comando:

```
   npm start
```
## com a ferramenta Postman:
```
   Você pode fazer testes de usuarios validando com o token que é gerado, o token expira em 30 segundos, após isso tem que gerar outro, você pode alterar o tempo do token no arquivo config.js

```

## Referências
[Documentação do Express](https://expressjs.com)

[Documentação do JsonWebToken](https://github.com/auth0/node-jsonwebtoken)

[Canal Youtube Sou Dev](https://www.youtube.com/channel/UCFxvsawe-DYiVnbyozJkH5w)