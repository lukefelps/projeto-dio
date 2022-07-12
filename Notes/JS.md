# História JS

- Interpretada
- Baseada em Protótipos
- Multiparadigma
- Comumente utilizada em aplicações web cliente-side
- Segue o padrão ECMAScript



# Aplicações

- Web
- Mobile
- Smartwatches
- Games
- Internet of Thing
- APIs



# DOM

- Document Object Model
- Estrutura dos elementos dentro da janela

# Frameworks e Bibliotecas

- VueJS
- Angular
- React
- jQuery



# Operadores de atribuição

- =  (ex: x = y)
- += (ex: x += y, x= x + y)
- *= (ex: x *= y, x=x * y )
- /= (ex: x / y=, x = x / y)
- %= (ex: x % = y, x = x % y)

# Tipos de Operadores

- +(adição)
- -(subtração)
- *(Multiplicação)
- **(Exponencial)
- /(Divisão)
- %(Módulo)
- ++(Incrementar)
- --(Decrementar)

# Comparação

- ==(igual a)
- ===(mesmo valor e tipo)
- !=(diferente)
- !==(valor e tipos diferentes)
- maior que (>)
- menor que (<)
- maior ou igual(>=)
- menor ou igual(<=)

# Lógica

- && ("e" lógico)
- || ("ou" lógico)
- !  ("não" lógico)

# Condicional 

- (condition) ? expression1: expression2
- if ternário



# Variáveis 

- var(global) e let (bloco)
- Não pode redeclarar, mas podemos reatribuir
- CamelCase



# Constantes

- Declara em SNAKE_UPPER_CASE
- Escopo de bloco
- Não faz hoisting
- ex (cont FIRST_NAME)
- Não pode redeclarar nem retribuir o valor de uma constante



# Estruturas de dados

- Tipos primitivos (numbers, strings, boolean, null e undefined)
- Composite/Nao-primitivo (objects, arrays)

# Arrays

- Lista iterável de elementos

- push, pop(ultimo), shift (primeiro), unshift(adiciona no primeiro)

- Existem varios metodos

  



# Palíndromo

- Frase ou palavra que se pode ler, indiferentemente da esquerda para a direita ou vice-versa;



# Função autoinvocavel

- Função anonima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.
- Também pode ser utilizada com parametros ou armazenada em uma variável.

# Callbacks

- é uma função passada como argumento para outra.



# Arrays

- Spread: uma forma de lidar separadamente com elementos
  -  O que era parte de um array se torna um elemento independente
- Rest: combinar argumentos em um array
  - O que era um elemento independente se torna parte de um array

# Objetos

- Object destructuring 
  - Entre chaves , podemos filtrar apenas os dados que nos interessam em um objeto

​	

# Switch/case

- Equivale a uma comparação de tipo e valor (===)
- Sempre precisa de um valor "default"
- Ideal para quando se precisa comparar muitos valores.



# This 

- A palavra reservada this é uma referencia de contexto.
- Call (é possivel passar paramentros para essa função separando-os por vírgulas).
- Apply (dentro de um array)
- Bind (clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro).



# Estrutura Map

- Uma coleção de arrays no formato (chave e valor)
- Pode ser iterado por um for...of
  - set (adicionar elementos)
  - get (chegar valor de)
  - delete (deletar valor com chave)
- Map vs Objeto
  - Maps podem ter chaves de qualquer tipo;
  - Maps possuem a propriedade lenght;
  - Maps são fáceis de iterar
  - Utilizado quando o valor das chaves é desconhecido;
  - Os valores tem o mesmo tipo
- Set
  - São estruturas que armazenam apenas valores únicos
  - Não se repetem nunca
  - add (adicionar)
  - .has (ver o valor)
  - delete (deletar)
- Set vs Array
  - Possui valores unicos
  - Em vez da propriedade lenght, consulta-se o numero de registro pela propriedade size;
  - Não possui os métodos, map, filter, reduce etc.

# Método Map

- Cria um novo array
- Não modifica o array original
- Realiza as operações em ordem
- Sintaxe (array.map(callback, thiArg))
- callback (item, index, array)
- Callback: função a ser executada em cada elemento
- thiArg(opcional): valor de "this" dentro da função callback
- map vs forEach (valor de retorno, considere se o array auxiliar será necessário)
- Reduce (executa uma função em todos os elementos do array, retornando um valor único)
- array.reduce (callbackFn, initialValue)

# Tratamento de erros

- Error do ECMAScript
  - Erros que ocorrem em tempo de execução
  - Composto por: Mensagem, nome, linha, call Stack
- DOMException
  - Erros relacionados ao Documento Object Model
- throw e return
- try/catch
- Finally 

#  Javascript Assíncrono

- Promises 
  - é um objeto de processamente assincrono, inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.
  - 3 estados ( pending, fulfilled, rejected)
- Async/await
  - Funções assincronas precisam dessas duas palavras chaves
- APIs (Application Programming Interface)
  - Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end, você consegue acessá-la por meio de URLs.
  - JSON: JavaScript Object Notation
- fetch - retorna uma promise, lembrar de usar await































