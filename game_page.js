variable3 = localStorage.getItem("keyword1");
variable4 = localStorage.getItem("keyword2");


1stplayer_score = 0;
2ndplayer_score = 0;

document.getElementById("1stplayer_name").innerHTML = variable3 + " : ";
document.getElementById("2ndplayer_name").innerHTML = variable4 + " : ";

document.getElementById("1stplayer_score").innerHTML = 1stplayer_score ;
document.getElementById("2ndplayer_score").innerHTML = 2ndplayer_score ;

document.getElementById("player_question").innerHTML = "Question Turn :" + variable3;
document.getElementById("player_answer").innerHTML = "Answer Turn :" + variable4;

function show(){
    numberone = document.getElementById("fan").value;
    numbertwo = document.getElementById("ac").value;
    final_answer = parseInt(numberone) * parseInt(numbertwo);
    console.log(final_answer);
    
    
    variable5 = "<h4>" + numberone + " X " + numbertwo + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check'>";
    check_button = "<br> <button class = 'btn-btn-info' onclick='result()'>Result</button>";
    row= variable5 + input_box + check_button;
    document.getElementById("functionwrk").innerHTML = row;
    document.getElementById("fan").value = "";
    document.getElementById("ac").value = "";
}
