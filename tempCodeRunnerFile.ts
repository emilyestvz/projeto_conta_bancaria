
import readlinesync = require('readline-sync');
import {colors} from "./src/util/Colors";
//import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';


export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, numDestino, valor:number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    // Criando um objeto da classe ContaController
    const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)

    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));

    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)

    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));

    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

    
    /*// Instancias (objetos) da Classe Conta
    // Contas Correntes
    const cc1 = new ContaCorrente(3, 789, 1, "Fernande", 100000, 1000)
    cc1.visualizar();

    // Saque na CC
    cc1.sacar(100500);
    cc1.visualizar();
    
    // Depósito na CC
    cc1.depositar(2000);
    cc1.visualizar();

    // Conta Poupança
    const cp1 = new ContaPoupanca(2, 789, 2, "Emily", 5000, 10);
    cp1.visualizar();

    cp1.depositar(100);
    cp1.visualizar();*/


    while (true) {

    console.log(colors.fg.magentastrong, `#=`.repeat(30),colors.reset);
    console.log(colors.fg.blackstrong, `\n\t\t🔮 DARK BANK 🔮\n`, colors.reset, 
        `\n\t\t1 - Criar conta
        \n\t\t2-  Listas todas as contas
        \n\t\t3 - Buscar Conta por numero
        \n\t\t4 - Atualizar dados da conta
        \n\t\t5 - Apagar conta
        \n\t\t6 - Sacar
        \n\t\t7 - Depositar
        \n\t\t8 - Transferir valores entre Contas
        \n\t\t9 - Buscar conta por Titular
        \n\t\t0 - Sair\n
        `, colors.reset);
    console.log(colors.fg.magentastrong, `#=`.repeat(30), colors.reset);


        opcao = Number(readlinesync.questionInt('Digite a operacao desejada: '));
        
        if (opcao === 0) {
            console.log(colors.fg.magenta, `Saindo...`);
            about();
            process.exit(0);
        }

        switch (opcao) {
            case 1: 
                console.log(colors.fg.whitestrong, `\n Criar conta`, colors.reset)
                
                console.log(`Digite o número da agência: `);
                agencia = readlinesync.questionInt('');

                console.log(`Digite o nome do titular: `);
                titular = readlinesync.question('');

                console.log(`Escolha o tipo da conta:`);
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false}) + 1;
                
                console.log('Digite o saldo da conta: ');
                saldo = readlinesync.questionFloat('');

                switch(tipo) {
                    case 1:
                        console.log('Digite o limite da conta: ');
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log(`Digite o dia do aniversário da Poupança: `);
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }
                keyPress();
                break;

            case 2: 
                console.log(colors.fg.whitestrong, `\n Listar todas as Contas`, colors.reset)
                contas.listarTodas();
                keyPress();
            break;

            case 3: 
                console.log(colors.fg.whitestrong, `\n Buscar Conta por Número`, colors.reset)
                
                console.log('Digite o número da conta: ');
                numero = readlinesync.questionInt('');

                contas.procurarPorNumero(numero);
            keyPress();
            break;

            case 4: 
                console.log(colors.fg.whitestrong, `\n Atualizar dados da Conta`, colors.reset);

                console.log('Digite o número da conta: ');
                numero = readlinesync.questionInt('');

                let conta = contas.buscarnoArray(numero);

                if(conta !== null) {

                console.log(`Digite o número da agência: `);
                agencia = readlinesync.questionInt('');

                console.log(`Digite o novo nome do titular: `);
                titular = readlinesync.question('');

                console.log('Digite o saldo da conta: ');
                saldo = readlinesync.questionFloat('');

                tipo = conta.tipo;

                switch(tipo) {
                    case 1:
                        console.log('Digite o novo limite da conta: ');
                        limite = readlinesync.questionFloat('');
                        contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log(`Digite o novo dia do aniversário da Poupança: `);
                        aniversario = readlinesync.questionInt('');
                        contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                        break;
                }
                }else {
                console.log(colors.fg.red, 'Conta não encontrada!', colors.reset);
                }
            keyPress();
            break;
            
            case 5:
                console.log(colors.fg.whitestrong, `\n Apagar conta`, colors.reset);

                    console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    contas.deletar(numero);

                keyPress();
            break;
            
            case 6:
                console.log(colors.fg.whitestrong, `\n Sacar`, colors.reset);

                    console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    console.log("Digite o valor do Saque:");
                    valor = readlinesync.questionFloat('');

                    contas.sacar(numero, valor);

                keyPress();
            break;
            
            case 7:
                console.log(colors.fg.whitestrong, `\n Depositar`, colors.reset);

                console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    console.log("Digite o valor do Depósito:");
                    valor = readlinesync.questionFloat('');

                    contas.depositar(numero, valor);

                keyPress();
            break;
            
            case 8:
                console.log(colors.fg.whitestrong, `\n Transferir valores entre contas`, colors.reset);

                console.log("Digite o número da conta de origem:");
                    numero = readlinesync.questionInt('');

                    console.log("Digite o número da conta de destino:");
                    numDestino = readlinesync.questionInt('');

                    console.log("Digite o valor da Transferência:");
                    valor = readlinesync.questionFloat('');

                    contas.transferir(numero, numDestino, valor);

                keyPress();
            break;

            case 9:
                console.log(colors.fg.whitestrong, `\n\nConsulta pelo Titular\n\n`, colors.reset);

                console.log("\nDigite o nome do titular:");
                titular = readlinesync.question('');

                contas.procurarTitular(titular);

                keyPress();
                break;

            default:
                console.log(colors.fg.whitestrong, `\n Opção inválida!`, colors.reset);
                break;
        }
    } 
}

// funções

function about() {
    console.log(colors.fg.blackstrong, 
        `\n✨ Criado por Emily Cristiny Dias
         \n✨ GitHub: https://github.com/emilyestvz`, colors.reset);
    console.log(colors.fg.magentastrong, `#=`.repeat(30), colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();