"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var activityTester = (function () {
    function activityTester() {
        this.readline = require('readline');
        this.r1 = this.readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.player = new player_1.Player();
        this.secondMessage = function () {
            var _this = this;
            console.log("For what % people does it create value?");
            this.r1.question("rate please\n", function (answer) {
                _this.player.people = answer;
                console.log("you rated " + answer);
                _this.thirdMessage();
            });
        };
        this.thirdMessage = function () {
            var _this = this;
            console.log("What is the profit for you?");
            this.r1.question("rate please\n", function (answer) {
                _this.player.profit = answer;
                console.log("you rated " + answer);
                _this.fourthMessage();
            });
        };
    }
    activityTester.prototype.showZeroMessage = function () {
        var _this = this;
        console.log("Here we will test your activity for usefulness.");
        console.log("You will ask you questions and you will be rating your answer from 0 through 9. ");
        console.log("First of all what is your name?");
        this.r1.question("rate please\n", function (answer) {
            _this.player.name = answer;
            console.log("Hello there " + answer);
            _this.showFirstMessage();
        });
    };
    activityTester.prototype.showFirstMessage = function () {
        var _this = this;
        console.log("How difficult is it?");
        this.r1.question("rate please\n", function (answer) {
            _this.player.difficulty = answer;
            console.log("you rated " + answer);
            _this.secondMessage();
        });
    };
    activityTester.prototype.fourthMessage = function () {
        console.log("Your results....");
        console.log("Worth of idea is " + (this.player.difficulty * this.player.people * this.player.profit) / (9 ^ 3));
        console.log("Thank you " + this.player.name);
        process.exit();
    };
    return activityTester;
}());
exports.activityTester = activityTester;
var c = new activityTester();
c.showZeroMessage();
