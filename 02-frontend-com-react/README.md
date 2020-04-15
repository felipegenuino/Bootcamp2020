Babel: converter(transpilar) código do react para um código que o browser entenda
webpack: para cada tipo de arquivo (.js, .css, .png) eu vou converter o código de maneira diferente


# Conceitos mais importantes do REACT
 .Componente
 .propriedade
 .estado e imutabilidade

## instalar

- yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli @babel/cli
- Criar e configurar babel.config.js
- criar index.js e adicionar a função soma
- yarn babel src/index.js --out-file public/bundle.js
- criar e configurar o webpack
- rodar yarn webpack --mode development
- instalar yarn add webpack-dev-server -D
- executar: yarn webpack-dev-server --mode-development
- yarn add react react-dom
- yarn add style-load && css-loader
- yarn add file-loader
- Rodandar backend para ter acesso aos dados
- instalar axios yarn add axios
- yarn add @babel/plugin-transform-runtime