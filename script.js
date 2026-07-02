function calculateScore(){

    let score = 0;

    let q1 = document.getElementById("q1").value.toLowerCase().trim();
    let q2 = document.getElementById("q2").value.toLowerCase().trim();
    let q3 = document.getElementById("q3").value.toLowerCase().trim();
    let q4 = document.getElementById("q4").value.toLowerCase().trim();
    let q5 = document.getElementById("q5").value.toLowerCase().trim();
    let q6 = document.getElementById("q6").value.toLowerCase().trim();
    let q7 = document.getElementById("q7").value.toLowerCase().trim();
    let q8 = document.getElementById("q8").value.toLowerCase().trim();
    let q9 = document.getElementById("q9").value.trim();
    let q10 = document.getElementById("q10").value.toLowerCase().trim();

    if(q1 === "hypertext markup language") score++;
    if(q2 === "img") score++;
    if(q3 === "color") score++;
    if(q4 === "font-weight") score++;
    if(q5 === "let" || q5 === "var" || q5 === "const") score++;
    if(q6 === "alert") score++;
    if(q7 === "a") score++;
    if(q8 === "background-color") score++;
    if(q9 === "//") score++;
    if(q10 === "console.log") score++;

    let message = "";

    if(score === 10){
        message = "🏆 Excellent! You scored 10/10";
    }
    else if(score >= 8){
        message = "🎉 Very Good! You scored " + score + "/10";
    }
    else if(score >= 5){
        message = "👍 Good! You scored " + score + "/10";
    }
    else{
        message = "📚 Keep Practicing! You scored " + score + "/10";
    }

    document.getElementById("result").innerHTML = message;
}
