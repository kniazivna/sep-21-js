//пробую написати як буде працювати з 1 картою

function userCard(balance = 100, transactionLimit = 100, historyLogs, key) {
    let UserCard = {
        balance: balance,
        transactionLimit: transactionLimit,//ліміт коштів, які можна взяти з карти
        historyLogs: historyLogs, //масив об'єктів, який містить інформацію про операції та трансакції даної карти
        key: key
    }
    return {
        getCardOptions: () => {

        },
        putCredits: (putMoney) => UserCard.balance + putMoney,

        takeCredits: (takeMoney) => {
            if (setTransactionLimit > takeMoney && UserCard.balance > takeMoney) {
                UserCard.balance - takeMoney;
            } else console.error("You run out of money");
        },
        setTransactionLimit: (limit) => UserCard.transactionLimit = limit,
        transferCredits: (valueOfCredits) => { //в мене тут буде 1 аргумент, бо працюю з 1 картою
            if (setTransactionLimit > (valueOfCredits + 0.5%) && UserCard.balance > (valueOfCredits + 0.5%)) {
                UserCard.balance - (valueOfCredits + 0.5%);
            } else console.error("You run out of money");
        }
    }
}

