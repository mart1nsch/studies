# Java
  
	## Características
		- POO
		- Fortemente Tipada
		- Funciona em qualquer plataforma
		- Todo arquivo Java que formos escrever, precisa ter uma classe
		- Nome da classe sempre começa com maiúsculo
		- Nome da classe tem que ser igual ao nome do arquivo
		
	## JVM
	  - Java Virtual Machine
		- Ambiente te execução que vai interpretar o ambiente de execução
		- Quando compilamos algo em Java, nos transformamos o código em bytecode
		
	## Variável
	  - Primeiro o tipo de dado da variável, depois o nome e por fim o valor (não obrigatório)
		- int minhaIdade = 23;
		- Também podemos declarar variáveis var, na qual, não precisamos definir o tipo de dados
		- var minhaIdade = 23;
		- Podemos fazer um valor constante numa variável usando final no começo dela
		- final int velocidadeMaxima = 200;
		
	## Tipos
	
		### Números Inteiros
		  - byte: 8 bits, -128 até 127
			- short: 16 bits, -32768 até 32767
			- int: 32 bits, -2147483648 até 2147483647
			- long: 64 bits, -9223372036854775808 até 9223372036854775807
			
		### Números Decimais
		  - float: 32 bits, precisão simples, poucos números após a vírgula
			- double: 64 bits, precisão dupla, muitos números após a vírgula
			
		### Palavras e Frases
		  - String: aspas duplas
			- char: aspas simples, um único caractere
			
		### Lógicos
		  - boolean
			
	## Condicionais
	  - if, else if, else
		
	## Vetores
	  - Estrutura de dados que usamos para armazenar uma coleção de valores do mesmo tipo
		- Criando já com valores designados
		- int[] colecao = {1, 2, 3, 4, 5};
		- Criando sem valores designados mas com tamanho fixo
		- int[] colecao = new int[5];
		
	## ArrayList
	  - Precisa ser importada da java.util.ArrayList
	  - É uma classe
		- Lista dinâmica de elementos, ou seja, é um array sem limite fixo
		- ArrayList<String> nomes = new ArrayList<>();
		- Adicionar no array usando o método add
		- Retornar valor de uma posição do array com o método get
		- Remover com o método remove
		
	## Loops
	  - for, while
		- for (int i=0; i<10; i++) {
		- Também podemos usar um for sobre um array
		- for (int nome : nomes) { 
		- Com o while
		- while (contador < 10) {
		
	## Casting
	  - Permite que convertemos um dado em outro
		- Quando é double ou float para int, basta colocar (int) na frente da variável (contrário se aplica)
		- int idade = (int) idadeEmDouble;
		- Quando queremos de String para int
		- int idade = Integer.parseInt(idadeEmString);
		- Quando queremos int para String
		- String idade = String.valueOf(idadeEmInt);
		
	## Compilar um arquivo Java
	  - Compilar um arquivo java: "javac $NOME CLASSE$"
		- Arquivo .class é o compilado
		- Rodar um arquivo (que seja .class): "java $NOME ARQUIVO$"
		
	## Classes
	  - Um modelo que vai definir a estrutura de um objeto
		
	## Pacotes
	  - São usados para organizar nossas classes e interfaces em namespaces distintos
		- Basicamente é um agrupamento lógico das classes para agrupar elas no mesmo grupo
		- Definimos que uma classe é de um pacote colocando isso no topo da classe: "package $NOME PACOTE$;"
		- Pacotes são como pastas, os arquivos precisam estar na pasta daquele pacote
		
	## Modificadores de Acesso
	  - Quem controla a visibilidade das nossas classes e métodos
		- Utilizamos por exemplo pra definir se um método será visível por outras classes ou não
		- public: são acessíveis de qualquer lugar
		- default (não colocar um modificador): somente quem estiver no mesmo pacote consegue ver, nem os sub-pacotes conseguem, apenas o próprio pacote
		- private: só consegue ser acessado pela própria classe, por fora não tem como
		- protected: visível para todos do mesmo pacote, para fora desse pacote, sub-pacote, não
		
	## Interfaces
	  - Interface é um modelo que define o que a classe deve seguir, mas somente definimos a carcaça da classe
		- Não podemos instanciar um objeto de uma Interface, ela só serve para ser a carcaça para uma classe, mas, a variável que instancia o objeto pode ser do tipo da Interface
		
	## Classes Abstratas
	  - Também não podem ser instanciadas
		- A diferença de interface para abstract é que na abstract podemos instanciar métodos e fazer o código deles, na interface não
		
	## Herança
	  - Uma classe consegue herdar atributos e métodos de outra classe
		
	## Polimorfismo
	  - Conceito que define que uma classe ou interface pode representar comportamentos de diferentes objetos
		- Objetos do mesmo tipo mas com comportamentos diferentes por, por exemplo, terem suas próprias impletações dos métodos
		- Temos uma interface de por exemplo Fruta. Podemos ter uma classe de Banana e Maça e o método comer() na interface. Ambas as frutas podem comer, mas a banana terá um jeito e a maça outro. Isso é o polimorfismo
		
	## Exceções
	  - Bloco de try catch