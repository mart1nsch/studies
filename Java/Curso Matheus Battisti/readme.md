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