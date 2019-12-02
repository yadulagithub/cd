var myquest;
var corr_answer;
var questions;
var answers;
// Question array
var questarr= {};
// Posiible answer array
var ansarr = {};
// Correct answer array
var corarr = {};
// Total questions
var totquest ;
buildquiz();
for (x =0; x < result.length; x++) {
    
    displayquest(next);
}


function buildquiz() {
       // the given link is for Bulbasaur's information
    $.get("https://opentdb.com/api.php?amount=10&type=multiple", function(data){     
        result = data.result;    // array of objects
        totquest = result.length
        for (x =0; x < result.length; x++) {
                myquest = result[x].question;
                // build array of questions
                questarr.push(result[x].question);
                // correct answer
                cortarr[x].push(result[x].correct_answer);
                // build an array of answers 
                anstarr[x][0].push(result[x].correct_answer);
                j = 1;
                for (i = 0 ; i < result[x].incorrect_answers.length ; i ++){
                    anstarr[x][j].push(result[x].correct_answer);
                    j++;
                }
                
        }

    }
}


// display questionsa and answers
function displayquest(next) {
    var nHTML = '';
    document.getElementById("quiz").innerHTML = '<p>' + questarr[next] + '</p>'
     

    document.getElementById("addItem").onclick = function() {
    
       var userInput = prompt("Posiible Answers: ")
       ansarr[next].forEach(function(item) {
       nHTML += '<li>' + item + '</li>';
        });

        document.getElementById("posans").innerHTML = '<ul>' + nHTML + '</ul>'
    }
}




function onsubmitfunction() {
    $(document).ready(function(){

    // the given link is for Bulbasaur's information
    $.get("https://opentdb.com/api.php?amount=10&type=multiple", function(data){     
        result = data.result;    // array of objects
        for (x in result) {
                myquest = x.question;
                corr_answer = correct_answer; 
                document.getElementById("question").innerHTML = "Question is : " + myqust;
                
                if (document.getElementById("answer").value <> correct_answer){
                      alert("Wrong Answer. Try agian");
                }   
        } 
    });

   
});     

}