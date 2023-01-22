var question_turn = "player1"
var answer_turn = "player2"

player1_score = 0;
player2_score = 0;
function addUser() 
{

    
    localStorage.setItem("player1_name", document.getElementById("player1_input").value);
    localStorage.setItem("player2_name", document.getElementById("player2_input").value);
    window.location = "quiz_game_page.html";
}
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "×" + number2 + "</h4>";
    input_box = "<br>Answer: <input type='number' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check()
{ 
    var player1_name = localStorage.getItem("player1_name");
    var player2_name = localStorage.getItem("player2_name");
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actual_answer)
    {
        var update_player1_score = player1_score + 1;
        window.alert(update_player1_score);
        document.getElementById("player1_score").innerHTML = update_player1_score;
    }
    else
    {
        var update_player2_score = player2_score + 1;
        window.alert(update_player2_score);
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }

    if (question_turn == "player1") 
    {
        var question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name; 
    }

    else
    {
        var question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1") 
    {
        var answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name; 
    }

    else
    {
        var answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("player1_name").innerHTML = player1_name + ":  ";
    document.getElementById("player2_name").innerHTML = player2_name + ":  ";
}