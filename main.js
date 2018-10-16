function check(){

    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;

    let correct = 0;

    if(question1 == "Mystery Machine"){ //I remember it being called two different things so that's why there can be 2 answers.//
        correct++;
    }

    if(question2 == "4"){
        correct++;
    }

    if(question3 == "Both"){
        correct++;
    }

    let messages = ["Good job!", "You survived...barely", "Uh, wanna try again?"];
    let images = ["img/winner.gif", "img/ok.gif", "img/lose.gif"];

    let range;

    if(correct < 1){
        range = 2;
    }

    if(correct > 0 && correct < 3){
        range = 1;
    }

    if(correct > 2){
        range = 0;
    }


document.getElementById("after_submit").style.visibility = "visible"; //Makes end page visible to the user
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You survived with " + correct + " points. "; 
document.getElementById("picture").src = images[range]; 
}