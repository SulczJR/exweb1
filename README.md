# exweb1
Está disponível no moodle o arquivo “questao12.zip”, composto pelos
arquivos: sem-imagem.jpg, index.html, estilos.css e comportamentos.js.
No arquivo JS estão disponibilizadas duas “funções”, a primeira está controlando o
comportamento das marcações HTML com id, panel, filter, filters e img. A segunda função
é para controle do header, através das variáveis distanceY (que controla o quanto da barra
de rolagem foi alterado) e shrinkOn (que é o quanto eu quero que role para que eu tome
uma decisão). Dentro da estrutura de decisão, altere o CSS do elemento header através
da variável headerEl, por exemplo,
headerEl.style.backgroudcolor = “black”,
observe que a propriedade css backgroud-color é escrita em javascript sem o hífen (-).
O arquivo estilos.css está vazio, livre para que desenvolva as suas regras de estilos.
O arquivo index.html está todo estruturado e com o arquivo de imagem sem-imagem.jpg
sendo usado para que formate com o CSS.
Primeira tarefa (valor: 1,7):
Faça o header diminuir de tamanho quando a barra de rolagem for direcionada para
baixo e voltar ao seu estado normal quando for direcionada para cima (segunda
função javascript pronta, basta adicionar suas regras de estilos na estrutura de
decisão).
Segunda tarefa (valor: 1,7):
Quando o usuário clicar na opção “Esconder filtros”, o painel de filtros deve ter seu
tamanho diminuído. Quando clicar em “Mostrar filtros” deve ter seu tamanho normal
restaurado (primeira função javascript pronta, basta adicionar suas regras de estilos
na estrutura de decisão). Observe que para deixar o layout ajustado devera
manipular as imagens (a estrutura para capturar e percorrer as imagens já estão
disponíveis no javascript passado, use a informação acima sobre como aplicar o
CSS, para manipulá-las).
Observe que não existe nenhum link e nem button no arquivo HTML, contudo o
usuário sabe que “clicar” é só nesses elementos. Para isso simule o elemento que
será clicado através da propriedade cursor com valor pointer.
Pesquise a propriedade transform com valor a notação funcional rotate
