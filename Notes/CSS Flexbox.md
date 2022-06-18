# CSS Flexbox

- Suporte

  - Foi projetado como um modelo de layout unidimensional e como um método que pode oferecer distribuição de espaço entre itens em uma interface e recursos de alinhamento.

  # Flex Container

  - É a tag que envolver os itens, será nela que iremos aplicar a propriedade "display:flex". Transforma todos os seus itens filhos em flex itens.
  - display, flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content

  # Flex Item

  - São os elementos filhos diretos do Flex Container. E também podem se torna Flex Container:
  - flex-item1 > flex-item3 > flex-item3
  - Propriedades relacionadas: flex-grow, flex-basis, flex-shrink, flex, order, align-self
  
- Flex-Direction

  - É a propriedade que estabelece o eixo principal do container, definido assim a direção que os flex items são colocados no flex container.
  - eixos (row: padrão) sentido padrão
  - row-reverse: sentido oposto: 4, 3, 2, 1
  - column: ordenação de cima para baixo
  - column-reverse: ordenação inversa

# Flex-wrap 

- É a propriedade que define se os itens devem ou não quebrar a linha. Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo
  - nowrap: é o padrão, não permite quebra de linha
  - wrap: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado.
  - wrap-reverse : permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porém na direção contrária da linha, acima. (1, 2, 3, 4 -> 5(acima na linha), 1, 2, 3, 4,).

# Flex Flow

- É um atalho para as propriedades flex-direction e flex-wrap. Porém seu uso não é muito comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap, que é nowra

​							