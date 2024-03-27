#! /usr/bin/env node 
import inquirer from "inquirer";
let myBal = 10000;
let myPin = 2233;
const pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin",
        type: "number",
    },
]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let action1 = await inquirer.prompt([
            {
                name: "a1",
                message: "Please enter amount!",
                type: "number",
            },
        ]);
        myBal -= action1.a1;
        if (action1.a1 <= myBal) {
            console.log("Operation successful!");
            console.log(`Your remaining balance is ${myBal}`);
        }
        else if (action1.a1 > myBal) {
            console.log("Insufficient Balance!");
            console.log("Please enter valid amount");
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current balance is ${myBal}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        const action2 = await inquirer.prompt([
            {
                name: "a2",
                message: "Please select an amount",
                type: "list",
                choices: [500, 1000, 5000, 10000],
            },
        ]);
        if (action2.a2 === 500) {
            myBal -= action2.a2;
            console.log("Operation successful!");
            console.log(`Your current balance is ${myBal}`);
        }
        else if (action2.a2 === 1000) {
            myBal -= action2.a2;
            console.log("Operation successful!");
            console.log(`Your current balance is ${myBal}`);
        }
        else if (action2.a2 === 5000) {
            myBal -= action2.a2;
            console.log("Operation successful!");
            console.log(`Your current balance is ${myBal}`);
        }
        else if (action2.a2 === 10000) {
            myBal -= action2.a2;
            console.log("Operation successful!");
            console.log(`Your balance is 0 now`);
        }
    }
}
