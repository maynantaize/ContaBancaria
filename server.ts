class MinhaContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
  }

  public sacar(valor: number): void {
    if (valor > this.saldo) {
      throw new Error('Saldo insuficiente');
    }
    this.saldo -= valor;
  }

  public getSaldo(): number {
    return this.saldo;
  }
}

(function() {
  const minhaConta = new MinhaContaBancaria(1000);
  console.log(minhaConta.getSaldo()); // Saída: 1000

  minhaConta.depositar(500);
  console.log(minhaConta.getSaldo()); // Saída: 1500

  minhaConta.sacar(200);
  console.log(minhaConta.getSaldo()); // Saída: 1300

  try {
    minhaConta.sacar(2000); // Erro: Saldo insuficiente
  } catch (error) {
    console.log(error.message);
  }
})();
