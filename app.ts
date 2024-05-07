#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let currency: any = {
        "USD": 1,
        "GBP": 0.80,
        "EUR": 0.92,
        "AED": 3.67,
        "CAD": 1.36,
        "AUD": 1.50,
        "SAR": 3.75,
        "INR": 83.48,
        "BDT": 109.74,
        "PKR": 278.49,
}
const answer = await inquirer.prompt([
    {
        message: (chalk.italic("Select currency from you want to convert !!")),
        type: "list",
        choices: ['USD','GBP','EUR','AED','CAD','AUD','SAR','INR','BDT','PKR'],
        name: "from"
    },
    {
        message: (chalk.italic("Select the currency you want to convert in !!")),
        type: "list",
        choices: ['USD','GBP','EUR','AED','CAD','AUD','SAR','INR','BDT','PKR'],
        name: "to"
    },
    {
        message: (chalk.italic.blue("Enter your amount: ")),
        type: "number",
        name: "amount",
    },
]);

let amountFrom = currency[answer.from];
let amountTo = currency[answer.to];
let baseAmount = answer.amount / amountFrom;
let convertedAmount = baseAmount * amountTo;
console.log(chalk.bold.italic.green(`${Math.round(convertedAmount)}`));