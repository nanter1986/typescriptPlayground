import { Player} from './player';

export class activityTester {
  readline: any = require('readline');
  r1 = this.readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  player:Player= new Player();


  constructor(){

  }

  showZeroMessage(){
    console.log("Here we will test your activity for usefulness.");
    console.log("You will ask you questions and you will be rating your answer from 0 through 9. ");
    console.log("First of all what is your name?");
    this.r1.question("rate please\n",
      (answer) => {
        this.player.name=answer;
        console.log(`Hello there ${answer}`);
        this.showFirstMessage();
      });
  }

  showFirstMessage() {

    console.log("How difficult is it?");
    this.r1.question("rate please\n",
      (answer) => {
        this.player.difficulty=answer;
        console.log(`you rated ${answer}`);
        this.secondMessage();
      });

  }

  secondMessage =function() {
    console.log("For what % people does it create value?");
    this.r1.question("rate please\n",
      (answer) => {
        this.player.people=answer;
        console.log(`you rated ${answer}`);
        this.thirdMessage();
      });

  }

  thirdMessage=function(){
    console.log("What is the profit for you?");
    this.r1.question("rate please\n",
      (answer) => {
        this.player.profit=answer;
        console.log(`you rated ${answer}`);
        this.fourthMessage();
      });
  }

  fourthMessage(){
    console.log("Your results....");
    console.log(`Worth of idea is ${(this.player.difficulty*this.player.people*this.player.profit)/(9*9*9)}`);
    console.log(`Thank you ${this.player.name}`);
    console.log(`difficulty: ${this.player.difficulty}`);
    console.log(`people: ${this.player.people}`);
    console.log(`profit: ${this.player.profit}`);
    process.exit();
  }

  generalFunction(message:string,whatToDo:()=>void):any{
    console.log(message);
    this.r1.question("rate please\n",
      (answer) => {
        this.player.profit=answer;
        console.log(`you rated ${answer}`);
        whatToDo();
      });
  }
}



let c = new activityTester();
c.showZeroMessage();
