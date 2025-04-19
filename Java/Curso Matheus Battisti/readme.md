# Java
  
	## Classe Scanner
	  - Utilizada para ler entrada de dados do usuário.
		- Métodos Comuns:
		  * nextLine() - Lê uma linha inteira de texto
			* nextInt() - Lê um valor inteiro
			* nextDouble() - Lê um valor decimal
			* next() - Lê uma única palavra
			* close() - Fecha o scanner para não ocorrer vazamentos de memória
	
  ## Comparar Strings
    - Usar método equals() para ser exatamente igual.
    - Usar método equalsIgnoreCase() para ser igual indiferente se é maiúscula ou minúscula
		
	## Math
	  - Math.sqrt(double a) => Raiz quadrada
		- Math.pow(double a, double b) => Eleva um número a para a potência b
		- Math.abs(int a) => Retorna o valor absoluto de um número
		- Math.max(int a, int b) => Retorna o maior número
		
	## Função Anônima
	  - Parecida com a arrow function do JS
		- Runnable tarefa = () -> System.out.println("Mostra algo em tela");
		- Para chamar essa função, fazemos assim: tarefa.run();
    
  ## Labels de Loops
    - Usados para dar o break em todos os Loops que o sistema está rodando
    - Primeiro temos que apelidar um loop:
      externo:
      for () { 
          for () { break externo; }
      }
    - Ao fazermos o break citado acima, ele sai de ambos os loops, sem necessidade de colocar vários breaks em cada loop.
		
	## Arrays
	  - tipo[] nomeArray = new tipo[tamanho];
		- tipo[] nomeArray = { valores };
		- Copiar os dados de um array para outro: int[] arrayClone = array.clone();
		
	## For-each
	  - for (int numero : numeros) {}
		- Não pode mudar o valor de um indice do array com o for-each, somente acessando pelo indice, como por exemplo o for normal
		
	## Diferença entre Classe Abstrata e Interface
	  - Classe Abstrata:
		  * Não pode ser instanciada diretamente.
			* Pode conter métodos abstratos e métodos concretos.
			* Permite a existência de construtores e atributos.
			* Serve para definir um comportamento comum, que pode ser herdado.
			* Uma classe pode herdar apenas uma única classe abstrata.
		- Interface:
		  * Um contrato que define métodos que uma classe deve implementar.
			* Antes do Java 8, continha apenas métodos abstratos. A partir do Java 8, pode ter métodos concretos usando a palavra default ou static no início do método.
			* Não pode ter construtores ou atributos, apenas constantes.
			* Uma classe pode implementar múltiplas interfaces ao mesmo tempo.