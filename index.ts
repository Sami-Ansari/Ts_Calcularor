#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";


// chalkAnimation.rainbow('Lorem ipsum dolor sit amet');

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function welcome(){
    let rainbowTitle =  chalkAnimation.rainbow('Lets start calculation')
    await sleep()
    rainbowTitle.stop()
    console.log(chalk.blue` 
         _____________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|
        
        `
        
        );
}



async function askQuestion() {
   await inquirer
  .prompt([
    {
        type:"list",
        name:"operator",
        message:"Which operation do you want to perform?:",
        choices: ["Addition","Subtraction","Multiplication","Division"]
    },{
        type:"number",
        name:"num1",
        message: chalk.yellow("Enter the first number ")
    }
    ,
    {
        type:"number",
        name:"num2",
        message:chalk.yellow("Enter the second number ")
    }
  ])
  .then((answers) => {
    // console.log(answers);
     if(answers.operator=="Addition"){
        console.log(chalk.red(`${answers.num1} + ${answers.num2} = ${answers.num1+ answers.num2}`));
    }
    else if(answers.operator=="Subtraction"){
        console.log(chalk.red(`${answers.num1} - ${answers.num2} = ${answers.num1- answers.num2}`));
    }
    else if(answers.operator=="Multiplication"){
        console.log(chalk.red(`${answers.num1} * ${answers.num2} = ${answers.num1* answers.num2}`));
    }
    else if(answers.operator=="Division"){
        console.log(chalk.red(`${answers.num1} / ${answers.num2} = ${answers.num1 /answers.num2}`));
    }
  })

}


await welcome()
async function startAgain(){
    do{
       
        await askQuestion()
       var again= await inquirer
        .prompt({
            type: "input",
            name:"restart",
            message:"Do you ant to continue? Press y or n: "

        })
    }while(again.restart == 'y' || again.restart == 'yes' || again.restart == 'Y' || again.restart == 'Yes'|| again.restart == 'YES')
}

startAgain()