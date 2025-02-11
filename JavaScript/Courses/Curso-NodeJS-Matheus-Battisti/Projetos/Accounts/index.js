const inquire = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

operation();

function operation() {

    inquire.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Transferir',
            'Sair'
        ],
    }])
    .then(answer => {

        const action = answer.action;

        if (action === 'Criar Conta') {
            createAccount();
        } else if (action === 'Consultar Saldo') {
            getAccountBalance();
        } else if (action === 'Depositar') {
            deposit();
        } else if (action === 'Sacar') {
            withdraw();
        } else if (action === 'Transferir') {
            transfer();
        } else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'));
            process.exit();
        }

    })
    .catch(err => console.log(err));

}

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));

    buildAccount();
}

function buildAccount() {
    inquire.prompt([{
        name: 'accountName',
        message: 'Digite um nome para a sua conta: ',
    }])
    .then(answer => {
        
        const accountName = answer.accountName;

        console.info(accountName);

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts');
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Conta já existente!'));
            buildAccount();
            return;
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{ "balance": 0 }', err => console.log(err));

        console.log(chalk.green('Conta foi criada com sucesso!'));

        operation();
    })
    .catch(err => console.log(err));
}

function deposit() {
    inquire.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta? ',
    }])
    .then(answer => {

        const accountName = answer.accountName;

        if (!checkAccount(accountName)) {
            deposit();
            return;
        }

        getAmountForDeposit(accountName);

    })
    .catch(err => console.log(err));
}

function getAmountForDeposit(accountName) {
    inquire.prompt([{
        name: 'amount',
        message: 'Qual o valor do depósito? ',
    }])
    .then(answer => {

        const amount = answer.amount;

        if (!amount) {
            console.log(chalk.bgRed.black('Valor deve ser informado!'));
            getAmountForDeposit();
            return;
        }

        addAmount(accountName, amount);

        operation();

    })
    .catch(err => console.log(err));
}

function addAmount(accountName, amount) {

    const account = getAccount(accountName);

    account.balance = parseFloat(account.balance) + parseFloat(amount);

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(account), err => {
        console.log(err);
    });

    console.log(chalk.green('Depósito efetuado com sucesso!'));
}

function getAccountBalance() {
    inquire.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta? ',
    }])
    .then(answer => {

        const accountName = answer.accountName;

        if (!checkAccount(accountName)) {
            getAccountBalance();
            return;
        }

        const account = getAccount(accountName);

        console.log(chalk.bgBlue.black(`O saldo da conta é R$${parseFloat(account.balance)}`));

        operation();

    })
    .catch(err => console.log(err));
}

function withdraw() {

    inquire.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta? ',
    }])
    .then(answer => {

        const accountName = answer.accountName;

        if (!checkAccount(accountName)) {
            withdraw();
            return;
        }

        getAmountForWithdraw(accountName);

    })
    .catch(err => console.log(err));

}

function getAmountForWithdraw(accountName) {
    inquire.prompt([{
        name: 'amount',
        message: 'Qual o valor do saque? ',
    }])
    .then(answer => {

        const amount = answer.amount;

        if (!amount) {
            console.log(chalk.bgRed.black('Valor deve ser informado!'));
            getAmountForWithdraw();
            return;
        }
        
        const account = getAccount(accountName);

        account.balance = parseFloat(account.balance) - parseFloat(amount);

        if (parseFloat(account.balance) < 0) {
            console.log(chalk.bgRed.black('Valor não pode ser maior que seu saldo!'));
            getAmountForWithdraw(accountName);
            return;
        }

        fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(account), err => {
            console.log(err);
        });

        console.log(chalk.green('Saque efetuado com sucesso!'));

        operation();

    })
    .catch(err => console.log(err));
}

function transfer() {
    inquire.prompt([{
        name: 'accountFrom',
        message: 'Qual o nome da conta de retirada? ',
    },
    {
        name: 'accountTo',
        message: 'Qual o nome da conta que irá receber? ',
    }])
    .then((answer) => {

        const accountFrom = answer.accountFrom;
        const accountTo = answer.accountTo;

        if (!checkAccount(accountFrom)) {
            return transfer();
        } else if (!checkAccount(accountTo)) {
            return transfer();
        }

        return getAmountTransferAndValidate(accountFrom, accountTo);

    })
    .catch(err => console.log(err));
}

function getAmountTransferAndValidate(accountFrom, accountTo) {
    return inquire.prompt([{
        name: 'amount',
        message: 'Qual o valor da transferência? ',
    }])
    .then((answer) => {

        const amount = parseFloat(answer.amount);

        if (!amount) {
            console.log(chalk.bgRed.black('Valor deve ser informado!'));
            getAmountTransferAndValidate(accountFrom, accountTo);
            return;
        }

        const accountFromData = getAccount(accountFrom);

        if (parseFloat(accountFromData.balance) < amount) {
            console.log(chalk.bgRed.black(`Valor não pode ser maior que o saldo! Saldo R$${parseFloat(accountFromData.balance)}`));
            getAmountTransferAndValidate(accountFrom, accountTo);
            return;
        }

        accountFromData.balance = parseFloat(accountFromData.balance) - amount;

        fs.writeFileSync(`accounts/${accountFrom}.json`, JSON.stringify(accountFromData), err => {
            console.log(err);
        });

        const accountToData = getAccount(accountTo);

        accountToData.balance = parseFloat(accountToData.balance) + amount;

        fs.writeFileSync(`accounts/${accountTo}.json`, JSON.stringify(accountToData), err => {
            console.log(err);
        });

        console.log(chalk.green('Transferência realizada com sucesso!'));

        operation();

    })
    .catch(err => console.log(err));
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Conta não encontrada!'));
        return false;
    }

    return true;
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    });

    return JSON.parse(accountJSON);
}