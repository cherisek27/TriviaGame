$(document).ready(function(){
  $("#start-button").click(function(){

  var numberCorrect = 0; 
  var numberIncorrect = 0; 
  var question1 = "b"; 
  var question2 = "a";
  var question3 = "d"; 
  var question4 = "d";
  var question5 = "b"; 
  var question6 = "a";
  var question7 = "c";
  var question8 = "d";
   
  var number = 40; 

    $("#start-button").on("click", start);  
    $("#submit").on("click", finish);  
    $("#restart").on("click", restart);  

    function start(){
      counter = setInterval(timer, 1000);
      showMe(".question");
      showMe(".answers");
      showMe("#submit");
      hideMe("#start-button");
      hideMe(".rules");
      hideMe("#restart");
      hideMe("#results");
    } 

    function timer(){
      number--
      $("#show-number").html("<h2>" + number + "</h2>" );
      $("#numberCorrect").html();
        if (number === 0){
        stop(); 
      }
    }
    function stop(){
      clearInterval(counter); 
      $("#results").show();
      $("#restart").show();
    $(".question").hide();
    $(".answers").hide();
    $("#submit").hide();
    } 

    function finish(){
      number = 1; 
      clearInterval(counter); 
      timer();
    }

    function restart(){
      number = 40;
      start();
    }

    function hideMe(e) {
      $(e).hide();
    }
    function showMe(e) {
      $(e).show();
    }

    start(); 
  });
});
