# Do que se trata esse repositório
Aqui vou criar e descrever um pequeno projeto com o objetivo de complementar meus estudos em react, mais especificamente com os react-hooks.
Para tal, irei criar vários projetos, cada um para um determinado hook.

[Link para a documentação](https://pt-br.reactjs.org/docs/hooks-intro.html)

# O que instalar
- [NodeJS](https://nodejs.org/en/)
- [yarn - opcional](https://yarnpkg.com/)

# O que são os hooks
Os hooks permitem que a aplicação se ligue aos estados e ciclos de vida do react, a partir de componentes funcionais.
De uma forma mais simples, isso quer dizer que os hooks interagem com nossa aplicação de forma dinâmica, controlando variáveis ou ações.

# Comum a todos os projetos
Para todos os projetos será necessário digitar 
```sh
$ yarn create react-app NOME_DO_PROJETO
```

Sendo que onde está `NOME_DO_PROJETO` você deve trocar pelo nome do projeto em questão

Para inicializar os projetos, entre na pasta do mesmo pelo terminal e utilize o comando 
```sh
$ yarn start
```

Todos os projetos serão simples, e sem estilizações. Tendo a finalidade exclusiva de estudar os hooks. Logo alguns arquivos gerados pelo `create react-app` serão apagados. São eles:

```sh
NOME_DO_PROJETO/src/App.css
NOME_DO_PROJETO/src/App.test.js
NOME_DO_PROJETO/src/index.css
NOME_DO_PROJETO/src/logo.svg
NOME_DO_PROJETO/src/setupTests.js
NOME_DO_PROJETO/src/serviceWorker.js
NOME_DO_PROJETO/README.md
```
O arquivo `App.js` ficará com o seguinte código inicial

```JavaScript
import React from 'react';

function App() {
  return (
    <div>
      Olá mundo
    </div>
  );
}

export default App;
```

E o arquivo `index.js` ficará:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Todo hook do react é importado da seguinte forma

```JavaScript
import {nomeDoHook} from 'react';
```

Claro que como o react sempre deve ser importado também, teremos sempre:

```JavaScript
import React, {nomeDoHook} from 'react';
```

# Projeto use-state

## Utilidade do hook
O useState serve para guardar um estado. De forma simples, ele guarda o valor de uma váriavel e também pode alterá-la.

O use state possui a seguinte sintax:

```JavaScript
const [variable, setVariable] = useState(initialValue);
```

Ou seja, o useState retorna um array com o valor da variável e uma função para controlá-la e também define um valor inicial para essa variável.

Caso queira modificar o valor de `variable` basta usar a função `setVariable` da seguinte forma:

```JavaScript
setVariable(NOVO_VALOR);
```

O legal disso é que sempre que o valor for alterado o react irá reenderizar a DOM automaticamente.

## O projeto
Dentro do arquivo App.js vamos escrever um projeto simples, que terá um botão que quando clicado irá mudar o valor o valor da variável retornada pelo hook. Esse valor irá aparecer em um texto logo acima do botão

```JavaScript
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} >Add +1</button>
    </div>
  );
}

export default App;
```

<img src='./images/figure001.gif' width='200' />


# Projeto use-effect
## Utilidade do hook
é um hook de efeito. Sempre que algo pré-determinado acontecer na aplicação ele irá executar

Esse hook consegue exercer duas funções diferentes (que me interessam kkk)

### Na montagem do componente
```JavaScript
useEffect(() => {
  código...
}, []);
```

Com essa sintaxe ele executa o código assim que o componente é montado.

### Na atualização do componente

```JavaScript
useEffect(() => {
  código
}, [vigia]);
```

Com essa sintaxe ele executará assim que a variável `vigia` for modificada, fazendo com que o `código` será executado.

## O projeto
Vou construir uma aplicação dentro do `App.js` que mostrará alguns `console.log` somente para poder compreendermos como funciona

```JavaScript
import React, {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('montagem do componente');
  }, []);
  
  useEffect(() => {
    console.log('atualização do componente');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} >Add +1</button>
    </div>
  );
}

export default App;

```

<img src='./images/figure002.gif' width='300' />

Veja que no inicio ele também mostra a atualização do componente, mas isso é porque assim que o componente é gerado o valor de `count` é atribuído, logo isso é uma mudança na variável, por isso ele executa.



# Projeto use-context

## Utilidade do hook
## O projeto


# Projeto use-reducer
## Utilidade do hook
## O projeto


# Projeto use-callback
## Utilidade do hook
## O projeto


# Projeto use-memo
## Utilidade do hook
## O projeto


# Projeto use-ref
## Utilidade do hook
## O projeto


# Projeto use-imperative-handle
## Utilidade do hook
## O projeto


# Projeto use-layout-effect
## Utilidade do hook
## O projeto


# Projeto use-debug-value
## Utilidade do hook
## O projeto

