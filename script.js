function calculateScore(){

    let score = 0;

    let q1 = document.getElementById("q1").value.toLowerCase().trim();
    let q2 = document.getElementById("q2").value.toLowerCase().trim();
    let q3 = document.getElementById("q3").value.toLowerCase().trim();
    let q4 = document.getElementById("q4").value.toLowerCase().trim();
    let q5 = document.getElementById("q5").value.trim();

    if(q1 === "delhi"){
        score++;
    }

    if(q2 === "html"){
        score++;
    }

    if(q3 === "cascading style sheets"){
        score++;
    }

    if(q4 === "sun microsystems"){
        score++;
    }

    if(q5 === "//"){
        score++;
    }

    let message = "";

    if(score === 5){
        message = "Excellent! You scored 5/5 🎉";
    }
    else if(score >= 3){
        message = "Good Job! You scored " + score + "/5 👍";
    }
    else{
        message = "Keep Practicing! You scored " + score + "/5 📚";
    }

    document.getElementById("result").innerHTML = message;
}