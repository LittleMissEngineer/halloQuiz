function check(){

    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    
 

   /* let psycho = 0;
    let hocus = 0;
    let getOut = 0;
    let saw = 0;
    let beetle = 0; */
    let score = 0;


//Question 1
    if(question1 == "day"){ //I remember it being called two different things so that's why there can be 2 answers.//
        score = score + 0.5;
    }
    if(question1 == "night"){
        score = score +3.1;
    }
//Question 2
    if(question2 == "Candy Corn"){
        score = score + 2;
    }
if(question2 == "Chocolate"){
    score = score + 4.5;
}

if(question2 == "Any candy"){
        score = score + 0.5;
    }
//Question 3
    if(question3 == "Disney Princess"){
        score = score + 5;
    }

    if(question3 == "Serial killer"){
        score = score + 2;
    }

    if(question3 == "Superhero"){
    score = score + 0.5;
    }
    if(question3 == "Witch"){
        score = score + 0.5;
    }
    
    if(question3 == "A hypnotist"){
        score = score + 3.1;
    }
       
   
   

    let messages = ["Psycho", "Saw", "Beetlejuice", "Hocus Pocus" , "Get Out", "You have multiple movie recommendations."];
    let images = ["img/psycho.gif", "img/saw.gif", "img/beetlejuice.gif", "img/hocuspocus.gif", "img/getout.gif","img/lose.gif"];

    let range;
 //make into cases once program starts to work
    if(score <= 12 && score >= 6){
        range = 2;
    } 
     if(score <= 9.5 && score >= 1.5 ){
        range = 3;
    }
     if(score <= 10 && score >= 3){
        range = 0;
    }
    if(score <= 12.5 && score >= 5.5){
        range = 1;
    }

    if(score <= 12.6 && score >= 4.1 ){
        range = 4;
    }

    

document.getElementById("after_submit").style.visibility = "visible"; //Makes end page visible to the user
document.getElementById("message").innerHTML = "Watch " + messages[range];
document.getElementById("number_correct").innerHTML = "You survived with " + score + " points. "; 
document.getElementById("picture").src = images[range]; 
}