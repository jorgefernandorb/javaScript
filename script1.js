// ====== 1. VARIÁVEIS E TIPAGEM DINÂMICA ======
const escola = "EEEP Miguel Gurgel"; // Não muda nunca
let nomeAluno = "Maria Souza";        // Pode mudar
let idade = 16;                       // O JS já sabe que é um Number
// Provocando um erro proposital para os alunos verem:
// escola = "Outra Escola"; // Se descommentar esta linha, dará erro!
// ====== 2. TIPOS DE DADOS PRIMITIVOS ======
let matriculaAtiva = true;   // Boolean
let telefone = null;         // Null (explicitamente vazio por enquanto)
let notaFinal;               // Undefined (criada, mas sem valor atribuído)
// Provando a tipagem dinâmica no console
console.log("--- Teste de Tipos ---");
console.log(typeof escola);         // Imprime: string
console.log(typeof idade);          // Imprime: number
console.log(typeof matriculaAtiva); // Imprime: boolean
console.log(typeof notaFinal);      // Imprime: undefined
// ====== 3. CONCATENAÇÃO VS TEMPLATE STRING ======
console.log("--- Manipulação de Textos ---");
// Método Antigo: Concatenação
let mensagemAntiga = "O aluno " + nomeAluno + " estuda na " + escola + " e tem " + idade + " anos.";
console.log(mensagemAntiga);
// Método Moderno: Template String (Atenção ao uso da CRASE)
let mensagemModerna = `O aluno ${nomeAluno} estuda na ${escola} e tem ${idade} anos.`;
console.log(mensagemModerna);
// Vantagem da Template String: Permite quebra de linha e cálculos direto no texto
let exibicaoPlacar = `
   === STATUS DO ALUNO ===
   Nome: ${nomeAluno}
   Daqui a 5 anos ele terá: ${idade + 5} anos.
`;
console.log(exibicaoPlacar);
