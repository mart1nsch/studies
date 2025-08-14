# Criar RESTful API com Java
  1. Acessar o site https://start.spring.io/ para iniciar um projeto spring boot:  
    - Project: Maven  
    - Language: Java  
    - Spring Boot: Marcar a maior opção que não tenha SNAPSHOT ou algum dado entre parênteses  
    - Project Metadata: Colocar o nome do projeto  
    - Packaging: Jar  
    - Java: 17  
    - Dependencies: Spring Web
    - Clicar em Generate
  2. Controllers:
    - São os responsáveis pelas rotas da API, ele é o responsável por tudo  
    - Nos controllers, para o Spring saber que é um controller, temos que colocar @RestController no topo da classe  
    - Junto com o @RestController, usamos o @RequestMapping("/usuario") para dizer qual a rota que aquele controller cuidará  
    - Dentro da classe, temos que definir cada função de cada tipo de requisição feita, ou seja, GET, POST, PUT, DELETE, etc.  
    - Para isso, usamos a notação também, como por exemplo para o GET, @GetMapping
  3. O arquivo application.properties, dentro de resources é onde ficam as configurações da API, como URL de acesso ao BD, login e senha
  4. Dentro dos resources, temos que criar uma pasta para as migrations, que são as tabelas do BD, o Spring irá criar elas no BD caso não existam ainda
  5. Entidades são as tabelas do BD, elas devem ficar numa package domain, ao lado da package de controllers
  6. Para manipular a tabela, usamos o repository, ele que vai nos dar os métodos necessários para fazermos tudo, ou seja, a classe virá como se fosse a tabela do BD
  7. O repository vai nos dar acesso, a por exemplo, getElementById para filtrarmos um determinado ID
  8. Se quisermos fazer algum Select mais elaborado, temos que montar a função que faz esse filtro mais elaborado dentro do repository