let vetor = [];

function adicionarvalor() {
    const valor = number(document.getElementsByld('valor').value);
    if (!isNan(valor)){
      vetor.push(valor);

      const valor = number(document.getElementsByld('tabelaValores')).getElementsByldTagName('tbody')[0];
      const novalinha = tabela.insertrow();
      const celula = novalinha. insertCell(0);
      celula.textcontext = valor;

      document.getElementsByld('valor').value='';
      document.getElementsByld('valor').focus();
    }
}
