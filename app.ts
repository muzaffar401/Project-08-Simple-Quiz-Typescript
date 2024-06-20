#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log("\n")
console.log(chalk.magenta("*************** Typescript Quiz Program ***************"))
console.log("\n")


    const quiz: {
        quiz_1: string,
        quiz_2: string,
        quiz_3: string,
        quiz_4: string,
        quiz_5: string,
        quiz_6: string,
        quiz_7: string,
        quiz_8: string,
        quiz_9: string,
        quiz_10: string,
    } = await inquirer.prompt([
        {
            name: "quiz_1",
            type: "list",
            message: chalk.green("1) What is a module in TypeScript?"),
            choices: ["A) A function","B) A data type","C) A way to organize code into separate pieces"]
        },
        {
            name: "quiz_2",
            type: "list",
            message: chalk.green("2) What does encapsulation refer to in the context of modules?"),
            choices: ["A) Accessing external libraries","B) Hiding implementation details from the outside","C) Minimizing code redundancy"]
        },
        {
            name: "quiz_3",
            type: "list",
            message: chalk.green("3) How does TypeScript handle code reuse with modules?"),
            choices: ["A) By providing a built-in code sharing mechanism","B) By using the import and export keywords","C) By automatically importing relevant code snippets"]
        },
        {
            name: "quiz_4",
            type: "list",
            message: chalk.green("4) Which keyword is used to export elements from a module?"),
            choices: ["A) out","B) export","C) external"]
        },
        {
            name: "quiz_5",
            type: "list",
            message: chalk.green("5) Which TypeScript configuration file is commonly used to specify module-related settings?"),
            choices: ["A) tsconfig.json","B) package.json","C) node_modules"]
        },
        {
            name: "quiz_6",
            type: "list",
            message: chalk.green("6) What is the purpose of the Inquirer module in TypeScript applications?"),
            choices: ["A) To handle HTTP requests","B) To create interactive command-line interfaces","C) To manage database connections"]
        },
        {
            name: "quiz_7",
            type: "list",
            message: chalk.green("7) In TypeScript, what does the await keyword do when used with the Inquirer module?"),
            choices: ["A) Imports modules asynchronously","B) Defines asynchronous functions","C) Pauses execution until a promise is resolved"]
        },
        {
            name: "quiz_8",
            type: "list",
            message: chalk.green("8) What is the role of the npm command in the context of installing third-party modules in TypeScript?"),
            choices: ["A) To manage package installation and dependencies","B) To compile TypeScript code to JavaScript","C) To initialize a new TypeScript project"]
        },
        {
            name: "quiz_9",
            type: "list",
            message: chalk.green("9) How would you prompt the user to enter their age using the Inquirer module in TypeScript?"),
            choices: ["A) prompt('Enter your age:');","B) inquirer.prompt({ name: 'age', type: 'number', message: 'Enter your age:' });","C) inquirer.getInput('Enter your age: ');"]
        },
        {
            name: "quiz_10",
            type: "list",
            message: chalk.green("10)  What is  the command to compile a TypeScript file named app.ts into JavaScript using the TypeScript compiler."),
            choices: ["A) tsc app.ts -o app.js","B) tsc app.ts","C) ts-compile app.ts"]
        },

    ])
    console.log("\n")

    let score: number = 0;

    switch (quiz.quiz_1) {
        case "C) A way to organize code into separate pieces":
            console.log(chalk.yellow("1) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("1) Incorrect Answer!"))
    }

    switch (quiz.quiz_2) {
        case "B) Hiding implementation details from the outside":
            console.log(chalk.yellow("2) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("2) Incorrect Answer!"))
    }

    switch (quiz.quiz_3) {
        case "B) By using the import and export keywords":
            console.log(chalk.yellow("3) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("3) Incorrect Answer!"))
    }

    switch (quiz.quiz_4) {
        case "B) export":
            console.log(chalk.yellow("4) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("4) Incorrect Answer!"))
    }

    switch (quiz.quiz_5) {
        case "A) tsconfig.json":
            console.log(chalk.yellow("5) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("5) Incorrect Answer!"))
    }

    switch (quiz.quiz_6) {
        case "B) To create interactive command-line interfaces":
            console.log(chalk.yellow("6) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("6) Incorrect Answer!"))
    }

    switch (quiz.quiz_7) {
        case "C) Pauses execution until a promise is resolved":
            console.log(chalk.yellow("7) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("7) Incorrect Answer!"))
    }

    switch (quiz.quiz_8) {
        case "A) To manage package installation and dependencies":
            console.log(chalk.yellow("8) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("8) Incorrect Answer!"))
    }

    switch (quiz.quiz_9) {
        case "B) inquirer.prompt({ name: 'age', type: 'number', message: 'Enter your age:' });":
            console.log(chalk.yellow("9) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("9) Incorrect Answer!"))
    }

    switch (quiz.quiz_10) {
        case "B) tsc app.ts":
            console.log(chalk.yellow("10) Correct Answer!"))
            ++score;
            break
        default:
            console.log(chalk.red("10) Incorrect Answer!"))
    }

    console.log("\n")


    console.log(chalk.green(`Score : 10/${chalk.yellow(score)}`))


