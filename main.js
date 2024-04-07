/*
* Excersice: Transaction Analysis
*
* Imagine you have a list of
* financial transactions and you
* want to perform various data
* processing operations. Use the
* following instructions as a guide
* to complete the exercise:
*
* 1. Calculate Total Balance:
* Use the reduce() method to calculate
* and display the total balance of
* all transactions.
*
* 2. Find the Largest Transaction
* (Income or Expense): Utilize the
* reduce method to find the
* transaction with the largest
* amount (either income or
* expose) and display it in the console.
*
* 3. Filter Purchase Transactions:
* Use the filter method to obtain
* and display in the console only
* the purchase transactions (with negative amounts)
*
* 4. Find a Transaction by Description:
* Use the find method to search and display
* in the console by its description.
*
* 5. Find the Index of a Transaction by Ammount:
* Employ the findIndex method to find
* and display in the console the index of a
* specific transaction by its amount.
*
* 6.Update Transaction Descriptions:
* Use the forEach method to update the
* descriptions of transactions.
* Add the prefix "Expense:" to
* transactions with negative
* ammounts and "Income:" to
* transactions with positive
* amounts. Display de updated
* transaction in the console.
* Remember to adapt and combine
* these operations as needed
*
*
* */


function main() {

    let transactions = generateTransactionsPool(-25000, 25000, 20)


    getTransaction(transactions)
    getBalance(transactions)
    getLargestTransaction(transactions)
    getPurchaseTransitions(transactions)
    getTransactionByDescription(transactions, transactions[15].description)
    getTransactionIndexByAmount(transactions, transactions[15].amount)
    transactions = setTransactionsType(transactions)



    // Funciones
    function generateTransactionsPool(minTransactionRange, maxTransactionRange, poolLength) {
        // Generating list of financial transactions
        let transactions = []
        let count = 1

        while (transactions.length < poolLength) {

            let randomTransaction = Math.floor(minTransactionRange + Math.random() * (maxTransactionRange - (minTransactionRange)))

            let newTransaction = {
                id: count,
                description: `Transaction #${count}`,
                amount: randomTransaction
            }

            count++

            transactions.push(newTransaction)
        }

        return transactions
    }

    function getTransaction(transactions) {
        // Display all transactions

        console.log('All Transactions: ', ...transactions)

    }

    function getBalance(transactions) {
        // Calculate Total Balance

        const balance = transactions.reduce((sum, value) => sum + value.amount, 0)
        console.log('Balance: ', `$ ${balance}`)

    }

    function getLargestTransaction(transactions) {
        // Find the Largest Transaction

        const LargestTransaction = transactions.reduce((sum, value) => {
            return Math.abs(sum.amount) < Math.abs(value.amount)
                ? value
                : sum
        }, transactions[0])

        console.log('Largest Transaction: ', LargestTransaction)
    }

    function getPurchaseTransitions(transactions) {
        // Filter Purchase Transactions

        console.log('Purchase Transactions: ', ...transactions.filter(transaction => transaction.amount < 0))
    }

    function getTransactionByDescription(transactionsList, description) {
        // Find a Transaction by Description

        const findedTransaction = transactionsList.find(transaction => transaction.description === description)
        console.log('Finded Transaction: ', findedTransaction ? findedTransaction : "No existe ninguna transaccion con esa descripcion.")
    }

    function getTransactionIndexByAmount(transactionsList, transactionAmount) {
        // Find the Index of a Transaction by Ammount

        console.log(
            `Index of ${transactionAmount}: `,
            transactionsList.indexOf(transactionsList.find(transaction => transaction.amount === transactionAmount))
        )
    }

    function setTransactionsType(transactions) {
        // Update Transaction Descriptions in base of his types
        let updatedTransactions = transactions
        updatedTransactions.forEach(
            transaction => transaction.amount <= 0
                ? transaction.description = `Expense: ${transaction.description}`
                : transaction.description = `Income: ${transaction.description}`
        )

        console.log('Updated Transactions: ', ...updatedTransactions)

        return updatedTransactions
    }

}

document.addEventListener('DOMContentLoaded', main)