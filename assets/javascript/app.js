var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "1. Which basketball player was in Space Jam?",
  answers: ["Allen Iverson", "Michael Jordan", "Larry Bird", "Scotty Pippen"],
  correctAnswer: "Michael Jordan"
}, {
  question: "2. What was Tommy's last name in Rugrats?",
  answers: ["Pickles", "Lowry", "Green", "Stew"],
  correctAnswer: "Pickles"
}, {
  question: "3. Mr.Feeny was the teacher in which popular tv show?",
  answers: ["Beverly Hills, 90210", "Fresh Prince", "Saved By The Bell", "Boy Meets World"],
  correctAnswer: "Boy Meets World"
}, {
  question: "4. The group members of NSYNC included Justin Timberlake, Lance Bass, JC Chasez, Joey Fatone, and..",
  answers: ["Jeff Timmons", "Brian Litrell", "Chris Kirkpatrick", "Joey McIntyre"],
  correctAnswer: "Joey McIntye"
}, {
  question: "5. \"You are my fire, the one desire\" are the first words of which Backstreet Boys' song?",
  answers: ["Heartbreaker", "I Want It That Way", "We Belong Together", "Bye Bye Bye"],
  correctAnswer: "I Want It That Way"
}, {
  question: "6. Full house took place in which city?",
  answers: ["San Francisco", "Los Angeles", "Atlanta", "New York City"],
  correctAnswer: "San Francisco"
}, {
  question: "7. \"Waterfalls\" was the popular song by which group?",
  answers: ["Salt-N-Peppa", "Destiny's Child", "TLC", "Spice Girls"],
  correctAnswer: "TLC"
}, {
  question: "8. \"White Mystery\" was a flavor of which candy?",
  answers: ["Laffy Taffy", "Starburst", "Warheads", "Airhead"],
  correctAnswer: "Airhead"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
