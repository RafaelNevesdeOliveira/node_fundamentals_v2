# Testes🛠️


- **Teste unitarios:** Definição: Testes unitários são projetados para validar a lógica de programação e o comportamento das menores partes independentes de um sistema, conhecidas como unidades, que geralmente correspondem a funções ou métodos individuais.

Exemplo: Imagine que você tenha uma função soma(a, b) que retorna a soma de dois números. Um teste unitário para essa função poderia verificar se, ao passar 2 e 3 como argumentos, a função retorna 5.

- **Teste de integração:** Definição: Testes de integração verificam como diferentes módulos ou serviços funcionam juntos. O objetivo é garantir que a integração entre as unidades testadas individualmente funcione conforme esperado quando combinadas.

Exemplo: Se você tiver um sistema com duas funções: soma(a, b) e subtrai(a, b), um teste de integração pode envolver a utilização dessas duas funções em conjunto para verificar se elas interagem corretamente. Por exemplo, você poderia somar 2 e 3 para obter 5 e, em seguida, subtrair 1, esperando o resultado 4.

- **Testes e2e:** Definição: Testes End-to-End (E2E) validam o fluxo completo de um aplicativo do início ao fim. Isso significa testar o aplicativo em sua totalidade, incluindo sua interação com o banco de dados, redes, e outras aplicações, para garantir que todos os componentes funcionem juntos como esperado em um ambiente que simula o uso real.

Exemplo: Para um aplicativo de e-commerce, um teste E2E pode simular o percurso completo de um cliente, desde o login no aplicativo, selecionando um produto, adicionando-o ao carrinho de compras, realizando o pagamento, até a confirmação do pedido. Este teste verificará se todas as etapas do processo interagem corretamente e resultam em uma experiência de usuário final sem falhas.

# A Pirâmide de Testes

A Pirâmide de Testes é um conceito que ajuda a organizar a estratégia de testes de software em diferentes níveis, priorizando tipos de testes baseados em eficiência, velocidade e custo. Ela foi popularizada por Mike Cohn e é frequentemente usada para orientar o desenvolvimento de testes automatizados. A pirâmide é dividida geralmente em três principais camadas:

## Base da Pirâmide: Testes Unitários

- **Descrição:** Formam a base da pirâmide e são o maior número de testes em um projeto. São rápidos de executar e focam em pequenas unidades de código, como funções ou métodos.
- **Objetivo:** Garantir que cada parte isolada do sistema funciona corretamente.

## Meio da Pirâmide: Testes de Integração

- **Descrição:** Situados no meio, esses testes verificam a comunicação e o funcionamento correto entre diferentes módulos, serviços ou sistemas.
- **Objetivo:** Assegurar que as unidades de código, quando combinadas, trabalhem juntas como esperado.

## Topo da Pirâmide: Testes End-to-End (E2E)

- **Descrição:** Localizados no topo, esses testes são menos numerosos devido ao seu alto custo de manutenção e execução mais lenta. Eles simulam o comportamento do usuário final para testar o sistema como um todo.
- **Objetivo:** Verificar se todos os componentes do sistema funcionam juntos na prática, em um ambiente que simula o uso real.

## Importância

A Pirâmide de Testes destaca a importância de ter mais testes unitários do que outros tipos de teste devido à sua rapidez e baixo custo, equilibrando com testes de integração e uma menor quantidade de testes E2E para cobrir aspectos que não podem ser testados em níveis mais baixos. Isso ajuda a criar um processo de desenvolvimento mais eficiente e sustentável, assegurando a qualidade do software enquanto mantém os custos de testes controlados.
