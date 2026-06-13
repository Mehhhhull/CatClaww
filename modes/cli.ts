import { Chalk } from "chalk";
import {select,isCancel} from "@clack/prompts";


export async function runCliMode(){
  while(true){
    const mode=await select({
      message:"Choose CLI Sub-mode",
      options:[
        {value:"agent",label:"Agent Mode"},
        {value:"plan",label:"Plan Mode"},
        {value:"ask",label:"Ask Mode"},
        {value:"back",label:"Back to main menu"},
      ],
    });
    if(isCancel(mode) || mode=="back") return;

    if(mode=="agent"){
      console.log("Agent")
    }
    if(mode=="ask"){
      console.log("Ask")
    }
    if(mode=="plan"){
      console.log("Plan")
    }

    if( mode !== 'agent' && mode !=='plan' && mode !== 'ask'){
      console.log(chalk.red('\n That mode is not implemented yet. \n'));
    }
  }
}