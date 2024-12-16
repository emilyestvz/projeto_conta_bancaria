import {colors} from "../util/Colors";

// Criando uma classe
export class Conta{

    // Modelo de dados
    private _numero: number;    // o '_' para identificar que é privado
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Gerar o Método Construtor
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;      // this.numero = numero quer dizer que 'este numero é o atributo'
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    /* Gerar os Metódos Getters e Setters
<<<<<<< HEAD
    getters  - são métodos que retornam valores das propriedades
    sets    - são métodos que alteram valores das propriedades*/
=======
    getters  - são métodos que retornam valores das propriedades - pegar
    sets    - são métodos que alteram/atribuir valores das propriedades - setar */
>>>>>>> main

    // gets 
	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

    // sets
	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}
    
    // Métodos
    public sacar(valor: number): boolean {
        if(valor > this._saldo) {
            console.log('Saldo insuficiente!');
            return false;
        }

        this._saldo -= valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo += valor;
    }
    
    
    public visualizar(): void {

        // variavel local
        let tipo: string;

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
            default:
                tipo = "Conta inválida";
        }



        console.log(colors.fg.magentastrong, `#=`.repeat(30),colors.reset);
        console.log(`\t\tDADOS DA CONTA:
            \n\t\tNúmero da conta: ${this._numero}
            \n\t\tAgência: ${this._agencia}
            \n\t\tTipo da conta: ${tipo}
            \n\t\tTitular: ${this._titular}
            \n\t\tSaldo: R$ ${this._saldo}`)
        console.log(colors.fg.magentastrong, `#=`.repeat(30),colors.reset);
    }

}