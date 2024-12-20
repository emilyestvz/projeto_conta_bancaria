
import readlinesync = require('readline-sync');
import {colors} from "./src/util/Colors";


export function main() {

    let opcao: number;

    while (true) {

    console.log(colors.fg.magentastrong, `#=`.repeat(30),colors.reset);
    console.log(colors.fg.blackstrong,  `\n\t\t🔮 DARK BANK 🔮\n`, colors.reset, 
        `\n\t\t1 - Criar conta
        \n\t\t2-  Listas todas as contas
        \n\t\t3 - Buscar Conta por numero
        \n\t\t4 - Atualizar dados da conta
        \n\t\t5 - Apagar conta
        \n\t\t6 - Sacar
        \n\t\t7 - Depositar
        \n\t\t8 - Transferir valores entre Contas
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
            break;

            case 2: 
                console.log(colors.fg.whitestrong, `\n Listar todas as Contas`, colors.reset)
            break;

            case 3: 
                console.log(colors.fg.whitestrong, `\n Buscar Conta por Número`, colors.reset)
            break;

            case 4: 
                console.log(colors.fg.whitestrong, `\n Atualizar dados da Conta`, colors.reset)
            break;
            
            case 5:
                console.log(colors.fg.whitestrong, `\n Apagar conta`, colors.reset)
            break;
            
            case 6:
                console.log(colors.fg.whitestrong, `\n Sacar`, colors.reset)
            break;
            
            case 7:
                console.log(colors.fg.whitestrong, `\n Depositar`, colors.reset)
            break;
            
            case 8:
                console.log(colors.fg.whitestrong, `\n Transferir valores entre contas`, colors.reset)
            break;

            default:
                console.log(colors.fg.whitestrong, `\n Opção inválida!`, colors.reset)
                break;
        }
    } 
}

// funções

function about() {
    console.log(colors.fg.blackstrong, 
        `\nCriado por Emily Cristiny Dias
         \nGitHub: https://github.com/emilyestvz`, colors.reset);
    console.log(colors.fg.magentastrong, `#=`.repeat(30), colors.reset);
}

main();