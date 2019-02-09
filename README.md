# Ilegra-Desafio
Desafio no processo de seleção da Ilegra - Criar uma alpicação Java para interpretar arquivos e criar relatórios e criar uma interface para a API https://swapi.co/ com Angular

## Interpretador de arquivo e gerador de relatório em Java

Uso:

É preciso que o Java esteja instalado na máquina

Faça o download do arquivo `reader-1.0.0.jar`, você pode clonar o projeto inteiro ou fazer o download apenas do arquivo com o comando

```shell
wget https://raw.githubusercontent.com/Costamilam/Ilegra-Desafio/master/java-reader/reader-1.0.0.jar
```

Para iniciar a aplicação abra um terminal na pasta do arquivo e execute o comando

```shell
java -jar reader-1.0.0.jar
```

## Aplicação Angular consumindo a API https://swapi.co/

Uso

Pode acessar a aplicação online pelo link https://costamilam.github.io/Ilegra-Desafio/Angular-SW-UI/dist/sw-ui/films

Rodando a aplicação localmente

Faça o download da pasta `dist/sw-ui`, você pode clonar o projeto inteiro ou fazer o download apenas dos arquivos necessários com o comando

```shell
wget https://raw.githubusercontent.com/Costamilam/Ilegra-Desafio/master/master/Angular-SW-UI/dist/sw-ui/3rdpartylicenses.txt && wget https://raw.githubusercontent.com/Costamilam/Ilegra-Desafio/master/master/Angular-SW-UI/dist/sw-ui/es2015-polyfills.12eccedba99646c7daca.js && wget https://raw.githubusercontent.com/Costamilam/Ilegra-Desafio/master/master/Angular-SW-UI/dist/sw-ui/favicon.ico && wget https://raw.githubusercontent.com/Costamilam/Ilegra-Desafio/master/master/Angular-SW-UI/dist/sw-ui/index.html && wget https://raw.githubusercontent.com/Costamilam/Ilegra-Desafio/master/master/Angular-SW-UI/dist/sw-ui/main.115ddbd0cdf4f0fa3839.js && wget https://raw.githubusercontent.com/Costamilam/Ilegra-Desafio/master/master/Angular-SW-UI/dist/sw-ui/polyfills.407a467dedb63cfdd103.js && wget https://raw.githubusercontent.com/Costamilam/Ilegra-Desafio/master/master/Angular-SW-UI/dist/sw-ui/runtime.a5dd35324ddfd942bef1.js && wget https://raw.githubusercontent.com/Costamilam/Ilegra-Desafio/master/master/Angular-SW-UI/dist/sw-ui/styles.fe9fe355bcecb6d43540.css
```

Para iniciar a aplicação é necessário um servidor HTTP

Se tiver o PHP instalado pode usar o comando a baixo, caso a porta 8000 estiver ocupada, use outra

```shell
php -S localhost:8000
```