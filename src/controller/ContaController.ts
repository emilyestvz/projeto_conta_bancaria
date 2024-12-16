import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    // Coleção ARRAY que vai armazenar os objetetos Conta 
    private listaContas = new Array<Conta>();

    // Controlar os números das contas
    public numero: number = 0;
    
    // MÉTODOS DA REPOSITORY
    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarnoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log('\nConta não encontrada!');
    }      

    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);

        console.log('A conta foi cadastrada com sucesso!')
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarnoArray(conta.numero);

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log('A conta foi atualizada com sucesso!');
        }else
            console.log('\nConta não encontrada!');    
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarnoArray(numero)

		if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
			console.log("A Conta foi Deletada com sucesso!");
		}else 
            console.log('\nConta não Encontrada!')
    }

    // Métodos Bancários
    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarnoArray(numero)

		if (buscaConta !== null) {
            if(buscaConta.sacar(valor) === true)
				console.log("O Saque foi efetuado com sucesso!");
		}else 
            console.log('\nConta não Encontrada!')
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarnoArray(numero)

		if (buscaConta !== null) {
            buscaConta.depositar(valor)
			console.log("O Depósito foi efetuado com sucesso!");
		}else 
            console.log('\nConta não Encontrada!')
    }

    transferir(numOrigem: number, numDestino: number, valor: number): void {
        const contaOrigem = this.buscarnoArray(numOrigem)
		const contaDestino = this.buscarnoArray(numDestino)

		if (contaOrigem !== null && contaDestino !== null) {
            if(contaOrigem.sacar(valor) === true){
				contaDestino.depositar(valor);
				console.log("A Transferência foi efetuada com sucesso!");
			}
		}else 
            console.log('\nConta de Origem e/ou Conta de Destonos não foi Encontrada!')
    }

    // Métodos Auxiliares
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarnoArray(numero: number): Conta | null {
        for(let conta of this.listaContas){
            if(conta.numero == numero){
                return conta;
            }
        }
        return null;
    }
}