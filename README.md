# 🧩 Tarefa de Funções em JavaScript

Projeto educativo focado na **prática de funções em JavaScript**, ideal para quem está iniciando ou consolidando a base da linguagem. Os exercícios evoluem do **básico ao intermediário**, trabalhando lógica, parâmetros, retorno e manipulação de dados.


---

## 🎯 Objetivo

* Entender como **criar e utilizar funções**
* Trabalhar com **parâmetros e retorno**
* Aplicar **condicionais e laços**
* Resolver problemas comuns do dia a dia com JavaScript

---

## 🧠 Conceitos Abordados

✔ Funções tradicionais e Arrow Functions
✔ Condições (`if / else`, operador ternário)
✔ Operações matemáticas
✔ Strings e Arrays
✔ Boas práticas de lógica

---

## 📂 Estrutura do Projeto

```
📁 js-funcoes
 ┣ 📄 index.js   # Exercícios resolvidos
 ┣ 📄 README.md  # Documentação do projeto
```

---

## 📝 Lista de Exercícios

### ➕ Soma de Dois Números

Cria uma função que recebe dois valores e retorna a soma.

```js
function soma(a, b) {
  return a + b;
}
```

---

### 🧑‍⚖️ Verificar Maioridade

Recebe uma idade e retorna se a pessoa é maior ou menor de idade.

```js
function verificarIdade(idade) {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
}
```

---

### 🌡️ Conversor de Temperatura

Converte Celsius para Fahrenheit.

```js
const celsiusParaFahrenheit = (c) => (c * 9/5) + 32;
```

---

### 🔢 Par ou Ímpar

Identifica se um número é par ou ímpar.

```js
function parOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}
```

---

### 📊 Média de Notas

Calcula a média de três notas.

```js
function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
```

---

### 🔤 Contador de Letras

Conta quantos caracteres uma palavra possui.

```js
const contarLetras = (texto) => texto.length;
```

---

### 📦 Soma de Array

Soma todos os valores de um array numérico.

```js
function somarArray(numeros) {
  let total = 0;
  for (let num of numeros) {
    total += num;
  }
  return total;
}
```

---

### 💰 Aplicar Desconto

Calcula o valor final após aplicar um desconto percentual.

```js
function aplicarDesconto(valor, desconto) {
  return valor - (valor * desconto / 100);
}
```

---

## ⭐ Desafio Extra — Login Simples

Valida usuário e senha.

```js
function login(usuario, senha) {
  if (usuario === "admin" && senha === "1234") {
    return "Login autorizado";
  }
  return "Acesso negado";
}
```

---

## ▶️ Como Executar

1. Crie um arquivo `index.js`
2. Cole os exercícios
3. Execute no terminal:

```bash
node index.js
```

Ou execute diretamente no **console do navegador**.

---

## 🚀 Próximos Passos

* Integrar com **HTML + DOM**
* Criar formulários interativos
* Evoluir para **funções assíncronas**
* Converter para **React / Next.js**

---

## 👨‍💻 Autor

**Emerson Sabino**
Full Stack Developer

🚀 JavaScript | React | Next.js | TypeScript

---

