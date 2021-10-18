/*

Breve explicação do código:

Foi utilizado o pacote readline-sync para que houvesse interação do programa com o usuário. Para baixar esse módulo,
abra o terminal na pasta onde está o arquivo que utilizará o módulo e execute o comando "npm install readline-sync", para mais
informações, acesse https://www.npmjs.com/package/readline-sync;
(Obs.: é necessário a presença do módulo para o funcionameto do código);
(Obs.2: As entradas de usuários não podem possuir alguns caracteres especiais, como letras com acentos, "ç", entre outros...);

Algumas variáveis usadas:

- listev = lista de eventos disponíveis;
- listpartn = lista de participantes do eventos n, onde n é o número do evento;
- listpalesn = lista dos palestrantes do evento n, onde n é o número do evento;
(Obs.: o conteúdo das listas foram criadas para simular um banco de dados com as informações dos participantes e dos palestrantes )
- data = data atual;
- datan = data do evento n, onde n é o número do evento;
(Obs.: A data atual e as datas dos eventos foram criadas a partir da função random: por exemplo, caso o valor 
pseudo-aleatório da data atual for menor que o valor pseudo-aleatório da data do evento 1, será permitido continuar com o cadastro);
- quantn = quantidade de pessoas na lista de eventos n, onde n é o número do evento;
(Obs.: Para simular se quantidade de pessoas em cada uma das lista é inferior que 100, foi usado a função random para inteiros:
caso a quantidade de pessoas em uma lista seja menor que 100, é permitido fazer o cadastro.
Obs.2: O valor de quantn não é igual ao tamanho do listpartn, foi usado apenas para simular uma lista cheia (mesmo que a lista ainda 
não tenha 100 pessoas). Com isso, note que as vezes, o programa irá retornar que o limite de vagas terá sido alcançado em algumas 
listas, apesar de mostrar nas informações que ainda não tenha 100 participantes. Note também que caso seja feito mais do que dois 
cadastros em uma mesma lista o limite será alcançado (cada lista já começa com 98 valores), não sendo permitido um terceiro cadastro
por alcançar o limite nessa mesma lista;
- dados: o objeto "dados" foi utilizado para receber as informações de cadastro do usuário;


Para aumentar as chances das listas apresentarem espaços disponíveis, foram utilizados os parâmetros 10 e 110 nas funções 
random para gerar os valores das variáveis quantn;
O programa provavelmtente ficou maior do que o necessário porque tentei usar mais estruturas condicionais e estruturas de repetição,
de forma aninhada ou não, e recriar de uma melhor forma o fluxograma da atividade online 1;


*/



let exit = false, exit2 = false, exit3 = false, saida = false, result2;
let listpart1 = [], listpart2 = [], listpart3 = [], listpalest1 = [], listpalest2 = [], listpalest3 = [];
let data, data1, data2, data3, quant1, quant2, quant3, dados, palest1, palest2, palest3, palest4, palest5, palest6, quantidade;


palest1 = {
    nome: "Ricardo Teixeira Valência",
    ocupacao: "Desenvolvedor Front-end Senior",
    email: "ricardo@gmail.com",
    idade: 45
}

palest2 = {
    nome: "Rodnei Carvalho Alberto",
    ocupacao: "Desenvolvedor Back-end Senior",
    email: "Rodnei@gmail.com",
    idade: 50  
}

palest3 = {
    nome: "Ana Paula Soares",
    ocupacao: "Egenheira de Software",
    email: "anapaula@hotmail.com",
    idade: 40
}

palest4 = {
    nome: "Violeta da Silva Cristal",
    ocupacao: "Especialista em Computação em Nuvem",
    email: "violeta@Yahoo.com.br",
    idade: 43
}

palest5 = {
    nome: "Rubens Cardoso Filho",
    ocupacao: "Analista de Sistemas",
    email: "rubens@gamil.com",
    idade: 37
}

palest6 = {
    nome: "Jose Marques Braga",
    ocupacao: "Cientista de Dados",
    email: "josemarques@hotmail.com",
    idade: 48
}

listpalest1 = [palest1, palest2, palest3];

listpalest2 = [palest3, palest4, palest5];

listpalest3 = [palest6, palest2, palest1];

listpart1 = ["Amarildo Santos", "Bruno Henrique", "Amora Sales", "Rogerinho do Ingá", "Geovannio Pereira", "Rodinei Castro", "Fernanda Nunes",
"Maurício Souza", "Rogério Silva", "Flávia Prada", "Eduardo Marsseirle", "Lucicréia Moura", "Lulu Silveira", "Luriana Ribeiro",
"Chiquinha do Chaves", "Henrique Perez", "Neymar Júnior", "Renato Girafa", "Cláudia Ferreira", "Glucagon Cerqueiro", "Jorge Lúcio", "Kleber Leite",
"João Silva", "Felipe Souza", "Rodrigo Rodrigues", "Rafael Melo", "Fernado Cascata", "Luiz Otávio", "Enzo Gabriel", "Miguel Henrique", "Ian Isaac",
"Leonardo Manuel", "Danilo Silva", "Lucas Caetano", "Maya Margarida", "Cora Lina", "Beto Carreiro", "Calebe Juan", "Muslera oitavo", "Lince Rodolfo",
"Oscar Romeu", "Benito Inácio", "Gregório Guilhermo", "Nuno Abelardo", "Daniel Favara", "Luis Suarez", "Olga Lolita", "Estrela Linda", "Pandora Gaia",
"Mabel Flora", "Luna Prada", "Benício Dantas", "Dante Ferreira", "Rui Henrique", "Pedro Mauro", "Nicolas Martins", "Davids Micaelito", "Lui Calibre",
"Oliver Oscar", "Rodolfo Nuno", "Zico Coimbra", "Arthur Bernardes", "Gabriel Enzo", "Roberto Carlos", "Adele Pilar", "Luigi Mário", "Anderdon Carlos",
 "Tadeu Schmidt", "Martins Da Vila", "Leonardo Da Vinci", "Renato Cardo", "Carlos Cezar", "Mauro Santana", "Thais Nascimento","Gaspar Santiago",
 "Thais Oliveira", "Cloé Salvio", "Amélia Souza", "Gabriela Castor", "Hortência Carvalho", "Mia Melina", "Igor Santos", "Caio Reitor", "Yago Alberto",
  "Henry Saulo", "Beatriz Silva", "Lorena Liz", "Ana Laura", "Gael Lino", "Levi Bento", "Octávio Sérgio", "Elson Junior", "Waldisney Soares",
"Flavio Correia", "Leo Pitagoras", "Fernada Sales", "Rivaldo Lemos", "Natalia Tamiozzo"];

listpart2 = ["Amarildo Santos", "Bruna Betting", "Amora Sales", "Rogerinho do Ingá", "Geovannio Pereira", "Rodinei Castro", "Fernanda Nunes",
"Maurício Souza", "Rogério Silva", "Flávia Prada", "Player Maroto", "Lucicréia Moura", "Lulu Silveira", "Luriana Ribeiro",
"Chiquinha do Chaves", "Cássio Júnior", "Renata Juqueira", "Claudia Ferreira", "Gabriel Adjunto", "Júlia Dantas", "Samuel Rodrigo", "Igor Santos",
"Caio Reitor", "Yago Alberto", "Henry Saulo", "Beatriz Silva", "Lorena Liz", "Ana Laura", "Gael Lino", "Levi Bento", "Octávio Sérgio", "Ana Clara",
"Naomi Florença", "Tommy Lee", "Benedita Ribeiro", "Gabriela Pereira", "Otavio Walter", "Luciana Vasco", "Rogério Ceni", "Benitez Abel", "Rafael Braga",
"Rodrigo Nestor", "Vinicius Felipe", "Reinaldo Wellington", "Miranda Vazques", "Caio Rigoni", "Igor Nunes", "Maria Júlia", "Diego Rabello", "Flavio Ceará",
"Lucas Cardoso", "Luan Altair", "Fábio Franco", "Luigi Mário", "Anderdon Carlos", "Tadeu Schmidt", "Martins Da Vila", "Leonardo Da Vinci", "Renato Cardo",
"Carlos Cezar", "Mauro Santana", "Thais Nascimento", "Tomás Retangular", "Mateus Salada", "Renato Augusto", "Cássia Pilar", "Eliza Martins", "Ricardo Rios",
"Antonio Bandeiras", "Yuri Alberto", "Gabriel Barbosa", "Castro Alves", "Luciana Alves", "OLiver Tavares", "Waldemar Acetil", "Daniel Martins", "Mauro Cezar",
"Enzo Miguel", "Maria das Glórias", "Maria José", "Ribamar Vincente", "Thiago Moura", "Andrei Luiz", "Higor Nascimento", "Cauã Renato", "Andrade Filho",
"Gaston Salvador", "Cezar Pereira", "Mônica Marzia", "Felix Sampaio", "João Guilherme", "Breno Paredes", "Brenda Garcia", "Hannah Menor", "Samuel Vendetto",
"Cesar Prates", "Renato Alberto", "Valentin Casares"];

listpart3 = ["Ana Paula", "Salvador Dali", "Amora Sales", "Rogerinho do Ingá", "Geovannio Pereira", "Pedro Castro", "Fernanda Nunes",
"Maurício Souza", "Rogério Silva", "Flávia Prada", "Player Sorriso", "Mônica Moura", "Cristiano Marte", "Luriana Ribeiro",
"Chiquinha do Chaves", "Júnior Júnior", "Renato Girafa", "Claudia Ferreira", "Silvinho Castor", "Dexter Adão", "Vicente Junior", "Ricardo Nogueira",
 "Rogério Castro", "Catia Rios", "Luana Souza", "Miguel Castro", "Henrique Ribeiro", "Aline Carvalho", "Beatriz Costa", "Julia Dois", "Igor Budegado",
  "Marina Favara", "Dilma Temer", "Carol Paz", "Bruno Formiga", "Tadeu Dert", "Mauro Cezar", "Ruan Cabreiro", "Oliver Twist", "Otto Patamar", "Jack Titan",
"Rosangela Barro", "Lara Souza", "Julianne Teixeira", "Eliza Pereira", "Ester Jardim", "Kaio Andrade", "Camilo Reis", "Lucas Cardoso", "Lucio Breno",
"Breno Silva", "Mário Carvalho", "Luciano Cortes", "Eduardo Serio", "Gabriel Henrique", "Igor Dos Santos", "Enza Maia", "Carolina Almeida", "Lucy Hungria",
"Messi Vergueiro", "Anderson Silva", "David Luis", "Cezar Pereira", "Arthur Coimbra", "Mario Luigi", "Matheus Sampaio", "Thiago Nascimento", "Odirlei Saldanha",
"Bruno Pessanha", "Paula Andrade", "Tomás Turbando", "Raphinha Davids", "Gael Maroto", "Rubens Carvalho", "Daniel Martins", "André Junior", "Luiz Calebe",
"Romeu Ernesto", "Gaspar Santiago", "Thais Oliveira", "Cloé Salvio", "Amélia Souza", "Gabriela Castor", "Hortência Carvalho", "Mia Melina", "Eduardo Cezar",
"Mabel Dora", "Angelina Costa", "Dom Gaston", "Franco Fábio", "Carlos Eduardo", "João Guilherme", "Enzo Marcio", "Marcos Motta", "Vitor Hugo", "Lui Lee",
"Helena Maria", "Giulia Costa"];


dados = {
    nome: undefined,
    telefone: undefined,
    email: undefined,
    idade: undefined,
    cpf: undefined,
    nomedocachorro: undefined
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

quant1 = getRandomInt(10, 110);
quant2 = getRandomInt(10, 110);
quant3 = getRandomInt(10, 110);


data = Math.random();
data1 = Math.random();
data2 = Math.random();
data3 = Math.random();

console.log("Bem-vindo! \n");

while (saida == false) {

    exit = false, exit2 = false, exit3 = false, saida = false;

    while (exit == false) {

        let resul = require('readline-sync');

        let result1 = resul.question('Escolha entre: \n- informacoes (1) \n- cadastros (2) \n');

        result2 = result1;


        if (result1 == "1"){
            exit = true;

        } else if (result1 == "2"){
            exit = true;

        } else {
            console.log("dados inválidos");

        }

    }

    exit = false;


    switch (result2){
        case "1":
            
            while (exit2 == false) {                               
                let event = require('readline-sync');

                let resuleven = event.question("deseja informacoes de qual evento?\n- 1\n- 2\n- 3 \n");

                if (resuleven == "1"){
                    console.log("Aqui estão as informações sobre os palestrantes do evento 1:");
                    console.log(listpalest1);
                    console.log("Aqui estão as informações sobre os particpantes do evento 1:");
                    console.log(listpart1);
                    console.log(`O Evento 1 tem ${listpart1.length} participantes.`);
                    
                    while (exit3 == false){
                        let decisao = require('readline-sync');

                        let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                        
                        if (decisao1 == "1"){ 
                            exit2 = true;
                            exit3 = true;
                            
                        } else if (decisao1 == "2") {
                            exit2 = true;
                            exit3 = true;
                            saida = true;

                        } else {
                            console.log("Dados invalidos.");

                        }
                    }

                    exit3 = false

                } else if (resuleven == "2"){
                    
                    console.log("Aqui estão as informações sobre os palestrantes do evento 2:");
                    console.log(listpalest2);
                    console.log("Aqui estão as informações sobre os particpantes do evento 2:");
                    console.log(listpart2);
                    console.log(`O Evento 2 tem ${listpart2.length} participantes.`);

                    while (exit3 == false){
                        let decisao = require('readline-sync');

                        let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                        
                        if (decisao1 == "1"){ 
                            exit2 = true;
                            exit3 = true;
                            
                        } else if (decisao1 == "2") {
                            exit2 = true;
                            exit3 = true;
                            saida = true;

                        } else {
                            console.log("Dados invalidos.");
                            
                        }
                    }
                    
                } else if (resuleven == "3"){

                    console.log("Aqui estão as informações sobre os palestrantes do evento 3:");
                    console.log(listpalest3);
                    console.log("Aqui estão as informações sobre os particpantes do evento 3:");
                    console.log(listpart3);
                    console.log(`O Evento 3 tem ${listpart3.length} participantes.`);
                    
                    while (exit3 == false){
                        let decisao = require('readline-sync');

                        let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                        
                        if (decisao1 == "1"){ 
                            exit2 = true;
                            exit3 = true;
                            
                        } else if (decisao1 == "2") {
                            exit2 = true;
                            exit3 = true;
                            saida = true;

                        } else {
                            console.log("Dados invalidos.");
                            
                        }
                    }

                } else {

                    console.log("dados invalidos.")
                }
        
            
            } break;
        case "2":
            
            while (exit2 == false) {

                let event = require('readline-sync');

                let resuleven = event.question("deseja se inscrever em qual evento?\n- 1\n- 2\n- 3 \n");

                if (resuleven == "1"){
                    if (data < data1){
                        if (quant1 < 100 && listpart1.length < 100){
                            let nome = require('readline-sync');

                            let nome1 = nome.question("insira seu nome:");

                            dados.nome = nome1;

                            let telefone = require('readline-sync');

                            let telefone1 = telefone.question("insira seu telefone:");

                            dados.telefone = telefone1;

                            let cpf = require('readline-sync');

                            let cpf1 = cpf.question("insira seu cpf:");

                            dados.cpf = cpf1;

                            let email = require('readline-sync');

                            let email1 = email.question("insira seu email:");

                            dados.email = email1;

                            let nomedocachorro = require('readline-sync');

                            let nomedocachorro1 = nomedocachorro.question("insira o nome do seu cachorro:");
                            
                            dados.nomedocachorro = nomedocachorro1;

                            while (exit == false){

                                let idade = require('readline-sync');

                                let idade1 = idade.question("insira seu idade:");

                                dados.idade = idade1;

                                if (idade1 > 0){

                                    exit = true
                                } else {

                                    console.log("Dados inválidos. O Valor precisa ser um número maior que zero.")
                                }

                            }

                            if (dados.idade > 18){
                                console.log("Cadastro realizado com sucesso! \n Seus dados cadastrados:");
                                console.log(dados);
                                listpart1.push(dados.nome);
                                console.log("A lista do evento atualizada:");
                                console.log(listpart1);

                                while (exit3 == false){
                                    let decisao = require('readline-sync');
            
                                    let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                                    
                                    if (decisao1 == "1"){ 
            
                                        exit2 = true;
                                        exit3 = true;
                                        
                                    } else if (decisao1 == "2") {
            
                                        exit2 = true;
                                        exit3 = true;
                                        saida = true;
            
                                    } else {
            
                                        console.log("Dados invalidos.");
            
                                    }
                                }

                            } else {
                                console.log("Cadastro nao permitido para menores de idade!");

                                while (exit3 == false){
                                    let decisao = require('readline-sync');
            
                                    let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                                    
                                    if (decisao1 == "1"){ 
            
                                        exit2 = true;
                                        exit3 = true;
                                        
                                    } else if (decisao1 == "2") {
            
                                        exit2 = true;
                                        exit3 = true;
                                        saida = true;
            
                                    } else {
            
                                        console.log("Dados invalidos.");
            
                                    }
                                }
                            }

                        } else {
                            console.log("Sinto muito! limite de vagas maxima atingida.");

                            while (exit3 == false){
                                let decisao = require('readline-sync');
        
                                let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                                
                                if (decisao1 == "1"){ 
        
                                    exit2 = true;
                                    exit3 = true;
                                    
                                } else if (decisao1 == "2") {
        
                                    exit2 = true;
                                    exit3 = true;
                                    saida = true;
        
                                } else {
        
                                    console.log("Dados invalidos.");
        
                                }
                            }
                        }

                    } else {

                        console.log("Data invalida! \nSinto muito! O evento ja comecou/passou!");

                        while (exit3 == false){
                            let decisao = require('readline-sync');
    
                            let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                            
                            if (decisao1 == "1"){ 
    
                                exit2 = true;
                                exit3 = true;
                                
                            } else if (decisao1 == "2") {
    
                                exit2 = true;
                                exit3 = true;
                                saida = true;
    
                            } else {
    
                                console.log("Dados invalidos.");
    
                            }
                        }
                    }

                } else if (resuleven == "2"){
                    if (data < data2){
                        if (quant2 < 100 && listpart2.length < 100){
                            let nome = require('readline-sync');

                            let nome1 = nome.question("insira seu nome:");

                            dados.nome = nome1;

                            let telefone = require('readline-sync');

                            let telefone1 = telefone.question("insira seu telefone:");

                            dados.telefone = telefone1;

                            let cpf = require('readline-sync');

                            let cpf1 = cpf.question("insira seu cpf:");

                            dados.cpf = cpf1;

                            let email = require('readline-sync');

                            let email1 = email.question("insira seu email:");

                            dados.email = email1;

                            let nomedocachorro = require('readline-sync');

                            let nomedocachorro1 = nomedocachorro.question("insira o nome do seu cachorro:");
                            
                            dados.nomedocachorro = nomedocachorro1;

                            while (exit == false){

                                let idade = require('readline-sync');

                                let idade1 = idade.question("insira seu idade:");

                                dados.idade = idade1;

                                if (idade1 > 0){

                                    exit = true
                                } else {

                                    console.log("Dados inválidos. O Valor precisa ser um número maior que zero.")
                                }

                            }

                            if (dados.idade > 18){
                                console.log("Cadastro realizado com sucesso! \n Seus dados cadastros:");
                                console.log(dados);
                                console.log("A lista do evento atualizada:");
                                listpart2.push(dados.nome);
                                console.log(listpart2);
                                
                                while (exit3 == false){
                                    let decisao = require('readline-sync');
            
                                    let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                                    
                                    if (decisao1 == "1"){ 
            
                                        exit2 = true;
                                        exit3 = true;
                                        
                                    } else if (decisao1 == "2") {
            
                                        exit2 = true;
                                        exit3 = true;
                                        saida = true;
            
                                    } else {
            
                                        console.log("Dados invalidos.");
            
                                    }
                                }

                            } else {
                                console.log("Cadastro nao permitido para menores de idade!");
                                
                                while (exit3 == false){
                                    let decisao = require('readline-sync');
            
                                    let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                                    
                                    if (decisao1 == "1"){ 
            
                                        exit2 = true;
                                        exit3 = true;
                                        
                                    } else if (decisao1 == "2") {
            
                                        exit2 = true;
                                        exit3 = true;
                                        saida = true;
            
                                    } else {
            
                                        console.log("Dados invalidos.");
            
                                    }
                                }
                            }

                        } else {
                            console.log("Sinto muito! limite de vagas maxima atingida.");
                            
                            while (exit3 == false){
                                let decisao = require('readline-sync');
        
                                let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                                
                                if (decisao1 == "1"){ 
        
                                    exit2 = true;
                                    exit3 = true;
                                    
                                } else if (decisao1 == "2") {
        
                                    exit2 = true;
                                    exit3 = true;
                                    saida = true;
        
                                } else {
        
                                    console.log("Dados invalidos.");
        
                                }
                            }
                        }

                    } else {

                        console.log("Data invalida! \nSinto muito! O evento ja comecou/passou!");

                        while (exit3 == false){
                            let decisao = require('readline-sync');
    
                            let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                            
                            if (decisao1 == "1"){ 
    
                                exit2 = true;
                                exit3 = true;
                                
                            } else if (decisao1 == "2") {
    
                                exit2 = true;
                                exit3 = true;
                                saida = true;
    
                            } else {
    
                                console.log("Dados invalidos.");
    
                            }
                        }
                    }
                } else if (resuleven == "3"){
                    if (data < data3){
                        if (quant3 < 100 && listpart3.length < 100){
                            let nome = require('readline-sync');

                            let nome1 = nome.question("insira seu nome:");

                            dados.nome = nome1;

                            let telefone = require('readline-sync');

                            let telefone1 = telefone.question("insira seu telefone:");

                            dados.telefone = telefone1;

                            let cpf = require('readline-sync');

                            let cpf1 = cpf.question("insira seu cpf:");

                            dados.cpf = cpf1;

                            let email = require('readline-sync');

                            let email1 = email.question("insira seu email:");

                            dados.email = email1;

                            let nomedocachorro = require('readline-sync');

                            let nomedocachorro1 = nomedocachorro.question("insira o nome do seu cachorro:");
                            
                            dados.nomedocachorro = nomedocachorro1;

                            while (exit == false){

                                let idade = require('readline-sync');

                                let idade1 = idade.question("insira seu idade:");

                                dados.idade = idade1;

                                if (idade1 > 0){

                                    exit = true
                                } else {

                                    console.log("Dados inválidos. O Valor precisa ser um número maior que zero.")
                                }

                            }

                            if (dados.idade > 18){
                                console.log("Cadastro realizado com sucesso! \n Seus dados cadastrados:");
                                console.log(dados);
                                console.log("A lista do evento atualizada:");
                                listpart3.push(dados.nome);
                                console.log(listpart3);
                                
                                while (exit3 == false){
                                    let decisao = require('readline-sync');
            
                                    let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                                    
                                    if (decisao1 == "1"){ 
            
                                        exit2 = true;
                                        exit3 = true;
                                        
                                    } else if (decisao1 == "2") {
            
                                        exit2 = true;
                                        exit3 = true;
                                        saida = true;
            
                                    } else {
            
                                        console.log("Dados invalidos.");
            
                                    }
                                }

                            } else {
                                console.log("Cadastro nao permitido para menores de idade!");
                                
                                while (exit3 == false){
                                    let decisao = require('readline-sync');
            
                                    let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                                    
                                    if (decisao1 == "1"){ 
            
                                        exit2 = true;
                                        exit3 = true;
                                        
                                    } else if (decisao1 == "2") {
            
                                        exit2 = true;
                                        exit3 = true;
                                        saida = true;
            
                                    } else {
            
                                        console.log("Dados invalidos.");
            
                                    }
                                }
                            }

                        } else {
                            console.log("Sinto muito! limite de vagas maxima atingida.");
                            
                            while (exit3 == false){
                                let decisao = require('readline-sync');
        
                                let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                                
                                if (decisao1 == "1"){ 
        
                                    exit2 = true;
                                    exit3 = true;
                                    
                                } else if (decisao1 == "2") {
        
                                    exit2 = true;
                                    exit3 = true;
                                    saida = true;
        
                                } else {
        
                                    console.log("Dados invalidos.");
        
                                }
                            }
                        }

                    } else {

                        console.log("Data invalida! \nSinto muito! O evento ja comecou/passou!");

                        while (exit3 == false){
                            let decisao = require('readline-sync');
    
                            let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                            
                            if (decisao1 == "1"){ 
    
                                exit2 = true;
                                exit3 = true;
                                
                            } else if (decisao1 == "2") {
    
                                exit2 = true;
                                exit3 = true;
                                saida = true;
    
                            } else {
    
                                console.log("Dados invalidos.");
    
                            }
                        }
                    }
                } else {

                    console.log("Dado invalido.");
                    
                    while (exit3 == false){
                        let decisao = require('readline-sync');

                        let decisao1 = decisao.question('Deseja sair ou voltar para informacoes e cadastros? \n info e cadastros (1) \n sair (2) \n');
                        
                        if (decisao1 == "1"){ 

                            exit2 = true;
                            exit3 = true;
                            
                        } else if (decisao1 == "2") {

                            exit2 = true;
                            exit3 = true;
                            saida = true;

                        } else {

                            console.log("Dados invalidos.");

                        }
                    }
                }

            } break
        default:
            console.log("algum erro ocorreu aqui!")
            exit = true
            console.log(result2)
            break;
    }   
}


console.log("Obrigado por usar o sistema de cadastros para eventos!");