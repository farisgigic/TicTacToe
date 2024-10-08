function reset() {
    location.reload();
    console.log("Reloading the page and clears all the fields.");
}

function checking() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;

    b1 = document.getElementById("button1").value;
    b2 = document.getElementById("button2").value;
    b3 = document.getElementById("button3").value;
    b4 = document.getElementById("button4").value;
    b5 = document.getElementById("button5").value;
    b6 = document.getElementById("button6").value;
    b7 = document.getElementById("button7").value;
    b8 = document.getElementById("button8").value;
    b9 = document.getElementById("button9").value;

    var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;

    b1btn = document.getElementById("button1");
    b2btn = document.getElementById("button2");
    b3btn = document.getElementById("button3");
    b4btn = document.getElementById("button4");
    b5btn = document.getElementById("button5");
    b6btn = document.getElementById("button6");
    b7btn = document.getElementById("button7");
    b8btn = document.getElementById("button8");
    b9btn = document.getElementById("button9");

    if ((b1 == "x" || b1 == "X") && (b2 == "x" || b2 == "X") && (b3 == "x" || b3 == "X")) {
        document.getElementById('result').innerHTML = "Player X won !";
        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    } else if ((b1 == "X") && (b5 == "X") && (b9 == "X")) {
        document.getElementById("result").innerHTML = "Player X won";
        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
    } else if ((b1 == "X") && (b4 == "X") && (b7 == "X")) {
        document.getElementById("result").innerHTML = "Player X won";
        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    } else if ((b3 == "X") && (b5 == "X") && (b7 == "X")) {
        document.getElementById("result").innerHTML = "Player X won";
        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    } else if ((b2 == "X") && (b5 == "X") && (b8 == "X")) {
        document.getElementById("result").innerHTML = "Player X won";
        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    } else if ((b2 == "X") && (b5 == "X") && (b8 == "X")) {
        document.getElementById("result").innerHTML = "Player X won";
        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }
    else if ((b3 == "X") && (b6 == "X") && (b9 == "X")) {
        document.getElementById("result").innerHTML = "Player X won";
        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    } else if ((b4 == "X") && (b5 == "X") && (b6 == "X")) {
        document.getElementById("result").innerHTML = "Player X won";
        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    } else if ((b7 == "X") && (b8 == "X") && (b9 == "X")) {
        document.getElementById("result").innerHTML = "Player X won";
        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }


    else if ((b1 == "0") && (b2 == "0") && (b3 == "0")) {
        document.getElementById('result').innerHTML = "Player 0 won !";
        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    } else if ((b1 == "0") && (b5 == "0") && (b9 == "0")) {
        document.getElementById("result").innerHTML = "Player 0 won";
        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
    } else if ((b1 == "0") && (b4 == "0") && (b7 == "0")) {
        document.getElementById("result").innerHTML = "Player 0 won";
        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    } else if ((b3 == "0") && (b5 == "0") && (b7 == "0")) {
        document.getElementById("result").innerHTML = "Player 0 won";
        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    } else if ((b2 == "0") && (b5 == "0") && (b8 == "0")) {
        document.getElementById("result").innerHTML = "Player 0 won";
        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    } else if ((b2 == "0") && (b5 == "0") && (b8 == "0")) {
        document.getElementById("result").innerHTML = "Player 0 won";
        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }
    else if ((b3 == "0") && (b6 == "0") && (b9 == "0")) {
        document.getElementById("result").innerHTML = "Player 0 won";
        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    } else if ((b4 == "0") && (b5 == "0") && (b6 == "0")) {
        document.getElementById("result").innerHTML = "Player 0 won";
        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    } else if ((b7 == "0") && (b8 == "0") && (b9 == "0")) {
        document.getElementById("result").innerHTML = "Player 0 won";
        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }

}
