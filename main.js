function check(){

    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    
 

    let psycho = 0;
    let hocus = 0;
    let getOut = 0;
    let saw = 0;
    let beetle = 0;



    if(question1 == "day"){ //I remember it being called two different things so that's why there can be 2 answers.//
        hocus++;
    }
    if(question1 == "night"){
        getOut++;
    }

    if(question2 == "Candy Corn"){
        psycho++;
    }
if(question2 == "Chocolate"){
    saw++;
}

if(question2 == "Any candy"){
        hocus++;
    }

    if(question3 == "Disney Princess"){
        beetle++;
    }

    if(question3 == "Serial killer"){
        psycho++;
    }

    if(question3 == "Superhero"){
    hocus++;
    }
    if(question3 == "Witch"){
        hocus++;
    }
    
    if(question3 == "A hypnotist"){
        getOut++;
    }
       
   
   

    let messages = ["Psycho", "Saw", "Beetlejuice", "Hocus Pocus" , "Get Out", "You have multiple movie recommendations."];
    let images = ["img/psycho.gif", "img/saw.gif", "img/beetlejuice.gif", "img/hocuspocus.gif", "img/getout.gif","img/lose.gif"];

    let range;
 //make into cases once program starts to work
    if(beetle > 1){
        range = 2;
    } 
     if(hocus > 1){
        range = 3;
    }
     if(psycho > 1){
        range = 0;
    }
    if(saw > 1){
        range = 1;
    }

    if(getOut > 1){
        range = 4;
    }

    //also make this into cases once program begins working
    if(beetle && psycho == 1){
    range = 5;
    document.getElementById("message").innerHTML = "Watch BeetleJuice & Psycho"
    } 
    if(beetle && saw == 1){
        range = 5;
        document.getElementById("message").innerHTML = "Watch BeetleJuice & Saw"
        }
        if(beetle && hocus == 1){
            range = 5;
            document.getElementById("message").innerHTML = "Watch BeetleJuice & Hocus Pocus"
            }
            if(beetle && getOut == 1){
                range = 5;
                document.getElementById("message").innerHTML = "Watch BeetleJuice & Get Out"
                }
                if(saw && psycho == 1){
                    range = 5;
                    document.getElementById("message").innerHTML = "Watch Saw & Psycho"
                    }
                    if(saw && hocus == 1){
                        range = 5;
                        document.getElementById("message").innerHTML = "Watch Saw & Hocus Pocus"
                        }
                        if(saw && getOut == 1){
                            range = 5;
                            document.getElementById("message").innerHTML = "Watch Saw & Get Out"
                            }
                            if(hocus && psycho == 1){
                                range = 5;
                                document.getElementById("message").innerHTML = "Watch Hocus Pocus & Psycho"
                                }
                                if(getOut && psycho == 1){
                                    range = 5;
                                    document.getElementById("message").innerHTML = "Watch Get Out & Psycho"
                                    }

    

document.getElementById("after_submit").style.visibility = "visible"; //Makes end page visible to the user
document.getElementById("message").innerHTML = "Watch " + messages[range];
//document.getElementById("number_correct").innerHTML = "You survived with " + beetle + hocus+ getOut + beetle + saw + " points. "; 
document.getElementById("picture").src = images[range]; 
}